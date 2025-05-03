import { useMutation } from "@tanstack/react-query"
import { httpClient } from "@/api/httpClient/axios"
import { queryClient } from "@/api/queryClient/queryClient"
import { toast } from "@/components/hooks/use-toast"
export const useDeleteShoppingList = () => {
  return useMutation({
    mutationFn: async (shoppingListId: string) => {
      await httpClient.delete(`/groceries/shopping-list/${shoppingListId}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["shopping-list"] })
      toast({
        title: "Shopping list deleted",
        description: "Your shopping list has been deleted",
      })
    },
    onError: (error) => {
      console.error(error)
      toast({
        title: "Error deleting shopping list",
        description: "Your shopping list could not be deleted",
      })
    },
  })
}
