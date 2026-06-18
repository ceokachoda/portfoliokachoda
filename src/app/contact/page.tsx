"use client";

import { ContactSection } from "@/components/ecosystem/contact-section";
import { SiteFooter } from "@/components/layout/site-footer";
import Link from "next/link";
import { HeroVideo } from "@/components/experience/hero-video";

export default function ContactPage() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-ink-950 text-white selection:bg-pink-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <HeroVideo onReady={() => {}} />
      </div>
      
      {/* Header back button */}
      <header className="fixed top-0 left-0 right-0 z-50 p-6 sm:p-8 mix-blend-difference animate-fade-in">
        <Link 
          href="/"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#ffcadd] hover:text-white transition-colors duration-300 group"
        >
          <span className="transform transition-transform duration-300 group-hover:-translate-x-1">←</span>
          Return to Ecosystem
        </Link>
      </header>

      <div className="relative z-10 w-full min-h-dvh flex flex-col justify-between pt-24">
        <div className="mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12 flex-grow flex items-center">
          <div className="w-full">
            <ContactSection />
          </div>
        </div>
        <SiteFooter />
      </div>
    </main>
  );
}
