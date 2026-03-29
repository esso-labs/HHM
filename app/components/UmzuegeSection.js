'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const moveServices = [
  {
    title: 'Privatumzug',
    image: '/img/umzug.jpg',
    description: 'Sorgfältige Planung, sicherer Transport und ein Team, das mitdenkt.',
    points: ['Packservice auf Wunsch', 'Möbelmontage inklusive', 'Stressfrei bis zur Übergabe'],
  },
  {
    title: 'Firmenumzug',
    image: '/img/banner.png',
    description: 'Effiziente Umzüge für Büros und Gewerbe mit minimaler Ausfallzeit.',
    points: ['Klare Ablaufplanung', 'Wochenend-Termine möglich', 'Diskret und zuverlässig'],
  },
  {
    title: 'Fernumzug',
    image: '/img/background22.jpg',
    description: 'Bundesweite Einsätze mit transparentem Ablauf und fester Betreuung.',
    points: ['Deutschlandweit verfügbar', 'Versicherter Transport', 'Termintreu und pünktlich'],
  },
];

const MotionBox = motion.create(Box);

export default function UmzuegeSection() {
  return (
    <Box
      id="umzuege"
      className="section"
      sx={{
        py: { xs: 7, md: 11 },
        background: 'linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%)',
      }}
    >
      <Container maxWidth="xl">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}
        >
          <Typography sx={{ fontSize: '0.88rem', fontWeight: 800, letterSpacing: '0.12em', color: '#0765d4', mb: 1.4 }}>
            UMZUGSSERVICE
          </Typography>
          <Typography sx={{ fontSize: { xs: '1.85rem', md: '2.8rem' }, fontWeight: 800, color: '#0f172a', lineHeight: 1.16, mb: 1.2 }}>
            Zuverlässige Unterstützung bei Umzügen und Transporten.
          </Typography>
          <Typography sx={{ maxWidth: 760, mx: 'auto', color: 'rgba(15,23,42,0.78)', fontSize: { xs: '1rem', md: '1.08rem' } }}>
            <>
              Umzug und Montage können bei uns direkt kombiniert werden – Möbel werden vor Ort abgebaut und am neuen Standort wieder fachgerecht aufgebaut.
              <br />
              Für komplette Umzüge arbeiten wir zusätzlich mit einer spezialisierten Partnerfirma zusammen und können Sie bei Bedarf weitervermitteln.
            </>
          </Typography>
        </MotionBox>

        <Grid container spacing={{ xs: 2.5, md: 3.2 }}>
          {moveServices.map((service, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={service.title}>
              <MotionBox
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -7 }}
                sx={{
                  height: '100%',
                  background: '#fff',
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '1px solid rgba(7,101,212,0.14)',
                  boxShadow: '0 14px 36px rgba(8, 38, 84, 0.12)',
                }}
              >
                <Box sx={{ position: 'relative', height: { xs: 220, md: 240 } }}>
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(7,101,212,0.08), rgba(7,101,212,0.55))',
                    }}
                  />
                </Box>

                <Box sx={{ p: { xs: 2.4, md: 2.8 }, display: 'flex', flexDirection: 'column', gap: 1.35 }}>
                  <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.42rem' }, fontWeight: 800, color: '#0f172a' }}>
                    {service.title}
                  </Typography>
                  <Typography sx={{ color: 'rgba(15,23,42,0.78)', lineHeight: 1.6 }}>
                    {service.description}
                  </Typography>
                  {service.points.map((point) => (
                    <Box key={point} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CheckCircleIcon sx={{ fontSize: 18, color: '#0765d4' }} />
                      <Typography sx={{ fontSize: '0.93rem', color: '#0f172a', fontWeight: 600 }}>{point}</Typography>
                    </Box>
                  ))}
                </Box>
              </MotionBox>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: { xs: 4, md: 5.5 }, textAlign: 'center' }}>
          <Button
            variant="contained"
            href="https://wa.me/49176475615"
            target="_blank"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 3.6,
              py: 1.2,
              borderRadius: '999px',
              background: '#0765d4',
              fontWeight: 700,
              boxShadow: '0 12px 28px rgba(7, 101, 212, 0.3)',
              '&:hover': { background: '#0552a8' },
            }}
          >
            Umzug jetzt anfragen
          </Button>
        </Box>
      </Container>
    </Box>
  );
}