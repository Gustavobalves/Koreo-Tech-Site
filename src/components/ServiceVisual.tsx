import { useState } from 'react';
import type { ServiceDetail } from '../data/services';

interface ServiceVisualProps {
  service: ServiceDetail;
}

export function ServiceVisual({ service }: ServiceVisualProps) {
  const [imageError, setImageError] = useState(false);

  if (service.visualType === 'sites-preview') {
    return (
      <div className="flex h-full min-h-[360px] flex-col justify-between rounded-lg border border-white/10 bg-[#0B1224] p-6">
        {/* Browser Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-sm font-medium text-slate-200">
            Layout responsivo
          </span>
          <span className="font-mono text-sm text-slate-300">
            Desktop · Mobile
          </span>
        </div>

        {/* Multi-viewport editorial composition */}
        <div className="my-6 grid grid-cols-12 gap-4">
          <div className="col-span-8 rounded-md border border-white/10 bg-[#070C19] p-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <span className="h-2.5 w-20 rounded bg-[#2563EB]" />
              <div className="flex gap-2">
                <span className="h-2 w-8 rounded bg-slate-700" />
                <span className="h-2 w-8 rounded bg-slate-700" />
                <span className="h-2 w-10 rounded bg-[#2563EB]/70" />
              </div>
            </div>
            <div className="mt-4 space-y-2.5">
              <div className="h-3.5 w-4/5 rounded bg-slate-200/90" />
              <div className="h-3.5 w-3/5 rounded bg-slate-300/70" />
              <div className="h-2 w-full rounded bg-slate-700/80" />
              <div className="h-2 w-5/6 rounded bg-slate-700/70" />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="rounded border border-white/10 bg-[#0B1122] p-2.5">
                <div className="h-2 w-10 rounded bg-[#3B82F6]/70" />
                <div className="mt-2 h-1.5 w-full rounded bg-slate-700" />
              </div>
              <div className="rounded border border-white/10 bg-[#0B1122] p-2.5">
                <div className="h-2 w-10 rounded bg-[#3B82F6]/70" />
                <div className="mt-2 h-1.5 w-full rounded bg-slate-700" />
              </div>
              <div className="rounded border border-white/10 bg-[#0B1122] p-2.5">
                <div className="h-2 w-10 rounded bg-[#3B82F6]/70" />
                <div className="mt-2 h-1.5 w-full rounded bg-slate-700" />
              </div>
            </div>
          </div>

          {/* Mobile Viewport Companion */}
          <div className="col-span-4 flex flex-col justify-between rounded-md border border-white/15 bg-[#081022] p-3">
            <div>
              <div className="mx-auto mb-3 h-1 w-8 rounded bg-slate-700" />
              <div className="h-2.5 w-14 rounded bg-[#3B82F6]" />
              <div className="mt-3 space-y-1.5">
                <div className="h-2.5 w-full rounded bg-slate-200/85" />
                <div className="h-2.5 w-4/5 rounded bg-slate-300/70" />
              </div>
              <div className="mt-3 h-1.5 w-full rounded bg-slate-700" />
              <div className="mt-1.5 h-1.5 w-3/4 rounded bg-slate-700" />
            </div>
            <div className="mt-4 rounded bg-[#2563EB] py-1.5 text-center text-xs font-semibold text-white">
              Orçamento
            </div>
          </div>
        </div>

        {/* Technical quality highlights */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-3 text-sm text-slate-300">
          <span>HTML semântico</span>
          <span aria-hidden="true">·</span>
          <span>SEO estruturado</span>
          <span aria-hidden="true">·</span>
          <span>SSL incluído</span>
        </div>
      </div>
    );
  }

  if (service.visualType === 'landing-preview') {
    return (
      <div className="flex h-full min-h-[360px] flex-col justify-between rounded-lg border border-white/10 bg-[#0B1224] p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-sm font-medium text-slate-200">
            Estrutura de conversão
          </span>
          <span className="font-mono text-sm text-sky-400">
            Página única
          </span>
        </div>

        <div className="my-5 space-y-3">
          {[
            {
              step: '01',
              label: 'Oferta clara acima da dobra',
              detail: 'Título direto e botão imediato de contato',
            },
            {
              step: '02',
              label: 'Prova e objeções respondidas',
              detail: 'Benefícios objetivos, casos e perguntas frequentes',
            },
            {
              step: '03',
              label: 'Formulário + WhatsApp',
              detail: 'Envio validado com evento de conversão no Analytics',
            },
          ].map((block) => (
            <div
              key={block.step}
              className="flex items-start gap-3.5 rounded-md border border-white/10 bg-[#070C19] p-4"
            >
              <span className="font-mono text-sm font-semibold text-sky-400 tabular-nums pt-0.5">
                {block.step}
              </span>
              <div className="min-w-0">
                <p className="text-base font-semibold text-white">{block.label}</p>
                <p className="mt-1 text-sm text-slate-300">{block.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-sm text-slate-300">
          <span>Google Ads e Meta Ads</span>
          <span className="font-semibold text-sky-300">Entrega em 1 a 2 semanas</span>
        </div>
      </div>
    );
  }

  if (service.visualType === 'saas-preview') {
    return (
      <div className="flex h-full min-h-[360px] flex-col justify-between rounded-lg border border-white/10 bg-[#0B1224] p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <span className="text-sm font-medium text-slate-200">
            Camadas de uma plataforma SaaS
          </span>
          <span className="font-mono text-sm text-slate-300">Multi-tenant</span>
        </div>

        <div className="my-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {[
            {
              title: 'Gestão de contas',
              items: ['Empresas isoladas', 'Perfis e permissões', 'Convite de equipe'],
            },
            {
              title: 'Planos e cobrança',
              items: ['Limites por plano', 'Período de teste', 'Ciclo recorrente'],
            },
            {
              title: 'Painel do assinante',
              items: ['Onboarding direto', 'Indicadores claros', 'Exportação segura'],
            },
            {
              title: 'Base modular',
              items: ['APIs documentadas', 'Novos módulos', 'Logs e alertas'],
            },
          ].map((module) => (
            <div
              key={module.title}
              className="rounded-md border border-white/10 bg-[#070C19] p-4"
            >
              <p className="text-sm font-semibold text-white">{module.title}</p>
              <ul className="mt-2.5 space-y-1.5 text-sm text-slate-300">
                {module.items.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/10 pt-3 text-sm text-slate-300">
          <span>MVP em 6 a 10 semanas</span>
          <span aria-hidden="true">·</span>
          <span>Dados isolados por conta</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full min-h-[360px] overflow-hidden rounded-lg border border-white/10 bg-[#0B1224]">
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
            className="absolute inset-0 bg-[#060913]/65"
          />
          <div className="absolute inset-x-0 bottom-0 p-6">
            <p className="text-sm font-semibold text-sky-300">
              {service.title}
            </p>
            <p className="mt-1 text-base text-slate-200">
              {service.tagline}
            </p>
          </div>
        </>
      ) : (
        <div className="flex h-full min-h-[360px] flex-col items-center justify-center bg-[#0B1122] p-8 text-center">
          <p className="font-display text-xl font-bold text-white">
            {service.title}
          </p>
          <p className="mt-2 max-w-xs text-base text-slate-300">{service.tagline}</p>
        </div>
      )}
    </div>
  );
}
