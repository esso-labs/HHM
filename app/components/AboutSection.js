'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
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
      <Container maxWidth="lg">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{ mb: { xs: 4, md: 8 }, display: 'flex', alignItems: 'center', gap: 1.5 }}
        >
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#ffffff' }} />
          <Typography sx={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: 1.5, color: '#ffffff' }}>
            Über Handwerk & Montage Hundsbüscher
          </Typography>
        </MotionBox>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 6 }, alignItems: 'flex-start' }}>
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
                  fontSize: { xs: 'clamp(2rem, 8.4vw, 2.4rem)', sm: '3rem', md: '3.5rem', lg: '4rem', xl: '5rem' },
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: '#ffffff',
                  textWrap: 'balance',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    textShadow: '0 0 20px rgba(255, 107, 107, 0.6), 0 0 40px rgba(78, 205, 196, 0.4), 0 10px 30px rgba(26, 144, 255, 0.3)',
                  }
                }}
              >
                Handwerk & Montage Hundsbüscher
              </Typography>
            </MotionBox>
          </Box>

          {/* Right (50%): Text */}
          <Box>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.8, color: 'rgba(255,255,255,0.92)' }}>
                Wir arbeiten präzise, sauber und kundenorientiert. Ihre Wünsche stehen bei uns im Mittelpunkt – wir setzen Montagen fachgerecht und zuverlässig um.
                <br />
                Umzüge führen wir in Kombination mit ausgewählten Partnerfirmen durch, um einen reibungslosen Ablauf zu gewährleisten.
              </Typography>
            </MotionBox>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
