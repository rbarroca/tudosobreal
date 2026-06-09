import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getArticleBySlug, articles } from '../content/articles';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArticleCard } from '../components/ArticleCard';
import { Calendar, RefreshCw } from 'lucide-react';

export function ArticlePage() {
  const params = useParams<{ slug?: string; cat?: string }>();
  const slug = [params.cat, params.slug].filter(Boolean).join('/');
  const article = getArticleBySlug(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) return <Navigate to="/" replace />;

  const related = articles.filter(a => a.categorySlug === article.categorySlug && a.slug !== article.slug).slice(0, 3);
  const others = related.length < 3
    ? [...related, ...articles.filter(a => a.slug !== article.slug && !related.includes(a)).slice(0, 3 - related.length)]
    : related;

  const breadcrumbs = [
    { label: article.category, href: undefined },
    { label: article.title },
  ];

  const schemas: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      author: { '@type': 'Organization', name: 'Tudo sobre Alojamento Local' },
      publisher: { '@type': 'Organization', name: 'Tudo sobre Alojamento Local', url: 'https://tudosobrealojamentolocal.pt' },
      ...(article.schema || {}),
    },
  ];

  if (article.howToSteps) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: article.title,
      description: article.description,
      step: article.howToSteps.map((s, i) => ({
        '@type': 'HowToStep',
        position: i + 1,
        name: s.name,
        text: s.text,
      })),
    });
  }

  if (article.faqItems) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: article.faqItems.map(f => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
  }

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Breadcrumb items={breadcrumbs} />

          <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 px-8 pt-10 pb-12 text-white">
              <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full">{article.category}</span>
              <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">{article.title}</h1>
              <p className="mt-3 text-blue-100 text-lg">{article.description}</p>
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-blue-200">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" /> Publicado: {new Date(article.publishedAt).toLocaleDateString('pt-PT')}
                </span>
                <span className="flex items-center gap-1">
                  <RefreshCw className="w-4 h-4" /> Atualizado: {new Date(article.updatedAt).toLocaleDateString('pt-PT')}
                </span>
              </div>
            </div>

            <div
              className="px-8 py-10 prose prose-blue max-w-none prose-headings:font-bold prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          <div className="mt-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 text-white text-center">
            <h2 className="text-xl font-bold">Calcule a rentabilidade do seu AL</h2>
            <p className="mt-2 text-orange-100">Use a nossa calculadora gratuita para simular receitas e custos.</p>
            <a
              href="https://calculadoraal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-white text-orange-600 font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors"
            >
              Simula a rentabilidade do teu AL gratuitamente →
            </a>
          </div>

          {others.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Artigos relacionados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {others.map(a => <ArticleCard key={a.slug} article={a} />)}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
