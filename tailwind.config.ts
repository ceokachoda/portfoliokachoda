import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#030305",
          900: "#07070A",
          800: "#101014",
          700: "#17171D"
        },
        crimson: {
          500: "#E1193D",
          600: "#B80F2F",
          700: "#850B24"
        },
        blossom: {
          100: "#FFE8F0",
          300: "#FF9FBD",
          500: "#FF4F86"
        },
        glass: {
          line: "rgba(255,255,255,0.14)",
          fill: "rgba(255,255,255,0.075)"
        }
      },
      fontFamily: {
        display: ["var(--font-clash)", "var(--font-inter)", "sans-serif"],
        sans: ["var(--font-satoshi)", "var(--font-inter)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"]
      },
      maxWidth: {
        "site": "1440px"
      },
      boxShadow: {
        "blossom": "0 0 48px rgba(255, 79, 134, 0.28)",
        "crimson": "0 0 64px rgba(225, 25, 61, 0.32)",
        "glass": "inset 0 1px 0 rgba(255,255,255,0.12), 0 24px 80px rgba(0,0,0,0.38)"
      },
      backgroundImage: {
        "radial-crimson": "radial-gradient(circle at center, rgba(225,25,61,0.28), transparent 58%)",
        "radial-blossom": "radial-gradient(circle at center, rgba(255,79,134,0.22), transparent 56%)"
      },
      animation: {
        "film-grain": "film-grain 9s steps(10) infinite",
        "pulse-glow": "pulse-glow 7s ease-in-out infinite",
        "slow-orbit": "slow-orbit 28s linear infinite"
      },
      keyframes: {
        "film-grain": {
          "0%, 100%": { transform: "translate3d(0,0,0)" },
          "10%": { transform: "translate3d(-1%, -1%, 0)" },
          "20%": { transform: "translate3d(1%, 1%, 0)" },
          "30%": { transform: "translate3d(-2%, 1%, 0)" },
          "40%": { transform: "translate3d(2%, -1%, 0)" },
          "50%": { transform: "translate3d(-1%, 2%, 0)" },
          "60%": { transform: "translate3d(1%, -2%, 0)" },
          "70%": { transform: "translate3d(2%, 1%, 0)" },
          "80%": { transform: "translate3d(-2%, -1%, 0)" },
          "90%": { transform: "translate3d(1%, 2%, 0)" }
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.34", transform: "scale(1)" },
          "50%": { opacity: "0.62", transform: "scale(1.08)" }
        },
        "slow-orbit": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      }
    }
  },
  plugins: []
};

export default config;
