import { Container } from "@/components/ui/container";
import { GlassPanel } from "@/components/ui/glass-panel";

const phaseMarkers = ["Architecture", "Responsive System", "Animation Language", "SEO"];

export function FoundationStage() {
  return (
    <section className="relative z-10 grid min-h-dvh items-end pb-8 pt-28 sm:pb-10 lg:items-center lg:pb-0">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.55fr)] lg:items-end">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.42em] text-blossom-300/82">Phase 1 Foundation</p>
            <h1 className="mt-5 max-w-5xl font-display text-[clamp(3rem,8vw,8.75rem)] leading-[0.86] text-balance">
              Founder signal for the WeDrip era.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/62 sm:text-lg">
              A cinematic, high-performance system is ready for the next build phase.
            </p>
          </div>
          <GlassPanel className="lg:mb-3">
            <p className="text-[11px] uppercase tracking-[0.36em] text-white/44">Build Status</p>
            <div className="mt-6 space-y-4">
              {phaseMarkers.map((marker) => (
                <div key={marker} className="flex items-center justify-between gap-5 border-b border-white/[0.08] pb-4 last:border-0 last:pb-0">
                  <span className="text-sm text-white/72">{marker}</span>
                  <span className="h-2 w-2 rounded-full bg-blossom-300 shadow-blossom" />
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>
      </Container>
    </section>
  );
}
