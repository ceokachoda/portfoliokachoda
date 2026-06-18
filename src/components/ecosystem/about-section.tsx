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
        <div className="md:col-span-8 rounded-[2rem] border border-white/20 bg-black/20 backdrop-blur-[20px] p-6 sm:p-8 md:p-12 overflow-hidden relative group animate-fade-up shadow-[0_8px_30px_rgb(0,0,0,0.12)]" style={{ animationDelay: '100ms' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#ffcadd]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <h3 className="text-[10px] md:text-xs tracking-[0.3em] text-[#ffcadd] uppercase mb-6 md:mb-8 drop-shadow-md">The Founder Story</h3>
          <div className="text-base sm:text-lg md:text-xl font-normal leading-[1.6] sm:leading-[1.8] text-white/90 max-w-3xl space-y-5 md:space-y-6 drop-shadow-sm">
            <p className="first-letter:text-5xl sm:first-letter:text-6xl first-letter:font-display first-letter:text-[#ffcadd] first-letter:mr-2 first-letter:float-left first-letter:leading-none">
              I didn&apos;t start with a massive master plan. I started with a simple curiosity about how the web works and a deep desire to build things. When I realized that Northeast India needed better digital and physical infrastructure, I stopped waiting for someone else to build it.
            </p>
            <p>
              Today, my focus is entirely on WeDrip—an ecosystem that bridges technology, education, hospitality, and housing. It&apos;s ambitious, but it&apos;s exactly what I want to dedicate my life to building.
            </p>
            <p>
              And even as the ecosystem grows, I still write code, design interfaces, and build the frontend of my products. I believe founders should stay as close to the craft as possible.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="md:col-span-4 rounded-[2rem] border border-white/20 bg-black/20 backdrop-blur-[20px] p-6 sm:p-8 md:p-10 overflow-hidden relative group animate-fade-up shadow-[0_8px_30px_rgb(0,0,0,0.12)]" style={{ animationDelay: '200ms' }}>
          <h3 className="text-[10px] md:text-xs tracking-[0.3em] text-[#ffcadd] uppercase mb-5 md:mb-6 drop-shadow-md">Vision</h3>
          <p className="text-sm md:text-base font-normal leading-[1.6] sm:leading-[1.8] text-white/90 drop-shadow-sm">
            I want to prove that world-class innovation can emerge from Northeast India. It&apos;s not just about scaling a business; it&apos;s about building an ecosystem that actually matters to the people using it.
          </p>
        </div>

        {/* Philosophy */}
        <div className="md:col-span-4 rounded-[2rem] border border-white/20 bg-black/20 backdrop-blur-[20px] p-6 sm:p-8 md:p-10 overflow-hidden relative group animate-fade-up shadow-[0_8px_30px_rgb(0,0,0,0.12)]" style={{ animationDelay: '300ms' }}>
          <h3 className="text-[10px] md:text-xs tracking-[0.3em] text-[#ffcadd] uppercase mb-5 md:mb-6 drop-shadow-md">Philosophy</h3>
          <p className="text-sm md:text-base font-normal leading-[1.6] sm:leading-[1.8] text-white/90 italic drop-shadow-sm">
            &quot;Startups come and go, but ecosystems remain. I&apos;m not interested in building a single app. I want to build interconnected products that create lasting opportunities for my region.&quot;
          </p>
        </div>

        {/* Current Mission - Spans across */}
        <div className="md:col-span-8 rounded-[2rem] border border-[#ffcadd]/30 bg-[#ffcadd]/5 backdrop-blur-[20px] p-6 sm:p-8 md:p-10 overflow-hidden relative group animate-fade-up shadow-[0_8px_30px_rgb(0,0,0,0.12)]" style={{ animationDelay: '400ms' }}>
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-[#ffcadd]/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
          <h3 className="text-[10px] md:text-xs tracking-[0.3em] text-[#ffcadd] uppercase mb-5 md:mb-6 drop-shadow-md">The Mission</h3>
          <h4 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.4] sm:leading-snug text-white max-w-4xl drop-shadow-md">
            To build products that solve real problems in Northeast India, and to do it with the highest standard of design and technology.
          </h4>
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 flex flex-wrap gap-2 sm:gap-4">
            {["Growing WeDrip", "Building WeDrip OS", "Frontend Engineering", "Digital Experiences", "Client Startups", "Systems that Scale"].map((focus) => (
              <span key={focus} className="text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-widest text-white/50 bg-white/5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-md">
                {focus}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
