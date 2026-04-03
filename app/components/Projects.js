'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const projects = [
  {
    number: '1',
    title: 'Möbelmontage',
    description: 'Aufbau kompletter Möbel - schnell, sauber und passgenau montiert.',
    image: '/img/anlage.jpg'
  },
  {
    number: '2',
    title: 'Küchenmontage',
    description: 'Fachgerechte Montage einer Küche inklusive Anpassungen und exakter Ausrichtung.',
    image: '/img/coutch.jpg'
  },
  {
    number: '3',
    title: 'Küchenanpassung',
    description: 'Individuelle Anpassung einer bestehenden Küche für optimale Nutzung des Raumes.',
    image: '/img/kuche.jpg'
  },
  {
    number: '4',
    title: 'Möbelreparatur',
    description: 'Ausrichten von Türen und Beseitigung von Gebrauchsspuren für ein sauberes Ergebnis.',
    image: '/img/umzug.jpg'
  },
  {
    number: '5',
    title: 'Möbelaufbereitung',
    description: 'Aufarbeitung alter Möbel durch Schleifen und Oberflächenbehandlung.',
    image: '/img/anlage.jpg'
  },
  {
    number: '6',
    title: 'Entrümpelung',
    description: 'Saubere und strukturierte Entrümpelung von Wohn- und Lagerräumen.',
    image: '/img/coutch.jpg'
  }
];

export default function Projects() {
  return (
    <Box id="projekte" className="section" sx={{ py: { xs: 7, md: 11 }, background: 'linear-gradient(180deg, #ebf4ff 0%, #f5f9ff 100%)' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1.5 }}
        >
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#0765d4', boxShadow: '0 0 18px rgba(7, 101, 212, 0.45)' }} />
          <Typography sx={{ fontSize: '0.9rem', fontWeight: '700', letterSpacing: 1, color: '#0f172a' }}>
            Einblicke in unsere Arbeit
          </Typography>
        </MotionBox>

        {/* Main Headline */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          sx={{ mb: 8 }}
        >
          <Typography 
            sx={{ 
              fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' },
              fontWeight: 700,
              lineHeight: 1.3,
              color: '#0f172a',
              mb: 2
            }}
          >
            Ob Möbel- oder Küchenmontage - wir setzen jedes Projekt präzise und sauber um.
            <br />
            Hier sehen Sie ausgewählte Arbeiten aus unserem Alltag.
          </Typography>
        </MotionBox>

        {/* Projects Grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' }, gap: { xs: 3, md: 4 } }}>
          {projects.map((project, idx) => (
            <Box key={idx}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 25,
                  delay: idx * 0.1
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                sx={{
                  borderRadius: { xs: '12px', md: '16px' },
                  overflow: 'hidden',
                  boxShadow: '0 14px 34px rgba(8, 38, 84, 0.14)',
                  backgroundColor: '#ffffff',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: '0 24px 52px rgba(7, 101, 212, 0.24)'
                  }
                }}
              >
                {/* Image */}
                <Box
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: { xs: '250px', md: '300px' },
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                {/* Content Box - Dark Background */}
                <Box
                  sx={{
                    background: 'linear-gradient(180deg, #0f172a 0%, #1c2e4f 100%)',
                    color: '#ffffff',
                    p: { xs: '20px', md: '28px' },
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  {/* Number and Title */}
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                      <Typography
                        sx={{
                          fontSize: { xs: '3rem', md: '4rem' },
                          fontWeight: 700,
                          lineHeight: 1,
                          color: '#9fcfff'
                        }}
                      >
                        {project.number}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: '1.1rem', md: '1.3rem' },
                          fontWeight: 700,
                          lineHeight: 1.3,
                          color: '#ffffff',
                          pt: '8px'
                        }}
                      >
                        {project.title}
                      </Typography>
                    </Box>
                  </Box>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      lineHeight: 1.6,
                      color: 'rgba(255, 255, 255, 0.85)',
                      mt: 'auto'
                    }}
                  >
                    {project.description}
                  </Typography>
                </Box>
              </MotionBox>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
