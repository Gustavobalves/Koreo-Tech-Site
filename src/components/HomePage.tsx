import { useState } from 'react';
import { ArrowRight, Code2, Compass, Layers, ShieldCheck } from 'lucide-react';
import {
  CUSTOM_SOFTWARE_IMAGE_PATH,
  HERO_IMAGE_PATH,
  SERVICES,
  type PageId,
  type ServiceId,
} from '../data/services';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onStartProject: (serviceId?: ServiceId) => void;
}

const ENGINEERING_PILLARS = [
  {
    number: '01',
    title: 'Arquitetura pensada para durar',
    description:
      'Código organizado, seguro e fácil de manter para que seu site, sistema ou plataforma evolua junto com a empresa.',
    icon: Layers,
  },
  {
    number: '02',
    title: 'Clareza de ponta a ponta',
    description:
      'Escopo bem definido, marcos de entrega objetivos e comunicação direta com quem projeta e desenvolve a solução.',
    icon: Compass,
  },
  {
    number: '03',
    title: 'Experiência fluida em toda tela',
    description:
      'Interfaces limpas, rápidas e acessíveis em celulares, tablets e computadores, sem complexidade desnecessária.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Segurança e estabilidade',
    description:
      'Boas práticas de engenharia, validação rigorosa e acompanhamento na entrada em produção para operar com tranquilidade.',
    icon: ShieldCheck,
  },
];

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
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        {/* Background Tech Image with Measured Dark-Blue Scrim */}
        <div className="absolute inset-0">
          {!heroImgError ? (
            <img
              src={HERO_IMAGE_PATH}
              alt="Equipe de engenharia de software da Koreo Tech desenvolvendo interfaces digitais e código em estúdio moderno"
              referrerPolicy="no-referrer"
              onError={() => setHeroImgError(true)}
              className="h-full w-full object-cover object-center"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#07112B] via-[#060913] to-[#170F2E]" />
          )}
          {/* Layered dark-blue/slate scrim for crisp WCAG AA+ legibility */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#050814]/95 via-[#071024]/86 to-[#0B1229]/72"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-[#060913]/55"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-10 bottom-0 h-80 w-80 rounded-full bg-violet-600/18 blur-3xl"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-sky-300">
              Koreo Tech · Engenharia de software e produtos digitais
            </p>

            <h1 className="mt-5 font-display text-[clamp(2.25rem,4.6vw,4rem)] font-bold leading-[1.08] tracking-tight text-white">
              Tecnologia sob medida para tirar suas ideias do papel.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
              A Koreo Tech cria sites, sistemas, plataformas SaaS, aplicativos e softwares para ajudar empresas a crescer.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToServices}
                className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(59,130,246,0.35)] transition-all duration-150 hover:from-blue-500 hover:to-violet-500 whitespace-nowrap"
              >
                Conheça nossos serviços
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('contato')}
                className="inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-[#060913]/60 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-150 hover:border-sky-400/50 hover:bg-white/[0.06] whitespace-nowrap"
              >
                Fale com a equipe
              </button>
            </div>
          </div>

          {/* Quiet Horizontal Overview Strip */}
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/12 pt-8 sm:grid-cols-4">
            {[
              { value: '6 frentes', label: 'Especialidades independentes' },
              { value: '100% sob medida', label: 'Código adaptado ao negócio' },
              { value: 'Web e mobile', label: 'Experiência responsiva' },
              { value: 'Escopo claro', label: 'Do diagnóstico à entrega' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-display text-lg font-semibold text-white tabular-nums">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-slate-300">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Overview (Asymmetric Editorial Bento Grid) */}
      <section
        id="servicos-visao-geral"
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-sky-400">
              Especialidades da Koreo Tech
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Soluções dedicadas para cada etapa da sua presença e operação digital.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-400">
            Cada frente possui página própria com escopo, benefícios, exemplos de projetos e processo de desenvolvimento.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
          {SERVICES.map((service, idx) => {
            // Intentional asymmetric desktop rhythm: 7+5, 5+7, 6+6
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
                className={`${spanClasses} group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0B1122] p-7 transition-colors duration-150 hover:border-blue-400/35 hover:bg-[#0E162B]`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono text-xs font-medium text-sky-400 tabular-nums">
                      {service.index}
                    </span>
                    <span className="text-xs text-slate-400">
                      {service.focusAreas.join(' · ')}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-blue-200/90">
                    {service.tagline}
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="mt-7 flex items-center justify-between border-t border-white/[0.06] pt-5">
                  <button
                    type="button"
                    onClick={() => onNavigate(service.id)}
                    className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 text-sm font-semibold text-sky-300 transition-colors hover:text-white"
                  >
                    Explorar {service.title}
                    <ArrowRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Engineering Approach & Value Section */}
      <section className="border-y border-white/[0.08] bg-[#080E1D]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
            {/* Visual Anchor */}
            <div className="lg:col-span-5">
              <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0B1224]">
                {!studioImgError ? (
                  <>
                    <img
                      src={CUSTOM_SOFTWARE_IMAGE_PATH}
                      alt="Representação modular de arquitetura de software sob medida da Koreo Tech"
                      referrerPolicy="no-referrer"
                      onError={() => setStudioImgError(true)}
                      className="h-full w-full object-cover object-center"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#060913]/90 via-[#060913]/30 to-transparent"
                    />
                  </>
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-blue-950/60 via-[#091022] to-violet-950/60" />
                )}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs font-medium text-sky-300">
                    Método Koreo Tech
                  </p>
                  <p className="mt-2 font-display text-xl font-semibold text-white">
                    Do primeiro rascunho até a operação em produção, sem caixas-pretas.
                  </p>
                </div>
              </div>
            </div>

            {/* Structured Engineering Pillars */}
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="text-sm font-medium text-violet-300">
                  Como desenvolvemos
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white">
                  Compromisso técnico com resultado real para o seu negócio.
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-base">
                  Antes de escrever código, entendemos a operação, o público e os objetivos comerciais de cada cliente. Assim entregamos projetos sustentáveis, rápidos e prontos para crescer.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {ENGINEERING_PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.number}
                      className="rounded-xl border border-white/[0.07] bg-[#0B1224]/90 p-5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-medium text-sky-400 tabular-nums">
                          {pillar.number}
                        </span>
                        <Icon className="h-4 w-4 text-violet-300" aria-hidden="true" />
                      </div>
                      <h3 className="mt-3 font-display text-base font-semibold text-white">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {pillar.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Band */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-[#0D1732] via-[#0B1226] to-[#171132] p-8 sm:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"
          />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-sky-300">
                Próximo passo
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Vamos conversar sobre o próximo projeto digital da sua empresa?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                Envie os detalhes da sua ideia ou demanda operacional. Nossa equipe analisa o cenário e retorna com uma proposta técnica clara.
              </p>
            </div>
            <div className="shrink-0">
              <button
                type="button"
                onClick={() => onStartProject()}
                className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.3)] transition-all duration-150 hover:from-blue-500 hover:to-violet-500 whitespace-nowrap"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
