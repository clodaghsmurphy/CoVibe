import { ShoppingList } from "@/api/groceries/useGetCurrentShoppingList"
import { Card, CardContent } from "@/components/ui/card"
import dayjs from "dayjs"

interface GroceriesListCardProps {
  shoppingList: ShoppingList
}

export const GroceriesListCard = ({ shoppingList }: GroceriesListCardProps) => {
  return (
    <Card className="hover:bg-accent cursor-pointer transition-colors bg-white border-none">
      <CardContent className="p-4">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <p className="font-medium">{dayjs(shoppingList.createdAt).format("D MMMM YYYY")}</p>
            <p className="text-sm text-muted-foreground">{shoppingList.items?.length || 0} items</p>
          </div>
          <div className="text-right">
            <p className="font-medium">
              {shoppingList.total.toLocaleString("en-IE", {
                style: "currency",
                currency: "EUR",
              })}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
