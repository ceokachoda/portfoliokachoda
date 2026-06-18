import { SiteChrome } from "@/components/layout/site-chrome";
import { FounderExperience } from "@/components/experience/founder-experience";

export function CinematicShell() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-ink-950 text-white">
      <SiteChrome />
      <FounderExperience />
    </main>
  );
}
