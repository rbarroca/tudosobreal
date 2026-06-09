import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <article className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 px-8 py-10 text-white">
              <h1 className="text-3xl font-bold">Política de Privacidade</h1>
              <p className="mt-2 text-blue-100">Última atualização: junho de 2026</p>
            </div>

            <div className="px-8 py-10 prose prose-blue max-w-none prose-headings:font-bold prose-h2:text-xl prose-p:text-gray-700 prose-li:text-gray-700">
              <h2>1. Quem somos</h2>
              <p>
                Este website é operado por <strong>Tudo sobre Alojamento Local</strong>, disponível em{' '}
                <a href="https://tudosobrealojamentolocal.pt">tudosobrealojamentolocal.pt</a>. Somos um guia
                informacional sobre Alojamento Local em Portugal, dedicado a ajudar proprietários a abrir e
                gerir o seu AL.
              </p>
              <p>Para contacto relacionado com privacidade: <strong>privacidade@tudosobrealojamentolocal.pt</strong></p>

              <h2>2. Dados pessoais que recolhemos</h2>
              <p>Recolhemos apenas os dados que nos fornece voluntariamente:</p>
              <ul>
                <li><strong>Nome e endereço de email</strong> — quando se subscreve à nossa lista de notificações através do formulário no site.</li>
              </ul>
              <p>
                Não recolhemos dados de navegação identificáveis, não usamos cookies de rastreamento de
                terceiros para fins publicitários, nem vendemos os seus dados a terceiros.
              </p>

              <h2>3. Como usamos os seus dados</h2>
              <p>Os dados recolhidos são utilizados exclusivamente para:</p>
              <ul>
                <li>Enviar notificações sobre novos conteúdos e atualizações do site que solicitou receber;</li>
                <li>Responder a pedidos de contacto que nos envie.</li>
              </ul>

              <h2>4. Base legal (RGPD)</h2>
              <p>
                O tratamento dos seus dados baseia-se no seu <strong>consentimento expresso</strong> (Artigo 6.º, n.º 1, alínea a) do RGPD),
                prestado no momento em que preenche o formulário de subscrição. Pode retirar o consentimento
                a qualquer momento, sem que isso afete a licitude do tratamento efetuado antes da retirada.
              </p>

              <h2>5. Partilha de dados</h2>
              <p>Os seus dados podem ser partilhados com os seguintes subcontratantes, exclusivamente para prestar os serviços descritos:</p>
              <ul>
                <li><strong>Supabase</strong> (supabase.com) — armazenamento seguro da base de dados de subscritores, com servidores na União Europeia.</li>
              </ul>
              <p>Não partilhamos os seus dados com mais nenhuma entidade terceira.</p>

              <h2>6. Cookies e analytics</h2>
              <p>
                Utilizamos o <strong>Google Analytics 4</strong> para compreender de forma anónima e agregada como os visitantes
                utilizam o site (páginas mais vistas, origem do tráfego). O script de analytics é carregado de
                forma diferida e não bloqueia a navegação. Pode desativar o Google Analytics através de
                extensões de browser como o{' '}
                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                  Google Analytics Opt-out Browser Add-on
                </a>.
              </p>

              <h2>7. Os seus direitos</h2>
              <p>Ao abrigo do RGPD, tem os seguintes direitos relativamente aos seus dados pessoais:</p>
              <ul>
                <li><strong>Acesso</strong> — solicitar uma cópia dos dados que guardamos sobre si;</li>
                <li><strong>Retificação</strong> — corrigir dados incorretos ou incompletos;</li>
                <li><strong>Apagamento</strong> — solicitar a eliminação dos seus dados ("direito ao esquecimento");</li>
                <li><strong>Oposição</strong> — opor-se ao tratamento dos seus dados;</li>
                <li><strong>Portabilidade</strong> — receber os seus dados num formato estruturado e legível.</li>
              </ul>
              <p>
                Para exercer qualquer destes direitos, contacte-nos em <strong>privacidade@tudosobrealojamentolocal.pt</strong>.
                Tem também o direito de apresentar reclamação à{' '}
                <a href="https://www.cnpd.pt" target="_blank" rel="noopener noreferrer">
                  CNPD (Comissão Nacional de Proteção de Dados)
                </a>.
              </p>

              <h2>8. Retenção de dados</h2>
              <p>
                Guardamos o seu email e nome enquanto mantiver a subscrição ativa. Se solicitar a remoção ou
                cancelar a subscrição, os seus dados são eliminados no prazo de 30 dias.
              </p>

              <h2>9. Alterações a esta política</h2>
              <p>
                Podemos atualizar esta política ocasionalmente. A data de última atualização é indicada no
                topo desta página. Alterações significativas serão comunicadas por email aos subscritores.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
