import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../content/articles';
import { ArrowRight, Calendar } from 'lucide-react';

interface Props {
  article: Article;
}

export function ArticleCard({ article }: Props) {
  return (
    <article className="bg-white rounded-lg border border-line-soft hover:shadow-card transition-shadow duration-[400ms] p-6">
      <span className="text-xs font-bold text-accent-text bg-accent-tint px-2 py-1 rounded-pill">{article.category}</span>
      <h3 className="mt-3 text-lg font-bold text-ink-900 leading-snug">
        <Link to={`/${article.slug}`} className="hover:text-accent-text transition-colors">{article.title}</Link>
      </h3>
      <p className="mt-2 text-sm text-ink-500 line-clamp-3">{article.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs text-ink-500">
          <Calendar className="w-3 h-3" />
          {new Date(article.updatedAt).toLocaleDateString('pt-PT')}
        </span>
        <Link to={`/${article.slug}`} className="flex items-center gap-1 text-sm font-medium text-accent-text hover:gap-2 transition-all">
          Ler artigo <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
