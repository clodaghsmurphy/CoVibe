import { PrismaClient } from "@covibe/db"
import { Injectable } from "@nestjs/common"
@Injectable()
export class GroceryService {
  constructor(private prisma: PrismaClient) {}

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
          take: 1, // Get only the most recent price
        },
      },
    })
  }
}
