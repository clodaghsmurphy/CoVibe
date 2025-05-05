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
import { ShoppingListItem } from "@/api/groceries/useGetCurrentShoppingList"
import { useUpdateShoppingListItemQuantity } from "@/api/groceries/useUpdateShoppingListItemQuantity"
import { useGetShoppingListById } from "@/api/groceries/useGetShoppingListById"
import { useNavigate, useParams } from "react-router-dom"
const QUANTITY_OPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export function ShoppingList() {
  const params = useParams()
  const shoppingListId = params.shoppingListId
  if (!shoppingListId) {
    return <div>No shopping list id</div>
  }
  const { data: shoppingList, isLoading, error } = useGetShoppingListById(shoppingListId)
  const { data: listTotal } = useGetShoppingListTotal(shoppingListId)
  const navigate = useNavigate()
  const updateQuantity = useUpdateShoppingListItemQuantity(shoppingListId, shoppingListId)

  const deleteItem = useDeleteShoppingListItem(shoppingListId, shoppingListId)
  const handleQuantityChange = (itemId: string, quantity: string) => {
    updateQuantity.mutate({ itemId, quantity: parseInt(quantity) })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
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
          {Object.entries(itemsByCategory).length > 0 ? (
            Object.entries(itemsByCategory).map(([category, items]) => (
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
            ))
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-muted-foreground">No items in this shopping list</p>
            </div>
          )}
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
          <Button
            className="w-full"
            onClick={() => navigate(`/groceries/shopping-list/${shoppingListId}`)}
          >
            View
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
