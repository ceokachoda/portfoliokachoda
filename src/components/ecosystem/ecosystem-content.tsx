import { ProjectsSection } from "./projects-section";
import { LoveSection } from "./love-section";
import { DigitalFootprint } from "./digital-footprint";
import { JourneyTimeline } from "./journey-timeline";
import { FinalStatement } from "./final-statement";
import { ContactSection } from "./contact-section";
import { SiteFooter } from "@/components/layout/site-footer";

export function EcosystemContent() {
  return (
    <div id="ecosystem-content" className="relative z-10 w-full bg-transparent pb-16">
      {/* Cinematic gradient that deepens as you scroll but never becomes fully opaque, preserving the fixed video background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-ink-950/60 to-ink-950/90 pointer-events-none" />
      
      <div className="relative z-10 mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12 flex flex-col gap-32 md:gap-48 pt-12 md:pt-24">
        <ProjectsSection />
        <LoveSection />
        <DigitalFootprint />
        <JourneyTimeline />
        <FinalStatement />
        <ContactSection />
      </div>
      <SiteFooter />
    </div>
  );
}
