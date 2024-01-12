import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import { usePageRoutes } from "./pages";
import Login from "./pages/Login";

function App() {
 const { pageRoutes } = usePageRoutes();
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
 ]);
 return <RouterProvider router={router} />;
}

export default App
