export function AboutSection() {
  return (
    <section id="about-section" className="relative w-full">
      <div className="mb-12 md:mb-20 animate-fade-up relative">
        {/* Subtle dark glass panel behind heading for readability */}
        <div className="absolute -inset-x-4 sm:-inset-x-6 -inset-y-4 bg-black/10 backdrop-blur-[12px] -z-10 rounded-3xl opacity-0 md:opacity-100" />
        <h2 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-medium tracking-[0.05em] text-white drop-shadow-xl">
          Who Is <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcadd] to-white/90 drop-shadow-sm">Karan Malakar</span>
        </h2>
        <div className="mt-6 md:mt-8 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          {["Founder", "Entrepreneur", "Product Builder", "Frontend Developer"].map((tag, idx) => (
            <div key={tag} className="group relative px-4 py-2 sm:px-5 sm:py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden hover:border-white/20 transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(255,202,221,0.15)] cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ffcadd]/0 via-[#ffcadd]/10 to-[#ffcadd]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              <span className="relative z-10 text-[9px] sm:text-[10px] md:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/70 group-hover:text-white/90 transition-colors duration-300">
                {tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-8">
        {/* Founder Story - Large Editorial Block */}
        <div className="md:col-span-8 rounded-[2rem] border border-[#ffcadd]/10 bg-black/40 backdrop-blur-[20px] p-6 sm:p-8 md:p-12 overflow-hidden relative group animate-fade-up shadow-[0_8px_32px_rgba(255,202,221,0.03)]" style={{ animationDelay: '100ms' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffcadd]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <h3 className="text-[10px] md:text-xs tracking-[0.3em] text-[#ffcadd] uppercase mb-6 md:mb-8 drop-shadow-md">The Founder Story</h3>
          <div className="text-base sm:text-lg md:text-xl font-normal leading-[1.6] sm:leading-[1.8] text-white/90 max-w-3xl space-y-5 md:space-y-6 drop-shadow-sm">
            <p className="first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-display first-letter:text-[#ffcadd] first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              There was no master plan in the beginning—just a genuine curiosity about how the web worked, and a desire to build things that matter. When I saw the gap in digital and physical infrastructure here in Northeast India, I realized I couldn&apos;t just wait around for someone else to fix it. So I started building.
            </p>
            <p>
              Today, my entire focus as a founder and entrepreneur from Northeast India is on building the WeDrip Ecosystem. Through platforms like WeDrip OS, FyneStudy, FlowCOS, Kaizen Cafe, and NEHR (Northeast Home Rentals), we&apos;re bridging technology, education, hospitality, and housing across Shillong, Guwahati, and beyond. It&apos;s a massive undertaking, but it&apos;s the exact problem I want to spend my life solving.
            </p>
            <p>
              And even as the WeDrip ecosystem grows, I&apos;m still the one writing the code, designing the interfaces, and obsessing over the frontend. A product builder&apos;s place is in the trenches, as close to the craft as possible.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="md:col-span-4 rounded-[2rem] border border-[#ffcadd]/10 bg-black/40 backdrop-blur-[20px] p-6 sm:p-8 md:p-10 overflow-hidden relative group animate-fade-up shadow-[0_8px_32px_rgba(255,202,221,0.03)]" style={{ animationDelay: '200ms' }}>
          <h3 className="text-[10px] md:text-xs tracking-[0.3em] text-[#ffcadd] uppercase mb-5 md:mb-6 drop-shadow-md">Vision</h3>
          <p className="text-sm md:text-base font-normal leading-[1.6] sm:leading-[1.8] text-white/90 drop-shadow-sm">
            Innovation isn&apos;t geography-bound. My goal is to show that truly world-class products can be built right here in Northeast India. It&apos;s not about hyper-growth for the sake of it; it&apos;s about creating something deeply useful for the people who interact with our products every day.
          </p>
        </div>

        {/* Philosophy */}
        <div className="md:col-span-4 rounded-[2rem] border border-[#ffcadd]/10 bg-black/40 backdrop-blur-[20px] p-6 sm:p-8 md:p-10 overflow-hidden relative group animate-fade-up shadow-[0_8px_32px_rgba(255,202,221,0.03)]" style={{ animationDelay: '300ms' }}>
          <h3 className="text-[10px] md:text-xs tracking-[0.3em] text-[#ffcadd] uppercase mb-5 md:mb-6 drop-shadow-md">Philosophy</h3>
          <p className="text-sm md:text-base font-normal leading-[1.6] sm:leading-[1.8] text-white/90 italic drop-shadow-sm">
            &quot;Startups die. Ecosystems endure. I don&apos;t want to build just another app. I want to build interconnected platforms that actually leave our region better than we found it.&quot;
          </p>
        </div>

        {/* Current Mission - Spans across */}
        <div className="md:col-span-8 rounded-[2rem] border border-[#ffcadd]/15 bg-[#ffcadd]/[0.02] backdrop-blur-[20px] p-6 sm:p-8 md:p-10 overflow-hidden relative group animate-fade-up shadow-[0_8px_32px_rgba(255,202,221,0.04)]" style={{ animationDelay: '400ms' }}>
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#ffcadd]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
          <h3 className="text-[10px] md:text-xs tracking-[0.3em] text-[#ffcadd] uppercase mb-5 md:mb-6 drop-shadow-md">The Mission</h3>
          <h4 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.4] sm:leading-snug text-white max-w-4xl drop-shadow-md">
            Solving hard, real-world problems in Northeast India—and doing it without compromising on the highest standards of engineering and design.
          </h4>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap gap-2 sm:gap-4">
            {["Growing WeDrip", "Building WeDrip OS", "Frontend Engineering", "Digital Experiences", "Client Startups", "Systems that Scale"].map((focus) => (
              <span key={focus} className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-widest text-white/50 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md border border-white/5">
                {focus}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
