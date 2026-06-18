export type ExperienceTier = "reduced" | "mobile" | "standard" | "ultra";

export type ExperienceCapabilities = {
  hasWebGL: boolean;
  isMobile: boolean;
  reducedMotion: boolean;
  tier: ExperienceTier;
};

export const sceneSettings = {
  reduced: {
    dpr: [1, 1] as [number, number],
    trees: 0,
    petals: 0,
    particles: 0,
    lanterns: 0,
    bloom: false,
    shadows: false
  },
  mobile: {
    dpr: [1, 1.35] as [number, number],
    trees: 26,
    petals: 420,
    particles: 220,
    lanterns: 7,
    bloom: false,
    shadows: false
  },
  standard: {
    dpr: [1, 1.65] as [number, number],
    trees: 52,
    petals: 900,
    particles: 460,
    lanterns: 12,
    bloom: true,
    shadows: false
  },
  ultra: {
    dpr: [1, 2] as [number, number],
    trees: 76,
    petals: 1400,
    particles: 720,
    lanterns: 16,
    bloom: true,
    shadows: false
  }
} as const;

export function detectWebGL() {
  if (typeof window === "undefined") {
    return false;
  }

  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      canvas.getContext("webgl2", { powerPreference: "high-performance" }) ??
        canvas.getContext("webgl", { powerPreference: "high-performance" })
    );
  } catch {
    return false;
  }
}

export function getExperienceCapabilities(): ExperienceCapabilities {
  if (typeof window === "undefined") {
    return {
      hasWebGL: false,
      isMobile: false,
      reducedMotion: false,
      tier: "reduced"
    };
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
  const hasWebGL = detectWebGL();
  const cores = navigator.hardwareConcurrency ?? 4;
  const memory = "deviceMemory" in navigator ? Number(navigator.deviceMemory) : 4;

  let tier: ExperienceTier = "standard";

  if (!hasWebGL || reducedMotion) {
    tier = "reduced";
  } else if (isMobile || cores <= 4 || memory <= 4) {
    tier = "mobile";
  } else if (cores >= 8 && memory >= 8 && window.devicePixelRatio >= 1.5) {
    tier = "ultra";
  }

  return {
    hasWebGL,
    isMobile,
    reducedMotion,
    tier
  };
}

export function seededRandom(seed: number) {
  let value = seed;

  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}
