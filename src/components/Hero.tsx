"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const tags = ["Software Engineer", "Data Engineering", "Cloud & DevOps"];

const clouds = [
  "left-[6%] top-18 h-8 w-18 md:h-10 md:w-24",
  "right-[12%] top-28 h-10 w-24 md:h-12 md:w-30",
  "left-[18%] top-56 hidden h-8 w-20 md:block",
  "right-[22%] top-14 hidden h-7 w-16 lg:block",
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/samvedhya-bendapudi",
    className: "bg-white text-[var(--mario-blue)]",
  },
  {
    label: "GitHub",
    href: "https://github.com/SamvedhyaBendapudi",
    className: "bg-[var(--mario-red)] text-white",
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[var(--mario-sky)] px-6 pb-28 pt-24 text-white md:px-10 lg:min-h-[100svh] lg:px-12 lg:pt-28"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {clouds.map((cloud, index) => (
          <motion.div
            key={cloud}
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 * index }}
            className={`cloud-8bit animate-float absolute ${cloud}`}
            style={{ animationDelay: `${index * 0.7}s` }}
          />
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="animate-bounce-item absolute bottom-10 left-6 h-16 w-20 sm:left-12 sm:h-20 sm:w-24 pipe-green"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="question-block animate-coin absolute right-8 top-44 flex h-14 w-14 items-center justify-center text-3xl font-black text-[var(--mario-ground)] md:right-16"
        >
          ?
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.45 }}
          className="animate-star-power absolute left-[46%] top-32 hidden text-3xl text-[var(--mario-yellow)] md:block"
        >
          ★
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,430px)] lg:items-center lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            {tags.map((tag, index) => (
              <span
                key={tag}
                className={`pixel-border inline-flex px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.2em] ${
                  index === 1 ? "bg-[var(--mario-yellow)] text-[var(--mario-dark)]" : "bg-white text-[var(--mario-red)]"
                }`}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="mt-8 text-[clamp(4.25rem,15vw,9rem)] font-black uppercase leading-[0.82] tracking-[0.04em]"
            style={{
              color: "var(--mario-yellow)",
              fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
              textShadow: "6px 6px 0 var(--mario-red), 12px 12px 0 rgba(26,26,46,0.45)",
            }}
          >
            SAMVEDHYA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-5 max-w-2xl text-lg font-bold uppercase tracking-[0.12em] text-white/95 md:text-xl"
          >
            Turning engineering challenges into completed quests.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
            className="mt-8 max-w-3xl text-xl leading-relaxed text-white md:text-2xl"
            style={{ fontFamily: "Georgia, Times New Roman, serif", fontStyle: "italic" }}
          >
            &quot;Code is like humor. When you have to explain it, it's bad. Fortunately, explaining things is one of my strengths.&quot;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap"
          >
            <a
              href="mailto:samvedhya.careers@gmail.com"
              className="question-block inline-flex min-h-14 items-center justify-center px-7 py-3 text-base font-black uppercase tracking-[0.16em] text-[var(--mario-ground)] transition-transform duration-200 hover:-translate-y-1"
            >
              Get in Touch
            </a>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.42 + index * 0.08 }}
                  className={`pixel-border inline-flex items-center justify-center px-5 py-3 text-sm font-black uppercase tracking-[0.16em] transition-transform duration-200 hover:-translate-y-1 ${link.className}`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28, rotate: 5 }}
          animate={{ opacity: 1, x: 0, rotate: -3 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mx-auto w-full max-w-[380px]"
        >
          <div className="relative rounded-sm bg-[var(--mario-red)] p-4 pixel-border">
            <div className="question-block absolute -left-4 top-6 hidden h-10 w-10 items-center justify-center text-2xl font-black text-[var(--mario-ground)] sm:flex">
              ?
            </div>
            <div className="absolute -right-3 bottom-8 h-6 w-6 rounded-none bg-[var(--mario-yellow)] pixel-border animate-blink" />

            <div className="pixel-border rotate-[-2deg] bg-white p-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--mario-dark)]">
                <Image
                  src="/profile.jpg"
                  alt="Samvedhya Bendapudi"
                  fill
                  sizes="(max-width: 1024px) 380px, 430px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <div className="pixel-border bg-[var(--mario-green)] px-4 py-3 text-white">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-[var(--mario-yellow)]">
                  World
                </p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.08em]">
                  Engineering
                </p>
              </div>
              <div className="pixel-border bg-white px-4 py-3 text-[var(--mario-dark)]">
                <p className="text-[0.65rem] font-black uppercase tracking-[0.22em] text-[var(--mario-red)]">
                  Mode
                </p>
                <p className="mt-1 text-sm font-bold uppercase tracking-[0.08em]">
                  Build & Deploy
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="brick-bg absolute inset-x-0 bottom-0 h-10 border-t-4 border-[var(--mario-ground)]" />
    </section>
  );
}
