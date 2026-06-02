"use client";

import { motion } from "framer-motion";

type EducationWorld = {
  world: string;
  school: string;
  location: string;
  powerUp: string;
  time?: string;
  score?: string;
  decorations: string[];
};

const educationWorlds: EducationWorld[] = [
  {
    world: "🏰 WORLD 2 COMPLETE!",
    school: "San Diego State University",
    location: "San Diego, CA",
    powerUp: "Master of Science in Computer Science",
    time: "08/2024 – 05/2026",
    score: "3.80 / 4.0 ⭐",
    decorations: ["🏰", "🚩", "🧱"],
  },
  {
    world: "🏰 WORLD 1 COMPLETE!",
    school: "Gitam University",
    location: "Visakhapatnam, India",
    powerUp: "Bachelor's in Computer Science and Engineering",
    decorations: ["🏰", "🚩", "⭐"],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="education-castle brick-bg relative overflow-hidden px-6 py-24 text-white"
    >
      <div className="absolute inset-0 bg-[#1a1a2e]/90" aria-hidden="true" />

      <motion.div
        className="relative mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="pipe-green inline-flex items-center gap-3 px-4 py-2 text-xs font-black uppercase tracking-[0.28em] text-white">
              <span className="animate-coin text-lg">🪙</span>
              Education Dungeon Clear
            </div>
            <h2
              className="mt-5 text-4xl font-black uppercase tracking-[0.18em] sm:text-5xl md:text-6xl"
              style={{
                color: "#FBD000",
                fontFamily:
                  'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
              }}
            >
              WORLDS COMPLETED
            </h2>
          </div>

          <div className="animate-star-power hidden text-4xl sm:block" aria-hidden="true">
            ⭐
          </div>
        </div>

        <div className="grid gap-8">
          {educationWorlds.map((item, index) => (
            <motion.article
              key={item.school}
              className="pixel-border relative overflow-hidden rounded-none bg-[#101424] p-6 shadow-[10px_10px_0px_#000000] sm:p-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-3 border-b-4 border-black"
                style={{ backgroundColor: "#43B047" }}
                aria-hidden="true"
              />

              <div className="relative flex flex-col gap-6 pt-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-2xl" aria-hidden="true">
                    <span className="animate-star-power">{item.decorations[0]}</span>
                    <span className="animate-coin">{item.decorations[1]}</span>
                    <span>{item.decorations[2]}</span>
                  </div>

                  <div>
                    <p className="text-lg font-black uppercase tracking-[0.14em] text-white sm:text-xl">
                      {item.world}
                    </p>
                    <h3
                      className="mt-3 text-3xl font-black uppercase leading-tight sm:text-4xl"
                      style={{ color: "#FBD000" }}
                    >
                      {item.school}
                    </h3>
                    <p className="mt-2 text-base font-semibold text-slate-200 sm:text-lg">
                      {item.location}
                    </p>
                  </div>
                </div>

                <div className="flex shrink-0 flex-col gap-3 text-sm font-black uppercase tracking-[0.12em] sm:text-base lg:items-end">
                  <div className="pipe-green inline-flex items-center px-4 py-2 text-white">
                    CLEAR!
                  </div>
                  {item.time ? (
                    <div className="pixel-border bg-[#1a1a2e] px-4 py-2 text-slate-100">
                      TIME: {item.time}
                    </div>
                  ) : null}
                  {item.score ? (
                    <div
                      className="pixel-border bg-[#1a1a2e] px-4 py-2"
                      style={{ color: "#FBD000" }}
                    >
                      SCORE: {item.score}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="pixel-border bg-black/25 px-5 py-4 text-base font-black uppercase tracking-[0.08em] sm:text-lg">
                  <span style={{ color: "#43B047" }}>POWER-UP:</span>{" "}
                  <span style={{ color: "#43B047" }}>{item.powerUp}</span>
                </div>

                <div className="flex items-center gap-3 text-2xl" aria-hidden="true">
                  <span>🏁</span>
                  <span className="animate-star-power">👑</span>
                  <span>🏰</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>

      <style jsx global>{`
        .education-castle.brick-bg {
          background-color: #1a1a2e;
          background-image:
            linear-gradient(rgba(0, 0, 0, 0.32) 2px, transparent 2px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.32) 2px, transparent 2px),
            linear-gradient(rgba(251, 208, 0, 0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 208, 0, 0.12) 1px, transparent 1px);
          background-size: 48px 24px, 48px 24px, 48px 24px, 48px 24px;
          background-position: 0 0, 0 0, 0 0, 24px 12px;
        }

        .education-castle .pixel-border {
          border-width: 4px;
          border-color: #000;
          box-shadow: 6px 6px 0 #000;
        }

        .education-castle .pipe-green {
          background: linear-gradient(180deg, #4fd163 0%, #43b047 60%, #2e7d32 100%);
        }
      `}</style>
    </section>
  );
}
