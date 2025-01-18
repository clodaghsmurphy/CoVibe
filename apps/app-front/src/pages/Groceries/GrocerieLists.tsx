import { ShoppingList } from "@/api/groceries/useGetCurrentShoppingList"
import { QueryHandler } from "@/components/utils/queryHandler"
import { useGetShoppingLists } from "@/api/groceries/useGetShoppingLists"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import dayjs from "dayjs"
import { GroceriesListCard } from "./components/GroceriesListCard"
import { useCreateShoppingList } from "@/api/groceries/useCreateShoppingList"

export function GroceriesLists() {
  const shoppingListsQuery = useGetShoppingLists("8c698634-d2f9-4d04-b439-c370a93bf48c")
  const createShoppingList = useCreateShoppingList()

  const handleCreateList = () => {
    createShoppingList.mutate("8c698634-d2f9-4d04-b439-c370a93bf48c")
  }

  return (
    <Card className="min-w-[400px]">
      <CardHeader>
        <div className="flex flex-row justify-between">
          <CardTitle className="text-lg">Groceries</CardTitle>
          <Button
            variant="secondary"
            onClick={handleCreateList}
            disabled={createShoppingList.isPending}
          >
            <PlusIcon className="w-4 h-4" />
            New Purchase
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <QueryHandler<ShoppingList[]> query={shoppingListsQuery}>
          {(shoppingLists: ShoppingList[]) => (
            <>
              <p className="text-sm font-medium text-left text-muted">
                {`Last purchase: ${
                  shoppingLists[0].orderedAt
                    ? dayjs(shoppingLists[0].orderedAt).format("DD/MM/YYYY")
                    : "-"
                }`}
              </p>
              <div className="flex flex-col gap-2">
                {shoppingLists.map((shoppingList) => (
                  <div key={shoppingList.id}>
                    <GroceriesListCard shoppingList={shoppingList} />
                  </div>
                ))}
              </div>
            </>
          )}
        </QueryHandler>
      </CardContent>
    </Card>
  )
}
