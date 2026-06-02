"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b-4 border-[var(--mario-red)] bg-[#1a1a2e] text-white shadow-[0_10px_30px_rgba(0,0,0,0.45)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundColor: "#1a1a2e",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 24px",
          backgroundPosition: "0 0, 24px 12px",
        }}
      />

      <nav className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 uppercase sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 text-sm font-black tracking-[0.32em] text-[var(--mario-yellow)] [font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] sm:text-base"
          >
            <span className="animate-coin text-base sm:text-lg">★</span>
            <span>SAMVEDHYA</span>
          </motion.a>

          <motion.span
            animate={{ y: [0, -2, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="pipe-green hidden items-center gap-2 px-3 py-1.5 text-[10px] font-black tracking-[0.22em] text-white shadow-[0_0_0_2px_rgba(0,0,0,0.15)] [font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] sm:inline-flex"
          >
            <span className="text-sm">🍄</span>
            <span>1-UP</span>
          </motion.span>
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <div className="flex items-center gap-1.5 text-[10px] font-black tracking-[0.28em] text-white/65 [font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]">
            <span className="animate-blink text-[var(--mario-green)]">●</span>
            <span>PLAYER 1</span>
          </div>

          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <motion.a
                  href={link.href}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center px-3 py-2 text-[11px] font-black tracking-[0.2em] text-white transition-colors duration-150 [font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif] hover:text-[var(--mario-red)]"
                >
                  {link.label}
                </motion.a>
              </li>
            ))}
          </ul>
        </div>

        <motion.button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((current) => !current)}
          whileTap={{ scale: 0.94 }}
          className="question-block relative flex h-12 w-12 items-center justify-center md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-1 w-6 bg-[var(--mario-dark)] transition-transform duration-200 ${open ? "translate-y-[10px] rotate-45" : ""}`}
            />
            <span
              className={`block h-1 w-6 bg-[var(--mario-dark)] transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block h-1 w-6 bg-[var(--mario-dark)] transition-transform duration-200 ${open ? "-translate-y-[10px] -rotate-45" : ""}`}
            />
          </div>
        </motion.button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute inset-x-0 top-full border-t border-white/10 bg-[#1a1a2e]/98 md:hidden"
          >
            <div className="flex min-h-[calc(100vh-4.25rem)] flex-col items-center justify-center gap-6 px-6 py-10 text-center">
              <div className="space-y-3">
                <p className="animate-blink text-xs font-black tracking-[0.45em] text-[var(--mario-yellow)] [font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]">
                  PAUSE
                </p>
                <div className="inline-flex items-center gap-2 rounded-none border-2 border-[var(--mario-green)] bg-[rgba(67,176,71,0.16)] px-3 py-2 text-[11px] font-black tracking-[0.25em] text-[#43B047] [font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]">
                  <span className="animate-bounce-item text-sm">🍄</span>
                  <span>1-UP READY</span>
                </div>
              </div>

              <ul className="flex w-full max-w-sm flex-col items-center gap-4">
                {links.map((link, index) => (
                  <li key={link.href} className="w-full">
                    <motion.a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, scale: 0.9, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.18 }}
                      whileHover={{ scale: 1.04, color: "#E52521" }}
                      whileTap={{ scale: 0.97 }}
                      className="pixel-border flex w-full items-center justify-center bg-[#10101b] px-4 py-4 text-sm font-black tracking-[0.3em] text-white [font-family:Impact,Haettenschweiler,'Arial_Narrow_Bold',sans-serif]"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
