import { ArrowLeft, ArrowRight } from 'lucide-react';
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

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060913]';

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
      <section className="border-b border-white/10 bg-[#060913]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {/* Clean Breadcrumb */}
          <nav
            aria-label="Caminho da página"
            className="flex items-center gap-2 text-sm text-slate-300"
          >
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className={`cursor-pointer rounded transition-colors duration-150 hover:text-sky-300 ${focusRing}`}
            >
              Início
            </button>
            <span aria-hidden="true">/</span>
            <span className="font-medium text-white">{service.title}</span>
          </nav>

          <div className="mt-8 grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12">
            <div className="flex flex-col justify-between lg:col-span-7">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-sky-400">
                  <span>{service.title}</span>
                  <span aria-hidden="true" className="text-slate-500">·</span>
                  <span className="text-sky-300">{service.deliveryEstimate}</span>
                </div>

                <h1 className="mt-4 font-display text-[clamp(2.25rem,4.2vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight text-white">
                  {service.heroHeadline}
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg">
                  {service.heroSummary}
                </p>

                <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
                  <h2 className="font-display text-xl font-bold text-white sm:text-2xl">
                    {service.presentationTitle}
                  </h2>
                  {service.presentationParagraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-2xl text-base leading-relaxed text-slate-300"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={() => onRequestQuote(service.id)}
                  className={`inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-md bg-[#2563EB] px-6 py-3 text-base font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] whitespace-nowrap ${focusRing}`}
                >
                  {service.ctaButtonText}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </button>
                <span className="text-sm text-slate-300">
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
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-sky-400">
            Benefícios diretos
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            O que entregamos em {service.title.toLowerCase()}.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {service.benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-lg border border-white/10 bg-[#0B1122] p-7 transition-colors duration-150 hover:border-white/25"
            >
              <h3 className="font-display text-xl font-bold text-white">
                {benefit.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Examples of What Can Be Developed */}
      <section className="border-y border-white/10 bg-[#080E1D]">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-wide text-sky-400">
                Escopos frequentes
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Projetos que desenvolvemos em {service.title}.
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-slate-300">
              Clique em um exemplo para abrir o formulário de orçamento já preenchido com esse escopo.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {service.examples.map((example) => (
              <article
                key={example.title}
                className="flex flex-col justify-between rounded-lg border border-white/10 bg-[#0B1224] p-7 transition-colors duration-150 hover:border-white/25"
              >
                <div>
                  <p className="text-sm font-semibold text-sky-400">
                    {example.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white">
                    {example.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate-300">
                    {example.description}
                  </p>
                </div>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <p className="text-sm text-slate-300">{example.deliverables}</p>
                  <button
                    type="button"
                    onClick={() => onRequestQuote(service.id, example.title)}
                    className={`mt-4 inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-md text-base font-semibold text-sky-300 transition-colors duration-150 hover:text-white ${focusRing}`}
                  >
                    Quero um projeto parecido
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Summarized Work Process */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide text-sky-400">
            Etapas de trabalho
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Do escopo fechado até a publicação.
          </h2>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {service.process.map((step) => (
            <li
              key={step.number}
              className="rounded-lg border border-white/10 bg-[#0B1122] p-7 transition-colors duration-150 hover:border-white/25"
            >
              <span className="font-mono text-sm font-semibold text-sky-400 tabular-nums">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-300">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Service CTA Banner */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-white/15 bg-[#0B1122] p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {service.ctaTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg">
                {service.ctaDescription}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onRequestQuote(service.id)}
              className={`inline-flex min-h-[48px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md bg-[#2563EB] px-6 py-3 text-base font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] whitespace-nowrap ${focusRing}`}
            >
              {service.ctaButtonText}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Adjacent Service Navigation */}
        <div className="mt-12 grid grid-cols-1 gap-4 border-t border-white/10 pt-10 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => onNavigate(previousService.id)}
            className={`flex min-h-[76px] cursor-pointer items-center gap-4 rounded-lg border border-white/10 bg-[#0B1122] px-6 py-4 text-left transition-colors duration-150 hover:border-white/25 ${focusRing}`}
          >
            <ArrowLeft className="h-5 w-5 shrink-0 text-sky-400" aria-hidden="true" />
            <div className="min-w-0">
              <p className="text-sm text-slate-300">Serviço anterior</p>
              <p className="truncate font-display text-lg font-bold text-white">
                {previousService.title}
              </p>
            </div>
          </button>

          <button
            type="button"
            onClick={() => onNavigate(nextService.id)}
            className={`flex min-h-[76px] cursor-pointer items-center justify-end gap-4 rounded-lg border border-white/10 bg-[#0B1122] px-6 py-4 text-right transition-colors duration-150 hover:border-white/25 ${focusRing}`}
          >
            <div className="min-w-0">
              <p className="text-sm text-slate-300">Próximo serviço</p>
              <p className="truncate font-display text-lg font-bold text-white">
                {nextService.title}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 shrink-0 text-sky-400" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
}
