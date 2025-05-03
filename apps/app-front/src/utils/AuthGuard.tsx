// import { useAuth } from "@/store/auth-context"
import { AuthContext } from "@/store/auth-context"
import { useSelector } from "@xstate/react"
import { Outlet, useNavigate } from "react-router-dom"

export const AuthGuard = () => {
  const navigate = useNavigate()
  const actorRef = AuthContext.useActorRef()

  const { isAuthenticated, isLoading } = useSelector(actorRef, (state) => {
    return {
      isAuthenticated: state.context.isAuthenticated,
      isLoading: state.context.isLoading,
    }
  })

  if (!isAuthenticated && !isLoading) {
    navigate("/login")
  }

  return <Outlet />
}
