"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const headlineLines = ["Where Your Child", "Grows Into Their", "Best Self"];

export default function HeroScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.85, 0.95]);

  return (
    <section ref={ref} className="relative h-screen overflow-hidden flex items-center" id="hero">
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/campus-hero.jpg")', y: bgY }}
      />
      <motion.div className="absolute inset-0 bg-green" style={{ opacity: overlayOpacity }} />
      <div className="absolute inset-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="relative z-10 max-w-[1160px] mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/8 border border-white/12 text-white/70 text-xs font-medium tracking-wider uppercase px-3 py-1.5 rounded mb-6"
          >
            CBSE Affiliated · <span className="text-gold-light">Affiliation No. 1930487</span> · Chennai
          </motion.div>

          <h1 className="font-[family-name:var(--font-heading)] text-[clamp(38px,5vw,58px)] font-semibold text-white leading-[1.12] tracking-tight mb-5">
            {headlineLines.map((line, i) => (
              <motion.span
                key={i}
                className={`block ${i === 2 ? "italic text-shimmer" : ""}`}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-white/65 text-base leading-relaxed max-w-[480px] mb-8"
          >
            Srimathi Sundaravalli Memorial School — where every child is known by name, not just a roll number. A campus your child will love. Real results since 2012.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex gap-3 flex-wrap"
          >
            <a href="#cta" className="bg-gold text-white text-sm font-semibold px-6 py-3.5 rounded-md hover:bg-gold-light hover:-translate-y-0.5 transition-all">
              Book a Campus Visit →
            </a>
            <a href="#admissions" className="border-[1.5px] border-white/25 text-white/85 text-sm font-medium px-6 py-3.5 rounded-md hover:border-white/60 hover:text-white transition-all">
              See How Admissions Work
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="hidden lg:block glass rounded-xl p-7"
        >
          <div className="text-xs font-semibold tracking-widest uppercase text-gold-light mb-4">Why parents choose SSMS</div>
          <ul className="space-y-3">
            {[
              "CBSE affiliated — nationally recognised curriculum",
              "No donation or capitation fee — ever",
              "Merit-based admissions, fully transparent",
              "28,894 sq.m campus with 15 facilities",
              "GPS-tracked school transport",
              "Parent portal for real-time updates",
              "Special educator & counsellor on staff",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-white/80 text-sm leading-snug">
                <span className="text-green-400 font-bold text-xs mt-0.5 shrink-0">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <div className="h-px bg-white/10 my-5" />
          <div className="text-xs text-white/50 leading-relaxed">
            <strong className="text-white/80">📞 044-45094270, 45094235</strong><br />
            adminssms.perungalathur@ssmetrust.in<br />
            Mappedu Road, New Perungalathur
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-wider uppercase">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-white/50 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
