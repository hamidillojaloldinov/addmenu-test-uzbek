import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layoute from "./pages/Layoute";
import Home from "./pages/Home";
import Beer from "./pages/Beer";
import Burgers from "./pages/Burgers";
import Tea from "./pages/Tea";
import Food from "./pages/Food";
import Order from "./pages/Order";
import Pizzas from "./pages/Pizzas";
import Tests from "./pages/Tests";
import Coffee from "./pages/Coffee";
import Desserts from "./pages/Desserts";
import Salad from "./pages/Salad";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layoute />,
      errorElement: "Error",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/beer",
          element: <Beer />,
        },
        {
          path: "/burgers",
          element: <Burgers />,
        },
        {
          path: "/food",
          element: <Food />,
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/tea",
          element: <Tea />,
        },
        {
          path: "/pizza",
          element: <Pizzas />,
        },
        {
          path: "/tests",
          element: <Tests />,
        },
        {
          path: "/coffee",
          element: <Coffee />,
        },
        {
          path: "/dessert",
          element: <Desserts />,
        },
        {
          path: "/salad",
          element: <Salad />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
