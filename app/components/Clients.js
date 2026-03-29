'use client';

import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const partners = [
  { src: '/img/partner/partner.PNG', alt: 'Partner 1' },
  { src: '/img/partner/partner1.jpeg', alt: 'Partner 2' },
  { src: '/img/partner/partner2.jpeg', alt: 'Partner 3' },
];

const MotionBox = motion.create(Box);

export default function Kunden() {
  return (
    <Box id="kunden" className="section" sx={{ py: { xs: 7, md: 10 }, background: '#ffffff' }}>
      <Container maxWidth="lg">
        <Typography sx={{ textAlign: 'center', mb: 3.2, color: '#0f172a', fontWeight: 800, fontSize: { xs: '1.5rem', md: '2rem' } }}>
          Vertrauen von starken Partnern
        </Typography>
        <Grid container spacing={{ xs: 1.6, md: 2.2 }} justifyContent="center" alignItems="stretch">
          {partners.map((partner, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={partner.src}>
              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: idx * 0.04 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                sx={{
                  px: 2.2,
                  py: 2,
                  borderRadius: 3,
                  border: '1px solid rgba(7,101,212,0.16)',
                  background: 'linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%)',
                  boxShadow: '0 10px 22px rgba(8, 38, 84, 0.08)',
                  minHeight: { xs: 130, md: 150 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src={partner.src}
                  alt={partner.alt}
                  sx={{
                    width: '100%',
                    maxHeight: { xs: 90, md: 110 },
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </MotionBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
