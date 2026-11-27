import { useEffect, useState } from 'react';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { Navbar } from './components/Navbar';
import { NotFoundPage } from './components/NotFoundPage';
import { ServicePage } from './components/ServicePage';
import { WhatsAppFloat } from './components/WhatsAppFloat';
import {
  getHashFromPageId,
  getPageIdFromHash,
  getSeoMetaForPage,
  getServiceById,
  type PageId,
  type ServiceId,
} from './data/services';

interface QuoteDraft {
  serviceId?: ServiceId;
  context?: string;
}

function updateMetaTag(selector: string, content: string) {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute('content', content);
  }
}

export default function App() {
  const [activePage, setActivePage] = useState<PageId>(() =>
    getPageIdFromHash(window.location.hash, window.location.pathname)
  );
  const [quoteDraft, setQuoteDraft] = useState<QuoteDraft>({});

  useEffect(() => {
    const syncRoute = () => {
      setActivePage(
        getPageIdFromHash(window.location.hash, window.location.pathname)
      );
    };
    window.addEventListener('hashchange', syncRoute);
    window.addEventListener('popstate', syncRoute);
    return () => {
      window.removeEventListener('hashchange', syncRoute);
      window.removeEventListener('popstate', syncRoute);
    };
  }, []);

  // Update SEO title & meta descriptions per page
  useEffect(() => {
    const seo = getSeoMetaForPage(activePage);
    document.title = seo.title;
    updateMetaTag('meta[name="description"]', seo.description);
    updateMetaTag('meta[property="og:title"]', seo.title);
    updateMetaTag('meta[property="og:description"]', seo.description);
  }, [activePage]);

  const navigateToSection = (sectionId: string) => {
    const scrollToTarget = () => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (activePage !== 'home') {
      setActivePage('home');
      window.history.pushState(null, '', `/#${sectionId}`);
      window.setTimeout(scrollToTarget, 60);
    } else {
      window.history.pushState(null, '', `/#${sectionId}`);
      scrollToTarget();
    }
  };

  const navigateTo = (page: PageId, sectionId?: string) => {
    if (sectionId) {
      navigateToSection(sectionId);
      return;
    }
    setActivePage(page);
    const nextHash = getHashFromPageId(page);
    if (window.location.pathname !== '/' || window.location.hash !== nextHash) {
      window.history.pushState(null, '', `/${nextHash}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestQuote = (serviceId?: ServiceId, exampleTitle?: string) => {
    setQuoteDraft({ serviceId, context: exampleTitle });
    navigateTo('contato');
  };

  const isServicePage =
    activePage !== 'home' && activePage !== 'contato' && activePage !== '404';

  return (
    <div className="flex min-h-screen flex-col bg-[#060913] text-slate-100">
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-[#2563EB] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Pular para o conteúdo principal
      </a>

      <Navbar activePage={activePage} onNavigate={navigateTo} />

      <main id="conteudo-principal" className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onStartProject={handleRequestQuote}
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

        {activePage === '404' && <NotFoundPage onNavigate={navigateTo} />}
      </main>

      <Footer
        onNavigate={navigateTo}
        onNavigateSection={navigateToSection}
      />

      <WhatsAppFloat />
    </div>
  );
}
