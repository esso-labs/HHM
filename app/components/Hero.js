'use client';

import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [textIndex, setTextIndex] = useState(0);

  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);

  const texts = [
    'Professionell, pünktlich und in ganz Deutschland für dich unterwegs.',
    'Jetzt unverbindlich Anfragen und heute noch ein Angebot bekommen',
    'Profitieren Sie von unseren beiden Expertisen: Reinigungs & Umzugservice',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left - rect.width / 2);
    mouseY.set(event.clientY - rect.top - rect.height / 2);
  };
  return (
    <Box
      id="start"
      className="hero-gradient section"
      sx={{
        backgroundImage: 'url(/img/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'black',
        py: { xs: 6, md: 12 },
        textAlign: 'center',
        position: 'relative',
      }}
      onMouseMove={handleMouseMove}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
        >
          <Typography variant="h1" component="h1" sx={{ color:'rgb(204,241,95)', fontWeight: 'bold', mt: 2, fontSize: { xs: '2rem', md: '3.5rem' } }}>
            Dein zuverlässiger Servicepartner
          </Typography>
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div
            key={textIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="body1" sx={{  mb: 4, maxWidth: 700, mx: 'auto', fontSize: { xs: '0.95rem', md: '1.1rem' }, color: 'rgb(204,241,95)' }}>
              {texts[textIndex]}
            </Typography>
          </motion.div>
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            variant="contained"
            size="large"
            href="https://wa.me/49176475615"
            target="_blank"
            sx={{ backgroundColor: '#0765d4', color: 'white', '&:hover': { backgroundColor: '#0552a8' }, fontWeight: 'bold', px: 4, py: 1.5 }}
          >
            Jetzt unverbindlich anfragen
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Box sx={{ borderRadius:2, height:150, width:220, backgroundColor: '#0765d4', mt: 10, alignItems: 'center', justifyContent: 'center', gap: 1, color: 'secondary.main' }}>
            {[...Array(5)].map((_, i) => (
              <Box key={i} component="span" sx={{ fontSize: '2.0rem' }}>★</Box>
            ))}
            <Typography variant="body2" sx={{ fontSize:50, ml: 1, color: 'white' }}>
              777
            </Typography>
            <Typography variant="body2" sx={{ fontSize:16, ml: 1, color: 'white' }}>
              TOP BEWERTGET
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
