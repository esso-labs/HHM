'use client';

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const projects = [
  {
    number: '1',
    title: 'Freie Bahn für das Sonnelicht',
    description: 'Unsere gründliche PV-Anlage Reinigung sorgt für maximale Energieeffizienz und optimalen Schutz.',
    image: 'https://via.placeholder.com/600x400?text=Solaranlage'
  },
  {
    number: '2',
    title: 'Entrümpelungen',
    description: 'Eine komplette Entrümpelung in Rekordzeit – wir schaffen Platz, wo Chaos war.',
    image: 'https://via.placeholder.com/600x400?text=Entrümpelung'
  },
  {
    number: '3',
    title: 'Glänzende Sanitärräume',
    description: 'Strahlende Sauberkeit in jedem Winkel – unsere Sanitärraum Reinigung setzt neue Hygienestandards.',
    image: 'https://via.placeholder.com/600x400?text=Sanitär'
  },
  {
    number: '4',
    title: 'Starke Umzugsfachmänner',
    description: 'Unser Team meisterte den Umzug schnell, stressfrei und professionell – Kundenzufriedenheit garantiert.',
    image: 'https://via.placeholder.com/600x400?text=Umzug'
  }
];

export default function Projects() {
  return (
    <Box id="projekte" className="section" sx={{ py: { xs: 6, md: 10 }, background: '#d4ff00' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1.5 }}
        >
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#1e3a8a', boxShadow: '0 0 20px rgba(30, 58, 138, 0.6)' }} />
          <Typography sx={{ fontSize: '0.9rem', fontWeight: '700', letterSpacing: 1, color: '#000000' }}>
            UNSERE PROJEKTE
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
              color: '#000000',
              mb: 2
            }}
          >
            Unsere Erfolgsgeschichten – Effiziente Lösungen und zufriedene Kunden durch professionelle Dienstleistungen im Münsterland und in ganz Deutschland
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
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  backgroundColor: '#ffffff',
                  transition: 'all 0.3s ease',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  '&:hover': {
                    boxShadow: '0 20px 50px rgba(30, 58, 138, 0.25)'
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
                    background: '#1f1f1f',
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
                          color: '#d4ff00'
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
