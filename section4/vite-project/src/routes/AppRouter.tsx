
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Error from "../pages/Error";
import Service from "../pages/Service";
import Contact from "../pages/Contact";
// استيراد المكونات المتداخلة
import ContactForm from "../pages/contact/ContactForm";
import Emails from "../pages/contact/Emails";
import Locations from "../pages/contact/Locations";
import PhoneNumber from "../pages/contact/PhoneNumber";

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
        },
        {
          path: "/service",
          element: <Service />,
        },
        {
          path: "/contact",
          element: <Contact />,
          children: [
            {
              path: "contactForm",
              element: <ContactForm />,
            },
            {
              path: "emails",
              element: <Emails />,
            },
            {
              path: "locations",
              element: <Locations />,
            },
            {
              path: "phoneNumber",
              element: <PhoneNumber />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}