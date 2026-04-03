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
          <style>{`
            @keyframes hammerSwing {
              0%   { opacity: 1; transform: rotate(0deg); }
              20%  { transform: rotate(-40deg); }
              45%  { transform: rotate(18deg); }
              65%  { transform: rotate(-22deg); }
              82%  { transform: rotate(10deg); }
              100% { opacity: 1; transform: rotate(0deg); }
            }
            @keyframes screwSpin {
              0%   { opacity: 1; transform: rotate(0deg); }
              100% { opacity: 1; transform: rotate(360deg); }
            }
            .brand-hover .hammer-icon,
            .brand-hover .screw-icon {
              opacity: 0;
              transition: opacity 0.15s ease;
            }
            .brand-hover:hover .hammer-icon {
              animation: hammerSwing 0.75s ease forwards;
            }
            .brand-hover:hover .screw-icon {
              animation: screwSpin 0.85s linear forwards;
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
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 0,
                height: 0,
                borderLeft: { xs: '15px solid transparent', md: '17px solid transparent' },
                borderRight: { xs: '15px solid transparent', md: '17px solid transparent' },
                borderBottom: { xs: '16px solid white', md: '18px solid white' },
              }} />
              {/* House body */}
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: { xs: 20, md: 22 },
                height: { xs: 16, md: 18 },
                backgroundColor: 'white',
                borderRadius: '1px',
              }} />
              {/* Door */}
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: { xs: 6, md: 7 },
                height: { xs: 8, md: 9 },
                backgroundColor: 'rgba(7, 101, 212, 0.85)',
                borderRadius: '2px 2px 0 0',
              }} />
            </Box>

            {/* Brand text */}
            <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1.15 }}>
              <Box component="span" sx={{
                fontSize: { xs: '0.78rem', md: '0.88rem' },
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}>
                Montage &amp; Service
              </Box>
              <Box component="span" sx={{
                fontSize: { xs: '0.65rem', md: '0.72rem' },
                fontWeight: 500,
                color: 'rgba(255,255,255,0.78)',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
              }}>
                Hundsbüscher
              </Box>
            </Box>

            {/* Hammer Icon – swings on hover */}
            <Box
              className="hammer-icon"
              sx={{
                position: 'relative',
                width: { xs: 16, md: 18 },
                height: { xs: 20, md: 22 },
                flexShrink: 0,
                transformOrigin: 'bottom center',
                display: { xs: 'none', md: 'block' },
              }}
            >
              {/* Head */}
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: { md: 14 },
                height: { md: 7 },
                backgroundColor: 'white',
                borderRadius: '2px',
              }} />
              {/* Handle */}
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: { md: 3 },
                height: { md: 14 },
                backgroundColor: 'rgba(255,255,255,0.85)',
                borderRadius: '2px',
              }} />
            </Box>

            {/* Screwdriver Icon – spins on hover */}
            <Box
              className="screw-icon"
              sx={{
                position: 'relative',
                width: { xs: 14, md: 16 },
                height: { xs: 20, md: 24 },
                flexShrink: 0,
                transformOrigin: 'center',
                display: { xs: 'none', md: 'block' },
              }}
            >
              {/* Handle */}
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: { md: 10 },
                height: { md: 8 },
                backgroundColor: 'white',
                borderRadius: '3px',
              }} />
              {/* Shaft */}
              <Box sx={{
                position: 'absolute',
                top: { md: 8 },
                left: '50%',
                transform: 'translateX(-50%)',
                width: { md: 3 },
                height: { md: 12 },
                backgroundColor: 'rgba(255,255,255,0.8)',
              }} />
              {/* Tip */}
              <Box sx={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: { md: 7 },
                height: { md: 2 },
                backgroundColor: 'white',
                borderRadius: '1px',
              }} />
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
