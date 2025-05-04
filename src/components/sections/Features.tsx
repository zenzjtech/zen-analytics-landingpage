'use client';

import React from 'react';
import { Container, Grid, Typography, Box, useTheme } from '@mui/material';

const Features: React.FC = () => {
  const theme = useTheme();

  // Feature data
  const features = [
    {
      title: 'Unified Analytics Tracking',
      description: 'Monitor 20+ analytics platforms including GA4, GTM, Meta, TikTok, Twitter, and more in one place.',
      bgColor: '#E7FFF8',
      icon: '📊',
    },
    {
      title: 'Multiple Access Methods',
      description: 'Access insights via browser toolbar, DevTools panel (F12), or notification alerts.',
      bgColor: '#EBF3FF',
      icon: '🔄',
      centerContent: true,
      hasLargeImage: true,
    },
    {
      title: 'Session Capture & Export',
      description: 'Record your browsing analysis and export findings easily for comprehensive reporting.',
      bgColor: '#FFF8E7',
      icon: '💾',
    },
    {
      title: 'Advanced Filtering Options',
      description: 'Segment and organize trackers by classification, platform, processing time, and more.',
      bgColor: '#FFF0EB',
      icon: '🔍',
      hasVideo: true,
    },
    {
      title: 'GTM Tools & dataLayer Inspector',
      description: 'Examine Google Tag Manager events and dataLayer pushes in detail with dedicated tools.',
      bgColor: '#EBF6FF',
      icon: '⚙️',
    },
  ];

  return (
    <Box
      component="section"
      sx={{
        py: 8,
        backgroundColor: theme.palette.background.default,
      }}
      id="features"
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{ mb: 6, fontWeight: 700 }}
        >
          Key Features
        </Typography>
        
        <Box
          sx={{
            display: {
              xs: 'flex',
              md: 'grid'
            },
            flexDirection: {
              xs: 'column'
            },
            gridTemplateColumns: {
              md: 'repeat(3, 1fr)',
            },
            gridTemplateRows: {
              md: 'repeat(2, auto)'
            },
            gridTemplateAreas: {
              md: '"left center right" "bottom-left bottom-left bottom-right"'
            },
            gap: 3,
          }}
        >
          <Box sx={{ gridArea: { md: 'left' } }}>
            <FeatureBox feature={features[0]} />
          </Box>
          <Box sx={{ gridArea: { md: 'center' } }}>
            <CenterFeatureBox feature={features[1]} />
          </Box>
          <Box sx={{ gridArea: { md: 'right' } }}>
            <FeatureBox feature={features[2]} />
          </Box>
          <Box sx={{ gridArea: { md: 'bottom-left' } }}>
            <FeatureBoxWithVideo feature={features[3]} />
          </Box>
          <Box sx={{ gridArea: { md: 'bottom-right' } }}>
            <FeatureBox feature={features[4]} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

interface FeatureBoxProps {
  feature: {
    title: string;
    description: string;
    bgColor: string;
    icon: string;
    hasVideo?: boolean;
  };
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ feature }) => {
  return (
    <Box
      sx={{
        bgcolor: feature.bgColor,
        borderRadius: 4,
        p: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        },
      }}
    >
      <Box
        sx={{
          fontSize: '3rem',
          mb: 2,
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {feature.icon}
      </Box>
      
      <Typography 
        variant="h6" 
        component="h3" 
        sx={{ 
          fontWeight: 600,
          fontSize: '1.1rem',
          mb: 1 
        }}
      >
        {feature.title}
      </Typography>
      
      <Typography 
        variant="body2" 
        color="text.secondary"
        sx={{ 
          fontSize: '0.875rem',
          lineHeight: 1.5
        }}
      >
        {feature.description}
      </Typography>

      {feature.hasVideo && (
        <Box
          sx={{
            mt: 3,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component="div"
            sx={{
              width: '80%',
              height: 0,
              paddingBottom: '50%',
              position: 'relative',
              borderRadius: 2,
              overflow: 'hidden',
              bgcolor: 'rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              component="div"
              sx={{
                position: 'absolute',
                width: 48,
                height: 48,
                borderRadius: '50%',
                bgcolor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box
                component="div"
                sx={{
                  width: 0,
                  height: 0,
                  borderTop: '8px solid transparent',
                  borderBottom: '8px solid transparent',
                  borderLeft: '12px solid #333',
                  ml: 1,
                }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

interface FeatureBoxWithVideoProps {
  feature: {
    title: string;
    description: string;
    bgColor: string;
    icon: string;
    hasVideo?: boolean;
  };
}

const FeatureBoxWithVideo: React.FC<FeatureBoxWithVideoProps> = ({ feature }) => {
  return (
    <Box
      sx={{
        bgcolor: feature.bgColor,
        borderRadius: 4,
        p: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        },
      }}
    >
      <Box
        sx={{
          fontSize: '3rem',
          mb: 2,
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {feature.icon}
      </Box>
      
      <Typography 
        variant="h6" 
        component="h3" 
        sx={{ 
          fontWeight: 600,
          fontSize: '1.1rem',
          mb: 1 
        }}
      >
        {feature.title}
      </Typography>
      
      <Typography 
        variant="body2" 
        color="text.secondary"
        sx={{ 
          fontSize: '0.875rem',
          lineHeight: 1.5,
          mb: 3
        }}
      >
        {feature.description}
      </Typography>

      <Box
        sx={{
          mt: 'auto',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          component="div"
          sx={{
            width: '100%',
            height: 0,
            paddingBottom: '56.25%', // 16:9 aspect ratio
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden',
            bgcolor: 'rgba(0,0,0,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            component="div"
            sx={{
              position: 'absolute',
              width: 48,
              height: 48,
              borderRadius: '50%',
              bgcolor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
            }}
          >
            <Box
              component="div"
              sx={{
                width: 0,
                height: 0,
                borderTop: '8px solid transparent',
                borderBottom: '8px solid transparent',
                borderLeft: '12px solid #333',
                ml: 1,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

interface CenterFeatureBoxProps {
  feature: {
    title: string;
    description: string;
    bgColor: string;
    icon: string;
    centerContent?: boolean;
    hasLargeImage?: boolean;
  };
}

const CenterFeatureBox: React.FC<CenterFeatureBoxProps> = ({ feature }) => {
  return (
    <Box
      sx={{
        bgcolor: feature.bgColor,
        borderRadius: 4,
        p: 4,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        },
      }}
    >
      <Box
        sx={{
          fontSize: '3rem',
          mb: 2,
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {feature.icon}
      </Box>
      
      <Typography 
        variant="h6" 
        component="h3" 
        sx={{ 
          fontWeight: 600,
          fontSize: '1.1rem',
          mb: 1 
        }}
      >
        {feature.title}
      </Typography>
      
      <Typography 
        variant="body2" 
        color="text.secondary"
        sx={{ 
          fontSize: '0.875rem',
          lineHeight: 1.5,
          mb: 3
        }}
      >
        {feature.description}
      </Typography>

      {feature.hasLargeImage && (
        <Box
          sx={{
            width: '100%',
            mt: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src="/images/features/dashboard-demo.png"
            alt="Dashboard Demo"
            sx={{
              width: '100%',
              maxWidth: '100%',
              height: 'auto',
              borderRadius: 2,
              boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default Features;
