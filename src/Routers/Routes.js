import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout/Main";
import Signin from "../pages/Authentication/Signin";
import Signup from "../pages/Authentication/Signup";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "*",
        element: <h1>404 Not Found</h1>
      }
    ],
  },
]);
