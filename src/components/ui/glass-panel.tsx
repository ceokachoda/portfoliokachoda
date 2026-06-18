import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type GlassPanelProps = ComponentPropsWithoutRef<"aside">;

export function GlassPanel({ className, ...props }: GlassPanelProps) {
  return (
    <aside
      className={cn(
        "rounded-[12px] border border-white/15 bg-black/40 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-[16px]",
        className
      )}
      {...props}
    />
  );
}
