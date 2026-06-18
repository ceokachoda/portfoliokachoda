"use client";

import React from 'react';
import { Container } from "@/components/ui/container";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0a0508] text-white/90 font-sans py-12 px-5 sm:px-8 lg:px-12 relative overflow-hidden selection:bg-[#ffcadd]/30 selection:text-white print:bg-white print:text-black print:p-8">
      {/* Background Effects matching portfolio */}
      <div className="pointer-events-none fixed inset-0 z-0 print:hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
        <div className="absolute -top-[20%] -right-[10%] h-[70%] w-[50%] rounded-full bg-[#ffcadd] opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-[10%] -left-[10%] h-[50%] w-[50%] rounded-full bg-[#ffcadd] opacity-[0.02] blur-[100px]" />
      </div>

      <Container className="relative z-10 max-w-4xl mx-auto print:max-w-none print:px-0">
        
        {/* Print Button (Hidden when printing) */}
        <div className="mb-12 flex justify-end print:hidden">
          <button 
            onClick={() => window.print()}
            className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(255,182,193,0.05)] hover:shadow-[0_0_30px_rgba(255,182,193,0.15)]"
          >
            Download PDF
          </button>
        </div>

        {/* Header */}
        <header className="mb-16 border-b border-white/10 pb-8 print:border-black/20 print:mb-10">
          <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tight mb-4 uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 print:text-black print:bg-none print:text-5xl">
            Karan Malakar
          </h1>
          <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-[#ffcadd] drop-shadow-[0_0_10px_rgba(255,202,221,0.5)] print:text-gray-600 print:drop-shadow-none">
            Founder — WeDrip • Student — BTech Artificial Intelligence
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 print:grid-cols-3 print:gap-8">
          
          {/* Main Column */}
          <div className="md:col-span-2 print:col-span-2 space-y-12 print:space-y-8">
            
            <section className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-8 print:bg-transparent print:border-none print:p-0">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] border-b border-white/10 pb-3 mb-6 text-white/50 print:text-gray-800 print:border-gray-300 flex items-center gap-3 print:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffcadd] shadow-[0_0_8px_rgba(255,202,221,0.8)] print:hidden"></span>
                Founder Summary
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-white/80 print:text-gray-700 font-light print:text-sm">
                Builder of technology ventures, operating systems, and ecosystems from Northeast India. Leading WeDrip and its network of specialized OS platforms designed to modernize industries. Passionate about creating elegant, cinematic, and highly functional digital experiences while expanding technical and product expertise in Artificial Intelligence.
              </p>
            </section>

            <section className="bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-2xl p-8 print:bg-transparent print:border-none print:p-0">
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] border-b border-white/10 pb-3 mb-6 text-white/50 print:text-gray-800 print:border-gray-300 flex items-center gap-3 print:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffcadd] shadow-[0_0_8px_rgba(255,202,221,0.8)] print:hidden"></span>
                Experience
              </h2>
              <div className="space-y-8 print:space-y-6">
                <div className="group relative">
                  <div className="absolute -inset-4 bg-white/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 print:hidden blur-lg"></div>
                  <div className="relative">
                    <h3 className="text-lg font-bold text-white print:text-black tracking-wide print:text-base">Founder & CEO — WeDrip</h3>
                    <p className="text-[10px] text-[#ffcadd] mb-3 uppercase tracking-[0.2em] font-medium print:text-gray-500 print:mb-1">2026 – Present</p>
                    <p className="text-sm text-white/70 leading-relaxed print:text-gray-700 font-light print:text-sm">
                      Leading the parent ecosystem focused on building ventures, operating systems and digital infrastructure for the future of Northeast India.
                    </p>
                  </div>
                </div>
                
                <div className="group relative">
                  <div className="absolute -inset-4 bg-white/5 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 print:hidden blur-lg"></div>
                  <div className="relative">
                    <h3 className="text-lg font-bold text-white print:text-black tracking-wide print:text-base">Founder — WeDrip OS</h3>
                    <p className="text-[10px] text-[#ffcadd] mb-3 uppercase tracking-[0.2em] font-medium print:text-gray-500 print:mb-1">2026 – Present</p>
                    <p className="text-sm text-white/70 leading-relaxed mb-3 print:text-gray-700 font-light print:text-sm">
                      A collection of industry-specific operating systems designed to modernize businesses through software. Projects include: FlowCOS, Coaching OS, Pharma OS, Gym OS.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 print:gap-4">
                  <div>
                    <h3 className="text-base font-bold text-white print:text-black tracking-wide print:text-sm">Founder — NEHR</h3>
                    <p className="text-[10px] text-[#ffcadd]/70 mt-1 uppercase tracking-[0.2em] font-medium print:text-gray-500 print:mt-0">Northeast Home Rentals</p>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white print:text-black tracking-wide print:text-sm">Founder — Kaizen Cafe</h3>
                    <p className="text-[10px] text-[#ffcadd]/70 mt-1 uppercase tracking-[0.2em] font-medium print:text-gray-500 print:mt-0">Guwahati</p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="space-y-12 print:space-y-8">
            
            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] border-b border-white/10 pb-3 mb-6 text-white/50 print:text-gray-800 print:border-gray-300 flex items-center gap-3 print:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffcadd] shadow-[0_0_8px_rgba(255,202,221,0.8)] print:hidden"></span>
                Projects Built
              </h2>
              <ul className="flex flex-col gap-3 text-sm text-white/80 print:text-gray-700 font-light print:gap-1.5 print:text-sm">
                {["WeDrip", "WeDrip OS", "FlowCOS", "Coaching OS", "Pharma OS", "Gym OS", "FyneStudy", "SUHASHI POS", "NEHR (Northeast Home Rentals)", "Kaizen Cafe"].map((project, i) => (
                  <li key={i} className="flex items-center gap-3 group print:gap-2">
                    <div className="h-[1px] w-4 bg-white/20 group-hover:bg-[#ffcadd] group-hover:w-6 transition-all duration-300 print:bg-gray-400 print:w-2"></div>
                    <span className="group-hover:text-white transition-colors duration-300">{project}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] border-b border-white/10 pb-3 mb-6 text-white/50 print:text-gray-800 print:border-gray-300 flex items-center gap-3 print:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffcadd] shadow-[0_0_8px_rgba(255,202,221,0.8)] print:hidden"></span>
                Education
              </h2>
              <div>
                <h3 className="text-sm font-bold text-white print:text-black">BTech Artificial Intelligence</h3>
                <p className="text-xs text-white/50 mt-1 uppercase tracking-wider font-light print:text-gray-500 print:mt-0">Student</p>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] border-b border-white/10 pb-3 mb-6 text-white/50 print:text-gray-800 print:border-gray-300 flex items-center gap-3 print:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffcadd] shadow-[0_0_8px_rgba(255,202,221,0.8)] print:hidden"></span>
                Skills
              </h2>
              <div className="flex flex-wrap gap-2 print:gap-1.5">
                {[
                  "Product Strategy", "Startup Building", "Frontend Dev", 
                  "UI/UX Design", "Product Thinking", "Branding", 
                  "AI Integration", "Ecosystem Architecture"
                ].map(skill => (
                  <span key={skill} className="bg-white/5 border border-white/10 text-white/70 text-xs px-3 py-1.5 rounded-full font-light tracking-wide hover:bg-white/10 hover:text-white transition-colors print:border-gray-400 print:bg-transparent print:text-gray-800 print:py-1 print:px-2">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] border-b border-white/10 pb-3 mb-6 text-white/50 print:text-gray-800 print:border-gray-300 flex items-center gap-3 print:mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ffcadd] shadow-[0_0_8px_rgba(255,202,221,0.8)] print:hidden"></span>
                Contact & Links
              </h2>
              <ul className="space-y-4 text-sm font-light print:space-y-2">
                <li>
                  <span className="block text-[10px] text-white/40 tracking-[0.2em] uppercase mb-1 print:text-gray-500 print:mb-0">Email</span>
                  <a href="mailto:karanmalakar55@gmail.com" className="text-white/80 hover:text-[#ffcadd] transition-colors break-words print:text-black">karanmalakar55@gmail.com</a>
                </li>
                <li>
                  <span className="block text-[10px] text-white/40 tracking-[0.2em] uppercase mb-1 print:text-gray-500 print:mb-0">Portfolio</span>
                  <a href="https://karanmalakar.com" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#ffcadd] transition-colors break-words print:text-black">karanmalakar.com</a>
                </li>
                <li>
                  <span className="block text-[10px] text-white/40 tracking-[0.2em] uppercase mb-1 print:text-gray-500 print:mb-0">WeDrip</span>
                  <a href="https://wedrip.xyz" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#ffcadd] transition-colors break-words print:text-black">wedrip.xyz</a>
                </li>
                <li>
                  <span className="block text-[10px] text-white/40 tracking-[0.2em] uppercase mb-1 print:text-gray-500 print:mb-0">GitHub</span>
                  <a href="https://github.com/ceokachoda" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#ffcadd] transition-colors break-words print:text-black">github.com/ceokachoda</a>
                </li>
                <li>
                  <span className="block text-[10px] text-white/40 tracking-[0.2em] uppercase mb-1 print:text-gray-500 print:mb-0">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/karan-malakar-16b213401" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-[#ffcadd] transition-colors break-words print:text-black">linkedin.com/in/karan-malakar</a>
                </li>
              </ul>
            </section>

          </div>
        </div>
      </Container>
    </div>
  );
}
