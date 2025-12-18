import { faqItems } from '@/utils/faq-items';

export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Zen Analytics",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Chrome, Edge, Brave, Firefox",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A unified Chrome extension that simplifies digital analytics debugging by aggregating data from over 20+ trackers (including Google Analytics 4, Meta Pixel, TikTok, and GTM) into a single interface.",
  "featureList": [
    "Unified Analytics Debugger",
    "Session Capture & Recording",
    "In-Page Live Tracking",
    "Google Consent Mode Inspector",
    "Structured Tag Assistant",
    "Multi-View Support"
  ],
  "screenshot": [
    "https://zap-pixel.web.app/images/carousel/webp/1.webp",
    "https://zap-pixel.web.app/images/carousel/webp/2.webp",
    "https://zap-pixel.web.app/images/carousel/webp/3.webp",
    "https://zap-pixel.web.app/images/carousel/webp/4.webp",
    "https://zap-pixel.web.app/images/carousel/webp/5.webp"
  ],
  "softwareVersion": "1.0",
  "author": {
    "@type": "Organization",
    "name": "Zen Analytics"
  },
  "url": "https://zap-pixel.web.app",
  "downloadUrl": "https://chromewebstore.google.com/detail/zen-analytics-pixel-track/gknigcbhlammoakmmdddkblknanpjiac",
  "installUrl": "https://chromewebstore.google.com/detail/zen-analytics-pixel-track/gknigcbhlammoakmmdddkblknanpjiac"
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Zen Analytics",
  "url": "https://zap-pixel.web.app",
  "sameAs": [
    "https://github.com/zenzjtech"
  ],
  "description": "Zen Analytics is a unified Chrome extension that simplifies digital analytics debugging by aggregating data from over 20+ trackers."
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Toan Nguyen",
  "jobTitle": "Software Developer",
  "url": "https://www.upwork.com/freelancers/~01ab0d8d6efd33201c",
  "sameAs": [
    "https://github.com/zenzjtech",
    "https://www.upwork.com/freelancers/~01ab0d8d6efd33201c",
    "https://web.facebook.com/canh.toan.nguyen.2101",
    "https://www.reddit.com/user/Prior-Switch-9099/"
  ]
};
