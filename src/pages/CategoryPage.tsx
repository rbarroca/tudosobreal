import React, { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { getArticlesByCategory } from '../content/articles';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArticleCard } from '../components/ArticleCard';
import { Breadcrumb } from '../components/Breadcrumb';
import { PageMeta } from '../components/PageMeta';

interface CategoryMeta {
  slug: string
  title: string
  description: string
}

const categories: CategoryMeta[] = [
  {
    slug: 'como-abrir-alojamento-local',
    title: 'Como Abrir Alojamento Local',
    description: 'Para quem quer abrir um Alojamento Local em Portugal e não sabe por onde começar.',
  },
  {
    slug: 'registar-alojamento-local',
    title: 'Registo de Alojamento Local',
    description: 'Documentos, prazos e o que esperar do processo de registo no RNAL.',
  },
  {
    slug: 'fiscalidade-alojamento-local',
    title: 'Fiscalidade do Alojamento Local',
    description: 'Impostos, IRS, taxas municipais e o que o fisco espera de si enquanto proprietário de AL.',
  },
  {
    slug: 'legislacao-al',
    title: 'Legislação do Alojamento Local',
    description: 'Da Lei 56/2023 às regras de condomínio: as obrigações legais que precisa de conhecer.',
  },
  {
    slug: 'gerir-alojamento-local',
    title: 'Gerir Alojamento Local',
    description: 'Plataformas, preços e boas práticas para gerir o seu alojamento no dia a dia.',
  },
];

export function CategoryPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, '');
  const meta = categories.find(c => c.slug === slug);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  if (!meta) return <Navigate to="/guias" replace />;

  const categoryArticles = getArticlesByCategory(meta!.slug);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: meta.title,
    description: meta.description,
    url: `https://tudosobrealojamentolocal.pt/${meta.slug}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: 'https://tudosobrealojamentolocal.pt' },
        { '@type': 'ListItem', position: 2, name: meta.title, item: `https://tudosobrealojamentolocal.pt/${meta.slug}` },
      ],
    },
  };

  return (
    <>
      <PageMeta
        title={meta.title}
        description={meta.description}
        canonical={`/${meta.slug}`}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="bg-surface-subtle min-h-screen">
        <div className="bg-surface-ink text-white py-16">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
            <Breadcrumb items={[{ label: meta.title }]} variant="light" />
            <h1 className="text-3xl sm:text-4xl font-black tracking-[-0.02em]">{meta.title}</h1>
            <p className="mt-4 text-white/70 text-lg max-w-2xl">{meta.description}</p>
            <p className="mt-3 text-sm text-white/60">
              {categoryArticles.length} {categoryArticles.length === 1 ? 'artigo' : 'artigos'}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-12">
          {categoryArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-ink-500 text-center py-12">Brevemente — conteúdo em preparação.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
