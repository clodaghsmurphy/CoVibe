import { useMutation } from "@tanstack/react-query"
import { httpClient } from "@/api/httpClient/axios"
import { toast } from "@/components/hooks/use-toast"
import { queryClient } from "@/api/queryClient/queryClient"

export const useDeleteShoppingListItem = (householdId: string, shoppingListId: string) => {
  return useMutation({
    mutationFn: async (itemId: string) => {
      await httpClient.delete("/groceries/shopping-list-item", {
        data: {
          itemId,
          householdId,
        },
      })
    },
    onSuccess: (_, itemId) => {
      queryClient.invalidateQueries({ queryKey: ["shopping-list"] })
      queryClient.invalidateQueries({ queryKey: ["shopping-list-total", shoppingListId] })
      toast({
        title: "Item Removed",
        description: `Item has been removed from your shopping list`,
      })
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to remove item from shopping list",
      })
    },
  })
}
