import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, type PageId } from '../data/services';
import { BrandMark } from './BrandMark';

interface NavbarProps {
  activePage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const primaryNavLinks = NAV_ITEMS.filter((item) => item.id !== 'contato');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelect = (page: PageId) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#060913]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          type="button"
          onClick={() => handleSelect('home')}
          aria-label="Ir para a página inicial da Koreo Tech"
          className="cursor-pointer rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <BrandMark />
        </button>

        {/* Zone 2: Primary Desktop Navigation */}
        <nav
          aria-label="Navegação principal"
          className="hidden xl:flex items-center gap-5 2xl:gap-7"
        >
          {primaryNavLinks.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative cursor-pointer py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-[1px] h-[2px] rounded-full bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 transition-opacity duration-150 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Drawer Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => handleSelect('contato')}
            aria-current={activePage === 'contato' ? 'page' : undefined}
            className={`hidden sm:inline-flex min-h-[40px] cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-all duration-150 ${
              activePage === 'contato'
                ? 'bg-white text-[#060913] shadow-[0_0_24px_rgba(96,165,250,0.3)]'
                : 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-[0_0_20px_rgba(59,130,246,0.28)] hover:from-blue-500 hover:to-violet-500'
            }`}
          >
            Contato
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-panel"
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-200 transition-colors hover:border-white/20 hover:text-white xl:hidden"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Navigation Drawer */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation-panel"
          aria-label="Navegação móvel"
          className="border-t border-white/[0.08] bg-[#080D1B] px-4 py-4 sm:px-6 xl:hidden"
        >
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-1 sm:grid-cols-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex min-h-[44px] w-full cursor-pointer items-center justify-between rounded-lg px-4 py-2.5 text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600/20 to-violet-600/20 text-white ring-1 ring-inset ring-blue-400/35'
                      : 'text-slate-300 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  <span className="truncate">{item.label}</span>
                  {isActive && (
                    <span className="text-xs font-medium text-sky-400">Atual</span>
                  )}
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
