import { ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, SERVICES, type PageId } from '../data/services';
import { BrandMark } from './BrandMark';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onNavigateSection: (sectionId: string) => void;
}

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050811]';

export function Footer({ onNavigate, onNavigateSection }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const whatsappHref = `https://wa.me/${COMPANY_INFO.whatsappNumber.replace(/\D/g, '')}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappPrefill
  )}`;

  return (
    <footer className="border-t border-white/10 bg-[#050811]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Brand Summary */}
          <div className="md:col-span-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className={`cursor-pointer rounded-md text-left ${focusRing}`}
            >
              <BrandMark />
            </button>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-slate-300">
              Desenvolvimento de sites, landing pages, sistemas web, SaaS, aplicativos e softwares com prazo definido e código próprio.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => onNavigate('contato')}
                className={`inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-md border border-white/25 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-white/45 ${focusRing}`}
              >
                Solicitar orçamento
                <ArrowUpRight className="h-4 w-4 text-sky-400" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-4">
            <h2 className="font-display text-base font-bold text-white">
              Serviços
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(service.id)}
                    className={`cursor-pointer rounded text-base text-slate-300 transition-colors duration-150 hover:text-white ${focusRing}`}
                  >
                    {service.navLabel}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Institutional Data */}
          <div className="md:col-span-4">
            <h2 className="font-display text-base font-bold text-white">
              Contato e dados institucionais
            </h2>
            <ul className="mt-4 space-y-3 text-base text-slate-300">
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className={`rounded transition-colors duration-150 hover:text-white ${focusRing}`}
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`rounded transition-colors duration-150 hover:text-white ${focusRing}`}
                >
                  WhatsApp: {COMPANY_INFO.whatsappDisplay}
                </a>
              </li>
              <li>{COMPANY_INFO.cityState}</li>
              <li className="font-mono text-sm text-slate-200">
                CNPJ: {COMPANY_INFO.cnpj}
              </li>
              <li className="pt-2 flex flex-wrap gap-5 text-sm">
                <button
                  type="button"
                  onClick={() => onNavigateSection('como-trabalhamos')}
                  className={`cursor-pointer rounded text-slate-300 transition-colors duration-150 hover:text-white ${focusRing}`}
                >
                  Como trabalhamos
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('contato')}
                  className={`cursor-pointer rounded text-slate-300 transition-colors duration-150 hover:text-white ${focusRing}`}
                >
                  Página de contato
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-300 sm:flex-row sm:items-center">
          <p>© {currentYear} {COMPANY_INFO.brandName}. Todos os direitos reservados.</p>
          <p>Atendimento remoto para empresas em todo o Brasil.</p>
        </div>
      </div>
    </footer>
  );
}
