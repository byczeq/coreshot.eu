import { useEffect } from 'react';
import {
  detectUserLocale,
  getCurrentLocaleFromUrl,
  markAsVisited,
  setStoredLocale,
  shouldRedirectToDetectedLocale,
} from '../utils/localeDetection';

interface LocaleDetectorProps {
  currentLocale: string;
}

export default function LocaleDetector({ currentLocale: _currentLocale }: LocaleDetectorProps) {
  useEffect(() => {
    const handleLocaleDetection = async () => {
      if (!shouldRedirectToDetectedLocale()) {
        return;
      }

      const detectedLocale = await detectUserLocale();
      const urlLocale = getCurrentLocaleFromUrl();

      if (detectedLocale !== urlLocale) {
        const currentPath = window.location.pathname;
        const pathWithoutLang = currentPath.replace(/^\/(en|de|pl)/, '');
        const newPath =
          detectedLocale === 'pl'
            ? pathWithoutLang || '/'
            : `/${detectedLocale}${pathWithoutLang || '/'}`;

        setStoredLocale(detectedLocale);
        markAsVisited();

        window.location.href = newPath;
      } else {
        markAsVisited();
      }
    };

    handleLocaleDetection();
  }, []);

  return null;
}
