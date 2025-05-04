'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { Stack, Fade } from '@mui/material';

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
      {/* Enhanced decorative background elements */}
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
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  lineHeight: 1.2
                }}
              >
                Shop Smarter with
                <Box 
                  component="span" 
                  sx={{ 
                    color: 'primary.main', 
                    display: 'block',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 5,
                      left: 0,
                      width: '40%',
                      height: '6px',
                      backgroundColor: 'primary.light',
                      zIndex: -1,
                      borderRadius: '4px'
                    }
                  }}
                >
                  Zen Analytics
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
                Get real-time analytics insights on 25+ platforms in one place. Save time tracking 
                performance and make data-driven decisions with ease.
              </Typography>
              <Box sx={{ mt: 5, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5, 
                    fontWeight: 600,
                    borderRadius: '28px',
                    boxShadow: `0 8px 20px ${theme.palette.primary.main}40`,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: `0 12px 20px ${theme.palette.primary.main}60`
                    }
                  }}
                  href="#download"
                >
                  Get It Free
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ 
                    px: 4, 
                    py: 1.5,
                    borderRadius: '28px',
                    borderWidth: '2px',
                    '&:hover': {
                      borderWidth: '2px'
                    }
                  }}
                  href="#features"
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Fade>
          
          <Fade in={true} timeout={1500}>
            <Box sx={{ flex: 1, width: '100%' }}>
              <Paper
                elevation={6}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'grey.100',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
                  }
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    borderRadius: 2,
                    p: 2,
                    pb: 1,
                    overflow: 'hidden'
                  }}
                >
                  {/* Enhanced Analytics Dashboard Preview */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Zen Analytics Dashboard</Typography>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'error.main' }} />
                      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'warning.main' }} />
                      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'success.main' }} />
                    </Box>
                  </Box>
                  
                  {/* Analytics Cards */}
                  <Stack spacing={2.5}>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Paper 
                        sx={{ 
                          p: 2, 
                          flex: 1, 
                          bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.50',
                          border: '1px solid',
                          borderColor: 'grey.100',
                          borderRadius: 2,
                          transition: 'transform 0.2s ease',
                          '&:hover': {
                            transform: 'translateY(-3px)'
                          }
                        }}
                      >
                        <Typography variant="caption" color="primary" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Google Analytics</Typography>
                        <Typography variant="h6" sx={{ my: 0.5, fontWeight: 700 }}>10,250</Typography>
                        <Typography variant="body2" color="text.secondary">Monthly Visitors</Typography>
                      </Paper>
                      <Paper 
                        sx={{ 
                          p: 2, 
                          flex: 1, 
                          bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.50',
                          border: '1px solid',
                          borderColor: 'grey.100',
                          borderRadius: 2,
                          transition: 'transform 0.2s ease',
                          '&:hover': {
                            transform: 'translateY(-3px)'
                          }
                        }}
                      >
                        <Typography variant="caption" color="primary" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Facebook Pixel</Typography>
                        <Typography variant="h6" sx={{ my: 0.5, fontWeight: 700 }}>$2,345</Typography>
                        <Typography variant="body2" color="text.secondary">Ad Spend</Typography>
                      </Paper>
                    </Box>
                    <Paper 
                      sx={{ 
                        p: 2, 
                        bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.50',
                        border: '1px solid',
                        borderColor: 'grey.100',
                        borderRadius: 2,
                        background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.primary.light}10)`,
                        transition: 'transform 0.2s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)'
                        }
                      }}
                    >
                      <Typography variant="caption" color="primary" sx={{ fontWeight: 600, fontSize: '0.75rem' }}>Combined Analytics</Typography>
                      <Typography variant="h6" sx={{ my: 0.5, fontWeight: 700 }}>3.2%</Typography>
                      <Typography variant="body2" color="text.secondary">Conversion Rate</Typography>
                    </Paper>
                  </Stack>
                </Box>
              </Paper>
            </Box>
          </Fade>
        </Box>
      </Container>
    </Box>
  );
}
