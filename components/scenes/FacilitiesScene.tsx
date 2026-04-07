"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FACILITIES } from "@/lib/data";

export default function FacilitiesScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(FACILITIES.length - 1) * 50}%`]);

  return (
    <section id="facilities">
      <div ref={containerRef} className="h-[300vh] relative">
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
          <div className="px-8 mb-8 max-w-[1160px] mx-auto w-full">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-green-light text-xs font-semibold tracking-[3px] uppercase mb-2"
            >
              Campus Life
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-[family-name:var(--font-heading)] text-[clamp(28px,3.5vw,40px)] font-semibold text-ink leading-tight"
            >
              Walk Through Our Campus
            </motion.h2>
          </div>

          <motion.div className="flex gap-6 pl-8" style={{ x }}>
            {FACILITIES.map((facility) => (
              <motion.div
                key={facility.name}
                className="shrink-0 w-[80vw] md:w-[50vw] lg:w-[40vw] rounded-xl overflow-hidden relative group"
                style={{ height: "55vh" }}
              >
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white text-lg font-semibold mb-1">{facility.name}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{facility.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
