'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);
const REVIEW_INTERVAL_MS = 7500;
const REVIEW_TRANSITION = { duration: 0.85, ease: [0.22, 0.61, 0.36, 1] };

const testimonials = [
  {
    text: 'Unser Büro strahlt förmlich, und das Reinigungsteam war äußerst gründlich und diskret. Besonders gefallen hat mir, dass sie sich komplett nach unseren Arbeitszeiten gerichtet haben, ohne den Betriebsablauf zu stören.',
    author: 'Markus Circ',
    image: '/img/kundenbewertungen/lucid-origin_Ultra_realistic_photo_of_a_perfectly_clean_apartment_interior_after_renovation_s-0.jpg'
  },
  {
    text: 'Handwerker & Montage Hundsbuscher hat unseren Umzug absolut stressfrei gemacht. Professionell, puenktlich und sorgfaeltig wir konnten uns entspannt zuruecklehnen. Sehr empfehlenswert!',
    author: 'Sebastian Nagel',
    image: '/img/kundenbewertungen/lucid-origin_Moving_boxes_stacked_neatly_in_a_bright_modern_apartment_natural_light_from_larg-0.jpg'
  },
  {
    text: 'Die Reinigung in unserer Wohnung war tadellös. Das Team war effizient, freundlich und hat unseren Platz wirklich wie neu gemacht. Können sie nur weiterempfehlen!',
    author: 'Petra Schmidt',
    image: '/img/kundenbewertungen/lucid-origin_Cozy_and_modern_living_room_in_a_freshly_finished_apartment_perfectly_arranged_f-0.jpg'
  },
  {
    text: 'Unser Firmenumzug verlief ohne Probleme. Alle Möbel wurden mit großer Sorgfalt transportiert. Das Team war kompetent und hilfreich. Top Service!',
    author: 'Thomas Mueller',
    image: '/img/kundenbewertungen/lucid-origin_Close-up_of_detailed_craftsmanship_hands_not_visible_focus_on_perfectly_installe-0.jpg'
  },
  {
    text: 'Sehr professionell und zuverlässig. Die Reinigung nach unserem Umzug war perfekt  alles war blitzblank. Danke für den ausgezeichneten Service!',
    author: 'Annika Baumann',
    image: '/img/kundenbewertungen/lucid-origin_Modern_house_entrance_with_clean_front_door_minimalistic_design_well-maintained_-0.jpg'
  },
  {
    text: 'Unkompliziert, freundlich und puenktlich. Unser Umzug war dank Handwerker & Montage Hundsbuscher wirklich entspannend. Alles ging zuegig und ohne Stress ueber die Buehne. Gerne wieder!',
    author: 'Frank Wagner',
    image: '/img/kundenbewertungen/lucid-origin_Realistic_photo_of_a_house_key_being_placed_on_a_clean_wooden_surface_near_a_mod-0.jpg'
  }
];

export default function Reviews() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonials.length);
    }, REVIEW_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box id="bewertungen" className="section" sx={{ py: { xs: 7, md: 11 }, background: 'linear-gradient(180deg, #ffffff 0%, #f7faff 100%)' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '1.8rem', md: '2.5rem' }, color: '#0f172a', mb: 2 }}>
            Kundenbewertungen
          </Typography>
          <Box sx={{ height: 4, width: 140, background: 'linear-gradient(90deg, #0765d4, #2e8cff, #7cb5ff)', borderRadius: 2, mx: 'auto' }} />
        </Box>

        <Box sx={{ display: { xs: 'grid', md: 'grid' }, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 3, md: 4 }, alignItems: 'center', minHeight: { xs: 'auto', md: '500px' } }}>
          <MotionBox
            key={currentIdx}
            initial={{ opacity: 0, x: -22 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 22 }}
            transition={REVIEW_TRANSITION}
            sx={{
              position: 'relative',
              borderRadius: { xs: 2, md: 3 },
              overflow: 'hidden',
              height: { xs: '300px', md: '500px' },
                backgroundColor: '#e5e7eb',
                boxShadow: '0 16px 36px rgba(8, 38, 84, 0.16)'
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
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={REVIEW_TRANSITION}
              sx={{
                background: 'linear-gradient(180deg, #dbeaff 0%, #eef5ff 100%)',
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
                    color: '#0f172a',
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
                  color: '#0f172a',
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
                  background: 'linear-gradient(135deg, #0765d4, #1a90ff)',
                  color: '#ffffff',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0552a8, #1570d0)',
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
                      background: currentIdx === idx ? 'linear-gradient(90deg, #0765d4, #1a90ff)' : '#d1d5db',
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
                  background: 'linear-gradient(135deg, #0765d4, #1a90ff)',
                  color: '#ffffff',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #0552a8, #1570d0)',
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
