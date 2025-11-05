import { useTranslations } from '../i18n/utils';
import type { Locale } from '../i18n/translations';

interface ProductsSectionProps {
  locale?: string;
}

export default function ProductsSection({ locale = 'en' }: ProductsSectionProps) {
  const t = useTranslations(locale as Locale);
  return (
    <section id="products" className="py-24 relative" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto">
        <h2
          id="products-heading"
          className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center animate-fade-in-up"
        >
          {t('products.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <article className="group bg-white/5 backdrop-blur-sm rounded-sm border border-white/10 overflow-hidden hover:border-[#E11D48]/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E11D48]/20">
            <div
              className="aspect-video bg-gradient-to-br from-[#E11D48]/20 to-[#E11D48]/5 flex items-center justify-center relative overflow-hidden"
              role="img"
              aria-label="Shooting accessories product showcase"
            >
              <div
                className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6069057/pexels-photo-6069057.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-30"
                role="presentation"
              />
              <svg
                className="w-32 h-32 text-white/80 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E11D48] transition-colors duration-300">
                {t('products.gear.title')}
              </h3>

              <ul className="space-y-3 mb-6 text-[#9CA3AF]">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#E11D48] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{t('products.gear.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#E11D48] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{t('products.gear.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#E11D48] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{t('products.gear.feature3')}</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-[#E11D48] text-white rounded-sm font-semibold hover:bg-[#BE123C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t('products.gear.cta')}
              </a>
            </div>
          </article>

          <article className="group bg-white/5 backdrop-blur-sm rounded-sm border border-white/10 overflow-hidden hover:border-[#E11D48]/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E11D48]/20">
            <div
              className="aspect-video bg-gradient-to-br from-[#E11D48]/20 to-[#E11D48]/5 flex items-center justify-center relative overflow-hidden"
              role="img"
              aria-label="Range management software interface"
            >
              <div
                className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-cover bg-center opacity-20"
                role="presentation"
              />
              <svg
                className="w-32 h-32 text-white/80 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#E11D48] transition-colors duration-300">
                {t('products.software.title')}
              </h3>

              <ul className="space-y-3 mb-6 text-[#9CA3AF]">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#E11D48] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{t('products.software.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#E11D48] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{t('products.software.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#E11D48] mr-3 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{t('products.software.feature3')}</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-[#E11D48] text-white rounded-sm font-semibold hover:bg-[#BE123C] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t('products.software.cta')}
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
