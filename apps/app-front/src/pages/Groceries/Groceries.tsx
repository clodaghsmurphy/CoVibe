import { ShoppingList } from "@/pages/Groceries/components/ShoppingList"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Combobox } from "@/components/ui/combobox"
import { Grocery, useGetGroceries } from "@/api/groceries/useGetGroceries"
import { QueryHandler } from "@/components/utils/queryHandler"
import { AuthContext } from "@/store/auth-context"
import { useSelector } from "@xstate/react"

export function Groceries() {
  const actorRef = AuthContext.useActorRef()
  const { user } = useSelector(actorRef, (state) => {
    return {
      user: state.context.user,
    }
  })
  const groceriesQuery = useGetGroceries(user?.householdId)
  return (
    <QueryHandler<Grocery[]> query={groceriesQuery}>
      {(groceries: Grocery[]) => (
        <Card>
          <CardHeader>
            <CardTitle>Groceries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-row gap-2 w-full">
                <div className="w-[70%]">
                  <Combobox
                    options={
                      groceries && groceries.length > 0
                        ? groceries?.map((grocery) => ({
                            value: grocery.id,
                            label: grocery.name,
                          })) || []
                        : []
                    }
                  />
                </div>
                <div className="w-[30%]">
                  <Button className="w-full">Add Grocery</Button>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <ShoppingList />
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </QueryHandler>
  )
}
