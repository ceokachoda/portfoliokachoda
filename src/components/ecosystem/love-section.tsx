export function LoveSection() {
  return (
    <section className="relative w-full py-20 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ffcadd]/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-full max-h-96 bg-pink-500/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Floating Petals Effect Placeholder (can be managed globally or here via CSS animations) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-50">
        <div className="absolute top-10 left-[20%] w-3 h-3 bg-pink-300/40 rounded-full blur-[1px] animate-pulse" />
        <div className="absolute top-40 right-[30%] w-4 h-4 bg-pink-400/30 rounded-full blur-[2px] animate-pulse delay-700" />
        <div className="absolute bottom-20 left-[40%] w-2 h-2 bg-pink-200/50 rounded-full blur-[1px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl px-6 animate-fade-up">
        <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-medium text-white tracking-wide mb-12 drop-shadow-xl leading-tight">
          Some Dreams Are Built From <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-[#ffcadd] drop-shadow-[0_0_15px_rgba(255,202,221,0.5)]">Love</span>
        </h2>
        
        <div className="flex flex-col gap-8 text-lg md:text-2xl font-normal text-white/80 leading-[1.8] drop-shadow-sm max-w-2xl mx-auto">
          <p>
            Kaizen Cafe wasn&apos;t born from a business plan.
          </p>
          <p>
            It started as a promise to someone important to me. Even though things change and people move on, I wanted to keep that promise.
          </p>
          <p>
            The vision stuck with me, and eventually, I turned that idea into a real physical space.
          </p>
          <p className="text-white/95 font-medium mt-4">
            It&apos;s proof that the best ventures often come from personal convictions, not just spreadsheets.
          </p>
        </div>
      </div>
    </section>
  );
}
