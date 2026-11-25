import { useEffect, useState, type FormEvent } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Mail,
  MessageCircle,
  PencilLine,
  Send,
} from 'lucide-react';
import { SERVICES, type PageId, type ServiceId } from '../data/services';

interface ContactPageProps {
  initialProjectType?: ServiceId;
  initialProjectContext?: string;
  onNavigate: (page: PageId) => void;
}

interface FormState {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

interface ContactChannels {
  whatsapp: string;
  email: string;
  instagram: string;
  linkedin: string;
  github: string;
}

const DEFAULT_CHANNELS: ContactChannels = {
  whatsapp: '',
  email: '',
  instagram: '',
  linkedin: '',
  github: '',
};

const STORAGE_KEY = 'koreo_tech_contact_channels';

const PROJECT_OPTIONS = [
  ...SERVICES.map((service) => ({
    value: service.id,
    label: service.title,
  })),
  { value: 'outro', label: 'Outro projeto ou consultoria técnica' },
];

function getProjectLabel(value: string): string {
  const found = PROJECT_OPTIONS.find((opt) => opt.value === value);
  return found ? found.label : 'Projeto digital';
}

export function ContactPage({
  initialProjectType,
  initialProjectContext,
  onNavigate,
}: ContactPageProps) {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    projectType: initialProjectType ?? 'sites',
    message: initialProjectContext
      ? `Olá equipe Koreo Tech, tenho interesse em desenvolver um projeto na linha de "${initialProjectContext}". Gostaria de conversar sobre prazos e orçamento.`
      : '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  const [channels, setChannels] = useState<ContactChannels>(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_CHANNELS, ...JSON.parse(saved) };
      }
    } catch {
      // Ignore storage errors in restricted environments
    }
    return DEFAULT_CHANNELS;
  });
  const [editingChannels, setEditingChannels] = useState(false);
  const [channelNotice, setChannelNotice] = useState<string | null>(null);

  useEffect(() => {
    if (initialProjectType || initialProjectContext) {
      setSubmittedData(null);
      setForm((prev) => ({
        ...prev,
        projectType: initialProjectType ?? prev.projectType,
        message: initialProjectContext
          ? `Olá equipe Koreo Tech, tenho interesse em desenvolver um projeto na linha de "${initialProjectContext}". Gostaria de conversar sobre prazos e orçamento.`
          : prev.message,
      }));
    }
  }, [initialProjectType, initialProjectContext]);

  const validateForm = (values: FormState): FormErrors => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim() || values.name.trim().length < 2) {
      nextErrors.name = 'Informe seu nome para podermos responder corretamente.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim()) {
      nextErrors.email = 'Informe um endereço de e-mail válido.';
    } else if (!emailRegex.test(values.email.trim())) {
      nextErrors.email = 'Formato de e-mail inválido. Exemplo: nome@empresa.com.br';
    }

    if (!values.projectType) {
      nextErrors.projectType = 'Selecione o tipo de projeto desejado.';
    }

    if (!values.message.trim() || values.message.trim().length < 15) {
      nextErrors.message =
        'Descreva brevemente o projeto ou objetivo (mínimo de 15 caracteres).';
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmittedData({ ...form });
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setForm({
      name: '',
      email: '',
      projectType: 'sites',
      message: '',
    });
    setErrors({});
  };

  const handleSaveChannels = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(channels));
    } catch {
      // Ignore storage errors
    }
    setEditingChannels(false);
    setChannelNotice('Canais atualizados localmente para testes de navegação.');
  };

  const handleChannelAction = (channelKey: keyof ContactChannels, label: string) => {
    const rawValue = channels[channelKey].trim();

    if (!rawValue) {
      setEditingChannels(true);
      setChannelNotice(
        `O canal ${label} ainda está em modo placeholder. Preencha abaixo com o dado oficial da sua empresa para ativar o redirecionamento.`
      );
      return;
    }

    if (channelKey === 'whatsapp') {
      const digits = rawValue.replace(/\D/g, '');
      if (digits.length < 10) {
        setEditingChannels(true);
        setChannelNotice(
          'Informe um número de WhatsApp com DDD (ex.: 5511999999999) para gerar o link de conversa.'
        );
        return;
      }
      setChannelNotice(`Link de WhatsApp pronto para +${digits} (configurado em seus canais).`);
      return;
    }

    if (channelKey === 'email') {
      setChannelNotice(`E-mail oficial configurado: ${rawValue}`);
      return;
    }

    setChannelNotice(`Perfil oficial de ${label} configurado: ${rawValue}`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      {/* Breadcrumb */}
      <nav aria-label="Caminho da página" className="flex items-center gap-2 text-xs text-slate-400">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="cursor-pointer transition-colors hover:text-sky-300"
        >
          Home
        </button>
        <span aria-hidden="true">/</span>
        <span className="text-slate-200">Contato</span>
      </nav>

      {/* Heading */}
      <div className="mt-8 max-w-2xl">
        <p className="text-sm font-medium text-sky-400">
          Fale com a Koreo Tech
        </p>
        <h1 className="mt-3 font-display text-[clamp(2rem,3.8vw,3.3rem)] font-bold leading-[1.1] tracking-tight text-white">
          Conte sobre o seu projeto e receba um retorno técnico objetivo.
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-400">
          Preencha o formulário com as informações principais ou configure seus canais diretos de WhatsApp e redes sociais ao lado.
        </p>
      </div>

      {/* Main Split: Form + Direct Channels */}
      <div className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Form Card */}
        <div className="rounded-2xl border border-white/[0.08] bg-[#0B1122] p-6 sm:p-8 lg:col-span-7">
          {submittedData ? (
            <div role="status" aria-live="polite" className="py-4">
              <div className="flex items-center gap-3 text-sky-400">
                <CheckCircle2 className="h-6 w-6 shrink-0" />
                <span className="text-sm font-semibold">
                  Solicitação registrada com sucesso
                </span>
              </div>

              <h2 className="mt-4 font-display text-2xl font-bold text-white">
                Obrigado pelo contato, {submittedData.name}.
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">
                Sua mensagem foi validada e preparada para a equipe da Koreo Tech analisar os detalhes do projeto.
              </p>

              <dl className="mt-6 space-y-3 rounded-xl border border-white/[0.07] bg-[#070C19] p-5 text-sm">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <dt className="text-slate-400">E-mail de retorno</dt>
                  <dd className="font-medium text-white">{submittedData.email}</dd>
                </div>
                <div className="flex flex-col gap-1 border-t border-white/[0.06] pt-3 sm:flex-row sm:justify-between">
                  <dt className="text-slate-400">Tipo de projeto</dt>
                  <dd className="font-medium text-sky-300">
                    {getProjectLabel(submittedData.projectType)}
                  </dd>
                </div>
                <div className="border-t border-white/[0.06] pt-3">
                  <dt className="text-slate-400">Mensagem enviada</dt>
                  <dd className="mt-1.5 whitespace-pre-line text-slate-200">
                    {submittedData.message}
                  </dd>
                </div>
              </dl>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-violet-500"
                >
                  Enviar nova mensagem
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-white/25 hover:text-white"
                >
                  Voltar para a Home
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <h2 className="font-display text-xl font-semibold text-white">
                  Solicitar orçamento ou conversa técnica
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Todos os campos marcados são necessários para entendermos sua demanda.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Nome */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-slate-200"
                  >
                    Nome *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Seu nome completo"
                    value={form.name}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, name: e.target.value }));
                      if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                    }}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={`mt-2 block min-h-[44px] w-full rounded-lg border bg-[#070C19] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-sky-400 focus:outline-none ${
                      errors.name ? 'border-rose-400/80' : 'border-white/12'
                    }`}
                  />
                  {errors.name && (
                    <p
                      id="contact-name-error"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* E-mail */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-slate-200"
                  >
                    E-mail *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="voce@suaempresa.com.br"
                    value={form.email}
                    onChange={(e) => {
                      setForm((prev) => ({ ...prev, email: e.target.value }));
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={`mt-2 block min-h-[44px] w-full rounded-lg border bg-[#070C19] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-sky-400 focus:outline-none ${
                      errors.email ? 'border-rose-400/80' : 'border-white/12'
                    }`}
                  />
                  {errors.email && (
                    <p
                      id="contact-email-error"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Tipo de Projeto */}
              <div>
                <label
                  htmlFor="contact-project-type"
                  className="block text-sm font-medium text-slate-200"
                >
                  Tipo de projeto *
                </label>
                <select
                  id="contact-project-type"
                  name="projectType"
                  value={form.projectType}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, projectType: e.target.value }));
                    if (errors.projectType) {
                      setErrors((prev) => ({ ...prev, projectType: undefined }));
                    }
                  }}
                  aria-invalid={Boolean(errors.projectType)}
                  className="mt-2 block min-h-[44px] w-full rounded-lg border border-white/12 bg-[#070C19] px-3.5 py-2.5 text-sm text-white transition-colors focus:border-sky-400 focus:outline-none"
                >
                  {PROJECT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value} className="bg-[#0B1122] text-white">
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-slate-200"
                >
                  Mensagem *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Conte qual problema deseja resolver, prazos estimados ou principais funcionalidades imaginadas..."
                  value={form.message}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, message: e.target.value }));
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={`mt-2 block w-full rounded-lg border bg-[#070C19] px-3.5 py-2.5 text-sm text-white placeholder:text-slate-500 transition-colors focus:border-sky-400 focus:outline-none ${
                    errors.message ? 'border-rose-400/80' : 'border-white/12'
                  }`}
                />
                {errors.message && (
                  <p
                    id="contact-message-error"
                    className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-300"
                  >
                    <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(59,130,246,0.3)] transition-all duration-150 hover:from-blue-500 hover:to-violet-500 sm:w-auto"
                >
                  <Send className="h-4 w-4" />
                  Enviar mensagem
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Direct Channels Column (Editable Placeholders — No Fabricated Real Data) */}
        <aside className="space-y-6 lg:col-span-5">
          <div className="rounded-2xl border border-white/[0.08] bg-[#0B1122] p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="font-display text-lg font-semibold text-white">
                  Canais diretos e redes sociais
                </h2>
                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Espaços preparados para você inserir o WhatsApp, e-mail e perfis oficiais da Koreo Tech.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setEditingChannels((prev) => !prev);
                  setChannelNotice(null);
                }}
                className="inline-flex min-h-[36px] shrink-0 cursor-pointer items-center gap-1.5 rounded-lg border border-white/12 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-sky-300 transition-colors hover:border-sky-400/40 hover:text-white"
              >
                <PencilLine className="h-3.5 w-3.5" />
                {editingChannels ? 'Fechar edição' : 'Editar canais'}
              </button>
            </div>

            {channelNotice && (
              <div
                role="status"
                className="mt-4 rounded-xl border border-sky-400/25 bg-sky-500/10 p-3.5 text-xs leading-relaxed text-sky-200"
              >
                {channelNotice}
              </div>
            )}

            {/* Primary WhatsApp Action */}
            <div className="mt-5">
              <button
                type="button"
                onClick={() => handleChannelAction('whatsapp', 'WhatsApp')}
                className="flex min-h-[50px] w-full cursor-pointer items-center justify-between rounded-xl border border-blue-400/30 bg-gradient-to-r from-blue-600/20 to-violet-600/20 px-4 py-3 text-left transition-colors hover:border-sky-400/50 hover:from-blue-600/30 hover:to-violet-600/30"
              >
                <span className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-sky-400" />
                  <span>
                    <span className="block text-sm font-semibold text-white">
                      Conversar pelo WhatsApp
                    </span>
                    <span className="block text-xs text-slate-300">
                      {channels.whatsapp || '+55 (00) 00000-0000 · Insira seu número'}
                    </span>
                  </span>
                </span>
                <ExternalLink className="h-4 w-4 text-sky-300" />
              </button>
            </div>

            {/* Email Row */}
            <div className="mt-3">
              <button
                type="button"
                onClick={() => handleChannelAction('email', 'E-mail comercial')}
                className="flex min-h-[48px] w-full cursor-pointer items-center justify-between rounded-xl border border-white/[0.08] bg-[#070C19] px-4 py-3 text-left transition-colors hover:border-white/20"
              >
                <span className="flex items-center gap-3 min-w-0">
                  <Mail className="h-4 w-4 shrink-0 text-violet-300" />
                  <span className="min-w-0">
                    <span className="block text-xs text-slate-400">E-mail comercial</span>
                    <span className="block truncate text-sm font-medium text-slate-200">
                      {channels.email || 'contato@seudominio.com.br'}
                    </span>
                  </span>
                </span>
                <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" />
              </button>
            </div>

            {/* Social Network Buttons */}
            <div className="mt-5 border-t border-white/[0.08] pt-5">
              <p className="text-xs font-medium text-slate-400">
                Redes sociais
              </p>
              <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                {[
                  {
                    key: 'linkedin' as const,
                    label: 'LinkedIn',
                    placeholder: '/company/koreotech',
                  },
                  {
                    key: 'instagram' as const,
                    label: 'Instagram',
                    placeholder: '@koreotech',
                  },
                  {
                    key: 'github' as const,
                    label: 'GitHub',
                    placeholder: 'github.com/koreotech',
                  },
                ].map((social) => (
                  <button
                    key={social.key}
                    type="button"
                    onClick={() => handleChannelAction(social.key, social.label)}
                    className="flex min-h-[44px] cursor-pointer flex-col justify-center rounded-xl border border-white/[0.08] bg-[#070C19] px-3.5 py-2.5 text-left transition-colors hover:border-blue-400/35 hover:bg-white/[0.03]"
                  >
                    <span className="text-xs font-semibold text-white">
                      {social.label}
                    </span>
                    <span className="mt-0.5 truncate text-[11px] text-slate-400">
                      {channels[social.key] || social.placeholder}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Editable Channel Configuration Form */}
            {editingChannels && (
              <form
                onSubmit={handleSaveChannels}
                className="mt-5 space-y-3 border-t border-white/[0.08] pt-5"
              >
                <p className="text-xs font-semibold text-white">
                  Personalizar canais de contato
                </p>
                <input
                  type="text"
                  placeholder="WhatsApp (ex.: +55 11 90000-0000)"
                  value={channels.whatsapp}
                  onChange={(e) =>
                    setChannels((prev) => ({ ...prev, whatsapp: e.target.value }))
                  }
                  className="block min-h-[40px] w-full rounded-lg border border-white/12 bg-[#070C19] px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="E-mail (ex.: contato@koreotech.com.br)"
                  value={channels.email}
                  onChange={(e) =>
                    setChannels((prev) => ({ ...prev, email: e.target.value }))
                  }
                  className="block min-h-[40px] w-full rounded-lg border border-white/12 bg-[#070C19] px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="LinkedIn (ex.: linkedin.com/company/koreotech)"
                  value={channels.linkedin}
                  onChange={(e) =>
                    setChannels((prev) => ({ ...prev, linkedin: e.target.value }))
                  }
                  className="block min-h-[40px] w-full rounded-lg border border-white/12 bg-[#070C19] px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Instagram (ex.: @koreotech)"
                  value={channels.instagram}
                  onChange={(e) =>
                    setChannels((prev) => ({ ...prev, instagram: e.target.value }))
                  }
                  className="block min-h-[40px] w-full rounded-lg border border-white/12 bg-[#070C19] px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="GitHub (ex.: github.com/koreotech)"
                  value={channels.github}
                  onChange={(e) =>
                    setChannels((prev) => ({ ...prev, github: e.target.value }))
                  }
                  className="block min-h-[40px] w-full rounded-lg border border-white/12 bg-[#070C19] px-3 py-2 text-xs text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex min-h-[40px] w-full cursor-pointer items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-blue-500"
                >
                  Salvar canais
                </button>
              </form>
            )}
          </div>

          {/* Quiet Expectation Card */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#080E1D] p-6">
            <h3 className="font-display text-base font-semibold text-white">
              O que acontece após o envio?
            </h3>
            <ol className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex gap-3">
                <span className="font-mono text-xs text-sky-400 tabular-nums pt-0.5">01</span>
                <span>Analisamos o tipo de projeto e os objetivos informados na mensagem.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-xs text-sky-400 tabular-nums pt-0.5">02</span>
                <span>Agendamos uma conversa objetiva para alinhar escopo e prioridades.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-mono text-xs text-sky-400 tabular-nums pt-0.5">03</span>
                <span>Apresentamos proposta com etapas, prazos e investimento claro.</span>
              </li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}
