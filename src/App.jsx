import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./features/home/pages/HomePage";
import NewsUpdateDetail from "./features/news/pages/NewsUpdateDetail";
import OurFirm from "./features/firm/pages/OurFirm";
import OurPeople from "./features/people/pages/OurPeople";
import NewsUpdate from "./features/news/pages/NewsUpdate";
import Contact from "./features/contact/pages/Contact";
import OurPractices from "./features/practice/pages/OurPractices";
import OurPracticesDetail from "./features/practice/pages/OurPracticesDetail";
import { useSelector } from "react-redux";

const App = () => {
  const { drawerPeople } = useSelector((state) => state.main);
  const mainRouter = createBrowserRouter([
    {
      element: <HomePage />,
      path: "/*",
    },
    {
      element: <NewsUpdate />,
      path: "/news-and-update/",
    },
    {
      element: <NewsUpdateDetail />,
      path: "/news-and-update/:slug",
    },
    {
      element: <OurFirm />,
      path: "/our-firm/",
    },
    {
      element: <OurPeople />,
      path: "/our-people/",
    },
    {
      element: <OurPractices />,
      path: "/our-practice-areas/",
    },
    {
      element: <OurPracticesDetail />,
      path: "/our-practice-areas/:slug",
    },
    {
      element: <Contact />,
      path: "/contact-us/",
    },
  ]);

  // useEffect(() => {
  //   document.body.style.overflow = drawerPeople?.drawer ? "hidden" : "auto";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [drawerPeople?.drawer]);

  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  );
};

export default App;
