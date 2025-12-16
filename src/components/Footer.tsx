import type { Locale } from '../i18n/translations';
import { useTranslations } from '../i18n/utils';

interface FooterProps {
  locale?: string;
}

export default function Footer({ locale = 'en' }: FooterProps) {
  const t = useTranslations(locale as Locale);
  const homePath = locale === 'pl' ? '/' : `/${locale}`;
  const contactPath = locale === 'pl' ? '/contact' : `/${locale}/contact`;
  const privacyPath = locale === 'pl' ? '/pl/privacy' : `/${locale}/privacy`;
  const termsPath = locale === 'pl' ? '/pl/terms' : `/${locale}/terms`;

  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <a
              href={homePath}
              className="text-2xl font-bold text-white hover:text-[#E11D48] transition-colors duration-300 inline-block mb-4"
            >
              <span className="font-extrabold">C</span>ore<span className="font-extrabold">S</span>
              hot
            </a>
            <p className="text-[#9CA3AF] mb-4 max-w-md">{t('footer.description')}</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`${homePath}#products`}
                  className="text-[#9CA3AF] hover:text-[#E11D48] transition-colors duration-300"
                >
                  {t('footer.products')}
                </a>
              </li>
              <li>
                <a
                  href={`${homePath}#solutions`}
                  className="text-[#9CA3AF] hover:text-[#E11D48] transition-colors duration-300"
                >
                  {t('footer.software')}
                </a>
              </li>
              <li>
                <a
                  href={`${homePath}#about`}
                  className="text-[#9CA3AF] hover:text-[#E11D48] transition-colors duration-300"
                >
                  {t('footer.about')}
                </a>
              </li>
              <li>
                <a
                  href={contactPath}
                  className="text-[#9CA3AF] hover:text-[#E11D48] transition-colors duration-300"
                >
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={privacyPath}
                  className="text-[#9CA3AF] hover:text-[#E11D48] transition-colors duration-300"
                >
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a
                  href={termsPath}
                  className="text-[#9CA3AF] hover:text-[#E11D48] transition-colors duration-300"
                >
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#6B7280] text-sm text-center md:text-left">
              {t('footer.copyright')}
            </p>
            <a
              href="mailto:hello@coreshot.eu"
              className="text-[#9CA3AF] hover:text-[#E11D48] transition-colors duration-300 text-sm"
            >
              hello@coreshot.eu
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
