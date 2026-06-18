import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type GlassPanelProps = ComponentPropsWithoutRef<"aside">;

export function GlassPanel({ className, ...props }: GlassPanelProps) {
  return (
    <aside
      className={cn(
        "rounded-[2rem] border border-[#ffcadd]/10 bg-black/40 p-6 shadow-[0_8px_32px_rgba(255,202,221,0.03)] backdrop-blur-[20px]",
        className
      )}
      {...props}
    />
  );
}
