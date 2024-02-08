import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "./components/layout"
import { usePageRoutes } from "./pages"
import Login from "./pages/Login"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import "src/lib/assets/fonts.css"
import { ThemeProvider, createTheme } from "@mui/material"

const queryClient = new QueryClient()

const theme = createTheme({
  typography: {
    fontFamily: [
      "ThaleahFat",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})

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
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
