'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Fade, Link } from '@mui/material';

export default function Hero() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: { xs: 6, md: 10 },
        pb: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.light}40, ${theme.palette.primary.main}22)`,
          zIndex: 0,
          filter: 'blur(40px)',
          opacity: 0.8
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: -200,
          left: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.light}30, ${theme.palette.secondary.main}15)`,
          zIndex: 0,
          filter: 'blur(50px)',
          opacity: 0.7
        }}
      />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          gap: 6, 
          alignItems: 'center',
          justifyContent: 'space-between' 
        }}>
          <Fade in={true} timeout={1000}>
            <Box sx={{ flex: 1, maxWidth: { md: '55%' } }}>
              <Typography
                component="h1"
                variant="h2"
                color="text.primary"
                gutterBottom
                sx={{ 
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2
                }}
              >
                All-in-one analytics tool
                <Box 
                  component="span" 
                  sx={{ 
                    color: 'primary.main', 
                    display: 'block',
                    position: 'relative'
                  }}
                >
                  Zen Analytics Pixel Tracker
                </Box>
              </Typography>
              <Typography 
                variant="h5" 
                color="text.secondary" 
                paragraph
                sx={{ 
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.6,
                  mt: 2,
                  opacity: 0.9
                }}
              >
                Monitor 20+ analytics (Google Analytics, Google Tag Manager, Facebook (Meta), Microsoft (Bing), Tiktok). View events, capture sessions & export findings via popup, sidepanel, devtool panel or in-page view.                       
              </Typography>
              <Box sx={{ mt: 5, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    fontWeight: 600,
                    borderRadius: '28px',
                    backgroundColor: '#F37022',
                    boxShadow: `0 8px 20px ${theme.palette.primary.main}40`,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      backgroundColor: '#E25E0D',
                      transform: 'translateY(-3px)',
                      boxShadow: `0 12px 20px ${theme.palette.primary.main}60`
                    }
                  }}
                  href="#download"
                >
                  Install Now
                </Button>
                <Link 
                  href="#how-it-works" 
                  underline="none"
                  sx={{ 
                    color: theme.palette.primary.main,
                    fontSize: '1rem',
                    fontWeight: 500,
                    display: 'inline-flex',
                    alignItems: 'center',
                    '&:hover': { 
                      color: theme.palette.primary.dark,
                      textDecoration: 'underline'
                    }
                  }}
                >
                  See how it works
                </Link>
              </Box>

              {/* Browser Compatibility */}
              <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  px: 2, 
                  py: 0.5, 
                  borderRadius: 3,
                  bgcolor: 'rgba(66, 133, 244, 0.1)',
                }}>
                  <Box sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: '#4285F4' }} />
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>Chrome</Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  px: 2, 
                  py: 0.5, 
                  borderRadius: 3,
                  bgcolor: 'rgba(255, 114, 21, 0.1)',
                }}>
                  <Box sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: '#FF7215' }} />
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>Firefox</Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  px: 2, 
                  py: 0.5, 
                  borderRadius: 3,
                  bgcolor: 'rgba(221, 55, 55, 0.1)',
                }}>
                  <Box sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: '#DD3737' }} />
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>Brave</Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  px: 2, 
                  py: 0.5, 
                  borderRadius: 3,
                  bgcolor: 'rgba(0, 120, 212, 0.1)',
                }}>
                  <Box sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: '#0078D4' }} />
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>Edge</Typography>
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: 1, 
                  px: 2, 
                  py: 0.5, 
                  borderRadius: 3,
                  bgcolor: 'rgba(137, 43, 226, 0.1)',
                }}>
                  <Box sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: '#892BE2' }} />
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>Safari</Typography>
                </Box>
              </Box>
            </Box>
          </Fade>
          
          <Fade in={true} timeout={1500}>
            <Box 
              sx={{ 
                flex: 1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: '550px',
                overflow: 'hidden',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  left: -20,
                  right: -20,
                  bottom: -20,
                  background: 'radial-gradient(circle at center, rgba(137, 43, 226, 0.08), transparent 70%)',
                  zIndex: -1,
                },
              }}
            >
              <Box 
                sx={{ 
                  position: 'relative', 
                  width: '100%', 
                  height: { xs: '350px', sm: '400px', md: '450px' },
                  animation: 'pulse 6s infinite ease-in-out',
                  '@keyframes pulse': {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.02)' },
                    '100%': { transform: 'scale(1)' },
                  },
                  borderRadius: '24px',
                  overflow: 'hidden'
                }}
              >
                <Box 
                  sx={{
                    position: 'absolute',
                    width: '130px',
                    height: '130px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(137, 43, 226, 0.1), rgba(0, 200, 83, 0.08))',
                    filter: 'blur(20px)',
                    top: '10%',
                    right: '10%',                    
                    zIndex: 1,
                    animation: 'float 8s infinite ease-in-out',
                    '@keyframes float': {
                      '0%': { transform: 'translateY(0)' },
                      '50%': { transform: 'translateY(-10px)' },
                      '100%': { transform: 'translateY(0)' },
                    },
                  }}
                />
                <Box 
                  sx={{
                    position: 'absolute',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(0, 200, 83, 0.08), rgba(137, 43, 226, 0.06))',
                    filter: 'blur(15px)',
                    bottom: '15%',
                    left: '10%',
                    zIndex: 1,
                    animation: 'float 10s infinite ease-in-out reverse',
                  }}
                />
                <Box
                  component="img"
                  src="/images/features/hero.png"
                  alt="Zen Analytics Pixel Tracker"
                  sx={{
                    width: '100%',
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    zIndex: 2,
                    borderRadius: '24px',
                    boxShadow: '0 8px 15px rgba(0,0,0,0.08)'
                  }}
                  loading="eager"
                />
              </Box>
            </Box>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
}
