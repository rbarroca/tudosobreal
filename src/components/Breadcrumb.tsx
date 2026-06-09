import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
  variant?: 'dark' | 'light';
}

export function Breadcrumb({ items, variant = 'dark' }: Props) {
  const isLight = variant === 'light';

  const baseText = isLight ? 'text-white/70' : 'text-gray-500';
  const linkHover = isLight ? 'hover:text-white' : 'hover:text-blue-600';
  const separator = isLight ? 'text-white/40' : 'text-gray-300';
  const current = isLight ? 'text-white font-medium' : 'text-gray-700';

  return (
    <nav aria-label="breadcrumb" className={`text-sm ${baseText} mb-6`}>
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link to="/" className={`${baseText} ${linkHover} transition-colors`}>Início</Link></li>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <li className={separator}>/</li>
            <li>
              {item.href ? (
                <Link to={item.href} className={`${baseText} ${linkHover} transition-colors`}>{item.label}</Link>
              ) : (
                <span className={current}>{item.label}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
