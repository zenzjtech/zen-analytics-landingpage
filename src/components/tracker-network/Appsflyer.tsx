"use client"
import Script from 'next/script';
import { useEffect } from 'react';

interface AppsflyerProps {
  webAppId: string;
}

// Need to extend the Window interface to include AF
declare global {
  interface Window {
    AF?: any;
  }
}

const Appsflyer = ({ webAppId }: AppsflyerProps) => {
  useEffect(() => {
    // Set up window load event
    if (typeof window !== 'undefined') {
      // Function to trigger AppsFlyer subscription event
      const triggerAppsFlyerEvent = () => {
        if (window.AF) {
          window.AF('pba', 'event', {
            eventType: 'EVENT',
            eventValue: {
              'category': 'holiday_promotion',
              eventValue: { 'label': 'newspaper' },
            },
            eventName: 'subscription',
          });
        }
      };

      // Function to set up checkout button tracking
      const setupCheckoutTracking = () => {
        if (window.AF) {
          window.AF('pba', 'event', {
            eventType: 'EVENT',
            eventValue: { 'category': 'holiday_promotion' },
            eventName: 'checkout'
          });
        }
      }

      // Check if document is already loaded
      if (document.readyState === 'complete') {
        triggerAppsFlyerEvent();
        setupCheckoutTracking();
      } else {
        // Add event listener for window load for subscription event
        window.addEventListener('load', triggerAppsFlyerEvent);

        // Add event listener for checkout button
        window.addEventListener('load', setupCheckoutTracking);

        // Cleanup function to remove event listeners
        return () => {
          window.removeEventListener('load', triggerAppsFlyerEvent);
          window.removeEventListener('load', setupCheckoutTracking);
        };
      }
    }
  }, []);

  return (
    <>
      <Script id="appsflyer-init">
        {`
        !function(t,e,n,s,a,c,i,o,p){t.AppsFlyerSdkObject=a,t.AF=t.AF||function(){
        (t.AF.q=t.AF.q||[]).push([Date.now()].concat(Array.prototype.slice.call(arguments)))},
        t.AF.id=t.AF.id||i,t.AF.plugins={},o=e.createElement(n),p=e.getElementsByTagName(n)[0],o.async=1,
        o.src="https://websdk.appsflyer.com?"+(c.length>0?"st="+c.split(",").sort().join(",")+"&":"")+(i.length>0?"af_id="+i:""),
        p.parentNode.insertBefore(o,p)}(window,document,"script",0,"AF","pba",{pba: {webAppId: "${webAppId}"}})
        `}
      </Script>
    </>
  );
};

export default Appsflyer;
