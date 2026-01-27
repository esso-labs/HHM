'use client';

import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  TextField,
  Paper,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import BuildIcon from '@mui/icons-material/Build';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ChairIcon from '@mui/icons-material/Chair';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import WeekendIcon from '@mui/icons-material/Weekend';
import HandymanIcon from '@mui/icons-material/Handyman';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const sections = [
  { id: 'start', label: 'Start' },
  { id: 'leistungen', label: 'Leistungen' },
  { id: 'about', label: 'Über uns' },
  { id: 'contact', label: 'Kontakt' },
];

const services = [
  {
    title: 'Küchenmontage',
    description: 'Von der Traumküche zur gelebten Realität',
    icon: KitchenIcon,
    details: [
      'Neue Küchen fachgerecht aufgebaut',
      'Alte Küchen professionell demontiert',
      'Alles sitzt perfect – garantiert',
    ],
  },
  {
    title: 'Möbelmontage',
    description: 'Egal ob Ikea, Poco oder XXXLutz – wir bauen es',
    icon: ChairIcon,
    details: [
      'Alle Hersteller & alle Möbel',
      'Um- und Abbau bei Umzügen',
      'Stabil, sauber, zuverlässig',
    ],
  },
  {
    title: 'Reparaturen & Einstellungen',
    description: 'Die kleinen Dinge, die großen Ärger sparen',
    icon: HomeRepairServiceIcon,
    details: [
      'Quietschende Türen, hängende Schubladen?',
      'Kleinreparaturen im ganzen Haus',
      'Schnell, unbürokratisch, fair',
    ],
  },
  {
    title: 'Polsterreinigung',
    description: 'Sofa wie neu – ohne Chemie-Cocktail',
    icon: WeekendIcon,
    details: [
      'Sofas, Sessel, Stühle',
      'Schonend & nachhaltig',
      'Sichtbar sauberer – kein Gedöns',
    ],
  },
  {
    title: 'Allgemeiner Handwerkservice',
    description: 'Das Allroundtalent für Haus & Wohnung',
    icon: HandymanIcon,
    details: [
      'Von A wie Ablage bis Z wie Zaun',
      'Flexibel, kompetent, verlässlich',
      'Wir packen an – Sie entspannen',
    ],
  },
  {
    title: 'Weitere Services',
    description: 'Maßgeschneidert für Ihre Bedürfnisse',
    icon: BuildIcon,
    details: [
      'Individuelle Lösungen',
      'Kreative Ansätze',
      'Immer mit Liebe zum Detail',
    ],
  },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns bald bei Ihnen.');
  };

  const drawerContent = (
    <Box sx={{ p: 2 }}>
      <IconButton
        onClick={handleDrawerToggle}
        sx={{ float: 'right', mb: 2 }}
      >
        <CloseIcon />
      </IconButton>
      <List sx={{ clear: 'both' }}>
        {sections.map((section) => (
          <ListItem key={section.id} disablePadding>
            <ListItemButton
              onClick={() => {
                scrollToSection(section.id);
                setMobileOpen(false);
              }}
            >
              <ListItemText primary={section.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Navbar */}
      <AppBar position="sticky" sx={{ backgroundColor: '#1a237e' }}>
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 'bold',
              fontSize: { xs: '1rem', md: '1.5rem' },
            }}
          >
            Handwerk Gronau
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
            {sections.map((section) => (
              <Button
                key={section.id}
                color="inherit"
                onClick={() => scrollToSection(section.id)}
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: 1,
                  },
                }}
              >
                {section.label}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
      >
        {drawerContent}
      </Drawer>

      {/* Hero Section */}
      <Box
        id="start"
        sx={{
          background: 'linear-gradient(135deg, #1a237e 0%, #283593 100%)',
          color: 'white',
          py: { xs: 6, md: 10 },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2rem', md: '3.5rem' },
            }}
          >
            Handwerk, das Ihr Zuhause verdient
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              fontSize: { xs: '1rem', md: '1.5rem' },
              fontWeight: 300,
            }}
          >
            Professionelle Montage & Reparatur. Versprochen, Pünktlich, Perfekt.
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mb: 4,
              maxWidth: 600,
              mx: 'auto',
              fontSize: { xs: '0.95rem', md: '1.1rem' },
            }}
          >
            Wir machen aus Ikea-Boxen gemütliche Zuhause und kümmern uns um die Dinge, die Sie selbst nicht schaffen. Gronau & bis 150 km. Faire Preise. Ohne Gedöns.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => scrollToSection('contact')}
            sx={{
              backgroundColor: '#ff6f00',
              '&:hover': { backgroundColor: '#e65100' },
              fontWeight: 'bold',
              px: 4,
              py: 1.5,
            }}
          >
            Kostenlos anfragen
          </Button>
        </Container>
      </Box>

      {/* Services Section */}
      <Box id="leistungen" sx={{ py: { xs: 4, md: 8 }, backgroundColor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 6,
              textAlign: 'center',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              color: 'black',
            }}
          >
            Unsere Leistungen
          </Typography>

          <Grid container spacing={3}>
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'transform 0.3s, box-shadow 0.3s',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                      },
                    }}
                  >
                    <CardContent sx={{ textAlign: 'center', pb: 0 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 2,
                        }}
                      >
                        <IconComponent
                          sx={{
                            fontSize: 48,
                            color: '#1a237e',
                          }}
                        />
                      </Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 'bold',
                          mb: 1,
                        }}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        sx={{ mb: 2 }}
                      >
                        {service.description}
                      </Typography>
                      <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid #eee' }}>
                        {service.details.map((detail, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            sx={{
                              color: '#555',
                              py: 0.5,
                              fontSize: '0.9rem',
                            }}
                          >
                            • {detail}
                          </Typography>
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>

      {/* About Section */}
      <Box id="about" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 4,
              fontSize: { xs: '1.8rem', md: '2.5rem' },
            }}
          >
            Über uns
          </Typography>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              backgroundColor: '#f9f9f9',
              borderLeft: '5px solid #1a237e',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                mb: 3,
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8,
              }}
            >
              Handwerk ist Vertrauenssache. Das verstehen wir. Seit Jahren vertrauen uns Familien in Gronau und Umgebung ihre wertvollsten Räume an – und wir halten, was wir versprechen. Keine leeren Versprechungen, kein unnötiges Bla-Bla. Wir kommen, wir arbeiten, wir hinterlassen Ihr Zuhause besser als zuvor. Punkt.
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              {[
                { title: '✓ Versprochen', desc: 'Faire Preise – keine versteckten Kosten' },
                { title: '✓ Pünktlich', desc: 'Termingenauigkeit ist unser Standard' },
                { title: '✓ Perfekt', desc: 'Qualitätsarbeit, als würde es unser Zuhause sein' },
              ].map((point, idx) => (
                <Grid item xs={12} md={4} key={idx}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 'bold',
                        color: '#1a237e',
                        mb: 1,
                      }}
                    >
                      {point.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {point.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        id="contact"
        sx={{
          py: { xs: 6, md: 10 },
          backgroundColor: '#f5f5f5',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: 6,
              textAlign: 'center',
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              color: 'black',
            }}
          >
            Kontakt
          </Typography>

          <Grid container spacing={4}>
            {/* Contact Info */}
            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{ p: 4, backgroundColor: 'white' }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', mb: 3 }}
                >
                  Kontaktinformationen
                </Typography>

                <Box sx={{ mb: 3, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <LocationOnIcon sx={{ color: '#1a237e', mt: 0.5 }} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Wo wir sind
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Gronau & bis zu 150 km Umkreis
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 3, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <PhoneIcon sx={{ color: '#1a237e', mt: 0.5 }} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Telefonisch erreichbar
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                    >
                      Kommt bald – schreib uns jetzt!
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mb: 3, display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <EmailIcon sx={{ color: '#1a237e', mt: 0.5 }} />
                  <Box>
                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                      Deine direkte Kontakt
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                    >
                      Kommt bald – schreib uns jetzt!
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 4, pt: 3, borderTop: '1px solid #eee' }}>
                  <Typography variant="body2" sx={{ fontWeight: 'bold', mb: 1 }}>
                    Unser Einsatzgebiet
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Gronau & alles im 150 km Umkreis. Bei Distanz: Frag einfach – wir finden eine Lösung.
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Paper elevation={0} sx={{ p: 4, backgroundColor: 'white' }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 'bold', mb: 3 }}
                >
                  Sag uns was zu tun ist
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <TextField
                    fullWidth
                    label="Wie heißt du?"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="E-Mail (damit wir dich erreichbar haben)"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    margin="normal"
                    required
                  />
                  <TextField
                    fullWidth
                    label="Deine Telefonnummer"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    margin="normal"
                  />
                  <TextField
                    fullWidth
                    label="Was möchtest du machen lassen? (sei so konkret wie möglich)"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    margin="normal"
                    multiline
                    rows={4}
                    required
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 3,
                      backgroundColor: '#ff6f00',
                      '&:hover': { backgroundColor: '#e65100' },
                      fontWeight: 'bold',
                      py: 1.5,
                    }}
                  >
                    Anfrage absenden
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          backgroundColor: '#1a237e',
          color: 'white',
          py: 4,
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" sx={{ mb: 1 }}>
            © 2026 Handwerk Gronau – Wir machen's sauber.
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
    </>
  );
}
