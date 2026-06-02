"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "4+", label: "YEARS" },
  { value: "100M+", label: "RECORDS" },
  { value: "10+", label: "PROJECTS" },
];

const powerUps = [
  {
    label: "🍄 FULL STACK — React + Node + Python + Cloud",
    className: "question-block text-[#1a1a2e]",
  },
  {
    label: "🔥 DATA & AI — Pipelines + LLMs + RAG",
    className: "brick-bg text-white",
  },
  {
    label: "⭐ DEVOPS — CI/CD + Kubernetes + Terraform",
    className: "pipe-green animate-star-power text-white",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 text-white md:px-10"
      style={{ backgroundColor: "#3a78d8" }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="cloud-8bit animate-float absolute left-[6%] top-12 h-10 w-24 opacity-90 md:h-14 md:w-32" />
        <div className="cloud-8bit animate-float absolute right-[8%] top-24 h-12 w-28 opacity-80 [animation-delay:0.8s] md:h-16 md:w-36" />
        <div className="brick-bg absolute inset-x-0 bottom-0 h-14 border-t-4 border-black opacity-95 md:h-16" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="pixel-border rounded-[0.75rem] bg-[#1a1a2e] px-5 py-4 text-center"
            >
              <div
                className="flex items-center justify-center gap-3 text-[1.85rem] font-black uppercase md:text-[2.2rem]"
                style={{
                  color: "#FBD000",
                  fontFamily: 'Impact, Haettenschweiler, "Arial Black", sans-serif',
                  textShadow: "3px 3px 0 rgba(0,0,0,0.45)",
                }}
              >
                <span className="animate-coin inline-block" aria-hidden="true">
                  🪙
                </span>
                <span>× {stat.value}</span>
              </div>
              <p className="mt-2 text-xs font-black tracking-[0.3em] text-white md:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -32, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mx-auto w-full max-w-[300px] lg:mx-0"
          >
            <div className="pixel-border rotate-[-3deg] overflow-hidden rounded-[1rem] bg-[#f7f0d4] p-3">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[0.65rem] border-4 border-black bg-black">
                <Image
                  src="/about.jpg"
                  alt="Samvedhya Bendapudi"
                  fill
                  sizes="(max-width: 1024px) 300px, 320px"
                  className="object-cover pixel-render"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
            className="pixel-border rounded-[1rem] border-4 border-black bg-[#1a1a2e] p-7 md:p-10"
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-[0.65rem] border-4 border-black bg-black/30 px-4 py-2 text-xs font-black tracking-[0.32em] text-[#FBD000] md:text-sm">
              <span className="h-3 w-3 rounded-none bg-[var(--mario-green)] shadow-[3px_3px_0_#000]" />
              PLAYER PROFILE
            </div>

            <h2
              className="text-4xl font-black uppercase leading-none md:text-6xl"
              style={{
                color: "var(--mario-yellow)",
                fontFamily: 'Impact, Haettenschweiler, "Arial Black", sans-serif',
                textShadow: "4px 4px 0 rgba(0,0,0,0.4)",
              }}
            >
              ABOUT ME
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-[#f8f4df] md:text-[1.05rem]">
              <p>
                I&apos;m a <span className="font-bold" style={{ color: "var(--mario-green)" }}>full-stack software engineer</span> who builds end-to-end — from <span className="font-bold" style={{ color: "var(--mario-green)" }}>React frontends and Node.js APIs</span> to <span className="font-bold" style={{ color: "var(--mario-green)" }}>cloud-native data pipelines</span> on AWS and Azure. I thrive at the intersection of scalable architecture and great user experience, with production systems processing millions of records daily.
              </p>
              <p>
                Currently diving deep into the world of <span className="font-bold" style={{ color: "var(--mario-green)" }}>LLMs, Generative AI, and agentic systems</span>. I&apos;m fascinated by how <span className="font-bold" style={{ color: "var(--mario-green)" }}>AI is transforming software engineering</span> — from GitHub Copilot accelerating development to building intelligent applications with RAG pipelines, fine-tuned models, and autonomous agents. Always learning, always shipping.
              </p>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {powerUps.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.12 + index * 0.08 }}
                  className={`${item.className} rounded-[0.75rem] px-4 py-4 text-sm font-black uppercase tracking-[0.08em]`}
                >
                  {item.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
