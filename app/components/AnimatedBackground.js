'use client';

import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export default function AnimatedBackground() {
  // Blob animation variants
  const blobVariants = {
    animate: {
      x: [0, 30, -20, 0],
      y: [0, -30, 20, 0],
      opacity: [0.3, 0.5, 0.3, 0.3],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const blobVariants2 = {
    animate: {
      x: [0, -40, 25, 0],
      y: [0, 30, -25, 0],
      opacity: [0.25, 0.4, 0.25, 0.25],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const blobVariants3 = {
    animate: {
      x: [0, 20, -30, 0],
      y: [0, -20, 30, 0],
      opacity: [0.2, 0.35, 0.2, 0.2],
      transition: {
        duration: 12,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'linear-gradient(135deg, #0d6e3b 0%, #1b8f4a 25%, #2ba854 50%, #1b8f4a 75%, #0d6e3b 100%)',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* Animated Blob 1 - Large Green */}
      <MotionBox
        variants={blobVariants}
        animate="animate"
        sx={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: { xs: '300px', md: '500px' },
          height: { xs: '300px', md: '500px' },
          background: 'radial-gradient(circle, rgba(43, 168, 84, 0.4) 0%, rgba(43, 168, 84, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(40px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Animated Blob 2 - Middle Green */}
      <MotionBox
        variants={blobVariants2}
        animate="animate"
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: { xs: '250px', md: '450px' },
          height: { xs: '250px', md: '450px' },
          background: 'radial-gradient(circle, rgba(27, 143, 74, 0.3) 0%, rgba(27, 143, 74, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(50px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Animated Blob 3 - Light Green Center */}
      <MotionBox
        variants={blobVariants3}
        animate="animate"
        sx={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          width: { xs: '200px', md: '350px' },
          height: { xs: '200px', md: '350px' },
          background: 'radial-gradient(circle, rgba(76, 175, 80, 0.25) 0%, rgba(76, 175, 80, 0) 70%)',
          borderRadius: '50%',
          filter: 'blur(45px)',
          mixBlendMode: 'screen',
          transform: 'translateX(-50%)',
        }}
      />

      {/* Subtle Grid Pattern Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
}
