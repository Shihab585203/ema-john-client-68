import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home";
import Main from "../../Main";
import Courses from "../../Courses";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "../../../routes/Privateroute";
import Checkout from "../../Checkout";
import Orders from "../../Orders";
import ProductsCard from "../../ProductsCard";
import ProductDetails from "../../ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <Courses />
          </PrivateRoute>
        ),
      },
      {
        path: "/products",
        element: (
          <PrivateRoute>
            <ProductsCard />
          </PrivateRoute>
        )
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products/:id",
        element: <ProductDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
