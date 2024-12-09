import { ShoppingList } from "@/components/ShoppingList"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Combobox } from "@/components/ui/combobox"
import { useGetGroceries } from "@/pages/useGetGroceries"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"

export function Groceries() {
  const { data: groceries, isLoading, error } = useGetGroceries()
  console.log(groceries)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>
  console.log(groceries)
  return (
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
                  groceries
                    ? groceries?.map((grocery) => ({ value: grocery.id, label: grocery.name })) ||
                      []
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
  )
}
