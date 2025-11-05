export const translations = {
  en: {
    nav: {
      products: 'Products',
      solutions: 'Solutions',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      title: 'CoreShot: Precision at Your Core',
      subtitle: 'Premium accessories. Smart software.',
      ctaPrimary: 'Explore Products',
      ctaSecondary: 'Book a Demo',
    },
    products: {
      title: 'Products & Solutions',
      gear: {
        title: 'Gear That Hits the Mark',
        feature1: 'Premium materials engineered for durability and precision',
        feature2: 'Ergonomic designs tested by competitive shooters',
        feature3: 'Compliant with European shooting sports regulations',
        cta: 'View Range',
      },
      software: {
        title: 'Manage Your Range Smarter',
        feature1: 'Real-time booking and lane management system',
        feature2: 'Member tracking, scoring, and performance analytics',
        feature3: 'Multi-language support and cloud-based accessibility',
        cta: 'See Demo',
      },
    },
    footer: {
      description:
        'Premium accessories and smart software for precision shooting management across Europe.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      products: 'Products',
      software: 'Software',
      about: 'About',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '© 2025 CoreShot. All rights reserved.',
    },
  },
  de: {
    nav: {
      products: 'Produkte',
      solutions: 'Lösungen',
      about: 'Über uns',
      contact: 'Kontakt',
    },
    hero: {
      title: 'CoreShot: Präzision im Kern',
      subtitle: 'Premium-Zubehör. Intelligente Software.',
      ctaPrimary: 'Produkte erkunden',
      ctaSecondary: 'Demo buchen',
    },
    products: {
      title: 'Produkte & Lösungen',
      gear: {
        title: 'Ausrüstung, die ins Schwarze trifft',
        feature1: 'Premium-Materialien für Langlebigkeit und Präzision',
        feature2: 'Ergonomische Designs, getestet von Wettkampfschützen',
        feature3: 'Konform mit europäischen Schießsportvorschriften',
        cta: 'Sortiment ansehen',
      },
      software: {
        title: 'Verwalten Sie Ihren Stand intelligenter',
        feature1: 'Echtzeit-Buchungs- und Bahnverwaltungssystem',
        feature2: 'Mitgliederverfolgung, Bewertung und Leistungsanalyse',
        feature3: 'Mehrsprachige Unterstützung und Cloud-Zugriff',
        cta: 'Demo ansehen',
      },
    },
    footer: {
      description:
        'Premium-Zubehör und intelligente Software für präzises Schießstandmanagement in ganz Europa.',
      quickLinks: 'Schnelllinks',
      legal: 'Rechtliches',
      products: 'Produkte',
      software: 'Software',
      about: 'Über uns',
      privacy: 'Datenschutz',
      terms: 'Nutzungsbedingungen',
      copyright: '© 2025 CoreShot. Alle Rechte vorbehalten.',
    },
  },
  pl: {
    nav: {
      products: 'Produkty',
      solutions: 'Rozwiązania',
      about: 'O nas',
      contact: 'Kontakt',
    },
    hero: {
      title: 'CoreShot: Precyzja w Centrum',
      subtitle: 'Wysokiej jakości akcesoria. Inteligentne oprogramowanie.',
      ctaPrimary: 'Poznaj produkty',
      ctaSecondary: 'Umów demo',
    },
    products: {
      title: 'Produkty i Rozwiązania',
      gear: {
        title: 'Sprzęt, który trafia w dziesiątkę',
        feature1: 'Materiały premium zaprojektowane dla trwałości i precyzji',
        feature2: 'Ergonomiczne projekty testowane przez strzelców sportowych',
        feature3: 'Zgodne z europejskimi przepisami strzelectwa sportowego',
        cta: 'Zobacz ofertę',
      },
      software: {
        title: 'Zarządzaj swoją strzelnicą mądrzej',
        feature1: 'System rezerwacji i zarządzania stanowiskami w czasie rzeczywistym',
        feature2: 'Śledzenie członków, punktacja i analiza wydajności',
        feature3: 'Wsparcie wielojęzyczne i dostęp w chmurze',
        cta: 'Zobacz demo',
      },
    },
    footer: {
      description:
        'Wysokiej jakości akcesoria i inteligentne oprogramowanie do precyzyjnego zarządzania strzelnicami w całej Europie.',
      quickLinks: 'Szybkie linki',
      legal: 'Prawne',
      products: 'Produkty',
      software: 'Oprogramowanie',
      about: 'O nas',
      privacy: 'Polityka prywatności',
      terms: 'Regulamin',
      copyright: '© 2025 CoreShot. Wszelkie prawa zastrzeżone.',
    },
  },
} as const;

export type Locale = keyof typeof translations;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}
