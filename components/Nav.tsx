"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-green/95 backdrop-blur-sm border-b border-white/8">
        <div className="max-w-[1160px] mx-auto px-8 flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="SSMS" className="h-10 brightness-0 invert" />
          </a>

          <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white/70 hover:text-white text-sm transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/914445094270"
              target="_blank"
              className="flex items-center gap-2 bg-[#25D366] text-white text-sm font-medium px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              WhatsApp
            </a>
            <a href="#cta" className="bg-gold text-white text-sm font-semibold px-5 py-2 rounded-md hover:bg-gold-light transition-colors">
              Apply 2026–27
            </a>
          </div>

          <button
            className="md:hidden flex flex-col gap-[5px] p-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className={`block w-[22px] h-[2px] bg-white/80 rounded transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`block w-[22px] h-[2px] bg-white/80 rounded transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-[2px] bg-white/80 rounded transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99] bg-green flex flex-col items-center justify-center gap-8"
          >
            <button onClick={() => setOpen(false)} className="absolute top-5 right-6 text-white/60 text-3xl">✕</button>
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-[family-name:var(--font-heading)] text-3xl font-semibold text-white/85 hover:text-gold-light transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-4 bg-gold text-white font-semibold px-7 py-3 rounded-md"
            >
              Enquire Now →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
