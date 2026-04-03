'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Checkbox, FormControlLabel, Grid, Select, MenuItem } from '@mui/material';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    montage: '',
    moving: '',
    notes: '',
    agree: false
  });
  const [statusText, setStatusText] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      'Neue Anfrage über Website',
      `Name/Firma: ${form.name || '-'}`,
      `Telefon: ${form.phone || '-'}`,
      `E-Mail: ${form.email || '-'}`,
      `Fläche (qm): ${form.area || '-'}`,
      `Montageservice: ${form.montage || '-'}`,
      `Umzugsservice: ${form.moving || '-'}`,
      `Weitere Infos: ${form.notes || '-'}`,
    ];

    const whatsappUrl = `https://wa.me/49176475615?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setStatusText('Anfrage vorbereitet: WhatsApp wurde geöffnet.');
  };

  const isSubmitDisabled = !form.name || !form.phone || !form.email || !form.agree;

  return (
    <Box id="contact" className="section" sx={{ py: { xs: 7, md: 11 }, background: 'linear-gradient(180deg, #f7fbff 0%, #edf5ff 100%)' }}>
      <Container maxWidth="xl">
        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: '1.8rem', md: '2.2rem' },
            fontWeight: 800,
            color: '#0f172a',
            mb: 1.2
          }}
        >
          Kostenfreie Kontaktaufnahme
        </Typography>
        <Typography sx={{ fontSize: { xs: '0.98rem', md: '1.06rem' }, color: 'rgba(15,23,42,0.78)', mb: 5 }}>
          Beschreiben Sie kurz Ihr Vorhaben. Wir melden uns zeitnah mit einem passenden Angebot.
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            background: '#ffffff',
            borderRadius: 4,
            p: { xs: 2.2, md: 3.2 },
            border: '1px solid rgba(7,101,212,0.14)',
            boxShadow: '0 16px 36px rgba(8, 38, 84, 0.1)',
          }}
        >
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
                  E-Mail *
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
                  Fläche in qm
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
                  Montageservice
                </Typography>
              </Box>
              <Select
                name="montage"
                value={form.montage}
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
                <MenuItem value="küchenmontage">KüchenMontage</MenuItem>
                <MenuItem value="möbelmontage">Möbelmontage</MenuItem>
                <MenuItem value="küchenanpassung">Küchenanpassung & Änderungen</MenuItem>
                <MenuItem value="möbelreparatur">Möbelreparatur & Austausch</MenuItem>
                <MenuItem value="möbelaufbereitung">Möbelaufbereitung</MenuItem>
                <MenuItem value="entrümpelung">Entrümpelung</MenuItem>
              </Select>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ mb: 1 }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a', mb: 1.5 }}>
                  Umzugsservice
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
                      Datenschutzbestimmungen
                    </Box>{' '}
                    einverstanden.
                  </Typography>
                }
              />
            </Grid>

            {statusText ? (
              <Grid size={{ xs: 12 }}>
                <Typography sx={{ color: '#0765d4', fontWeight: 600 }}>{statusText}</Typography>
              </Grid>
            ) : null}

            {/* Row 6: Button */}
            <Grid size={{ xs: 12 }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitDisabled}
                  sx={{
                    background: '#0765d4',
                    color: '#ffffff',
                    paddingX: 6,
                    paddingY: 1.5,
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: '999px',
                    '&:hover': {
                      background: '#0552a8',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 24px rgba(7, 101, 212, 0.32)'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  Anfrage per WhatsApp senden
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
