import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArticleCard } from '../components/ArticleCard';
import { articles } from '../content/articles';

export function BlogPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold">Guias e Artigos</h1>
            <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
              Tudo o que precisa de saber sobre Alojamento Local em Portugal — guias práticos, legislação atualizada e dicas de gestão.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
