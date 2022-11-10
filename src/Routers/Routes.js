import { createBrowserRouter } from "react-router-dom";
import { Main } from "../Layout/Main";
import AddService from "../pages/AddService/AddService";
import Signin from "../pages/Authentication/Signin";
import Signup from "../pages/Authentication/Signup";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import MyReviews from "../pages/MyReviews/MyReviews";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
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
        path:"/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
      },
      {
        path: "/add-service",
        element: <AddService></AddService>
      },
      {
        path: "/my-reviews",
        element: <MyReviews></MyReviews>
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ],
  },
]);
