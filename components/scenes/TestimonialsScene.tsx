"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsScene() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const rawIndex = useTransform(scrollYProgress, [0, 1], [0, TESTIMONIALS.length - 0.01]);

  return (
    <section id="testimonials">
      <div ref={ref} style={{ height: `${TESTIMONIALS.length * 100}vh` }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden flex items-center">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialSlide key={i} testimonial={t} index={i} rawIndex={rawIndex} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSlide({
  testimonial,
  index,
  rawIndex,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
  rawIndex: ReturnType<typeof useTransform<number, number>>;
}) {
  const opacity = useTransform(rawIndex, [index - 0.5, index, index + 0.5], [0, 1, 0]);
  const y = useTransform(rawIndex, [index - 0.5, index, index + 0.5], [40, 0, -40]);

  return (
    <motion.div className="absolute inset-0 flex items-center justify-center" style={{ opacity }}>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url("${testimonial.image}")` }}
      />
      <div className="absolute inset-0 bg-ink/85 backdrop-blur-sm" />

      <motion.div className="relative z-10 max-w-[720px] mx-auto px-8 text-center" style={{ y }}>
        <div className="text-gold-light text-xs font-semibold tracking-[3px] uppercase mb-6">Parent Stories</div>
        <div className="font-[family-name:var(--font-heading)] text-[80px] text-white/10 leading-none mb-[-40px]">&ldquo;</div>
        <p className="font-[family-name:var(--font-heading)] text-[clamp(20px,3vw,30px)] font-medium text-white leading-relaxed italic mb-8">
          &ldquo;{testimonial.text}&rdquo;
        </p>
        <div className="text-white font-semibold text-sm">{testimonial.author}</div>
        <div className="text-white/50 text-xs mt-1">{testimonial.meta}</div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {TESTIMONIALS.map((_, j) => (
          <motion.div
            key={j}
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: j === index ? "var(--color-gold-light)" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
