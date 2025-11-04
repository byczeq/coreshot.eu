export default function ProductsSection() {
  return (
    <section id="products" className="py-32 relative bg-[#F9FAFB]" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-20">
          <h2 id="products-heading" className="text-5xl sm:text-6xl font-black text-[#111827] mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontStretch: 'condensed' }}>
            Products & Solutions
          </h2>
          <div className="w-24 h-1 bg-[#DC2626] mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="group rounded-[8px] border-[3px] border-[#111827] bg-[#F9FAFB] overflow-hidden hover:bg-[#111827] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] hover:shadow-[12px_12px_0px_0px_rgba(220,38,38,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]">
            <div className="aspect-video bg-[#111827] border-b-[3px] border-[#111827] flex items-center justify-center relative overflow-hidden" role="img" aria-label="Shooting accessories product showcase">
              <svg
                className="w-32 h-32 text-[#F9FAFB] relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>

            <div className="p-10">
              <h3 className="text-3xl font-black text-[#111827] mb-6 group-hover:text-[#F9FAFB] transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif', fontStretch: 'condensed' }}>
                Gear That Hits the Mark
              </h3>

              <ul className="space-y-4 mb-8 text-[#4B5563] group-hover:text-[#9CA3AF] transition-colors duration-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="font-semibold text-sm leading-relaxed">Premium materials engineered for durability and precision</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="font-semibold text-sm leading-relaxed">Ergonomic designs tested by competitive shooters</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="font-semibold text-sm leading-relaxed">Compliant with European shooting sports regulations</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="inline-block rounded-[6px] border-[2px] border-[#111827] bg-[#DC2626] text-[#111827] px-8 py-4 font-bold text-sm hover:bg-[#F9FAFB] transition-all duration-300 group-hover:border-[#F9FAFB] shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] hover:shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] hover:translate-x-[-1px] hover:translate-y-[-1px]"
              >
                View Range
              </a>
            </div>
          </article>

          <article className="group rounded-[8px] border-[3px] border-[#111827] bg-[#F9FAFB] overflow-hidden hover:bg-[#111827] transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] hover:shadow-[12px_12px_0px_0px_rgba(220,38,38,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]">
            <div className="aspect-video bg-[#111827] border-b-[3px] border-[#111827] flex items-center justify-center relative overflow-hidden" role="img" aria-label="Range management software interface">
              <svg
                className="w-32 h-32 text-[#F9FAFB] relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div className="p-10">
              <h3 className="text-3xl font-black text-[#111827] mb-6 group-hover:text-[#F9FAFB] transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif', fontStretch: 'condensed' }}>
                Manage Your Range Smarter
              </h3>

              <ul className="space-y-4 mb-8 text-[#4B5563] group-hover:text-[#9CA3AF] transition-colors duration-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="font-semibold text-sm leading-relaxed">Real-time booking and lane management system</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="font-semibold text-sm leading-relaxed">Member tracking, scoring, and performance analytics</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#DC2626] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="font-semibold text-sm leading-relaxed">Multi-language support and cloud-based accessibility</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="inline-block rounded-[6px] border-[2px] border-[#111827] bg-[#DC2626] text-[#111827] px-8 py-4 font-bold text-sm hover:bg-[#F9FAFB] transition-all duration-300 group-hover:border-[#F9FAFB] shadow-[4px_4px_0px_0px_rgba(17,24,39,1)] hover:shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] hover:translate-x-[-1px] hover:translate-y-[-1px]"
              >
                See Demo
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
