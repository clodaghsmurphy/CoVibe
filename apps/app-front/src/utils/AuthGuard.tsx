import { useAuth } from "@/store/auth-context"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const AuthGuard = () => {
  const navigate = useNavigate()
  const { isAuthenticated, isLoading } = useAuth()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login")
    }
  }, [isAuthenticated, navigate])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return isAuthenticated
}

