'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

// Browser info type
interface BrowserInfo {
  name: string;
  logo: string;
  installText: string;
  installLink: string;
}

// Styled component for browser card
const BrowserCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[4],
  },
}));

// Browser icon placeholder
const BrowserIcon = ({ name }: { name: string }) => (
  <Box
    sx={{
      width: 80,
      height: 80,
      mb: 2,
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: 'background.default',
      color: 'primary.main',
      fontSize: 40,
      fontWeight: 'bold',
    }}
  >
    {name.charAt(0)}
  </Box>
);

export default function BrowserSupport() {
  const browsers: BrowserInfo[] = [
    {
      name: 'Google Chrome',
      logo: '/images/browsers/chrome.svg',
      installText: 'Add to Chrome',
      installLink: '#',
    },
    {
      name: 'Firefox',
      logo: '/images/browsers/firefox.svg',
      installText: 'Add to Firefox',
      installLink: '#',
    },
    {
      name: 'Microsoft Edge',
      logo: '/images/browsers/edge.svg',
      installText: 'Add to Edge',
      installLink: '#',
    },
    {
      name: 'Safari',
      logo: '/images/browsers/safari.svg',
      installText: 'Add to Safari',
      installLink: '#',
    },
  ];

  return (
    <Box
      id="browsers"
      sx={{
        py: 8,
        bgcolor: 'background.paper',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            component="h2"
            variant="h3"
            color="text.primary"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Available on All Major Browsers
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Install Zen Analytics on your favorite browser and start seeing analytics insights across platforms.
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: 4, 
            justifyContent: 'center'
          }}
        >
          {browsers.map((browser) => (
            <Box 
              key={browser.name} 
              sx={{ 
                flexBasis: { 
                  xs: '100%', 
                  sm: 'calc(50% - 32px)', 
                  md: 'calc(25% - 32px)' 
                }
              }}
            >
              <BrowserCard elevation={1}>
                {/* Use the BrowserIcon as a placeholder until you have actual icons */}
                <BrowserIcon name={browser.name} />
                
                <Typography variant="h6" component="h3" gutterBottom>
                  {browser.name}
                </Typography>
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1 }}>
                  {`The best Zen Analytics experience on ${browser.name}.`}
                </Typography>
                
                <Button
                  variant="contained"
                  color="primary"
                  href={browser.installLink}
                  sx={{ 
                    textTransform: 'none',
                    borderRadius: 5,
                    px: 3
                  }}
                >
                  {browser.installText}
                </Button>
              </BrowserCard>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
