import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ShoppingList } from "./useGetCurrentShoppingList"
import { httpClient } from "@/api/httpClient/axios"

export function useCreateShoppingList() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      const response = await httpClient.post<ShoppingList>("/shopping-lists")
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shopping-lists"] })
    },
  })
}
