import ReactGA from "react-ga4";

// Google Analytics Measurement ID
const MEASUREMENT_ID = "G-Y3LGSLRGS8";

/**
 * Initialize Google Analytics
 */
export const initGA = () => {
  ReactGA.initialize(MEASUREMENT_ID, {
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
    gtagOptions: {
      send_page_view: false, // We'll manually track page views
    },
  });
};

/**
 * Track page views
 * @param {string} path - The page path to track
 * @param {string} title - The page title
 */
export const trackPageView = (path, title) => {
  ReactGA.send({
    hitType: "pageview",
    page: path,
    title: title,
  });
};

/**
 * Track custom events
 * @param {string} category - Event category
 * @param {string} action - Event action
 * @param {string} label - Event label (optional)
 * @param {number} value - Event value (optional)
 */
export const trackEvent = (category, action, label = "", value = 0) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

/**
 * Track button clicks
 * @param {string} buttonName - Name of the button clicked
 */
export const trackButtonClick = (buttonName) => {
  trackEvent("Button", "Click", buttonName);
};

/**
 * Track form submissions
 * @param {string} formName - Name of the form submitted
 */
export const trackFormSubmit = (formName) => {
  trackEvent("Form", "Submit", formName);
};

/**
 * Track outbound links
 * @param {string} url - URL of the outbound link
 */
export const trackOutboundLink = (url) => {
  trackEvent("Outbound Link", "Click", url);
};

/**
 * Track search queries
 * @param {string} searchTerm - Search term used
 */
export const trackSearch = (searchTerm) => {
  trackEvent("Search", "Query", searchTerm);
};

/**
 * Track contact form interactions
 * @param {string} action - Action performed (e.g., "Open", "Submit", "Error")
 */
export const trackContactForm = (action) => {
  trackEvent("Contact Form", action);
};

/**
 * Track news article views
 * @param {string} articleTitle - Title of the article
 */
export const trackArticleView = (articleTitle) => {
  trackEvent("News Article", "View", articleTitle);
};

/**
 * Track practice area views
 * @param {string} practiceArea - Name of the practice area
 */
export const trackPracticeAreaView = (practiceArea) => {
  trackEvent("Practice Area", "View", practiceArea);
};

/**
 * Track profile drawer interactions
 * @param {string} personName - Name of the person whose profile was viewed
 */
export const trackProfileView = (personName) => {
  trackEvent("Profile", "View", personName);
};

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackButtonClick,
  trackFormSubmit,
  trackOutboundLink,
  trackSearch,
  trackContactForm,
  trackArticleView,
  trackPracticeAreaView,
  trackProfileView,
};
