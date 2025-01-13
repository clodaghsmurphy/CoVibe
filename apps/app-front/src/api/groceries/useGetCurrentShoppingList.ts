import { httpClient } from "@/api/httpClient/axios"
import { useQuery } from "@tanstack/react-query"

export interface ShoppingListItem {
  id: string
  quantity: number
  grocery: {
    id: string
    name: string
    category: string
  }
  orderedAt?: Date
  createdAt: Date
}

export interface ShoppingList {
  id: string
  month: string
  total: number
  createdAt: Date
  orderedAt: Date | null
  items: ShoppingListItem[]
}

export function useGetCurrentShoppingList(householdId: string) {
  return useQuery<ShoppingList>({
    queryKey: ["shopping-list"],
    queryFn: async () => {
      const response = await httpClient.get(`/groceries/shopping-list/${householdId}/current`)
      return response.data
    },
  })
}
