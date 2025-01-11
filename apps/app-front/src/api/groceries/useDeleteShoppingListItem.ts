import { useMutation } from "@tanstack/react-query"
import { httpClient } from "@/api/httpClient/axios"
import { toast } from "@/components/hooks/use-toast"
import { queryClient } from "@/api/queryClient/queryClient"
import { ShoppingList } from "@/api/groceries/useGetCurrentShoppingList"

export const useDeleteShoppingListItem = (householdId: string, shoppingList: ShoppingList) => {
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
      const itemName = shoppingList?.items.find((item) => item.id === itemId)?.grocery.name
      queryClient.invalidateQueries({ queryKey: ["shopping-list"] })
      queryClient.invalidateQueries({ queryKey: ["shopping-list-total", shoppingList?.id] })
      toast({
        title: "Item Removed",
        description: `${itemName || "Item"} has been removed from your shopping list`,
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
