export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  // General & Value Prop
  {
    question: 'What is Zen Analytics and how does it help marketers and developers?',
    answer: 'Zen Analytics is a unified Chrome extension for debugging digital analytics and ad trackers. It aggregates data from 25+ platforms (including GA4, GTM, Meta Pixel, and TikTok) into a single interface, allowing marketers and developers to validate tracking implementation, inspect data layers, and troubleshoot conversion events without switching between multiple tools.'
  },
  {
    question: 'Is Zen Analytics a free alternative to Facebook Pixel Helper or Google Tag Assistant?',
    answer: 'Yes, Zen Analytics is a free, comprehensive alternative that combines the functionality of Facebook Pixel Helper, Google Tag Assistant, and other platform-specific debuggers. It offers a unified view for 25+ trackers, plus advanced features like session recording and in-page overlays, which are not found in standard single-platform helpers.'
  },
  {
    question: 'How do I install the Zen Analytics Chrome Extension?',
    answer: 'You can install Zen Analytics directly from the Chrome Web Store. Search for "Zen Analytics Pixel Helper" or visit our official page to add it to your browser. It requires no account creation or complex setup—just install and start debugging immediately.'
  },
  
  // Technical Capabilities
  {
    question: 'How can I debug Google Analytics 4 (GA4) events with Zen Analytics?',
    answer: 'Zen Analytics automatically captures all outgoing GA4 network requests. It decodes the measurement protocol parameters into human-readable event names and properties. You can view these events in real-time in the extension popup, side panel, or in-page overlay to confirm that events like "purchase" or "add_to_cart" are firing with the correct parameters.'
  },
  {
    question: 'Does Zen Analytics support Google Tag Manager (GTM) data layer inspection?',
    answer: 'Yes, Zen Analytics includes a dedicated GTM debugger. It visualizes the `dataLayer` object state changes in real-time, allowing you to see exactly what data is available to your tags at any specific moment. It identifies GTM container IDs and tracks variable pushes.'
  },
  {
    question: 'Can I debug multiple pixels (e.g., Meta, TikTok, GA4) simultaneously?',
    answer: 'Absolutely. Unlike platform-specific tools, Zen Analytics monitors all supported trackers concurrently. You can verify that a single user action (like a button click) correctly triggers events across Google Analytics, Meta Ads, TikTok Ads, and Microsoft Ads simultaneously, ensuring data consistency across your marketing stack.'
  },
  {
    question: 'How does the "In-Page Live Tracking" feature work?',
    answer: 'The In-Page Live Tracking injects a non-intrusive overlay directly onto the website you are testing. This allows you to see pixel firing notifications instantly as you interact with the page, without needing to constantly open the Chrome extension popup or developer tools console.'
  },
  {
    question: 'Can I record and share my analytics debugging sessions?',
    answer: 'Yes, Zen Analytics features a Session Recording capability. You can record your browsing journey, capturing all fired events and tracker data. This session can be exported and shared with developers or stakeholders to provide proof of implementation or to report tracking bugs.'
  },
  {
    question: 'Does Zen Analytics help with verifying Google Consent Mode v2?',
    answer: 'Yes, Zen Analytics includes a Consent Mode Inspector. It reads the `gcs` and `gcd` signals sent to Google services to verify the current consent state (granted/denied) for analytics and advertising storage, helping you ensure compliance with privacy regulations like GDPR and DMA.'
  },

  // Supported Platforms & Compatibility
  {
    question: 'Which ad platforms and trackers are supported?',
    answer: 'Zen Analytics supports over 25 major platforms, including Google Analytics 4 (GA4), Google Tag Manager (GTM), Meta (Facebook) Pixel, TikTok Pixel, Microsoft (Bing) UET, LinkedIn Insight Tag, Pinterest Tag, Snap Pixel, Twitter (X) Pixel, Taboola, Outbrain, Mixpanel, and more.'
  },
  {
    question: 'Does Zen Analytics work with Single Page Applications (SPAs) like React or Next.js?',
    answer: 'Yes, Zen Analytics is optimized for modern web frameworks including React, Next.js, Vue, and Angular. It listens to History API changes and network requests, ensuring that virtual pageviews and dynamic events in SPAs are captured accurately without requiring a page reload.'
  },
  {
    question: 'Will using this extension affect my website performance or Core Web Vitals?',
    answer: 'No. Zen Analytics runs entirely locally within your browser as a developer tool. It passively monitors network traffic and JavaScript execution. It does not inject heavy scripts into your production code and has zero impact on your actual website visitors\' load times or Core Web Vitals scores.'
  },

  // Troubleshooting & Usage
  {
    question: 'Why is my pixel not showing up in Zen Analytics?',
    answer: 'If a pixel isn\'t appearing, first ensure you have refreshed the page after installing the extension. Check if you have ad blockers active (like uBlock Origin), as they may block the trackers before Zen Analytics can see them. Also, verify that the tracker is actually firing network requests in the Network tab of Chrome DevTools.'
  },
  {
    question: 'How do I filter data to see only specific trackers?',
    answer: 'The interface allows you to toggle specific network providers on or off. If you are only interested in debugging Facebook Pixel, you can deselect other providers in the settings or filter the event stream to show only events related to "Meta".'
  },
  {
    question: 'Can I inspect server-side tracking events?',
    answer: 'Zen Analytics primarily debugs client-side tracking (browser-based). However, if your server-side setup returns distinct response headers or fires companion client-side pixels, those will be visible. For pure server-to-server API calls that never touch the browser, you would need server logs.'
  },
  {
    question: 'How do I access the Side Panel view?',
    answer: 'You can open the Zen Analytics Side Panel by right-clicking the extension icon and selecting "Open side panel", or by using the browser\'s side panel selector. The side panel is ideal for persistent debugging while you navigate across multiple pages.'
  },

  // Privacy & Pricing
  {
    question: 'Is Zen Analytics GDPR and CCPA compliant?',
    answer: 'Yes. Zen Analytics is a debugging tool that runs locally on your device. We do not collect, store, or transmit your analytics data or browsing history to our servers. Your data remains entirely within your browser environment.'
  },
  {
    question: 'What are the limits of the free version?',
    answer: 'Currently, Zen Analytics is in Beta, and all "Premium" features (such as unlimited event history, session recording, and multi-view) are available for free to all users. We plan to introduce a tiered model in the future but will always maintain a robust free tier for essential debugging.'
  },
  {
    question: 'Can I export the debug logs to CSV or JSON?',
    answer: 'Yes, the Session Recording feature allows you to export the captured event logs. This is useful for auditing implementation quality or archiving tracking behavior for compliance documentation.'
  },
  {
    question: 'How often is the extension updated?',
    answer: 'We release updates frequently to support new tracker versions (e.g., updates to GA4 protocols or new social media pixels). The extension auto-updates via the Chrome Web Store, ensuring you always have the latest definitions.'
  }
];
