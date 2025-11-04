import { useEffect, useRef, useState } from 'react';
import { useTranslations } from '../i18n/utils';
import type { Locale } from '../i18n/translations';

interface InteractiveHeroProps {
  locale?: string;
}

export default function InteractiveHero({ locale = 'en' }: InteractiveHeroProps) {
  const t = useTranslations(locale as Locale);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const calculateTransform = (speed: number) => {
    if (!heroRef.current) return {};
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (mousePosition.x - centerX) / centerX;
    const deltaY = (mousePosition.y - centerY) / centerY;

    return {
      transform: `translate(${deltaX * speed}px, ${deltaY * speed}px)`,
      transition: 'transform 0.3s ease-out',
    };
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center py-20 text-center relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/image.png)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C2526]/60 via-[#1C2526]/70 to-[#1C2526]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1C2526] via-transparent to-[#1C2526]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C2526] via-[#1C2526]/80 to-transparent" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E11D48]/10 rounded-full blur-3xl"
          style={calculateTransform(15)}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E11D48]/5 rounded-full blur-3xl"
          style={calculateTransform(-20)}
        />
      </div>

      <div className="mb-12 relative z-10 animate-float" role="img" aria-label="Precision target icon">
        <svg
          ref={targetRef}
          width="120"
          height="120"
          viewBox="0 0 120 120"
          className="mx-auto"
          style={calculateTransform(10)}
        >
          <circle
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2"
            opacity="0.3"
            className="animate-pulse-slow"
          />
          <circle cx="60" cy="60" r="3" fill="#FFFFFF" />
          <line
            x1="30"
            y1="60"
            x2="52"
            y2="60"
            stroke="#FFFFFF"
            strokeWidth="2"
            className="animate-pulse-slow"
          />
          <line
            x1="68"
            y1="60"
            x2="90"
            y2="60"
            stroke="#FFFFFF"
            strokeWidth="2"
            className="animate-pulse-slow"
          />
          <line
            x1="60"
            y1="30"
            x2="60"
            y2="52"
            stroke="#FFFFFF"
            strokeWidth="2"
            className="animate-pulse-slow"
          />
          <line
            x1="60"
            y1="68"
            x2="60"
            y2="90"
            stroke="#FFFFFF"
            strokeWidth="2"
            className="animate-pulse-slow"
          />
          <path
            d="M 75 60 L 105 45"
            stroke="#E11D48"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-glow"
          />
        </svg>
      </div>

      <h1
        id="hero-heading"
        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-up"
        style={{ animationDelay: '0.1s' }}
      >
        {t('hero.title')}
      </h1>

      <p
        className="text-xl sm:text-2xl text-[#9CA3AF] mb-12 max-w-3xl leading-relaxed animate-fade-in-up"
        style={{ animationDelay: '0.2s' }}
      >
        {t('hero.subtitle')}
      </p>

      <div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
        style={{ animationDelay: '0.3s' }}
      >
        <a
          href="#products"
          className="group px-10 py-4 bg-[#E11D48] text-white rounded-sm font-semibold hover:bg-[#BE123C] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#E11D48]/50 transform hover:-translate-y-1 relative overflow-hidden"
        >
          <span className="relative z-10">{t('hero.ctaPrimary')}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
        </a>
        <a
          href="#contact"
          className="px-10 py-4 bg-transparent text-white rounded-sm font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-[#E11D48]/50 transform hover:-translate-y-1"
        >
          {t('hero.ctaSecondary')}
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
