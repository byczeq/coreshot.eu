export default function InteractiveHero() {
  return (
    <section
      className="min-h-screen flex items-center py-20 relative overflow-hidden hero-section"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 pointer-events-none gradient-background" />

      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          <div className="lock-on-container flex-shrink-0">
            <div className="relative">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                className="crosshair-svg"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  opacity="0"
                  className="crosshair-circle"
                />

                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="100"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  className="crosshair-line crosshair-left"
                />
                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="100"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  className="crosshair-line crosshair-right"
                />
                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="100"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  className="crosshair-line crosshair-top"
                />
                <line
                  x1="100"
                  y1="100"
                  x2="100"
                  y2="100"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  className="crosshair-line crosshair-bottom"
                />

                <circle cx="100" cy="100" r="5" fill="#FFFFFF" opacity="0" className="crosshair-center" />

                <path
                  d="M 250 100 Q 150 80, 100 100"
                  stroke="#E11D48"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  className="trajectory-line"
                />

                <circle
                  cx="100"
                  cy="100"
                  r="15"
                  fill="#FFFFFF"
                  opacity="0"
                  className="impact-flash"
                />
              </svg>

              <div className="logo-text">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tighter" style={{ fontFamily: 'Montserrat, sans-serif', fontStretch: 'condensed' }}>
                  <span className="text-[#E11D48] letter-c">C</span>
                  <span className="text-white letter-o">o</span>
                  <span className="text-white letter-r">r</span>
                  <span className="text-white letter-e">e</span>
                  <span className="text-[#E11D48] letter-s">S</span>
                  <span className="text-white letter-h">h</span>
                  <span className="text-white letter-o2">o</span>
                  <span className="text-white letter-t">t</span>
                </span>
              </div>
            </div>
          </div>

          <div className="flex-1 text-left lg:text-left">
            <h1
              id="hero-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight animate-fade-in-up"
              style={{ animationDelay: '7.5s' }}
            >
              Precision at Your Core
            </h1>

            <p
              className="text-lg sm:text-xl text-[#9CA3AF] mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '7.7s' }}
            >
              Premium accessories. Smart software.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: '7.9s' }}
            >
              <a
                href="#products"
                className="group px-10 py-4 bg-[#E11D48] text-white rounded-sm font-semibold hover:bg-[#BE123C] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#E11D48]/50 transform hover:-translate-y-1 relative overflow-hidden text-center"
              >
                <span className="relative z-10">Explore Products</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </a>
              <a
                href="#contact"
                className="px-10 py-4 bg-transparent text-white rounded-sm font-semibold hover:bg-white/10 transition-all duration-300 border-2 border-white/30 hover:border-[#E11D48]/50 transform hover:-translate-y-1 text-center"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
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
