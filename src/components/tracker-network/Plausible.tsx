'use client';

import Script from 'next/script';
import { useEffect } from 'react';

interface PlausibleProps {
  domain: string;
  scriptOptions?: {
    fileDownloads?: boolean;
    hash?: boolean;
    outboundLinks?: boolean;
    pageviewProps?: boolean;
    revenue?: boolean;
    taggedEvents?: boolean;
  };
}

// Need to extend the Window interface to include plausible
declare global {
  interface Window {
    plausible?: any;
  }
}

const Plausible = ({ 
  domain,
  scriptOptions = {
    fileDownloads: true,
    hash: true,
    outboundLinks: true,
    pageviewProps: true,
    revenue: true,
    taggedEvents: true
  }
}: PlausibleProps) => {
  
  // Build script URL based on options
  const buildScriptUrl = (): string => {
    let basePath = 'https://plausible.io/js/script';
    
    const options = [];
    if (scriptOptions.fileDownloads) options.push('file-downloads');
    if (scriptOptions.hash) options.push('hash');
    if (scriptOptions.outboundLinks) options.push('outbound-links');
    if (scriptOptions.pageviewProps) options.push('pageview-props');
    if (scriptOptions.revenue) options.push('revenue');
    if (scriptOptions.taggedEvents) options.push('tagged-events');
    
    if (options.length > 0) {
      basePath += '.' + options.join('.');
    }
    
    return basePath + '.js';
  };
  
  // Track custom events
  const trackEvent = (eventName: string, props?: Record<string, any>) => {
    if (window.plausible) {
      window.plausible(eventName, { props });
    }
  };
  
  // Example functions for common Plausible events
  useEffect(() => {
    // Set up tracking
    if (typeof window !== 'undefined') {
      // Initialize the queue if not already defined
      window.plausible = window.plausible || function() {
        (window.plausible.q = window.plausible.q || []).push(arguments);
      };
      
      // Example of tracking a custom event after page load
      const trackPageEngagement = () => {
        // This is an example event - customize as needed
        trackEvent('page_engagement', { source: 'direct' });
      };
      
      // Add custom event listeners as needed
      const setupConversionTracking = () => {
        const conversionButtons = document.querySelectorAll('[data-plausible-event="conversion"]');
        conversionButtons.forEach((button) => {
          button.addEventListener('click', () => {
            trackEvent('conversion');
          });
        });
      };
      
      // Check if document is already loaded
      if (document.readyState === 'complete') {
        setupConversionTracking();
        // Uncomment if you want to immediately trigger the engagement event
        // trackPageEngagement();
      } else {
        // Add event listener for window load
        window.addEventListener('load', setupConversionTracking);
        
        // Cleanup function to remove event listeners
        return () => {
          window.removeEventListener('load', setupConversionTracking);
        };
      }
    }
  }, []);
  
  return (
    <>
      <Script
        defer
        data-domain={domain}
        src={buildScriptUrl()}
        strategy="afterInteractive"
        id="plausible-analytics"
      />
      <Script id="plausible-custom" strategy="afterInteractive">
        {`
          window.plausible = window.plausible || function() {
            (window.plausible.q = window.plausible.q || []).push(arguments)
          }
        `}
      </Script>
    </>
  );
};

export default Plausible;
