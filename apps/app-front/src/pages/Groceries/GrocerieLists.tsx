import { ShoppingList } from "@/api/groceries/useGetCurrentShoppingList"
import { QueryHandler } from "@/components/utils/queryHandler"
import { useGetShoppingLists } from "@/api/groceries/useGetShoppingLists"

export function GrocerieLists() {
  const shoppingListsQuery = useGetShoppingLists()
  return (
    <QueryHandler<ShoppingList[]> query={shoppingListsQuery}>
      {(shoppingLists: ShoppingList[]) => <div>GrocerieLists</div>}
    </QueryHandler>
  )
}
