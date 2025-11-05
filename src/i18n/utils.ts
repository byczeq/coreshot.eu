import { translations, type Locale } from './translations';

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Locale;
  return 'en';
}

export function useTranslations(lang: Locale) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: Record<string, unknown> | string = translations[lang];

    for (const k of keys) {
      if (typeof value === 'object' && value !== null) {
        value = value[k] as Record<string, unknown> | string;
      }
    }

    return typeof value === 'string' ? value : key;
  };
}
