import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"
import { Button } from "./ui/button"
import { X } from "lucide-react"
import { useToast } from "@/components/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Alert, AlertDescription } from "./ui/alert"

interface ShoppingListItem {
  id: string
  quantity: number
  grocery: {
    id: string
    name: string
    category: string
  }
}

interface ShoppingList {
  id: string
  month: string
  items: ShoppingListItem[]
}

interface ShoppingListTotal {
  total: number
  itemsWithoutPrice: string[]
  itemCount: number
  itemsWithPriceCount: number
}

const HOUSEHOLD_ID = "8c698634-d2f9-4d04-b439-c370a93bf48c"
const QUANTITY_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export function ShoppingList() {
  const { toast } = useToast()
  const queryClient = useQueryClient()

  const { data: shoppingList, isLoading } = useQuery<ShoppingList>({
    queryKey: ["shopping-list"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/groceries/shopping-list/${HOUSEHOLD_ID}/current`,
      )
      return response.data
    },
  })

  const { data: listTotal } = useQuery<ShoppingListTotal>({
    queryKey: ["shopping-list-total", shoppingList?.id],
    enabled: !!shoppingList?.id,
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:3000/groceries/shopping-list/${HOUSEHOLD_ID}/${shoppingList?.id}/total`,
      )
      return response.data
    },
  })

  const updateQuantity = useMutation({
    mutationFn: async ({ itemId, quantity }: { itemId: string; quantity: number }) => {
      await axios.patch("http://localhost:3000/groceries/shopping-list-item/quantity", {
        itemId,
        householdId: HOUSEHOLD_ID,
        quantity,
      })
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["shopping-list"] })
      await queryClient.invalidateQueries({ queryKey: ["shopping-list-total", shoppingList?.id] })
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

  const deleteItem = useMutation({
    mutationFn: async (itemId: string) => {
      await axios.delete("http://localhost:3000/groceries/shopping-list-item", {
        data: {
          itemId,
          householdId: HOUSEHOLD_ID,
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

  const handleQuantityChange = (itemId: string, quantity: string) => {
    updateQuantity.mutate({ itemId, quantity: parseInt(quantity) })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!shoppingList) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Shopping List</CardTitle>
          <CardDescription>No shopping list for this month</CardDescription>
        </CardHeader>
      </Card>
    )
  }

  // Group items by category
  const itemsByCategory = shoppingList.items.reduce(
    (acc, item) => {
      const category = item.grocery.category
      if (!acc[category]) {
        acc[category] = []
      }
      acc[category].push(item)
      return acc
    },
    {} as Record<string, ShoppingListItem[]>,
  )

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Shopping List</CardTitle>
        <CardDescription>
          {new Date(shoppingList.month).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {Object.entries(itemsByCategory).map(([category, items]) => (
            <div key={category} className="mb-6">
              <h3 className="mb-2 text-lg font-semibold">{category}</h3>
              <div className="space-y-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-lg border p-2"
                  >
                    <span>{item.grocery.name}</span>
                    <div className="flex items-center gap-2">
                      <Select
                        defaultValue={item.quantity.toString()}
                        onValueChange={(value) => handleQuantityChange(item.id, value)}
                      >
                        <SelectTrigger className="w-[70px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {QUANTITY_OPTIONS.map((q) => (
                            <SelectItem key={q} value={q.toString()}>
                              {q}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => deleteItem.mutate(item.id)}
                        className="h-8 w-8 p-0 text-destructive hover:text-destructive hover:bg-destructive/10"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      {listTotal && (
        <CardFooter className="flex flex-col items-start gap-2 border-t pt-4">
          <div className="flex justify-between w-full text-lg font-semibold">
            <span>Estimated Total:</span>
            <span>€{listTotal.total.toFixed(2)}</span>
          </div>
          {listTotal.itemsWithoutPrice.length > 0 && (
            <Alert variant="destructive" className="mt-2">
              <AlertDescription>
                {listTotal.itemsWithoutPrice.length} items don't have prices:{" "}
                {listTotal.itemsWithoutPrice.join(", ")}
              </AlertDescription>
            </Alert>
          )}
          <div className="text-sm text-muted-foreground">
            Price available for {listTotal.itemsWithPriceCount} out of {listTotal.itemCount} items
          </div>
        </CardFooter>
      )}
    </Card>
  )
}
