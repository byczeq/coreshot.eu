import { useState } from 'react';
import { useTranslations } from '../i18n/utils';
import type { Locale } from '../i18n/translations';

interface InteractiveHeroProps {
  locale?: string;
}

export default function InteractiveHero({ locale = 'en' }: InteractiveHeroProps) {
  const t = useTranslations(locale as Locale);
  const [variant] = useState<'light' | 'dynamic'>('dynamic');

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 bg-gradient-to-b from-[#111827] to-[#1C2526] overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="relative">
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              className="relative z-10"
            >
              <defs>
                {variant === 'dynamic' && (
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                )}
              </defs>

              <polygon
                points="60,10 90,30 90,70 60,90 30,70 30,30"
                fill="none"
                stroke="#4B5563"
                strokeWidth="1.5"
                opacity="0.6"
              />

              <line
                x1="60"
                y1="20"
                x2="60"
                y2="45"
                stroke="#4B5563"
                strokeWidth="1.5"
              />
              <line
                x1="60"
                y1="75"
                x2="60"
                y2="100"
                stroke="#4B5563"
                strokeWidth="1.5"
              />
              <line
                x1="20"
                y1="60"
                x2="45"
                y2="60"
                stroke="#4B5563"
                strokeWidth="1.5"
              />

              <circle
                cx="60"
                cy="60"
                r="3"
                fill="#4B5563"
              />

              <line
                x1="60"
                y1="60"
                x2="135"
                y2="60"
                stroke="#DC2626"
                strokeWidth="2"
                filter={variant === 'dynamic' ? 'url(#glow)' : undefined}
                className={variant === 'dynamic' ? 'animate-pulse-trajectory' : ''}
              />

              <circle
                cx="135"
                cy="60"
                r="2"
                fill="#DC2626"
                filter={variant === 'dynamic' ? 'url(#glow)' : undefined}
              />
            </svg>
          </div>

          <div className="space-y-6 max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#F9FAFB] tracking-tight leading-tight">
              {t('hero.title')}
            </h1>

            <p className="text-xl md:text-2xl text-[#6B7280] font-normal">
              {t('hero.subtitle')}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <a
              href="#products"
              className="px-8 py-4 bg-[#DC2626] text-[#F9FAFB] rounded-lg font-semibold text-sm hover:bg-[#B91C1C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 min-w-[200px]"
            >
              {t('hero.ctaPrimary')}
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent text-[#F9FAFB] border-2 border-[#4B5563] rounded-lg font-semibold text-sm hover:border-[#DC2626] hover:text-[#DC2626] transition-all duration-300 min-w-[200px]"
            >
              {t('hero.ctaSecondary')}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-trajectory {
          0%, 100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-pulse-trajectory {
          animation: pulse-trajectory 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
