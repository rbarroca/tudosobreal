import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Tudo sobre Alojamento Local';
const BASE_URL = 'https://tudosobrealojamentolocal.pt';
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

interface Props {
  title: string
  description: string
  canonical: string
  ogType?: string
  keywords?: string[]
}

export function PageMeta({ title, description, canonical, ogType = 'website', keywords }: Props) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${canonical}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonicalUrl} />
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:locale" content="pt_PT" />
      <meta property="og:site_name" content={SITE_NAME} />
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />
    </Helmet>
  );
}
