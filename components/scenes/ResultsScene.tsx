"use client";

import { useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { RESULTS, TOPPERS } from "@/lib/data";

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const display = useTransform(spring, (v) => Math.round(v) + suffix);
  if (inView) spring.set(value);
  return <motion.span ref={ref}>{display}</motion.span>;
}

const rankColors = ["from-yellow-400 to-yellow-600", "from-gray-300 to-gray-500", "from-orange-300 to-orange-600"];
const rankBorders = ["border-yellow-400/50", "border-gray-400/50", "border-orange-400/50"];

export default function ResultsScene() {
  return (
    <section className="bg-green py-24 px-8" id="results">
      <div className="max-w-[1160px] mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gold-light text-xs font-semibold tracking-[3px] uppercase mb-3"
        >
          Academic Excellence
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-white leading-tight mb-4"
        >
          Results That Speak<br />for Themselves
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-white/60 text-base mb-12 max-w-[520px] mx-auto"
        >
          Consistent CBSE board performance year after year. No coaching centres needed — just good teaching.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {RESULTS.map((r, i) => (
            <motion.div
              key={r.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.6 }}
              className={`rounded-xl p-8 text-center relative overflow-hidden ${
                r.featured
                  ? "bg-white/10 border-2 border-gold-light/50"
                  : "bg-white/5 border border-white/10"
              }`}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold-light rounded-b" />
              <div className="text-gold-light text-xs font-semibold tracking-widest uppercase mb-3">{r.year}</div>
              <div className={`font-[family-name:var(--font-heading)] font-bold text-white leading-none mb-2 ${r.featured ? "text-7xl" : "text-5xl"}`}>
                <CountUp value={r.value} suffix={r.suffix} />
              </div>
              <div className="text-white/60 text-sm">{r.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-gold-light text-xs font-semibold tracking-[3px] uppercase mb-8">Class 10 Toppers 2024</p>
          <div className="flex justify-center gap-12 flex-wrap">
            {TOPPERS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.2, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${rankColors[i]} flex items-center justify-center mx-auto mb-3 border-[3px] ${rankBorders[i]} relative`}>
                  <span className="font-[family-name:var(--font-heading)] text-3xl font-bold text-white">{t.initials}</span>
                  <div className={`absolute -top-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br ${rankColors[i]} flex items-center justify-center text-xs font-bold text-white border-2 border-green`}>
                    {t.rank}
                  </div>
                </div>
                <div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-gold-light">{t.score}</div>
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-white/50 text-xs">{t.detail}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="flex justify-center gap-4 flex-wrap">
          {[
            { emoji: "🔬", subject: "Science", score: "99" },
            { emoji: "📐", subject: "Maths", score: "98" },
            { emoji: "📖", subject: "English", score: "97" },
            { emoji: "🌍", subject: "Social Science", score: "98" },
          ].map((s, i) => (
            <motion.div
              key={s.subject}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="bg-white/8 border border-white/12 rounded-full px-5 py-2 flex items-center gap-2 text-white/80 text-sm"
            >
              {s.emoji} {s.subject}
              <span className="font-[family-name:var(--font-heading)] text-lg font-bold text-gold-light">{s.score}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
