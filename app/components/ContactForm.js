'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Checkbox, FormControlLabel, Grid, Select, MenuItem } from '@mui/material';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    cleaning: '',
    moving: '',
    notes: '',
    agree: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', form);
    alert('Formular gesendet (Dummy)');
  };

  return (
    <Box id="contact" className="section" sx={{ py: { xs: 6, md: 10 }, background: '#d4ff00' }}>
      <Container maxWidth="xl">
        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontWeight: 700,
            color: '#0f172a',
            mb: 6
          }}
        >
          Kostenfreie Kontakt Aufnahme
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {/* Row 1: Name & Phone */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 1 }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', mb: 1.5 }}>
                  Vorname oder Firma
                </Typography>
              </Box>
              <TextField
                name="name"
                value={form.name}
                onChange={handleChange}
                fullWidth
                required
                variant="standard"
                sx={{
                  '& .MuiInput-underline:before': { borderBottomColor: '#0f172a' },
                  '& .MuiInput-underline:hover:before': { borderBottomColor: '#0f172a' },
                  '& .MuiInput-underline:after': { borderBottomColor: '#0f172a' }
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 1 }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', mb: 1.5 }}>
                  Telefonnummer *
                </Typography>
              </Box>
              <TextField
                name="phone"
                value={form.phone}
                onChange={handleChange}
                fullWidth
                required
                variant="standard"
                sx={{
                  '& .MuiInput-underline:before': { borderBottomColor: '#0f172a' },
                  '& .MuiInput-underline:hover:before': { borderBottomColor: '#0f172a' },
                  '& .MuiInput-underline:after': { borderBottomColor: '#0f172a' }
                }}
              />
            </Grid>

            {/* Row 2: Email & Area */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 1 }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', mb: 1.5 }}>
                  E-mail *
                </Typography>
              </Box>
              <TextField
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                required
                variant="standard"
                sx={{
                  '& .MuiInput-underline:before': { borderBottomColor: '#0f172a' },
                  '& .MuiInput-underline:hover:before': { borderBottomColor: '#0f172a' },
                  '& .MuiInput-underline:after': { borderBottomColor: '#0f172a' }
                }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 1 }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', mb: 1.5 }}>
                  Fläche in qm*
                </Typography>
              </Box>
              <TextField
                name="area"
                type="number"
                value={form.area}
                onChange={handleChange}
                fullWidth
                variant="standard"
                sx={{
                  '& .MuiInput-underline:before': { borderBottomColor: '#0f172a' },
                  '& .MuiInput-underline:hover:before': { borderBottomColor: '#0f172a' },
                  '& .MuiInput-underline:after': { borderBottomColor: '#0f172a' }
                }}
              />
            </Grid>

            {/* Row 3: Service Selects */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 1 }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', mb: 1.5 }}>
                  Reinigungs Service
                </Typography>
              </Box>
              <Select
                name="cleaning"
                value={form.cleaning}
                onChange={handleChange}
                fullWidth
                variant="standard"
                displayEmpty
                sx={{
                  '& .MuiInput-underline:before': { borderBottomColor: '#0f172a' },
                  '& .MuiInput-underline:hover:before': { borderBottomColor: '#0f172a' },
                  '& .MuiInput-underline:after': { borderBottomColor: '#0f172a' },
                  fontSize: '0.95rem'
                }}
              >
                <MenuItem value="">Auswählen...</MenuItem>
                <MenuItem value="fensterreinigung">Fensterreinigung</MenuItem>
                <MenuItem value="grundreinigung">Grundreinigung</MenuItem>
                <MenuItem value="unterhaltsreinigung">Unterhaltsreinigung</MenuItem>
                <MenuItem value="pv-reinigung">PV-Anlage Reinigung</MenuItem>
                <MenuItem value="hochdruckreinigung">Hochdruckreinigung</MenuItem>
              </Select>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 1 }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', mb: 1.5 }}>
                  Umzugs-Service
                </Typography>
              </Box>
              <Select
                name="moving"
                value={form.moving}
                onChange={handleChange}
                fullWidth
                variant="standard"
                displayEmpty
                sx={{
                  '& .MuiInput-underline:before': { borderBottomColor: '#0f172a' },
                  '& .MuiInput-underline:hover:before': { borderBottomColor: '#0f172a' },
                  '& .MuiInput-underline:after': { borderBottomColor: '#0f172a' },
                  fontSize: '0.95rem'
                }}
              >
                <MenuItem value="">Auswählen...</MenuItem>
                <MenuItem value="privatumzug">Privatumzug</MenuItem>
                <MenuItem value="bueroumzug">Büroumzug</MenuItem>
                <MenuItem value="fernumzug">Fernumzug</MenuItem>
                <MenuItem value="moebellift">Möbellift</MenuItem>
                <MenuItem value="packservice">Pack-Service</MenuItem>
              </Select>
            </Grid>

            {/* Row 4: Additional Info */}
            <Grid size={{ xs: 12 }}>
              <Box sx={{ mb: 1 }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', mb: 1.5 }}>
                  Zusätzliche Informationen
                </Typography>
              </Box>
              <TextField
                name="notes"
                value={form.notes}
                onChange={handleChange}
                fullWidth
                multiline
                rows={3}
                placeholder="Erläuterungen und Wünsche"
                variant="standard"
                sx={{
                  '& .MuiInput-underline:before': { borderBottomColor: '#0f172a' },
                  '& .MuiInput-underline:hover:before': { borderBottomColor: '#0f172a' },
                  '& .MuiInput-underline:after': { borderBottomColor: '#0f172a' }
                }}
              />
            </Grid>

            {/* Row 5: Checkbox */}
            <Grid size={{ xs: 12 }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={form.agree}
                    onChange={handleChange}
                    name="agree"
                    required
                    sx={{
                      color: '#0f172a',
                      '&.Mui-checked': { color: '#0f172a' }
                    }}
                  />
                }
                label={
                  <Typography sx={{ fontSize: '0.95rem', color: '#0f172a' }}>
                    Ich bin mit den{' '}
                    <Box component="a" href="/datenschutz" sx={{ color: '#1e3a8a', textDecoration: 'underline', cursor: 'pointer' }}>
                      Datenschutzerklärung
                    </Box>{' '}
                    einverstanden.
                  </Typography>
                }
              />
            </Grid>

            {/* Row 6: Button */}
            <Grid size={{ xs: 12 }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    background: '#1a90ff',
                    color: '#ffffff',
                    paddingX: 6,
                    paddingY: 1.5,
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: '8px',
                    '&:hover': {
                      background: '#0070d8',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 24px rgba(26, 144, 255, 0.3)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Jetzt senden
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
