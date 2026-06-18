import Image from "next/image";
import { externalLinks } from "@/config/links";

export function ProjectsSection() {
  const projects = [
    {
      name: "WeDrip",
      description: "The parent ecosystem focused on building ventures, operating systems and digital infrastructure for the future of Northeast India.",
      tag: "Ecosystem / Technology",
      liveLink: "https://wedrip.xyz",
      image: "/images/projects/anime/wedrip_showcase.png",
    },
    {
      name: "FyneStudy",
      description: "An education platform helping students learn, grow and succeed through a modern digital experience.",
      tag: "Coaching OS",
      liveLink: "https://fynestudy.live",
      image: "/images/projects/anime/fynestudy_showcase.png",
    },
    {
      name: "SUHASHI POS",
      description: "A modern restaurant and cafe point-of-sale system designed to simplify billing, order management, inventory tracking and operations.",
      role: "Product Strategy • System Architecture • Founder-Led Product Development",
      impact: "Built to help restaurants focus less on operations and more on customer experience.",
      tag: "FlowCOS Ecosystem",
      liveLink: "#",
      image: "/images/projects/anime/suhashi_pos_showcase.png",
    },
    {
      name: "NEHR",
      description: "Northeast Home Rentals — a housing platform focused on student accommodation, rentals and future housing infrastructure across Northeast India.",
      tag: "Housing Technology",
      liveLink: "https://northeasthomerental.com",
      image: "/images/projects/anime/nehr_showcase.png",
    },
    {
      name: "Kaizen Cafe",
      description: "A hospitality venture built from a promise, a dream and a belief that meaningful spaces create meaningful memories.",
      tag: "Hospitality",
      liveLink: "https://kaizencafe.in",
      image: "/images/projects/anime/kaizen_cafe_showcase.png",
    }
  ];

  return (
    <section className="relative w-full">
      <div className="mb-16 md:mb-24 text-center flex flex-col items-center animate-fade-up relative">
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium tracking-[0.05em] text-white drop-shadow-xl">
          Real World <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffcadd] to-white/90 drop-shadow-sm">Products</span>
        </h2>
        <span className="mt-4 text-[10px] uppercase tracking-[0.3em] text-[#ffcadd] block">
          From Concept to Execution
        </span>
      </div>

      <div className="flex flex-col gap-12 md:gap-20">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative flex flex-col lg:flex-row items-stretch rounded-[2rem] overflow-hidden bg-black/40 backdrop-blur-[20px] border border-[#ffcadd]/10 hover:border-[#ffcadd]/30 hover:bg-black/60 transition-all duration-700 shadow-[0_8px_32px_rgba(255,202,221,0.03)] hover:shadow-[0_8px_32px_rgba(255,202,221,0.1)] animate-fade-up" 
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            {/* Subtle glow behind the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffcadd]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* Mobile Image (Top) & Desktop Image (Right or Left alternating) */}
            <div className={`w-full lg:w-[45%] relative min-h-[250px] sm:min-h-[300px] md:min-h-[400px] flex items-center justify-center bg-gradient-to-br from-[#ffcadd]/5 via-black/40 to-black overflow-hidden p-6 lg:p-10 ${idx % 2 !== 0 ? 'lg:order-first' : 'lg:order-last lg:border-l border-[#ffcadd]/10'}`}>
              {/* Decorative background glow behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#ffcadd]/10 blur-[80px] rounded-full pointer-events-none z-0" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-20 lg:hidden pointer-events-none" />
              
              <div className="relative w-full h-full z-10 transition-transform duration-1000 group-hover:scale-105 group-hover:brightness-110">
                <Image 
                  src={project.image} 
                  alt={`${project.name} preview`} 
                  fill 
                  className="object-contain object-center drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" 
                />
              </div>
            </div>

            {/* Content Area */}
            <div className="w-full lg:w-[55%] p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-20">
              <div className="flex flex-col items-start h-full">
                <span className="px-3 py-1 mb-4 md:mb-6 text-[10px] uppercase tracking-[0.2em] border border-white/20 bg-white/5 backdrop-blur-md rounded-full text-[#ffcadd] drop-shadow-sm">
                  {project.tag}
                </span>
                
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-4 md:mb-6 drop-shadow-md group-hover:text-[#ffcadd] transition-colors duration-500">
                  {project.name}
                </h3>
                
                <p className="text-sm sm:text-base md:text-lg font-normal text-white/80 leading-[1.6] md:leading-[1.8] mb-6 md:mb-8 drop-shadow-sm max-w-2xl">
                  {project.description}
                </p>

                {project.role && (
                  <div className="mb-4 md:mb-6 text-[10px] md:text-xs font-semibold uppercase tracking-[0.15em] text-white/50 bg-white/5 inline-block px-3 py-1.5 md:px-4 md:py-2 rounded-lg border border-white/5">
                    Role: <span className="text-white/80 ml-1 md:ml-2">{project.role}</span>
                  </div>
                )}

                {project.impact && (
                  <div className="mb-6 md:mb-8 text-xs sm:text-sm md:text-base italic text-[#ffcadd]/80 border-l-2 border-[#ffcadd]/30 pl-4 md:pl-5 py-1">
                    &quot;{project.impact}&quot;
                  </div>
                )}

                {project.liveLink !== "#" && (
                  <div className="mt-auto pt-4 w-full sm:w-auto">
                    <a 
                      href={project.liveLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 md:px-8 md:py-3.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-ink-950 transition-all duration-300 shadow-lg"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
