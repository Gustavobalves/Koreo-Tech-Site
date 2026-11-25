export type ServiceId =
  | 'sites'
  | 'landing-pages'
  | 'sistemas'
  | 'saas'
  | 'aplicativos'
  | 'softwares';

export type PageId = 'home' | ServiceId | 'contato';

export interface NavItem {
  id: PageId;
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

export const SERVICES: ServiceDetail[] = [
  {
    id: 'sites',
    index: '01',
    navLabel: 'Desenvolvimento de Sites',
    title: 'Desenvolvimento de Sites',
    tagline: 'Sites institucionais e experiências web responsivas',
    shortDescription:
      'Projetamos e programamos sites institucionais rápidos, responsivos e estruturados para fortalecer a presença digital da sua empresa.',
    focusAreas: ['Arquitetura institucional', 'Performance web', 'SEO técnico'],
    heroHeadline: 'Sites institucionais que comunicam autoridade em qualquer tela.',
    heroSummary:
      'Criamos experiências web responsivas sob medida, com carregamento ágil, hierarquia clara e estrutura pronta para ranqueamento e crescimento contínuo.',
    presentationTitle: 'Sua vitrine digital construída com rigor de engenharia',
    presentationParagraphs: [
      'Um site institucional precisa ir além de um layout bonito: ele organiza a proposta de valor da empresa, responde dúvidas rapidamente e conduz visitantes até o contato comercial sem atrito.',
      'Na Koreo Tech, desenvolvemos sites leves e acessíveis, adaptados para celulares, tablets e computadores, com código limpo, boas práticas de SEO técnico e facilidade para futuras expansões de conteúdo.',
    ],
    benefits: [
      {
        title: 'Credibilidade imediata para a marca',
        description:
          'Identidade visual coerente, tipografia legível e navegação intuitiva que transmitem profissionalismo desde o primeiro acesso.',
      },
      {
        title: 'Carregamento rápido e SEO técnico',
        description:
          'Estrutura semântica otimizada, imagens preparadas para web e desempenho pensado para boas posições nos mecanismos de busca.',
      },
      {
        title: 'Experiência fluida em celulares e desktops',
        description:
          'Layout responsivo testado em diferentes resoluções para garantir leitura confortável e botões acessíveis em qualquer dispositivo.',
      },
      {
        title: 'Base preparada para evoluir',
        description:
          'Arquitetura modular que permite adicionar novas páginas, artigos, idiomas ou integrações comerciais sem reconstruir o projeto do zero.',
      },
    ],
    examples: [
      {
        title: 'Site Institucional Corporativo',
        category: 'Empresas e escritórios',
        description:
          'Apresentação completa da empresa, áreas de atuação, portfólio de serviços, equipe e canais diretos de atendimento.',
        deliverables: 'Páginas sob medida · Formulário integrado · SEO estrutural',
      },
      {
        title: 'Portal de Serviços B2B',
        category: 'Consultorias e indústria',
        description:
          'Estrutura clara para explicar soluções técnicas complexas, apresentar diferenciais competitivos e qualificar pedidos de orçamento.',
        deliverables: 'Catálogo de soluções · Casos práticos · Captação comercial',
      },
      {
        title: 'Vitrine Digital de Produtos',
        category: 'Comércio e fabricantes',
        description:
          'Exposição organizada de linhas de produtos com filtros rápidos, fichas técnicas detalhadas e redirecionamento para vendedores.',
        deliverables: 'Filtros rápidos · Especificações · Integração com WhatsApp',
      },
      {
        title: 'Portal Editorial e Institucional',
        category: 'Conteúdo e autoridade',
        description:
          'Combinação de páginas institucionais com central de artigos, materiais educativos e biblioteca de recursos para clientes.',
        deliverables: 'Leitura otimizada · Categorias limpas · Gestão facilitada',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Diagnóstico e estrutura',
        description:
          'Mapeamos público, objetivos de negócio e o mapa completo de páginas para organizar a mensagem com clareza.',
      },
      {
        number: '02',
        title: 'Design de interface',
        description:
          'Criamos o layout responsivo alinhado à identidade visual da sua empresa, validando cada seção antes do código.',
      },
      {
        number: '03',
        title: 'Desenvolvimento e otimização',
        description:
          'Implementamos o site com foco em velocidade, acessibilidade, formulários validados e boas práticas de SEO.',
      },
      {
        number: '04',
        title: 'Publicação e acompanhamento',
        description:
          'Configuramos domínio, certificado de segurança e verificamos todo o funcionamento em ambiente real.',
      },
    ],
    ctaTitle: 'Pronto para renovar a presença digital da sua empresa?',
    ctaDescription:
      'Conte para nossa equipe o que seu novo site precisa comunicar e receba uma proposta sob medida para o seu projeto.',
    ctaButtonText: 'Solicitar orçamento de site',
    visualType: 'sites-preview',
  },
  {
    id: 'landing-pages',
    index: '02',
    navLabel: 'Landing Pages',
    title: 'Landing Pages',
    tagline: 'Páginas focadas em campanhas, captação de contatos e conversão',
    shortDescription:
      'Construímos páginas objetivas de alta conversão para campanhas de mídia paga, lançamentos de produtos e captação qualificada de leads.',
    focusAreas: ['Foco em conversão', 'Mídia paga e campanhas', 'Captação de leads'],
    heroHeadline: 'Landing pages projetadas para transformar cliques em oportunidades reais.',
    heroSummary:
      'Cada dobra, título e chamada para ação é desenhado com foco único: captar contatos qualificados e maximizar o retorno das suas campanhas.',
    presentationTitle: 'Estrutura direta, rápida e orientada a resultado comercial',
    presentationParagraphs: [
      'Quando sua empresa investe em anúncios, eventos ou lançamentos, enviar o tráfego para uma página genérica desperdiça verba e atenção. Uma landing page dedicada elimina distrações e conduz o visitante a uma única decisão.',
      'Na Koreo Tech, combinamos design persuasivo, leitura escaneável e carregamento instantâneo para criar páginas prontas para campanhas no Google, redes sociais e e-mail marketing.',
    ],
    benefits: [
      {
        title: 'Mensagem focada em uma única ação',
        description:
          'Fluxo narrativo sem ruídos que apresenta proposta de valor, benefícios e provas antes de conduzir ao formulário ou WhatsApp.',
      },
      {
        title: 'Velocidade crítica para anúncios',
        description:
          'Páginas leves que abrem rapidamente em conexões móveis, reduzindo desistências e melhorando o índice de qualidade das campanhas.',
      },
      {
        title: 'Formulários inteligentes e rastreamento',
        description:
          'Campos enxutos com validação imediata e preparação para eventos de conversão, pixels de mídia e integração com CRM.',
      },
      {
        title: 'Pronta para testes e melhorias',
        description:
          'Estrutura modular que facilita ajustar ofertas, títulos, depoimentos e variações de campanha conforme os resultados chegam.',
      },
    ],
    examples: [
      {
        title: 'Página de Captação de Leads B2B',
        category: 'Geração de demanda',
        description:
          'Desenhada para receber tráfego de busca e anúncios, qualificando contatos para reuniões comerciais ou diagnósticos.',
        deliverables: 'Copy orientada à oferta · Formulário qualificado · Mensuração',
      },
      {
        title: 'Landing Page de Lançamento',
        category: 'Produtos e serviços',
        description:
          'Página dedicada para apresentar uma novidade de mercado, detalhar diferenciais e abrir lista de espera ou vendas iniciais.',
        deliverables: 'Seções de destaque · FAQ objetivo · CTA imediato',
      },
      {
        title: 'Página de Campanha Sazonal',
        category: 'Ações promocionais',
        description:
          'Experiência direta para ofertas por tempo limitado, feiras comerciais ou campanhas regionais com foco em resposta rápida.',
        deliverables: 'Alta velocidade mobile · Botão WhatsApp · Acompanhamento',
      },
      {
        title: 'Página para Eventos e Webinars',
        category: 'Inscrições online',
        description:
          'Apresentação clara de programação, palestrantes e formulário de inscrição simplificado para aumentar a taxa de comparecimento.',
        deliverables: 'Agenda estruturada · Confirmação instantânea · Integração',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Objetivo e oferta',
        description:
          'Alinhamos o público da campanha, os argumentos principais e qual ação define a conversão ideal.',
      },
      {
        number: '02',
        title: 'Arquitetura persuasiva',
        description:
          'Organizamos a sequência de seções e o layout visual priorizando leitura rápida em smartphones e desktops.',
      },
      {
        number: '03',
        title: 'Construção e integrações',
        description:
          'Programamos a página com otimização de velocidade, formulários validados e conexão com ferramentas de análise.',
      },
      {
        number: '04',
        title: 'Entrega pronta para rodar',
        description:
          'Testamos todos os envios, eventos e dispositivos para você colocar sua campanha no ar com segurança.',
      },
    ],
    ctaTitle: 'Vai lançar uma campanha e precisa de conversão consistente?',
    ctaDescription:
      'Fale com a Koreo Tech para estruturar uma landing page rápida, clara e alinhada aos objetivos do seu time comercial.',
    ctaButtonText: 'Orçar minha landing page',
    visualType: 'landing-preview',
  },
  {
    id: 'sistemas',
    index: '03',
    navLabel: 'Sistemas',
    title: 'Sistemas',
    tagline: 'Sistemas web personalizados para organizar processos e operações',
    shortDescription:
      'Desenvolvemos sistemas web sob medida para centralizar dados, automatizar rotinas internas e dar visibilidade real à operação da empresa.',
    focusAreas: ['Gestão operacional', 'Painéis e relatórios', 'Integração de processos'],
    heroHeadline: 'Sistemas web sob medida para substituir planilhas soltas por controle real.',
    heroSummary:
      'Centralize cadastros, fluxos de aprovação, indicadores e equipes em um ambiente seguro, acessível pelo navegador e desenhado para a rotina do seu negócio.',
    presentationTitle: 'Tecnologia adaptada ao seu fluxo de trabalho, não o contrário',
    presentationParagraphs: [
      'Muitas empresas crescem apoiadas em planilhas manuais, mensagens dispersas e ferramentas que não conversam entre si. O resultado é retrabalho, falta de rastreabilidade e decisões lentas.',
      'A Koreo Tech projeta sistemas web personalizados que respeitam as regras exatas da sua operação, com perfis de acesso, histórico de ações e painéis claros para gestores e equipes trabalharem com previsibilidade.',
    ],
    benefits: [
      {
        title: 'Redução de retrabalho e erros manuais',
        description:
          'Automatize etapas repetitivas, validações de dados e notificações internas para a equipe focar no que gera valor.',
      },
      {
        title: 'Visibilidade em tempo real da operação',
        description:
          'Dashboards gerenciais e relatórios filtráveis que reúnem números confiáveis em um único painel de consulta.',
      },
      {
        title: 'Controle de acesso por perfil',
        description:
          'Permissões granulares para administradores, operadores, parceiros ou clientes visualizarem apenas o que compete à sua função.',
      },
      {
        title: 'Acesso direto pelo navegador',
        description:
          'Sem instalações complexas nas máquinas da equipe: basta abrir o navegador com login seguro de qualquer unidade da empresa.',
      },
    ],
    examples: [
      {
        title: 'Sistema de Gestão Operacional',
        category: 'Processos internos',
        description:
          'Controle de ordens de serviço, agenda de atendimentos, status de execução e histórico completo por cliente ou unidade.',
        deliverables: 'Fluxo por etapas · Perfis de equipe · Relatórios exportáveis',
      },
      {
        title: 'Portal do Cliente ou Parceiro',
        category: 'Relacionamento B2B',
        description:
          'Área autenticada onde clientes acompanham pedidos, acessam documentos, abrem solicitações e consultam faturas.',
        deliverables: 'Login seguro · Central de documentos · Histórico de chamados',
      },
      {
        title: 'CRM e Funil Comercial Sob Medida',
        category: 'Vendas e pós-venda',
        description:
          'Gestão de oportunidades, propostas, metas e acompanhamento de carteira ajustada ao ciclo comercial específico da empresa.',
        deliverables: 'Pipeline configurável · Alertas de retorno · Painel de metas',
      },
      {
        title: 'Painel Financeiro e Administrativo',
        category: 'Controle gerencial',
        description:
          'Consolidação de centros de custo, aprovações de despesas, contratos recorrentes e indicadores mensais de desempenho.',
        deliverables: 'Aprovações em níveis · Conciliação · Indicadores consolidados',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Mapeamento da operação',
        description:
          'Entendemos gargalos atuais, regras de negócio, perfis de usuário e integrações necessárias com ferramentas existentes.',
      },
      {
        number: '02',
        title: 'Prototipagem dos fluxos',
        description:
          'Desenhamos as telas principais, tabelas e fluxos operacionais para validar a usabilidade junto à sua equipe.',
      },
      {
        number: '03',
        title: 'Desenvolvimento em entregas',
        description:
          'Construímos o sistema por módulos funcionais, garantindo transparência, testes rigorosos e acompanhamento contínuo.',
      },
      {
        number: '04',
        title: 'Implantação e evolução',
        description:
          'Apoiamos a entrada em produção, orientamos o time usuário e preparamos o ambiente para novas funcionalidades.',
      },
    ],
    ctaTitle: 'Sua operação pede um sistema feito para a realidade da equipe?',
    ctaDescription:
      'Converse com nossos especialistas sobre os processos que você deseja organizar e desenhe a solução ideal com a Koreo Tech.',
    ctaButtonText: 'Planejar meu sistema web',
    visualType: 'systems-photo',
    imageSrc: MOBILE_SYSTEMS_IMAGE_PATH,
    imageAlt: 'Painel operacional em tablet e aplicativo sincronizado sobre mesa escura de estúdio',
  },
  {
    id: 'saas',
    index: '04',
    navLabel: 'SaaS',
    title: 'SaaS',
    tagline: 'Plataformas por assinatura, preparadas para crescer com os usuários',
    shortDescription:
      'Criamos produtos digitais no modelo Software as a Service com arquitetura multiempresa, gestão de planos e base preparada para escalar.',
    focusAreas: ['Arquitetura multi-tenant', 'Planos e assinaturas', 'Escala de produto'],
    heroHeadline: 'Plataformas SaaS projetadas desde o primeiro dia para escalar com segurança.',
    heroSummary:
      'Transformamos modelos de negócio recorrentes em plataformas web sólidas, com onboarding simples, gestão de assinaturas e infraestrutura preparada para novos clientes.',
    presentationTitle: 'Engenharia de produto para negócios digitais recorrentes',
    presentationParagraphs: [
      'Lançar um SaaS exige equilibrar velocidade de entrada no mercado com decisões técnicas maduras. Isolamento de dados entre clientes, controle de planos, métricas de uso e experiência intuitiva definem a retenção da plataforma.',
      'A Koreo Tech atua do MVP validado à plataforma consolidada, estruturando produtos digitais por assinatura prontos para receber dezenas ou milhares de contas com estabilidade.',
    ],
    benefits: [
      {
        title: 'Arquitetura multi-tenant organizada',
        description:
          'Separação segura de dados entre empresas assinantes, com permissões por equipe e administração centralizada da plataforma.',
      },
      {
        title: 'Gestão preparada para planos e cobranças',
        description:
          'Estrutura pronta para níveis de plano, limites de uso, períodos de teste e integração com meios de pagamento recorrente.',
      },
      {
        title: 'Onboarding claro que reduz cancelamentos',
        description:
          'Interfaces pensadas para o usuário perceber valor nos primeiros minutos de uso, diminuindo a curva de aprendizado.',
      },
      {
        title: 'Evolução contínua sem gargalos',
        description:
          'Código modular e documentação organizada para lançar novas versões, módulos adicionais e integrações via API com agilidade.',
      },
    ],
    examples: [
      {
        title: 'MVP SaaS para Validação de Mercado',
        category: 'Novos produtos digitais',
        description:
          'Primeira versão funcional com escopo enxuto e acabamento profissional para conquistar os primeiros clientes pagantes.',
        deliverables: 'Fluxo principal completo · Autenticação · Painel do assinante',
      },
      {
        title: 'Plataforma B2B Multiempresa',
        category: 'Software por assinatura',
        description:
          'Ambiente completo onde cada empresa cliente gerencia seus próprios usuários, dados, permissões e relatórios.',
        deliverables: 'Contas isoladas · Gestão de planos · Painel administrativo',
      },
      {
        title: 'Plataforma de Gestão de Nicho',
        category: 'Mercados especializados',
        description:
          'Solução recorrente voltada para clínicas, escritórios, academias, imobiliárias ou prestadores de serviço específicos.',
        deliverables: 'Módulos setoriais · Cobrança recorrente · Relatórios de uso',
      },
      {
        title: 'Marketplace ou Plataforma de Assinatura',
        category: 'Ecossistemas digitais',
        description:
          'Conexão entre prestadores, conteúdos ou ferramentas e usuários finais com áreas dedicadas para cada perfil.',
        deliverables: 'Múltiplos perfis · Área de membros · Integrações por API',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Descoberta de produto e escopo',
        description:
          'Definimos a proposta central do SaaS, priorizamos funcionalidades essenciais e estruturamos o roadmap de lançamento.',
      },
      {
        number: '02',
        title: 'UX/UI e arquitetura técnica',
        description:
          'Desenhamos a experiência do assinante e modelamos banco de dados, segurança multiempresa e regras de planos.',
      },
      {
        number: '03',
        title: 'Desenvolvimento iterativo',
        description:
          'Construímos a plataforma em ciclos curtos com entregas demonstráveis, testes de fluxos críticos e controle de qualidade.',
      },
      {
        number: '04',
        title: 'Lançamento e escala',
        description:
          'Colocamos a plataforma no ar com monitoramento básico e estrutura pronta para evoluir junto com o feedback dos usuários.',
      },
    ],
    ctaTitle: 'Tem uma ideia de SaaS ou quer evoluir sua plataforma atual?',
    ctaDescription:
      'Converse com a equipe da Koreo Tech para definir a arquitetura e o plano de construção do seu produto por assinatura.',
    ctaButtonText: 'Conversar sobre meu SaaS',
    visualType: 'saas-preview',
  },
  {
    id: 'aplicativos',
    index: '05',
    navLabel: 'Aplicativos',
    title: 'Aplicativos',
    tagline: 'Aplicativos mobile com experiências simples e funcionais',
    shortDescription:
      'Desenvolvemos aplicativos para smartphones focados em usabilidade, desempenho estável e jornadas simples no dia a dia dos usuários.',
    focusAreas: ['Android e iOS', 'Experiência mobile intuitiva', 'Integração em nuvem'],
    heroHeadline: 'Aplicativos mobile simples de usar e confiáveis na palma da mão.',
    heroSummary:
      'Criamos apps focados em resolver tarefas reais com poucos toques, interface leve, integração com sistemas web e suporte completo até a publicação.',
    presentationTitle: 'Mobilidade pensada para retenção e uso frequente',
    presentationParagraphs: [
      'Um aplicativo bem-sucedido respeita o tempo de quem usa: abre rápido, apresenta ações claras e funciona sem fricção tanto para clientes finais quanto para equipes em campo.',
      'Na Koreo Tech, projetamos aplicativos sob medida com design responsivo para telas móveis, comunicação segura com servidores em nuvem e manutenção simplificada para Android e iOS.',
    ],
    benefits: [
      {
        title: 'Navegação intuitiva pensada para o toque',
        description:
          'Fluxos objetivos, botões confortáveis e leitura clara para reduzir abandono e facilitar o uso diário.',
      },
      {
        title: 'Integração com painel web e APIs',
        description:
          'Sincronização de dados, pedidos, cadastros e notificações entre o aplicativo mobile e o sistema administrativo da empresa.',
      },
      {
        title: 'Desempenho consistente no cotidiano',
        description:
          'Telas responsivas, tratamento cuidadoso de carregamento e consumo equilibrado de dados e bateria.',
      },
      {
        title: 'Acompanhamento até as lojas',
        description:
          'Orientação técnica na preparação de versões, requisitos das lojas de aplicativos e plano de atualizações futuras.',
      },
    ],
    examples: [
      {
        title: 'Aplicativo de Relacionamento com Clientes',
        category: 'Serviços e fidelização',
        description:
          'Agendamentos, acompanhamento de pedidos, notificações úteis e histórico de atendimento direto no celular do cliente.',
        deliverables: 'Login facilitado · Notificações push · Área do cliente',
      },
      {
        title: 'App para Equipes em Campo',
        category: 'Operação externa',
        description:
          'Checklists de visitas, registro de ocorrências, envio de fotos e atualização de ordens de serviço fora do escritório.',
        deliverables: 'Formulários móveis · Registro em campo · Sincronização web',
      },
      {
        title: 'Aplicativo de Serviços Sob Demanda',
        category: 'Produtos digitais',
        description:
          'Conexão rápida entre usuários e prestadores, com solicitação em etapas simples, status em tempo real e histórico.',
        deliverables: 'Jornada de pedido · Acompanhamento · Painel gestor',
      },
      {
        title: 'App Complementar de Plataforma Web',
        category: 'Extensão mobile',
        description:
          'Versão móvel conectada ao seu sistema ou SaaS atual para consultas rápidas, aprovações e alertas importantes.',
        deliverables: 'API integrada · Consultas rápidas · Aprovações no celular',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Jornada do usuário mobile',
        description:
          'Definimos quais tarefas fazem sentido no celular e simplificamos cada fluxo para exigir o mínimo de etapas.',
      },
      {
        number: '02',
        title: 'Protótipo navegável',
        description:
          'Construímos as telas do app com hierarquia visual clara para validar a experiência antes do desenvolvimento.',
      },
      {
        number: '03',
        title: 'Programação e testes em dispositivos',
        description:
          'Desenvolvemos o aplicativo e suas integrações de servidor, validando usabilidade e estabilidade em aparelhos reais.',
      },
      {
        number: '04',
        title: 'Publicação e evolução',
        description:
          'Apoiamos a disponibilização nas lojas e deixamos a base preparada para melhorias contínuas conforme o uso cresce.',
      },
    ],
    ctaTitle: 'Quer levar o serviço da sua empresa para o celular dos usuários?',
    ctaDescription:
      'Compartilhe sua ideia com a Koreo Tech e descubra o melhor caminho técnico para tirar seu aplicativo do papel.',
    ctaButtonText: 'Solicitar orçamento de aplicativo',
    visualType: 'mobile-photo',
    imageSrc: MOBILE_SYSTEMS_IMAGE_PATH,
    imageAlt: 'Smartphone apresentando aplicativo mobile moderno ao lado de painel administrativo em estúdio escuro',
  },
  {
    id: 'softwares',
    index: '06',
    navLabel: 'Softwares',
    title: 'Softwares',
    tagline: 'Soluções personalizadas para necessidades específicas de cada negócio',
    shortDescription:
      'Engenharia de software sob medida para automações, integrações entre sistemas, ferramentas corporativas e demandas técnicas específicas.',
    focusAreas: ['Automação sob medida', 'Integrações e APIs', 'Arquitetura dedicada'],
    heroHeadline: 'Softwares personalizados quando ferramentas prontas não atendem o seu negócio.',
    heroSummary:
      'Desenvolvemos soluções dedicadas para regras complexas, automação de fluxos críticos e integração entre plataformas que precisam trabalhar juntas.',
    presentationTitle: 'Engenharia dedicada para desafios técnicos específicos',
    presentationParagraphs: [
      'Toda empresa com processos maduros chega a um ponto em que softwares de prateleira impõem limites caros ou forçam adaptações improvisadas. É nesse momento que uma solução sob medida gera vantagem real.',
      'Na Koreo Tech, desenhamos e construímos softwares personalizados, APIs e camadas de integração com código sustentável, documentação clara e total aderência às regras do seu negócio.',
    ],
    benefits: [
      {
        title: 'Aderência total às regras do negócio',
        description:
          'Cada cálculo, fluxo de dados e validação reflete exatamente como sua empresa opera, sem gambiarras ou limitações artificiais.',
      },
      {
        title: 'Integração entre ferramentas existentes',
        description:
          'Conectamos ERPs, bancos de dados, planilhas, gateways e plataformas externas para eliminar digitação duplicada.',
      },
      {
        title: 'Propriedade e autonomia tecnológica',
        description:
          'Solução construída para o seu cenário, sem depender de licenças inflexíveis ou recursos bloqueados por terceiros.',
      },
      {
        title: 'Segurança e confiabilidade estrutural',
        description:
          'Boas práticas de engenharia, controle de versões, logs claros e arquitetura preparada para manutenção de longo prazo.',
      },
    ],
    examples: [
      {
        title: 'Motor de Automação de Processos',
        category: 'Eficiência operacional',
        description:
          'Rotinas automatizadas para geração de relatórios, conferência de documentos, importação de lotes e disparo de alertas.',
        deliverables: 'Regras customizadas · Processamento seguro · Auditoria',
      },
      {
        title: 'Camada de Integração e APIs',
        category: 'Conectividade de sistemas',
        description:
          'Desenvolvimento de APIs sob medida e conectores para sincronizar dados entre plataformas comerciais, financeiras e logísticas.',
        deliverables: 'API documentada · Webhooks · Sincronização confiável',
      },
      {
        title: 'Ferramenta Técnica ou Calculador Dedicado',
        category: 'Engenharia e precificação',
        description:
          'Software específico para orçamentação complexa, simulação de cenários, análise de insumos ou regras comerciais próprias.',
        deliverables: 'Cálculos precisos · Exportação de propostas · Histórico',
      },
      {
        title: 'Modernização de Software Legado',
        category: 'Evolução tecnológica',
        description:
          'Reestruturação gradual de ferramentas antigas para interfaces atuais, arquitetura segura e manutenção simplificada.',
        deliverables: 'Migração planejada · Nova interface · Menor risco técnico',
      },
    ],
    process: [
      {
        number: '01',
        title: 'Imersão técnica e requisitos',
        description:
          'Estudamos em profundidade o problema, os sistemas envolvidos, o volume de dados e os critérios de sucesso.',
      },
      {
        number: '02',
        title: 'Desenho da arquitetura',
        description:
          'Definimos tecnologias, integrações, segurança e plano de entregas por marcos claros e verificáveis.',
      },
      {
        number: '03',
        title: 'Engenharia e validação',
        description:
          'Implementamos o software com revisões técnicas, testes em cenários reais e validação contínua com sua equipe.',
      },
      {
        number: '04',
        title: 'Implantação e suporte técnico',
        description:
          'Realizamos a entrega assistida, documentação essencial e acompanhamento para garantir estabilidade na rotina.',
      },
    ],
    ctaTitle: 'Tem um desafio técnico específico que precisa de solução sob medida?',
    ctaDescription:
      'Apresente sua demanda para a equipe de engenharia da Koreo Tech e vamos estruturar a arquitetura ideal para resolvê-la.',
    ctaButtonText: 'Falar sobre software sob medida',
    visualType: 'software-photo',
    imageSrc: CUSTOM_SOFTWARE_IMAGE_PATH,
    imageAlt: 'Arquitetura modular em vidro escuro e linhas luminosas azuis e violetas representando software sob medida',
  },
];

export function getServiceById(id: ServiceId): ServiceDetail {
  const found = SERVICES.find((service) => service.id === id);
  return found ?? SERVICES[0];
}

export function getPageIdFromHash(hashValue: string): PageId {
  const cleaned = hashValue.replace(/^#\/?/, '').trim().toLowerCase();
  const match = NAV_ITEMS.find((item) => item.hash === cleaned || item.id === cleaned);
  return match ? match.id : 'home';
}

export function getHashFromPageId(pageId: PageId): string {
  const match = NAV_ITEMS.find((item) => item.id === pageId);
  return match ? `#${match.hash}` : '#home';
}
