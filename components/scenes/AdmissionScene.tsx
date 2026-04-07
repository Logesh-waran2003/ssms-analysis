"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ADMISSION_STEPS } from "@/lib/data";

export default function AdmissionScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.7], ["0%", "100%"]);

  return (
    <section ref={ref} className="bg-green py-24 px-8 overflow-hidden" id="admissions">
      <div className="max-w-[1160px] mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold-light text-xs font-semibold tracking-[3px] uppercase mb-3"
          >
            Admissions 2026–27
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,44px)] font-semibold text-white leading-tight mb-4"
          >
            Simple. Transparent. Merit-Based.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/65 text-base max-w-[520px] mx-auto"
          >
            Four steps. No agents. No middlemen. Just your child&apos;s ability.
          </motion.p>
        </div>

        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute top-[20px] left-[12.5%] right-[12.5%] h-px bg-white/15">
            <motion.div className="h-full bg-gold-light" style={{ width: lineWidth }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
            {ADMISSION_STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.2, duration: 0.6 }}
                className="text-center px-4 relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.2, type: "spring", stiffness: 200 }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold mx-auto mb-4 relative z-10 ${
                    step.num === 4 ? "bg-emerald-500" : "bg-gold"
                  }`}
                >
                  {step.num === 4 ? "✓" : step.num}
                </motion.div>
                <h3 className="text-white font-semibold text-sm mb-2">{step.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed mb-2">{step.desc}</p>
                <span className="text-gold-light text-xs italic">{step.note}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-3 flex-wrap mt-12"
        >
          <a href="#cta" className="bg-gold text-white text-sm font-semibold px-6 py-3 rounded-md hover:bg-gold-light transition-colors">
            Apply Online Now →
          </a>
          <a href="https://school.ssms.edu.in/" target="_blank" className="border-[1.5px] border-white/25 text-white/80 text-sm font-medium px-6 py-3 rounded-md hover:border-white/50 transition-colors">
            📥 Download Fee Chart
          </a>
        </motion.div>
      </div>
    </section>
  );
}
