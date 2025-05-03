import { Routes, Route } from "react-router-dom"
import { GroceriesLists } from "@/pages/Groceries/GrocerieLists"
import { Login } from "@/pages/Login/Login"
import { AuthGuard } from "@/utils/AuthGuard"

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<AuthGuard />}>
        <Route path="/" element={<GroceriesLists />}>
          <Route path="/groceries" />
        </Route>
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}
