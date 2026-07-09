import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, DollarSign, Scale, Home, Settings } from 'lucide-react';

const guides = [
  {
    icon: Home,
    color: 'from-blue-500 to-blue-600',
    title: 'Como abrir Alojamento Local em Portugal',
    description: 'Guia passo a passo com todos os requisitos legais, documentos necessários e o processo completo de registo.',
    href: '/como-abrir-alojamento-local',
    label: 'Ler guia completo',
  },
  {
    icon: FileText,
    color: 'from-green-500 to-green-600',
    title: 'Documentos para registar Alojamento Local',
    description: 'Lista completa dos documentos obrigatórios para o registo no RNAL e na Câmara Municipal.',
    href: '/registar-alojamento-local/documentos-necessarios',
    label: 'Ver documentos',
  },
  {
    icon: DollarSign,
    color: 'from-orange-500 to-orange-600',
    title: 'Impostos no Alojamento Local em 2026',
    description: 'IRS, IVA, derrama e obrigações fiscais explicadas de forma clara para proprietários de AL.',
    href: '/fiscalidade-alojamento-local/impostos-al-2026',
    label: 'Ver fiscalidade',
  },
  {
    icon: Scale,
    color: 'from-purple-500 to-purple-600',
    title: 'Nova lei do Alojamento Local 2024',
    description: 'As principais alterações da lei 56/2023 e o que mudou para proprietários e gestoras de AL.',
    href: '/legislacao-al/nova-lei-al-2024',
    label: 'Ver alterações',
  },
  {
    icon: Settings,
    color: 'from-teal-500 to-teal-600',
    title: 'Airbnb ou Booking.com — qual a melhor plataforma?',
    description: 'Comparação detalhada entre as principais plataformas de reservas para maximizar a ocupação do seu AL.',
    href: '/gerir-alojamento-local/plataformas-airbnb-booking',
    label: 'Ver comparação',
  },
];

export function FeaturedGuidesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Guias mais consultados
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Informação prática e actualizada sobre todos os aspectos do Alojamento Local em Portugal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {guides.map((guide, index) => (
            <Link
              key={index}
              to={guide.href}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 flex flex-col"
            >
              <div className={`bg-gradient-to-br ${guide.color} p-3 rounded-xl w-fit mb-4`}>
                <guide.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {guide.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">
                {guide.description}
              </p>
              <span className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
                {guide.label}
                <ArrowRight className="w-4 h-4 ml-1" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/guias"
            className="inline-flex items-center gap-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Ver todos os guias
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
