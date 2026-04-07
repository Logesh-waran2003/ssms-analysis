"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CTAScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const bgBlur = useTransform(scrollYProgress, [0, 0.5], [0, 12]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.6], [60, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden" id="cta">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/slide-3.webp")' }} />
      <motion.div
        className="absolute inset-0 bg-green/90"
        style={{ backdropFilter: useTransform(bgBlur, (v) => `blur(${v}px)`) }}
      />

      <motion.div className="relative z-10 text-center px-8 max-w-[640px]" style={{ opacity: textOpacity, y: textY }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-red-400 text-xs font-semibold tracking-[3px] uppercase mb-4"
        >
          ⚠ Limited Seats · Admissions Close Soon
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-[family-name:var(--font-heading)] text-[clamp(28px,4vw,48px)] font-semibold text-white leading-tight mb-5"
        >
          Your Child&apos;s Story<br />Starts Here
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-white/65 text-base leading-relaxed mb-10"
        >
          Join 1,200+ families who chose SSMS. A school that genuinely cares about every child&apos;s growth — academic and personal.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-3 flex-wrap"
        >
          <a
            href="https://wa.me/914445094270?text=Hi%2C%20I%20would%20like%20to%20book%20a%20campus%20visit"
            target="_blank"
            className="bg-gold text-white text-sm font-semibold px-7 py-3.5 rounded-md hover:bg-gold-light hover:-translate-y-0.5 transition-all"
          >
            Book a Campus Visit →
          </a>
          <a
            href="https://wa.me/914445094270"
            target="_blank"
            className="bg-[#25D366] text-white text-sm font-semibold px-7 py-3.5 rounded-md flex items-center gap-2 hover:opacity-90 transition-opacity"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp Us
          </a>
          <a href="tel:04445094270" className="border-[1.5px] border-white/25 text-white/80 text-sm font-medium px-7 py-3.5 rounded-md hover:border-white/50 transition-colors">
            📞 044-45094270
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-white/40 text-xs mt-8"
        >
          Mappedu Road, Alapakkam, New Perungalathur, Chennai – 600 063
        </motion.p>
      </motion.div>
    </section>
  );
}
