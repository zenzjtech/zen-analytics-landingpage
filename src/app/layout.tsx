import * as React from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import ThemeRegistry from '@/components/ThemeRegistry';


export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* <InitColorSchemeScript attribute="class" /> */}
        <ThemeRegistry>
          <AppRouterCacheProvider options={{ enableCssLayer: true }}>
            {props.children}
          </AppRouterCacheProvider>
        </ThemeRegistry>      
      </body>
    </html>
  );
}
