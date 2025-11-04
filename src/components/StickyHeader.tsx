import { useEffect, useState } from 'react';
import { useTranslations } from '../i18n/utils';
import { setStoredLocale } from '../utils/localeDetection';
import type { Locale } from '../i18n/translations';

interface StickyHeaderProps {
  locale?: string;
}

export default function StickyHeader({ locale = 'en' }: StickyHeaderProps) {
  const t = useTranslations(locale as Locale);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'pl', label: 'PL' }
  ];

  const handleLanguageChange = (langCode: string) => {
    setStoredLocale(langCode as Locale);
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(en|de|pl)/, '');
    const newPath = langCode === 'en' ? pathWithoutLang || '/' : `/${langCode}${pathWithoutLang || '/'}`;
    window.location.href = newPath;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#111827] border-b border-[#4B5563]/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href={locale === 'en' ? '/' : `/${locale}`}
            className="text-2xl font-bold text-[#F9FAFB] hover:text-[#DC2626] transition-colors duration-300 tracking-tight"
          >
            <span className="font-extrabold">C</span>ore<span className="font-extrabold">S</span>hot
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#products"
              className="text-[#F9FAFB] hover:text-[#DC2626] transition-colors duration-300 font-medium text-sm"
            >
              {t('nav.products')}
            </a>
            <a
              href="#solutions"
              className="text-[#F9FAFB] hover:text-[#DC2626] transition-colors duration-300 font-medium text-sm"
            >
              {t('nav.solutions')}
            </a>
            <a
              href="#about"
              className="text-[#F9FAFB] hover:text-[#DC2626] transition-colors duration-300 font-medium text-sm"
            >
              {t('nav.about')}
            </a>
            <a
              href="#contact"
              className="text-[#F9FAFB] hover:text-[#DC2626] transition-colors duration-300 font-medium text-sm"
            >
              {t('nav.contact')}
            </a>
          </nav>

          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`px-3 py-1 text-xs font-semibold transition-all duration-300 rounded-md ${
                    locale === lang.code
                      ? 'bg-[#DC2626] text-[#F9FAFB]'
                      : 'text-[#6B7280] hover:text-[#F9FAFB] hover:bg-[#4B5563]/20'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#F9FAFB] p-2 hover:bg-[#4B5563]/20 rounded-md transition-colors duration-300"
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
          <nav className="py-4 space-y-4 border-t border-[#4B5563]/20">
            <a
              href="#products"
              className="block text-[#F9FAFB] hover:text-[#DC2626] transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.products')}
            </a>
            <a
              href="#solutions"
              className="block text-[#F9FAFB] hover:text-[#DC2626] transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.solutions')}
            </a>
            <a
              href="#about"
              className="block text-[#F9FAFB] hover:text-[#DC2626] transition-colors duration-300 font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </a>
            <a
              href="#contact"
              className="block text-[#F9FAFB] hover:text-[#DC2626] transition-colors duration-300 font-medium py-2"
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
                  className={`px-4 py-2 text-xs font-semibold transition-all duration-300 rounded-md ${
                    locale === lang.code
                      ? 'bg-[#DC2626] text-[#F9FAFB]'
                      : 'text-[#6B7280] hover:text-[#F9FAFB] bg-[#4B5563]/10 hover:bg-[#4B5563]/20'
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
