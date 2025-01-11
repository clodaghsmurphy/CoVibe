import { Routes, Route } from "react-router-dom"
import { Groceries } from "./pages/Groceries/Groceries"
import { GroceriesLists } from "@/pages/Groceries/GrocerieLists"

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<GroceriesLists />}>
        <Route path="/groceries" />
      </Route>
    </Routes>
  )
}
