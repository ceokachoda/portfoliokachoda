import { externalLinks } from "@/config/links";

export function EcosystemGrid() {
  const osChildren = [
    {
      name: "Flow COS",
      category: "Cafe Operating System",
      status: "Active",
      description: "Simplify daily operations, staff workflows, customer management, and growth.",
    },
    {
      name: "Coaching OS",
      category: "Education Operating System",
      status: "Active",
      description: "Manage students, assessments, content delivery, communication, and growth.",
    },
    {
      name: "Pharma OS",
      category: "Healthcare Operating System",
      status: "Future",
      description: "Streamlining pharmacy and healthcare workflows through technology.",
    },
    {
      name: "Gym OS",
      category: "Fitness Operating System",
      status: "Future",
      description: "Modernize gym operations, memberships, engagement, and fitness management.",
    }
  ];

  const ventures = [
    {
      name: "WeRyd",
      category: "Mobility",
      status: "In Development",
      description: "A mobility-focused venture working toward smarter and more accessible transportation solutions.",
      link: "#",
      accent: "from-emerald-500/20 to-transparent",
    },
    {
      name: "Kaizen Cafe",
      category: "Hospitality",
      status: "Development & Expansion",
      description: "Built around continuous improvement, a space where people connect, collaborate, and grow.",
      link: externalLinks.ecosystem.kaizencafe,
      accent: "from-amber-500/20 to-transparent",
    },
    {
      name: "Northeast Home Rentals",
      category: "Housing",
      status: "Planning & Development",
      description: "Helping students, professionals, and families discover reliable housing opportunities across Northeast India.",
      link: externalLinks.ecosystem.nehr,
      accent: "from-orange-500/20 to-transparent",
    }
  ];

  return (
    <section className="relative w-full">
      <div className="mb-12 md:mb-20 text-center animate-fade-up relative inline-block">
        <div className="absolute -inset-x-6 -inset-y-4 bg-black/10 backdrop-blur-[12px] -z-10 rounded-3xl opacity-0 md:opacity-100" />
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium tracking-[0.05em] text-white drop-shadow-xl">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-[#ffcadd] drop-shadow-sm">WeDrip</span>
        </h2>
        <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-[#ffcadd]">The Ecosystem</p>
      </div>

      <div className="flex flex-col gap-8">
        {/* WeDrip OS (Technology Division) - Large Container */}
        <div className="rounded-3xl border border-white/20 bg-black/20 backdrop-blur-[20px] p-8 md:p-12 animate-fade-up shadow-[0_8px_30px_rgb(0,0,0,0.12)]" style={{ animationDelay: '100ms' }}>
          <div className="flex flex-col md:flex-row justify-between md:items-center mb-10 gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#ffcadd] mb-2 block drop-shadow-md">Technology Division</span>
              <h3 className="font-display text-3xl md:text-4xl font-medium text-white drop-shadow-md">WeDrip OS</h3>
              <p className="mt-3 text-base font-normal leading-[1.8] text-white/90 max-w-xl drop-shadow-sm">
                Industry-specific operating systems designed to modernize workflows, improve efficiency, and transform how businesses operate.
              </p>
            </div>
            <span className="inline-flex text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/60 shrink-0 self-start md:self-auto">
              Core Tech Infrastructure
            </span>
          </div>

          {/* OS Children Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {osChildren.map((os, idx) => (
              <div key={idx} className="group relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <h4 className="font-display text-xl font-medium text-white drop-shadow-sm">{os.name}</h4>
                  <span className={`text-[9px] uppercase tracking-widest px-2 py-1 rounded-full border border-white/20 bg-white/10 ${os.status === 'Active' ? 'text-[#ffcadd]' : 'text-white/60'}`}>
                    {os.status}
                  </span>
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3 block">{os.category}</span>
                <p className="text-sm font-normal text-white/80 leading-[1.8] group-hover:text-white/90 transition-colors drop-shadow-sm">
                  {os.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Ventures Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {ventures.map((venture, idx) => (
            <a
              key={idx}
              href={venture.link}
              className="group block relative rounded-3xl border border-white/20 bg-black/20 backdrop-blur-[20px] p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:bg-black/30 hover:border-white/30 hover:shadow-[0_20px_40px_-15px_rgba(255,183,197,0.15)] animate-fade-up shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              style={{ animationDelay: `${idx * 150 + 200}ms` }}
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${venture.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl rounded-full pointer-events-none`} />
              
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex flex-col items-start">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#ffcadd] mb-1">{venture.category}</span>
                </div>
                <span className="text-[9px] uppercase tracking-widest px-2 py-1 rounded-full border border-white/10 bg-white/5 text-white/60">
                  {venture.status}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="font-display text-2xl font-medium text-white mb-3 group-hover:text-[#ffcadd] transition-colors drop-shadow-md">{venture.name}</h3>
                <p className="text-sm md:text-base font-normal text-white/90 leading-[1.8] group-hover:text-white transition-colors drop-shadow-sm">
                  {venture.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
