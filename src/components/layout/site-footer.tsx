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
    <footer className="relative w-full border-t border-white/5 bg-black/20 backdrop-blur-md pt-20 pb-12 mt-32">
      <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12 flex flex-col items-center justify-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-4 tracking-wide drop-shadow-md">
            Karan Malakar
          </h2>
          <p className="text-sm md:text-base text-white/70 uppercase tracking-[0.2em] mb-4">
            Founder • Builder • Designer In Progress
          </p>
          <p className="text-[10px] md:text-xs text-[#ffcadd] uppercase tracking-[0.3em] font-medium">
            Shillong → Guwahati → Beyond
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10 mb-16"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.15em] text-white/50 hover:text-white transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
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
