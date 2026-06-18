"use client";

import React from 'react';
import { Container } from "@/components/ui/container";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0a0508] text-white/90 font-sans py-12 px-5 sm:px-8 lg:px-12 relative overflow-hidden selection:bg-[#ffcadd]/30 selection:text-white"
         style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}>
      
      {/* Background Effects matching portfolio */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute -top-[20%] -right-[10%] h-[70%] w-[50%] rounded-full bg-[#ffcadd] opacity-[0.05] blur-[150px]" />
        <div className="absolute bottom-[10%] -left-[10%] h-[50%] w-[50%] rounded-full bg-[#ffcadd] opacity-[0.03] blur-[120px]" />
      </div>

      <Container className="relative z-10 max-w-5xl mx-auto print:max-w-none print:p-0">
        
        {/* Print Button */}
        <div className="mb-12 flex justify-end print:hidden">
          <button 
            onClick={() => window.print()}
            className="group relative px-8 py-3 bg-[#ffcadd]/5 hover:bg-[#ffcadd]/15 border border-[#ffcadd]/30 backdrop-blur-md text-[#ffcadd] hover:text-white text-[10px] font-bold uppercase tracking-[0.25em] rounded-full transition-all duration-500 shadow-[0_0_20px_rgba(255,202,221,0.1)] hover:shadow-[0_0_40px_rgba(255,202,221,0.3)]"
          >
            <span className="relative z-10">Save as PDF</span>
          </button>
        </div>

        <div className="bg-black/40 backdrop-blur-[20px] border border-[#ffcadd]/10 rounded-[2rem] p-8 sm:p-12 md:p-16 shadow-[0_8px_32px_rgba(255,202,221,0.03)] print:shadow-none print:border-none print:bg-transparent print:p-0">
          
          {/* Header */}
          <header className="mb-16 border-b border-[#ffcadd]/10 pb-10">
            <h1 className="text-5xl md:text-7xl font-display font-medium tracking-wide mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-[#fff5f7] to-[#ffcadd]/80 drop-shadow-lg">
              Karan Malakar
            </h1>
            <p className="text-xs md:text-sm font-medium tracking-[0.3em] uppercase text-[#ffcadd] drop-shadow-[0_0_10px_rgba(255,202,221,0.5)] mb-4">
              Founder — Entrepreneur — Product Builder
            </p>
            <p className="text-sm font-light text-white/60 tracking-wider">
              Northeast India
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            
            {/* Main Column */}
            <div className="md:col-span-8 space-y-16">
              
              <section>
                <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#ffcadd] mb-6 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-[#ffcadd]/40"></span>
                  Founder Profile
                </h2>
                <p className="text-base md:text-lg leading-[1.8] text-white/80 font-light text-justify">
                  Builder of technology ventures, operating systems, and ecosystems from Northeast India. Leading WeDrip and its network of specialized OS platforms designed to modernize industries. Passionate about creating elegant, cinematic, and highly functional digital experiences while bridging technology, education, hospitality, and housing.
                </p>
              </section>

              <section>
                <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#ffcadd] mb-8 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-[#ffcadd]/40"></span>
                  Ecosystem & Ventures
                </h2>
                
                <div className="space-y-12">
                  <div className="relative pl-6 border-l border-[#ffcadd]/20">
                    <div className="absolute w-2 h-2 rounded-full bg-[#ffcadd] -left-[4.5px] top-2 shadow-[0_0_10px_rgba(255,202,221,0.8)]"></div>
                    <h3 className="text-xl md:text-2xl font-display font-medium text-white mb-2 tracking-wide">Founder & CEO — WeDrip</h3>
                    <p className="text-[10px] text-[#ffcadd]/70 mb-4 uppercase tracking-[0.2em] font-medium">2026 – Present</p>
                    <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
                      Leading the parent ecosystem focused on building ventures, operating systems, and digital infrastructure for the future of Northeast India.
                    </p>
                  </div>
                  
                  <div className="relative pl-6 border-l border-[#ffcadd]/20">
                    <div className="absolute w-2 h-2 rounded-full bg-white/40 -left-[4.5px] top-2"></div>
                    <h3 className="text-lg md:text-xl font-display font-medium text-white mb-2 tracking-wide">Founder — WeDrip OS</h3>
                    <p className="text-[10px] text-[#ffcadd]/70 mb-4 uppercase tracking-[0.2em] font-medium">2026 – Present</p>
                    <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
                      A collection of industry-specific operating systems designed to modernize businesses through software. Engineering the core infrastructure for FlowCOS, Coaching OS, Pharma OS, and Gym OS.
                    </p>
                  </div>

                  <div className="relative pl-6 border-l border-[#ffcadd]/20">
                    <div className="absolute w-2 h-2 rounded-full bg-white/40 -left-[4.5px] top-2"></div>
                    <h3 className="text-lg md:text-xl font-display font-medium text-white mb-2 tracking-wide">Founder — FyneStudy</h3>
                    <p className="text-[10px] text-[#ffcadd]/70 mb-4 uppercase tracking-[0.2em] font-medium">Education Platform</p>
                    <p className="text-sm md:text-base text-white/70 leading-relaxed font-light">
                      Architected and built a modern educational dashboard environment to streamline learning and bridge digital gaps.
                    </p>
                  </div>
                </div>
              </section>

            </div>

            {/* Sidebar Column */}
            <div className="md:col-span-4 space-y-16">
              
              <section>
                <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#ffcadd] mb-6">
                  Select Projects
                </h2>
                <ul className="flex flex-col gap-4 text-sm text-white/80 font-light">
                  {[
                    "SUHASHI POS",
                    "NEHR (Northeast Home Rentals)",
                    "Kaizen Cafe",
                    "FlowCOS",
                    "Coaching OS",
                    "WeDrip Ecosystem"
                  ].map((project, i) => (
                    <li key={i} className="flex items-center gap-3 group">
                      <div className="h-[1px] w-4 bg-[#ffcadd]/40 transition-all duration-300"></div>
                      <span className="tracking-wider">{project}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#ffcadd] mb-6">
                  Expertise
                </h2>
                <div className="flex flex-col gap-3 text-sm text-white/70 font-light tracking-wide">
                  <span>Ecosystem Architecture</span>
                  <span>Product Strategy & UI/UX</span>
                  <span>Startup Building</span>
                  <span>Frontend Engineering</span>
                  <span>AI Integration</span>
                  <span>Brand Identity</span>
                </div>
              </section>

              <section>
                <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#ffcadd] mb-6">
                  Education
                </h2>
                <div>
                  <h3 className="text-sm font-medium text-white tracking-wide">BTech Artificial Intelligence</h3>
                  <p className="text-[10px] text-white/50 mt-1 uppercase tracking-[0.2em]">Student</p>
                </div>
              </section>

              <section>
                <h2 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-[#ffcadd] mb-6">
                  Contact
                </h2>
                <ul className="space-y-4 text-sm font-light">
                  <li>
                    <span className="block text-[9px] text-[#ffcadd]/60 tracking-[0.2em] uppercase mb-1">Email</span>
                    <a href="mailto:karanmalakar55@gmail.com" className="text-white hover:text-[#ffcadd] transition-colors break-words">karanmalakar55@gmail.com</a>
                  </li>
                  <li>
                    <span className="block text-[9px] text-[#ffcadd]/60 tracking-[0.2em] uppercase mb-1">Portfolio</span>
                    <span className="text-white break-words">karanmalakar.com</span>
                  </li>
                  <li>
                    <span className="block text-[9px] text-[#ffcadd]/60 tracking-[0.2em] uppercase mb-1">WeDrip</span>
                    <span className="text-white break-words">wedrip.xyz</span>
                  </li>
                </ul>
              </section>

            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
