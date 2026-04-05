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
  { id: 'reinigung', label: 'Unser Service' },
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
    <Box sx={{ p: 2.2, width: 'min(290px, 85vw)' }}>
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
          maxWidth: { xs: '94%', sm: '88%', md: '74%', lg: '68%', xl: '56%' },
          left: '50%',
          transform: 'translateX(-50%)',
          top: { xs: 12, md: 22, lg: 18 },
        }}>
        <Toolbar sx={{ minHeight: { xs: 74, md: 82 }, px: { xs: 1.4, md: 2.2 } }}>
          <style>{`
            @keyframes serviceShimmer {
              0%   { background-position: -200% center; }
              100% { background-position: 200% center; }
            }
            .brand-hover .service-label {
              background: linear-gradient(90deg, #ffffff 20%, #7dd3fc 45%, #38bdf8 55%, #ffffff 80%);
              background-size: 200% auto;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
              transition: background-position 0.4s ease;
            }
            .brand-hover:hover .service-label {
              animation: serviceShimmer 1.2s linear forwards;
            }
            .brand-name {
              display: inline-block;
              color: rgba(255,255,255,0.72);
              letter-spacing: 0.04em;
              transition:
                letter-spacing 0.45s cubic-bezier(0.34,1.56,0.64,1),
                color 0.4s ease,
                text-shadow 0.4s ease;
            }
            .brand-hover:hover .brand-name {
              letter-spacing: 0.18em;
              color: #7dd3fc;
              text-shadow:
                0 0 8px rgba(125,211,252,0.9),
                0 0 20px rgba(56,189,248,0.6),
                0 0 36px rgba(7,101,212,0.4);
            }
          `}</style>

          {/* Brand: House Icon + Text */}
          <Box
            className="brand-hover"
            onClick={() => scrollToSection('start')}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: { xs: 0.8, md: 1 },
              cursor: 'pointer',
              mr: { xs: 1, md: 2 },
              flexShrink: 0,
            }}
          >
            {/* CSS House Icon */}
            <Box
              sx={{
                position: 'relative',
                width: { xs: 30, md: 34 },
                height: { xs: 30, md: 34 },
                flexShrink: 0,
                filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.45))',
              }}
            >
              {/* Roof triangle */}
              <Box sx={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: 0, height: 0,
                borderLeft: { xs: '15px solid transparent', md: '17px solid transparent' },
                borderRight: { xs: '15px solid transparent', md: '17px solid transparent' },
                borderBottom: { xs: '16px solid white', md: '18px solid white' },
              }} />
              {/* House body */}
              <Box sx={{
                position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
                width: { xs: 20, md: 22 }, height: { xs: 16, md: 18 },
                backgroundColor: 'white', borderRadius: '1px',
              }} />
              {/* Door */}
              <Box sx={{
                position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
                width: { xs: 6, md: 7 }, height: { xs: 8, md: 9 },
                backgroundColor: 'rgba(7, 101, 212, 0.85)', borderRadius: '2px 2px 0 0',
              }} />
            </Box>

            {/* Brand text */}
            <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
              <Box component="span" className="service-label" sx={{
                fontSize: { xs: '0.78rem', md: '0.88rem' },
                fontWeight: 800,
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}>
                Montage &amp; Service
              </Box>
              <Box component="span" className="brand-name" sx={{
                fontSize: { xs: '0.65rem', md: '0.72rem' },
                fontWeight: 500,
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
              }}>
                Hundsbüscher
              </Box>
            </Box>
          </Box>

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
