import { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig, motion } from 'motion/react';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { ServicePage } from './components/ServicePage';
import {
  getHashFromPageId,
  getPageIdFromHash,
  getServiceById,
  type PageId,
  type ServiceId,
} from './data/services';

interface QuoteDraft {
  serviceId?: ServiceId;
  context?: string;
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(() =>
    getPageIdFromHash(window.location.hash)
  );
  const [quoteDraft, setQuoteDraft] = useState<QuoteDraft>({});

  useEffect(() => {
    const handleHashChange = () => {
      setActivePage(getPageIdFromHash(window.location.hash));
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setActivePage(page);
    const nextHash = getHashFromPageId(page);
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestQuote = (serviceId?: ServiceId, exampleTitle?: string) => {
    setQuoteDraft({ serviceId, context: exampleTitle });
    navigateTo('contato');
  };

  const isServicePage = activePage !== 'home' && activePage !== 'contato';

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-[#060913] text-slate-100">
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Pular para o conteúdo principal
        </a>

        <Navbar activePage={activePage} onNavigate={navigateTo} />

        <main id="conteudo-principal" className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            >
              {activePage === 'home' && (
                <HomePage
                  onNavigate={navigateTo}
                  onStartProject={(serviceId) => handleRequestQuote(serviceId)}
                />
              )}

              {isServicePage && (
                <ServicePage
                  service={getServiceById(activePage as ServiceId)}
                  onNavigate={navigateTo}
                  onRequestQuote={handleRequestQuote}
                />
              )}

              {activePage === 'contato' && (
                <ContactPage
                  initialProjectType={quoteDraft.serviceId}
                  initialProjectContext={quoteDraft.context}
                  onNavigate={navigateTo}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer onNavigate={navigateTo} />
      </div>
    </MotionConfig>
  );
}
