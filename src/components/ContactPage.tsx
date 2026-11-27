import { useEffect, useState, type FormEvent } from 'react';
import {
  AlertCircle,
  ExternalLink,
  Mail,
  MessageCircle,
  Send,
} from 'lucide-react';
import {
  COMPANY_INFO,
  SERVICES,
  type PageId,
  type ServiceId,
} from '../data/services';

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

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060913]';

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

  const whatsappHref = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappPrefill
  )}`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Breadcrumb */}
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
        <span className="font-medium text-white">Contato</span>
      </nav>

      {/* Heading */}
      <div className="mt-8 max-w-3xl">
        <p className="text-sm font-semibold tracking-wide text-sky-400">
          Fale com a Koreo Tech
        </p>
        <h1 className="mt-3 font-display text-[clamp(2.25rem,4.2vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight text-white">
          Solicite um orçamento com escopo e prazo definidos.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
          Preencha o formulário abaixo ou chame direto no WhatsApp. Retornamos em até 1 dia útil ({COMPANY_INFO.businessHours}).
        </p>
      </div>

      {/* Main Split: Form + Company Info */}
      <div className="mt-14 grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Form Card */}
        <div className="rounded-lg border border-white/10 bg-[#0B1122] p-7 sm:p-9 lg:col-span-7">
          {submittedData ? (
            <div role="status" aria-live="polite" className="py-2">
              <p className="text-sm font-semibold text-sky-400">
                Solicitação registrada com sucesso
              </p>

              <h2 className="mt-3 font-display text-3xl font-bold text-white">
                Obrigado pelo contato, {submittedData.name}.
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                Sua mensagem foi validada e preparada para análise da equipe da Koreo Tech.
              </p>

              <dl className="mt-6 space-y-4 rounded-lg border border-white/10 bg-[#070C19] p-6 text-base">
                <div className="flex flex-col gap-1 sm:flex-row sm:justify-between">
                  <dt className="text-slate-300">E-mail de retorno</dt>
                  <dd className="font-semibold text-white">{submittedData.email}</dd>
                </div>
                <div className="flex flex-col gap-1 border-t border-white/10 pt-4 sm:flex-row sm:justify-between">
                  <dt className="text-slate-300">Tipo de projeto</dt>
                  <dd className="font-semibold text-sky-300">
                    {getProjectLabel(submittedData.projectType)}
                  </dd>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <dt className="text-slate-300">Mensagem enviada</dt>
                  <dd className="mt-2 whitespace-pre-line text-slate-200">
                    {submittedData.message}
                  </dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={handleResetForm}
                  className={`inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-md bg-[#2563EB] px-6 py-3 text-base font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] ${focusRing}`}
                >
                  Enviar nova mensagem
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className={`inline-flex min-h-[48px] cursor-pointer items-center justify-center rounded-md border border-white/25 bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors duration-150 hover:border-white/45 ${focusRing}`}
                >
                  Voltar para o Início
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div>
                <h2 className="font-display text-2xl font-bold text-white">
                  Detalhes do projeto
                </h2>
                <p className="mt-1 text-sm text-slate-300">
                  Campos marcados com * são obrigatórios.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {/* Nome */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-semibold text-slate-200"
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
                    className={`mt-2 block min-h-[48px] w-full rounded-md border bg-[#070C19] px-4 py-3 text-base text-white placeholder:text-slate-400 transition-colors duration-150 focus:border-[#3B82F6] focus:outline-none ${
                      errors.name ? 'border-rose-400/80' : 'border-white/15'
                    }`}
                  />
                  {errors.name && (
                    <p
                      id="contact-name-error"
                      className="mt-2 flex items-center gap-1.5 text-sm text-rose-300"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* E-mail */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-semibold text-slate-200"
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
                    className={`mt-2 block min-h-[48px] w-full rounded-md border bg-[#070C19] px-4 py-3 text-base text-white placeholder:text-slate-400 transition-colors duration-150 focus:border-[#3B82F6] focus:outline-none ${
                      errors.email ? 'border-rose-400/80' : 'border-white/15'
                    }`}
                  />
                  {errors.email && (
                    <p
                      id="contact-email-error"
                      className="mt-2 flex items-center gap-1.5 text-sm text-rose-300"
                    >
                      <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Tipo de Projeto */}
              <div>
                <label
                  htmlFor="contact-project-type"
                  className="block text-sm font-semibold text-slate-200"
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
                  className="mt-2 block min-h-[48px] w-full rounded-md border border-white/15 bg-[#070C19] px-4 py-3 text-base text-white transition-colors duration-150 focus:border-[#3B82F6] focus:outline-none"
                >
                  {PROJECT_OPTIONS.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                      className="bg-[#0B1122] text-white"
                    >
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensagem */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-semibold text-slate-200"
                >
                  Mensagem *
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Conte o objetivo do projeto, prazo desejado e principais funcionalidades..."
                  value={form.message}
                  onChange={(e) => {
                    setForm((prev) => ({ ...prev, message: e.target.value }));
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={`mt-2 block w-full rounded-md border bg-[#070C19] px-4 py-3 text-base text-white placeholder:text-slate-400 transition-colors duration-150 focus:border-[#3B82F6] focus:outline-none ${
                    errors.message ? 'border-rose-400/80' : 'border-white/15'
                  }`}
                />
                {errors.message && (
                  <p
                    id="contact-message-error"
                    className="mt-2 flex items-center gap-1.5 text-sm text-rose-300"
                  >
                    <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className={`inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center gap-2 rounded-md bg-[#2563EB] px-6 py-3 text-base font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] sm:w-auto ${focusRing}`}
                >
                  <Send className="h-5 w-5" aria-hidden="true" />
                  Enviar mensagem
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Direct Channels & Institutional Data */}
        <aside className="space-y-6 lg:col-span-5">
          <div className="rounded-lg border border-white/10 bg-[#0B1122] p-7">
            <h2 className="font-display text-2xl font-bold text-white">
              Canais diretos e dados da empresa
            </h2>
            <p className="mt-2 text-base leading-relaxed text-slate-300">
              Atendimento remoto para empresas em todo o Brasil.
            </p>

            <div className="mt-6 space-y-3">
              {/* WhatsApp */}
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex min-h-[56px] w-full items-center justify-between rounded-md border border-emerald-500/40 bg-emerald-600/15 px-4 py-3.5 text-left transition-colors duration-150 hover:border-emerald-400/60 ${focusRing}`}
              >
                <span className="flex items-center gap-3.5">
                  <MessageCircle className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
                  <span>
                    <span className="block text-base font-semibold text-white">
                      WhatsApp comercial
                    </span>
                    <span className="block text-sm text-slate-200">
                      {COMPANY_INFO.whatsappDisplay}
                    </span>
                  </span>
                </span>
                <ExternalLink className="h-5 w-5 shrink-0 text-emerald-300" aria-hidden="true" />
              </a>

              {/* E-mail */}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className={`flex min-h-[56px] w-full items-center justify-between rounded-md border border-white/10 bg-[#070C19] px-4 py-3.5 text-left transition-colors duration-150 hover:border-white/25 ${focusRing}`}
              >
                <span className="flex items-center gap-3.5 min-w-0">
                  <Mail className="h-5 w-5 shrink-0 text-sky-400" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="block text-sm text-slate-300">E-mail</span>
                    <span className="block truncate text-base font-semibold text-white">
                      {COMPANY_INFO.email}
                    </span>
                  </span>
                </span>
                <ExternalLink className="h-5 w-5 shrink-0 text-slate-300" aria-hidden="true" />
              </a>
            </div>

            {/* Cidade/Estado & CNPJ */}
            <dl className="mt-6 space-y-4 border-t border-white/10 pt-6 text-base">
              <div>
                <dt className="text-sm text-slate-300">Cidade / Estado</dt>
                <dd className="mt-0.5 font-semibold text-white">
                  {COMPANY_INFO.cityState}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-slate-300">CNPJ</dt>
                <dd className="mt-0.5 font-mono text-base font-medium text-white">
                  {COMPANY_INFO.cnpj}
                </dd>
              </div>
            </dl>
          </div>

          {/* What happens next */}
          <div className="rounded-lg border border-white/10 bg-[#080E1D] p-7">
            <h3 className="font-display text-xl font-bold text-white">
              O que acontece após o envio?
            </h3>
            <ol className="mt-5 space-y-4 text-base text-slate-300">
              <li className="flex gap-3.5">
                <span className="font-mono text-sm font-semibold text-sky-400 tabular-nums pt-0.5">
                  01
                </span>
                <span>Analisamos o escopo informado em até 1 dia útil.</span>
              </li>
              <li className="flex gap-3.5">
                <span className="font-mono text-sm font-semibold text-sky-400 tabular-nums pt-0.5">
                  02
                </span>
                <span>Fazemos uma conversa de 20 minutos para alinhar prioridades.</span>
              </li>
              <li className="flex gap-3.5">
                <span className="font-mono text-sm font-semibold text-sky-400 tabular-nums pt-0.5">
                  03
                </span>
                <span>Enviamos proposta formal com etapas, prazo e valor fechado.</span>
              </li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
}
