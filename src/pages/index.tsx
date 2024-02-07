import { RouteObject } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Tests from "./Tests"
import { Dalle } from "./Dalle"
import { CreatePoetry } from "./CreatePoetry"

const usePageRoutes = () => {
  const pageRoutes: (RouteObject & {
    disabled: boolean
    label: string
    path: string
  })[] = [
    {
      path: "/",
      element: <Home />,
      disabled: false,
      label: "Home",
    },
    {
      path: "/contact",
      element: <Contact />,
      disabled: false,
      label: "Contact",
    },
    {
      path: "/tests",
      element: <Tests />,
      disabled: false,
      label: "Tests",
    },
    {
      path: "/dalle",
      element: <Dalle />,
      disabled: false,
      label: "Dalle",
    },
    {
      path: "/create",
      element: <CreatePoetry />,
      disabled: false,
      label: "CreateNewPoetry",
    },
  ]

  return { pageRoutes }
}

export { usePageRoutes }
