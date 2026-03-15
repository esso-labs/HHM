'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid, Link } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export default function Footer() {
  return (
    <Box component="footer" sx={{ background: '#d4ff00', color: '#0f172a', pt: { xs: 6, md: 10 }, pb: 2 }}>
      <Container maxWidth="xl">
        {/* Main Footer Content */}
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: 6 }}>
          {/* Left: Logo Section */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Box sx={{ mb: 4 }}>
              <Box sx={{ fontSize: '2.5rem', fontWeight: 700, color: '#1a90ff', mb: 0.5 }}>
                MMS
              </Box>
              <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', mb: 0.5 }}>
                GRONAU SERVICE
              </Typography>
              <Typography sx={{ fontSize: '0.75rem', letterSpacing: 1, fontWeight: 600, color: '#0f172a' }}>
                REINIGUNG & UMZUGSERVICE
              </Typography>
            </Box>
            <Typography sx={{ fontSize: '0.75rem', color: '#0f172a', mt: 4 }}>
              © 2025 by MMS-Gronau von ESSO MEDIA
            </Typography>
          </Grid>

          {/* Center: CTA & Contact */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Box sx={{ mb: 4 }}>
              <Button
                href="#contact"
                sx={{
                  background: '#1a90ff',
                  color: '#ffffff',
                  paddingX: 3,
                  paddingY: 1,
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  borderRadius: '8px',
                  '&:hover': {
                    background: '#0070d8'
                  }
                }}
              >
                Jetzt Anfragen →
              </Button>
            </Box>

            {/* Contact Info */}
            <Box sx={{ mt: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#1a90ff' }} />
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 700 }}>
                  KONTAKT
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.85rem', color: '#0f172a', mb: 1 }}>
                +49 178 9113720
              </Typography>
              <Link href="mailto:Info@mms-gronau.de" sx={{ fontSize: '0.85rem', color: '#0f172a', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Info@mms-gronau.de
              </Link>
            </Box>
          </Grid>

          {/* Services: Reinigung */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', mb: 2 }}>
              Reinigungsservice
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
              {[
                'Bauendreinigung',
                'Fassadenreinigung',
                'Büroreinigung',
                'Fensterreinigung',
                'Behördenreinigung',
                'Spezialreinigung',
                'PV-Anlagen Reinigung',
                'Sportstudio Reinigung',
                'Gewerberereinigung'
              ].map((item, idx) => (
                <Typography key={idx} sx={{ fontSize: '0.85rem', color: '#0f172a', opacity: 0.9 }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Services: Umzug */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', mb: 2 }}>
              Umzugsservice
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
              {[
                'Spezialumzüge',
                'Entrümpelung',
                'Fernumzüge',
                'Büroumzüge',
                'Studentenumzüge',
                'Seniorenumzüge',
                'Behördenumzüge',
                'Gewerbeumzüge',
                'Private Umzüge'
              ].map((item, idx) => (
                <Typography key={idx} sx={{ fontSize: '0.85rem', color: '#0f172a', opacity: 0.9 }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Right: Navigation Links */}
          <Grid size={{ xs: 12, md: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Clients', href: '#clients' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Projects', href: '#projekte' },
                { label: 'Datenschutzerklärung', href: '/datenschutz' },
                { label: 'Cookie hinweis', href: '/cookies' },
                { label: 'Impressum', href: '/impressum' },
                { label: 'AGB', href: '/agb' }
              ].map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  sx={{
                    fontSize: '0.85rem',
                    color: '#0f172a',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline', color: '#1a90ff' }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ height: 2, background: '#0f172a', mb: 3, borderRadius: 1 }} />

        {/* Bottom: Repeating Partner Text */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            overflow: 'hidden',
            pb: 2
          }}
        >
          <MotionBox
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            sx={{
              display: 'flex',
              gap: 2,
              whiteSpace: 'nowrap'
            }}
          >
            {[...Array(4)].map((_, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Box sx={{ width: 30, height: 30, borderRadius: '50%', background: '#1a90ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 700, fontSize: '0.8rem' }}>
                  ➜
                </Box>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                  DEIN ZUVERLÄSSIGER PARTNER
                </Typography>
              </Box>
            ))}
          </MotionBox>
        </Box>
      </Container>
    </Box>
  );
}
