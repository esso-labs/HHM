'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export default function AboutSection() {
  return (
    <Box 
      id="wir" 
      className="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0f172a 0%, #182742 100%)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{ mb: 8, display: 'flex', alignItems: 'center', gap: 1.5 }}
        >
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#ffffff' }} />
          <Typography sx={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: 1.5, color: '#ffffff' }}>
            ÜBER HANDWERKER & MONTAGE HUNDSBUSCHER
          </Typography>
        </MotionBox>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 6 }, alignItems: 'flex-start' }}>
          {/* Left (50%): Large H1 Headline */}
          <Box>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
            >
              <Typography 
                component="h1"
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: '#ffffff',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    textShadow: '0 0 20px rgba(255, 107, 107, 0.6), 0 0 40px rgba(78, 205, 196, 0.4), 0 10px 30px rgba(26, 144, 255, 0.3)',
                  }
                }}
              >
                Ein starkes Handwerks- und Montageteam, das mit präziser Arbeit, klarer Kommunikation und verlässlichem Service überzeugt.
              </Typography>
            </MotionBox>
          </Box>

          {/* Right (50%): Text Blocks */}
          <Box>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Block 1 */}
              <Box sx={{ mb: 5 }}>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#8fc3ff', mb: 1.5, letterSpacing: 0.5 }}>
                  HANDWERKER & MONTAGE HUNDSBUSCHER
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.7, color: 'rgba(255,255,255,0.95)' }}>
                  Ihr zuverlässiger Partner für Umzüge, Montagearbeiten und Reinigungen. Wir verbinden alle Leistungen in einem klaren Serviceversprechen: termintreu, gründlich und transparent.
                </Typography>
              </Box>

              {/* Block 2 */}
              <Box sx={{ mb: 5 }}>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', mb: 1.5, letterSpacing: 0.5 }}>
                  UMZÜGE – PRIVAT UND GEWERBLICH
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
                  Unser Umzugsservice deckt ein breites Spektrum ab. Egal, ob privater Wohnungswechsel oder großer Firmenumzug in Deutschland: Wir planen jeden Schritt mit Ihnen gemeinsam. Unser erfahrenes Team kümmert sich um jedes Detail, damit Ihr Umzug reibungslos und effizient abläuft.
                </Typography>
              </Box>

              {/* Block 3 */}
              <Box sx={{ mb: 5 }}>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', mb: 1.5, letterSpacing: 0.5 }}>
                  REINIGUNGEN IM MÜNSTERLAND – QUALITÄT ZUM SEHR FAIREN PREIS
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
                  Neben Umzügen bieten wir einen erstklassigen Reinigungsservice im Münsterland. Von Fenster- und Unterhaltsreinigung bis zu anspruchsvollen Gewerbeflächen liefern wir saubere Ergebnisse mit messbarer Qualität. Dabei achten wir auf faire Preise und verlässliche Einsätze.
                </Typography>
              </Box>

              {/* Block 4 */}
              <Box>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', mb: 1.5, letterSpacing: 0.5 }}>
                  WARUM HANDWERKER & MONTAGE HUNDSBUSCHER?
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
                  Bei Handwerker & Montage Hundsbuscher stehen Ihre Bedürfnisse im Mittelpunkt. Wir arbeiten lösungsorientiert, kommunizieren klar und halten Zusagen ein. So erhalten Sie einen Partner, auf den Sie sich bei jedem Projekt verlassen können.
                </Typography>
              </Box>
            </MotionBox>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
