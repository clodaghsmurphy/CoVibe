import { Routes, Route } from "react-router-dom"
import { GroceriesLists } from "@/pages/Groceries/GrocerieLists"
import { Login } from "@/pages/Login/Login"
import { AuthGuard } from "@/utils/AuthGuard"
import { ShoppingList } from "@/pages/Groceries/components/ShoppingList"

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AuthGuard />}>
        <Route path="groceries" element={<GroceriesLists />} />
        <Route path="groceries/shopping-list/:shoppingListId" element={<ShoppingList />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
