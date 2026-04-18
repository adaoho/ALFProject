import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "../utils/analytics";

/**
 * Component to track route changes with Google Analytics
 */
const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // Get the page title from the document
    const pageTitle = document.title;

    // Track the page view
    trackPageView(location.pathname + location.search, pageTitle);
  }, [location]);

  return null;
};

export default RouteTracker;
