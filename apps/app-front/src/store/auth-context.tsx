import { createMachine, assign, assertEvent, setup } from "xstate"
import { createContext, useContext } from "react"
import { httpClient } from "@/api/httpClient/axios"
import { User } from "@/types/auth"

type AuthState = {
  user: User | null
}

type MachineEvent = {
  type: string
  output?: any
}

type EventWithOutput = {
  event: {
    output: {
      success: boolean
      userData?: User
      error?: string
    }
  }
}

export const authMachine = setup({
  types: {
    events: {} as
      | { type: "sign-out" }
      | { type: "sign-in"; username: string; password: string }
      | { type: "sign-up"; username: string; password: string }
      | { type: "switching sign-on page" },
    context: {} as {
      userData: UserData | null
      authenticationErrorToast: SignOnErrorCode | undefined
    },
    tags: "Submitting sign-on form",
  },
  actors: {
    "Fetch user data": fetchUserData,
    "Sign out": signOut,
    "Sign in": signIn,
    "Sign up": signUp,
  },
  actions: {
    "Clear user data in context": assign({
      userData: null,
    }),
    "Clear authentication error toast in context": assign({
      authenticationErrorToast: undefined,
    }),
  },
}).createMachine({
  id: "Authentication",
  context: {
    userData: null,
    authenticationErrorToast: undefined,
  },
  initial: "Checking if user is initially authenticated",
  states: {
    "Checking if user is initially authenticated": {
      invoke: {
        src: "Fetch user data",
        onDone: [
          {
            guard: ({ event }: { event: MachineEvent }) => event.output !== null,
            target: "Authenticated",
            actions: assign({
              userData: ({ event }) => event.output,
            }),
          },
          {
            target: "Not authenticated",
          },
        ],
        onError: {
          target: "Not authenticated",
        },
      },
    },
    Authenticated: {
      initial: "Idle",
      states: {
        Idle: {
          description:
            "The state in which an authenticated user will be most of the time. This is where you handle things a user can only do authenticated.",
          on: {
            "sign-out": {
              target: "Signing out",
            },
          },
        },
        "Signing out": {
          invoke: {
            src: "Sign out",
            onDone: {
              target: "Signed out",
              actions: "Clear user data in context",
            },
            onError: {
              target: "Idle",
              actions: [],
            },
          },
        },
        "Signed out": {
          type: "final",
        },
      },
      onDone: {
        target: "Not authenticated",
      },
    },
    "Not authenticated": {
      entry: "Clear authentication error toast in context",
      initial: "Idle",
      states: {
        Idle: {
          on: {
            "sign-in": {
              target: "Signing in",
            },
            "sign-up": {
              target: "Signing up",
            },
            "switching sign-on page": {
              actions: "Clear authentication error toast in context",
            },
          },
        },
        "Signing in": {
          tags: "Submitting sign-on form",
          invoke: {
            src: "Sign in",
            input: ({ event }: { event: MachineEvent }) => {
              assertEvent(event, "sign-in")

              return {
                username: event.username,
                password: event.password,
              }
            },
            onDone: [
              {
                guard: ({ event }: EventWithOutput) => event.output.success === true,
                target: "Successfully signed on",
                actions: assign({
                  userData: ({ event }) => {
                    if (event.output.success !== true) {
                      throw new Error("Expect to reach this action when output.success equals true")
                    }

                    return event.output.userData
                  },
                }),
              },
              {
                target: "Idle",
                actions: assign({
                  authenticationErrorToast: ({ event }) => {
                    if (event.output.success !== false) {
                      throw new Error(
                        "Expect to reach this action when output.success equals false",
                      )
                    }

                    return event.output.error
                  },
                }),
              },
            ],
            onError: {
              target: "Idle",
              actions: assign({
                authenticationErrorToast: "unknown error",
              }),
            },
          },
        },
        "Signing up": {
          tags: "Submitting sign-on form",
          invoke: {
            src: "Sign up",
            input: ({ event }: { event: MachineEvent }) => {
              assertEvent(event, "sign-up")

              return {
                username: event.username,
                password: event.password,
              }
            },
            onDone: [
              {
                guard: ({ event }) => event.output.success === true,
                target: "Successfully signed on",
                actions: assign({
                  userData: ({ event }) => {
                    if (event.output.success !== true) {
                      throw new Error("Expect to reach this action when output.success equals true")
                    }

                    return event.output.userData
                  },
                }),
              },
              {
                target: "Idle",
                actions: assign({
                  authenticationErrorToast: ({ event }) => {
                    if (event.output.success !== false) {
                      throw new Error(
                        "Expect to reach this action when output.success equals false",
                      )
                    }

                    return event.output.error
                  },
                }),
              },
            ],
            onError: {
              target: "Idle",
              actions: assign({
                authenticationErrorToast: "unknown error",
              }),
            },
          },
        },
        "Successfully signed on": {
          type: "final",
        },
      },
      onDone: {
        target: "Authenticated",
      },
    },
  },
})

type AuthContext = {
  isAuthenticated: boolean
  isLoading: boolean
  user: User | null
  logout: () => void
  authenticate: (user: User) => void
  checkAuth: () => void
}

export const AuthContext = createContext<AuthContext>({} as AuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, send] = useMachine(authMachine)

  const value = {
    isAuthenticated: state.matches("authenticated"),
    isLoading: state.matches("loading"),
    user: state.context.user,
    logout: () => send("LOGOUT"),
    authenticate: (user: User) => send({ type: "AUTHENTICATE", user }),
    checkAuth: () => send("VERIFY"),
  }

  if (value.isLoading) {
    return <div>Loading...</div>
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
