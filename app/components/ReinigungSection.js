'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const MotionBox = motion.create(Box);

const cleaningServices = [
  {
    title: '1. Möbelmontage',
    image: '/img/cardelement/1.jpeg',
    description: 'Fachgerechter Aufbau Ihrer Möbel – schnell und stressfrei.',
  },
  {
    title: '2. Küchenmontage',
    image: '/img/cardelement/2.jpeg',
    description: 'Präzise Küchenmontage vom Profi – inklusive Anschlüsse und Anpassungen.',
  },
  {
    title: '3. Umzüge',
    image: '/img/cardelement/3.png',
    description: 'Zuverlässige Unterstützung bei Umzügen und Transporten.',
  },
  {
    title: '4. Möbelreparatur & Austausch',
    image: '/img/cardelement/4.png',
    description: 'Reparatur von Einzelteilen und fachgerechter Austausch beschädigter Komponenten.',
  },
  {
    title: '5. Möbelaufbereitung',
    image: '/img/cardelement/5.png',
    description: 'Aufbereitung und optische Erneuerung alter Möbel für ein frisches Erscheinungsbild',
  },
  {
    title: '6. Entrümpelung',
    image: '/img/cardelement/5.png',
    description: 'Schnelle und zuverlässige Entrümpelung von Wohnungen, Kellern und Häusern – sauber, diskret und fachgerecht.',
  },
];

export default function ReinigungSection() {
  return (
    <Box
      id="reinigung"
      className="section"
      sx={{
        py: { xs: 7, md: 11 },
        background: 'linear-gradient(180deg, #0d4ca8 0%, #0765d4 35%, #0f78f0 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 12% 18%, rgba(125, 182, 255, 0.3), transparent 40%), radial-gradient(circle at 84% 78%, rgba(255,255,255,0.18), transparent 40%)',
        }}
      />
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          sx={{ mb: { xs: 5, md: 7 }, textAlign: 'center' }}
        >
          <Typography sx={{ fontSize: '0.88rem', fontWeight: 800, letterSpacing: '0.12em', color: '#a8ceff', mb: 1.4 }}>
            LEISTUNGEN
          </Typography>
          <Typography sx={{ fontSize: { xs: '1.85rem', md: '2.8rem' }, fontWeight: 800, color: '#ffffff', lineHeight: 1.16, mb: 1.4 }}>
            Qualität, auf die Sie sich verlassen können.
          </Typography>
          <Typography sx={{ maxWidth: 800, mx: 'auto', color: 'rgba(255,255,255,0.86)', fontSize: { xs: '1rem', md: '1.1rem' } }}>
            Unser Team reinigt gründlich, termintreu und materialschonend. Für Privathaushalte, Gewerbe und Spezialflächen im ganzen Münsterland.
          </Typography>
        </MotionBox>

        <Grid container spacing={{ xs: 2.5, md: 3.2 }} sx={{ justifyContent: 'center' }}>
          {cleaningServices.map((s, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <MotionBox
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                sx={{
                  background: 'rgba(255,255,255,0.95)',
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.22)',
                  boxShadow: '0 14px 36px rgba(0, 0, 0, 0.18)',
                  height: '100%',
                }}
              >
                <Box
                  component="img"
                  src={s.image}
                  alt={s.title}
                  sx={{ width: '100%', height: 210, objectFit: 'cover' }}
                />
                <Box sx={{ p: { xs: 2.3, md: 2.7 } }}>
                  <Typography sx={{ fontSize: { xs: '1.18rem', md: '1.34rem' }, fontWeight: 800, color: '#0f172a', mb: 1 }}>
                    {s.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(15,23,42,0.78)', lineHeight: 1.58, mb: 1.3 }}>{s.description}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon sx={{ fontSize: 18, color: '#0765d4' }} />
                    <Typography sx={{ color: '#0f172a', fontWeight: 600, fontSize: '0.92rem' }}>Schnelle Terminvergabe</Typography>
                  </Box>
                </Box>
              </MotionBox>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: { xs: 4, md: 5.5 }, textAlign: 'center' }}>
          <Button
            variant="contained"
            href="https://wa.me/49176475615"
            target="_blank"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 3.6,
              py: 1.2,
              borderRadius: '999px',
              background: '#d7eaff',
              color: '#0552a8',
              fontWeight: 800,
              boxShadow: '0 12px 28px rgba(6, 44, 98, 0.26)',
              '&:hover': { background: '#c3ddff' },
            }}
          >
            Reinigung jetzt anfragen
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
