import { Controller, Get, Param } from "@nestjs/common"
import { GroceryService } from "./grocery.service"
import { ApiTags, ApiOperation, ApiParam } from "@nestjs/swagger"

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
  purchaseFrequency: string
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
