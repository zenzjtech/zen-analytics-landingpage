import React from 'react';
import { Paper, Typography, Box, PaperProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface CardProps extends PaperProps {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  centered?: boolean;
  children?: React.ReactNode;
}

const StyledCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: theme.shape.borderRadius * 2,
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

export default function Card({
  title,
  subtitle,
  icon,
  centered = false,
  children,
  ...props
}: CardProps) {
  return (
    <StyledCard {...props}>
      {icon && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: centered ? 'center' : 'flex-start',
            mb: 2,
          }}
        >
          {icon}
        </Box>
      )}
      
      {title && (
        <Typography
          variant="h6"
          component="h3"
          gutterBottom
          sx={{
            textAlign: centered ? 'center' : 'left',
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
      )}
      
      {subtitle && (
        <Typography
          variant="subtitle2"
          color="text.secondary"
          gutterBottom
          sx={{
            textAlign: centered ? 'center' : 'left',
          }}
        >
          {subtitle}
        </Typography>
      )}
      
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: centered ? 'center' : 'flex-start',
          textAlign: centered ? 'center' : 'left',
        }}
      >
        {children}
      </Box>
    </StyledCard>
  );
}
