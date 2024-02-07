import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/layout"
import { usePageRoutes } from "./pages"
import Login from "./pages/Login"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {
  const { pageRoutes } = usePageRoutes()
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: pageRoutes,
      errorElement: <main>Error</main>,
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <main>Error</main>,
    },
  ])
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
