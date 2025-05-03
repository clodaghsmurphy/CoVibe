import { httpClient } from "@/api/httpClient/axios"
import { createActorContext } from "@xstate/react"
import { assign, createActor, createMachine, fromCallback, fromPromise, setup } from "xstate"

const login = fromPromise(async ({ input }: { input: { email: string; password: string } }) => {
  console.log("login", input)
  const response = await httpClient.post("/auth/login", input)
  return response.data
})

const checkAuth = fromPromise(async () => {
  const response = await httpClient.get("/auth/verify-token")
  return response.data
})

const logout = fromPromise(async () => {
  const response = await httpClient.post("/auth/logout")
  return response.data
})

export const authMachine = setup({
  actors: {
    checkAuth: checkAuth,
    login: login,
    logout: logout,
  },
}).createMachine({
  id: "auth",
  initial: "checkingAuth",
  context: {
    user: null,
    isAuthenticated: false,
    isLoading: false,
    logout: () => {},
    login: ({ input }: { input: { email: string; password: string } }) => {},
    checkAuth: () => {},
  },
  on: {
    LOGIN: {
      actions: assign({
        isLoading: true,
      }),
    },
  },
  states: {
    checkingAuth: {
      invoke: {
        src: checkAuth,
        onDone: {
          target: "authenticated",
          actions: assign({
            user: ({ event }) => event.output,
            isAuthenticated: true,
          }),
        },
        onError: {
          target: "unauthenticated",
        },
      },
    },
    unauthenticated: {
      on: {
        LOGIN: {
          target: "loggingIn",
        },
      },
    },
    loggingIn: {
      invoke: {
        src: login,
        input: ({ event }) => event,
        onDone: {
          target: "authenticated",
          actions: assign({
            user: ({ event }) => event.output,
            isAuthenticated: true,
          }),
        },
        onError: {
          target: "unauthenticated",
        },
      },
    },
    authenticated: {
      on: {
        LOGOUT: {
          target: "loggingOut",
        },
      },
    },
    loggingOut: {
      invoke: {
        src: logout,
        onDone: {
          target: "unauthenticated",
          actions: assign({
            user: null,
            isAuthenticated: false,
          }),
        },
        onError: {
          target: "authenticated", // Optional: stay authenticated on logout failure
        },
      },
    },
  },
})

export const AuthContext = createActorContext(authMachine)
