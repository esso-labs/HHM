'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const sections = [
  { id: 'reinigung', label: 'Reinigung' },
  { id: 'umzuege', label: 'Umzüge' },
  { id: 'wir', label: 'Wir' },
  { id: 'bewertungen', label: 'Bewertungen' },
  { id: 'faq', label: 'FAQ' },
  { id: 'projekte', label: 'Projekte' },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const drawerContent = (
    <Box sx={{ p: 2 }}>
      <IconButton onClick={handleDrawerToggle} sx={{ float: 'right', mb: 2 }}>
        <CloseIcon />
      </IconButton>
      <List sx={{ clear: 'both' }}>
        {sections.map((section) => (
          <ListItem key={section.id} disablePadding>
            <ListItemButton
              className="nav-link"
              onClick={() => {
                scrollToSection(section.id);
                setMobileOpen(false);
              }}
            >
              <ListItemText primary={section.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* top info bar */}
      <AppBar 
        position="absolute" 
        suppressHydrationWarning
        sx={{ 
          backgroundColor: '#ccf15f',
          borderRadius: '16px',
          maxWidth: '70%',
          left: '50%',
          transform: 'translateX(-50%)',
          top: 26,
        }}>
        <Toolbar>
          <Box
            component="img"
            src="/img/logo.png"
            alt="Logo"
            sx={{
              height: { xs: 60, md: 45 },
              cursor: 'pointer',
              marginRight: 2,
              mt: { xs: 0, md: 0.5 }
            }}
            onClick={() => scrollToSection('start')}
          />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, flex: 1, justifyContent: 'right', alignItems: 'center' }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                className="nav-link"
                sx={{ color: 'black' }}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </Button>
            ))}
            <Button
              variant="contained"
              href="https://wa.me/49176475615"
              target="_blank"
              sx={{ backgroundColor: '#0765d4', color: 'white', '&:hover': { backgroundColor: '#0552a8' }, fontWeight: 'bold', px: 3, py: 1, ml: 2 }}
              endIcon={<ArrowForwardIcon />}
            >
              Jetzt anfragen
            </Button>
          </Box>

          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawerContent}
      </Drawer>    </>
  );
}
