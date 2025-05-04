'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';

const navItems = [
  { name: 'Features', href: '#features' },
  { name: 'Download', href: '#browsers' },
  { name: 'FAQ', href: '#faq' }
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ borderBottom: `1px solid ${theme.palette.divider}` }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: { xs: 1, md: 0 }, 
              mr: 2, 
              fontWeight: 700, 
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center' 
            }}
          >
            <Box 
              component="img" 
              src="/images/logo.svg" 
              alt="Zen Analytics Logo"
              sx={{ height: 30, mr: 1, display: { xs: 'none', md: 'flex' } }}
            />
            Zen Analytics
          </Typography>

          {/* Mobile menu */}
          {isMobile && (
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {navItems.map((item) => (
                  <MenuItem key={item.name} onClick={handleCloseNavMenu}>
                    <Link href={item.href} passHref>
                      <Typography textAlign="center">{item.name}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}

          {/* Desktop navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                href={item.href}
                sx={{ mx: 1, color: 'text.primary' }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Action buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>            
            <Button 
              variant="contained" 
              color="primary"
              href="#download"
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                ml: 2,
                fontWeight: 600
              }}
            >
              Get Extension
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
