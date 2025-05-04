'use client';

import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ModeSwitch from '@/components/ModeSwitch';
import theme from '@/theme';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ModeSwitch />
      {children}
    </ThemeProvider>
  );
}
