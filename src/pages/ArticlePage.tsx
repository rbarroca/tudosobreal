import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { getArticleBySlug, articles } from '../content/articles';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Breadcrumb } from '../components/Breadcrumb';
import { ArticleCard } from '../components/ArticleCard';
import { PageMeta } from '../components/PageMeta';
import { ArrowRight } from 'lucide-react';

export function ArticlePage() {
  const params = useParams<{ slug?: string; cat?: string }>();
  const slug = [params.cat, params.slug].filter(Boolean).join('/');
  const article = getArticleBySlug(slug);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
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
      <PageMeta
        title={article.title}
        description={article.description}
        canonical={`/${article.slug}`}
        ogType="article"
        keywords={article.keywords}
      />
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-surface-subtle min-h-screen">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-10 py-12">
          <Breadcrumb items={breadcrumbs} />

          <article className="bg-white rounded-xl border border-line-soft overflow-hidden">
            <div className="bg-surface-ink px-8 pt-10 pb-12 text-white">
              <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-pill">{article.category}</span>
              <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black tracking-[-0.02em] leading-tight">{article.title}</h1>
              <p className="mt-3 text-white/70 text-lg">{article.description}</p>
            </div>

            <div
              className="px-8 py-10 prose max-w-none prose-headings:font-extrabold prose-headings:text-ink-900 prose-h2:text-2xl prose-h3:text-xl prose-p:text-ink-500 prose-li:text-ink-500 prose-strong:text-ink-900 prose-a:text-accent-text prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </article>

          <div className="mt-8 bg-surface-ink rounded-xl p-8 text-white text-center">
            <h2 className="text-xl font-bold">Calcule a rentabilidade do seu AL</h2>
            <p className="mt-2 text-white/70">Use a nossa calculadora gratuita para simular receitas e custos.</p>
            <a
              href="https://calculadoraal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-white text-accent-text font-bold px-6 py-3 rounded-md hover:opacity-90 transition-opacity duration-[180ms]"
            >
              Simula a rentabilidade do teu AL gratuitamente
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {others.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-bold text-ink-900 mb-6">Artigos relacionados</h2>
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
