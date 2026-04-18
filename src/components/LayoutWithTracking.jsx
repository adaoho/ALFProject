import React from "react";
import RouteTracker from "./RouteTracker";
import RankMathSEO from "./RankMathSEO";

const LayoutWithTracking = ({ children }) => {
  return (
    <>
      <RankMathSEO />
      <RouteTracker />
      {children}
    </>
  );
};

export default LayoutWithTracking;
