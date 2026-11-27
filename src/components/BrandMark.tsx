import { useState } from 'react';

interface BrandMarkProps {
  size?: 'sm' | 'md';
}

export function BrandMark({ size = 'md' }: BrandMarkProps) {
  const [imgError, setImgError] = useState(false);

  const emblemClass = size === 'sm' ? 'h-8 w-8' : 'h-9 w-9';
  const textClass = size === 'sm' ? 'text-base' : 'text-[1.15rem]';

  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 select-none">
      <span
        className={`${emblemClass} relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-white/15 bg-[#0B1122]`}
      >
        {!imgError ? (
          <img
            src="/assets/aistudio/image_3ac23637.png"
            alt="Emblema Koreo Tech"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <svg
            viewBox="0 0 36 36"
            className="h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            <rect width="36" height="36" fill="#060D21" />
            <path
              d="M11 10V26M11 18L21 10M15.5 14.5L23.5 26"
              stroke="#3B82F6"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      <span className={`font-display ${textClass} font-bold tracking-tight text-white`}>
        Koreo <span className="text-[#3B82F6]">Tech</span>
      </span>
    </span>
  );
}
