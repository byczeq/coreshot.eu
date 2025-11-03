export default function ProductsSection() {
  return (
    <section id="products" className="py-24 relative bg-[#F9FAFB]" aria-labelledby="products-heading">
      <div className="max-w-7xl mx-auto px-8">
        <div className="border-l-[8px] border-[#111827] pl-6 mb-16">
          <h2 id="products-heading" className="text-5xl sm:text-6xl font-black text-[#111827] uppercase tracking-tight" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
            PRODUCTS &<br />SOLUTIONS
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <article className="group border-[6px] border-[#111827] bg-[#F9FAFB] overflow-hidden hover:bg-[#111827] transition-colors duration-300">
            <div className="aspect-video bg-[#111827] border-b-[6px] border-[#111827] flex items-center justify-center relative overflow-hidden" role="img" aria-label="Shooting accessories product showcase">
              <svg
                className="w-32 h-32 text-[#F9FAFB] relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-black text-[#111827] mb-6 uppercase tracking-tight group-hover:text-[#F9FAFB] transition-colors duration-300">
                GEAR THAT<br />HITS THE MARK
              </h3>

              <ul className="space-y-4 mb-8 text-[#4B5563] group-hover:text-[#F9FAFB] transition-colors duration-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#DC2626] mt-2 mr-4 flex-shrink-0"></div>
                  <span className="font-bold uppercase text-sm tracking-wide">Premium materials engineered for durability and precision</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#DC2626] mt-2 mr-4 flex-shrink-0"></div>
                  <span className="font-bold uppercase text-sm tracking-wide">Ergonomic designs tested by competitive shooters</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#DC2626] mt-2 mr-4 flex-shrink-0"></div>
                  <span className="font-bold uppercase text-sm tracking-wide">Compliant with European shooting sports regulations</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="inline-block border-[4px] border-[#111827] bg-[#DC2626] text-[#111827] px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-[#F9FAFB] transition-colors duration-200 group-hover:border-[#F9FAFB]"
              >
                VIEW RANGE
              </a>
            </div>
          </article>

          <article className="group border-[6px] border-[#111827] bg-[#F9FAFB] overflow-hidden hover:bg-[#111827] transition-colors duration-300">
            <div className="aspect-video bg-[#111827] border-b-[6px] border-[#111827] flex items-center justify-center relative overflow-hidden" role="img" aria-label="Range management software interface">
              <svg
                className="w-32 h-32 text-[#F9FAFB] relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-black text-[#111827] mb-6 uppercase tracking-tight group-hover:text-[#F9FAFB] transition-colors duration-300">
                MANAGE YOUR<br />RANGE SMARTER
              </h3>

              <ul className="space-y-4 mb-8 text-[#4B5563] group-hover:text-[#F9FAFB] transition-colors duration-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#DC2626] mt-2 mr-4 flex-shrink-0"></div>
                  <span className="font-bold uppercase text-sm tracking-wide">Real-time booking and lane management system</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#DC2626] mt-2 mr-4 flex-shrink-0"></div>
                  <span className="font-bold uppercase text-sm tracking-wide">Member tracking, scoring, and performance analytics</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-[#DC2626] mt-2 mr-4 flex-shrink-0"></div>
                  <span className="font-bold uppercase text-sm tracking-wide">Multi-language support and cloud-based accessibility</span>
                </li>
              </ul>

              <a
                href="#contact"
                className="inline-block border-[4px] border-[#111827] bg-[#DC2626] text-[#111827] px-8 py-4 font-black uppercase text-sm tracking-wide hover:bg-[#F9FAFB] transition-colors duration-200 group-hover:border-[#F9FAFB]"
              >
                SEE DEMO
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
