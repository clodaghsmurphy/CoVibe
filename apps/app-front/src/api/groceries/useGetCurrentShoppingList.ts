import { httpClient } from "@/api/httpClient/axios"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface ShoppingListItem {
  id: string
  quantity: number
  grocery: {
    id: string
    name: string
    category: string
  }
}

export interface ShoppingList {
  id: string
  month: string
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
