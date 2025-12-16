import { useState } from 'react';
import type { Locale } from '../i18n/translations';
import { useTranslations } from '../i18n/utils';

interface ContactSectionProps {
  locale?: string;
}

export default function ContactSection({ locale = 'en' }: ContactSectionProps) {
  const t = useTranslations(locale as Locale);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    isRangeManager: false,
    newsletterEmail: '',
    verificationCode: '',
  });
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [subscribeMessage, setSubscribeMessage] = useState('');
  const [contactStatus, setContactStatus] = useState<'idle' | 'loading' | 'success' | 'error'>(
    'idle'
  );
  const [contactMessage, setContactMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('loading');
    setContactMessage('');

    try {
      const supabaseUrl =
        import.meta.env.PUBLIC_SUPABASE_URL || 'https://rrfbgwtakbhqajwgvjbe.supabase.co';
      const supabaseAnonKey =
        import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyZmJnd3Rha2JocWFqd2d2amJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMjA5MzIsImV4cCI6MjA3Nzg5NjkzMn0.oFHrWSl2U5-vGAwSyN0iyjBPfRvLP48bD_LpghW_3dA';
      const apiUrl = `${supabaseUrl}/functions/v1/contact`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          locale: locale,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t('contact.errorMessage'));
      }

      setContactStatus('success');
      setContactMessage(t('contact.thankYouMessage'));
      setFormData({ ...formData, name: '', email: '', message: '', isRangeManager: false });

      setTimeout(() => {
        setContactStatus('idle');
        setContactMessage('');
      }, 5000);
    } catch (error) {
      setContactStatus('error');
      if (error instanceof Error) {
        setContactMessage(error.message);
      } else {
        setContactMessage(t('contact.errorMessage'));
      }

      setTimeout(() => {
        setContactStatus('idle');
        setContactMessage('');
      }, 5000);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus('loading');
    setSubscribeMessage('');

    try {
      const supabaseUrl =
        import.meta.env.PUBLIC_SUPABASE_URL || 'https://rrfbgwtakbhqajwgvjbe.supabase.co';
      const supabaseAnonKey =
        import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyZmJnd3Rha2JocWFqd2d2amJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIzMjA5MzIsImV4cCI6MjA3Nzg5NjkzMn0.oFHrWSl2U5-vGAwSyN0iyjBPfRvLP48bD_LpghW_3dA';
      const apiUrl = `${supabaseUrl}/functions/v1/subscribe`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${supabaseAnonKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.newsletterEmail,
          locale: locale,
          verificationCode: formData.verificationCode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || t('contact.errorSubscribe'));
      }

      setSubscribeStatus('success');
      setSubscribeMessage(t('contact.thankYouSubscribe'));
      setFormData({ ...formData, newsletterEmail: '', verificationCode: '' });

      setTimeout(() => {
        setSubscribeStatus('idle');
        setSubscribeMessage('');
      }, 5000);
    } catch (error) {
      setSubscribeStatus('error');
      if (error instanceof Error) {
        if (error.message.includes('already subscribed')) {
          setSubscribeMessage(t('contact.alreadySubscribed'));
        } else if (error.message.includes('Verification code is required')) {
          setSubscribeMessage(t('contact.codeRequired'));
        } else {
          setSubscribeMessage(error.message);
        }
      } else {
        setSubscribeMessage(t('contact.errorSubscribe'));
      }

      setTimeout(() => {
        setSubscribeStatus('idle');
        setSubscribeMessage('');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 relative" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto">
        <h2
          id="contact-heading"
          className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center animate-fade-in-up"
        >
          {t('contact.title')}
        </h2>
        <p
          className="text-xl text-[#9CA3AF] mb-12 text-center animate-fade-in-up"
          style={{ animationDelay: '0.1s' }}
        >
          {t('contact.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/10 animate-fade-in-up opacity-60"
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">{t('contact.sendMessage')}</h3>
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#E11D48]/50 transition-colors duration-300"
                  placeholder={t('contact.namePlaceholder')}
                  required
                  disabled
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#E11D48]/50 transition-colors duration-300"
                  placeholder={t('contact.emailPlaceholder')}
                  required
                  disabled
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#E11D48]/50 transition-colors duration-300 resize-none"
                  placeholder={t('contact.messagePlaceholder')}
                  required
                  disabled
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isRangeManager"
                  checked={formData.isRangeManager}
                  onChange={(e) => setFormData({ ...formData, isRangeManager: e.target.checked })}
                  className="w-5 h-5 bg-white/5 border border-white/10 rounded text-[#E11D48] focus:ring-[#E11D48] focus:ring-offset-0"
                  disabled
                />
                <label htmlFor="isRangeManager" className="ml-3 text-[#9CA3AF]">
                  {t('contact.isRangeManager')}
                </label>
              </div>

              <div className="relative group">
                <button
                  type="submit"
                  disabled
                  className="w-full px-8 py-4 bg-[#E11D48] text-white rounded-sm font-semibold hover:bg-[#BE123C] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#E11D48]/50 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t('contact.sendButton')}
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {t('contact.contactDisabled')}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
                </div>
              </div>

              {contactMessage && (
                <div
                  className={`mt-4 p-3 rounded-sm text-sm ${
                    contactStatus === 'success'
                      ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                  }`}
                >
                  {contactMessage}
                </div>
              )}
            </form>
          </div>

          <div
            className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/10 animate-fade-in-up opacity-60"
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">{t('contact.stayUpdated')}</h3>
            <p className="text-[#9CA3AF] mb-6 leading-relaxed">
              {t('contact.newsletterDescription')}
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="space-y-4"
              aria-label="Newsletter signup form"
            >
              <div>
                <label
                  htmlFor="newsletterEmail"
                  className="block text-sm font-medium text-[#9CA3AF] mb-2"
                >
                  {t('contact.emailAddress')}
                </label>
                <input
                  type="email"
                  id="newsletterEmail"
                  value={formData.newsletterEmail}
                  onChange={(e) => setFormData({ ...formData, newsletterEmail: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#E11D48]/50 transition-colors duration-300"
                  placeholder={t('contact.emailPlaceholder')}
                  required
                  disabled
                />
              </div>

              <div>
                <label
                  htmlFor="verificationCode"
                  className="block text-sm font-medium text-[#9CA3AF] mb-2"
                >
                  {t('contact.verificationCode')}
                </label>
                <input
                  type="text"
                  id="verificationCode"
                  value={formData.verificationCode}
                  onChange={(e) =>
                    setFormData({ ...formData, verificationCode: e.target.value.toUpperCase() })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#E11D48]/50 transition-colors duration-300 font-mono tracking-wider"
                  placeholder={t('contact.verificationCodePlaceholder')}
                  maxLength={8}
                  pattern="[A-Z0-9]{8}"
                  required
                  disabled
                />
                <p className="mt-2 text-xs text-[#9CA3AF]">{t('contact.verificationCodeHelp')}</p>
              </div>

              <div className="relative group">
                <button
                  type="submit"
                  disabled
                  className="w-full px-8 py-4 bg-transparent text-white rounded-sm font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-[#E11D48]/50 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {subscribeStatus === 'loading'
                    ? t('contact.subscribing')
                    : t('contact.getUpdates')}
                </button>
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {t('contact.newsletterDisabled')}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
                </div>
              </div>

              {subscribeMessage && (
                <div
                  className={`mt-4 p-3 rounded-sm text-sm ${
                    subscribeStatus === 'success'
                      ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                  }`}
                >
                  {subscribeMessage}
                </div>
              )}
            </form>

            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-[#9CA3AF] mb-4">{t('contact.reachDirectly')}</p>
              <a
                href="mailto:hello@coreshot.eu"
                className="flex items-center text-white hover:text-[#E11D48] transition-colors duration-300 group"
              >
                <svg
                  className="w-5 h-5 mr-3 text-[#E11D48]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                hello@coreshot.eu
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
