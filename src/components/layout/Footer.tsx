'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Copyright from '../Copyright';
import { useTheme, Divider, IconButton, TextField, Button, Grid, Fade } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const footerLinks = [
  {
    title: 'Download',
    links: [
      { name: 'Chrome', href: '#' },
      { name: 'Firefox', href: '#' },
      { name: 'Edge', href: '#' },
      { name: 'Safari', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Docs', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Careers', href: '#' },
    ],
  },
];

export default function Footer() {
  const theme = useTheme();
  
  return (
    <Box
      component="footer"
      sx={{
        py: { xs: 6, md: 8 },
        px: 2,
        mt: 10,
        bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50',
        borderTop: `1px solid ${theme.palette.divider}`,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: '-5%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.light}10, transparent 70%)`,
          opacity: 0.4,
          zIndex: 0
        }}
      />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5} sx={{ mb: { xs: 4, md: 0 } }}>
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Box 
                  component="img" 
                  src="/images/logo.svg" 
                  alt="Zen Analytics Logo"
                  sx={{ height: 38, mr: 1.5 }}
                />
                <Typography 
                  variant="h5" 
                  sx={{ 
                    fontWeight: 700, 
                    color: 'primary.main',
                    letterSpacing: '-0.5px'
                  }}
                >
                  Zen Analytics
                </Typography>
              </Box>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  maxWidth: 400,
                  mb: 3,
                  lineHeight: 1.7
                }}
              >
                Get real-time analytics insights on 25+ platforms in one place. 
                Save time and make better data-driven decisions for your business.
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="subtitle1" 
                  color="text.primary" 
                  gutterBottom
                  sx={{ fontWeight: 600, mb: 2 }}
                >
                  Subscribe to our newsletter
                </Typography>
                <Box sx={{ display: 'flex' }}>
                  <TextField
                    variant="outlined"
                    placeholder="Your email"
                    size="small"
                    sx={{ 
                      mr: 1,
                      '& .MuiOutlinedInput-root': {
                        borderRadius: '8px',
                        '& fieldset': {
                          borderColor: 'divider',
                        },
                      }
                    }}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    endIcon={<SendIcon />}
                    sx={{ 
                      borderRadius: '8px',
                      boxShadow: `0 4px 14px ${theme.palette.primary.main}30`,
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </Box>
              
              <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                <IconButton 
                  aria-label="Twitter" 
                  sx={{ 
                    color: 'text.secondary',
                    backgroundColor: 'grey.100',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: '#1DA1F2',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <TwitterIcon fontSize="small" />
                </IconButton>
                <IconButton 
                  aria-label="GitHub"
                  sx={{ 
                    color: 'text.secondary',
                    backgroundColor: 'grey.100',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: '#333',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <GitHubIcon fontSize="small" />
                </IconButton>
                <IconButton 
                  aria-label="LinkedIn"
                  sx={{ 
                    color: 'text.secondary',
                    backgroundColor: 'grey.100',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: 'white',
                      backgroundColor: '#0077B5',
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  <LinkedInIcon fontSize="small" />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
          
          <Grid item xs={12} md={7}>
            <Grid container spacing={4}>
              {footerLinks.map((section, index) => (
                <Fade 
                  in={true} 
                  key={section.title} 
                  timeout={1000} 
                  style={{ transitionDelay: `${200 + (index * 100)}ms` }}
                >
                  <Grid item xs={12} sm={4}>
                    <Typography 
                      variant="subtitle1" 
                      color="text.primary" 
                      gutterBottom
                      sx={{ 
                        fontWeight: 700,
                        mb: 2,
                        position: 'relative',
                        display: 'inline-block',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: -4,
                          left: 0,
                          width: '30px',
                          height: '2px',
                          backgroundColor: 'primary.main',
                          borderRadius: '2px'
                        }
                      }}
                    >
                      {section.title}
                    </Typography>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {section.links.map((link) => (
                        <li key={link.name} style={{ marginBottom: '0.75rem' }}>
                          <Link 
                            href={link.href} 
                            underline="none"
                            color="text.secondary"
                            sx={{ 
                              display: 'inline-flex',
                              alignItems: 'center',
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                color: 'primary.main',
                                transform: 'translateX(4px)'
                              },
                              '&::before': {
                                content: '"•"',
                                display: 'inline-block',
                                marginRight: '8px',
                                color: 'primary.light',
                                opacity: 0.7
                              }
                            }}
                          >
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                </Fade>
              ))}
            </Grid>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 4, opacity: 0.6 }} />
        
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'center' },
            gap: 2
          }}
        >
          <Copyright />
          <Typography variant="body2" color="text.secondary">
            Made with ❤️ by Zen Analytics Team
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
