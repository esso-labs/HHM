'use client';

import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BuildIcon from '@mui/icons-material/Build';

const MotionBox = motion.create(Box);

export default function ServiceCard({ service }) {
  const IconComponent = service.icon || BuildIcon;
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  // Animation Variants
  const cardVariants = {
    initial: { y: 0 },
    hover: { y: -8 },
  };

  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.15, rotate: 360, transition: { duration: 0.6 } },
  };

  const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
  };

  const contentVariants = {
    initial: { opacity: 1, y: 0 },
    hover: { opacity: 0, y: 10 },
  };

  const detailsVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0 },
  };

  const detailItemVariants = {
    hidden: { opacity: 0, x: -10 },
    show: { opacity: 1, x: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <MotionBox
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={cardVariants}
      initial="initial"
      whileHover="hover"
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '20px',
        overflow: 'hidden',
        background: '#ffffff',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
        transition: 'box-shadow 0.3s ease',
        border: '1px solid rgba(200, 200, 200, 0.2)',
        position: 'relative',
        '&:hover': {
          boxShadow: '0 20px 50px rgba(204, 241, 95, 0.3)', 
        },
      }}
    >
      {/* Top Gradient Overlay */}
      <MotionBox
        variants={overlayVariants}
        initial="initial"
        whileHover="hover"
        transition={{ duration: 0.3 }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '120px',
          background: 'linear-gradient(135deg, rgba(12, 240, 99, 0.95) 0%, rgba(92, 147, 40, 0.85) 100%)',
          zIndex: 0,
        }}
      />

      {/* Icon Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 5,
          position: 'relative',
          zIndex: 2,
        }}
      >
        <motion.div
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 90,
              height: 90,
              borderRadius: '18px',
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #283593 100%)`,
              color: 'white',
              boxShadow: '0 10px 30px rgba(26, 35, 126, 0.3)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <IconComponent sx={{ fontSize: 48, color: 'white' }} />
          </Box>
        </motion.div>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          p: { xs: 3, md: 3.5 },
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Title & Description (Hide on Hover) */}
        <MotionBox
          variants={contentVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.3 }}
        >
          <Typography
            variant="h6"
            component="h3"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '1.15rem', md: '1.35rem' },
              color: theme.palette.primary.main,
              mb: 1.5,
              letterSpacing: '0.5px',
            }}
          >
            {service.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: '#666',
              fontSize: { xs: '0.9rem', md: '0.95rem' },
              lineHeight: 1.6,
              mb: 0.5,
            }}
          >
            {service.description}
          </Typography>
        </MotionBox>

        {/* Features List (Show on Hover) */}
        <MotionBox
          variants={detailsVariants}
          initial="initial"
          whileHover="hover"
          transition={{ duration: 0.3 }}
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileHover="show"
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            {service.details &&
              service.details.map((detail, idx) => (
                <motion.div key={idx} variants={detailItemVariants}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                    <CheckCircleIcon
                      sx={{
                        color: theme.palette.secondary.main,
                        fontSize: 20,
                        mt: 0.3,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        color: '#555',
                        fontSize: { xs: '0.85rem', md: '0.9rem' },
                        lineHeight: 1.5,
                      }}
                    >
                      {detail}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
          </motion.div>
        </MotionBox>
      </Box>

      {/* CTA Button */}
      <Box
        sx={{
          p: { xs: 2.5, md: 3 },
          pt: { xs: 2, md: 2.5 },
          borderTop: '1px solid rgba(200, 200, 200, 0.2)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            fullWidth
            sx={{
              fontWeight: 700,
              textTransform: 'none',
              fontSize: { xs: '0.95rem', md: '1rem' },
              py: { xs: 1.2, md: 1.4 },
              borderRadius: '12px',
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #1a237e 100%)`,
              color: 'white',
              border: 'none',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 1,
              boxShadow: '0 8px 20px rgba(26, 35, 126, 0.25)',
              '&:hover': {
                background: `linear-gradient(135deg, #1a237e 0%, ${theme.palette.primary.main} 100%)`,
                boxShadow: '0 12px 30px rgba(26, 35, 126, 0.35)',
              }}
            }
          >
            Anfrage stellen
            <motion.div
              animate={isHovered ? { x: 4 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </motion.div>
          </Button>
        </motion.div>
      </Box>
    </MotionBox>
  );
}