'use client';

import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  AccordionProps
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface CollapsibleProps extends Omit<AccordionProps, 'children'> {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  titleVariant?: 'h6' | 'subtitle1' | 'subtitle2' | 'body1';
}

export default function Collapsible({
  title,
  children,
  defaultExpanded = false,
  titleVariant = 'subtitle1',
  ...props
}: CollapsibleProps) {
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      sx={{
        boxShadow: 'none',
        '&:before': { display: 'none' },
        border: 1,
        borderColor: 'divider',
        borderRadius: '8px !important',
        overflow: 'hidden',
        mb: 2,
      }}
      {...props}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        sx={{
          '&.Mui-expanded': {
            minHeight: 48,
          },
        }}
      >
        <Typography variant={titleVariant} fontWeight={500}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>{children}</Box>
      </AccordionDetails>
    </Accordion>
  );
}
