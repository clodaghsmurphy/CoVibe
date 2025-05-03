import { useState } from "react"
import { httpClient } from "@/api/httpClient/axios"
import { useNavigate } from "react-router-dom"
import { useSelector } from "@xstate/react"
import { AuthContext } from "@/store/auth-context"
import { LoginForm } from "@/components/login-form"
import { useEffect } from "react"
export const Login = () => {
  const actorRef = AuthContext.useActorRef()
  const handleSubmit = async ({ email, password }: { email: string; password: string }) => {
    actorRef.send({ type: "LOGIN", email, password })
  }
  const navigate = useNavigate()

  const { isAuthenticated, isLoading } = useSelector(actorRef, (state) => {
    return {
      isAuthenticated: state.context.isAuthenticated,
      isLoading: state.context.isLoading,
    }
  })
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/groceries")
    }
  }, [isAuthenticated])

  return <LoginForm handleSubmit={handleSubmit} />
}
