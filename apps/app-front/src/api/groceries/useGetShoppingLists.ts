import { useQuery } from "@tanstack/react-query"
import { httpClient } from "@/api/httpClient/axios"
import { ShoppingList } from "./useGetCurrentShoppingList"
export const useGetShoppingLists = () => {
  return useQuery<ShoppingList[]>({
    queryKey: ["shopping-lists"],
    queryFn: async () => {
      const { data } = await httpClient.get<ShoppingList[]>("/groceries/shopping-lists")
      return data
    },
  })
}
