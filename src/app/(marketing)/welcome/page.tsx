import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// Define pixels with their display names and image paths
const PIXELS = [
  { name: 'Appsflyer', image: '/images/network/Appsflyer.png' },
  { name: 'GA4', image: '/images/network/GA4.svg' },
  { name: 'GTM', image: '/images/network/GTM.svg' },
  { name: 'Meta (Facebook)', image: '/images/network/Facebook.png' },
  { name: 'Microsoft', image: '/images/network/Microsoft.svg' },
  { name: 'Mixpanel', image: '/images/network/Mixpanel.png' },
  { name: 'Plausible', image: '/images/network/Plausible.png' },
  { name: 'Taboola', image: '/images/network/Taboola.png' },
  { name: 'TikTok', image: '/images/network/TikTok.png' },
];

export default function WelcomePage() {
  return (
    <Container maxWidth="xl" sx={{ py: { xs: 6, md: 10 } }}>
      {/* Centered Title */}
      <Typography 
        variant="h3" 
        component="h1" 
        gutterBottom 
        sx={{ 
          fontWeight: 700, 
          color: 'text.primary',
          mb: 2,
          lineHeight: 1.2,
          textAlign: 'center',
        }}
      >
        Welcome to Zen Analytics Pixel Helper
      </Typography>
      
      {/* Subtitle */}
      <Typography 
        variant="subtitle1" 
        component="p" 
        sx={{ 
          color: 'text.secondary', 
          fontWeight: 500,
          fontSize: '1.4rem',
          textAlign: 'center',
          mb: 0,
        }}
      >
        📌 Please locate and pin the extension for easy access.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' }, 
          alignItems: 'center',
          justifyContent: 'center',
          gap: { xs: 6, md: 12 }, // Increased gap for better separation
          mt: { xs: 8, md: 10 }, // Consistent margin top
        }}
      >
        {/* Left Side: Content */}
        <Box
          sx={{
            flex: { xs: '1 1 auto', md: '1 1 40%' },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' }, // Left align on desktop
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Intro Message */}
          <Typography 
            variant="h6" 
            component="p" 
            sx={{ 
              mb: 4, 
              color: 'text.secondary', 
              fontWeight: 400,
              fontSize: '1.1rem',
              lineHeight: 1.6,
            }}
          >
              The welcome page has installed several pixel trackers:
          </Typography>

          {/* List of installed pixels */}
          <Box sx={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: { xs: 'center', md: 'flex-start' }, 
            gap: 2, // Increased gap between chips
            mb: 6,
          }}>
            {PIXELS.map((pixel) => (
                <Box key={pixel.name} sx={{ 
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 2.5, 
                    py: 1.5, 
                    bgcolor: 'background.paper', 
                    borderRadius: 3, 
                    color: 'text.primary',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    boxShadow: '0px 2px 4px rgba(0,0,0,0.04)',
                    transition: 'all 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      boxShadow: '0px 8px 16px rgba(0,0,0,0.08)',
                      borderColor: 'primary.main',
                    }
                }}>
                    <Box 
                      component="img" 
                      src={pixel.image} 
                      alt={pixel.name}
                      sx={{ width: 24, height: 24, objectFit: 'contain' }}
                    />
                    {pixel.name}
                </Box>
            ))}
          </Box>

          {/* Footer Message */}
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'text.secondary',
              fontSize: '1.1rem',
              lineHeight: 1.8,
              bgcolor: 'grey.50',
              p: 4,
              borderRadius: 4,
              borderLeft: '6px solid',
              borderColor: 'primary.main',
              width: '100%',
            }}
          >
            If everything is working correctly, you should see them on the extension popup UI. 
            On your existing pages, please refresh so that extension can see/check the event.
            <br />
            <Box component="span" sx={{ color: 'primary.main', fontWeight: 700, mt: 2, display: 'inline-block' }}>
              <Typography variant="subtitle1" component="span" sx={{ color: 'primary.main', fontWeight: 700 }}>
                Happy debugging.
              </Typography>
            </Box>
          </Typography>
        </Box>

        {/* Right Side: Video */}
        <Box
          sx={{
            flex: { xs: '1 1 auto', md: '1 1 60%' },
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="video"
            src="/media/zen-analytics-welcome-image.webm"
            autoPlay
            loop
            muted
            playsInline
            sx={{
              width: '100%',
              maxWidth: '900px', // Allow video to be larger in horizontal layout
              borderRadius: 4,
              boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.1)', // Enhanced shadow
              backgroundColor: '#000',
              objectFit: 'cover', // Ensure it fills the space nicely
            }}
          />
        </Box>

      </Box>
    </Container>
  );
}
