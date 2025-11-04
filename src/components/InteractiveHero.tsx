export default function InteractiveHero() {
  return (
    <section
      className="min-h-screen flex items-center py-32 relative overflow-hidden bg-[#F9FAFB]"
      aria-labelledby="hero-heading"
    >
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-12">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 rounded-[8px] border-[3px] border-[#111827] bg-[#F9FAFB] relative shadow-[8px_8px_0px_0px_rgba(17,24,39,1)]">
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
                    strokeWidth="2"
                  />
                  <line
                    x1="30"
                    y1="100"
                    x2="80"
                    y2="100"
                    stroke="#111827"
                    strokeWidth="3"
                  />
                  <line
                    x1="120"
                    y1="100"
                    x2="170"
                    y2="100"
                    stroke="#111827"
                    strokeWidth="3"
                  />
                  <line
                    x1="100"
                    y1="30"
                    x2="100"
                    y2="80"
                    stroke="#111827"
                    strokeWidth="3"
                  />
                  <line
                    x1="100"
                    y1="120"
                    x2="100"
                    y2="170"
                    stroke="#111827"
                    strokeWidth="3"
                  />
                  <circle cx="100" cy="100" r="5" fill="#111827" />

                  <path
                    d="M 100 100 L 160 60"
                    stroke="#DC2626"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="mt-8 rounded-[6px] border-[3px] border-[#111827] bg-[#F9FAFB] px-8 py-4 inline-block shadow-[6px_6px_0px_0px_rgba(17,24,39,1)]">
                <h2 className="text-3xl font-black tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif', fontStretch: 'condensed' }}>
                  <span className="text-[#111827]">CORE</span>
                  <span className="text-[#DC2626]">S</span>
                  <span className="text-[#111827]">HOT</span>
                  <span className="text-[#4B5563] text-xl align-super">™</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="space-y-8 max-w-3xl">
            <h1
              id="hero-heading"
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#111827] leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif', fontStretch: 'condensed' }}
            >
              Precision at Your Core
            </h1>

            <div className="w-24 h-1 bg-[#DC2626] mx-auto rounded-full"></div>

            <p className="text-xl text-[#4B5563] font-semibold leading-relaxed">
              Premium accessories. Smart software.<br />
              Pure performance.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 pt-8">
            <a
              href="#products"
              className="rounded-[8px] border-[3px] border-[#111827] bg-[#DC2626] text-[#111827] px-12 py-5 font-black text-base tracking-wide hover:bg-[#111827] hover:text-[#F9FAFB] hover:border-[#DC2626] transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] hover:shadow-[8px_8px_0px_0px_rgba(220,38,38,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="rounded-[8px] border-[3px] border-[#111827] bg-[#F9FAFB] text-[#111827] px-12 py-5 font-black text-base tracking-wide hover:bg-[#111827] hover:text-[#F9FAFB] transition-all duration-300 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] hover:shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-12 h-12 rounded-[6px] border-[2px] border-[#4B5563] flex items-center justify-center">
          <svg
            className="w-6 h-6 text-[#4B5563]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
