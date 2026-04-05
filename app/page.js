'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import Hero from './components/Hero';
import ReinigungSection from './components/ReinigungSection';
import UmzuegeSection from './components/UmzuegeSection';
import AboutSection from './components/AboutSection';
import Reviews from './components/Reviews';
import Kunden from './components/Clients';
import FAQSection from './components/FAQSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

// Dynamically import Navbar with no SSR
const Navbar = dynamic(() => import('./components/Navbar'), { ssr: false });

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ReinigungSection />
      <UmzuegeSection />
      <AboutSection />
      <Reviews />
      <Kunden />
      <FAQSection />
      <ContactForm />
      <Footer />
    </>
  );
}
