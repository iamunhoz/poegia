import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/layout"
import { usePageRoutes } from "src/pages"
// import Login from "./pages/Login"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "src/lib/assets/fonts.css"
import { ThemeProvider } from "@mui/material"
import { overridedMuiTheme } from "./lib/styles"

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
      element: <div />,
      errorElement: <main>Error</main>,
    },
  ])
  return (
    <ThemeProvider theme={overridedMuiTheme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
