import { BrowserRouter as Router } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import "./App.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppRouter } from "./Router"
import { AuthContext } from "./store/auth-context"
import { getQueryClient } from "./lib/query-client"
import { AppSidebar } from "./layout/AppSideBar"
import { Toaster } from "@/components/ui/toaster"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
function App() {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthContext.Provider>
          <Toaster />
          <div className="min-h-screen bg-background w-full">
            <SidebarProvider>
              <AppSidebar />
              <SidebarTrigger className="absolute top-2 left-2" />
              <main className="mx-auto py-6 sm:px-6 lg:px-8">
                <AppRouter />
              </main>
            </SidebarProvider>
          </div>
        </AuthContext.Provider>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
