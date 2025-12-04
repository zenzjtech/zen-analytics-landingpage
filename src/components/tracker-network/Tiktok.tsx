'use client';

import { useEffect } from 'react';

// Type definition for the TikTok Pixel
interface Ttq {
  methods: string[];
  setAndDefer: (t: any, e: string) => void;
  instance: (t: string) => any;
  load: (e: string, n?: any) => void;
  page: () => void;
  track: (event: string, data?: any) => void;
  _i: Record<string, any>;
  _t: Record<string, any>;
  _o: Record<string, any>;
  push: (...args: any[]) => void;
}

declare global {
  interface Window {
    ttq?: any;
    TiktokAnalyticsObject?: string;
    [key: string]: any; // Allow indexing with any string
  }
}

const TiktokPixel = () => {
  useEffect(() => {
    // Your TikTok Pixel ID
    const pixelId = 'CVBP553C77U5ORPJ5CMG';

    if (!window.ttq) {
      (function (w: Window, d: Document, t: string) {
        w.TiktokAnalyticsObject = t;
        const ttq = w[t] = w[t] || [];
        ttq.methods = [
          "page", "track", "identify", "instances", "debug", "on", "off", 
          "once", "ready", "alias", "group", "enableCookie", "disableCookie", 
          "holdConsent", "revokeConsent", "grantConsent"
        ];
        ttq.setAndDefer = function (t: any, e: string) {
          t[e] = function (...args: any[]) {
            t.push([e].concat(Array.prototype.slice.call(args, 0)));
          };
        };
        for (let i = 0; i < ttq.methods.length; i++) {
          ttq.setAndDefer(ttq, ttq.methods[i]);
        }
        ttq.instance = function (t: string) {
          const result = ttq._i[t] || [];
          for (let n = 0; n < ttq.methods.length; n++) {
            ttq.setAndDefer(result, ttq.methods[n]);
          }
          return result;
        };
        ttq.load = function (e: string, n?: any) {
          const r = "https://analytics.tiktok.com/i18n/pixel/events.js";
          const o = n && n.partner;
          ttq._i = ttq._i || {};
          ttq._i[e] = [];
          ttq._i[e]._u = r;
          ttq._t = ttq._t || {};
          ttq._t[e] = +new Date();
          ttq._o = ttq._o || {};
          ttq._o[e] = n || {};
          
          const script = d.createElement("script");
          script.type = "text/javascript";
          script.async = true;
          script.src = r + "?sdkid=" + e + "&lib=" + t;
          
          const firstScript = d.getElementsByTagName("script")[0];
          if (firstScript && firstScript.parentNode) {
            firstScript.parentNode.insertBefore(script, firstScript);
          }
        };

        ttq.load(pixelId);
        ttq.page();
      })(window, document, 'ttq');
    }

    // Track page view for route changes
    const handleRouteChange = () => {
      if (window.ttq) {
        window.ttq.page();
      }
    };

    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  // No visible UI is needed for the TikTok pixel
  return null;
};

export default TiktokPixel;