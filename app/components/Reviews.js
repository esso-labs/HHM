'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const testimonials = [
  {
    text: 'Unser Büro strahlt förmlich, und das Reinigungsteam war äußerst gründlich und diskret. Besonders gefallen hat mir, dass sie sich komplett nach unseren Arbeitszeiten gerichtet haben, ohne den Betriebsablauf zu stören.',
    author: 'Markus Circ',
    image: 'https://via.placeholder.com/600x400?text=Reinigung+1'
  },
  {
    text: 'MMS-Gronau hat unseren Umzug absolut stressfrei gemacht. Professionell, pünktlich und sorgfältig  wir konnten uns entspannt zurücklehnen. Sehr empfehlenswert!',
    author: 'Sebastian Nagel',
    image: 'https://via.placeholder.com/600x400?text=Umzug+1'
  },
  {
    text: 'Die Reinigung in unserer Wohnung war tadellös. Das Team war effizient, freundlich und hat unseren Platz wirklich wie neu gemacht. Können sie nur weiterempfehlen!',
    author: 'Petra Schmidt',
    image: 'https://via.placeholder.com/600x400?text=Reinigung+2'
  },
  {
    text: 'Unser Firmenumzug verlief ohne Probleme. Alle Möbel wurden mit großer Sorgfalt transportiert. Das Team war kompetent und hilfreich. Top Service!',
    author: 'Thomas Mueller',
    image: 'https://via.placeholder.com/600x400?text=Umzug+2'
  },
  {
    text: 'Sehr professionell und zuverlässig. Die Reinigung nach unserem Umzug war perfekt  alles war blitzblank. Danke für den ausgezeichneten Service!',
    author: 'Annika Baumann',
    image: 'https://via.placeholder.com/600x400?text=Reinigung+3'
  },
  {
    text: 'Unkompliziert, freundlich und pünktlich. Unser Umzug war dank MMS-Gronau wirklich entspannend. Alles ging zügig und ohne Stress über die Bühne. Gerne wieder!',
    author: 'Frank Wagner',
    image: 'https://via.placeholder.com/600x400?text=Umzug+3'
  }
];

export default function Reviews() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box id="bewertungen" className="section" sx={{ py: { xs: 6, md: 10 }, background: '#ffffff' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '1.8rem', md: '2.5rem' }, color: '#0f172a', mb: 2 }}>
            Kundenbewertungen
          </Typography>
          <Box sx={{ height: 4, width: 120, background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4, #1a90ff)', borderRadius: 2, mx: 'auto' }} />
        </Box>

        <Box sx={{ display: { xs: 'grid', md: 'grid' }, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 3, md: 4 }, alignItems: 'center', minHeight: { xs: 'auto', md: '500px' } }}>
          <MotionBox
            key={currentIdx}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            sx={{
              position: 'relative',
              borderRadius: { xs: 2, md: 3 },
              overflow: 'hidden',
              height: { xs: '300px', md: '500px' },
              backgroundColor: '#e5e7eb'
            }}
          >
            <Box
              component="img"
              src={testimonials[currentIdx].image}
              alt={testimonials[currentIdx].author}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </MotionBox>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <MotionBox
              key={`text-${currentIdx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              sx={{
                background: '#d4ff00',
                borderRadius: { xs: 2, md: 3 },
                p: { xs: 4, md: 6 },
                minHeight: { xs: 'auto', md: '350px' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <Box>
                <Typography 
                  sx={{ 
                    fontSize: { xs: '1.1rem', md: '1.4rem' }, 
                    fontWeight: 600, 
                    lineHeight: 1.6, 
                    color: '#000000',
                    mb: 4
                  }}
                >
                  {testimonials[currentIdx].text}
                </Typography>
              </Box>
              <Typography 
                sx={{ 
                  fontSize: '0.95rem', 
                  fontWeight: 600, 
                  color: '#000000',
                  paddingTop: 2
                }}
              >
                {testimonials[currentIdx].author}
              </Typography>
            </MotionBox>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
              <IconButton 
                onClick={goPrev}
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1a237e, #1a90ff)',
                  color: '#ffffff',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0d1654, #1570d0)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <ChevronLeft />
              </IconButton>

              <Box sx={{ display: 'flex', gap: 1 }}>
                {testimonials.map((_, idx) => (
                  <Box
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    sx={{
                      width: currentIdx === idx ? 32 : 12,
                      height: 4,
                      borderRadius: 2,
                      background: currentIdx === idx ? 'linear-gradient(90deg, #ff6b6b, #1a90ff)' : '#e5e7eb',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                ))}
              </Box>

              <IconButton 
                onClick={goToNext}
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1a237e, #1a90ff)',
                  color: '#ffffff',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0d1654, #1570d0)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <ChevronRight />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
