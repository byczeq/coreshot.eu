import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote:
      "CoreShot transformed how we manage our range. The booking system is intuitive, and our members love the analytics features. Best investment we've made.",
    author: 'Klaus Müller',
    role: 'Range Director',
    location: 'Berlin Shooting Club, Germany',
  },
  {
    quote:
      'The attention to detail in their accessories is remarkable. Every piece feels premium and performs flawlessly. CoreShot truly understands what shooters need.',
    author: 'Anna Kowalska',
    role: 'Competitive Shooter',
    location: 'Warsaw, Poland',
  },
  {
    quote:
      "We've been using CoreShot's software for two years now. The multi-language support and cloud features make it perfect for our international membership base.",
    author: 'Jean Dupont',
    role: 'Club Manager',
    location: 'Paris Shooting Sports, France',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#E11D48]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-center animate-fade-in-up">
          Trusted Across Europe
        </h2>
        <p className="text-xl text-[#9CA3AF] mb-16 text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          See what our customers have to say
        </p>

        <div className="relative">
          <div className="bg-white/5 backdrop-blur-sm rounded-sm border border-white/10 p-8 md:p-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentIndex
                    ? 'opacity-100 block'
                    : 'opacity-0 hidden'
                }`}
              >
                <svg
                  className="w-12 h-12 text-[#E11D48]/30 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <blockquote className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-14 h-14 bg-[#E11D48]/20 rounded-full flex items-center justify-center mr-4">
                    <svg
                      className="w-8 h-8 text-[#E11D48]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-[#9CA3AF]">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#E11D48] w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
