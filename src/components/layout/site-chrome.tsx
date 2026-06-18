import { Container } from "@/components/ui/container";

export function SiteChrome() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-30 border-b border-white/[0.06] bg-ink-950/10 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between">
        <div className="pointer-events-auto">
          <p className="font-display text-base tracking-[0.18em] text-white">KARAN MALAKAR</p>
          <p className="mt-1 text-[10px] uppercase tracking-[0.34em] text-white/42">WeDrip Ecosystem</p>
        </div>
        <p className="hidden text-xs uppercase tracking-[0.28em] text-white/46 md:block">
          Shillong - Guwahati
        </p>
      </Container>
    </header>
  );
}
