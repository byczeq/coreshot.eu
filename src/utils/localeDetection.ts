import type { Locale } from '../i18n/translations';

const LOCALE_STORAGE_KEY = 'coreshot_preferred_locale';

export async function detectUserLocale(): Promise<Locale> {
  const storedLocale = getStoredLocale();
  if (storedLocale) {
    return storedLocale;
  }

  const geoLocale = await detectLocaleByGeolocation();
  if (geoLocale) {
    return geoLocale;
  }

  const browserLocale = detectLocaleByBrowser();
  return browserLocale;
}

export function getStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null;

  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (stored && ['en', 'de', 'pl', 'fr', 'it'].includes(stored)) {
    return stored as Locale;
  }
  return null;
}

export function setStoredLocale(locale: Locale): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

export async function detectLocaleByGeolocation(): Promise<Locale | null> {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    const countryCode = data.country_code;

    const countryToLocale: Record<string, Locale> = {
      DE: 'de',
      AT: 'de',
      CH: 'de',
      PL: 'pl',
      FR: 'fr',
      IT: 'it',
      GB: 'en',
      US: 'en',
      CA: 'en',
      AU: 'en',
      NZ: 'en',
      IE: 'en',
    };

    return countryToLocale[countryCode] || null;
  } catch (error) {
    console.warn('Geolocation detection failed:', error);
    return null;
  }
}

export function detectLocaleByBrowser(): Locale {
  if (typeof window === 'undefined') return 'pl';

  const browserLang = navigator.language.toLowerCase();

  if (browserLang.startsWith('de')) return 'de';
  if (browserLang.startsWith('pl')) return 'pl';
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('it')) return 'it';
  if (browserLang.startsWith('en')) return 'en';

  return 'pl';
}

export function getCurrentLocaleFromUrl(): Locale {
  if (typeof window === 'undefined') return 'pl';

  const pathname = window.location.pathname;
  const match = pathname.match(/^\/(en|de|pl|fr|it)/);

  if (match) {
    return match[1] as Locale;
  }

  return 'pl';
}

export function shouldRedirectToDetectedLocale(): boolean {
  if (typeof window === 'undefined') return false;

  const hasVisited = sessionStorage.getItem('coreshot_has_visited');
  return !hasVisited;
}

export function markAsVisited(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.setItem('coreshot_has_visited', 'true');
}
