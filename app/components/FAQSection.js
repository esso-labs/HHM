'use client';

import React, { useState } from 'react';
import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

const faqData = [
  {
    question: 'Was kostet ein Umzugsunternehmen?',
    answer: 'Die Kosten für ein Umzugsunternehmen variieren und hängen von mehreren Faktoren ab. Das Volumen des Umzugsguts spielt eine Rolle, ebenso wie die Entfernung zwischen dem alten und dem neuen Wohnort. Auch die Etage ist wichtig: Ob sich die Wohnung im Erdgeschoss oder in einem höheren Stockwerk befindet und ob ein Aufzug vorhanden ist, kann den Preis beeinflussen. Darüber hinaus kommen oft Extras hinzu, wie Montagearbeiten, der Einsatz eines Möbellifts, die Einrichtung von Halteverbotszonen, die Bereitstellung von Umzugsmaterialien und eventuelle Einlagerung. Um ein genaues Angebot zu erhalten, kontaktieren Sie uns!'
  },
  {
    question: 'Wie lange dauert ein Umzug?',
    answer: 'Die Dauer eines Umzugs hängt natürlich von der Größe des Umzugs ab, aber in der Regel dauert ein Umzug durchschnittlich eins bis zwei Tage.'
  },
  {
    question: 'Ist mein Umzug versichert?',
    answer: 'Ja, Ihr Umzug ist versichert, da wir großen Wert auf die Sicherheit Ihres Umzugsguts legen und daher eine umfassende Versicherungspolice abgeschlossen haben, die Schäden während des Transports und der Handhabung abdeckt, sodass Sie sich keine Sorgen um mögliche Verluste oder Beschädigungen machen müssen. Es kommt fast nie zu irgendwelchen Schäden, da unser erfahrenes Team äußerst sorgfältig und professionell arbeitet.'
  },
  {
    question: 'Bekomme ich Umzugskartons & Packmaterial?',
    answer: 'Natürlich, wir liefern Ihnen gerne Umzugskartons und das benötigte Packmaterial, wenn Sie es benötigen.'
  },
  {
    question: 'Wird auch ein Einpack- & Auspack-Service angeboten?',
    answer: 'Ja, auf Wunsch bieten wir einen Einpack- und Auspack-Service an, bei dem wir die Umzugskisten für Sie ein- und auspacken können.'
  },
  {
    question: 'Wird eine Halteverbotszone eingerichtet?',
    answer: 'Ja, wir richten bei jedem Umzug eine Halteverbotszone ein, um sicherzustellen, dass Ihr Umzug reibungslos und ohne Verzögerungen durchgeführt werden kann. In einigen Fällen ist die Einrichtung einer Halteverbotszone möglicherweise nicht erforderlich.'
  },
  {
    question: 'Welche Vorteile habe ich bei MMS-Gronau Umzüge?',
    answer: 'Mit MMS-Gronau Umzug Service sind Sie bestens aufgehoben! Wir kümmern uns um Ihren Umzug, als wäre es unser eigener. Sie profitieren von unserer Erfahrung, Sorgfalt und einem eingespielten Team, das genau weiß, wie man anpackt. Kostenlose Beratung, Angebotserstellung und Besichtigungen? Gibt\'s bei uns natürlich dazu! Und keine Sorge – Ihr Hab und Gut ist bei uns zu 100% versichert. Wir geben alles, um Ihnen den Umzug so entspannt wie möglich zu machen. Melden Sie sich einfach, wir sind für Sie da!'
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
          <Box sx={{ height: 4, width: 120, background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4, #1a90ff)', borderRadius: 2 }} />
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
