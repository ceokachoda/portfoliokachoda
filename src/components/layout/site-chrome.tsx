import { Container } from "@/components/ui/container";

export function SiteChrome() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-30 pt-6">
      <Container className="flex h-14 items-center justify-between">
        <div className="pointer-events-auto">
          <p className="font-display text-[15px] font-medium tracking-[0.2em] text-white/90 mix-blend-screen drop-shadow-md">KARAN MALAKAR</p>
          <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.3em] text-white/50 mix-blend-screen">WeDrip Ecosystem</p>
        </div>
        <div className="flex items-center gap-6 pointer-events-auto">
          <p className="hidden text-[10px] font-medium uppercase tracking-[0.25em] text-white/50 mix-blend-screen md:block">
            Shillong — Guwahati
          </p>
          <a href="/resume" target="_blank" className="text-[9px] md:text-[10px] font-medium uppercase tracking-[0.2em] text-white/90 border border-white/20 px-4 py-2 rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            Download Resume
          </a>
        </div>
      </Container>
    </header>
  );
}
