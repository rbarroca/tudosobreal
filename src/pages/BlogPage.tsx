import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArticleCard } from '../components/ArticleCard';
import { PageMeta } from '../components/PageMeta';
import { articles } from '../content/articles';

export function BlogPage() {
  return (
    <>
      <PageMeta
        title="Guias e Artigos sobre Alojamento Local em Portugal"
        description="Todos os guias práticos sobre Alojamento Local em Portugal — registo, fiscalidade, legislação e gestão. Informação atualizada para proprietários."
        canonical="/guias"
        keywords={['guias alojamento local', 'artigos AL portugal', 'informação alojamento local']}
      />
      <Header />
      <main className="bg-surface-subtle min-h-screen">
        <div className="bg-surface-ink text-white py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 text-center">
            <h1 className="text-3xl sm:text-4xl font-black tracking-[-0.02em]">Guias e Artigos</h1>
            <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
              Tudo o que precisa de saber sobre Alojamento Local em Portugal — guias práticos, legislação atualizada e dicas de gestão.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map(article => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
