import { BrowserRouter as Router } from "react-router-dom"
import { QueryClientProvider } from "@tanstack/react-query"
import "./App.css"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppRouter } from "./Router"
import { AuthContext } from "./store/auth-context"
import { getQueryClient } from "./lib/query-client"
import { AppSidebar } from "./layout/AppSideBar"
function App() {
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthContext.Provider>
          <div className="min-h-screen bg-background w-full">
            <SidebarProvider>
              <AppSidebar />
                <SidebarTrigger />
              <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <AppRouter />
              </main>
            </SidebarProvider>
          </div>
        </AuthContext.Provider>
      </Router>
    </QueryClientProvider>
  )
}

export default App
