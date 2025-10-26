import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
      />
    ),
    title: 'Range Management',
    description:
      'Comprehensive tools for managing shooting ranges, bookings, and scheduling with precision and ease.',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    ),
    title: 'Club Solutions',
    description:
      'Tailored systems for shooting clubs to manage members, competitions, and training programs effectively.',
  },
  {
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
    title: 'Sports Tracking',
    description:
      'Advanced performance tracking and analytics for sports shooters to monitor progress and achievements.',
  },
];

export default function AnimatedFeatures() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            features.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newState = [...prev];
                  newState[index] = true;
                  return newState;
                });
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="py-24" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-16 text-center animate-fade-in-up">
          Built for <span className="text-[#E11D48] animate-glow">Precision</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/10 hover:border-[#E11D48]/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#E11D48]/20 ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{
                transition: 'all 0.6s ease-out',
              }}
            >
              <div className="w-12 h-12 bg-[#E11D48]/20 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#E11D48]/30 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <svg
                  className="w-6 h-6 text-[#E11D48] group-hover:scale-110 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {feature.icon}
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#E11D48] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed group-hover:text-[#9CA3AF] transition-colors duration-300">
                {feature.description}
              </p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-[#E11D48] to-transparent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
