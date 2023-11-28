import { RouteObject } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";

const usePageRoutes = () => {
  const pageRoutes: (RouteObject & {
    disabled: boolean;
    label: string;
    path: string;
  })[] = [
    {
      path: "/",
      element: <Home />,
      disabled: false,
      label: "Home"//copy.linkHome,
    },
     {
      path: "/contact",
      element: <Contact />,
      disabled: false,
      label: "Contact" //copy.linkContact,
    },
  ];

  return { pageRoutes };
};

export { usePageRoutes };
