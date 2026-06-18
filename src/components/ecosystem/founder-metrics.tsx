"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ from = 0, to = 5, duration = 2 }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;

    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrame);
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
}

export function FounderMetrics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    },
  };

  return (
    <section className="relative w-full py-24 mb-16 border-y border-white/5 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(255,202,221,0.03)_0%,transparent_70%)]" />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
      >
        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
          <div className="text-6xl md:text-7xl font-display font-medium text-white mb-4 drop-shadow-lg group-hover:scale-105 transition-transform duration-500 group-hover:text-[#ffcadd]">
            <Counter to={5} />+
          </div>
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-2">Ventures</h3>
          <p className="text-sm text-white/70">Founded & scaled</p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
          <div className="text-2xl md:text-3xl font-display font-medium text-white mb-4 leading-tight group-hover:scale-105 transition-transform duration-500">
            Tech • Ed • Hosp • Ops
          </div>
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#ffcadd] mb-2">Industries</h3>
          <p className="text-sm text-white/70">Cross-sector innovation</p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
          <div className="text-2xl md:text-3xl font-display font-medium text-white mb-4 leading-tight group-hover:scale-105 transition-transform duration-500">
            Live Ecosystems
          </div>
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#ffcadd] mb-2">Products</h3>
          <p className="text-sm text-white/70">Multiple active systems</p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col items-center lg:items-start text-center lg:text-left group">
          <div className="text-2xl md:text-3xl font-display font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-4 leading-tight group-hover:scale-105 transition-transform duration-500">
            Northeast India
          </div>
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-[#ffcadd] mb-2">Mission</h3>
          <p className="text-sm text-white/70">Building for the globe</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
