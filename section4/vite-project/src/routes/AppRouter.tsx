import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      errorElement: <Error />,
      children: [
        {
          index: true, 
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        }
      ]
    }
  ])
   return (
    <RouterProvider router={router} />
  )
}
