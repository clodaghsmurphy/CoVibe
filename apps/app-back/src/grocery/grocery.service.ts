import { Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"
import { AddToShoppingListDto } from "./grocery.dto"
import { CreateGroceryDto } from "./grocery.dto"

@Injectable()
export class GroceryService {
  constructor(private prisma: PrismaService) {}

  async findAll(householdId: string) {
    return this.prisma.grocery.findMany({
      where: {
        householdId,
      },
      include: {
        priceRecords: {
          orderBy: {
            date: "desc",
          },
          take: 1,
        },
      },
    })
  }

  async addItemToShoppingList(
    groceryId: string,
    householdId: string,
    quantity: number = 1,
    notes?: string,
  ) {
    // Get the current month's start and end dates
    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0)

    console.log(startOfMonth, endOfMonth)
    // Try to find existing shopping list for this month
    let shoppingList = await this.prisma.shoppingList.findFirst({
      where: {
        householdId,
        month: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    })

    // If no shopping list exists for this month, create one
    if (!shoppingList) {
      shoppingList = await this.prisma.shoppingList.create({
        data: {
          householdId,
          month: startOfMonth,
        },
      })
    }

    const grocery = await this.prisma.grocery.findUnique({
      where: { id: groceryId },
    })

    if (!grocery) {
      throw new Error("Grocery item not found")
    }

    return this.prisma.shoppingListItem.create({
      data: {
        shoppingListId: shoppingList.id,
        groceryId,
        quantity,
        notes,
      },
      include: {
        grocery: true,
      },
    })
  }

  async create(createGroceryDto: CreateGroceryDto) {
    const { price, store, ...groceryData } = createGroceryDto

    // Create the grocery item
    const grocery = await this.prisma.grocery.create({
      data: groceryData,
    })

    // If price is provided, create a price record
    if (price !== undefined) {
      await this.prisma.priceRecord.create({
        data: {
          groceryId: grocery.id,
          price,
          store,
        },
      })
    }

    // Return the grocery with its price records
    return this.prisma.grocery.findUnique({
      where: { id: grocery.id },
      include: {
        priceRecords: {
          orderBy: { date: "desc" },
          take: 1,
        },
      },
    })
  }

  async createGrocery(createGroceryDto: CreateGroceryDto) {
    return this.create(createGroceryDto)
  }

  async getCategories(householdId: string) {
    const distinctCategories = await this.prisma.grocery.findMany({
      where: {
        householdId,
      },
      select: {
        category: true,
      },
      distinct: ["category"],
    })

    console.log(distinctCategories)
    return distinctCategories.map((item) => item.category)
  }

  async addToShoppingList(data: AddToShoppingListDto) {
    const currentDate = new Date()
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)

    // Find or create shopping list for current month
    let shoppingList = await this.prisma.shoppingList.findFirst({
      where: {
        householdId: data.householdId,
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
    })

    if (!shoppingList) {
      shoppingList = await this.prisma.shoppingList.create({
        data: {
          householdId: data.householdId,
          month: currentDate,
        },
      })
    }

    // Add grocery to shopping list
    return this.prisma.shoppingListItem.create({
      data: {
        shoppingListId: shoppingList.id,
        groceryId: data.groceryId,
        quantity: data.quantity || 1,
      },
      include: {
        grocery: true,
      },
    })
  }

  async getCurrentMonthShoppingList(householdId: string) {
    const currentDate = new Date()
    const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
    const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)

    const shoppingList = await this.prisma.shoppingList.findFirst({
      where: {
        householdId,
        createdAt: {
          gte: startOfMonth,
          lte: endOfMonth,
        },
      },
      include: {
        items: {
          include: {
            grocery: true,
          },
        },
      },
    })

    return shoppingList
  }

  async deleteShoppingListItem(itemId: string, householdId: string) {
    // First verify that this item belongs to the household's shopping list
    const item = await this.prisma.shoppingListItem.findFirst({
      where: {
        id: itemId,
        shoppingList: {
          householdId,
        },
      },
    })

    if (!item) {
      throw new Error("Shopping list item not found or does not belong to this household")
    }

    // Delete the item
    return this.prisma.shoppingListItem.delete({
      where: {
        id: itemId,
      },
      include: {
        grocery: true,
      },
    })
  }

  async updateShoppingListItemQuantity(itemId: string, householdId: string, quantity: number) {
    // First verify that this item belongs to the household's shopping list
    const item = await this.prisma.shoppingListItem.findFirst({
      where: {
        id: itemId,
        shoppingList: {
          householdId,
        },
      },
    })

    if (!item) {
      throw new Error("Shopping list item not found or does not belong to this household")
    }

    return this.prisma.shoppingListItem.update({
      where: {
        id: itemId,
      },
      data: {
        quantity,
      },
      include: {
        grocery: true,
      },
    })
  }

  async getShoppingListTotal(shoppingListId: string) {
    const shoppingList = await this.prisma.shoppingList.findFirst({
      where: {
        id: shoppingListId,
      },
      include: {
        items: {
          include: {
            grocery: {
              include: {
                priceRecords: {
                  orderBy: {
                    date: "desc",
                  },
                  take: 1,
                },
              },
            },
          },
        },
      },
    })

    if (!shoppingList) {
      throw new Error("Shopping list not found")
    }

    let total = 0
    const itemsWithoutPrice: string[] = []

    shoppingList.items.forEach((item) => {
      const latestPrice = item.grocery.priceRecords[0]?.price
      if (latestPrice) {
        total += latestPrice * item.quantity
      } else {
        itemsWithoutPrice.push(item.grocery.name)
      }
    })

    return {
      total: parseFloat(total.toFixed(2)),
      itemsWithoutPrice,
      itemCount: shoppingList.items.length,
      itemsWithPriceCount: shoppingList.items.length - itemsWithoutPrice.length,
    }
  }

  async getShoppingListById(householdId: string) {
    return this.prisma.shoppingList.findMany({
      where: {
        householdId,
      },
      include: {
        items: {
          include: {
            grocery: {
              include: {
                priceRecords: true,
              },
            },
          },
        },
      },
    })
  }

  async createShoppingList(householdId: string) {
    return this.prisma.shoppingList.create({
      data: {
        householdId,
        month: new Date(),
      },
    })
  }
}
