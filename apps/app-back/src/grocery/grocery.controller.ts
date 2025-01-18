import { Controller, Get, Post, Body, Param, Delete, Patch } from "@nestjs/common"
import { GroceryService } from "./grocery.service"
import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger"
import {
  AddToShoppingListDto,
  DeleteShoppingListItemDto,
  UpdateShoppingListItemQuantityDto,
} from "./grocery.dto"
import { CreateGroceryDto } from "./grocery.dto"
import { Frequency, Prisma, ShoppingList, ShoppingListItem } from "@covibe/db"

@ApiTags("groceries")
@Controller("groceries")
export class GroceryController {
  constructor(private readonly groceryService: GroceryService) {}

  @Get(":householdId")
  @ApiOperation({ summary: "Get all groceries for a household" })
  @ApiParam({ name: "householdId", required: true, description: "ID of the household" })
  async findAll(@Param("householdId") householdId: string): Promise<GroceryWithPrice[]> {
    const groceries = await this.groceryService.findAll(householdId)
    return groceries.map((grocery) => {
      const currentPriceRecord = grocery.priceRecords?.[0] || null
      return {
        id: grocery.id,
        name: grocery.name,
        category: grocery.category,
        purchaseFrequency: grocery.purchaseFrequency,
        householdId: grocery.householdId,
        link: grocery.link,
        currentPrice: currentPriceRecord?.price || null,
        lastUpdated: currentPriceRecord?.date || null,
        store: currentPriceRecord?.store || null,
      }
    })
  }

  @Get("categories/:householdId")
  @ApiOperation({ summary: "Gets all shopping lists for a household" })
  @ApiParam({ name: "householdId", required: true })
  async getCategories(@Param("householdId") householdId: string) {
    return this.groceryService.getCategories(householdId)
  }

  @Get("shopping-list/:householdId/current")
  @ApiOperation({ summary: "Get current month shopping list" })
  @ApiParam({ name: "householdId", required: true })
  async getCurrentMonthShoppingList(@Param("householdId") householdId: string) {
    return this.groceryService.getCurrentMonthShoppingList(householdId)
  }

  @Get("shopping-lists/:householdId")
  @ApiOperation({ summary: "Get shopping list total price" })
  async getShoppingList(@Param("householdId") householdId: string) {
    const shoppingList = await this.groceryService.getShoppingListById(householdId)
    return shoppingList.map((list) => ({
      ...list,
      total: list.items.reduce(
        (acc: number, item) => acc + (item.grocery?.priceRecords?.[0]?.price ?? 0),
        0,
      ),
    }))
  }

  @Get("shopping-list/:shoppingListId/total")
  @ApiOperation({ summary: "Get shopping list total price" })
  @ApiParam({ name: "shoppingListId", required: true })
  async getShoppingListTotal(@Param("shoppingListId") shoppingListId: string) {
    return this.groceryService.getShoppingListTotal(shoppingListId)
  }

  @Post()
  @ApiOperation({ summary: "Create a new grocery item" })
  async createGrocery(@Body() createGroceryDto: CreateGroceryDto) {
    return this.groceryService.create(createGroceryDto)
  }

  @Post("shopping-list")
  @ApiOperation({ summary: "Add a grocery to shopping list" })
  async addToShoppingList(@Body() data: AddToShoppingListDto) {
    return this.groceryService.addToShoppingList(data)
  }

  @Post("add-to-shopping-list")
  async addToShoppingListOld(@Body() body: AddToShoppingListDto) {
    const { groceryId, householdId, quantity, notes } = body
    return this.groceryService.addItemToShoppingList(groceryId, householdId, quantity, notes)
  }

  @Patch("shopping-list-item/quantity")
  @ApiOperation({ summary: "Update shopping list item quantity" })
  async updateShoppingListItemQuantity(@Body() updateDto: UpdateShoppingListItemQuantityDto) {
    return this.groceryService.updateShoppingListItemQuantity(
      updateDto.itemId,
      updateDto.householdId,
      updateDto.quantity,
    )
  }

  @Delete("shopping-list-item")
  @ApiOperation({ summary: "Delete an item from shopping list" })
  async deleteShoppingListItem(@Body() deleteDto: DeleteShoppingListItemDto) {
    return this.groceryService.deleteShoppingListItem(deleteDto.itemId, deleteDto.householdId)
  }

  @Post("shopping-lists")
  @ApiOperation({ summary: "Create a new shopping list" })
  @ApiParam({ name: "householdId", required: true })
  async createShoppingList(@Param("householdId") householdId: string) {
    return this.groceryService.createShoppingList(householdId)
  }
}

// Types

export interface PriceRecord {
  id: string
  price: number
  date: string
  store?: string
}

export interface GroceryWithPrice {
  id: string
  name: string
  category: string
  purchaseFrequency: keyof typeof Frequency
  householdId: string
  link?: string | null
  currentPrice: number | null
  lastUpdated: Date | null
  store: string | null
}

export interface Grocery {
  id: string
  name: string
  category: string
  purchaseFrequency: string
  householdId: string
  link?: string | null
  priceRecords?: PriceRecord[]
}
