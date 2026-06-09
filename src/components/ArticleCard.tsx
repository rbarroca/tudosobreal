import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../content/articles';
import { ArrowRight, Calendar } from 'lucide-react';

interface Props {
  article: Article;
}

export function ArticleCard({ article }: Props) {
  return (
    <article className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6">
      <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">{article.category}</span>
      <h3 className="mt-3 text-lg font-bold text-gray-900 leading-snug">
        <Link to={`/${article.slug}`} className="hover:text-blue-600 transition-colors">{article.title}</Link>
      </h3>
      <p className="mt-2 text-sm text-gray-500 line-clamp-3">{article.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs text-gray-400">
          <Calendar className="w-3 h-3" />
          {new Date(article.updatedAt).toLocaleDateString('pt-PT')}
        </span>
        <Link to={`/${article.slug}`} className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:gap-2 transition-all">
          Ler artigo <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
