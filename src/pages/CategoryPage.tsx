import React, { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { getArticlesByCategory } from '../content/articles';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ArticleCard } from '../components/ArticleCard';
import { Breadcrumb } from '../components/Breadcrumb';

interface CategoryMeta {
  slug: string
  title: string
  description: string
  gradient: string
}

const categories: CategoryMeta[] = [
  {
    slug: 'como-abrir-alojamento-local',
    title: 'Como Abrir Alojamento Local',
    description: 'Guias completos para quem quer abrir um Alojamento Local em Portugal — desde os requisitos legais até aos custos reais de abertura.',
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    slug: 'registar-alojamento-local',
    title: 'Registo de Alojamento Local',
    description: 'Tudo sobre o processo de registo no RNAL — documentos necessários, como usar o Balcão Único Eletrónico e o que esperar após a submissão.',
    gradient: 'from-green-600 to-green-800',
  },
  {
    slug: 'fiscalidade-alojamento-local',
    title: 'Fiscalidade do Alojamento Local',
    description: 'Guias práticos sobre impostos, IRS, taxas municipais e obrigações fiscais dos proprietários de Alojamento Local em Portugal.',
    gradient: 'from-orange-500 to-orange-700',
  },
  {
    slug: 'legislacao-al',
    title: 'Legislação do Alojamento Local',
    description: 'Análise da legislação em vigor — da Lei 56/2023 às regras de condomínio. Fique a par das obrigações legais do seu AL.',
    gradient: 'from-purple-600 to-purple-800',
  },
  {
    slug: 'gerir-alojamento-local',
    title: 'Gerir Alojamento Local',
    description: 'Dicas e guias práticos para gerir o seu AL no dia a dia — plataformas, preços, ocupação e boas práticas de anfitrião.',
    gradient: 'from-teal-600 to-teal-800',
  },
];

export function CategoryPage() {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, '');
  const meta = categories.find(c => c.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className={`bg-gradient-to-br ${meta.gradient} text-white py-16`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumb items={[{ label: meta.title }]} />
            <h1 className="text-3xl sm:text-4xl font-bold">{meta.title}</h1>
            <p className="mt-4 text-white/80 text-lg max-w-2xl">{meta.description}</p>
            <p className="mt-3 text-sm text-white/60">
              {categoryArticles.length} {categoryArticles.length === 1 ? 'artigo' : 'artigos'}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {categoryArticles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryArticles.map(article => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-12">Brevemente — conteúdo em preparação.</p>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
