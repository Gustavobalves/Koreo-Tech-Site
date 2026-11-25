import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  SERVICES,
  type PageId,
  type ServiceDetail,
  type ServiceId,
} from '../data/services';
import { ServiceVisual } from './ServiceVisual';

interface ServicePageProps {
  service: ServiceDetail;
  onNavigate: (page: PageId) => void;
  onRequestQuote: (serviceId: ServiceId, exampleTitle?: string) => void;
}

export function ServicePage({
  service,
  onNavigate,
  onRequestQuote,
}: ServicePageProps) {
  const currentIndex = SERVICES.findIndex((item) => item.id === service.id);
  const previousService =
    SERVICES[(currentIndex - 1 + SERVICES.length) % SERVICES.length];
  const nextService = SERVICES[(currentIndex + 1) % SERVICES.length];

  return (
    <div>
      {/* Service Hero & Clear Presentation */}
      <section className="relative overflow-hidden border-b border-white/[0.08]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 left-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-violet-600/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          {/* Clean Breadcrumb */}
          <nav aria-label="Caminho da página" className="flex items-center gap-2 text-xs text-slate-400">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="cursor-pointer transition-colors hover:text-sky-300"
            >
              Home
            </button>
            <span aria-hidden="true">/</span>
            <span className="text-slate-200">{service.title}</span>
          </nav>

          <div className="mt-8 grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <p className="text-sm font-medium text-sky-400">
                  {service.index}. {service.title} · {service.tagline}
                </p>

                <h1 className="mt-4 font-display text-[clamp(2rem,3.8vw,3.35rem)] font-bold leading-[1.1] tracking-tight text-white">
                  {service.heroHeadline}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
                  {service.heroSummary}
                </p>

                <div className="mt-7 space-y-4 border-t border-white/[0.08] pt-6">
                  <h2 className="font-display text-lg font-semibold text-white">
                    {service.presentationTitle}
                  </h2>
                  {service.presentationParagraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-2xl text-sm leading-relaxed text-slate-400 sm:text-[15px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onRequestQuote(service.id)}
                  className="inline-flex min-h-[46px] cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.3)] transition-all duration-150 hover:from-blue-500 hover:to-violet-500 whitespace-nowrap"
                >
                  {service.ctaButtonText}
                  <ArrowRight className="h-4 w-4" />
                </button>
                <span className="text-xs text-slate-400">
                  {service.focusAreas.join(' · ')}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ServiceVisual service={service} />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for the Client */}
      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-sky-400">
            Benefícios para sua empresa
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            O que você ganha ao desenvolver {service.title.toLowerCase()} com a Koreo Tech
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {service.benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-white/[0.08] bg-[#0B1122] p-6"
            >
              <div className="flex items-start gap-3.5">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 shrink-0 text-sky-400"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Examples of What Can Be Developed */}
      <section className="border-y border-white/[0.08] bg-[#080E1D]">
        <div className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-violet-300">
                Possibilidades de aplicação
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Exemplos do que podemos desenvolver em {service.title}
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-400">
              Selecione um exemplo para iniciar o orçamento com o contexto já preenchido na aba de Contato.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {service.examples.map((example) => (
              <article
                key={example.title}
                className="flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0B1224] p-6 transition-colors duration-150 hover:border-blue-400/35"
              >
                <div>
                  <p className="text-xs font-medium text-sky-400">
                    {example.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white">
                    {example.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {example.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/[0.06] pt-4">
                  <p className="text-xs text-slate-500">{example.deliverables}</p>
                  <button
                    type="button"
                    onClick={() => onRequestQuote(service.id, example.title)}
                    className="mt-3 inline-flex min-h-[38px] cursor-pointer items-center gap-1.5 text-sm font-semibold text-sky-300 transition-colors hover:text-white"
                  >
                    Quero um projeto parecido
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Summarized Work Process */}
      <section className="mx-auto max-w-7xl px-4 py-18 sm:px-6 lg:px-8 lg:py-22">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-sky-400">
            Processo resumido de trabalho
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Etapas claras do planejamento até a entrega
          </h2>
        </div>

        <ol className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step) => (
            <li
              key={step.number}
              className="rounded-2xl border border-white/[0.08] bg-[#0B1122] p-6"
            >
              <span className="font-mono text-sm font-semibold text-sky-400 tabular-nums">
                {step.number}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Service CTA Banner */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-blue-400/20 bg-gradient-to-br from-[#0D1732] via-[#0B1226] to-[#171132] p-8 sm:p-11">
          <div className="relative flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {service.ctaTitle}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {service.ctaDescription}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onRequestQuote(service.id)}
              className="inline-flex min-h-[48px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.3)] transition-all duration-150 hover:from-blue-500 hover:to-violet-500 whitespace-nowrap"
            >
              {service.ctaButtonText}
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Adjacent Service Navigation */}
        <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/[0.08] pt-8 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => onNavigate(previousService.id)}
            className="flex min-h-[68px] cursor-pointer items-center gap-4 rounded-xl border border-white/[0.07] bg-[#0B1122] px-5 py-4 text-left transition-colors hover:border-blue-400/35"
          >
            <ArrowLeft className="h-4 w-4 shrink-0 text-sky-400" />
            <div className="min-w-0">
              <p className="text-xs text-slate-400">Serviço anterior</p>
              <p className="truncate font-display text-base font-semibold text-white">
                {previousService.title}
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate(nextService.id)}
            className="flex min-h-[68px] cursor-pointer items-center justify-end gap-4 rounded-xl border border-white/[0.07] bg-[#0B1122] px-5 py-4 text-right transition-colors hover:border-blue-400/35"
          >
            <div className="min-w-0">
              <p className="text-xs text-slate-400">Próximo serviço</p>
              <p className="truncate font-display text-base font-semibold text-white">
                {nextService.title}
              </p>
            </div>
            <ArrowRight className="h-4 w-4 shrink-0 text-sky-400" />
          </button>
        </div>
      </section>
    </div>
  );
}
