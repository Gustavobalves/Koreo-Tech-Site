import { ArrowLeft, ArrowRight } from 'lucide-react';
import type { PageId } from '../data/services';

interface NotFoundPageProps {
  onNavigate: (page: PageId) => void;
}

const focusRing =
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060913]';

export function NotFoundPage({ onNavigate }: NotFoundPageProps) {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-start px-4 py-28 sm:px-6 sm:py-36 lg:px-8">
      <p className="font-mono text-sm font-semibold text-sky-400">Erro 404</p>
      <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Página não encontrada.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
        O endereço que você acessou não existe ou foi movido. Volte para a página inicial ou fale diretamente com nossa equipe.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-4">
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className={`inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-md bg-[#2563EB] px-6 py-3 text-base font-semibold text-white transition-colors duration-150 hover:bg-[#1D4ED8] ${focusRing}`}
        >
          <ArrowLeft className="h-5 w-5" aria-hidden="true" />
          Voltar para a página inicial
        </button>

        <button
          type="button"
          onClick={() => onNavigate('contato')}
          className={`inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2 rounded-md border border-white/25 bg-transparent px-6 py-3 text-base font-semibold text-white transition-colors duration-150 hover:border-white/45 ${focusRing}`}
        >
          Ir para Contato
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
