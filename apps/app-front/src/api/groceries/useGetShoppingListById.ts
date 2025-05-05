import { ShoppingList } from "@/api/groceries/useGetCurrentShoppingList"
import { useQuery } from "@tanstack/react-query"
import { httpClient } from "@/api/httpClient/axios"

export const useGetShoppingListById = (shoppingListId: string) => {
  return useQuery<ShoppingList>({
    queryKey: ["shopping-list", shoppingListId],
    queryFn: async () => {
      const response = await httpClient.get<ShoppingList>(
        `/groceries/shopping-list/${shoppingListId}`,
      )
      return response.data
    },
  })
}
