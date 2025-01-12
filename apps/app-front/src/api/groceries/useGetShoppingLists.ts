import { useQuery } from "@tanstack/react-query"
import { httpClient } from "@/api/httpClient/axios"
import { ShoppingList } from "./useGetCurrentShoppingList"
export const useGetShoppingLists = (householdId: string) => {
  return useQuery<ShoppingList[]>({
    queryKey: ["shopping-lists", householdId],
    queryFn: async () => {
      console.log("useGetShoppingLists", householdId)
      const { data } = await httpClient.get<ShoppingList[]>(
        `/groceries/shopping-lists/${householdId}`,
      )
      return data
    },
  })
}
