import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { BookSection } from './components/BookSection';
import { BenefitsSection } from './components/BenefitsSection';
import { CalculatorSection } from './components/CalculatorSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { ArticlePage } from './pages/ArticlePage';
import { BlogPage } from './pages/BlogPage';
import { CategoryPage } from './pages/CategoryPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { PageMeta } from './components/PageMeta';

const homepageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://tudosobrealojamentolocal.pt/#website',
      url: 'https://tudosobrealojamentolocal.pt',
      name: 'Tudo sobre Alojamento Local',
      description: 'Informação prática sobre Alojamento Local em Portugal',
      inLanguage: 'pt-PT',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://tudosobrealojamentolocal.pt/guias?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'Organization',
      '@id': 'https://tudosobrealojamentolocal.pt/#organization',
      name: 'Tudo sobre Alojamento Local',
      url: 'https://tudosobrealojamentolocal.pt',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tudosobrealojamentolocal.pt/favicon.svg',
      },
      sameAs: [],
    },
  ],
};

function HomePage() {
  return (
    <div className="min-h-screen">
      <PageMeta
        title="Tudo sobre Alojamento Local | Como abrir e gerir AL em Portugal"
        description="Informação prática sobre como abrir, registar e gerir um Alojamento Local em Portugal. Requisitos legais, fiscalidade e boas práticas."
        canonical="/"
        keywords={['alojamento local portugal', 'como abrir alojamento local', 'guia al 2026']}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/guias" element={<BlogPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPage />} />
      {/* Páginas de categoria — têm de vir antes de /:slug */}
      <Route path="/registar-alojamento-local" element={<CategoryPage />} />
      <Route path="/fiscalidade-alojamento-local" element={<CategoryPage />} />
      <Route path="/legislacao-al" element={<CategoryPage />} />
      <Route path="/gerir-alojamento-local" element={<CategoryPage />} />
      <Route path="/:cat/:slug" element={<ArticlePage />} />
      <Route path="/:slug" element={<ArticlePage />} />
    </Routes>
  );
}

export default App;
