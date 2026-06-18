export function JourneyTimeline() {
  return (
    <section className="relative w-full py-12 md:py-20 flex flex-col items-center">
      <div className="mb-12 md:mb-16 text-center animate-fade-up relative w-full max-w-5xl px-4 flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[12px] -z-10 rounded-3xl opacity-0 md:opacity-100 scale-x-105 scale-y-110" />
        <h2 className="font-display text-[clamp(2rem,6vw,4rem)] leading-[1.2] font-medium tracking-[0.05em] text-white drop-shadow-xl w-full break-words">
          From Shillong <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcadd] to-white/90 drop-shadow-sm whitespace-nowrap">To The Future</span>
        </h2>
        <span className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#ffcadd] block">The Founder&apos;s Journey</span>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        <div className="p-8 md:p-12 lg:p-16 rounded-3xl border border-white/20 bg-black/20 backdrop-blur-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] animate-fade-up" style={{ animationDelay: '200ms' }}>
          <div className="flex flex-col gap-6 md:gap-8 text-base md:text-xl font-normal text-white/90 leading-[1.8] md:leading-[2] drop-shadow-sm text-center md:text-left">
            <p>
              I didn&apos;t want to just learn technology; I wanted to build things that actually matter. When I couldn&apos;t find the opportunities I was looking for, I decided to build them myself.
            </p>
            <p>
              Today, my journey spans across software, education, hospitality, and housing.
            </p>
            <p>
              And honestly, the best part is that I&apos;m still learning—whether it&apos;s writing cleaner code, designing better interfaces, or figuring out how to scale a business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
