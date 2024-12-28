import { useQuery } from "@tanstack/react-query"
import { httpClient } from "@/api/httpClient/axios"

interface ShoppingListTotal {
  total: number
  itemsWithoutPrice: string[]
  itemCount: number
  itemsWithPriceCount: number
}

export const useGetShoppingListTotal = (householdId: string, shoppingListId?: string) => {
  return useQuery<ShoppingListTotal>({
    queryKey: ["shopping-list-total", shoppingListId],
    enabled: !!shoppingListId,
    queryFn: async () => {
      const response = await httpClient.get(
        `/groceries/shopping-list/${householdId}/${shoppingListId}/total`
      )
      return response.data
    },
  })
} 