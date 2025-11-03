import { useEffect, useState } from 'react';

export default function StickyHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = ['EN', 'DE', 'PL'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F9FAFB] border-b-[6px] border-[#111827]'
          : 'bg-[#F9FAFB]'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="/"
            className="text-2xl font-black text-[#111827] hover:text-[#DC2626] transition-colors duration-200 uppercase tracking-wider"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            <span className="text-[#111827]">CORE</span>
            <span className="text-[#DC2626]">S</span>
            <span className="text-[#111827]">HOT</span>
          </a>

          <nav className="hidden md:flex items-center space-x-6">
            <a
              href="#products"
              className="text-[#111827] hover:text-[#DC2626] transition-colors duration-200 font-black uppercase tracking-wide text-sm border-b-[4px] border-transparent hover:border-[#DC2626]"
            >
              Products
            </a>
            <a
              href="#solutions"
              className="text-[#111827] hover:text-[#DC2626] transition-colors duration-200 font-black uppercase tracking-wide text-sm border-b-[4px] border-transparent hover:border-[#DC2626]"
            >
              Solutions
            </a>
            <a
              href="#about"
              className="text-[#111827] hover:text-[#DC2626] transition-colors duration-200 font-black uppercase tracking-wide text-sm border-b-[4px] border-transparent hover:border-[#DC2626]"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-[#111827] hover:text-[#DC2626] transition-colors duration-200 font-black uppercase tracking-wide text-sm border-b-[4px] border-transparent hover:border-[#DC2626]"
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 border-[4px] border-[#111827]">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-4 py-2 text-sm font-black transition-all duration-200 uppercase ${
                    currentLang === lang
                      ? 'bg-[#111827] text-[#F9FAFB]'
                      : 'text-[#111827] hover:bg-[#4B5563] hover:text-[#F9FAFB]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-[#111827] p-2 border-[4px] border-[#111827] hover:bg-[#111827] hover:text-[#F9FAFB] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={3}
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
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
          <nav className="py-4 space-y-4 border-t-[4px] border-[#111827]">
            <a
              href="#products"
              className="block text-[#111827] hover:text-[#DC2626] transition-colors duration-200 font-black uppercase py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#solutions"
              className="block text-[#111827] hover:text-[#DC2626] transition-colors duration-200 font-black uppercase py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#about"
              className="block text-[#111827] hover:text-[#DC2626] transition-colors duration-200 font-black uppercase py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-[#111827] hover:text-[#DC2626] transition-colors duration-200 font-black uppercase py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex items-center space-x-2 pt-4">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setCurrentLang(lang);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-sm font-black transition-all duration-200 uppercase border-[4px] border-[#111827] ${
                    currentLang === lang
                      ? 'bg-[#111827] text-[#F9FAFB]'
                      : 'text-[#111827] hover:bg-[#111827] hover:text-[#F9FAFB]'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
