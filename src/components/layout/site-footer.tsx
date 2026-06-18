"use client";

import { motion } from "framer-motion";
import { externalLinks } from "@/config/links";

export function SiteFooter() {
  const links = [
    { name: "GitHub", href: externalLinks.social.github },
    { name: "LinkedIn", href: externalLinks.social.linkedin },
    { name: "Instagram", href: externalLinks.social.instagram },
    { name: "WeDrip", href: externalLinks.ecosystem.wedrip },
    { name: "NEHR", href: externalLinks.ecosystem.nehr },
    { name: "Kaizen Cafe", href: externalLinks.ecosystem.kaizencafe },
  ];

  return (
    <footer className="relative w-full border-t border-[#ffcadd]/10 bg-black/40 backdrop-blur-[20px] pt-24 pb-12 mt-32 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#ffcadd]/5 blur-[120px] rounded-[100%] pointer-events-none z-0 translate-y-1/2" />
      
      <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-16 relative"
        >
          {/* Subtle center glow behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#ffcadd]/10 blur-[80px] rounded-full pointer-events-none z-0" />
          
          <h2 className="relative z-10 text-4xl md:text-6xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-[#ffcadd]/80 mb-6 tracking-[0.1em] drop-shadow-xl">
            Karan Malakar
          </h2>
          <p className="relative z-10 text-xs md:text-sm text-white/70 uppercase tracking-[0.3em] mb-5 font-light drop-shadow-sm">
            Founder • Builder • Ecosystem Architect
          </p>
          <p className="relative z-10 text-[9px] md:text-[10px] text-[#ffcadd] uppercase tracking-[0.4em] font-medium drop-shadow-[0_0_15px_rgba(255,202,221,0.5)]">
            Shillong → Guwahati → Beyond
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 mb-20 relative z-10"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/50 hover:text-[#ffcadd] transition-colors duration-500 relative group"
            >
              {link.name}
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#ffcadd]/50 transition-all duration-500 group-hover:w-full blur-[1px]"></span>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-[#ffcadd] transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="w-full flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-white/30 uppercase tracking-[0.3em] border-t border-white/5 pt-8"
        >
          <p>© {new Date().getFullYear()} WeDrip Ecosystem.</p>
          <p>Built with intent.</p>
        </motion.div>

      </div>
    </footer>
  );
}
