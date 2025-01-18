import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ShoppingList } from "./useGetCurrentShoppingList"
import { httpClient } from "@/api/httpClient/axios"

export function useCreateShoppingList() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (householdId: string) => {
      const response = await httpClient.post<ShoppingList>(
        `/groceries/shopping-lists/${householdId}`,
      )
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shopping-lists"] })
    },
  })
}
