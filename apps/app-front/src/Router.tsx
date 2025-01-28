import { Routes, Route } from "react-router-dom"
import { Groceries } from "./pages/Groceries/Groceries"
import { GroceriesLists } from "@/pages/Groceries/GrocerieLists"
import { Login } from "@/pages/Login/Login"

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<GroceriesLists />}>
        <Route path="/groceries" />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
