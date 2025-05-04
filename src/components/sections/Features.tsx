'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from '@mui/material/styles';
import { Fade } from '@mui/material';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  const theme = useTheme();
  
  return (
    <Fade in={true} timeout={1000} style={{ transitionDelay: `${delay}ms` }}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          borderRadius: 4,
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'background.paper',
          border: '1px solid',
          borderColor: 'grey.100',
          boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
          transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
            '& .feature-icon-circle': {
              transform: 'scale(1.1)',
              boxShadow: `0 10px 25px ${theme.palette.primary.main}30`,
            }
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
            opacity: 0.7
          }
        }}
      >
        <Box
          className="feature-icon-circle"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mb: 3,
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: theme.palette.mode === 'dark' ? 'primary.dark' : 'primary.light',
            color: 'primary.main',
            transition: 'all 0.3s ease',
            boxShadow: `0 5px 15px ${theme.palette.primary.main}20`,
          }}
        >
          {React.cloneElement(icon as React.ReactElement, { fontSize: 'large', style: { fontSize: '2rem' } })}
        </Box>
        <Typography 
          variant="h5" 
          component="h3" 
          gutterBottom 
          sx={{ 
            fontWeight: 700, 
            mb: 2,
            position: 'relative'
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{
            lineHeight: 1.7,
            fontSize: '1rem'
          }}
        >
          {description}
        </Typography>
      </Paper>
    </Fade>
  );
}

export default function Features() {
  const theme = useTheme();
  
  const features = [
    {
      icon: <DashboardIcon fontSize="large" />,
      title: 'Unified Analytics Dashboard',
      description: 'Monitor 20+ platforms simultaneously (Google Analytics, Tag Manager, Meta Ads, TikTok, Twitter, etc.) in one streamlined interface.'
    },
    {
      icon: <VideoLibraryIcon fontSize="large" />,
      title: 'Session Recording & Export',
      description: 'Capture entire browsing sessions with all analytics events and export findings for seamless reporting and troubleshooting.'
    },
    {
      icon: <FilterAltIcon fontSize="large" />,
      title: 'Advanced Filtering & Organization',
      description: 'Segment, group, sort, and organize trackers by classification, platform, processing time, and more for comprehensive analytics management.'
    },
    {
      icon: <CodeIcon fontSize="large" />,
      title: 'GTM DataLayer Inspector',
      description: 'Dedicated tools to examine Google Tag Manager events and dataLayer pushes in detail for precise implementation debugging.'
    },
  ];

  return (
    <Box
      id="features"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: (theme) => theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decoration elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.light}15, transparent 70%)`,
          opacity: 0.5,
          zIndex: 0
        }}
      />
      
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.light}10, transparent 70%)`,
          opacity: 0.4,
          zIndex: 0
        }}
      />
      
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Fade in={true} timeout={800}>
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              component="h2"
              variant="h3"
              color="text.primary"
              gutterBottom
              sx={{ 
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '2.75rem' },
                position: 'relative',
                display: 'inline-block',
                pb: 2,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  borderRadius: '2px',
                  backgroundColor: 'primary.main',
                }
              }}
            >
              Why Use Zen Analytics?
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary" 
              sx={{ 
                maxWidth: 800, 
                mx: 'auto',
                mt: 3,
                fontSize: { xs: '1rem', md: '1.15rem' }, 
                lineHeight: 1.6,
                opacity: 0.9
              }}
            >
              Simplify your analytics workflow with unified tracking management across all major platforms. Save hours of debugging time and gain confidence in your implementation with our comprehensive suite of visualization tools.
            </Typography>
          </Box>
        </Fade>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { 
            xs: '1fr', 
            sm: 'repeat(2, 1fr)', 
            md: 'repeat(4, 1fr)' 
          },
          gap: 4
        }}>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={300 + (index * 150)}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
