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

const sections = [
  { id: 'start', label: 'Start' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'about', label: 'Über uns' },
  { id: 'contact', label: 'Kontakt' },
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
      <AppBar position="sticky" sx={{ backgroundColor: '#1a237e' }}>
        <Toolbar>
          <Box
            component="img"
            src="/img/logo.png"
            alt="Logo"
            sx={{
              height: { xs: 60, md: 45 },
              cursor: 'pointer',
              marginRight: 2,
            }}
            onClick={() => scrollToSection('start')}
          />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, flex: 1, justifyContent: 'right' }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                color="inherit"
                onClick={() => scrollToSection(section.id)}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: 1,
                  },
                }}
              >
                {section.label}
              </Button>
            ))}
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
      </Drawer>
    </>
  );
}
