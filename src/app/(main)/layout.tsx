import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeRegistry from '@/components/ThemeRegistry';
import SupportFab from '@/components/ui/support-fab';


export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
        <meta name="google-site-verification" content="LC-sGMf03ki4dfJ9JKdOuSSuYJp-6lxy91Y-t9eMlLE" />
        <link rel="icon" href="/images/128.svg" />
      </head>
      <body>
        {/* <InitColorSchemeScript attribute="class" /> */}
        <ThemeRegistry>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            {props.children}
            <SupportFab />
          </AppRouterCacheProvider>
        </ThemeRegistry>      
      </body>
    </html>
  );
}
