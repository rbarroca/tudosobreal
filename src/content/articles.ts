// src/content/articles.ts

export interface Article {
  slug: string
  title: string
  description: string
  category: string
  categorySlug: string
  publishedAt: string
  updatedAt: string
  content: string
  keywords: string[]
  schema?: object
}

export const articles: Article[] = [
  {
    slug: 'como-abrir-alojamento-local',
    title: 'Como Abrir Alojamento Local em Portugal — Guia Passo a Passo 2026',
    description: 'Guia completo e atualizado para abrir um Alojamento Local em Portugal em 2026. Desde os requisitos legais até ao registo no RNAL, tudo o que precisa de saber.',
    category: 'Guia Completo',
    categorySlug: 'como-abrir-alojamento-local',
    publishedAt: '2025-01-15',
    updatedAt: '2026-06-09',
    keywords: ['como abrir alojamento local', 'abrir AL portugal', 'guia al 2026', 'alojamento local passo a passo'],
    content: `
<h2>O que é o Alojamento Local?</h2>
<p>O Alojamento Local (AL) é a atividade de prestação de serviços de alojamento temporário a turistas, em estabelecimentos que não reúnam os requisitos para serem considerados empreendimentos turísticos. Em Portugal, esta atividade é regulada pelo <strong>Decreto-Lei n.º 128/2014</strong>, de 29 de agosto, com as alterações introduzidas pela <strong>Lei 56/2023</strong>.</p>
<p>Em termos práticos, o Alojamento Local inclui:</p>
<ul>
  <li><strong>Moradias</strong> — habitações autónomas, como uma vivenda ou um apartamento inteiro</li>
  <li><strong>Apartamentos</strong> — a modalidade mais comum, com aluguer de todo o apartamento</li>
  <li><strong>Estabelecimentos de hospedagem</strong> — incluindo hostels, com quartos partilhados ou privativos</li>
  <li><strong>Quartos</strong> — aluguer de um ou mais quartos dentro da residência do proprietário</li>
</ul>

<h2>Passo 1 — Verifique se pode registar o seu AL</h2>
<p>Antes de avançar com qualquer processo, é essencial verificar se o imóvel que pretende registar como AL cumpre as condições necessárias. Com as alterações da <strong>Lei 56/2023</strong>, existem novas restrições importantes:</p>

<h3>Verificar o uso do imóvel</h3>
<p>O imóvel deve estar afeto a uso habitacional ou uso misto (habitação e comércio/serviços). Imóveis exclusivamente comerciais não podem ser registados como AL.</p>

<h3>Verificar as restrições do condomínio</h3>
<p>Com a Lei 56/2023, a assembleia de condóminos pode opor-se ao exercício de atividade de AL em frações autónomas (apartamentos em prédio em regime de propriedade horizontal). Esta oposição requer aprovação por maioria de dois terços da permilagem total do edifício. Se o seu condomínio votou contra, não poderá registar AL nessa fração.</p>

<h3>Verificar as BHRU (Áreas de Contenção)</h3>
<p>As câmaras municipais podem definir <strong>Áreas de Contenção</strong> onde o registo de novos AL está suspenso ou limitado. Em Lisboa, por exemplo, várias freguesias históricas têm limitações. Verifique junto da sua câmara municipal se a zona onde se situa o imóvel tem restrições em vigor.</p>

<h2>Passo 2 — Reúna os documentos necessários</h2>
<p>Para registar um Alojamento Local em Portugal, precisa de reunir os seguintes documentos:</p>
<ul>
  <li><strong>Identificação do requerente</strong> — Cartão de Cidadão ou passaporte (e NIF)</li>
  <li><strong>Caderneta predial urbana</strong> — documento que comprova a propriedade e uso do imóvel</li>
  <li><strong>Autorização do proprietário</strong> — se for arrendatário, necessita de autorização expressa do senhorio</li>
  <li><strong>Comprovativo de seguro</strong> — seguro de responsabilidade civil obrigatório para AL</li>
  <li><strong>Livro de reclamações</strong> — obrigatório em formato físico ou eletrónico</li>
  <li><strong>Planta do alojamento</strong> — em alguns municípios pode ser exigida</li>
</ul>

<h2>Passo 3 — Registe no Balcão Único Eletrónico</h2>
<p>O registo de Alojamento Local é feito <strong>exclusivamente online</strong>, através do <a href="https://www.bue.gouv.pt" target="_blank" rel="noopener noreferrer">Balcão Único Eletrónico (BUE)</a>, disponível em bue.gouv.pt. O processo é relativamente simples:</p>
<ol>
  <li>Aceda ao portal BUE e faça login com Chave Móvel Digital ou Cartão de Cidadão</li>
  <li>Selecione "Alojamento Local" na categoria de serviços</li>
  <li>Preencha o formulário com os dados do imóvel e do titular</li>
  <li>Carregue os documentos necessários</li>
  <li>Submeta o pedido</li>
</ol>
<p>Após a submissão, receberá um número de registo provisório. O processo é baseado no princípio da <strong>mera comunicação prévia</strong>, o que significa que pode iniciar a atividade imediatamente após o registo, sem necessidade de aguardar aprovação formal.</p>

<h2>Passo 4 — Obtenha o número RNAL</h2>
<p>O RNAL (Registo Nacional de Alojamento Local) é o número de registo atribuído ao seu estabelecimento. Este número é essencial porque:</p>
<ul>
  <li>Deve ser exibido em toda a publicidade e anúncios nas plataformas (Airbnb, Booking.com, etc.)</li>
  <li>É necessário para emitir faturas de serviços de alojamento</li>
  <li>Comprova que o seu AL é legal e está registado</li>
  <li>Fica inscrito no portal do Turismo de Portugal</li>
</ul>

<h2>Passo 5 — Registe a atividade no Fisco</h2>
<p>Para poder cobrar pelas estadas e emitir recibos, precisa de estar registado para exercer atividade como trabalhador independente ou empresa. Os passos são:</p>
<ol>
  <li>Aceda ao Portal das Finanças (e-fatura.irs.gov.pt)</li>
  <li>Abra atividade como trabalhador independente, indicando o CAE 55201 (Turismo em Espaço Rural) ou 55111 (Hotéis com restaurante) conforme o tipo de AL</li>
  <li>Escolha o regime de tributação (simplificado ou contabilidade organizada)</li>
  <li>Para a maioria dos pequenos proprietários, o <strong>regime simplificado</strong> é suficiente</li>
</ol>

<h2>Passo 6 — Prepare o alojamento</h2>
<p>Para poder operar, o alojamento deve cumprir os requisitos mínimos de segurança e conforto estabelecidos na lei:</p>
<ul>
  <li><strong>Segurança</strong> — extintor, detetor de fumo, kit de primeiros socorros, manta de emergência</li>
  <li><strong>Informações ao hóspede</strong> — lista de contactos de emergência, regras da casa, instruções de evacuação</li>
  <li><strong>Condições de higiene</strong> — o espaço deve estar limpo e em boas condições</li>
  <li><strong>Temperatura</strong> — sistema de aquecimento ou ar condicionado (recomendado)</li>
  <li><strong>Internet</strong> — embora não obrigatória, é hoje uma expectativa dos hóspedes</li>
</ul>

<h2>Passo 7 — Contrate um seguro de responsabilidade civil</h2>
<p>O seguro de responsabilidade civil para AL é <strong>obrigatório por lei</strong>. Cobre danos causados a hóspedes e terceiros durante o período de alojamento. O custo médio varia entre <strong>€300 e €500 por ano</strong>, dependendo da dimensão do imóvel e da cobertura escolhida.</p>
<p>Principais seguradoras que oferecem produtos específicos para AL em Portugal: Fidelidade, Generali, Ageas, Liberty Seguros.</p>

<h2>Passo 8 — Registe nas plataformas e comece a alugar</h2>
<p>Com o registo RNAL obtido e o imóvel pronto, pode criar os seus anúncios nas plataformas de alojamento turístico:</p>
<ul>
  <li><strong>Airbnb</strong> — comissão média de 3% para o anfitrião</li>
  <li><strong>Booking.com</strong> — comissão de cerca de 15% sobre o valor da reserva</li>
  <li><strong>VRBO / HomeAway</strong> — alternativa focada em famílias e estadias mais longas</li>
  <li><strong>Site próprio</strong> — evita comissões mas exige maior esforço de marketing</li>
</ul>
<p>Lembre-se: em todas as plataformas é <strong>obrigatório indicar o número RNAL</strong> no anúncio. O incumprimento pode resultar em coimas.</p>

<h2>Passo 9 — Cumpra as obrigações fiscais</h2>
<p>Enquanto proprietário de AL, tem obrigações fiscais regulares:</p>
<ul>
  <li><strong>Emissão de recibos verdes</strong> — emita recibo eletrónico por cada reserva no Portal das Finanças</li>
  <li><strong>IRS anual</strong> — declare os rendimentos de AL no IRS (categoria B ou F)</li>
  <li><strong>Taxa turística municipal</strong> — em Lisboa (€2/noite), Porto (€2/noite) e outros municípios, deve cobrar e entregar a taxa à câmara</li>
  <li><strong>Contribuição extraordinária do AL (CEAL)</strong> — imposto específico para proprietários de AL em zonas de pressão</li>
</ul>

<h2>Custos de abertura de um AL</h2>
<p>Além dos custos de preparação do imóvel, conte com os seguintes custos iniciais:</p>
<ul>
  <li>Taxa de registo municipal: <strong>€0 a €200</strong> (varia por município)</li>
  <li>Seguro de responsabilidade civil: <strong>€300 a €500/ano</strong></li>
  <li>Livro de reclamações eletrónico: <strong>~€30/ano</strong></li>
  <li>Fotografia profissional do imóvel: <strong>€150 a €400</strong></li>
  <li>Equipamento de segurança (extintor, detetor de fumo, kit de emergência): <strong>€50 a €150</strong></li>
</ul>

<h2>Calcule a rentabilidade do seu AL</h2>
<p>Antes de investir, é fundamental perceber se o seu alojamento pode gerar rendimento suficiente para cobrir os custos e ainda ser lucrativo. Use a <a href="https://calculadoraal.pt" target="_blank" rel="noopener noreferrer">Calculadora AL</a> para simular receitas, custos e rentabilidade do seu imóvel.</p>

<h2>Perguntas Frequentes</h2>
<h3>Posso abrir AL num imóvel arrendado?</h3>
<p>Sim, mas apenas com autorização expressa do proprietário/senhorio. Essa autorização deve estar por escrito. Sem ela, o registo pode ser cancelado e está sujeito a coimas.</p>

<h3>Quanto tempo demora o registo?</h3>
<p>O registo é quase imediato após a submissão online. O número RNAL é atribuído automaticamente. No entanto, a câmara municipal tem 60 dias para verificar a conformidade e, se necessário, cancelar o registo.</p>

<h3>O que acontece se operar sem registo?</h3>
<p>Operar AL sem registo é ilegal e pode resultar em coimas entre <strong>€2.500 e €50.000</strong>, dependendo da gravidade da infração.</p>

<h3>Tenho de informar os hóspedes estrangeiros à SEF/AIMA?</h3>
<p>Sim. É obrigatório comunicar os dados dos hóspedes estrangeiros ao SEF (Serviço de Estrangeiros e Fronteiras, atualmente AIMA) através do sistema SIBA, no prazo de 3 dias após o check-in.</p>
    `,
  },
  {
    slug: 'registar-alojamento-local/documentos-necessarios',
    title: 'Documentos Necessários para Registar Alojamento Local em Portugal',
    description: 'Lista completa de todos os documentos exigidos para registar um Alojamento Local em Portugal. Saiba o que precisa de preparar antes de submeter o pedido.',
    category: 'Registo AL',
    categorySlug: 'registar-alojamento-local',
    publishedAt: '2025-01-20',
    updatedAt: '2026-06-09',
    keywords: ['documentos alojamento local', 'registo AL documentos', 'o que preciso para abrir AL', 'documentação AL portugal'],
    content: `
<h2>Documentos obrigatórios para registar AL</h2>
<p>O registo de Alojamento Local em Portugal é feito online através do Balcão Único Eletrónico (BUE). Para completar o processo, precisa de reunir um conjunto de documentos. Aqui está a lista completa.</p>

<h2>1. Identificação do requerente</h2>
<p>Se for uma <strong>pessoa singular</strong> (titular individual):</p>
<ul>
  <li>Cartão de Cidadão ou Bilhete de Identidade (válido)</li>
  <li>NIF (Número de Identificação Fiscal)</li>
  <li>Contacto telefónico e endereço de email</li>
</ul>
<p>Se for uma <strong>pessoa coletiva</strong> (empresa ou sociedade):</p>
<ul>
  <li>NIPC (Número de Identificação de Pessoa Coletiva)</li>
  <li>Certidão permanente do registo comercial</li>
  <li>Identificação do representante legal</li>
</ul>

<h2>2. Caderneta predial urbana</h2>
<p>A caderneta predial é o documento emitido pelas Finanças que identifica o imóvel. Deve incluir:</p>
<ul>
  <li>Identificação matricial do imóvel (artigo, fração, seção)</li>
  <li>Uso do imóvel (habitacional ou misto)</li>
  <li>Área do imóvel</li>
  <li>Titular(es) registado(s)</li>
</ul>
<p>Pode obter a caderneta predial no Portal das Finanças, na secção "Serviços" > "Imóveis". É gratuita.</p>

<h2>3. Autorização do proprietário (se for arrendatário)</h2>
<p>Se não é o proprietário do imóvel e pretende explorar AL num imóvel arrendado, precisa de:</p>
<ul>
  <li>Autorização <strong>expressa e por escrito</strong> do proprietário</li>
  <li>Contrato de arrendamento que permita esta atividade (ou adenda ao contrato)</li>
</ul>
<p><strong>Atenção:</strong> O contrato de arrendamento padrão não permite subarrendamento nem AL. Precisa de uma cláusula específica ou autorização à parte.</p>

<h2>4. Comprovativo de seguro de responsabilidade civil</h2>
<p>O seguro é <strong>obrigatório por lei</strong> (artigo 13.º-A do DL 128/2014). Deve cobrir:</p>
<ul>
  <li>Danos causados a hóspedes durante a estada</li>
  <li>Danos causados a terceiros (vizinhos, por exemplo)</li>
  <li>Responsabilidade civil geral da exploração</li>
</ul>
<p>Contacte a sua companhia de seguros e solicite um seguro específico para AL. O custo médio é de <strong>€300 a €500 por ano</strong>.</p>

<h2>5. Livro de reclamações</h2>
<p>O livro de reclamações é obrigatório para todas as atividades de prestação de serviços ao público. Para AL, pode optar por:</p>
<ul>
  <li><strong>Formato físico</strong> — adquirido em papelaria ou pelo portal do livro de reclamações</li>
  <li><strong>Formato eletrónico</strong> — através do portal <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener noreferrer">livroreclamacoes.pt</a></li>
</ul>
<p>O livro eletrónico é recomendado por ser mais prático e ter custo reduzido (~€30/ano).</p>

<h2>6. Planta do alojamento</h2>
<p>Embora não seja sempre obrigatória, algumas câmaras municipais podem solicitá-la. A planta deve indicar:</p>
<ul>
  <li>Divisões do imóvel</li>
  <li>Número de quartos</li>
  <li>Instalações sanitárias</li>
  <li>Áreas (em m²)</li>
</ul>

<h2>7. Comprovativo de morada fiscal</h2>
<p>O requerente deve ter a morada fiscal em Portugal ou, no caso de cidadãos não residentes, designar um representante fiscal com morada em Portugal.</p>

<h2>Documentos adicionais em casos específicos</h2>
<h3>Para moradia / vivenda</h3>
<ul>
  <li>Licença de utilização (para imóveis construídos após 1951)</li>
  <li>Declaração de conformidade do imóvel com os requisitos de AL</li>
</ul>
<h3>Para hostel (estabelecimento de hospedagem)</h3>
<ul>
  <li>Autorização de câmara municipal pode ser necessária</li>
  <li>Vistoria de segurança contra incêndios (SCIE) pode ser exigida</li>
</ul>

<h2>Como submeter os documentos</h2>
<p>Todos os documentos são submetidos digitalmente no portal BUE (bue.gouv.pt). Prepare os ficheiros nos seguintes formatos:</p>
<ul>
  <li>PDF para documentos escritos</li>
  <li>JPG ou PNG para fotografias</li>
  <li>Tamanho máximo por ficheiro: geralmente 5 MB</li>
</ul>

<h2>Perguntas Frequentes</h2>
<h3>Posso registar AL online sem ir a nenhum serviço presencialmente?</h3>
<p>Sim. Todo o processo de registo é feito online no BUE. Não precisa de se deslocar a nenhum serviço público, exceto em casos específicos onde a câmara solicite informação adicional.</p>

<h3>Os documentos têm de estar autenticados ou apostilados?</h3>
<p>Para proprietários portugueses, não é geralmente necessário. Para cidadãos estrangeiros com imóveis em Portugal, alguns documentos podem precisar de tradução e autenticação. Verifique junto da câmara municipal.</p>

<h3>O que acontece se submeter documentação incompleta?</h3>
<p>O sistema pode aceitar o pedido provisoriamente, mas a câmara municipal pode solicitar documentação adicional. Se não responder no prazo, o registo pode ser recusado ou cancelado.</p>
    `,
  },
  {
    slug: 'fiscalidade-alojamento-local/impostos-al-2025',
    title: 'Impostos no Alojamento Local em 2026 — Guia Completo de Fiscalidade',
    description: 'Tudo sobre a fiscalidade do Alojamento Local em Portugal em 2026. IRS, IVA, contribuições e taxas municipais explicados de forma simples e prática.',
    category: 'Fiscalidade AL',
    categorySlug: 'fiscalidade-alojamento-local',
    publishedAt: '2025-02-01',
    updatedAt: '2026-06-09',
    keywords: ['impostos alojamento local 2026', 'fiscalidade AL portugal', 'IRS alojamento local', 'IVA AL', 'contribuição AL'],
    content: `
<h2>A fiscalidade do Alojamento Local em Portugal</h2>
<p>A fiscalidade do Alojamento Local (AL) é um dos temas que mais dúvidas levanta entre os proprietários. Em Portugal, os rendimentos de AL estão sujeitos a vários impostos e contribuições. Este guia explica todos de forma clara.</p>

<h2>1. IRS — Imposto sobre o Rendimento</h2>
<p>Os rendimentos de AL podem ser tributados em <strong>dois regimes diferentes</strong>, à escolha do proprietário:</p>

<h3>Categoria B (rendimentos empresariais e profissionais)</h3>
<p>Esta é a categoria padrão para rendimentos de AL. Em regime simplificado, aplica-se um <strong>coeficiente de 0,35</strong> sobre as receitas brutas, o que significa que apenas 35% do rendimento é considerado para efeitos de tributação.</p>
<p><strong>Exemplo prático:</strong> Se faturar €20.000 num ano, apenas €7.000 (35%) serão sujeitos a IRS, às taxas progressivas normais do IRS.</p>

<h3>Categoria F (rendimentos prediais)</h3>
<p>Pode optar por tributar os rendimentos de AL na Categoria F, como se fosse um arrendamento convencional. Neste caso, o rendimento líquido (após dedução de despesas como condomínio, seguros, manutenção) é tributado a uma taxa liberatória de <strong>25%</strong>.</p>
<p>Esta opção pode ser mais vantajosa quando tem muitas despesas dedutíveis ou quando o imóvel não é explorado a tempo inteiro.</p>

<h2>2. IVA — Imposto sobre o Valor Acrescentado</h2>
<p>Os serviços de alojamento turístico estão sujeitos a <strong>IVA à taxa reduzida de 6%</strong>. No entanto, se o seu volume de negócios anual não ultrapassar <strong>€14.500</strong> (limite de isenção de IVA para pequenos operadores), pode estar isento de IVA.</p>
<p>Se ultrapassar este limite, terá de:</p>
<ul>
  <li>Registar-se para efeitos de IVA nas Finanças</li>
  <li>Emitir faturas com IVA a 6%</li>
  <li>Entregar declarações periódicas de IVA (trimestral)</li>
  <li>Entregar o IVA cobrado ao Estado</li>
</ul>

<h2>3. Contribuição Extraordinária sobre o Alojamento Local (CEAL)</h2>
<p>Criada pela Lei 56/2023, a CEAL é um imposto específico para proprietários de AL em <strong>zonas de pressão urbanística</strong>. A taxa é calculada com base nas receitas de AL e varia consoante a localização.</p>
<p><strong>Quem está sujeito à CEAL:</strong></p>
<ul>
  <li>Proprietários de AL em municípios classificados como zonas de pressão urbanística</li>
  <li>Inclui Lisboa, Porto e muitos outros municípios do litoral</li>
</ul>
<p>A CEAL é calculada automaticamente pelas Finanças com base nas receitas declaradas. O pagamento é feito em setembro de cada ano.</p>

<h2>4. Taxa Turística Municipal</h2>
<p>A taxa turística é cobrada por noite, por hóspede adulto. Não é tecnicamente um imposto do proprietário — é cobrada ao hóspede — mas o proprietário é responsável por cobrá-la e entregá-la à câmara municipal.</p>
<p>Valores em 2026:</p>
<ul>
  <li><strong>Lisboa</strong> — €2,00 por noite/pessoa (máximo 7 noites)</li>
  <li><strong>Porto</strong> — €2,00 por noite/pessoa</li>
  <li><strong>Cascais</strong> — €2,00 por noite/pessoa</li>
  <li><strong>Sintra</strong> — €1,00 por noite/pessoa</li>
  <li>Outros municípios — consulte a câmara municipal local</li>
</ul>

<h2>5. Segurança Social</h2>
<p>Se gerir o AL como trabalhador independente (recibos verdes), pode ter obrigações de contribuição para a Segurança Social. No entanto, existe isenção se:</p>
<ul>
  <li>Os rendimentos de AL forem inferiores a 6 vezes o IAS anual (~€5.765 em 2025)</li>
  <li>Já tiver descontos para a Segurança Social por outra via (emprego por conta de outrem)</li>
</ul>

<h2>Regime simplificado vs. contabilidade organizada</h2>
<p>Para a maioria dos proprietários de AL com receitas abaixo de <strong>€200.000/ano</strong>, o regime simplificado é suficiente e muito mais simples. Acima desse valor, é obrigatório o regime de contabilidade organizada (com necessidade de TOC — Técnico Oficial de Contas).</p>

<h2>Deduções e despesas aceites</h2>
<p>No regime de contabilidade organizada (ou em Categoria F), podem ser deduzidas as seguintes despesas:</p>
<ul>
  <li>IMI (Imposto Municipal sobre Imóveis)</li>
  <li>Condomínio</li>
  <li>Seguros</li>
  <li>Despesas de manutenção e reparação</li>
  <li>Comissões das plataformas (Airbnb, Booking)</li>
  <li>Serviços de limpeza</li>
  <li>Publicidade e marketing</li>
  <li>Juros do crédito habitação (em alguns casos)</li>
</ul>

<h2>Calendário fiscal do proprietário de AL</h2>
<ul>
  <li><strong>Janeiro–Abril</strong> — Emissão de recibos verdes mensais</li>
  <li><strong>Março</strong> — Entrega da declaração de IVA (4.º trimestre do ano anterior)</li>
  <li><strong>Abril</strong> — Início da campanha do IRS</li>
  <li><strong>Junho</strong> — Prazo de entrega do IRS</li>
  <li><strong>Julho</strong> — Pagamento do IRS (se aplicável)</li>
  <li><strong>Setembro</strong> — Pagamento da CEAL</li>
</ul>

<h2>Perguntas Frequentes</h2>
<h3>Preciso de contabilista para gerir o meu AL?</h3>
<p>Para rendimentos baixos (abaixo de €14.500/ano) e em regime simplificado, pode gerir as suas obrigações fiscais sem contabilista. Para situações mais complexas ou volumes de negócio superiores, recomenda-se um contabilista ou TOC.</p>

<h3>Posso deduzir a renda que pago pelo imóvel?</h3>
<p>Sim, se pagar renda pelo imóvel e tiver autorização do proprietário para o explorar como AL, a renda pode ser deduzida como despesa em contabilidade organizada ou Categoria F.</p>

<h3>A CEAL é devolvida se encerrar o AL?</h3>
<p>A CEAL é calculada sobre os rendimentos do ano anterior. Se encerrar o AL em 2025, não pagará CEAL em 2026 (referente a 2025, que não terá rendimentos).</p>
    `,
  },
  {
    slug: 'legislacao-al/nova-lei-al-2024',
    title: 'Nova Lei do Alojamento Local 2024 — O que Mudou com a Lei 56/2023',
    description: 'Análise completa das alterações introduzidas pela Lei 56/2023 ao Alojamento Local em Portugal. Condomínios, BHRU, licenças e novas regras explicadas.',
    category: 'Legislação AL',
    categorySlug: 'legislacao-al',
    publishedAt: '2025-02-15',
    updatedAt: '2026-06-09',
    keywords: ['lei 56/2023 alojamento local', 'nova lei AL 2024', 'alterações AL portugal', 'BHRU alojamento local'],
    content: `
<h2>A Lei 56/2023 e o impacto no Alojamento Local</h2>
<p>A <strong>Lei 56/2023</strong>, aprovada pela Assembleia da República em outubro de 2023, introduziu alterações profundas ao regime do Alojamento Local em Portugal. Esta lei, parte do pacote "Mais Habitação", tinha como objetivo equilibrar o mercado de habitação e reduzir a pressão do turismo em zonas urbanas densas.</p>

<h2>Principais alterações introduzidas</h2>

<h3>1. Direito de veto do condomínio</h3>
<p>Uma das mudanças mais significativas foi a atribuição à assembleia de condóminos do direito de se opor ao exercício de AL em frações do edifício. Os detalhes:</p>
<ul>
  <li>A oposição requer aprovação por <strong>maioria de dois terços da permilagem</strong> do edifício</li>
  <li>A deliberação é válida por <strong>quatro anos</strong> (renováveis)</li>
  <li>Os registos existentes não foram imediatamente cancelados — têm prazo de transição</li>
  <li>Licenças válidas antes da lei mantêm-se até ao fim do prazo ou até transmissão do imóvel</li>
</ul>

<h3>2. BHRU — Bolsas de Habitação de Reabilitação Urbana</h3>
<p>A lei criou o conceito de <strong>Áreas de Contenção (BHRU)</strong>, zonas onde as câmaras municipais podem suspender ou limitar a atribuição de novos registos de AL. Nas BHRU:</p>
<ul>
  <li>Novos registos de AL podem ser suspensos</li>
  <li>Cada câmara define as suas próprias regras dentro das BHRU</li>
  <li>Lisboa e Porto foram os primeiros a criar zonas de contenção</li>
</ul>

<h3>3. Suspensão de novos registos</h3>
<p>A lei previa uma suspensão temporária de novos registos de AL em determinadas circunstâncias, embora esta medida tenha gerado contestação e algumas alterações subsequentes.</p>

<h3>4. Transmissibilidade das licenças</h3>
<p>Com a lei anterior, as licenças de AL eram <strong>transmissíveis</strong> com o imóvel. A Lei 56/2023 limitou esta transmissibilidade:</p>
<ul>
  <li>Em caso de venda do imóvel, o novo proprietário já não herda automaticamente o AL</li>
  <li>O comprador terá de solicitar novo registo, sujeito às regras em vigor</li>
  <li>Esta regra gerou forte contestação da indústria</li>
</ul>

<h3>5. Reforço das coimas</h3>
<p>As sanções por incumprimento foram reforçadas:</p>
<ul>
  <li>Exploração sem registo: coima de <strong>€2.500 a €50.000</strong></li>
  <li>Não afixação do número RNAL: coima de <strong>€500 a €5.000</strong></li>
  <li>Incumprimento de regras de segurança: coima de <strong>€1.000 a €10.000</strong></li>
</ul>

<h2>O que a lei não mudou</h2>
<p>Importa também clarificar o que se manteve inalterado:</p>
<ul>
  <li>O processo de registo online pelo BUE mantém-se</li>
  <li>Os requisitos mínimos do alojamento (segurança, higiene) mantêm-se</li>
  <li>A obrigatoriedade de seguro e livro de reclamações mantém-se</li>
  <li>As obrigações fiscais são as mesmas</li>
</ul>

<h2>Impacto prático para proprietários existentes</h2>
<p>Se já tem um AL registado antes de outubro de 2023:</p>
<ul>
  <li>O seu registo mantém-se válido</li>
  <li>Pode continuar a operar normalmente</li>
  <li>Mas se vender o imóvel, o comprador não herda o registo</li>
  <li>Se o condomínio votar contra, pode ser afetado no futuro</li>
</ul>

<h2>Contestação da lei e desenvolvimentos subsequentes</h2>
<p>A Lei 56/2023 foi alvo de forte contestação por parte da <strong>ALEP (Associação do Alojamento Local em Portugal)</strong> e de proprietários. Alguns pontos foram considerados inconstitucionais e estão em análise. Mantenha-se atualizado sobre os desenvolvimentos legislativos, que podem trazer novas alterações.</p>

<h2>Perguntas Frequentes</h2>
<h3>A lei obrigou proprietários a fechar os seus AL?</h3>
<p>Não imediatamente. Os registos existentes mantêm-se. No entanto, se o condomínio votar contra, o proprietário pode ter de encerrar no futuro. As zonas de contenção também podem afetar renovações de licença.</p>

<h3>O condomínio pode fechar o meu AL retroativamente?</h3>
<p>A deliberação do condomínio não tem efeito imediato retroativo. Os registos pré-existentes têm períodos de transição. Consulte um advogado se esta situação o afeta.</p>

<h3>O que é a ALEP e como pode ajudar?</h3>
<p>A ALEP (Associação do Alojamento Local em Portugal) é a principal associação do setor. Oferece apoio jurídico, informação atualizada e representa os interesses dos proprietários junto do legislador. Consulte alep.pt para mais informação.</p>
    `,
  },
  {
    slug: 'registar-alojamento-local/registo-rnal',
    title: 'Como Fazer o Registo RNAL — Passo a Passo Detalhado',
    description: 'Guia passo a passo para registar o seu Alojamento Local no RNAL (Registo Nacional de Alojamento Local). Desde o acesso ao BUE até à obtenção do número de registo.',
    category: 'Registo AL',
    categorySlug: 'registar-alojamento-local',
    publishedAt: '2025-03-01',
    updatedAt: '2026-06-09',
    keywords: ['RNAL registo', 'como registar AL RNAL', 'Balcão Único Eletrónico AL', 'número RNAL como obter'],
    content: `
<h2>O que é o RNAL?</h2>
<p>O <strong>RNAL (Registo Nacional de Alojamento Local)</strong> é o sistema de registo centralizado de todos os estabelecimentos de Alojamento Local em Portugal. Gerido pelo Turismo de Portugal, o RNAL atribui um número único de registo a cada AL, que é obrigatório para operar legalmente.</p>

<h2>Como aceder ao Balcão Único Eletrónico</h2>
<p>O registo é feito exclusivamente através do <strong>Balcão Único Eletrónico (BUE)</strong>, em bue.gouv.pt. Para aceder, precisa de:</p>
<ul>
  <li><strong>Chave Móvel Digital</strong> — a forma mais prática de autenticação</li>
  <li><strong>Cartão de Cidadão com PIN de autenticação</strong> — necessita de leitor de cartões</li>
  <li><strong>eIDAS</strong> — para cidadãos europeus não portugueses</li>
</ul>

<h2>Processo passo a passo</h2>

<h3>Passo 1 — Aceda ao BUE e faça login</h3>
<p>Acesse a bue.gouv.pt e clique em "Entrar" no canto superior direito. Selecione o método de autenticação preferido (Chave Móvel Digital é o mais simples).</p>

<h3>Passo 2 — Localize o serviço de Alojamento Local</h3>
<p>Na barra de pesquisa, escreva "Alojamento Local" ou navegue pela categoria "Alojamento e Turismo". Selecione "Registar Estabelecimento de Alojamento Local".</p>

<h3>Passo 3 — Preencha os dados do estabelecimento</h3>
<p>Ser-lhe-á pedido para preencher:</p>
<ul>
  <li><strong>Tipo de estabelecimento</strong> — moradia, apartamento, estabelecimento de hospedagem ou quarto</li>
  <li><strong>Endereço completo do imóvel</strong> — incluindo código postal</li>
  <li><strong>Capacidade máxima</strong> — número máximo de hóspedes</li>
  <li><strong>Número de quartos</strong></li>
  <li><strong>Dados do titular</strong> — nome, NIF, contacto</li>
  <li><strong>Nome do estabelecimento</strong> (opcional, mas recomendado)</li>
</ul>

<h3>Passo 4 — Carregue os documentos</h3>
<p>Faça upload dos documentos necessários (em PDF ou JPG):</p>
<ul>
  <li>Caderneta predial</li>
  <li>Comprovativo de seguro</li>
  <li>Autorização do proprietário (se arrendatário)</li>
</ul>

<h3>Passo 5 — Submeta e obtenha o número provisório</h3>
<p>Após submissão, o sistema gera imediatamente um <strong>número de registo provisório</strong>. Este número já pode ser usado nos anúncios enquanto aguarda a confirmação definitiva.</p>

<h3>Passo 6 — Aguarde confirmação da câmara</h3>
<p>A câmara municipal tem <strong>60 dias</strong> para verificar a conformidade do pedido. Se tudo estiver correto, o registo torna-se definitivo. Se houver problemas, a câmara contactá-lo-á para esclarecimentos.</p>

<h2>O número RNAL — como usar</h2>
<p>Após obter o número RNAL, deve usá-lo:</p>
<ul>
  <li>Em todos os anúncios online (Airbnb, Booking, etc.)</li>
  <li>Na documentação oficial do estabelecimento</li>
  <li>Nas faturas emitidas a hóspedes</li>
  <li>Na placa identificativa do estabelecimento (obrigatória)</li>
</ul>

<h2>Como encontrar o número RNAL de um AL</h2>
<p>Pode verificar se um AL está registado e consultar o número RNAL no portal do Turismo de Portugal, na secção de pesquisa do RNAL. Esta pesquisa é pública.</p>

<h2>Renovação do registo</h2>
<p>O registo RNAL não tem prazo de validade definido, mas pode ser cancelado pela câmara se:</p>
<ul>
  <li>Houver incumprimento das regras de AL</li>
  <li>O imóvel deixar de cumprir os requisitos</li>
  <li>O condomínio votar contra (com as novas regras)</li>
  <li>A câmara municipal implementar restrições na zona</li>
</ul>

<h2>Perguntas Frequentes</h2>
<h3>Posso ter mais do que um registo RNAL?</h3>
<p>Sim. Cada imóvel tem o seu próprio número RNAL. Se tiver vários imóveis para AL, cada um terá um registo separado.</p>

<h3>O registo RNAL é gratuito?</h3>
<p>O registo em si (a submissão online) é geralmente gratuito. Algumas câmaras cobram uma taxa municipal, que varia entre €0 e €200.</p>

<h3>Posso transferir o RNAL se vender o imóvel?</h3>
<p>Com a Lei 56/2023, a transmissão automática do registo com o imóvel foi limitada. O novo proprietário terá de solicitar novo registo, sujeito às regras em vigor na altura.</p>
    `,
  },
  {
    slug: 'gerir-alojamento-local/plataformas-airbnb-booking',
    title: 'Airbnb vs Booking.com — Qual a Melhor Plataforma para o seu AL?',
    description: 'Comparação completa entre Airbnb e Booking.com para proprietários de Alojamento Local em Portugal. Comissões, perfil de hóspede, prós e contras de cada plataforma.',
    category: 'Gerir AL',
    categorySlug: 'gerir-alojamento-local',
    publishedAt: '2025-03-15',
    updatedAt: '2026-06-09',
    keywords: ['airbnb vs booking alojamento local', 'melhor plataforma AL portugal', 'comissões airbnb booking', 'onde anunciar AL'],
    content: `
<h2>Airbnb vs Booking.com — a comparação que todo o proprietário precisa</h2>
<p>Quando se trata de anunciar o seu Alojamento Local, Airbnb e Booking.com são as duas plataformas dominantes em Portugal. Mas qual delas deve escolher? Ou deve usar ambas? Este guia dá-lhe uma visão clara de cada plataforma.</p>

<h2>Airbnb — Visão geral</h2>
<p>O Airbnb é a plataforma que popularizou o alojamento entre particulares. Em Portugal, é especialmente forte em zonas urbanas (Lisboa, Porto) e destinos de praia.</p>

<h3>Comissões do Airbnb</h3>
<ul>
  <li><strong>Taxa para anfitriões</strong> — entre 3% e 5% por reserva (modelo mais comum: ~3%)</li>
  <li><strong>Taxa para hóspedes</strong> — entre 6% e 12% adicional cobrada ao hóspede</li>
  <li>Total retirado da transação: tipicamente <strong>14-16%</strong> combinado</li>
</ul>

<h3>Perfil do hóspede no Airbnb</h3>
<ul>
  <li>Viajantes independentes e casais</li>
  <li>Estadias médias de 3-5 noites</li>
  <li>Valorizam autenticidade e experiência local</li>
  <li>Faixa etária predominante: 25-45 anos</li>
</ul>

<h3>Vantagens do Airbnb</h3>
<ul>
  <li>Sistema de avaliações bidirecional (anfitriões também avaliam hóspedes)</li>
  <li>Proteção ao anfitrião AirCover (cobertura de danos)</li>
  <li>Comunidade e suporte dedicado</li>
  <li>Flexibilidade nas políticas de cancelamento</li>
  <li>Pagamento garantido antes do check-in</li>
</ul>

<h3>Desvantagens do Airbnb</h3>
<ul>
  <li>Algoritmo de pesquisa complexo e competitivo</li>
  <li>Suporte ao cliente por vezes inconsistente</li>
  <li>Menor penetração em segmento business</li>
</ul>

<h2>Booking.com — Visão geral</h2>
<p>O Booking.com é a maior plataforma de reservas do mundo, com forte presença em todos os segmentos — hotéis, apartamentos, pousadas e AL. Em Portugal, é muito popular entre turistas europeus.</p>

<h3>Comissões do Booking.com</h3>
<ul>
  <li><strong>Taxa para proprietários</strong> — entre <strong>15% e 18%</strong> por reserva</li>
  <li>Sem taxa adicional para hóspedes (preço que veem é o preço final)</li>
  <li>Comissão mais alta que o Airbnb, mas o preço apresentado ao hóspede é mais transparente</li>
</ul>

<h3>Perfil do hóspede no Booking.com</h3>
<ul>
  <li>Turistas europeus (especialmente espanhóis, franceses, alemães, britânicos)</li>
  <li>Viajantes em negócios</li>
  <li>Famílias</li>
  <li>Estadias mais curtas (1-3 noites) mas também estadias longas</li>
</ul>

<h3>Vantagens do Booking.com</h3>
<ul>
  <li>Enorme volume de tráfego e visibilidade</li>
  <li>Excelente para mercado europeu</li>
  <li>Programa Genius para hóspedes frequentes (mais reservas)</li>
  <li>Interface de gestão robusta</li>
  <li>Melhor para estadias de negócios</li>
</ul>

<h3>Desvantagens do Booking.com</h3>
<ul>
  <li>Comissão mais elevada (15-18%)</li>
  <li>Sem sistema de avaliação de hóspedes (só o hóspede avalia)</li>
  <li>Sem proteção de danos equivalente ao AirCover</li>
  <li>Política de cancelamento frequentemente pressionada a ser "flexível"</li>
</ul>

<h2>Comparação direta</h2>
<table style="width:100%; border-collapse: collapse; margin: 1rem 0;">
  <tr style="background:#eff6ff;">
    <th style="padding:8px; border:1px solid #ddd; text-align:left;">Critério</th>
    <th style="padding:8px; border:1px solid #ddd; text-align:left;">Airbnb</th>
    <th style="padding:8px; border:1px solid #ddd; text-align:left;">Booking.com</th>
  </tr>
  <tr>
    <td style="padding:8px; border:1px solid #ddd;">Comissão anfitriões</td>
    <td style="padding:8px; border:1px solid #ddd;">~3%</td>
    <td style="padding:8px; border:1px solid #ddd;">15-18%</td>
  </tr>
  <tr>
    <td style="padding:8px; border:1px solid #ddd;">Volume de reservas</td>
    <td style="padding:8px; border:1px solid #ddd;">Alto (urbano)</td>
    <td style="padding:8px; border:1px solid #ddd;">Muito Alto</td>
  </tr>
  <tr>
    <td style="padding:8px; border:1px solid #ddd;">Proteção de danos</td>
    <td style="padding:8px; border:1px solid #ddd;">Sim (AirCover)</td>
    <td style="padding:8px; border:1px solid #ddd;">Não</td>
  </tr>
  <tr>
    <td style="padding:8px; border:1px solid #ddd;">Avaliação de hóspedes</td>
    <td style="padding:8px; border:1px solid #ddd;">Sim</td>
    <td style="padding:8px; border:1px solid #ddd;">Não</td>
  </tr>
</table>

<h2>A estratégia recomendada: multicanal</h2>
<p>A maioria dos proprietários experientes em Portugal usa <strong>ambas as plataformas simultaneamente</strong>, gerindo a disponibilidade através de um channel manager (software de gestão) para evitar reservas duplas.</p>
<p>Esta estratégia permite:</p>
<ul>
  <li>Maximizar a taxa de ocupação</li>
  <li>Diversificar o risco (não depender de uma só plataforma)</li>
  <li>Atingir diferentes perfis de hóspede</li>
</ul>

<h2>Outras plataformas a considerar</h2>
<ul>
  <li><strong>VRBO / HomeAway</strong> — forte para famílias e estadias longas, mercado americano</li>
  <li><strong>Expedia</strong> — boa visibilidade internacional</li>
  <li><strong>HomeToGo</strong> — agregador europeu crescente</li>
  <li><strong>Site próprio</strong> — sem comissões, mas exige investimento em SEO e marketing</li>
</ul>

<h2>Perguntas Frequentes</h2>
<h3>Posso definir preços diferentes no Airbnb e no Booking?</h3>
<p>Sim, mas deve ter cuidado. O Booking.com tem cláusula de paridade de preços (deve praticar preços iguais ou melhores que noutros canais). Leia os termos antes de aplicar preços diferenciados.</p>

<h3>Como evitar reservas duplas?</h3>
<p>Usando um channel manager (como Smoobu, Lodgify, Hostaway), que sincroniza automaticamente a disponibilidade entre todas as plataformas em tempo real.</p>
    `,
  },
  {
    slug: 'fiscalidade-alojamento-local/taxas-municipais-al',
    title: 'Taxa Turística Municipal no Alojamento Local — Guia Completo 2026',
    description: 'Tudo sobre a taxa turística municipal no Alojamento Local. Quem paga, quanto é, como cobrar e como entregar à câmara. Valores atualizados para 2025.',
    category: 'Fiscalidade AL',
    categorySlug: 'fiscalidade-alojamento-local',
    publishedAt: '2025-03-20',
    updatedAt: '2026-06-09',
    keywords: ['taxa turística municipal AL', 'taxa turística lisboa porto', 'como cobrar taxa turística', 'taxa turística alojamento local 2026'],
    content: `
<h2>O que é a taxa turística municipal?</h2>
<p>A taxa turística (ou taxa de dormida) é um valor cobrado por cada noite de hospedagem, por hóspede adulto, em estabelecimentos de alojamento turístico — incluindo o Alojamento Local. É uma taxa <strong>cobrada ao hóspede</strong>, mas o proprietário do AL é responsável por a recolher e entregar à câmara municipal.</p>

<h2>Quem paga a taxa turística?</h2>
<p>A taxa é paga pelo <strong>hóspede</strong>, não pelo proprietário. O proprietário funciona como intermediário: cobra ao hóspede e entrega à câmara. No entanto, se o proprietário não cobrar ao hóspede, é ele quem fica responsável pelo pagamento.</p>

<h2>Valores da taxa turística em 2026</h2>
<p>Cada município define o seu próprio valor. Em 2026, os principais valores são:</p>
<ul>
  <li><strong>Lisboa</strong> — €2,00 por noite/pessoa (máximo 7 noites consecutivas por estada)</li>
  <li><strong>Porto</strong> — €2,00 por noite/pessoa</li>
  <li><strong>Cascais</strong> — €2,00 por noite/pessoa (de março a outubro), €1,00 (novembro a fevereiro)</li>
  <li><strong>Sintra</strong> — €1,00 por noite/pessoa</li>
  <li><strong>Faro</strong> — €1,50 por noite/pessoa</li>
  <li><strong>Albufeira</strong> — €1,50 por noite/pessoa</li>
  <li><strong>Funchal</strong> — €2,00 por noite/pessoa</li>
  <li><strong>Setúbal</strong> — €1,00 por noite/pessoa</li>
</ul>
<p><strong>Nota:</strong> Muitos municípios ainda não têm taxa turística. Verifique sempre junto da câmara municipal da sua área.</p>

<h2>Isenções e reduções</h2>
<p>Geralmente estão isentos do pagamento:</p>
<ul>
  <li>Menores de 12/13 anos (varia por município)</li>
  <li>Residentes no município (com comprovativo)</li>
  <li>Pessoas com mobilidade reduzida ou incapacidade (mediante declaração)</li>
  <li>Hóspedes em tratamento médico prolongado</li>
</ul>

<h2>Como cobrar a taxa turística aos hóspedes</h2>
<p>Existem duas abordagens principais:</p>

<h3>Incluir no preço total</h3>
<p>Pode incluir a taxa no preço total da reserva. Neste caso, indique claramente que o valor inclui taxa turística e especifique o montante na fatura.</p>

<h3>Cobrar separadamente no check-in</h3>
<p>A alternativa mais transparente é cobrar a taxa separadamente no momento do check-in. Peça ao hóspede que pague em numerário ou por transferência.</p>

<p>Nas plataformas, pode adicionar a taxa como custo separado no anúncio (Airbnb e Booking.com permitem esta configuração).</p>

<h2>Como entregar a taxa à câmara municipal</h2>
<p>O processo de entrega varia por município, mas geralmente inclui:</p>
<ol>
  <li>Registo no portal da câmara municipal (alguns têm plataformas próprias)</li>
  <li>Declaração periódica do número de dormidas e valores cobrados</li>
  <li>Pagamento via referência multibanco ou transferência bancária</li>
</ol>
<p>A periodicidade de entrega é tipicamente <strong>trimestral</strong>, mas alguns municípios exigem declarações mensais. Consulte a câmara da sua área para saber o procedimento exato.</p>

<h2>Consequências do não pagamento</h2>
<p>Não entregar a taxa turística à câmara pode resultar em:</p>
<ul>
  <li>Coimas administrativas</li>
  <li>Acréscimos de mora sobre os valores em dívida</li>
  <li>Processos de contraordenação</li>
</ul>

<h2>Perguntas Frequentes</h2>
<h3>Tenho de emitir recibo pela taxa turística?</h3>
<p>Sim. A taxa turística cobrada deve constar na fatura/recibo emitida ao hóspede, separada do valor do alojamento.</p>

<h3>A taxa turística conta para o IVA?</h3>
<p>A taxa turística não está sujeita a IVA, pois é um encargo fiscal municipal e não um serviço prestado pelo proprietário.</p>

<h3>E se o hóspede se recusar a pagar?</h3>
<p>Informe claramente no anúncio e nas comunicações pré-check-in que a taxa turística é obrigatória por lei. Se o hóspede se recusar, terá de pagar do seu bolso ou entrar em litígio com a câmara — o que não é recomendável.</p>
    `,
  },
  {
    slug: 'legislacao-al/condominio-alojamento-local',
    title: 'Condomínio e Alojamento Local — Direitos e Obrigações em 2026',
    description: 'Tudo o que precisa de saber sobre a relação entre condomínio e Alojamento Local após a Lei 56/2023. Pode o condomínio proibir o seu AL? Como funciona o processo?',
    category: 'Legislação AL',
    categorySlug: 'legislacao-al',
    publishedAt: '2025-04-01',
    updatedAt: '2026-06-09',
    keywords: ['condomínio alojamento local', 'condomínio pode proibir AL', 'lei condomínio AL 2024', 'veto condomínio AL'],
    content: `
<h2>O condomínio e o Alojamento Local — o que mudou</h2>
<p>Com a <strong>Lei 56/2023</strong>, a relação entre proprietários de Alojamento Local e os seus condomínios mudou significativamente. Esta lei atribuiu aos condomínios o poder de se opor à atividade de AL nas frações do edifício, o que gerou muita incerteza e preocupação entre os proprietários.</p>

<h2>Pode o condomínio proibir o meu AL?</h2>
<p>Sim, com determinadas condições. A assembleia de condóminos pode deliberar contra a atividade de AL em frações do edifício, mas para isso precisa de:</p>
<ul>
  <li>Aprovação por <strong>maioria de dois terços da permilagem total do edifício</strong></li>
  <li>Deliberação tomada em assembleia de condóminos regularmente convocada</li>
  <li>Ata da assembleia devidamente lavrada</li>
</ul>
<p>Se estas condições forem cumpridas, a deliberação é vinculativa para todos os proprietários do edifício.</p>

<h2>Quando produz efeito a deliberação do condomínio?</h2>
<p>A lei estabelece períodos de transição para proteger os proprietários com AL já registado:</p>
<ul>
  <li>Se o seu AL foi registado antes da lei, tem um <strong>prazo de transição</strong> antes de ter de encerrar</li>
  <li>Novos registos em edifícios onde o condomínio já deliberou contra não são possíveis</li>
  <li>Os detalhes dos prazos de transição estão sujeitos a interpretação e podem ser clarificados por regulamentação futura</li>
</ul>

<h2>Como funciona a votação do condomínio</h2>
<p>A deliberação sobre AL segue o processo normal de assembleia de condóminos:</p>
<ol>
  <li>Convocatória enviada a todos os condóminos com, pelo menos, 10 dias de antecedência</li>
  <li>A ordem de trabalhos deve incluir explicitamente o ponto sobre AL</li>
  <li>Votação em assembleia (presencial ou por representação)</li>
  <li>Aprovação por dois terços da permilagem (não por número de votos)</li>
  <li>Registo da deliberação em ata</li>
  <li>Comunicação à câmara municipal</li>
</ol>

<h2>Como me defender enquanto proprietário de AL</h2>
<p>Se é proprietário de AL e o condomínio está a tentar votar contra, pode:</p>
<ul>
  <li><strong>Comparecer à assembleia</strong> e votar contra a deliberação</li>
  <li><strong>Convencer outros condóminos</strong> a votarem com você (precisa de bloquear mais de um terço da permilagem)</li>
  <li><strong>Verificar irregularidades</strong> no processo de convocatória ou votação</li>
  <li><strong>Consultar um advogado</strong> especializado em direito do condomínio</li>
  <li><strong>Contactar a ALEP</strong> (Associação do Alojamento Local em Portugal) para apoio</li>
</ul>

<h2>Regras de AL no regulamento do condomínio</h2>
<p>Mesmo que o condomínio não vote contra o AL, pode regulamentar a atividade:</p>
<ul>
  <li>Horários de check-in e check-out</li>
  <li>Regras para hóspedes nas áreas comuns</li>
  <li>Regras de ruído</li>
  <li>Uso de elevadores com bagagens</li>
</ul>
<p>Estas regras devem ser razoáveis e não podem proibir a atividade em si.</p>

<h2>Obrigações do proprietário de AL para com o condomínio</h2>
<p>Enquanto proprietário de AL, tem obrigações para com o condomínio:</p>
<ul>
  <li>Pagar quotas de condomínio normalmente</li>
  <li>Responder por danos causados por hóspedes às partes comuns</li>
  <li>Informar o administrador do condomínio sobre a atividade de AL</li>
  <li>Cumprir o regulamento do condomínio</li>
  <li>Assegurar que os hóspedes conhecem e respeitam as regras do edifício</li>
</ul>

<h2>Perguntas Frequentes</h2>
<h3>O condomínio pode proibir AL num edifício antigo sem regime de propriedade horizontal?</h3>
<p>Apenas os edifícios em regime de propriedade horizontal têm assembleia de condóminos com estes poderes. Em edifícios sem este regime, as regras podem ser diferentes.</p>

<h3>Se o condomínio votar contra, perco imediatamente o meu registo RNAL?</h3>
<p>Não imediatamente. A lei prevê períodos de transição. Consulte um advogado para perceber o calendário que se aplica ao seu caso.</p>

<h3>Posso vender o imóvel com o AL ativo se o condomínio votou contra?</h3>
<p>O comprador não herdará o AL (pela Lei 56/2023, a transmissão já é limitada). E se o condomínio deliberou contra, o comprador não poderá sequer registar novo AL.</p>
    `,
  },
  {
    slug: 'fiscalidade-alojamento-local/irs-alojamento-local',
    title: 'IRS e Alojamento Local — Categoria B vs Categoria F em 2026',
    description: 'Guia completo sobre como declarar rendimentos de Alojamento Local no IRS. Diferença entre Categoria B e Categoria F, vantagens de cada opção e como calcular o imposto.',
    category: 'Fiscalidade AL',
    categorySlug: 'fiscalidade-alojamento-local',
    publishedAt: '2025-04-15',
    updatedAt: '2026-06-09',
    keywords: ['IRS alojamento local categoria B', 'IRS AL categoria F', 'como declarar AL IRS', 'IRS AL 2026'],
    content: `
<h2>Como declarar rendimentos de AL no IRS</h2>
<p>Os rendimentos provenientes de Alojamento Local devem ser declarados no IRS anualmente, na campanha fiscal que decorre entre abril e junho. A grande questão é: em que categoria declarar?</p>

<h2>Categoria B — Rendimentos Empresariais e Profissionais</h2>
<p>A Categoria B é a categoria padrão para rendimentos de AL. Aplica-se a quem está registado como trabalhador independente com atividade de AL.</p>

<h3>Regime Simplificado (Categoria B)</h3>
<p>No regime simplificado, aplica-se um <strong>coeficiente de 0,35</strong> às receitas de AL. Isto significa que apenas 35% das suas receitas brutas são consideradas como rendimento tributável.</p>
<p><strong>Exemplo:</strong></p>
<ul>
  <li>Receitas brutas de AL em 2024: €18.000</li>
  <li>Rendimento tributável: €18.000 × 0,35 = <strong>€6.300</strong></li>
  <li>IRS calculado sobre €6.300 às taxas progressivas aplicáveis</li>
</ul>

<h3>Vantagens do Regime Simplificado (Cat. B)</h3>
<ul>
  <li>Simples — não precisa de contabilista</li>
  <li>Coeficiente de 0,35 é favorável se as despesas reais forem baixas</li>
  <li>Não precisa de guardar faturas de despesas (no regime simplificado)</li>
</ul>

<h3>Desvantagens do Regime Simplificado</h3>
<ul>
  <li>Se as despesas reais forem superiores a 65% das receitas, perde vantagem</li>
  <li>Não pode deduzir despesas reais</li>
</ul>

<h3>Contabilidade Organizada (Categoria B)</h3>
<p>Para receitas acima de €200.000/ano, é obrigatório o regime de contabilidade organizada. Neste regime, o lucro real (receitas - despesas) é tributado. Requer TOC (Técnico Oficial de Contas).</p>

<h2>Categoria F — Rendimentos Prediais</h2>
<p>Pode optar por tributar os rendimentos de AL na Categoria F, que é a categoria dos rendimentos de arrendamento. Esta opção tem características distintas:</p>

<h3>Como funciona a Categoria F</h3>
<ul>
  <li>Taxa liberatória de <strong>25%</strong> sobre o rendimento líquido</li>
  <li>Dedução de despesas reais: condomínio, IMI, seguros, manutenção</li>
  <li>Pode ser mais vantajosa se tiver muitas despesas dedutíveis</li>
</ul>
<p><strong>Exemplo:</strong></p>
<ul>
  <li>Receitas: €15.000</li>
  <li>Despesas dedutíveis: €5.000 (condomínio, IMI, manutenção)</li>
  <li>Rendimento líquido: €10.000</li>
  <li>IRS: €10.000 × 25% = <strong>€2.500</strong></li>
</ul>

<h3>Vantagens da Categoria F</h3>
<ul>
  <li>Taxa fixa de 25% (pode ser inferior às taxas progressivas para rendimentos médios/altos)</li>
  <li>Dedução de despesas reais</li>
  <li>Mais simples de calcular se as despesas são fáceis de documentar</li>
</ul>

<h3>Desvantagens da Categoria F</h3>
<ul>
  <li>Não se beneficia do coeficiente 0,35</li>
  <li>Precisa de guardar todas as faturas de despesas</li>
  <li>Não pode acumular com alguns benefícios fiscais de Cat. B</li>
</ul>

<h2>Qual categoria escolher? A decisão</h2>
<p>A escolha depende da sua situação específica. Em geral:</p>
<ul>
  <li><strong>Categoria B (simplificado)</strong> é melhor se as suas despesas reais são baixas (menos de 65% das receitas)</li>
  <li><strong>Categoria F</strong> pode ser melhor se tem muitas despesas dedutíveis e/ou rendimentos mais altos onde a taxa de 25% é inferior à taxa marginal</li>
</ul>
<p>Para rendimentos acima de €20.000/ano, recomenda-se consultar um contabilista para simular ambas as opções.</p>

<h2>Como preencher a declaração de IRS</h2>
<p>Para declarar rendimentos de AL no IRS:</p>
<ol>
  <li>Aceda ao Portal das Finanças em irs.gov.pt</li>
  <li>Selecione "Entregar Declaração" no período de campanha (abril-junho)</li>
  <li>Na declaração Modelo 3, preencha o <strong>Anexo B</strong> (para Categoria B) ou <strong>Anexo F</strong> (para Categoria F)</li>
  <li>Indique as receitas totais de AL</li>
  <li>Se usar Categoria F, indique também as despesas dedutíveis</li>
</ol>

<h2>Perguntas Frequentes</h2>
<h3>Posso mudar de categoria B para F de um ano para o outro?</h3>
<p>Sim, pode optar pela categoria mais vantajosa a cada ano, dentro das regras aplicáveis.</p>

<h3>O que acontece se não declarar os rendimentos de AL?</h3>
<p>A não declaração é considerada fraude fiscal, sujeita a coimas e juros compensatórios. As plataformas (Airbnb, Booking) reportam dados às autoridades fiscais. Não vale a pena o risco.</p>

<h3>Posso deduzir as comissões das plataformas?</h3>
<p>Em Categoria F ou em contabilidade organizada (Cat. B), sim. As comissões pagas ao Airbnb e Booking são uma despesa de exploração dedutível.</p>
    `,
  },
  {
    slug: 'quanto-custa-abrir-alojamento-local',
    title: 'Quanto Custa Abrir um Alojamento Local em Portugal? — Todos os Custos',
    description: 'Análise completa de todos os custos para abrir e operar um Alojamento Local em Portugal. Desde o registo até ao equipamento, saiba quanto precisa de investir.',
    category: 'Guia Completo',
    categorySlug: 'como-abrir-alojamento-local',
    publishedAt: '2025-05-01',
    updatedAt: '2026-06-09',
    keywords: ['quanto custa abrir alojamento local', 'custos AL portugal', 'investimento alojamento local', 'abrir AL Portugal quanto custa'],
    content: `
<h2>Os custos reais de abrir um Alojamento Local</h2>
<p>Uma das primeiras perguntas de quem está a pensar abrir um Alojamento Local é: quanto vai custar? A boa notícia é que o registo em si é relativamente acessível. Os custos mais significativos são geralmente a preparação do imóvel e os custos operacionais recorrentes.</p>

<h2>Custos de registo e legais</h2>

<h3>Taxa de registo municipal</h3>
<p>O registo de AL junto da câmara municipal envolve uma taxa que varia por município:</p>
<ul>
  <li>Muitos municípios: <strong>gratuito</strong></li>
  <li>Lisboa: cerca de <strong>€50 a €175</strong> (dependendo do tipo)</li>
  <li>Porto: aproximadamente <strong>€50 a €100</strong></li>
  <li>Outros municípios: tipicamente entre <strong>€0 e €200</strong></li>
</ul>

<h3>Assessoria jurídica (opcional)</h3>
<p>Se precisar de apoio legal para rever contratos, verificar a conformidade do imóvel ou lidar com questões de condomínio, conte com custos de <strong>€200 a €800</strong> por hora/sessão.</p>

<h2>Custos de seguro</h2>
<p>O seguro de responsabilidade civil é <strong>obrigatório por lei</strong>. Valores médios em 2026:</p>
<ul>
  <li>Apartamento T1-T2: <strong>€250 a €400/ano</strong></li>
  <li>Apartamento T3 ou maior: <strong>€350 a €500/ano</strong></li>
  <li>Moradia: <strong>€400 a €700/ano</strong></li>
  <li>Hostel: <strong>€500 a €1.200/ano</strong></li>
</ul>

<h2>Custos de equipamento e preparação do imóvel</h2>

<h3>Equipamento de segurança obrigatório</h3>
<ul>
  <li>Extintor de incêndio: <strong>€20 a €50</strong></li>
  <li>Detetor de fumo: <strong>€15 a €40</strong> por divisão</li>
  <li>Kit de primeiros socorros: <strong>€15 a €30</strong></li>
  <li>Manta de emergência: <strong>€5 a €15</strong></li>
  <li>Total equipamento segurança: aproximadamente <strong>€70 a €150</strong></li>
</ul>

<h3>Mobiliário e decoração</h3>
<p>Se o imóvel estiver vazio ou desatualizado, pode precisar de investir em mobiliário:</p>
<ul>
  <li>Quarto básico (cama, colchão, roupeiro): <strong>€300 a €800</strong></li>
  <li>Sala (sofá, mesa): <strong>€300 a €700</strong></li>
  <li>Cozinha equipada: <strong>€200 a €1.000</strong> (dependendo do que já existe)</li>
  <li>Casa de banho (acessórios, toalhas): <strong>€100 a €300</strong></li>
  <li>Decoração e pormenores: <strong>€200 a €500</strong></li>
</ul>

<h3>Pequenas obras e melhorias</h3>
<p>Reparações, pintura fresca, iluminação atualizada:</p>
<ul>
  <li>Pintura de um apartamento T2: <strong>€500 a €1.500</strong></li>
  <li>Renovação de casa de banho: <strong>€1.000 a €4.000</strong></li>
  <li>Climatização (A/C): <strong>€600 a €1.500 por divisão</strong></li>
</ul>

<h2>Custos de marketing e arranque</h2>

<h3>Fotografia profissional</h3>
<p>Fotos de qualidade são essenciais para atrair reservas. Valores médios:</p>
<ul>
  <li>Apartamento: <strong>€150 a €350</strong></li>
  <li>Moradia: <strong>€250 a €500</strong></li>
</ul>

<h3>Livro de reclamações eletrónico</h3>
<p>Obrigatório. Custo anual: aproximadamente <strong>€30 a €50</strong>.</p>

<h3>Channel manager (gestão multicanal)</h3>
<p>Se usar Airbnb e Booking simultaneamente, um channel manager evita reservas duplas:</p>
<ul>
  <li>Smoobu, Lodgify, Hostaway: <strong>€20 a €50/mês</strong></li>
</ul>

<h2>Resumo dos custos totais</h2>
<p>Custo estimado para abrir um AL (apartamento já mobilado, em bom estado):</p>
<ul>
  <li>Registo e taxas: <strong>€0 a €200</strong></li>
  <li>Seguro: <strong>€300 a €500</strong></li>
  <li>Equipamento de segurança: <strong>€100 a €150</strong></li>
  <li>Fotografia: <strong>€150 a €350</strong></li>
  <li>Livro de reclamações: <strong>€30 a €50</strong></li>
  <li><strong>Total mínimo</strong>: aproximadamente <strong>€580 a €1.250</strong></li>
</ul>
<p>Se o imóvel precisar de obras ou nova mobília, os custos podem facilmente chegar aos <strong>€3.000 a €10.000</strong> ou mais.</p>

<h2>Custos operacionais recorrentes</h2>
<p>Após abrir, conte com estes custos mensais/anuais:</p>
<ul>
  <li>Seguro: ~€35/mês (média anual)</li>
  <li>Limpeza entre reservas: <strong>€50 a €120 por estada</strong></li>
  <li>Eletricidade, água, internet: <strong>€80 a €200/mês</strong></li>
  <li>Comissões das plataformas: <strong>3-18% das receitas</strong></li>
  <li>Channel manager: <strong>€20 a €50/mês</strong></li>
  <li>Manutenção: <strong>€500 a €1.500/ano</strong></li>
</ul>

<h2>Vale a pena abrir um AL?</h2>
<p>Para perceber se o seu AL é rentável, use a <a href="https://calculadoraal.pt" target="_blank" rel="noopener noreferrer">Calculadora AL gratuita</a> e simule as receitas esperadas versus os custos. A rentabilidade depende muito da localização, da qualidade do imóvel e da gestão.</p>

<h2>Perguntas Frequentes</h2>
<h3>Quanto tempo demora a recuperar o investimento inicial?</h3>
<p>Depende muito da ocupação e do preço médio por noite. Em zonas turísticas de Lisboa ou Porto, com boa gestão, é possível recuperar o investimento inicial em 3-6 meses de operação.</p>

<h3>Há ajudas ou incentivos para abrir AL?</h3>
<p>Existem programas de apoio ao turismo que podem financiar obras de reabilitação. Consulte o Turismo de Portugal e o IAPMEI para programas disponíveis no seu caso específico.</p>

<h3>É necessário uma empresa para operar AL?</h3>
<p>Não. A grande maioria dos proprietários opera como pessoa singular (trabalhador independente). Criar uma empresa só faz sentido para volumes de negócio elevados ou situações fiscais específicas.</p>
    `,
  },
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find(a => a.slug === slug)
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return articles.filter(a => a.categorySlug === categorySlug)
}
