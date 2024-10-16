import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./features/home/pages/HomePage";

const App = () => {
  const mainRouter = createBrowserRouter([
    {
      element: <HomePage />,
      path: "/*",
    },
  ]);

  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  );
};

export default App;
