'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Partner 1', logo: 'https://via.placeholder.com/150x80?text=Partner+1' },
  { name: 'Partner 2', logo: 'https://via.placeholder.com/150x80?text=Partner+2' },
  { name: 'Partner 3', logo: 'https://via.placeholder.com/150x80?text=Partner+3' },
  { name: 'Partner 4', logo: 'https://via.placeholder.com/150x80?text=Partner+4' },
  { name: 'Partner 5', logo: 'https://via.placeholder.com/150x80?text=Partner+5' },
  { name: 'Partner 6', logo: 'https://via.placeholder.com/150x80?text=Partner+6' },
];

const MotionBox = motion(Box);

export default function PartnersSection() {
  return (
    <Box id="partners" className="section" sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(135deg, #f5f7fa 0%, #ffffff 100%)' }}>
      <Container maxWidth="lg">
        {/* Animated Title */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 4 }}>
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#1e3a8a', boxShadow: '0 0 20px rgba(30, 58, 138, 0.6)' }} />
              <Typography sx={{ fontSize: '0.9rem', fontWeight: '700', color: '#1e3a8a', letterSpacing: 1 }}>
                UNSERE KUNDEN
              </Typography>
            </Box>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Typography variant="h3" sx={{ fontWeight: 'bold', fontSize: { xs: '1.8rem', md: '2.5rem' }, color: '#0f172a', mb: 2 }}>
              Vertrauen Sie uns genauso wie unsere Partner
            </Typography>
            <Box sx={{ height: 36, width: 800, background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4, #1a90ff)', borderRadius: 2, mx: 'auto' }} />
          </MotionBox>
        </Box>

        {/* Partner Logos Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ alignItems: 'center', justifyContent: 'center' }}>
          {partners.map((partner, idx) => (
            <Grid item xs={12} sm={6} md={4} key={idx}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 300, 
                  damping: 25, 
                  delay: idx * 0.1 
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.08, y: -5 }}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: { xs: '24px 16px', md: '32px 24px' },
                  borderRadius: '12px',
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    boxShadow: '0 12px 24px rgba(30, 58, 138, 0.15)',
                    borderColor: '#1e3a8a',
                  }
                }}
              >
                <Box
                  component="img"
                  src={partner.logo}
                  alt={partner.name}
                  sx={{
                    maxWidth: '100%',
                    height: 'auto',
                    maxHeight: '80px',
                    objectFit: 'contain',
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