import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BookSection } from './components/BookSection';
import { BenefitsSection } from './components/BenefitsSection';
import { CalculatorSection } from './components/CalculatorSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { ArticlePage } from './pages/ArticlePage';
import { BlogPage } from './pages/BlogPage';

function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <BookSection />
        <BenefitsSection />
        <CalculatorSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guias" element={<BlogPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/:slug" element={<ArticlePage />} />
        <Route path="/:cat/:slug" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
