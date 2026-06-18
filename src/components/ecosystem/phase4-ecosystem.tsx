"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/container";

interface Venture {
  name: string;
  category: string;
  founded?: string;
  description: string;
  status: string;
  website?: string;
  logoUrl?: string;
  subProducts?: string[];
  features?: string[];
}

const ventures: Venture[] = [
  {
    name: "WeDrip",
    category: "Parent Ecosystem",
    founded: "2026",
    description: "WeDrip serves as the parent ecosystem bringing together technology, hospitality, housing, mobility and future digital infrastructure under a single vision.",
    status: "Active",
    website: "https://wedrip.xyz",
    logoUrl: "/images/logos/wedrip_round.png"
  },
  {
    name: "WeDrip OS",
    category: "Technology Division",
    founded: "2026",
    description: "A collection of industry-specific operating systems designed to modernize businesses through software and automation.",
    subProducts: ["Flow COS", "Coaching OS", "Pharma OS", "Gym OS"],
    status: "Active Development",
    logoUrl: "/images/logos/wedrip_round.png" // Uses WeDrip logo as requested
  },
  {
    name: "Kaizen Cafe",
    category: "Hospitality",
    founded: "2026",
    description: "A hospitality venture focused on community, culture and continuous improvement through memorable experiences.",
    status: "Active",
    website: "https://kaizencafe.in",
    logoUrl: "/images/logos/kaizen_round.png"
  },
  {
    name: "NEHR",
    category: "Housing",
    founded: "2026",
    description: "Northeast Home Rentals. Building a modern housing and rental ecosystem across Northeast India.",
    status: "Development",
    website: "https://northeasthomerental.com",
    logoUrl: "/images/logos/nehr_round.png"
  },
  {
    name: "WeRyd",
    category: "Mobility",
    description: "Future transportation and mobility solutions for Northeast India.",
    status: "Development"
  },
  {
    name: "Client Projects",
    category: "Featured Client: FyneStudy",
    description: "Educational technology platform developed to modernize coaching institutes and improve student engagement.",
    features: ["Mobile Application", "Web Platform", "Learning Management", "Student Infrastructure"],
    status: "Delivered",
    logoUrl: "/images/logos/fynestudy_round.png"
  }
];

const timelineEvents = [
  "WeDrip Founded",
  "WeDrip OS Founded",
  "Kaizen Cafe Founded",
  "NEHR Started",
  "FyneStudy Delivered"
];

function VentureCard({ venture, index }: { venture: Venture, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-500 hover:border-pink-500/30 hover:bg-black/50 hover:shadow-[0_0_40px_rgba(255,79,134,0.15)] overflow-hidden flex flex-col h-full"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pink-500/0 to-pink-500/0 opacity-0 transition-opacity duration-500 group-hover:from-pink-500/5 group-hover:opacity-100" />
      
      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-5 md:mb-6 flex items-start justify-between gap-3 md:gap-4">
          
          {/* Circular Logo Container */}
          {venture.logoUrl ? (
            <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-md shadow-[0_4px_20px_rgba(255,183,197,0.1)] transition-all duration-500 group-hover:scale-110 group-hover:border-pink-500/30 group-hover:bg-white/10 group-hover:shadow-[0_4px_25px_rgba(255,183,197,0.3)]">
              {/* Pink reflection glow behind logo */}
              <div className="absolute inset-0 bg-pink-400/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-md" />
              <div className="relative h-full w-full rounded-full overflow-hidden">
                <Image 
                  src={venture.logoUrl} 
                  alt={`${venture.name} logo`} 
                  fill 
                  className="object-cover transition-all duration-500 group-hover:brightness-110" 
                />
              </div>
            </div>
          ) : (
            <div className="relative flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl sm:text-2xl font-bold text-white/50 backdrop-blur-md shadow-[0_4px_20px_rgba(255,183,197,0.1)] transition-all duration-500 group-hover:scale-110 group-hover:border-pink-500/30 group-hover:bg-white/10 group-hover:text-pink-200 group-hover:shadow-[0_4px_25px_rgba(255,183,197,0.3)]">
              <div className="absolute inset-0 bg-pink-400/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-md rounded-full" />
              <span className="relative z-10">{venture.name.charAt(0)}</span>
            </div>
          )}
          
          <div className="text-right">
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-white/80 backdrop-blur-sm">
              {venture.status}
            </span>
            {venture.founded && (
              <div className="mt-1.5 md:mt-2 text-[10px] md:text-xs font-medium text-white/40">Est. {venture.founded}</div>
            )}
          </div>
        </div>

        <h3 className="mb-1 font-display text-xl sm:text-2xl font-semibold tracking-tight text-white group-hover:text-pink-100 transition-colors duration-300">
          {venture.name}
        </h3>
        <p className="mb-3 md:mb-4 text-xs sm:text-sm font-medium text-pink-300/80">{venture.category}</p>
        
        <p className="mb-5 md:mb-6 flex-grow text-xs sm:text-sm leading-relaxed text-white/70">
          {venture.description}
        </p>

        {venture.subProducts && (
          <div className="mb-5 md:mb-6">
            <h4 className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/40">Sub-products</h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {venture.subProducts.map(product => (
                <span key={product} className="rounded-md bg-white/5 px-2 py-1 text-[10px] sm:text-xs font-medium text-white/60 border border-white/5">
                  {product}
                </span>
              ))}
            </div>
          </div>
        )}

        {venture.features && (
          <div className="mb-5 md:mb-6">
            <h4 className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-white/40">Features</h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {venture.features.map(feature => (
                <span key={feature} className="rounded-md bg-white/5 px-2 py-1 text-[10px] sm:text-xs font-medium text-white/60 border border-white/5">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {venture.website && (
          <div className="mt-auto pt-4 border-t border-white/10">
            <a 
              href={venture.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-white/90 transition-colors hover:text-pink-300"
            >
              Visit Website
              <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Phase4Ecosystem() {
  return (
    <section id="phase4-ecosystem" className="relative min-h-screen py-32 overflow-hidden">
      <Container>
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 font-display text-4xl font-bold tracking-tight text-white md:text-6xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              THE ECOSYSTEM
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-medium text-white/80 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
              Building products, ventures and systems from Northeast India.
            </p>
          </motion.div>
        </div>

        {/* Enhanced Ecosystem Map */}
        <div className="relative mb-40 hidden md:block select-none pointer-events-none">
          <div className="mx-auto flex max-w-[1000px] flex-col items-center relative">
            
            {/* Top Node: WeDrip */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-20 rounded-full border border-pink-500/40 bg-black/80 px-10 py-5 font-display text-3xl font-bold text-white shadow-[0_0_40px_rgba(255,79,134,0.3)] backdrop-blur-xl"
            >
              WeDrip
            </motion.div>
            
            {/* Main Vertical Stem */}
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: 60, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-[2px] bg-gradient-to-b from-pink-500/60 to-pink-500/20" 
            />

            {/* Horizontal Branch Line to Main Divisions */}
            <div className="relative w-[850px] flex justify-between h-[2px]">
              <motion.div 
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/40 to-pink-500/0 origin-center" 
              />
              
              {/* Dropdown lines for each division */}
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="relative h-full flex flex-col items-center">
                  {/* The connection point */}
                  <div className="absolute top-0 w-2 h-2 -translate-y-1/2 rounded-full bg-pink-400/80 shadow-[0_0_10px_rgba(255,79,134,0.5)]" />
                  
                  {/* The drop line */}
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: i === 0 ? 30 : 60, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1.2 + (i * 0.1) }}
                    className="w-[2px] bg-gradient-to-b from-pink-500/40 to-pink-500/10" 
                  />
                </div>
              ))}
            </div>

            {/* Division Nodes */}
            <div className="w-[850px] flex justify-between items-start mt-14 relative z-20">
              
              {/* WeDrip OS Node (Index 0) */}
              <div className="flex flex-col items-center -mt-8 relative z-30">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="rounded-full border border-pink-400/40 bg-black/70 px-6 py-2.5 font-display text-xl font-semibold text-white shadow-[0_0_25px_rgba(255,79,134,0.2)] backdrop-blur-md"
                >
                  WeDrip OS
                </motion.div>
                
                {/* WeDrip OS Stem */}
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: 40, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="w-[2px] bg-pink-500/30" 
                />
                
                {/* WeDrip OS Sub-branches horizontal */}
                <div className="relative w-[280px] h-[2px]">
                  <motion.div 
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 2.0 }}
                    className="absolute inset-0 bg-pink-500/30 origin-center" 
                  />
                  
                  {/* Drop lines for OS products */}
                  {[0, 1, 2, 3].map((j) => (
                    <div key={j} className="absolute top-0 h-full flex flex-col items-center" style={{ left: `${j * 33.33}%`, transform: 'translateX(-50%)' }}>
                       <div className="absolute top-0 w-1.5 h-1.5 -translate-y-1/2 rounded-full bg-pink-400/60" />
                       <motion.div 
                         initial={{ height: 0, opacity: 0 }}
                         whileInView={{ height: j % 2 === 0 ? 30 : 50, opacity: 1 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5, delay: 2.2 + (j * 0.1) }}
                         className="w-[1px] bg-pink-500/20" 
                       />
                    </div>
                  ))}
                </div>
                
                {/* Sub-products Labels */}
                <div className="relative w-[280px] mt-12 text-center text-xs font-medium text-white/70">
                   <span className="absolute left-0 -translate-x-1/2 -top-[1.2rem]">Flow COS</span>
                   <span className="absolute left-[33.33%] -translate-x-1/2 -top-[2.4rem]">Coaching OS</span>
                   <span className="absolute left-[66.66%] -translate-x-1/2 -top-[1.2rem]">Pharma OS</span>
                   <span className="absolute right-0 translate-x-1/2 -top-[2.4rem]">Gym OS</span>
                </div>
              </div>

              {/* Kaizen Cafe */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.6 }}
                className="rounded-full border border-white/15 bg-black/60 px-5 py-2 font-display text-lg font-medium text-white/90 backdrop-blur-sm mt-0"
              >
                Kaizen Cafe
              </motion.div>

              {/* NEHR */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.7 }}
                className="rounded-full border border-white/15 bg-black/60 px-5 py-2 font-display text-lg font-medium text-white/90 backdrop-blur-sm mt-0"
              >
                NEHR
              </motion.div>

              {/* WeRyd */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.8 }}
                className="rounded-full border border-white/15 bg-black/60 px-5 py-2 font-display text-lg font-medium text-white/90 backdrop-blur-sm mt-0"
              >
                WeRyd
              </motion.div>

              {/* Client Projects */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 1.9 }}
                className="rounded-full border border-white/15 bg-black/60 px-5 py-2 font-display text-lg font-medium text-white/90 backdrop-blur-sm mt-0"
              >
                Client Projects
              </motion.div>
              
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-30">
          {ventures.map((venture, idx) => (
            <VentureCard key={venture.name} venture={venture} index={idx} />
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-40 relative z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h3 className="font-display text-3xl font-bold text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">2026 Timeline</h3>
          </motion.div>
          
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute left-[15px] md:left-1/2 top-0 h-full w-[2px] md:-translate-x-1/2 bg-white/10" />
            
            <div className="flex flex-col gap-12">
              {timelineEvents.map((event, idx) => (
                <motion.div 
                  key={event}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="hidden md:block md:w-5/12" />
                  
                  <div className="absolute left-0 md:left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-pink-500 bg-black shadow-[0_0_15px_rgba(255,79,134,0.4)]">
                    <div className="h-2 w-2 rounded-full bg-pink-400" />
                  </div>
                  
                  <div className="ml-12 md:ml-0 md:w-5/12 rounded-xl border border-white/15 bg-black/50 p-6 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all hover:bg-black/70 hover:border-pink-500/30">
                    <h4 className="font-semibold text-white/90 drop-shadow-sm">{event}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </Container>
    </section>
  );
}
