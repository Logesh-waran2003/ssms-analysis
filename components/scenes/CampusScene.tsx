"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { STATS } from "@/lib/data";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { stiffness: 50, damping: 20 });
  const display = useTransform(spring, (v) =>
    suffix === "%" ? Math.round(v) + suffix : Math.floor(v).toLocaleString() + suffix
  );

  if (inView) spring.set(value);

  return <motion.span ref={ref}>{display}</motion.span>;
}

export default function CampusScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.7, 0.3]);

  return (
    <section ref={ref} className="relative h-[80vh] overflow-hidden" id="campus">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/campus-hero.jpg")', scale }}
      />
      <motion.div className="absolute inset-0 bg-ink" style={{ opacity: overlayOpacity }} />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold-light text-xs font-semibold tracking-[3px] uppercase mb-4"
        >
          Our Campus
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,48px)] font-semibold text-white text-center leading-tight mb-12"
        >
          28,894 sq.m of Possibility
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-[800px]">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="text-center"
            >
              <div className="font-[family-name:var(--font-heading)] text-[42px] font-bold text-gold-light leading-none mb-1">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/60 text-xs tracking-wider uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
