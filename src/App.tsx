import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BookSection } from './components/BookSection';
import { BenefitsSection } from './components/BenefitsSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BookSection />
        <BenefitsSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;