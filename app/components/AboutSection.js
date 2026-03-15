'use client';

import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

export default function AboutSection() {
  return (
    <Box 
      id="wir" 
      className="section" 
      sx={{ 
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #2a2a2a 0%, #1f1f1f 100%)',
        color: '#ffffff',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{ mb: 8, display: 'flex', alignItems: 'center', gap: 1.5 }}
        >
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#ffffff' }} />
          <Typography sx={{ fontSize: '0.85rem', fontWeight: '700', letterSpacing: 1.5, color: '#ffffff' }}>
            ÜBER MMS-GRONAU
          </Typography>
        </MotionBox>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 6 }, alignItems: 'flex-start' }}>
          {/* Left (50%): Large H1 Headline */}
          <Box>
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              viewport={{ once: true }}
            >
              <Typography 
                component="h1"
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: '#ffffff',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    textShadow: '0 0 20px rgba(255, 107, 107, 0.6), 0 0 40px rgba(78, 205, 196, 0.4), 0 10px 30px rgba(26, 144, 255, 0.3)',
                  }
                }}
              >
                Ein Familienunternehmen durch und durch, das es sich zum Ziel gesetzt hat, mit seinem exzellenten Service zu überzeugen.
              </Typography>
            </MotionBox>
          </Box>

          {/* Right (50%): Text Blocks */}
          <Box>
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Block 1 */}
              <Box sx={{ mb: 5 }}>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#ff6b6b', mb: 1.5, letterSpacing: 0.5 }}>
                  MMS-GRONAU
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.7, color: 'rgba(255,255,255,0.95)' }}>
                  Ihr zuverlässiger Partner für Umzüge und Reinigungen mit Hauptsitz in Gronau, Westfalen. Wir sind stolz darauf, in den zwei Nischenbereichen Umzüge und Reinigungen tätig zu sein. In einer Branche, in der Zuverlässigkeit und Qualität entscheidend sind, setzen wir alles daran, Ihre Erwartungen zu übertreffen.
                </Typography>
              </Box>

              {/* Block 2 */}
              <Box sx={{ mb: 5 }}>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', mb: 1.5, letterSpacing: 0.5 }}>
                  UMZÜGE – PRIVAT UND GEWERBLICH
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
                  Unser Umzugsservice deckt ein breites Spektrum ab. Egal, ob Sie privat umziehen oder einen großen Gewerbeurwang in ganz Deutschland planen, wir sind Ihr vertrauenswürdiger Partner. Wir verstehen, dass ein Umzug mit all Stress und Unsicherheiten verbunden ist. Deshalb stehen wir Ihnen von der Planung bis zur Umsetzung im Raf und Tat zur Seite. Unser erfahrenes Team kümmert sich um jedes Detail, damit Ihr Umzug reibungslos und effizient abläuft. Mit moderner Technik und einem gut ausgestatteten Fuhrpark garantieren wir, dass Ihre Möbel und Habseligkeiten sicher an Ihr Ziel gelangen.
                </Typography>
              </Box>

              {/* Block 3 */}
              <Box sx={{ mb: 5 }}>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', mb: 1.5, letterSpacing: 0.5 }}>
                  REINIGUNGEN IM MÜNSTERLAND – QUALITÄT ZUM SEHR FAIREN PREIS
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
                  Neben Umzügen bieten wir auch einen erstklassigen Reinigungsservice an, der sich speziell auf das Münsterland konzentriert. Hier legen wir großen Wert darauf, Ihnen zu einem fairen Preis eine Top-Leistung zu garantieren. Unsere Reinigungsdienstleistungen reichen von grundlichen Fensterreinigungen über die Pflege von Wohnblümen bis hin zu professionellen Reinigungen für Hotels, Kinos und Restaurants. Wir wissen, dass Sauberkeit und Hygiene in der Gastronomie und im Gastgewerbe unerlässlich sind. Daher stellen wir sicher, dass jede Reinigung höchste Standards erfüllt.
                </Typography>
              </Box>

              {/* Block 4 */}
              <Box>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 600, color: '#ffffff', mb: 1.5, letterSpacing: 0.5 }}>
                  WARUM MMS-GRONAU?
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, lineHeight: 1.7, color: 'rgba(255,255,255,0.85)' }}>
                  Bei MMS-Gronau stehen Ihre Bedürfnisse im Mittelpunkt. Unser Team zeichnet sich durch Fachwissen, Engagement und ein hohes Maß an Kundensorientierung aus. Wir setzen auf Transparenz und faire Preise, sodass Sie genau wissen, welche Leistungen Sie erwarten können. Mit uns entscheiden Sie sich für einen Partner, der Wert auf Qualität und Zuverlässigkeit legt. Lassen Sie sich von unserem umfassenden Serviceangebot überzeugen. Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihnen bei Ihrem nächsten Umzug oder Ihrer nächsten Reinigung helfen können. MMS-Gronau – für ein Zuhause, in dem Sie sich wohlfühlen!
                </Typography>
              </Box>
            </MotionBox>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
