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
import { initGA } from "./utils/analytics";
import LayoutWithTracking from "./components/LayoutWithTracking";
import OurNetwork from "./features/network/pages/OurNetwork";
import OurNetworkDetail from "./features/network/pages/OurNetworkDetail";
import OurSuccess from "./features/success/pages/OurSuccess";

const App = () => {
  const { drawerPeople } = useSelector((state) => state.main);

  // Initialize Google Analytics on app mount
  useEffect(() => {
    initGA();
  }, []);

  const mainRouter = createBrowserRouter([
    {
      element: (
        <LayoutWithTracking>
          <HomePage />
        </LayoutWithTracking>
      ),
      path: "/*",
    },
    {
      element: (
        <LayoutWithTracking>
          <NewsUpdate />
        </LayoutWithTracking>
      ),
      path: "/news-and-update/",
    },
    {
      element: (
        <LayoutWithTracking>
          <NewsUpdateDetail />
        </LayoutWithTracking>
      ),
      path: "/news-and-update/:slug",
    },
    {
      element: (
        <LayoutWithTracking>
          <OurFirm />
        </LayoutWithTracking>
      ),
      path: "/our-firm/",
    },
    {
      element: (
        <LayoutWithTracking>
          <OurPeople />
        </LayoutWithTracking>
      ),
      path: "/our-people/",
    },
    {
      element: (
        <LayoutWithTracking>
          <OurPractices />
        </LayoutWithTracking>
      ),
      path: "/our-practice-areas/",
    },
    {
      element: (
        <LayoutWithTracking>
          <OurSuccess />
        </LayoutWithTracking>
      ),
      path: "/our-success-stories",
    },
    {
      element: (
        <LayoutWithTracking>
          <OurNetwork />
        </LayoutWithTracking>
      ),
      path: "/our-network",
    },
    {
      element: (
        <LayoutWithTracking>
          <OurNetworkDetail />
        </LayoutWithTracking>
      ),
      path: "/our-network/:slug",
    },
    {
      element: (
        <LayoutWithTracking>
          <OurPracticesDetail />
        </LayoutWithTracking>
      ),
      path: "/our-practice-areas/:slug",
    },
    {
      element: (
        <LayoutWithTracking>
          <Contact />
        </LayoutWithTracking>
      ),
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
