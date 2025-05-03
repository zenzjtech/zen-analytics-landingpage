import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Copyright from '../Copyright';

const footerLinks = [
  {
    title: 'Download',
    links: [
      { name: 'Chrome', href: '#' },
      { name: 'Firefox', href: '#' },
      { name: 'Edge', href: '#' },
      { name: 'Safari', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Docs', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '#' },
      { name: 'Contact', href: '#' },
      { name: 'Terms', href: '#' },
      { name: 'Careers', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: 8,
        bgcolor: 'background.paper',
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {footerLinks.map((section) => (
            <Grid item xs={12} sm={4} key={section.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {section.title}
              </Typography>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.links.map((link) => (
                  <li key={link.name} style={{ paddingBottom: '0.5rem' }}>
                    <Link href={link.href} variant="body2" color="text.secondary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Connect With Us
            </Typography>
            <Stack direction="row" spacing={2}>
              <Link href="#" color="inherit">
                <TwitterIcon />
              </Link>
              <Link href="#" color="inherit">
                <GitHubIcon />
              </Link>
              <Link href="#" color="inherit">
                <LinkedInIcon />
              </Link>
            </Stack>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" color="text.secondary">
                Subscribe to our newsletter for updates
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Box sx={{ mt: 5 }}>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
}
