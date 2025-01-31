import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./features/home/pages/HomePage";
import NewsUpdateDetail from "./features/news/pages/NewsUpdateDetail";

const App = () => {
  const mainRouter = createBrowserRouter([
    {
      element: <HomePage />,
      path: "/*",
    },
    {
      element: <NewsUpdateDetail />,
      path: "/news-and-update/:slug",
    },
  ]);

  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  );
};

export default App;
