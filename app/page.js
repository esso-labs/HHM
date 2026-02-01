'use client';

import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ChairIcon from '@mui/icons-material/Chair';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import WeekendIcon from '@mui/icons-material/Weekend';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';

const services = [
  {
    title: 'Möbelmontage',
    description: 'Fachgerechte Montage aller Hersteller',
    icon: ChairIcon,
    details: ['Alle Hersteller – professionell aufgebaut', 'Umzugsmontage & Abbau', 'Stabil, sauber, zuverlässig'],
  },
  {
    title: 'Küchenmontage',
    description: 'Neu und Umzugsküchen',
    icon: KitchenIcon,
    details: ['Neue Küchen fachgerecht aufgebaut', 'Umzugsküchen professionell montiert', 'Alles sitzt perfect – garantiert'],
  },
  {
    title: 'Service & Reparaturen',
    description: 'Nachjustierung & Austausch von Bauteilen',
    icon: HomeRepairServiceIcon,
    details: ['Nachjustierung aller Komponenten', 'Austausch einzelner Bauteile', 'Schnell, unbürokratisch, fair'],
  },
  {
    title: 'Polsterreinigung',
    description: 'Sofa & Sessel',
    icon: WeekendIcon,
    details: ['Sofas & Sessel professionell gereinigt', 'Schonend & nachhaltig', 'Sichtbar sauberer – kein Gedöns'],
  },
  {
    title: 'Demontage & Entsorgung',
    description: 'Fachgerechte Demontage und Entsorgung',
    icon: BuildIcon,
    details: ['Möbel und Einrichtungen demontieren', 'Professionelle Entsorgung', 'Zuverlässig und verantwortungsvoll'],
  },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <Box
        id="start"
        sx={{
          backgroundImage: 'url(/img/bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          color: 'white',
          py: { xs: 6, md: 12 },
          textAlign: 'center',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2, fontSize: { xs: '2rem', md: '3.5rem' } }}>
            Handwerk, auf das Sie sich verlassen können.
          </Typography>
          <Typography variant="h5" sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.5rem' }, fontWeight: 300 }}>
            Fachgerechte Montage, Reparatur und Service – pünktlich, sauber, zuverlässig.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 600, mx: 'auto', fontSize: { xs: '0.95rem', md: '1.1rem' } }}>
            In Gronau und Umgebung (bis 150 km).
          </Typography>
          <Button
            variant="contained"
            size="large"
            href="https://wa.me/49176475615"
            target="_blank"
            sx={{ backgroundColor: '#ff6f00', '&:hover': { backgroundColor: '#e65100' }, fontWeight: 'bold', px: 4, py: 1.5 }}
          >
            Kostenvoranschlag – unverbindlich
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="leistungen" sx={{ py: { xs: 4, md: 8 }, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center', fontSize: { xs: '1.8rem', md: '2.5rem' }, color: 'black' }}>
            Unsere Leistungen
          </Typography>

          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 4, fontSize: { xs: '1.8rem', md: '2.5rem' } }}>
            Über uns
          </Typography>
          <Box sx={{ p: { xs: 3, md: 5 }, backgroundColor: '#f9f9f9', color: "#1a237e", textAlign:"center", borderLeft: '5px solid #1a237e', borderRadius: 1 }}>
            <Typography variant="body1" sx={{ mb: 3, fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.8 }}>
              Handwerk ist Vertrauenssache – und genau dafür stehen wir.
Seit Jahren vertrauen uns Kunden in Gronau und Umgebung ihre Wohnräume an. Wir arbeiten zuverlässig, transparent und mit hohem Qualitätsanspruch.
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              {[
                { title: '✓ Versprochen', desc: 'Faire Preise – keine versteckten Kosten' },
                { title: '✓ Pünktlich', desc: 'Termingenauigkeit ist unser Standard' },
                { title: '✓ Perfekt', desc: 'Qualitätsarbeit, als würde es unser Zuhause sein' },
              ].map((point, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#1a237e', mb: 1 }}>
                      {point.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {point.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 6, textAlign: 'center', fontSize: { xs: '1.8rem', md: '2.5rem' }, color: 'black' }}>
            Kontakt
          </Typography>

          <Grid container spacing={4}>
            {/* Contact Info */}
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Kontakt
                </Typography>

                <Typography variant="body2" sx={{ mb: 3 }}>
                  <strong>Moebl-Montage-und-Service-Gronau</strong>
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  📱 <strong>Telefon:</strong> <a href="tel:+49176475615" style={{ color: '#ff6f00', textDecoration: 'none' }}>017647 567615</a>
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                  <Button
                    variant="contained"
                    href="https://wa.me/49176475615"
                    target="_blank"
                    sx={{ backgroundColor: '#25D366', '&:hover': { backgroundColor: '#20ba5a' }, flex: 1 }}
                    startIcon={<WhatsAppIcon />}
                  >
                    WhatsApp
                  </Button>
                </Box>
              </Box>
            </Grid>

            {/* Quick CTA */}
            <Grid item xs={12} md={6}>
              <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 3 }}>
                  Kostenvoranschlag – Unverbindlich
                </Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>
                  Erzähl uns, was du brauchst – wir machen dir ein unverbindliches Angebot.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  href="https://wa.me/49176475615"
                  target="_blank"
                  sx={{ backgroundColor: '#ff6f00', '&:hover': { backgroundColor: '#e65100' }, fontWeight: 'bold', py: 1.5 }}
                >
                  Kostenvoranschlag anfragen
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
