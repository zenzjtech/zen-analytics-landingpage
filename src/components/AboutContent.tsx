'use client';

import * as React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import NextLink from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SpaIcon from '@mui/icons-material/Spa';
import BoltIcon from '@mui/icons-material/Bolt';
import { keyframes } from '@mui/system';

const rotateEnso = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const values = [
  {
    icon: <SpaIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
    title: 'The Zen Philosophy',
    description: 'Zen is the union of opposites: Nothingness (a lean, intuitive UI) and Everything (an all-encompassing, feature-rich studio). Inspired by the Zen "anti-method" of continuous innovation, we packed 10+ instruments, recording capabilities, and custom themes into a minimalist design. It is everything you need, with nothing in your way.',
    hasEnso: true,
  }
];

const ValueCard = ({ value }: { value: typeof values[0] }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const parallaxRef = React.useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || !parallaxRef.current || !value.hasEnso) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    // Calculate distance from center
    const x = (e.clientX - left - width / 2) / 15; // Divide by 15 for subtle effect
    const y = (e.clientY - top - height / 2) / 15;
    
    parallaxRef.current.style.transform = `translate(${x}px, ${y}px)`;
  };

  const handleMouseLeave = () => {
    if (parallaxRef.current) {
      parallaxRef.current.style.transform = 'translate(0px, 0px)';
    }
  };

  return (
    <Paper
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      elevation={0}
      sx={{
        p: 5,
        height: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        textAlign: 'left',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 6,
        background: (theme) => theme.palette.mode === 'dark' ? '#2A2A2A' : '#FFFFFF',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          borderColor: 'primary.main',
          transform: 'translateY(-8px)',
          boxShadow: (theme) => theme.palette.mode === 'dark' 
            ? '0 20px 40px rgba(0,0,0,0.4)' 
            : '0 20px 40px rgba(176, 152, 104, 0.15)',
          '& .icon-bg': {
            transform: 'scale(1.2)',
            opacity: 0.2
          }
        },
      }}
    >
      {/* Decorative Background: Enso for Zen, Icon for others */}
      {value.hasEnso ? (
        <Box
          ref={parallaxRef}
          sx={{
            position: 'absolute',
            right: -40,
            bottom: -40,
            width: 280,
            height: 280,
            zIndex: 0,
            pointerEvents: 'none',
            transition: 'transform 0.1s ease-out', // Smooth movement
          }}
        >
          <Box
            sx={{
              width: '100%',
              height: '100%',
              opacity: 0.08,
              color: 'primary.main',
              animation: `${rotateEnso} 60s linear infinite`,
            }}
          >
             <svg viewBox="0 0 100 100" fill="currentColor" style={{ width: '100%', height: '100%' }}>
               <path d="M50,10 C75,10 95,30 95,50 C95,75 70,95 45,90 C25,85 10,65 15,45 C18,35 25,25 35,20 C45,15 60,15 70,20" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" style={{ opacity: 0.8 }} />
               <path d="M48,12 C20,15 5,40 10,65 C15,85 35,95 55,90 C80,85 92,60 85,35" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" style={{ opacity: 0.4 }} />
             </svg>
          </Box>
        </Box>
      ) : (
        <Box 
          className="icon-bg"
          sx={{ 
            position: 'absolute', 
            right: -20, 
            bottom: -20, 
            opacity: 0.05,
            color: 'primary.main',
            transform: 'scale(1)',
            transition: 'all 0.4s ease',
            pointerEvents: 'none',
            zIndex: 0
          }}
        >
          {React.cloneElement(value.icon as React.ReactElement, { sx: { fontSize: 180 } })}
        </Box>
      )}

      <Box sx={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Box 
          sx={{ 
            mb: 3, 
            display: 'inline-flex', 
            p: 2, 
            borderRadius: '20px', // Soft square
            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(176, 152, 104, 0.2)' : 'rgba(176, 152, 104, 0.1)',
            color: 'primary.main',
            width: 'fit-content'
          }}
        >
          {value.icon}
        </Box>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700, mb: 2 }}>
          {value.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '1.05rem', flexGrow: 1 }}>
          {value.description}
        </Typography>
      </Box>
    </Paper>
  );
};

export default function AboutContent({ children }: { children?: React.ReactNode }) {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            background: (theme) => 
              theme.palette.mode === 'dark' 
                ? 'linear-gradient(180deg, #1A1A1A 0%, #2A2A2A 100%)' 
                : 'linear-gradient(180deg, #FAF8F2 0%, #F5F0E6 100%)',
          }}
        >
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              About Zen Virtual Piano
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              sx={{ mb: 2 }}
            >
              Built by musicians, for musicians.
            </Typography>
            <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', mb: 4, fontSize: '1.1rem', lineHeight: 1.6 }}>
              <strong>Zen Virtual Piano</strong> is a <strong>zero-latency</strong>, <strong>ad-free</strong> browser extension that transforms your keyboard into a professional musical instrument. It works <strong>offline</strong> and features <strong>10+ instruments</strong>, recording capabilities, and <strong>250+ built-in songs</strong>.
            </Typography>
          </Container>
        </Box>

        {/* Our Story / About the Author Section */}
        <Box sx={{ py: 10, bgcolor: 'background.default' }}>
          <Container maxWidth="md">
            {/* Tab Navigation */}
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              sx={{
                mb: 4,
                '& .MuiTab-root': {
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  minWidth: 120,
                },
                '& .Mui-selected': {
                  color: 'primary.main',
                },
                '& .MuiTabs-indicator': {
                  height: 4,
                  borderRadius: 2,
                },
              }}
            >
              <Tab label="Why Zen Virtual Piano?" />
              <Tab label="About the Author" />
            </Tabs>

            {/* Our Story Content */}
            {tabValue === 0 && (
            <Paper 
              elevation={0}
              sx={{ 
                p: { xs: 3, md: 5 }, 
                borderRadius: 4, 
                bgcolor: 'background.paper',
                border: '1px solid',
                borderColor: 'divider',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box 
                sx={{ 
                  position: 'absolute', 
                  top: 0, 
                  right: 0, 
                  width: '150px', 
                  height: '150px', 
                  background: (theme) => `radial-gradient(circle at top right, ${theme.palette.primary.light}20, transparent 70%)`,
                  zIndex: 0
                }} 
              />
              
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                  Why did we build Zen Virtual Piano?
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Zen Virtual Piano was born from a simple frustration: we wanted to practice piano during breaks, on flights, or in cafes where Wi-Fi is spotty. But every online piano we found was either slow, cluttered with ads, or completely dependent on a stable internet connection.
                </Typography>
                
                <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
                  The Problem with Existing Tools:
                </Typography>
                <Box component="ul" sx={{ pl: 2, mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  <Box component="li" sx={{ mb: 1 }}><strong>Latency:</strong> Most web pianos have noticeable lag.</Box>
                  <Box component="li" sx={{ mb: 1 }}><strong>Ads:</strong> Intrusive pop-ups break the creative flow.</Box>
                  <Box component="li" sx={{ mb: 1 }}><strong>Connectivity:</strong> They stop working when the internet drops.</Box>
                </Box>

                <Typography variant="h6" component="h4" gutterBottom sx={{ fontWeight: 600, mt: 4, mb: 2 }}>
                  Our Solution:
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                  We realized that <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>portability</Box> and <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>reliability</Box> were missing. So we built Zen Virtual Piano as the <Box component="span" sx={{ fontWeight: 700, color: 'text.primary' }}>ultimate all-in-one studio</Box>.
                </Typography>
                
                <Box component="ul" sx={{ pl: 2, mb: 4, color: 'text.secondary', fontSize: '1.1rem', lineHeight: 1.8 }}>
                  <Box component="li" sx={{ mb: 1 }}><strong>10+ Professional Instruments:</strong> From Grand Piano to Violin.</Box>
                  <Box component="li" sx={{ mb: 1 }}><strong>Zero Latency:</strong> Instant feedback for true performance.</Box>
                  <Box component="li" sx={{ mb: 1 }}><strong>Offline Capable:</strong> Play anywhere, anytime.</Box>
                  <Box component="li" sx={{ mb: 1 }}><strong>250+ Songs:</strong> Built-in library to learn and play.</Box>
                </Box>

                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8, fontSize: '1.1rem' }}>
                  Today, Zen Virtual Piano isn't just an extension—it's a comprehensive, modern instrument that lives in your browser, completely ad-free and always ready to play.
                </Typography>
              </Box>
            </Paper>
            )}

            {/* About the Author Content */}
            {tabValue === 1 && children}
          </Container>
        </Box>

        {/* Our Values Section */}
        <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
          <Container maxWidth="lg">
            <Box sx={{ textAlign: 'center', mb: 8 }}>
              <Typography
                component="h2"
                variant="h4"
                color="text.primary"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                What We Believe In
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
                Our design philosophy blends modern aesthetics with functional purity.
              </Typography>
            </Box>
            
            <Grid container spacing={4}>
              {values.map((value, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <ValueCard value={value} />
                </Grid>
              ))}
            </Grid>

          </Container>
        </Box>

        {/* CTA Section */}
        <Box 
          sx={{ 
            py: 10, 
            bgcolor: 'background.default',
            position: 'relative',
            overflow: 'hidden' 
          }}
        >
          {/* Background decoration */}
          <Box 
             sx={{ 
               position: 'absolute', 
               left: '50%', 
               top: '50%', 
               transform: 'translate(-50%, -50%)', 
               width: '100%', 
               maxWidth: '800px', 
               height: '400px', 
               background: (theme) => `radial-gradient(ellipse at center, ${theme.palette.primary.main}08, transparent 70%)`, 
               zIndex: 0 
             }} 
           />
           
          <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography
                component="h2"
                variant="h3"
                color="text.primary"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Ready to Play?
              </Typography>
              <Typography variant="h6" color="text.secondary" paragraph sx={{ mb: 4, fontWeight: 400 }}>
                Join thousands of musicians who create, learn, and play with Zen Virtual Piano every day.
              </Typography>
              <Button
                variant="contained"
                size="large"
                component={NextLink}
                href="/"
                sx={{ 
                  py: 1.5, 
                  px: 4, 
                  fontSize: '1.1rem',
                  borderRadius: 8 // Pill shape
                }}
              >
                Get Started Free
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
      
      <Footer />
    </Box>
  );
}
