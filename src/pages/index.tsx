import { RouteObject } from "react-router-dom"
import Home from "./Home"
import Contact from "./Contact"
import Tests from "./Tests"
import { Dalle } from "./Dalle"

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
      label: "Home", //copy.linkHome,
    },
    {
      path: "/contact",
      element: <Contact />,
      disabled: false,
      label: "Contact", //copy.linkContact,
    },
    {
      path: "/tests",
      element: <Tests />,
      disabled: false,
      label: "Tests", //copy.linkContact,
    },
    {
      path: "/dalle",
      element: <Dalle />,
      disabled: false,
      label: "Dalle", //copy.linkContact,
    },
  ]

  return { pageRoutes }
}

export { usePageRoutes }
