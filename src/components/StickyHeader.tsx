import { useEffect, useState } from 'react';
import { useTranslations } from '../i18n/utils';
import type { Locale } from '../i18n/translations';

interface StickyHeaderProps {
  locale?: string;
}

export default function StickyHeader({ locale = 'en' }: StickyHeaderProps) {
  const t = useTranslations(locale as Locale);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'pl', label: 'PL' }
  ];

  const handleLanguageChange = (langCode: string) => {
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|de|pl)/, '');
    const newPath = langCode === 'en' ? pathWithoutLang || '/' : `/${langCode}${pathWithoutLang || '/'}`;
    window.location.href = newPath;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1C2526]/95 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href={locale === 'en' ? '/' : `/${locale}`}
            className="text-2xl font-bold text-white hover:text-[#E11D48] transition-colors duration-300"
          >
            <span className="font-extrabold">C</span>ore<span className="font-extrabold">S</span>hot
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#products"
              className="text-white hover:text-[#E11D48] transition-colors duration-300 font-medium relative group"
            >
              {t('nav.products')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E11D48] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#solutions"
              className="text-white hover:text-[#E11D48] transition-colors duration-300 font-medium relative group"
            >
              {t('nav.solutions')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E11D48] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#about"
              className="text-white hover:text-[#E11D48] transition-colors duration-300 font-medium relative group"
            >
              {t('nav.about')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E11D48] group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[#E11D48] transition-colors duration-300 font-medium relative group"
            >
              {t('nav.contact')}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E11D48] group-hover:w-full transition-all duration-300" />
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`px-3 py-1 text-sm font-medium transition-all duration-300 rounded-sm ${
                    locale === lang.code
                      ? 'bg-[#E11D48] text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2 hover:bg-white/10 rounded-sm transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="py-4 space-y-4 border-t border-white/10">
            <a
              href="#products"
              className="block text-white hover:text-[#E11D48] transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.products')}
            </a>
            <a
              href="#solutions"
              className="block text-white hover:text-[#E11D48] transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.solutions')}
            </a>
            <a
              href="#about"
              className="block text-white hover:text-[#E11D48] transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-[#E11D48] transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </a>
            <div className="flex items-center space-x-2 pt-4">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    handleLanguageChange(lang.code);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-sm ${
                    locale === lang.code
                      ? 'bg-[#E11D48] text-white'
                      : 'text-white/70 hover:text-white bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
