import { useEffect, useState } from 'react';

export default function InteractiveHero() {
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    const phases = [
      { duration: 2000, phase: 0 },
      { duration: 1500, phase: 1 },
      { duration: 1000, phase: 2 },
      { duration: 1500, phase: 3 },
      { duration: 1000, phase: 4 },
    ];

    let currentIndex = 0;

    const runPhase = () => {
      setAnimationPhase(phases[currentIndex].phase);
      currentIndex = (currentIndex + 1) % phases.length;
    };

    const intervalId = setInterval(() => {
      runPhase();
    }, phases.reduce((acc, p) => acc + p.duration, 0) / phases.length);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center py-20 text-center relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6069057/pexels-photo-6069057.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C2526]/80 via-[#1C2526]/60 to-[#1C2526]" />
      </div>

      <div className="relative z-10 mb-16 core-lock-on">
        <div className={`relative ${animationPhase >= 3 ? 'animate-brand-pulse' : ''}`}>
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            className="mx-auto crosshair-container"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              opacity="0.4"
              className="crosshair-circle"
            />

            <line
              x1="20"
              y1="100"
              x2="80"
              y2="100"
              stroke="#FFFFFF"
              strokeWidth="3"
              className="crosshair-line crosshair-left"
            />
            <line
              x1="120"
              y1="100"
              x2="180"
              y2="100"
              stroke="#FFFFFF"
              strokeWidth="3"
              className="crosshair-line crosshair-right"
            />
            <line
              x1="100"
              y1="20"
              x2="100"
              y2="80"
              stroke="#FFFFFF"
              strokeWidth="3"
              className="crosshair-line crosshair-top"
            />
            <line
              x1="100"
              y1="120"
              x2="100"
              y2="180"
              stroke="#FFFFFF"
              strokeWidth="3"
              className="crosshair-line crosshair-bottom"
            />

            <circle cx="100" cy="100" r="5" fill="#FFFFFF" className="crosshair-center" />

            <path
              d="M 100 180 Q 120 140, 100 100"
              stroke="#E11D48"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              className="trajectory-line"
            />

            <circle
              cx="100"
              cy="100"
              r="30"
              fill="url(#redGradient)"
              opacity="0"
              className="impact-glow"
            />

            <defs>
              <radialGradient id="redGradient">
                <stop offset="0%" stopColor="#E11D48" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#E11D48" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>

          <div className="logo-text">
            <span className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="text-[#E11D48]">C</span>
              <span className="text-white">ore</span>
              <span className="text-[#E11D48]">S</span>
              <span className="text-white">hot</span>
            </span>
          </div>
        </div>
      </div>

      <h1
        id="hero-heading"
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up relative z-10"
        style={{ animationDelay: '0.1s' }}
      >
        Precision at Your Core
      </h1>

      <p
        className="text-xl sm:text-2xl text-[#9CA3AF] mb-12 max-w-3xl leading-relaxed animate-fade-in-up relative z-10"
        style={{ animationDelay: '0.2s' }}
      >
        Premium accessories. Smart software.
      </p>

      <div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up relative z-10"
        style={{ animationDelay: '0.3s' }}
      >
        <a
          href="#products"
          className="group px-10 py-4 bg-[#E11D48] text-white rounded-sm font-semibold hover:bg-[#BE123C] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#E11D48]/50 transform hover:-translate-y-1 relative overflow-hidden"
        >
          <span className="relative z-10">Explore Products</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
        </a>
        <a
          href="#contact"
          className="px-10 py-4 bg-transparent text-white rounded-sm font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-[#E11D48]/50 transform hover:-translate-y-1"
        >
          Book a Demo
        </a>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
