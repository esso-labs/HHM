'use client';

import React from 'react';
import { Box, Container, Grid } from '@mui/material';

const logos = [
  'https://via.placeholder.com/120x60?text=CoCo',
  'https://via.placeholder.com/120x60?text=Bahnhofsgrill',
  // add more placeholder logos as needed
];

export default function Kunden() {
  return (
    <Box id="kunden" className="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {logos.map((src, idx) => (
            <Grid size="auto" key={idx} sx={{ textAlign: 'center' }}>
              <Box component="img" src={src} alt="Client logo" sx={{ height: 60, objectFit: 'contain' }} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
