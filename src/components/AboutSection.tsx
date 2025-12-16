import type { Locale } from '../i18n/translations';
import { useTranslations } from '../i18n/utils';

interface AboutSectionProps {
  locale?: string;
}

export default function AboutSection({ locale = 'en' }: AboutSectionProps) {
  const t = useTranslations(locale as Locale);
  return (
    <section id="about" className="py-24 relative" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="mb-8 flex justify-center animate-fade-in-up"
          role="img"
          aria-label="Precision target icon"
        >
          <div className="w-24 h-24 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10">
            <svg width="48" height="48" viewBox="0 0 120 120" className="mx-auto">
              <circle
                cx="60"
                cy="60"
                r="54"
                fill="none"
                stroke="#E11D48"
                strokeWidth="3"
                opacity="0.5"
              />
              <circle cx="60" cy="60" r="3" fill="#E11D48" />
              <line x1="30" y1="60" x2="52" y2="60" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="68" y1="60" x2="90" y2="60" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="60" y1="30" x2="60" y2="52" stroke="#FFFFFF" strokeWidth="2" />
              <line x1="60" y1="68" x2="60" y2="90" stroke="#FFFFFF" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <h2
          id="about-heading"
          className="text-4xl sm:text-5xl font-bold text-white mb-8 animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          {t('about.title')}
        </h2>

        <div className="space-y-6 text-lg text-[#9CA3AF] leading-relaxed">
          <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('about.paragraph1')}
          </p>

          <p className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {t('about.paragraph2')}
          </p>

          <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {t('about.paragraph3')}
          </p>
        </div>

        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <a
            href="#solutions"
            className="inline-block px-10 py-4 bg-transparent text-white rounded-sm font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-[#E11D48]/50 transform hover:-translate-y-1"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
