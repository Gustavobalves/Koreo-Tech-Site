import { ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS, type PageId } from '../data/services';
import { BrandMark } from './BrandMark';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const serviceLinks = NAV_ITEMS.filter(
    (item) => item.id !== 'home' && item.id !== 'contato'
  );
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#050811]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand Summary */}
          <div className="md:col-span-5">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="cursor-pointer rounded-md text-left"
            >
              <BrandMark />
            </button>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Engenharia de software e desenvolvimento digital sob medida para empresas que precisam de sites, sistemas, SaaS e aplicativos confiáveis.
            </p>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => onNavigate('contato')}
                className="inline-flex min-h-[40px] cursor-pointer items-center gap-2 rounded-lg border border-white/12 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-blue-400/40 hover:bg-blue-500/10"
              >
                Iniciar uma conversa
                <ArrowUpRight className="h-4 w-4 text-sky-400" />
              </button>
            </div>
          </div>

          {/* Services Mirror */}
          <div className="md:col-span-4">
            <h2 className="font-display text-sm font-semibold text-white">
              Serviços
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 md:grid-cols-1">
              {serviceLinks.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className="cursor-pointer text-sm text-slate-400 transition-colors hover:text-sky-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional & Contact Placeholders */}
          <div className="md:col-span-3">
            <h2 className="font-display text-sm font-semibold text-white">
              Navegação e atendimento
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="cursor-pointer transition-colors hover:text-sky-300"
                >
                  Página inicial
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contato')}
                  className="cursor-pointer transition-colors hover:text-sky-300"
                >
                  Solicitar orçamento
                </button>
              </li>
              <li className="pt-2 text-slate-500">
                E-mail comercial configurável na aba Contato
              </li>
              <li className="text-slate-500">
                Atendimento remoto em todo o Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {currentYear} Koreo Tech. Todos os direitos reservados.</p>
          <p>Desenvolvimento web, sistemas, SaaS, aplicativos e softwares.</p>
        </div>
      </div>
    </footer>
  );
}
