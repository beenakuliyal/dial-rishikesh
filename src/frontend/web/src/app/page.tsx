import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsAndMission from '@/components/StatsAndMission';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import LatestInsights from '@/components/LatestInsights';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <StatsAndMission />
        <Services />
        <Testimonials />
        <LatestInsights />
      </main>
      <Footer />
    </>
  );
}

