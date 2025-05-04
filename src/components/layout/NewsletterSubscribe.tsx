'use client';

import * as React from 'react';
import { Box, Typography, TextField, Button, useTheme } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

export default function NewsletterSubscribe() {
  const theme = useTheme();
  
  return (
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
  );
}
