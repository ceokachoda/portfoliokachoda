"use client";

import React from 'react';
import { externalLinks } from '@/config/links'; // Although we might just hardcode the ones provided

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans py-12 px-5 sm:px-8 lg:px-12 print:py-0 print:px-0">
      <div className="max-w-3xl mx-auto print:max-w-none">
        
        {/* Print Button (Hidden when printing) */}
        <div className="mb-8 flex justify-end print:hidden">
          <button 
            onClick={() => window.print()}
            className="px-6 py-2 bg-ink-950 text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-black transition-colors"
          >
            Print / Save PDF
          </button>
        </div>

        {/* Header */}
        <header className="mb-10 border-b-2 border-black pb-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-2 uppercase">Karan Malakar</h1>
          <p className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-gray-600">
            Founder • Entrepreneur • Product Builder
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 print:grid-cols-3">
          
          {/* Main Column */}
          <div className="md:col-span-2 print:col-span-2 space-y-10">
            
            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-gray-300 pb-2 mb-4 text-gray-800">About</h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                Founder of WeDrip and builder of ventures across technology, education, hospitality, housing and future operating systems. 
                Currently focused on creating products and ecosystems capable of generating long-term impact across Northeast India 
                while expanding skills in frontend development, UI/UX design and product creation.
              </p>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-gray-300 pb-2 mb-4 text-gray-800">Experience</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold text-black">Founder & CEO — WeDrip</h3>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">2026 – Present</p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Leading the parent ecosystem focused on building ventures, operating systems and digital infrastructure for the future of Northeast India.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-base font-bold text-black">Founder — WeDrip OS</h3>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">2026 – Present</p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">
                    A collection of industry-specific operating systems designed to modernize businesses through software. Projects under WeDrip OS include:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 ml-2">
                    <li>FlowCOS</li>
                    <li>Coaching OS</li>
                    <li>Pharma OS</li>
                    <li>Gym OS</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base font-bold text-black">Founder — Northeast Home Rentals (NEHR)</h3>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">2026 – Present</p>
                </div>

                <div>
                  <h3 className="text-base font-bold text-black">Founder — Kaizen Cafe Guwahati</h3>
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider">2026 – Present</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-gray-300 pb-2 mb-4 text-gray-800">Projects & Products</h2>
              <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700 list-disc list-inside">
                <li>WeDrip</li>
                <li>WeDrip OS</li>
                <li>FlowCOS</li>
                <li>SUHASHI POS</li>
                <li>FyneStudy</li>
                <li>Northeast Home Rentals</li>
                <li>Kaizen Cafe</li>
              </ul>
            </section>

          </div>

          {/* Sidebar Column */}
          <div className="space-y-10">
            
            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-gray-300 pb-2 mb-4 text-gray-800">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  "Product Strategy", "Startup Building", "Frontend Development", 
                  "UI/UX Design", "Product Thinking", "Branding", 
                  "Business Development", "Founder Operations"
                ].map(skill => (
                  <span key={skill} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded font-medium border border-gray-200 print:border-gray-400 print:bg-transparent">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] border-b border-gray-300 pb-2 mb-4 text-gray-800">Links</h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <span className="block text-xs text-gray-500 font-bold uppercase">Website</span>
                  <a href="https://wedrip.xyz" target="_blank" rel="noopener noreferrer" className="text-black hover:underline break-words">https://wedrip.xyz</a>
                </li>
                <li>
                  <span className="block text-xs text-gray-500 font-bold uppercase">NEHR</span>
                  <a href="https://northeasthomerental.com" target="_blank" rel="noopener noreferrer" className="text-black hover:underline break-words">https://northeasthomerental.com</a>
                </li>
                <li>
                  <span className="block text-xs text-gray-500 font-bold uppercase">Kaizen Cafe</span>
                  <a href="https://kaizencafe.in" target="_blank" rel="noopener noreferrer" className="text-black hover:underline break-words">https://kaizencafe.in</a>
                </li>
                <li>
                  <span className="block text-xs text-gray-500 font-bold uppercase">GitHub</span>
                  <a href="https://github.com/ceokachoda" target="_blank" rel="noopener noreferrer" className="text-black hover:underline break-words">https://github.com/ceokachoda</a>
                </li>
                <li>
                  <span className="block text-xs text-gray-500 font-bold uppercase">LinkedIn</span>
                  <a href="https://www.linkedin.com/in/karan-malakar-16b213401" target="_blank" rel="noopener noreferrer" className="text-black hover:underline break-words">linkedin.com/in/karan-malakar-16b213401</a>
                </li>
                <li>
                  <span className="block text-xs text-gray-500 font-bold uppercase">Instagram</span>
                  <a href="https://www.instagram.com/karanmaran_xd" target="_blank" rel="noopener noreferrer" className="text-black hover:underline break-words">@karanmaran_xd</a>
                </li>
              </ul>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}
