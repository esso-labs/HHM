'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
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
    <Box sx={{ p: 2.2, minWidth: 290 }}>
      <IconButton onClick={handleDrawerToggle} sx={{ float: 'right', mb: 1.5, color: '#ffffff' }}>
        <CloseIcon />
      </IconButton>
      <List sx={{ clear: 'both', mt: 2 }}>
        {sections.map((section) => (
          <ListItem key={section.id} disablePadding>
            <ListItemButton
              className="nav-link"
              sx={{ borderRadius: 2, mb: 0.4, color: '#ffffff', '&:hover': { backgroundColor: 'rgba(255,255,255,0.16)' } }}
              onClick={() => {
                scrollToSection(section.id);
                setMobileOpen(false);
              }}
            >
              <ListItemText primary={section.label} primaryTypographyProps={{ fontWeight: 700 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        fullWidth
        variant="contained"
        href="https://wa.me/49176475615"
        target="_blank"
        sx={{
          mt: 2,
          borderRadius: '999px',
          backgroundColor: '#ffffff',
          color: '#0552a8',
          '&:hover': { backgroundColor: '#f3f8ff' },
          fontWeight: 700,
        }}
        endIcon={<ArrowForwardIcon />}
      >
        Jetzt anfragen
      </Button>
    </Box>
  );

  return (
    <>
      {/* top info bar */}
      <AppBar 
        position="fixed" 
        suppressHydrationWarning
        sx={{ 
          backgroundColor: 'rgba(7, 101, 212, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.22)',
          boxShadow: '0 16px 35px rgba(6, 33, 77, 0.28)',
          borderRadius: '18px',
          maxWidth: { xs: '94%', md: '74%' },
          left: '50%',
          transform: 'translateX(-50%)',
          top: { xs: 12, md: 22 },
        }}>
        <Toolbar sx={{ minHeight: { xs: 74, md: 82 }, px: { xs: 1.4, md: 2.2 } }}>
          <Box
            component="img"
            src="/img/logo.png"
            alt="Logo"
            sx={{
              height: { xs: 78, md: 58 },
              cursor: 'pointer',
              marginRight: 2,
              mt: { xs: 0, md: 0.2 }
            }}
            onClick={() => scrollToSection('start')}
          />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.2, flex: 1, justifyContent: 'right', alignItems: 'center' }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                className="nav-link"
                sx={{
                  color: '#ffffff',
                  px: 1.7,
                  py: 0.8,
                  fontSize: '0.92rem',
                  fontWeight: 700,
                }}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </Button>
            ))}
            <Button
              variant="contained"
              href="https://wa.me/49176475615"
              target="_blank"
              sx={{
                backgroundColor: '#ffffff',
                color: '#0552a8',
                '&:hover': { backgroundColor: '#f3f8ff' },
                fontWeight: 'bold',
                px: 2.6,
                py: 1,
                ml: 1.2,
                borderRadius: '999px',
              }}
              endIcon={<ArrowForwardIcon />}
            >
              Jetzt anfragen
            </Button>
          </Box>

          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' }, color: '#ffffff' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            background: 'linear-gradient(180deg, #0765d4 0%, #0453ad 100%)',
            borderTopLeftRadius: 18,
            borderBottomLeftRadius: 18,
          },
        }}
      >
        {drawerContent}
      </Drawer>    </>
  );
}
