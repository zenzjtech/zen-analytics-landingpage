import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material/styles';

// Styled component for comparison item
const ComparisonItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
}));

// Comparison feature item
interface ComparisonFeatureProps {
  text: string;
  available: boolean;
}

function ComparisonFeature({ text, available }: ComparisonFeatureProps) {
  return (
    <ComparisonItem>
      {available ? (
        <CheckCircleIcon color="success" sx={{ mr: 1 }} />
      ) : (
        <CancelIcon color="error" sx={{ mr: 1 }} />
      )}
      <Typography variant="body1">{text}</Typography>
    </ComparisonItem>
  );
}

export default function Comparison() {
  // Define the comparison features
  const comparisonFeatures = [
    {
      text: 'View analytics from multiple platforms in one place',
      withExtension: true,
      withoutExtension: false,
    },
    {
      text: 'Real-time alerts for traffic spikes and drops',
      withExtension: true,
      withoutExtension: false,
    },
    {
      text: 'Save time with instant comparisons',
      withExtension: true,
      withoutExtension: false,
    },
    {
      text: 'Identify underperforming analytics metrics',
      withExtension: true,
      withoutExtension: false,
    },
    {
      text: 'Customize dashboard for relevant metrics',
      withExtension: true,
      withoutExtension: false,
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: (theme) => theme.palette.mode === 'dark' ? 'grey.900' : 'grey.50',
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
            See The Difference
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            Discover how Zen Analytics enhances your analytics experience by making data insights
            convenient and easy to understand.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                height: '100%',
                bgcolor: (theme) => theme.palette.mode === 'dark' ? 'error.dark' : '#ffebee',
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ color: 'error.main', fontWeight: 600 }}>
                Without Extension
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.secondary' }}>
                Dealing with analytics the old way
              </Typography>

              {comparisonFeatures.map((feature, index) => (
                <ComparisonFeature
                  key={index}
                  text={feature.text}
                  available={feature.withoutExtension}
                />
              ))}
              
              <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
                <Typography variant="body2" color="text.secondary" fontStyle="italic">
                  "Need to open multiple tabs to check all my analytics data. So much time wasted."
                </Typography>
              </Box>
            </Paper>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: 4, 
                height: '100%',
                bgcolor: (theme) => theme.palette.mode === 'dark' ? 'success.dark' : '#e8f5e9',
                borderRadius: 2,
              }}
            >
              <Typography variant="h5" gutterBottom sx={{ color: 'success.main', fontWeight: 600 }}>
                With Zen Analytics
              </Typography>
              <Typography variant="subtitle1" sx={{ mb: 3, color: 'text.secondary' }}>
                Simple, powerful analytics insights
              </Typography>

              {comparisonFeatures.map((feature, index) => (
                <ComparisonFeature
                  key={index}
                  text={feature.text}
                  available={feature.withExtension}
                />
              ))}
              
              <Box sx={{ mt: 3, p: 2, bgcolor: 'background.paper', borderRadius: 1 }}>
                <Typography variant="body2" color="text.secondary" fontStyle="italic">
                  "Now I can instantly see all my analytics metrics in one place. Best extension ever!"
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
