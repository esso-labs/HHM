'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button } from '@mui/material';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MotionBox = motion.create(Box);
const MotionTypography = motion.create(Typography);

// Card Component with Glow Effect + 3D Tilt
function CardWithGlow({ service, idx }) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    if (!isHovered) return;

    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation based on mouse position
    const rotationX = ((mouseY - centerY) / centerY) * 10;
    const rotationY = ((centerX - mouseX) / centerX) * 10;

    setRotateX(rotationX);
    setRotateY(rotationY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        position: 'relative',
        maxWidth: 500,
        mx: 'auto',
        my: 2,
        height: 480,
        perspective: '1000px',
      }}
    >
      {/* Card Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: 0, rotateY: 0 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{
          opacity: { type: 'spring', stiffness: 300, damping: 20, delay: idx * 0.15, duration: 0.6 },
          scale: { type: 'spring', stiffness: 300, damping: 20, delay: idx * 0.15, duration: 0.6 },
          y: { type: 'spring', stiffness: 300, damping: 20, delay: idx * 0.15, duration: 0.6 },
          rotateX: { type: 'spring', stiffness: 300, damping: 20 },
          rotateY: { type: 'spring', stiffness: 300, damping: 20 },
        }}
        style={{
          position: 'relative',
          zIndex: 2,
          transformStyle: 'preserve-3d',
        }}
      >
        <Card
          sx={{
            backgroundColor: '#272727',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            transition: 'all 0.3s ease',
          }}
          onClick={() =>
            window.open(
              `https://wa.me/49123456789?text=Hallo, ich interessiere mich für ${service.title}. Kann ich mehr Informationen bekommen?`,
              '_blank'
            )
          }
        >
          <CardMedia
            component="img"
            height="200"
            image={service.image}
            alt={service.title}
          />
          <CardContent
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                color: 'white',
                mb: 0,
              }}
            >
              {idx + 1}. {service.title}
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Box>
  );
}

const cleaningServices = [
  { title: 'PV-Anlagenreinigung', image: '/img/anlage.jpg' },
  { title: 'Glas & Fensterreinigung', image: '/img/glas.jpg' },
  { title: 'Profi Entrümpelung', image: '/img/coutch.jpg' },
  { title: 'Gewerbe- Büroreinigungen', image: '/img/kuche.jpg' },
  { title: 'Teppichreinigung', image: '/img/teppich.jpg' },
  { title: 'Hochdruckreinigung', image: '/img/umzug.jpg' },
];

export default function ReinigungSection() {
  return (
    <Box id="reinigung" className="section" sx={{ py: { xs: 6, md: 10 }, position: 'relative' }}>
      <AnimatedBackground />
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section with Animations */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{ mb: 8, textAlign: 'center' }}
        >
          {/* Main Headline with Character Reveal + Gradient Animation */}
          <Box sx={{ position: 'relative', mb: 2 }}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0.3em' }}>
                {'Professionelle Möbel- & Küchenmontage in Gronau & Umgebung'.split('').map((char, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 30, rotateX: -90 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0, 
                      rotateX: 0,
                    }}
                    transition={{ 
                      delay: idx * 0.03, 
                      duration: 0.5,
                      repeat: Infinity,
                      repeatDelay: 10,
                      repeatType: 'reverse',
                    }}
                    style={{
                      display: 'inline-block',
                      fontWeight: 800,
                      fontSize: 'clamp(2rem, 5vw, 7rem)',
                      color: '#ffffff',
                      background: 'linear-gradient(135deg, #ffffff 0%, #e3f2fd 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      perspective: '1000px',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </Box>
            </motion.div>

            {/* Animated Gradient Underline */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ 
                duration: 1, 
                delay: 0.8,
                repeat: Infinity,
                repeatDelay: 10,
                repeatType: 'reverse',
              }}
              style={{
                height: '36px',
                background: 'linear-gradient(90deg, #ff6b6b 0%, #4ecdc4 50%, #1a90ff 100%)',
                borderRadius: '3px',
                marginTop: '16px',
                transformOrigin: 'left',
              }}
            />
          </Box>

          {/* Subtitle */}
          <MotionTypography
            variant="h6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            sx={{
              color: '#b3e5fc',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
              fontWeight: 300,
              mb: 4,
              letterSpacing: '0.5px',
            }}
          >
            Wir montieren Ihre Möbel und Küchen zuverlässig, sauber und termingerecht – auch Umzugsküchen oder kleine Reparaturen wie Türen einstellen gehören zu unserem Service.
Einsatzgebiet: Gronau und Umgebung bis 150 km.
          </MotionTypography>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                gap: { xs: 2, md: 4 },
                flexWrap: 'wrap',
                mb: 2,
              }}
            >
              {[
                { icon: '✓', text: 'Deutschlandweit' },
                { icon: '✓', text: 'Professionell' },
                { icon: '✓', text: 'Zuverlässig' },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CheckCircleIcon
                      sx={{
                        color: '#4ecdc4',
                        fontSize: 24,
                      }}
                    />
                    <Typography
                      sx={{
                        color: '#e0e0e0',
                        fontSize: { xs: '0.95rem', md: '1.1rem' },
                        fontWeight: 500,
                      }}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </MotionBox>

        {/* Cleaning Services Grid */}
        <Grid container spacing={{ xs: 3, md: 5 }} sx={{ justifyContent: 'center' }}>
          {cleaningServices.map((s, idx) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
              <CardWithGlow service={s} idx={idx} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
