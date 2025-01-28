import { BrowserRouter as Router } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./App.css"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppRouter } from "./Router"
import { AuthProvider } from "@/store/auth-context"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <div className="min-h-screen bg-background w-full">
            <SidebarProvider>
              <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <AppRouter />
              </main>
            </SidebarProvider>
          </div>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  )
}

export default App
