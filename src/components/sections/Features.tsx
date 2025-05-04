'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CalculateIcon from '@mui/icons-material/Calculate';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CompareIcon from '@mui/icons-material/Compare';
import SecurityIcon from '@mui/icons-material/Security';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 2,
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: (theme) => theme.shadows[4],
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: 2,
          width: 60,
          height: 60,
          borderRadius: '50%',
          backgroundColor: 'primary.light',
          color: 'primary.main',
        }}
      >
        {icon}
      </Box>
      <Typography variant="h6" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  );
}

export default function Features() {
  const features = [
    {
      icon: <CalculateIcon fontSize="large" />,
      title: 'Automatic Calculations',
      description: 'Instantly calculate and interpret analytics data across multiple platforms, saving hours of manual work.'
    },
    {
      icon: <AttachMoneyIcon fontSize="large" />,
      title: 'Save Money',
      description: 'Identify underperforming marketing campaigns quickly and optimize your ad spend for better ROI.'
    },
    {
      icon: <CompareIcon fontSize="large" />,
      title: 'Compare Across Data Types',
      description: 'Compare metrics from different analytics platforms in one view, making cross-platform analysis simple.'
    },
    {
      icon: <SecurityIcon fontSize="large" />,
      title: 'Privacy Focused',
      description: 'Your data stays on your browser. We never store your analytics data on our servers.'
    },
  ];

  return (
    <Box
      id="features"
      sx={{
        py: 8,
        bgcolor: (theme) => theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
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
            Why Use Zen Analytics?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Our extension enhances your analytics experience by providing clear and precise
            insights when you need them most and saving time.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {features.map((feature, index) => (
            <Box 
              key={index} 
              sx={{ 
                flexBasis: {
                  xs: '100%',
                  sm: 'calc(50% - 16px)',
                  md: 'calc(25% - 24px)'
                }
              }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
