'use client';

import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#1a237e', color: 'white', py: 4, textAlign: 'center' }}>
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ mb: 1 }}>
          © 2026 Moebl-Montage-und-Service-Gronau
        </Typography>
        <Typography variant="caption" sx={{ mb: 2, display: 'block' }}>
          www.mms-gronau.de
        </Typography>
        <Box sx={{ mt: 2, fontSize: '0.9rem', opacity: 0.8 }}>
          <Button color="inherit" size="small" sx={{ mr: 2 }}>
            Impressum
          </Button>
          <Button color="inherit" size="small">
            Datenschutz
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
