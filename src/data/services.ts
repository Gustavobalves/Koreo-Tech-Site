export type ServiceId =
  | 'sites'
  | 'landing-pages'
  | 'sistemas'
  | 'saas'
  | 'aplicativos'
  | 'softwares';

export type PageId = 'home' | ServiceId | 'contato' | '404';

export interface NavItem {
  id: Exclude<PageId, '404'>;
  label: string;
  hash: string;
}

export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceExample {
  title: string;
  category: string;
  description: string;
  deliverables: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ServiceDetail {
  id: ServiceId;
  index: string;
  navLabel: string;
  title: string;
  tagline: string;
  deliveryEstimate: string;
  shortDescription: string;
  focusAreas: string[];
  heroHeadline: string;
  heroSummary: string;
  presentationTitle: string;
  presentationParagraphs: string[];
  benefits: ServiceBenefit[];
  examples: ServiceExample[];
  process: ProcessStep[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  seoTitle: string;
  seoDescription: string;
  visualType:
    | 'sites-preview'
    | 'landing-preview'
    | 'systems-photo'
    | 'saas-preview'
    | 'mobile-photo'
    | 'software-photo';
  imageSrc?: string;
  imageAlt?: string;
}

export interface PortfolioProject {
  id: string;
  client: string;
  serviceLabel: string;
  serviceId: ServiceId;
  coverImage?: string;
  coverPlaceholder: string;
  problem: string;
  result: string;
  timeline: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface PageSeoMeta {
  title: string;
  description: string;
}

// Dados oficiais da Koreo Tech — substitua pelos dados reais da sua empresa.
export const COMPANY_INFO = {
  brandName: 'Koreo Tech',
  email: 'contato@koreotech.com.br',
  whatsappNumber: '5511999999999', // Apenas dígitos com DDI + DDD
  whatsappDisplay: '(11) 99999-9999',
  cityState: 'São Paulo — SP',
  cnpj: '00.000.000/0001-00',
  businessHours: 'Seg a Sex, das 9h às 18h',
  whatsappPrefill:
    'Olá, equipe Koreo Tech! Gostaria de solicitar um orçamento para meu projeto.',
  social: {
    linkedin: 'https://linkedin.com/company/koreotech',
    instagram: 'https://instagram.com/koreotech',
    github: 'https://github.com/koreotech',
  },
};

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', hash: 'home' },
  { id: 'sites', label: 'Desenvolvimento de Sites', hash: 'desenvolvimento-de-sites' },
  { id: 'landing-pages', label: 'Landing Pages', hash: 'landing-pages' },
  { id: 'sistemas', label: 'Sistemas', hash: 'sistemas' },
  { id: 'saas', label: 'SaaS', hash: 'saas' },
  { id: 'aplicativos', label: 'Aplicativos', hash: 'aplicativos' },
  { id: 'softwares', label: 'Softwares', hash: 'softwares' },
  { id: 'contato', label: 'Contato', hash: 'contato' },
];

export const HERO_IMAGE_PATH = '/src/assets/images/hero_koreo_software_1795562896721.jpg';
export const MOBILE_SYSTEMS_IMAGE_PATH = '/src/assets/images/service_mobile_systems_1795562898582.jpg';
export const CUSTOM_SOFTWARE_IMAGE_PATH = '/src/assets/images/service_custom_software_1795562897578.jpg';

// Portfólio — substitua pelos seus projetos reais e adicione o caminho da imagem em `coverImage`.
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'projeto-01',
    client: '[Nome do Cliente 1 — Ex.: Clínica Horizonte]',
    serviceLabel: 'Desenvolvimento de Sites',
    serviceId: 'sites',
    coverPlaceholder: 'Capa do projeto 01 (1200 × 750 px) — substitua em services.ts',
    problem:
      '[Descreva o problema: ex. Site antigo lento no celular, sem formulário funcional e fora das buscas locais no Google.]',
    result:
      '[Descreva o resultado: ex. Novo site entregue em 3 semanas, carregamento em menos de 2s e aumento de agendamentos pelo WhatsApp.]',
    timeline: 'Entregue em 3 semanas',
  },
  {
    id: 'projeto-02',
    client: '[Nome do Cliente 2 — Ex.: Logística Sul]',
    serviceLabel: 'Sistemas Web',
    serviceId: 'sistemas',
    coverPlaceholder: 'Capa do projeto 02 (1200 × 750 px) — substitua em services.ts',
    problem:
      '[Descreva o problema: ex. Controle de ordens de serviço em 6 planilhas separadas, com erros de lançamento e retrabalho diário.]',
    result:
      '[Descreva o resultado: ex. Sistema web centralizado entregue em 6 semanas, com histórico por cliente e relatórios em tempo real.]',
    timeline: 'Entregue em 6 semanas',
  },
  {
    id: 'projeto-03',
    client: '[Nome do Cliente 3 — Ex.: Construtora Atlas]',
    serviceLabel: 'Landing Pages',
    serviceId: 'landing-pages',
    coverPlaceholder: 'Capa do projeto 03 (1200 × 750 px) — substitua em services.ts',
    problem:
      '[Descreva o problema: ex. Campanhas no Google Ads enviavam tráfego para a home genérica, gerando alto custo por lead.]',
    result:
      '[Descreva o resultado: ex. Landing page dedicada entregue em 10 dias com rastreamento de conversão e captação direta no CRM.]',
    timeline: 'Entregue em 10 dias',
  },
];

// Depoimentos — substitua por relatos reais de clientes atendidos.
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'depoimento-01',
    quote:
      '[Depoimento do cliente 1: ex. "O prazo combinado foi cumprido à risca. Em quatro semanas colocamos o novo site no ar e passamos a receber contatos qualificados direto pelo WhatsApp."]',
    author: '[Nome do Cliente 1]',
    role: '[Cargo — Ex.: Sócio-diretor]',
    company: '[Empresa 1]',
  },
  {
    id: 'depoimento-02',
    quote:
      '[Depoimento do cliente 2: ex. "Substituímos nossas planilhas por um sistema web simples de usar. A equipe aprendeu no primeiro dia e cortamos horas de conferência manual toda semana."]',
    author: '[Nome do Cliente 2]',
    role: '[Cargo — Ex.: Gerente de Operações]',
    company: '[Empresa 2]',
  },
  {
    id: 'depoimento-03',
    quote:
      '[Depoimento do cliente 3: ex. "Comunicação direta com quem desenvolve, sem enrolação. Cada entrega semanal veio testada e pronta para validar."]',
    author: '[Nome do Cliente 3]',
    role: '[Cargo — Ex.: Fundador]',
    company: '[Empresa 3]',
  },
];

export const SERVICES: ServiceDetail[] = [
  {
    id: 'sites',
    index: '01',
    navLabel: 'Desenvolvimento de Sites',
    title: 'Desenvolvimento de Sites',
    tagline: 'Sites institucionais rápidos, responsivos e prontos para o Google',
    deliveryEstimate: 'Entrega em 3 a 5 semanas',
    shortDescription:
      'Desenvolvemos sites institucionais leves, fáceis de navegar no celular e estruturados com SEO técnico para gerar pedidos de orçamento.',
    focusAreas: ['SEO técnico', 'Performance web', 'WhatsApp integrado'],
    heroHeadline: 'Sites institucionais claros, rápidos e prontos para gerar contatos.',
    heroSummary:
      'Entregamos sites institucionais em 3 a 5 semanas, com código próprio, carregamento rápido no celular e estrutura preparada para aparecer no Google.',
    presentationTitle: 'Estrutura pensada para quem pesquisa sua empresa antes de comprar',
    presentationParagraphs: [
      'Um site institucional precisa responder em poucos segundos o que sua empresa faz, para quem atende e como solicitar um orçamento. Quando a página demora a abrir ou confunde o visitante, o cliente fecha a aba.',
      'Na Koreo Tech, projetamos o layout, programamos com HTML semântico e configuramos domínio, SSL, formulários e WhatsApp. Você recebe o site publicado e com controle total dos acessos.',
    ],
    benefits: [
      {
        title: 'Leitura clara em qualquer tela',
        description:
          'Layout testado em smartphones, tablets e monitores grandes, com tipografia legível e botões fáceis de clicar.',
      },
      {
        title: 'Carregamento rápido e SEO técnico',
        description:
          'Código limpo, imagens otimizadas e títulos estruturados para facilitar a indexação no Google.',
      },
      {
        title: 'Contato direto com sua equipe',
        description:
          'Formulário validado e integração com WhatsApp em pontos estratégicos, sem etapas desnecessárias.',
      },
      {
        title: 'Base pronta para novas páginas',
        description:
          'Arquitetura modular que permite adicionar serviços, artigos ou idiomas sem refazer o site.',
      },
    ],
    examples: [
      {
        title: 'Site Institucional Corporativo',
        category: 'Empresas e escritórios',
        description:
          'Apresentação da empresa, serviços, portfólio, equipe e canais diretos de orçamento.',
        deliverables: 'Até 6 páginas · Formulário integrado · SEO estrutural',
      },
      {
        title: 'Portal de Serviços B2B',
        category: 'Consultorias e indústria',
        description:
          'Estrutura objetiva para explicar serviços técnicos, mostrar casos reais e qualificar pedidos comerciais.',
        deliverables: 'Catálogo de serviços · Casos práticos · Captação comercial',
      },
      {
        title: 'Vitrine Digital de Produtos',
        category: 'Comércio e fabricantes',
        description:
          'Exposição de linhas de produtos com filtros rápidos, fichas técnicas e botão direto para o vendedor.',
        deliverables: 'Filtros rápidos · Fichas técnicas · WhatsApp por item',
      },
      {
        title: 'Site para Clínicas e Profissionais',
        category: 'Saúde, direito e consultoria',
        description:
          'Páginas dedicadas por especialidade, dúvidas frequentes e agendamento direto pelo WhatsApp.',
        deliverables: 'Páginas por área · FAQ · Agendamento rápido',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Escopo e mapa de páginas',
        description:
          'Definimos público, serviços prioritários e o conteúdo exato de cada página antes do design.',
      },
      {
        number: '02',
        title: 'Layout para aprovação',
        description:
          'Você revisa as telas em desktop e celular e aprova ajustes antes da programação começar.',
      },
      {
        number: '03',
        title: 'Programação e SEO',
        description:
          'Implementamos o site com foco em velocidade, acessibilidade, formulários e metatags de busca.',
      },
      {
        number: '04',
        title: 'Publicação assistida',
        description:
          'Configuramos domínio, SSL e validamos todos os envios e links em ambiente real.',
      },
    ],
    ctaTitle: 'Precisa de um novo site para sua empresa?',
    ctaDescription:
      'Envie o cenário atual da sua empresa e receba uma proposta com escopo, prazo em semanas e valor fechado.',
    ctaButtonText: 'Solicitar orçamento de site',
    seoTitle: 'Desenvolvimento de Sites Institucionais — Koreo Tech',
    seoDescription:
      'Criamos sites institucionais rápidos, responsivos e com SEO técnico entregues em 3 a 5 semanas. Solicite um orçamento na Koreo Tech.',
    visualType: 'sites-preview',
  },
  {
    id: 'landing-pages',
    index: '02',
    navLabel: 'Landing Pages',
    title: 'Landing Pages',
    tagline: 'Páginas dedicadas para anúncios, lançamentos e geração de leads',
    deliveryEstimate: 'Entrega em 1 a 2 semanas',
    shortDescription:
      'Criamos páginas de alta velocidade para campanhas no Google Ads e Meta Ads, com rastreamento de conversão e foco em gerar contatos.',
    focusAreas: ['Google e Meta Ads', 'Rastreamento configurado', 'Entrega em 1 a 2 semanas'],
    heroHeadline: 'Landing pages rápidas para converter o tráfego das suas campanhas.',
    heroSummary:
      'Entregamos sua landing page em 1 a 2 semanas, pronta para Google Ads e Meta Ads, com carregamento leve no 4G e eventos de conversão configurados.',
    presentationTitle: 'Uma página dedicada evita desperdício de verba em anúncios',
    presentationParagraphs: [
      'Enviar quem clicou em um anúncio para a página inicial genérica divide a atenção do visitante e encarece o custo por lead. Uma landing page mantém uma única oferta e um caminho direto até o contato.',
      'Na Koreo Tech, organizamos a hierarquia da oferta, programamos uma página leve para mobile e configuramos Google Analytics, Meta Pixel e integração com WhatsApp ou CRM.',
    ],
    benefits: [
      {
        title: 'Foco em uma única ação',
        description:
          'Estrutura direta que apresenta a oferta, responde objeções e conduz ao formulário ou WhatsApp.',
      },
      {
        title: 'Velocidade em conexões móveis',
        description:
          'Código leve e imagens otimizadas para abrir rápido no celular e reduzir abandono após o clique.',
      },
      {
        title: 'Métricas e rastreamento prontos',
        description:
          'Instalação de Google Analytics, Meta Pixel e eventos de envio para medir o retorno de cada campanha.',
      },
      {
        title: 'Fácil de atualizar durante a campanha',
        description:
          'Estrutura organizada para trocar títulos, ofertas e depoimentos sem reconstruir a página.',
      },
    ],
    examples: [
      {
        title: 'Captação de Leads B2B',
        category: 'Geração de demanda',
        description:
          'Página para receber cliques de busca paga e qualificar contatos para reuniões comerciais.',
        deliverables: 'Formulário qualificado · Pixel e Analytics · WhatsApp',
      },
      {
        title: 'Página de Lançamento',
        category: 'Produtos e serviços',
        description:
          'Apresentação focada de uma nova oferta, diferenciais práticos, FAQ e abertura de vendas ou lista.',
        deliverables: 'Seções de oferta · FAQ objetivo · Botão de conversão',
      },
      {
        title: 'Campanha Promocional Local',
        category: 'Serviços regionais',
        description:
          'Página enxuta para anúncios geolocalizados com foco em contato imediato pelo WhatsApp.',
        deliverables: 'Alta velocidade mobile · CTA WhatsApp · Rastreamento',
      },
      {
        title: 'Inscrição para Eventos e Webinars',
        category: 'Eventos online e presenciais',
        description:
          'Programação clara, apresentação dos palestrantes e formulário rápido para aumentar inscrições.',
        deliverables: 'Agenda · Confirmação imediata · Integração de lista',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Oferta e objetivo',
        description:
          'Alinhamos o público da campanha, os argumentos principais e o destino do lead.',
      },
      {
        number: '02',
        title: 'Design de conversão',
        description:
          'Montamos o layout priorizando leitura rápida no celular e destaque para o botão de contato.',
      },
      {
        number: '03',
        title: 'Código e rastreamento',
        description:
          'Programamos a página, validamos o formulário e configuramos pixels e eventos de conversão.',
      },
      {
        number: '04',
        title: 'Testes e publicação',
        description:
          'Verificamos velocidade, domínio e envios em aparelhos reais antes de liberar para os anúncios.',
      },
    ],
    ctaTitle: 'Vai rodar anúncios e precisa da página pronta em até 2 semanas?',
    ctaDescription:
      'Conte qual oferta vai anunciar e receba um orçamento objetivo com prazo de entrega definido.',
    ctaButtonText: 'Orçar minha landing page',
    seoTitle: 'Criação de Landing Pages para Campanhas — Koreo Tech',
    seoDescription:
      'Landing pages rápidas para Google Ads e Meta Ads entregues em 1 a 2 semanas, com rastreamento de conversão e foco em leads.',
    visualType: 'landing-preview',
  },
  {
    id: 'sistemas',
    index: '03',
    navLabel: 'Sistemas',
    title: 'Sistemas',
    tagline: 'Sistemas web para organizar processos e substituir planilhas',
    deliveryEstimate: 'Primeira versão em 4 a 8 semanas',
    shortDescription:
      'Desenvolvemos sistemas web para centralizar cadastros, ordens de serviço, aprovações e relatórios com acesso seguro pelo navegador.',
    focusAreas: ['Gestão operacional', 'Perfis de acesso', 'Relatórios em tempo real'],
    heroHeadline: 'Sistemas web para substituir planilhas soltas por controle diário.',
    heroSummary:
      'Entregamos sistemas web em ciclos de 4 a 8 semanas, centralizando cadastros, fluxos de aprovação e indicadores em um painel seguro no navegador.',
    presentationTitle: 'Regras da sua operação organizadas em um só ambiente',
    presentationParagraphs: [
      'Quando a empresa cresce apoiada em planilhas separadas e mensagens soltas, surgem erros de digitação, retrabalho e falta de histórico. Cada setor vê um número diferente.',
      'A Koreo Tech constrói sistemas web ajustados à rotina da sua equipe, com controle de acesso por perfil, registro de alterações e relatórios prontos para exportação.',
    ],
    benefits: [
      {
        title: 'Menos retrabalho manual',
        description:
          'Validações automáticas, preenchimento padronizado e alertas internos reduzem erros na rotina.',
      },
      {
        title: 'Números confiáveis no mesmo painel',
        description:
          'Dashboards com filtros por período, unidade ou responsável para acompanhar a operação sem montar planilhas.',
      },
      {
        title: 'Permissões por cargo',
        description:
          'Administradores, operadores e clientes acessam apenas os módulos e dados liberados para o seu perfil.',
      },
      {
        title: 'Acesso direto pelo navegador',
        description:
          'Funciona em computadores e tablets sem precisar instalar programas em cada máquina da equipe.',
      },
    ],
    examples: [
      {
        title: 'Gestão de Ordens de Serviço',
        category: 'Operação interna',
        description:
          'Abertura de chamados, agenda de técnicos, status por etapa e histórico completo por cliente.',
        deliverables: 'Fluxo por etapas · Perfis de equipe · Relatórios CSV/PDF',
      },
      {
        title: 'Portal do Cliente B2B',
        category: 'Atendimento e documentos',
        description:
          'Área com login onde clientes acompanham pedidos, baixam documentos e abrem solicitações.',
        deliverables: 'Login seguro · Central de arquivos · Histórico de chamados',
      },
      {
        title: 'CRM Comercial Específico',
        category: 'Vendas e pós-venda',
        description:
          'Controle de propostas, etapas de negociação, metas e alertas de retorno adaptados ao seu ciclo de vendas.',
        deliverables: 'Pipeline configurável · Alertas · Painel de metas',
      },
      {
        title: 'Painel Financeiro e Aprovações',
        category: 'Controle administrativo',
        description:
          'Lançamento por centro de custo, aprovação de despesas em níveis e visão consolidada de contratos.',
        deliverables: 'Aprovações · Histórico auditável · Indicadores mensais',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Mapeamento do processo',
        description:
          'Levantamos regras de negócio, perfis de usuário, gargalos atuais e integrações necessárias.',
      },
      {
        number: '02',
        title: 'Protótipo das telas',
        description:
          'Validamos tabelas, formulários e fluxos com quem vai usar o sistema no dia a dia.',
      },
      {
        number: '03',
        title: 'Entregas semanais',
        description:
          'Desenvolvemos por módulos funcionais com demonstrações frequentes e testes em ambiente de homologação.',
      },
      {
        number: '04',
        title: 'Entrada em produção',
        description:
          'Publicamos o sistema, orientamos a equipe usuária e acompanhamos os primeiros dias de operação.',
      },
    ],
    ctaTitle: 'Quer trocar planilhas por um sistema web próprio?',
    ctaDescription:
      'Explique os processos que sua equipe precisa organizar e receba um plano de entregas com prazo e investimento claros.',
    ctaButtonText: 'Planejar meu sistema web',
    seoTitle: 'Desenvolvimento de Sistemas Web para Empresas — Koreo Tech',
    seoDescription:
      'Sistemas web para substituir planilhas, centralizar cadastros e gerar relatórios em tempo real. Primeira versão em 4 a 8 semanas.',
    visualType: 'systems-photo',
    imageSrc: MOBILE_SYSTEMS_IMAGE_PATH,
    imageAlt: 'Painel operacional em tablet e aplicativo sincronizado sobre mesa escura',
  },
  {
    id: 'saas',
    index: '04',
    navLabel: 'SaaS',
    title: 'SaaS',
    tagline: 'Plataformas por assinatura com arquitetura multiempresa',
    deliveryEstimate: 'MVP funcional em 6 a 10 semanas',
    shortDescription:
      'Construímos plataformas SaaS do MVP à escala, com contas isoladas por empresa, gestão de planos e base preparada para cobrança recorrente.',
    focusAreas: ['Arquitetura multi-tenant', 'Planos e cobrança', 'MVP em 6 a 10 semanas'],
    heroHeadline: 'Plataformas SaaS construídas com base sólida para receber assinantes.',
    heroSummary:
      'Tiramos seu MVP do papel em 6 a 10 semanas com isolamento de dados por empresa, controle de planos e estrutura pronta para evoluir com os usuários.',
    presentationTitle: 'Engenharia de produto para negócios de receita recorrente',
    presentationParagraphs: [
      'Um SaaS precisa entrar no mercado rápido para validar vendas, mas sem atalhos técnicos que travem o produto quando os primeiros clientes pagantes chegarem.',
      'Na Koreo Tech, modelamos banco de dados multiempresa, permissões de equipe, onboarding enxuto e integração com gateways de assinatura para você operar com previsibilidade.',
    ],
    benefits: [
      {
        title: 'Isolamento de dados por empresa',
        description:
          'Arquitetura multi-tenant organizada para manter contas, usuários e permissões de cada assinante separados.',
      },
      {
        title: 'Planos e cobrança recorrente',
        description:
          'Estrutura preparada para níveis de assinatura, limites por plano, período de teste e integração de pagamento.',
      },
      {
        title: 'Onboarding direto ao valor',
        description:
          'Fluxo inicial simples para o novo assinante configurar a conta e usar o recurso principal sem depender de suporte.',
      },
      {
        title: 'Código pronto para evoluir',
        description:
          'Estrutura modular e documentada para lançar novos módulos e APIs conforme o feedback dos clientes.',
      },
    ],
    examples: [
      {
        title: 'MVP SaaS para Validação',
        category: 'Novos produtos',
        description:
          'Primeira versão focada no fluxo principal para colocar o produto no ar e fechar os primeiros clientes.',
        deliverables: 'Fluxo central · Autenticação · Painel do assinante',
      },
      {
        title: 'Plataforma B2B Multiempresa',
        category: 'Software por assinatura',
        description:
          'Ambiente completo onde cada empresa cliente gerencia sua própria equipe, permissões e relatórios.',
        deliverables: 'Contas isoladas · Planos · Painel administrativo',
      },
      {
        title: 'SaaS para Nichos Específicos',
        category: 'Clínicas, escritórios e varejo',
        description:
          'Plataforma recorrente com módulos dedicados para a rotina de um segmento específico de mercado.',
        deliverables: 'Módulos setoriais · Assinaturas · Relatórios de uso',
      },
      {
        title: 'Área de Membros ou Ecossistema',
        category: 'Plataformas digitais',
        description:
          'Conexão entre prestadores, conteúdos ou ferramentas e assinantes com painéis separados por perfil.',
        deliverables: 'Múltiplos perfis · Controle de acesso · APIs',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Escopo enxuto do MVP',
        description:
          'Priorizamos apenas o essencial para lançar rápido e validar o produto com clientes reais.',
      },
      {
        number: '02',
        title: 'Arquitetura e UX',
        description:
          'Desenhamos as telas do assinante e modelamos o banco multiempresa, segurança e regras de planos.',
      },
      {
        number: '03',
        title: 'Sprints com entrega visível',
        description:
          'Construímos em ciclos curtos com ambiente de teste atualizado para você acompanhar cada avanço.',
      },
      {
        number: '04',
        title: 'Lançamento e acompanhamento',
        description:
          'Colocamos a plataforma no ar com logs, monitoramento básico e base pronta para as próximas versões.',
      },
    ],
    ctaTitle: 'Quer lançar seu SaaS ou estruturar uma nova versão?',
    ctaDescription:
      'Compartilhe o escopo do seu produto e receba uma proposta técnica com fases, prazos e investimento.',
    ctaButtonText: 'Conversar sobre meu SaaS',
    seoTitle: 'Desenvolvimento de Plataformas SaaS e MVPs — Koreo Tech',
    seoDescription:
      'Desenvolvimento de plataformas SaaS multi-tenant com planos e assinaturas. MVP funcional entregue em 6 a 10 semanas.',
    visualType: 'saas-preview',
  },
  {
    id: 'aplicativos',
    index: '05',
    navLabel: 'Aplicativos',
    title: 'Aplicativos',
    tagline: 'Apps Android e iOS integrados ao seu sistema web',
    deliveryEstimate: 'Primeira versão em 6 a 10 semanas',
    shortDescription:
      'Desenvolvemos aplicativos para Android e iOS com interface objetiva, sincronização em nuvem e apoio completo na publicação nas lojas.',
    focusAreas: ['Android e iOS', 'Sincronização em nuvem', 'Publicação nas lojas'],
    heroHeadline: 'Aplicativos mobile simples de usar e integrados à sua operação.',
    heroSummary:
      'Entregamos aplicativos para Android e iOS em 6 a 10 semanas, com interface leve, integração com painel web e suporte na publicação na Google Play e App Store.',
    presentationTitle: 'Mobilidade prática para clientes e equipes externas',
    presentationParagraphs: [
      'No celular, cada toque extra aumenta o abandono. Um bom aplicativo resolve tarefas específicas de forma rápida, seja para um cliente acompanhar pedidos ou para uma equipe registrar visitas em campo.',
      'Na Koreo Tech, projetamos o fluxo mobile, desenvolvemos a integração com o servidor em nuvem e acompanhamos todo o processo de envio para as lojas oficiais.',
    ],
    benefits: [
      {
        title: 'Fluxos pensados para o toque',
        description:
          'Telas limpas, ações diretas e poucos passos para facilitar o uso frequente no dia a dia.',
      },
      {
        title: 'Sincronizado com painel web',
        description:
          'Pedidos, cadastros e notificações atualizados em tempo real entre o aplicativo e a gestão da empresa.',
      },
      {
        title: 'Desempenho estável',
        description:
          'Carregamento bem tratado, consumo equilibrado de dados e testes em aparelhos físicos antes do lançamento.',
      },
      {
        title: 'Apoio até as lojas',
        description:
          'Orientação técnica nas contas de desenvolvedor, revisão de requisitos e publicação na Google Play e App Store.',
      },
    ],
    examples: [
      {
        title: 'App de Relacionamento com Clientes',
        category: 'Serviços e fidelização',
        description:
          'Agendamentos, status de pedidos, histórico de atendimento e notificações úteis no celular.',
        deliverables: 'Login rápido · Notificações push · Área do cliente',
      },
      {
        title: 'App para Equipes em Campo',
        category: 'Operação externa',
        description:
          'Checklists de visita, fotos, registro de ocorrências e atualização de ordens fora do escritório.',
        deliverables: 'Formulários móveis · Envio de fotos · Sincronização web',
      },
      {
        title: 'Aplicativo de Serviços',
        category: 'Produtos digitais',
        description:
          'Solicitação de serviços em etapas curtas, acompanhamento de status e histórico completo.',
        deliverables: 'Jornada de pedido · Acompanhamento · Painel gestor',
      },
      {
        title: 'Versão Mobile de Sistema Web',
        category: 'Extensão de plataforma',
        description:
          'Aplicativo conectado ao seu sistema ou SaaS atual para consultas rápidas, alertas e aprovações.',
        deliverables: 'API integrada · Consultas · Aprovações móveis',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Fluxo mobile',
        description:
          'Definimos as tarefas essenciais no celular para manter o aplicativo leve e objetivo.',
      },
      {
        number: '02',
        title: 'Protótipo navegável',
        description:
          'Você testa a navegação das telas e aprova a experiência antes da programação.',
      },
      {
        number: '03',
        title: 'Desenvolvimento e testes',
        description:
          'Implementamos o aplicativo e as APIs, testando estabilidade em dispositivos Android e iOS.',
      },
      {
        number: '04',
        title: 'Publicação nas lojas',
        description:
          'Preparamos as versões finais e acompanhamos a aprovação na Google Play e App Store.',
      },
    ],
    ctaTitle: 'Quer levar seu serviço ou operação para o celular?',
    ctaDescription:
      'Conte qual problema o aplicativo precisa resolver e receba uma estimativa clara de prazo e investimento.',
    ctaButtonText: 'Solicitar orçamento de aplicativo',
    seoTitle: 'Desenvolvimento de Aplicativos Android e iOS — Koreo Tech',
    seoDescription:
      'Criamos aplicativos Android e iOS integrados a painéis web com entrega da primeira versão em 6 a 10 semanas.',
    visualType: 'mobile-photo',
    imageSrc: MOBILE_SYSTEMS_IMAGE_PATH,
    imageAlt: 'Smartphone apresentando aplicativo mobile ao lado de painel administrativo',
  },
  {
    id: 'softwares',
    index: '06',
    navLabel: 'Softwares',
    title: 'Softwares',
    tagline: 'Automações, integrações entre sistemas e ferramentas dedicadas',
    deliveryEstimate: 'Entregas por marco em 4 a 8 semanas',
    shortDescription:
      'Desenvolvemos APIs, conectores entre ferramentas, automações de rotina e softwares específicos quando programas prontos não atendem sua regra.',
    focusAreas: ['Integrações e APIs', 'Automação de rotinas', 'Código próprio'],
    heroHeadline: 'Softwares e integrações para quando ferramentas prontas travam a operação.',
    heroSummary:
      'Construímos automações, APIs e ferramentas dedicadas em ciclos de 4 a 8 semanas para conectar sistemas e eliminar digitação duplicada.',
    presentationTitle: 'Engenharia direta para regras específicas de negócio',
    presentationParagraphs: [
      'Muitas empresas pagam caro por ferramentas de prateleira e ainda perdem horas copiando dados entre sistemas que não se comunicam. Quando a regra do negócio é específica, adaptar tudo no improviso custa mais caro.',
      'Na Koreo Tech, desenvolvemos integrações, APIs documentadas e softwares corporativos com código versionado, logs claros e propriedade total da sua empresa.',
    ],
    benefits: [
      {
        title: 'Regras exatas da sua operação',
        description:
          'Cálculos, validações e fluxos construídos exatamente conforme sua empresa opera, sem limitações de licença.',
      },
      {
        title: 'Sistemas conversando entre si',
        description:
          'Conectamos ERPs, CRMs, bancos de dados, planilhas e gateways para acabar com retrabalho de digitação.',
      },
      {
        title: 'Autonomia tecnológica',
        description:
          'Você tem acesso ao repositório, documentação técnica e controle total sobre a evolução do software.',
      },
      {
        title: 'Rastreabilidade e segurança',
        description:
          'Controle de versões, registros de erro e testes automatizados nos fluxos críticos.',
      },
    ],
    examples: [
      {
        title: 'Automação de Processos',
        category: 'Eficiência operacional',
        description:
          'Rotinas agendadas para gerar relatórios, conferir documentos, importar lotes e disparar alertas.',
        deliverables: 'Regras customizadas · Processamento seguro · Logs',
      },
      {
        title: 'Integrações e APIs',
        category: 'Conectividade',
        description:
          'Conectores e webhooks para sincronizar dados entre plataformas comerciais, financeiras e logísticas.',
        deliverables: 'API documentada · Webhooks · Sincronização automática',
      },
      {
        title: 'Calculador e Orçamentação',
        category: 'Engenharia e vendas',
        description:
          'Ferramenta dedicada para precificação complexa, simulação de margens e geração automática de propostas.',
        deliverables: 'Fórmulas exatas · Exportação PDF · Histórico',
      },
      {
        title: 'Modernização de Sistema Legado',
        category: 'Atualização técnica',
        description:
          'Migração planejada de ferramentas antigas para arquitetura atual, segura e fácil de manter.',
        deliverables: 'Migração segura · Nova interface · Menor risco',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Levantamento técnico',
        description:
          'Analisamos os sistemas envolvidos, volume de dados, regras de negócio e critérios de validação.',
      },
      {
        number: '02',
        title: 'Arquitetura e marcos',
        description:
          'Definimos stack, integrações, segurança e um cronograma com entregas verificáveis.',
      },
      {
        number: '03',
        title: 'Implementação e testes',
        description:
          'Desenvolvemos com revisão de código e testes em cenários reais antes de ir para produção.',
      },
      {
        number: '04',
        title: 'Implantação e documentação',
        description:
          'Fazemos a entrega assistida com documentação clara para garantir operação estável.',
      },
    ],
    ctaTitle: 'Tem uma integração ou rotina que precisa automatizar?',
    ctaDescription:
      'Descreva os sistemas e processos envolvidos para receber uma proposta técnica objetiva.',
    ctaButtonText: 'Falar sobre software dedicado',
    seoTitle: 'Desenvolvimento de Softwares, APIs e Automações — Koreo Tech',
    seoDescription:
      'Criamos softwares dedicados, integrações entre sistemas e automações de processos com entregas em 4 a 8 semanas.',
    visualType: 'software-photo',
    imageSrc: CUSTOM_SOFTWARE_IMAGE_PATH,
    imageAlt: 'Arquitetura modular em vidro escuro com linhas luminosas azuis e violetas',
  },
];

export function getServiceById(id: ServiceId): ServiceDetail {
  const found = SERVICES.find((service) => service.id === id);
  return found ?? SERVICES[0];
}

export function getPageIdFromHash(hashValue: string, pathname = '/'): PageId {
  const normalizedPath = pathname.replace(/\/+$/, '') || '/';
  if (normalizedPath !== '/' && normalizedPath !== '/index.html') {
    return '404';
  }

  const cleaned = hashValue.replace(/^#\/?/, '').trim().toLowerCase();
  if (!cleaned || cleaned === 'home' || cleaned === 'como-trabalhamos') {
    return 'home';
  }

  const match = NAV_ITEMS.find((item) => item.hash === cleaned || item.id === cleaned);
  return match ? match.id : '404';
}

export function getHashFromPageId(pageId: PageId): string {
  if (pageId === '404') {
    return '#404';
  }
  const match = NAV_ITEMS.find((item) => item.id === pageId);
  return match ? `#${match.hash}` : '#home';
}

export function getSeoMetaForPage(pageId: PageId): PageSeoMeta {
  if (pageId === 'home') {
    return {
      title: 'Koreo Tech — Sites, Sistemas, SaaS e Aplicativos para Empresas',
      description:
        'Desenvolvemos sites, landing pages, sistemas web, plataformas SaaS, aplicativos e softwares com prazo definido e código próprio.',
    };
  }

  if (pageId === 'contato') {
    return {
      title: 'Contato e Orçamento — Koreo Tech',
      description:
        'Solicite um orçamento para sites, landing pages, sistemas web, SaaS ou aplicativos. Retorno técnico em até 1 dia útil.',
    };
  }

  if (pageId === '404') {
    return {
      title: 'Página não encontrada (404) — Koreo Tech',
      description: 'A página solicitada não foi encontrada no site da Koreo Tech.',
    };
  }

  const service = getServiceById(pageId);
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}
