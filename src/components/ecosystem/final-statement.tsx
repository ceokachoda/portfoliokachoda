"use client";

import Link from "next/link";

export function FinalStatement() {
  return (
    <section className="relative w-full py-32 md:py-48 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-[#ffcadd]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center animate-fade-up">
        <div className="font-display text-2xl md:text-4xl lg:text-5xl font-medium text-white/90 leading-relaxed drop-shadow-md mb-16 flex flex-col gap-4">
          <p>From Shillong to Guwahati.</p>
          <p>From ideas to ecosystems.</p>
          <p>From ambition to impact.</p>
          <p className="mt-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-[#ffcadd] font-semibold drop-shadow-[0_0_15px_rgba(255,202,221,0.4)]">
            This is only the beginning.
          </p>
        </div>

        <Link 
          href="/contact"
          className="group relative inline-flex items-center justify-center px-10 py-5 rounded-full overflow-hidden transition-transform duration-500 hover:scale-105"
        >
          {/* Button Background & Glow */}
          <div className="absolute inset-0 bg-white group-hover:bg-[#ffcadd] transition-colors duration-500" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 shadow-[0_0_30px_rgba(255,202,221,0.6)] transition-opacity duration-500" />
          
          <span className="relative z-10 text-ink-950 font-display text-sm md:text-base font-bold uppercase tracking-[0.2em]">
            Let&apos;s Build The Future
          </span>
        </Link>
      </div>
    </section>
  );
}
