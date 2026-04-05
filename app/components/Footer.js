'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid, Link } from '@mui/material';
import { motion, useReducedMotion } from 'framer-motion';

const MotionBox = motion.create(Box);

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #eaf3ff 0%, #dbeaff 45%, #f4f8ff 100%)',
        color: '#0f172a',
        pt: { xs: 7, md: 10 },
        pb: 2,
        borderTop: '1px solid rgba(15, 23, 42, 0.08)',
      }}
    >
      <Container maxWidth="xl">
        {/* Main Footer Content */}
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ mb: 6 }}>
          {/* Left: Logo Section */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Box sx={{ mb: 4 }}>
              <Typography sx={{ fontSize: '1.48rem', fontWeight: 800, color: '#0453ad', mb: 0.2, letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                Handwerk & Montage
              </Typography>
              <Typography sx={{ fontSize: '1.12rem', fontWeight: 800, color: '#0f172a', mb: 0.3, lineHeight: 1.2 }}>
                Hundsbüscher
              </Typography>
            </Box>
            <Typography sx={{ fontSize: '0.75rem', color: '#0f172a', mt: 4, opacity: 0.86 }}>
              © 2026 Handwerk & Montage Hundsbüscher
            </Typography>
          </Grid>

          {/* Center: CTA & Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Box sx={{ mb: 4 }}>
              <Button
                href="#contact"
                sx={{
                  background: '#0765d4',
                  color: '#ffffff',
                  paddingX: 3,
                  paddingY: 1,
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  borderRadius: '999px',
                  boxShadow: '0 12px 28px rgba(7, 101, 212, 0.28)',
                  '&:hover': {
                    background: '#0552a8'
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
              <Typography sx={{ fontSize: '0.9rem', color: '#0f172a', mb: 1 }}>
                +49 178 9113720
              </Typography>
              <Link href="mailto:Info@mms-gronau.de" sx={{ fontSize: '0.9rem', color: '#0f172a', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Info@mms-gronau.de
              </Link>
            </Box>
          </Grid>

          {/* Services: Montage */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography sx={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', mb: 2 }}>
              Montageservice
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
              {[
                'Küchenmontage & Umzugsküchen',
                'Möbelmontage (neu & Umzug)',
                'Küchenanpassung & Änderungen',
                'Möbelreparatur & Austausch',
                'Möbelaufbereitung',
                'Entrümpelung'
              ].map((item, idx) => (
                <Typography key={idx} sx={{ fontSize: '0.85rem', color: '#0f172a', opacity: 0.9, lineHeight: 1.6 }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Services: Umzug */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Typography sx={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a', mb: 2 }}>
              Umzugsservice
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
              {[
                'Privatumzug',
                'Firmenumzug',
                'Fernumzug'
              ].map((item, idx) => (
                <Typography key={idx} sx={{ fontSize: '0.85rem', color: '#0f172a', opacity: 0.9, lineHeight: 1.6 }}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Right: Navigation Links */}
          <Grid size={{ xs: 12, sm: 6, md: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {[
                { label: 'Montageservice', href: '#reinigung' },
                { label: 'Umzüge', href: '#umzuege' },
                { label: 'Über uns', href: '#wir' },
                { label: 'Bewertungen', href: '#bewertungen' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Projekte', href: '#projekte' },
                { label: 'Kontakt', href: '#contact' },
                { label: 'Datenschutzerklärung', href: '/datenschutz' },
                { label: 'Datenschutz (EN)', href: '/privacy' },
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
                    fontWeight: 600,
                    '&:hover': { textDecoration: 'underline', color: '#0765d4' }
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box sx={{ height: 2, background: 'rgba(15, 23, 42, 0.55)', mb: 3, borderRadius: 1 }} />

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
            animate={shouldReduceMotion ? {} : { x: ['-50%', '0%'] }}
            transition={shouldReduceMotion ? {} : { duration: 15, repeat: Infinity, ease: 'linear' }}
            sx={{
              display: 'flex',
              gap: 2,
              whiteSpace: 'nowrap'
            }}
          >
            {[...Array(4)].map((_, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                <Box sx={{ width: 30, height: 30, borderRadius: '50%', background: '#0765d4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 700, fontSize: '0.8rem' }}>
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
