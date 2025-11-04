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
          ? 'bg-[#F9FAFB]/95 backdrop-blur-sm border-b-[3px] border-[#111827]'
          : 'bg-[#F9FAFB]'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="/"
            className="text-2xl font-black text-[#111827] hover:text-[#DC2626] transition-colors duration-300 tracking-wide"
            style={{ fontFamily: 'Montserrat, sans-serif', fontStretch: 'condensed' }}
          >
            <span className="text-[#111827]">CORE</span>
            <span className="text-[#DC2626]">S</span>
            <span className="text-[#111827]">HOT</span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#products"
              className="text-[#111827] hover:text-[#DC2626] transition-colors duration-300 font-bold text-sm relative group"
            >
              Products
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#DC2626] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
            <a
              href="#solutions"
              className="text-[#111827] hover:text-[#DC2626] transition-colors duration-300 font-bold text-sm relative group"
            >
              Solutions
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#DC2626] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
            <a
              href="#about"
              className="text-[#111827] hover:text-[#DC2626] transition-colors duration-300 font-bold text-sm relative group"
            >
              About
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#DC2626] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
            <a
              href="#contact"
              className="text-[#111827] hover:text-[#DC2626] transition-colors duration-300 font-bold text-sm relative group"
            >
              Contact
              <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-[#DC2626] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center rounded-[6px] border-[2px] border-[#111827] overflow-hidden shadow-[4px_4px_0px_0px_rgba(17,24,39,1)]">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-4 py-2 text-sm font-bold transition-all duration-300 ${
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
              className="md:hidden text-[#111827] p-2 rounded-[6px] border-[2px] border-[#111827] hover:bg-[#111827] hover:text-[#F9FAFB] transition-colors duration-300 shadow-[3px_3px_0px_0px_rgba(17,24,39,1)]"
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
          <nav className="py-4 space-y-4 border-t-[2px] border-[#4B5563]">
            <a
              href="#products"
              className="block text-[#111827] hover:text-[#DC2626] transition-colors duration-300 font-bold py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#solutions"
              className="block text-[#111827] hover:text-[#DC2626] transition-colors duration-300 font-bold py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Solutions
            </a>
            <a
              href="#about"
              className="block text-[#111827] hover:text-[#DC2626] transition-colors duration-300 font-bold py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block text-[#111827] hover:text-[#DC2626] transition-colors duration-300 font-bold py-2"
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
                  className={`px-4 py-2 text-sm font-bold transition-all duration-300 rounded-[6px] border-[2px] border-[#111827] ${
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
