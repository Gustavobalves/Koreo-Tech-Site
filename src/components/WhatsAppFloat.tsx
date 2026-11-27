import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/services';

export function WhatsAppFloat() {
  const digits = COMPANY_INFO.whatsappNumber.replace(/\D/g, '');
  if (digits.length < 10) {
    return null;
  }

  const href = `https://wa.me/${digits}?text=${encodeURIComponent(
    COMPANY_INFO.whatsappPrefill
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Conversar no WhatsApp da ${COMPANY_INFO.brandName}`}
      className="fixed right-5 bottom-5 z-40 inline-flex min-h-[48px] items-center gap-2.5 rounded-md border border-emerald-500/40 bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#060913]"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
