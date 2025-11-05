import { useEffect, useRef, useState } from 'react';
import { useTranslations } from '../i18n/utils';
import type { Locale } from '../i18n/translations';

interface WhyCoreShotProps {
  locale?: string;
}

const getFeatures = (t: ReturnType<typeof useTranslations>) => [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: t('whyCoreShot.feature1.title'),
    description: t('whyCoreShot.feature1.description'),
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: t('whyCoreShot.feature2.title'),
    description: t('whyCoreShot.feature2.description'),
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
    title: t('whyCoreShot.feature3.title'),
    description: t('whyCoreShot.feature3.description'),
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    ),
    title: t('whyCoreShot.feature4.title'),
    description: t('whyCoreShot.feature4.description'),
  },
];

export default function WhyCoreShot({ locale = 'en' }: WhyCoreShotProps) {
  const t = useTranslations(locale as Locale);
  const features = getFeatures(t);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="solutions"
      className="py-24 bg-white/[0.02]"
      ref={sectionRef}
      aria-labelledby="solutions-heading"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="solutions-heading"
          className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center animate-fade-in-up"
        >
          {t('whyCoreShot.title')}
        </h2>
        <p
          className="text-xl text-[#9CA3AF] mb-16 text-center max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          {t('whyCoreShot.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/10 hover:border-[#E11D48]/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E11D48]/20 ${
                visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transition: 'all 0.6s ease-out',
              }}
            >
              <div className="w-14 h-14 bg-[#E11D48]/20 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#E11D48]/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg
                  className="w-7 h-7 text-[#E11D48] group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E11D48] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed group-hover:text-[#9CA3AF] transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
