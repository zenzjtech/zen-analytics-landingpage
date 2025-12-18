import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme';
import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import ModeSwitch from '@/components/ModeSwitch';
import MetaPixel from '@/components/tracker-network/Meta';
import type { Metadata } from 'next';
import TiktokPixel from '@/components/tracker-network/Tiktok';
import Taboola from '@/components/tracker-network/Taboola';
import GTM, { GTMBody } from '@/components/tracker-network/GTM';
import { AnalyticsProviderConfig } from '@/global/config';
import { AnalyticsProvider } from '@/global/constants';
import GA4 from '@/components/tracker-network/GA4';
import Microsoft from '@/components/tracker-network/Microsoft';
import Appsflyer from '@/components/tracker-network/Appsflyer';
import Plausible from '@/components/tracker-network/Plausible';
import Mixpanel from '@/components/tracker-network/Mixpanel';
import { softwareApplicationSchema, organizationSchema, personSchema } from '@/utils/schemas';

export const metadata: Metadata = {
  title: 'Zen Analytics Pixel Tracker - Unified Analytics Interface',
  description: 'Aggregate data from 25+ trackers into a unified interface within your browser. Chrome extension for digital advertising and analytics verification.',
};

export default function RootLayout(props: { children: React.ReactNode }) {  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://zap-pixel.web.app/" />        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="icon" href="/images/128.svg" />
        <link rel="preload" href="/images/carousel/webp/1.webp" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Mixpanel />
        <TiktokPixel /> 
        <Taboola />       
        <GTM gtmId={AnalyticsProviderConfig[AnalyticsProvider.GTM].id} />
        <GA4 accountId={AnalyticsProviderConfig[AnalyticsProvider.GA4].id} />
        <Microsoft trackingId={AnalyticsProviderConfig[AnalyticsProvider.Microsoft].id} />        
        <Appsflyer webAppId={AnalyticsProviderConfig[AnalyticsProvider.Appsflyer].id} />
        <Plausible domain="zap-pixel.web.app"/>
      </head>
      <body>
        <MetaPixel />
        <GTMBody gtmId={AnalyticsProviderConfig[AnalyticsProvider.GTM].id} />
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {props.children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
