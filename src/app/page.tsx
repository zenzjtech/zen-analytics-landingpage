import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

// Import layout components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Import section components
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import BrowserSupport from '@/components/sections/BrowserSupport';
import Comparison from '@/components/sections/Comparison';
import FAQ from '@/components/sections/FAQ';

export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Hero />
        <Features />
        <BrowserSupport />
        <Comparison />
        <FAQ />
      </Box>
      
      <Footer />
    </Box>
  );
}
