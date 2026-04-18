# Google Analytics Setup and Usage Guide

## Overview
This project uses **Google Analytics 4 (GA4)** with the tracking ID: `G-Y3LGSLRGS8`

The analytics implementation uses the `react-ga4` package and is configured to automatically track:
- Page views on route changes
- Custom events throughout the application

## Installation
The package is already installed. If you need to reinstall:
```bash
npm install react-ga4
```

## Configuration Files

### 1. Analytics Utility (`src/utils/analytics.js`)
Contains all analytics functions and the GA initialization.

### 2. Route Tracker (`src/components/RouteTracker.jsx`)
Automatically tracks page views when routes change.

### 3. Layout Wrapper (`src/components/LayoutWithTracking.jsx`)
Wraps each route with the RouteTracker component.

### 4. App Configuration (`src/App.jsx`)
Initializes Google Analytics on app mount.

## Automatic Tracking

### Page Views
Page views are automatically tracked when users navigate between routes. No additional code is needed.

## Manual Event Tracking

You can track custom events throughout your application using the following functions:

### Import the Analytics Functions
```javascript
import {
  trackEvent,
  trackButtonClick,
  trackFormSubmit,
  trackOutboundLink,
  trackSearch,
  trackContactForm,
  trackArticleView,
  trackPracticeAreaView,
  trackProfileView,
} from "../utils/analytics";
```

### Usage Examples

#### 1. Track Button Clicks
```javascript
import { trackButtonClick } from "../utils/analytics";

const handleClick = () => {
  trackButtonClick("Contact Us Button");
  // Your button logic...
};
```

#### 2. Track Form Submissions
```javascript
import { trackFormSubmit } from "../utils/analytics";

const handleSubmit = (values) => {
  trackFormSubmit("Contact Form");
  // Your form submission logic...
};
```

#### 3. Track Contact Form Interactions
```javascript
import { trackContactForm } from "../utils/analytics";

// When form is opened
trackContactForm("Open");

// When form is submitted
trackContactForm("Submit");

// When form has an error
trackContactForm("Error");
```

#### 4. Track News Article Views
```javascript
import { trackArticleView } from "../utils/analytics";

useEffect(() => {
  if (articleData) {
    trackArticleView(articleData.title);
  }
}, [articleData]);
```

#### 5. Track Practice Area Views
```javascript
import { trackPracticeAreaView } from "../utils/analytics";

useEffect(() => {
  if (practiceAreaData) {
    trackPracticeAreaView(practiceAreaData.title);
  }
}, [practiceAreaData]);
```

#### 6. Track Profile Views
```javascript
import { trackProfileView } from "../utils/analytics";

const handleProfileOpen = (personName) => {
  trackProfileView(personName);
  // Open profile drawer...
};
```

#### 7. Track Search Queries
```javascript
import { trackSearch } from "../utils/analytics";

const handleSearch = (searchTerm) => {
  trackSearch(searchTerm);
  // Your search logic...
};
```

#### 8. Track Outbound Links
```javascript
import { trackOutboundLink } from "../utils/analytics";

const handleExternalLink = (url) => {
  trackOutboundLink(url);
  window.open(url, "_blank");
};
```

#### 9. Track Custom Events
```javascript
import { trackEvent } from "../utils/analytics";

trackEvent("Category", "Action", "Label", value);

// Example:
trackEvent("Video", "Play", "Homepage Hero Video", 0);
trackEvent("Download", "PDF", "Practice Area Brochure", 0);
```

## Recommended Tracking Implementations

### Contact Form Component
```javascript
import { trackContactForm } from "../utils/analytics";

const ContactForm = () => {
  const handleOpen = () => {
    trackContactForm("Open");
  };

  const handleSubmit = async (values) => {
    try {
      await submitForm(values);
      trackContactForm("Submit");
    } catch (error) {
      trackContactForm("Error");
    }
  };

  // Component JSX...
};
```

### News Article Detail Page
```javascript
import { trackArticleView } from "../utils/analytics";

const NewsUpdateDetail = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (article) {
      trackArticleView(article.title);
    }
  }, [article]);

  // Component JSX...
};
```

### Practice Area Detail Page
```javascript
import { trackPracticeAreaView } from "../utils/analytics";

const OurPracticesDetail = () => {
  const { slug } = useParams();
  const practiceArea = dataPracticeAreas.find(p => p.slug === slug);

  useEffect(() => {
    if (practiceArea) {
      trackPracticeAreaView(practiceArea.title);
    }
  }, [practiceArea]);

  // Component JSX...
};
```

### Profile Drawer
```javascript
import { trackProfileView } from "../utils/analytics";

const DrawerPeople = ({ person }) => {
  useEffect(() => {
    if (person && isOpen) {
      trackProfileView(person.name);
    }
  }, [person, isOpen]);

  // Component JSX...
};
```

### News Search
```javascript
import { trackSearch } from "../utils/analytics";

const NewsUpdate = () => {
  const handleSearchChange = (searchTerm) => {
    if (searchTerm) {
      trackSearch(searchTerm);
    }
    // Your search logic...
  };

  // Component JSX...
};
```

## Viewing Analytics Data

1. Go to [Google Analytics](https://analytics.google.com/)
2. Select the property with ID: `G-Y3LGSLRGS8`
3. Navigate to:
   - **Reports > Engagement > Pages and screens** - For page views
   - **Reports > Engagement > Events** - For custom events

## Event Categories

The following event categories are configured:

| Category | Actions | Labels | Description |
|----------|---------|--------|-------------|
| Button | Click | Button name | Button click tracking |
| Form | Submit | Form name | Form submission tracking |
| Contact Form | Open, Submit, Error | - | Contact form interactions |
| News Article | View | Article title | News article views |
| Practice Area | View | Practice area name | Practice area views |
| Profile | View | Person name | Profile drawer views |
| Search | Query | Search term | Search queries |
| Outbound Link | Click | URL | External link clicks |

## Best Practices

1. **Be Descriptive**: Use clear, descriptive labels for events
2. **Consistent Naming**: Use consistent naming conventions across similar events
3. **Don't Over-Track**: Only track meaningful user interactions
4. **Test Events**: Use Google Analytics DebugView to test events in development
5. **Privacy**: Ensure you're not tracking any personally identifiable information (PII)

## Testing Analytics

To test analytics in development:

1. Install the [Google Analytics Debugger Chrome Extension](https://chrome.google.com/webstore/detail/google-analytics-debugger/)
2. Open Chrome DevTools
3. Navigate your app and watch the console for GA events
4. Or use GA4's DebugView in the Google Analytics interface

## Notes

- The GA script is loaded in `index.html` for maximum compatibility
- The React GA4 package provides a programmatic interface
- Page views are tracked automatically via `RouteTracker` component
- All custom events need to be manually implemented where needed
