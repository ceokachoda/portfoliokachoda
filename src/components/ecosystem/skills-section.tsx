export function SkillsSection() {
  const categories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Modern Web Apps"],
      accent: "from-blue-500/10 to-transparent",
      delay: "delay-0",
    },
    {
      title: "Design",
      skills: ["UI Design", "UX Design", "Product Design", "Design Systems", "Motion Design"],
      accent: "from-pink-500/10 to-transparent",
      delay: "delay-100",
    },
    {
      title: "Business",
      skills: ["Startups", "Product Strategy", "Branding", "Growth"],
      accent: "from-purple-500/10 to-transparent",
      delay: "delay-200",
    },
  ];

  return (
    <section className="relative w-full">
      <div className="mb-12 md:mb-20 text-center md:text-left animate-fade-up relative inline-block">
        <div className="absolute -inset-x-6 -inset-y-4 bg-black/10 backdrop-blur-[12px] -z-10 rounded-3xl opacity-0 md:opacity-100" />
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium tracking-[0.05em] text-white drop-shadow-xl">
          What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-[#ffcadd] drop-shadow-sm">Build</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {categories.map((category, idx) => (
          <div 
            key={idx}
            className={`group relative rounded-3xl border border-white/20 bg-black/20 backdrop-blur-[20px] p-10 overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:bg-black/30 hover:border-white/30 hover:shadow-[0_20px_40px_-15px_rgba(255,183,197,0.15)] animate-fade-up shadow-[0_8px_30px_rgb(0,0,0,0.12)]`}
            style={{ animationDelay: `${idx * 150 + 100}ms` }}
          >
            {/* Hover Glow */}
            <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${category.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
            
            <h3 className="relative z-10 font-display text-2xl font-medium text-white/90 mb-8 tracking-wide drop-shadow-md">
              {category.title}
            </h3>

            <ul className="relative z-10 space-y-4">
              {category.skills.map((skill, sIdx) => (
                <li key={sIdx} className="flex items-center text-base font-normal text-white/80 drop-shadow-sm group-hover:text-white transition-colors duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffcadd]/60 mr-4 shadow-[0_0_8px_rgba(255,202,221,0.8)]" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
