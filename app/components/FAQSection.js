'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const faqData = [
  {
    question: '📸 Wie kann ich ein Angebot erhalten?',
    answer: 'Schicken Sie uns einfach ein Foto Ihrer Möbel oder Küche per WhatsApp - wir melden uns schnell mit einem Angebot.'
  },
  {
    question: '🪑 Montieren Sie auch Möbel vom Umzug?',
    answer: 'Ja, wir montieren sowohl neue Möbel als auch Möbel aus Umzügen fachgerecht.'
  },
  {
    question: '🚚 Bieten Sie komplette Umzüge an?',
    answer: 'Kleinere Umzüge übernehmen wir selbst - auf Wunsch inklusive Möbelmontage. Für größere Umzüge vermitteln wir an eine Partnerfirma.'
  },
  {
    question: '🍳 Bieten Sie auch Umzugsküchen an?',
    answer: 'Ja, wir übernehmen den Abbau und Wiederaufbau von Küchen inklusive Anpassungen.'
  },
  {
    question: '🔧 Verkaufen Sie Ersatzteile?',
    answer: 'Nein, wir bieten keinen Verkauf von Ersatzteilen an. Wir kümmern uns um Montage, Anpassung und Reparatur.'
  },
  {
    question: '🔩 Welche Reparaturen bieten Sie an?',
    answer: 'Wir führen kleinere Reparaturen durch, z. B. das Ausrichten von Türen oder das Beheben von Macken.'
  },
  {
    question: '🛋️ Können Möbel zur Aufbereitung abgeholt werden?',
    answer: 'Ja, auf Wunsch holen wir Möbel ab und bereiten sie fachgerecht auf (z. B. schleifen und lackieren).'
  },
  {
    question: '📦 Bieten Sie auch Entrümpelungen an?',
    answer: 'Ja, wir entrümpeln Wohnungen, Keller und Häuser. Für größere Projekte stellen wir zusätzliche Teams bereit.'
  }
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box id="faq" className="section" sx={{ py: { xs: 6, md: 10 }, background: '#ffffff' }}>
      <Container maxWidth="xl">
        {/* Header */}
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 1.5 }}
        >
          <Box sx={{ width: 12, height: 12, borderRadius: '50%', background: '#1e3a8a', boxShadow: '0 0 20px rgba(30, 58, 138, 0.6)' }} />
          <Typography sx={{ fontSize: '0.9rem', fontWeight: '700', letterSpacing: 1, color: '#0f172a' }}>
            HÄUFIG GESTELLTE FRAGEN
          </Typography>
        </MotionBox>

        {/* Main Title */}
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          sx={{ mb: 8 }}
        >
          <Typography 
            sx={{ 
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              fontWeight: 700,
              lineHeight: 1.3,
              color: '#0f172a',
              mb: 2
            }}
          >
            Alles was Sie wissen müssen
          </Typography>
          <Box sx={{ height: 4, width: 120, background: 'linear-gradient(90deg, #0765d4, #2e8cff, #7cb5ff)', borderRadius: 2 }} />
        </MotionBox>

        {/* FAQ Accordion */}
        <Box>
          {faqData.map((item, idx) => (
            <MotionBox
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              viewport={{ once: true }}
              sx={{ mb: 2 }}
            >
              <Accordion
                expanded={expanded === idx}
                onChange={handleChange(idx)}
                sx={{
                  borderRadius: { xs: '8px', md: '12px' },
                  border: '1px solid #e5e7eb',
                  '&:hover': {
                    borderColor: '#1e3a8a',
                    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.1)'
                  },
                  transition: 'all 0.3s ease',
                  '&.Mui-expanded': {
                    backgroundColor: '#f0f4ff',
                    borderColor: '#1e3a8a'
                  }
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: '#1e3a8a' }} />}
                  sx={{
                    padding: { xs: '16px', md: '20px' },
                    '&:hover': {
                      backgroundColor: '#f9fafb'
                    }
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      fontWeight: 600,
                      color: '#0f172a'
                    }}
                  >
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    padding: { xs: '16px', md: '20px' },
                    paddingTop: 0,
                    borderTop: '1px solid #e5e7eb'
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      lineHeight: 1.7,
                      color: '#4b5563'
                    }}
                  >
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </MotionBox>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
