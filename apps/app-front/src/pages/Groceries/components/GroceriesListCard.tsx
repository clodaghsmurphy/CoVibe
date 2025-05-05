import { useDeleteShoppingList } from "@/api/groceries/useDeleteShoppingList"
import { ShoppingList } from "@/api/groceries/useGetCurrentShoppingList"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import dayjs from "dayjs"
import { TrashIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
interface GroceriesListCardProps {
  shoppingList: ShoppingList
}

export const GroceriesListCard = ({ shoppingList }: GroceriesListCardProps) => {
  const navigate = useNavigate()
  const { mutate: deleteShoppingList } = useDeleteShoppingList()
  return (
    <Card className=" cursor-pointer transition-colors bg-white border-none">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="space-y-1 flex flex-col justify-start text-left">
            <p className="font-medium">{dayjs(shoppingList.createdAt).format("D MMMM YYYY")}</p>
            <p className="text-sm text-muted">{shoppingList.items?.length || 0} items</p>
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
        <div className="flex justify-end items-center gap-2">
          <Button
            variant="default"
            onClick={() => {
              navigate(`/groceries/shopping-list/${shoppingList.id}`)
            }}
          >
            View
          </Button>
          <Button variant="ghost" onClick={() => deleteShoppingList(shoppingList.id)}>
            <TrashIcon className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
