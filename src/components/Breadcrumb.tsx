import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: Props) {
  return (
    <nav aria-label="breadcrumb" className="text-sm text-gray-500 mb-6">
      <ol className="flex flex-wrap items-center gap-1">
        <li><Link to="/" className="hover:text-blue-600">Início</Link></li>
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <li className="text-gray-300">/</li>
            <li>
              {item.href ? (
                <Link to={item.href} className="hover:text-blue-600">{item.label}</Link>
              ) : (
                <span className="text-gray-700">{item.label}</span>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
}
