import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    isRangeManager: false,
    newsletterEmail: '',
  });
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus('loading');
    setSubscribeMessage('');

    try {
      const locale = window.location.pathname.split('/')[1] || 'pl';
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/subscribe`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.newsletterEmail,
          locale: locale === 'en' || locale === 'de' ? locale : 'pl',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setSubscribeStatus('success');
      setSubscribeMessage('Thank you for subscribing!');
      setFormData({ ...formData, newsletterEmail: '' });

      setTimeout(() => {
        setSubscribeStatus('idle');
        setSubscribeMessage('');
      }, 5000);
    } catch (error) {
      setSubscribeStatus('error');
      if (error instanceof Error) {
        if (error.message.includes('already subscribed')) {
          setSubscribeMessage('This email is already subscribed.');
        } else {
          setSubscribeMessage(error.message);
        }
      } else {
        setSubscribeMessage('Failed to subscribe. Please try again.');
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
        <h2 id="contact-heading" className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center animate-fade-in-up">
          Ready to Elevate Your Range?
        </h2>
        <p className="text-xl text-[#9CA3AF] mb-12 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Get in touch with our team or subscribe to stay updated
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/10 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#E11D48]/50 transition-colors duration-300"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#E11D48]/50 transition-colors duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#E11D48]/50 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your needs..."
                  required
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isRangeManager"
                  checked={formData.isRangeManager}
                  onChange={(e) =>
                    setFormData({ ...formData, isRangeManager: e.target.checked })
                  }
                  className="w-5 h-5 bg-white/5 border border-white/10 rounded text-[#E11D48] focus:ring-[#E11D48] focus:ring-offset-0"
                />
                <label htmlFor="isRangeManager" className="ml-3 text-[#9CA3AF]">
                  I manage a range
                </label>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-[#E11D48] text-white rounded-sm font-semibold hover:bg-[#BE123C] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#E11D48]/50 transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>

          <div
            className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/10 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Stay Updated</h3>
            <p className="text-[#9CA3AF] mb-6 leading-relaxed">
              Subscribe to our newsletter for product updates, industry insights, and exclusive
              offers delivered straight to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-4" aria-label="Newsletter signup form">
              <div>
                <label htmlFor="newsletterEmail" className="block text-sm font-medium text-[#9CA3AF] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="newsletterEmail"
                  value={formData.newsletterEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, newsletterEmail: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-sm text-white placeholder-[#6B7280] focus:outline-none focus:border-[#E11D48]/50 transition-colors duration-300"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={subscribeStatus === 'loading'}
                className="w-full px-8 py-4 bg-transparent text-white rounded-sm font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-[#E11D48]/50 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {subscribeStatus === 'loading' ? 'Subscribing...' : 'Get Updates'}
              </button>

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
              <p className="text-[#9CA3AF] mb-4">Or reach us directly:</p>
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
