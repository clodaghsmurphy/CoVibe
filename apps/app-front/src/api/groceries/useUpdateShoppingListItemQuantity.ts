import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useToast } from "@/components/hooks/use-toast"
import { httpClient } from "@/api/httpClient/axios"

export function useUpdateShoppingListItemQuantity(householdId: string, shoppingListId?: string) {
  const { toast } = useToast()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ itemId, quantity }: { itemId: string; quantity: number }) => {
      await httpClient.patch("/groceries/shopping-list-item/quantity", {
        itemId,
        householdId,
        quantity,
      })
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["shopping-list"] })
      await queryClient.invalidateQueries({ queryKey: ["shopping-list-total", shoppingListId] })
      toast({
        title: "Quantity Updated",
        description: "Item quantity has been updated",
      })
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update quantity",
      })
    },
  })
}
