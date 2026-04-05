'use client';

import React from 'react';
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion, useMotionValue, useTransform, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  const highlights = ['Schnelle Terminvergabe', 'Transparente Preise', 'Fester Ansprechpartner'];

  const handleMouseMove = (event) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <Box
      id="start"
      className="hero-gradient section"
      sx={{
        backgroundImage: 'url(/img/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#0f172a',
        minHeight: { xs: '100svh', sm: '85vh', md: '92vh', lg: '100vh' },
        pt: { xs: 12, sm: 14, md: 20, lg: 14 },
        pb: { xs: 6, sm: 10, md: 12, lg: 5 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        // Nest Hub 1024×600 — landscape short screen at md breakpoint
        '@media (min-width: 900px) and (max-height: 680px)': {
          paddingTop: '6.5rem',
          paddingBottom: '2rem',
        },
        // Samsung S8 360×740, iPhone SE 375×667 — short xs screens
        '@media (max-width: 599px) and (max-height: 750px)': {
          paddingBottom: '2.5rem',
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(244, 248, 255, 0.36) 0%, rgba(244, 248, 255, 0.8) 58%, rgba(244, 248, 255, 0.95) 100%)',
          zIndex: 1,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: -80,
          left: -60,
          width: { xs: 180, md: 340 },
          height: { xs: 180, md: 340 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(46,140,255,0.42) 0%, rgba(46,140,255,0) 72%)',
          zIndex: 1,
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          right: -110,
          bottom: -100,
          width: { xs: 220, md: 380 },
          height: { xs: 220, md: 380 },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(7,101,212,0.32) 0%, rgba(7,101,212,0) 72%)',
          zIndex: 1,
        }}
      />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          style={{
            rotateX: shouldReduceMotion ? 0 : rotateX,
            rotateY: shouldReduceMotion ? 0 : rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <Typography
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              px: 1.7,
              py: 0.7,
              borderRadius: '999px',
              background: 'rgba(7, 101, 212, 0.12)',
              color: '#0552a8',
              fontWeight: 700,
              fontSize: { xs: '0.8rem', md: '0.87rem' },
              letterSpacing: '0.05em',
              mb: { xs: 2.1, lg: 1.2 },
            }}
          >
            Möbel- & Küchenmontage vom Profi
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              color: '#0f172a',
              fontWeight: 800,
              mt: 2,
              letterSpacing: '-0.02em',
              lineHeight: { xs: 1.18, md: 1.03 },
              fontSize: { xs: 'clamp(1.75rem, 7.5vw, 2.05rem)', sm: '2.6rem', md: '4rem' },
              textWrap: 'balance',
            }}
          >
            
            <Box component="span" sx={{ color: '#0765d4', display: 'block' }}>
              Professionelle Möbelmontage pünktlich und in ganz Deutschland für dich unterwegs.
            </Box>
          </Typography>
        </motion.div>

        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', mt: 2.2, mb: 1.2, gap: 0.8 }}
        >
          {highlights.map((item) => (
            <Box
              key={item}
              sx={{
                px: 1.3,
                py: 0.45,
                borderRadius: '999px',
                background: 'rgba(255,255,255,0.74)',
                border: '1px solid rgba(7,101,212,0.16)',
                color: '#0f172a',
                fontWeight: 600,
                fontSize: '0.84rem',
              }}
            >
              {item}
            </Box>
          ))}
        </Stack>

        <Typography
          variant="h5"
          component="p"
          sx={{
            mt: 3,
            fontWeight: 800,
            fontSize: { xs: '1.25rem', md: '1.6rem' },
            color: '#0f172a',
            letterSpacing: '-0.01em',
          }}
        >
          Montage &amp; Service Hundsbüscher.
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 1.5,
            maxWidth: 680,
            mx: 'auto',
            fontSize: { xs: 'clamp(1rem, 4.5vw, 1.12rem)', md: '1.18rem' },
            fontWeight: 500,
            color: 'rgba(15, 23, 42, 0.9)',
            textWrap: 'pretty',
          }}
        >
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: 1,
            mb: 4,
            maxWidth: 680,
            mx: 'auto',
            fontSize: { xs: 'clamp(1rem, 4.5vw, 1.12rem)', md: '1.18rem' },
            fontWeight: 500,
            color: 'rgba(15, 23, 42, 0.9)',
            textWrap: 'pretty',
          }}
        >
          Jetzt unverbindlich anfragen und noch heute ein Angebot erhalten.
        </Typography>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
            <Button
              variant="contained"
              size="large"
              href="https://wa.me/49176475615"
              target="_blank"
              sx={{
                backgroundColor: '#0765d4',
                color: 'white',
                '&:hover': { backgroundColor: '#0552a8' },
                fontWeight: 700,
                letterSpacing: '0.01em',
                px: { xs: 3.2, md: 4, lg: 5 },
                py: 1.5,
                borderRadius: '999px',
                boxShadow: '0 14px 32px rgba(7, 101, 212, 0.35)',
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              Jetzt unverbindlich anfragen
            </Button>
            <Button
              size="large"
              href="#bewertungen"
              sx={{
                background: 'rgba(255,255,255,0.72)',
                border: '1px solid rgba(7,101,212,0.22)',
                color: '#0552a8',
                fontWeight: 700,
                px: 3.4,
                py: 1.4,
                borderRadius: '999px',
                '&:hover': { background: 'rgba(255,255,255,0.9)' },
                width: { xs: '100%', sm: 'auto' },
              }}
            >
              Bewertungen ansehen
            </Button>
          </Box>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Box
            sx={{
              borderRadius: '18px',
              minHeight: { xs: 148, lg: 148 },
              width: { xs: 250, md: 318 },
              background: 'linear-gradient(180deg, rgba(7,101,212,0.93) 0%, rgba(4,83,173,0.95) 100%)',
              mt: { xs: 3.5, md: 7.4, lg: 2.5 },
              mx: 'auto',
              '@media (min-width: 900px) and (max-height: 680px)': {
                marginTop: '1.5rem',
                minHeight: '130px',
              },
              '@media (max-width: 599px) and (max-height: 750px)': {
                marginTop: '2rem',
                minHeight: '130px',
              },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0.35,
              color: 'secondary.main',
              boxShadow: '0 16px 36px rgba(7, 101, 212, 0.38)',
              border: '1px solid rgba(255,255,255,0.32)',
              backdropFilter: 'blur(6px)',
            }}
          >
            <Stack direction="row" spacing={0.4}>
              {[...Array(5)].map((_, i) => (
                <Box key={i} component="span" sx={{ fontSize: '1.3rem', color: '#9fd0ff' }}>★</Box>
              ))}
            </Stack>
            <Typography variant="body2" sx={{ fontSize: 42, ml: 1, color: 'white', fontWeight: 800, lineHeight: 1 }}>
              777+
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 13, ml: 1, color: 'rgba(255,255,255,0.92)', fontWeight: 700, letterSpacing: '0.1em' }}>
              TOP-BEWERTET AUF GOOGLE
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 12, color: 'rgba(255,255,255,0.82)' }}>
              Vertrauen von Privat- und Gewerbekunden
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
