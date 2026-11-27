import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { SERVICES, type PageId, type ServiceId } from '../data/services';
import { BrandMark } from './BrandMark';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId, sectionId?: string) => void;
}

const FOCUS_RING =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060913]';

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isServiceActive = SERVICES.some((service) => service.id === activePage);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelectPage = (page: PageId, sectionId?: string) => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    onNavigate(page, sectionId);
  };

  const handleSelectService = (serviceId: ServiceId) => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    onNavigate(serviceId);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060913]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <button
          type="button"
          onClick={() => handleSelectPage('home')}
          aria-label="Ir para a página inicial da Koreo Tech"
          className={`cursor-pointer rounded-md p-1 ${FOCUS_RING}`}
        >
          <BrandMark />
        </button>

        {/* Desktop Navigation: Serviços (dropdown), Como trabalhamos, Contato */}
        <nav
          aria-label="Navegação principal"
          className="hidden lg:flex items-center gap-8"
        >
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
              className={`inline-flex min-h-[44px] cursor-pointer items-center gap-1.5 border-b-2 px-1 py-2 text-base font-medium transition-colors duration-150 ${FOCUS_RING} ${
                isServiceActive
                  ? 'border-[#2563EB] text-white'
                  : servicesOpen
                  ? 'border-transparent text-white'
                  : 'border-transparent text-slate-300 hover:text-white'
              }`}
            >
              <span>Serviços</span>
              <ChevronDown
                className={`h-4 w-4 ${servicesOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {servicesOpen && (
              <div
                role="menu"
                aria-label="Serviços da Koreo Tech"
                className="absolute left-0 top-full mt-2 w-80 rounded-lg border border-white/15 bg-[#0B1122] p-2"
              >
                {SERVICES.map((service) => {
                  const isCurrent = activePage === service.id;
                  return (
                    <button
                      key={service.id}
                      type="button"
                      role="menuitem"
                      onClick={() => handleSelectService(service.id)}
                      className={`flex w-full cursor-pointer flex-col rounded-md px-3.5 py-2.5 text-left transition-colors duration-150 ${FOCUS_RING} ${
                        isCurrent
                          ? 'bg-[#2563EB]/20 text-white'
                          : 'text-slate-200 hover:bg-white/[0.06] hover:text-white'
                      }`}
                    >
                      <span className="text-base font-semibold">
                        {service.navLabel}
                      </span>
                      <span className="mt-0.5 text-sm text-slate-300">
                        {service.deliveryEstimate}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => handleSelectPage('home', 'como-trabalhamos')}
            className={`inline-flex min-h-[44px] cursor-pointer items-center border-b-2 border-transparent px-1 py-2 text-base font-medium text-slate-300 transition-colors duration-150 hover:text-white ${FOCUS_RING}`}
          >
            Como trabalhamos
          </button>

          <button
            type="button"
            onClick={() => handleSelectPage('contato')}
            aria-current={activePage === 'contato' ? 'page' : undefined}
            className={`inline-flex min-h-[44px] cursor-pointer items-center border-b-2 px-1 py-2 text-base font-medium transition-colors duration-150 ${FOCUS_RING} ${
              activePage === 'contato'
                ? 'border-[#2563EB] text-white'
                : 'border-transparent text-slate-300 hover:text-white'
            }`}
          >
            Contato
          </button>
        </nav>

        {/* Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleSelectPage('contato')}
            className={`hidden sm:inline-flex min-h-[44px] cursor-pointer items-center justify-center rounded-md bg-[#2563EB] px-5 py-2.5 text-base font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] whitespace-nowrap ${FOCUS_RING}`}
          >
            Solicitar orçamento
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-panel"
            aria-label={
              mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
            }
            className={`inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-md border border-white/15 bg-transparent text-slate-100 transition-colors duration-150 hover:border-white/35 hover:text-white lg:hidden ${FOCUS_RING}`}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-panel"
          aria-label="Navegação móvel"
          className="border-t border-white/10 bg-[#080D1B] px-4 py-5 sm:px-6 lg:hidden"
        >
          <div className="mx-auto max-w-3xl space-y-2">
            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((prev) => !prev)}
                aria-expanded={mobileServicesOpen}
                className={`flex min-h-[48px] w-full cursor-pointer items-center justify-between rounded-md px-4 py-3 text-left text-base font-semibold text-white transition-colors duration-150 hover:bg-white/[0.05] ${FOCUS_RING}`}
              >
                <span>Serviços</span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-300 ${
                    mobileServicesOpen ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {mobileServicesOpen && (
                <div className="mt-1 space-y-1 pl-3">
                  {SERVICES.map((service) => {
                    const isCurrent = activePage === service.id;
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => handleSelectService(service.id)}
                        aria-current={isCurrent ? 'page' : undefined}
                        className={`flex min-h-[44px] w-full cursor-pointer items-center justify-between rounded-md px-4 py-2.5 text-left text-base transition-colors duration-150 ${FOCUS_RING} ${
                          isCurrent
                            ? 'bg-[#2563EB]/20 font-semibold text-white'
                            : 'text-slate-200 hover:bg-white/[0.05] hover:text-white'
                        }`}
                      >
                        <span>{service.navLabel}</span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={() => handleSelectPage('home', 'como-trabalhamos')}
              className={`flex min-h-[48px] w-full cursor-pointer items-center rounded-md px-4 py-3 text-left text-base font-medium text-slate-200 transition-colors duration-150 hover:bg-white/[0.05] hover:text-white ${FOCUS_RING}`}
            >
              Como trabalhamos
            </button>

            <button
              type="button"
              onClick={() => handleSelectPage('contato')}
              aria-current={activePage === 'contato' ? 'page' : undefined}
              className={`flex min-h-[48px] w-full cursor-pointer items-center rounded-md px-4 py-3 text-left text-base font-medium transition-colors duration-150 ${FOCUS_RING} ${
                activePage === 'contato'
                  ? 'bg-[#2563EB]/20 font-semibold text-white'
                  : 'text-slate-200 hover:bg-white/[0.05] hover:text-white'
              }`}
            >
              Contato
            </button>

            <div className="pt-2 sm:hidden">
              <button
                type="button"
                onClick={() => handleSelectPage('contato')}
                className={`inline-flex min-h-[48px] w-full cursor-pointer items-center justify-center rounded-md bg-[#2563EB] px-6 py-3 text-base font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] ${FOCUS_RING}`}
              >
                Solicitar orçamento
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
