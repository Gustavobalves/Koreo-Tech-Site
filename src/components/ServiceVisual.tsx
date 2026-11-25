import { useState } from 'react';
import {
  Check,
  Code2,
  Layers,
  Layout,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import type { ServiceDetail } from '../data/services';

interface ServiceVisualProps {
  service: ServiceDetail;
}

export function ServiceVisual({ service }: ServiceVisualProps) {
  const [imageError, setImageError] = useState(false);

  if (service.visualType === 'sites-preview') {
    return (
      <div className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0B1224] p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl"
        />

        {/* Browser Header */}
        <div className="relative flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Layout className="h-3.5 w-3.5 text-sky-400" />
            <span>Arquitetura responsiva institucional</span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">
            Desktop · Tablet · Mobile
          </span>
        </div>

        {/* Multi-viewport editorial composition */}
        <div className="relative my-6 grid grid-cols-12 gap-4">
          <div className="col-span-8 rounded-xl border border-white/[0.08] bg-[#070C19] p-4">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
              <span className="h-2.5 w-20 rounded bg-gradient-to-r from-sky-400 to-violet-400" />
              <div className="flex gap-2">
                <span className="h-2 w-8 rounded bg-slate-700" />
                <span className="h-2 w-8 rounded bg-slate-700" />
                <span className="h-2 w-10 rounded bg-blue-500/60" />
              </div>
            </div>
            <div className="mt-4 space-y-2.5">
              <div className="h-3.5 w-4/5 rounded bg-slate-200/90" />
              <div className="h-3.5 w-3/5 rounded bg-slate-300/70" />
              <div className="h-2 w-full rounded bg-slate-700/80" />
              <div className="h-2 w-5/6 rounded bg-slate-700/70" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
                <div className="h-2 w-10 rounded bg-sky-400/70" />
                <div className="mt-2 h-1.5 w-full rounded bg-slate-700" />
              </div>
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
                <div className="h-2 w-10 rounded bg-blue-400/70" />
                <div className="mt-2 h-1.5 w-full rounded bg-slate-700" />
              </div>
              <div className="rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
                <div className="h-2 w-10 rounded bg-violet-400/70" />
                <div className="mt-2 h-1.5 w-full rounded bg-slate-700" />
              </div>
            </div>
          </div>

          {/* Mobile Viewport Companion */}
          <div className="col-span-4 flex flex-col justify-between rounded-xl border border-blue-400/25 bg-[#081022] p-3">
            <div>
              <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-slate-700" />
              <div className="h-2.5 w-14 rounded bg-sky-400/80" />
              <div className="mt-3 space-y-1.5">
                <div className="h-2.5 w-full rounded bg-slate-200/85" />
                <div className="h-2.5 w-4/5 rounded bg-slate-400/70" />
              </div>
              <div className="mt-3 h-1.5 w-full rounded bg-slate-700" />
              <div className="mt-1.5 h-1.5 w-3/4 rounded bg-slate-700" />
            </div>
            <div className="mt-4 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 py-1.5 text-center text-[10px] font-semibold text-white">
              Falar com equipe
            </div>
          </div>
        </div>

        {/* Technical quality highlights */}
        <div className="relative flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/[0.08] pt-3 text-xs text-slate-400">
          <span>HTML semântico</span>
          <span aria-hidden="true">·</span>
          <span>SEO estruturado</span>
          <span aria-hidden="true">·</span>
          <span>Acessibilidade WCAG</span>
        </div>
      </div>
    );
  }

  if (service.visualType === 'landing-preview') {
    return (
      <div className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0B1224] p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-16 h-60 w-60 rounded-full bg-violet-500/18 blur-3xl"
        />
        <div className="relative flex items-center justify-between border-b border-white/[0.08] pb-3">
          <span className="text-xs font-medium text-slate-300">
            Fluxo de conversão em página única
          </span>
          <span className="font-mono text-[11px] text-sky-400">
            Foco em captação
          </span>
        </div>

        <div className="relative my-5 space-y-3">
          {[
            {
              step: '01',
              label: 'Proposta de valor acima da dobra',
              detail: 'Headline objetiva e chamada imediata para ação',
            },
            {
              step: '02',
              label: 'Argumentos e prova clara',
              detail: 'Benefícios diretos que respondem objeções do visitante',
            },
            {
              step: '03',
              label: 'Formulário enxuto + WhatsApp',
              detail: 'Captação validada e encaminhamento rápido para vendas',
            },
          ].map((block) => (
            <div
              key={block.step}
              className="flex items-start gap-3.5 rounded-xl border border-white/[0.07] bg-[#070C19]/90 p-3.5"
            >
              <span className="font-mono text-xs font-medium text-sky-400 tabular-nums pt-0.5">
                {block.step}
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">{block.label}</p>
                <p className="mt-0.5 text-xs text-slate-400">{block.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative flex items-center justify-between border-t border-white/[0.08] pt-3 text-xs text-slate-400">
          <span>Preparada para Google Ads e Meta Ads</span>
          <span className="font-medium text-violet-300">Carregamento leve</span>
        </div>
      </div>
    );
  }

  if (service.visualType === 'saas-preview') {
    return (
      <div className="relative flex h-full min-h-[340px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0B1224] p-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-blue-600/18 blur-3xl"
        />

        <div className="relative flex items-center justify-between border-b border-white/[0.08] pb-3">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <Layers className="h-3.5 w-3.5 text-violet-400" />
            <span>Camadas de uma plataforma SaaS</span>
          </div>
          <span className="font-mono text-[11px] text-slate-500">Multi-tenant</span>
        </div>

        <div className="relative my-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            {
              title: 'Gestão de contas',
              items: ['Empresas isoladas', 'Perfis e permissões', 'Convite de equipe'],
            },
            {
              title: 'Planos e recorrência',
              items: ['Limites por plano', 'Período de teste', 'Ciclo de assinatura'],
            },
            {
              title: 'Painel do assinante',
              items: ['Onboarding guiado', 'Indicadores claros', 'Exportação segura'],
            },
            {
              title: 'Base pronta para crescer',
              items: ['APIs estruturadas', 'Módulos evolutivos', 'Monitoramento'],
            },
          ].map((module) => (
            <div
              key={module.title}
              className="rounded-xl border border-white/[0.07] bg-[#070C19]/90 p-3.5"
            >
              <p className="text-xs font-semibold text-white">{module.title}</p>
              <ul className="mt-2 space-y-1.5">
                {module.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-slate-400">
                    <Check className="h-3 w-3 shrink-0 text-sky-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="relative flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/[0.08] pt-3 text-xs text-slate-400">
          <span>Do MVP à escala</span>
          <span aria-hidden="true">·</span>
          <span>Segurança de dados por conta</span>
        </div>
      </div>
    );
  }

  // Photo-backed visual for Sistemas, Aplicativos, Softwares with resilient fallback
  const FallbackIcon =
    service.visualType === 'mobile-photo'
      ? Smartphone
      : service.visualType === 'software-photo'
      ? Code2
      : Sparkles;

  return (
    <div className="relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0B1224]">
      {service.imageSrc && !imageError ? (
        <>
          <img
            src={service.imageSrc}
            alt={service.imageAlt ?? service.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#060913]/85 via-[#060913]/25 to-blue-950/20"
          />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-xs font-medium text-sky-300">
              {service.title}
            </p>
            <p className="mt-1 text-sm text-slate-200">
              {service.tagline}
            </p>
          </div>
        </>
      ) : (
        <div className="flex h-full min-h-[340px] flex-col items-center justify-center bg-gradient-to-br from-[#0B152E] via-[#0B1124] to-[#171132] p-8 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-sky-300">
            <FallbackIcon className="h-7 w-7" />
          </div>
          <p className="mt-4 font-display text-lg font-semibold text-white">
            {service.title}
          </p>
          <p className="mt-1 max-w-xs text-sm text-slate-400">{service.tagline}</p>
        </div>
      )}
    </div>
  );
}
