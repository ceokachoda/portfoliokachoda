import { SiteChrome } from "@/components/layout/site-chrome";
import { FounderExperience } from "@/components/experience/founder-experience";
import { AboutSection } from "@/components/ecosystem/about-section";
import { Phase4Ecosystem } from "@/components/ecosystem/phase4-ecosystem";
import { EcosystemContent } from "@/components/ecosystem/ecosystem-content";

export function CinematicShell() {
  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-ink-950 text-white selection:bg-pink-500/30 scroll-smooth">
      <SiteChrome />
      <FounderExperience />
      
      {/* Restored Who Is Karan Malakar Section */}
      <div className="relative z-10 mx-auto w-full max-w-site px-5 sm:px-8 lg:px-12 pt-24 pb-12">
        <AboutSection />
      </div>

      <Phase4Ecosystem />
      <EcosystemContent />
    </main>
  );
}
