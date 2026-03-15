'use client';
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import ReinigungSection from './components/ReinigungSection';
import UmzuegeSection from './components/UmzuegeSection';
import AboutSection from './components/AboutSection';
import Reviews from './components/Reviews';
import Kunden from './components/Clients';
import Projects from './components/Projects';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Dynamically import Navbar with no SSR
const Navbar = dynamic(() => import('./components/Navbar'), { ssr: false });

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {mounted && <Navbar />}
      <Hero />
      <ReinigungSection />
      <UmzuegeSection />
      <AboutSection />
      <Reviews />
      <Kunden />
      <Projects />
      <FAQSection />
      <ContactForm />
      <Footer />
    </>
  );
}
