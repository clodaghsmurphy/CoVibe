
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../../../components/ui/card"
import { ScrollArea } from "../../../components/ui/scroll-area"
import { Button } from "../../../components/ui/button"
import { X } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select"
import { Alert, AlertDescription } from "../../../components/ui/alert"
import { useGetShoppingListTotal } from "@/api/groceries/useGetShoppingListTotal"
import { useDeleteShoppingListItem } from "@/api/groceries/useDeleteShoppingListItem"
import { useGetCurrentShoppingList } from "@/api/groceries/useGetCurrentShoppingList"
import { ShoppingListItem } from "@/api/groceries/useGetCurrentShoppingList"
import { useUpdateShoppingListItemQuantity } from "@/api/groceries/useUpdateShoppingListItemQuantity"

const HOUSEHOLD_ID = "8c698634-d2f9-4d04-b439-c370a93bf48c"
const QUANTITY_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export function ShoppingList() {
 
  const { data: shoppingList, isLoading } = useGetCurrentShoppingList(HOUSEHOLD_ID)

  const { data: listTotal } = useGetShoppingListTotal(HOUSEHOLD_ID, shoppingList?.id)

  const updateQuantity = useUpdateShoppingListItemQuantity(HOUSEHOLD_ID, shoppingList?.id)

  const deleteItem = useDeleteShoppingListItem(HOUSEHOLD_ID, shoppingList)

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
