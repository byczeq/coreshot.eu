export default function InteractiveHero() {
  return (
    <section
      className="min-h-screen flex items-center py-20 relative overflow-hidden bg-[#F9FAFB]"
      aria-labelledby="hero-heading"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.02' /%3E%3C/svg%3E")`
      }}
    >
      <div className="container mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="flex justify-start pt-12">
            <div className="relative">
              <div className="w-64 h-64 border-[8px] border-[#111827] bg-[#F9FAFB] relative">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 200 200"
                  className="absolute inset-0"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="70"
                    fill="none"
                    stroke="#111827"
                    strokeWidth="3"
                  />
                  <line
                    x1="30"
                    y1="100"
                    x2="80"
                    y2="100"
                    stroke="#111827"
                    strokeWidth="4"
                  />
                  <line
                    x1="120"
                    y1="100"
                    x2="170"
                    y2="100"
                    stroke="#111827"
                    strokeWidth="4"
                  />
                  <line
                    x1="100"
                    y1="30"
                    x2="100"
                    y2="80"
                    stroke="#111827"
                    strokeWidth="4"
                  />
                  <line
                    x1="100"
                    y1="120"
                    x2="100"
                    y2="170"
                    stroke="#111827"
                    strokeWidth="4"
                  />
                  <circle cx="100" cy="100" r="6" fill="#111827" />

                  <path
                    d="M 100 100 L 160 60"
                    stroke="#DC2626"
                    strokeWidth="5"
                    strokeLinecap="square"
                  />
                </svg>
              </div>

              <div className="mt-8 border-[6px] border-[#111827] bg-[#F9FAFB] px-6 py-4 inline-block">
                <h2 className="text-4xl font-black tracking-[0.2em] uppercase" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  <span className="text-[#111827]">CORE</span>
                  <span className="text-[#DC2626]">S</span>
                  <span className="text-[#111827]">HOT</span>
                  <span className="text-[#4B5563] text-2xl align-super">™</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="lg:mt-32 space-y-8">
            <div className="border-l-[8px] border-[#111827] pl-6">
              <h1
                id="hero-heading"
                className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#111827] leading-none uppercase mb-6"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                PRECISION<br />
                IN EVERY<br />
                SHOT
              </h1>

              <div className="w-24 h-1 bg-[#DC2626] mb-6"></div>

              <p className="text-xl text-[#4B5563] font-bold leading-relaxed uppercase tracking-wide">
                Premium accessories.<br />
                Smart software.<br />
                Pure performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href="#products"
                className="border-[6px] border-[#111827] bg-[#DC2626] text-[#111827] px-10 py-5 font-black text-lg uppercase tracking-wide hover:bg-[#111827] hover:text-[#F9FAFB] transition-colors duration-200"
              >
                EXPLORE PRODUCTS
              </a>
              <a
                href="#contact"
                className="border-[6px] border-[#111827] bg-[#F9FAFB] text-[#111827] px-10 py-5 font-black text-lg uppercase tracking-wide hover:bg-[#111827] hover:text-[#F9FAFB] transition-colors duration-200"
              >
                BOOK A DEMO
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-12 h-12 border-[4px] border-[#111827] flex items-center justify-center">
          <svg
            className="w-6 h-6 text-[#111827]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
