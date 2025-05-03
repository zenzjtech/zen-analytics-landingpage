'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { useTheme } from '@mui/material/styles';
import { Stack } from '@mui/material';

export default function Hero() {
  const theme = useTheme();
  
  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        pt: 8,
        pb: 6,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background decorative element */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.light}22, ${theme.palette.primary.main}11)`,
          zIndex: 0
        }}
      />
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4, alignItems: 'center' }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              component="h1"
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: 700 }}
            >
              Shop Smarter with
              <Box component="span" sx={{ color: 'primary.main', display: 'block' }}>
                Zen Analytics
              </Box>
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Get real-time analytics insights on 25+ platforms in one place. Save time tracking 
              performance and make data-driven decisions with ease.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button
                variant="contained"
                size="large"
                sx={{ mr: 2, px: 4, py: 1.5, fontWeight: 600 }}
                href="#download"
              >
                Get It Free
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{ px: 4, py: 1.5 }}
                href="#features"
              >
                Learn More
              </Button>
            </Box>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Paper
              elevation={4}
              sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: 'background.paper',
                position: 'relative'
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  height: '100%',
                  maxHeight: 300,
                  bgcolor: 'background.default',
                  borderRadius: 1,
                  p: 2,
                  overflowY: 'hidden'
                }}
              >
                {/* Example of Analytics Dashboard Preview */}
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>Zen Analytics Dashboard</Typography>
                
                {/* Analytics Cards */}
                <Stack spacing={2}>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Paper sx={{ p: 2, flex: 1, bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100' }}>
                      <Typography variant="caption" color="primary">Google Analytics</Typography>
                      <Typography variant="h6">10,250</Typography>
                      <Typography variant="body2" color="text.secondary">Monthly Visitors</Typography>
                    </Paper>
                    <Paper sx={{ p: 2, flex: 1, bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100' }}>
                      <Typography variant="caption" color="primary">Facebook Pixel</Typography>
                      <Typography variant="h6">$2,345</Typography>
                      <Typography variant="body2" color="text.secondary">Ad Spend</Typography>
                    </Paper>
                  </Box>
                  <Paper sx={{ p: 2, bgcolor: theme.palette.mode === 'dark' ? 'grey.800' : 'grey.100' }}>
                    <Typography variant="caption" color="primary">Combined Analytics</Typography>
                    <Typography variant="h6">3.2%</Typography>
                    <Typography variant="body2" color="text.secondary">Conversion Rate</Typography>
                  </Paper>
                </Stack>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
