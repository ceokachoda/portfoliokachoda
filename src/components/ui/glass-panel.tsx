import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type GlassPanelProps = ComponentPropsWithoutRef<"aside">;

export function GlassPanel({ className, ...props }: GlassPanelProps) {
  return (
    <aside
      className={cn(
        "rounded-[8px] border border-glass-line bg-glass-fill p-6 shadow-glass backdrop-blur-2xl",
        className
      )}
      {...props}
    />
  );
}
