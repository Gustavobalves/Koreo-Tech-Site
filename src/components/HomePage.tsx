import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  CUSTOM_SOFTWARE_IMAGE_PATH,
  HERO_IMAGE_PATH,
  PORTFOLIO_PROJECTS,
  SERVICES,
  TESTIMONIALS,
  type PageId,
  type ServiceId,
} from '../data/services';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onStartProject: (serviceId?: ServiceId, context?: string) => void;
}

const ENGINEERING_PILLARS = [
  {
    number: '01',
    title: 'Escopo e prazo fechados na proposta',
    description:
      'Antes de iniciar, você recebe a lista exata de entregas, o cronograma em semanas e o valor total sem surpresas.',
  },
  {
    number: '02',
    title: 'Entregas semanais para validação',
    description:
      'Você acompanha o projeto em ambiente de testes toda semana e aprova cada tela antes da etapa seguinte.',
  },
  {
    number: '03',
    title: 'Código próprio e documentado',
    description:
      'Repositório organizado e propriedade total do código para sua empresa manter ou expandir quando precisar.',
  },
  {
    number: '04',
    title: 'Publicação e suporte inicial',
    description:
      'Configuramos domínio, certificado SSL, testes em produção e acompanhamos a estabilidade após o lançamento.',
  },
];

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060913]';

export function HomePage({ onNavigate, onStartProject }: HomePageProps) {
  const [heroImgError, setHeroImgError] = useState(false);
  const [studioImgError, setStudioImgError] = useState(false);

  const scrollToServices = () => {
    const element = document.getElementById('servicos-visao-geral');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-white/10 bg-[#060913]">
        <div className="absolute inset-0">
          {!heroImgError ? (
            <img
              src={HERO_IMAGE_PATH}
              alt="Equipe da Koreo Tech desenvolvendo interfaces digitais e código em estúdio"
              referrerPolicy="no-referrer"
              onError={() => setHeroImgError(true)}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <div className="h-full w-full bg-[#060913]" />
          )}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[#060913]/82"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-sky-300">
              Koreo Tech · Engenharia de software para empresas
            </p>

            <h1 className="mt-5 font-display text-[clamp(2.5rem,5vw,4.35rem)] font-extrabold leading-[1.06] tracking-tight text-white">
              Sites, sistemas e aplicativos entregues no prazo combinado.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">
              Construímos landing pages em 1 a 2 semanas, sites institucionais em 3 a 5 semanas e sistemas web ou MVPs em 4 a 8 semanas — com escopo claro e código próprio.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onStartProject()}
                className={`inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-md bg-[#2563EB] px-6 py-3 text-base font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] whitespace-nowrap ${focusRing}`}
              >
                Solicitar orçamento
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={scrollToServices}
                className={`inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-md border border-white/25 bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors duration-150 hover:border-white/50 whitespace-nowrap ${focusRing}`}
              >
                Ver os 6 serviços
              </button>
            </div>
          </div>

          {/* Concrete delivery strip */}
          <div className="mt-16 grid grid-cols-1 gap-6 border-t border-white/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '1 a 2 semanas', label: 'Landing pages para campanhas' },
              { value: '3 a 5 semanas', label: 'Sites institucionais completos' },
              { value: '4 a 8 semanas', label: 'Sistemas web e automações' },
              { value: 'Retorno em 1 dia útil', label: 'Orçamento com prazo definido' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display text-xl font-bold text-white tabular-nums">
                  {item.value}
                </p>
                <p className="mt-1 text-sm text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Overview */}
      <section
        id="servicos-visao-geral"
        className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      >
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-sky-400">
              Serviços da Koreo Tech
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Seis frentes de desenvolvimento com escopo claro.
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-slate-300">
            Cada frente possui página detalhada com prazos médios, exemplos práticos e etapas de entrega.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-12">
          {SERVICES.map((service, idx) => {
            const spanClasses = [
              'md:col-span-7',
              'md:col-span-5',
              'md:col-span-5',
              'md:col-span-7',
              'md:col-span-6',
              'md:col-span-6',
            ][idx];

            return (
              <article
                key={service.id}
                className={`${spanClasses} flex flex-col justify-between rounded-lg border border-white/10 bg-[#0B1122] p-8 transition-colors duration-150 hover:border-white/25`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-sm font-semibold text-sky-400 tabular-nums">
                      {service.index}
                    </span>
                    <span className="text-sm font-medium text-sky-300">
                      {service.deliveryEstimate}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-base font-medium text-blue-200">
                    {service.tagline}
                  </p>

                  <p className="mt-3 text-base leading-relaxed text-slate-300">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                  <button
                    type="button"
                    onClick={() => onNavigate(service.id)}
                    className={`inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-md text-base font-semibold text-sky-300 transition-colors duration-150 hover:text-white ${focusRing}`}
                  >
                    Ver detalhes de {service.navLabel}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Portfolio / Case Studies Section */}
      <section
        id="projetos"
        className="border-y border-white/10 bg-[#080E1D]"
      >
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-wide text-sky-400">
                Portfólio e resultados
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Projetos entregues: o problema e o resultado.
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-slate-300">
              Espaço preparado para apresentar seus casos reais com capa, contexto do cliente e resultado obtido.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
            {PORTFOLIO_PROJECTS.map((project) => (
              <article
                key={project.id}
                className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0B1122] transition-colors duration-150 hover:border-white/25"
              >
                {/* Project Cover Slot */}
                <div className="relative aspect-[16/10] w-full border-b border-white/10 bg-[#070C19]">
                  {project.coverImage ? (
                    <img
                      src={project.coverImage}
                      alt={`Capa do projeto ${project.client}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center p-6 text-center">
                      <p className="max-w-xs text-sm text-slate-300">
                        {project.coverPlaceholder}
                      </p>
                    </div>
                  )}
                </div>

                {/* Project Body */}
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-sky-400">
                        {project.serviceLabel}
                      </span>
                      <span className="text-sm text-slate-300">
                        {project.timeline}
                      </span>
                    </div>

                    <h3 className="mt-3 font-display text-2xl font-bold text-white">
                      {project.client}
                    </h3>

                    <dl className="mt-5 space-y-4 border-t border-white/10 pt-5">
                      <div>
                        <dt className="text-sm font-semibold text-white">
                          Problema
                        </dt>
                        <dd className="mt-1 text-base leading-relaxed text-slate-300">
                          {project.problem}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-sm font-semibold text-sky-300">
                          Resultado
                        </dt>
                        <dd className="mt-1 text-base leading-relaxed text-slate-200">
                          {project.result}
                        </dd>
                      </div>
                    </dl>
                  </div>

                  <div className="mt-7 border-t border-white/10 pt-5">
                    <button
                      type="button"
                      onClick={() =>
                        onStartProject(project.serviceId, project.client)
                      }
                      className={`inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-md text-base font-semibold text-sky-300 transition-colors duration-150 hover:text-white ${focusRing}`}
                    >
                      Quero um projeto parecido
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section
        id="como-trabalhamos"
        className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32"
      >
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
          {/* Visual Anchor */}
          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-[#0B1122]">
              {!studioImgError ? (
                <>
                  <img
                    src={CUSTOM_SOFTWARE_IMAGE_PATH}
                    alt="Arquitetura modular de software da Koreo Tech"
                    referrerPolicy="no-referrer"
                    onError={() => setStudioImgError(true)}
                    className="h-full w-full object-cover object-center"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-[#060913]/65"
                  />
                </>
              ) : (
                <div className="h-full w-full bg-[#0B1122]" />
              )}
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-sm font-semibold text-sky-300">
                  Processo transparente
                </p>
                <p className="mt-2 font-display text-2xl font-bold text-white">
                  Você acompanha cada entrega semanal direto com quem desenvolve.
                </p>
              </div>
            </div>
          </div>

          {/* Structured Engineering Pillars */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-sm font-semibold tracking-wide text-sky-400">
                Como trabalhamos
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Método previsível, prazo real e comunicação direta.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Mapeamos o escopo antes de escrever código, validamos o design com sua equipe e entregamos em ciclos semanais até a publicação.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {ENGINEERING_PILLARS.map((pillar) => (
                <div
                  key={pillar.number}
                  className="rounded-lg border border-white/10 bg-[#0B1122] p-6 transition-colors duration-150 hover:border-white/25"
                >
                  <span className="font-mono text-sm font-semibold text-sky-400 tabular-nums">
                    {pillar.number}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-bold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-300">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-y border-white/10 bg-[#080E1D]">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-sky-400">
              Depoimentos
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              O que clientes dizem após a entrega.
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <figure
                key={testimonial.id}
                className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#0B1122] p-8 transition-colors duration-150 hover:border-white/25"
              >
                <blockquote className="text-base leading-relaxed text-slate-200">
                  {testimonial.quote}
                </blockquote>

                <figcaption className="mt-8 border-t border-white/10 pt-5">
                  <p className="font-display text-lg font-bold text-white">
                    {testimonial.author}
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Final Conversion Band */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="rounded-lg border border-white/15 bg-[#0B1122] p-8 sm:p-14">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-sky-300">
                Próximo passo
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Receba uma proposta com escopo e prazo em até 1 dia útil.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                Envie o resumo do que sua empresa precisa. Respondemos com etapas, prazo estimado e investimento fechado.
              </p>
            </div>
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => onStartProject()}
                className={`inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-md bg-[#2563EB] px-6 py-3 text-base font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] whitespace-nowrap ${focusRing}`}
              >
                Solicitar orçamento
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
