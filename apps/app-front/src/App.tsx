import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "./App.css"
import { Groceries } from "./pages/Groceries/Groceries"
import { SidebarProvider } from "@/components/ui/sidebar"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-gray-100 w-full">
          <SidebarProvider>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <Routes>
                <Route path="/" element={<Groceries />} />
              </Routes>
            </main>
          </SidebarProvider>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
