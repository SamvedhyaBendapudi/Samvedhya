"use client";

import { motion, type Variants } from "framer-motion";

const openRoles = [
  {
    icon: "🖥️",
    title: "Backend Developer",
    subtitle: "READY!",
    accent: "var(--mario-red)",
    badge: "API + SYSTEMS",
  },
  {
    icon: "🎨",
    title: "Frontend Developer",
    subtitle: "LET'S GO!",
    accent: "var(--mario-blue)",
    badge: "UI + UX",
  },
  {
    icon: "⚡",
    title: "Full Stack Developer",
    subtitle: "PLAYER 1",
    accent: "var(--mario-yellow)",
    badge: "END-TO-END",
  },
  {
    icon: "🚀",
    title: "DevOps Engineer",
    subtitle: "POWER UP!",
    accent: "var(--mario-green)",
    badge: "CLOUD + CI/CD",
  },
  {
    icon: "📊",
    title: "Data Engineer",
    subtitle: "BONUS STAGE",
    accent: "var(--mario-brick)",
    badge: "PIPELINES + SCALE",
  },
] as const;

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function OpenRoles() {
  return (
    <section
      id="roles"
      className="relative overflow-hidden bg-[var(--mario-sky)] px-6 py-20 text-white md:px-10 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="cloud-8bit animate-float absolute left-[8%] top-12 h-10 w-24" />
        <div
          className="cloud-8bit animate-float absolute right-[10%] top-24 h-12 w-28"
          style={{ animationDelay: "0.7s" }}
        />
        <div className="question-block animate-coin absolute left-[14%] top-36 flex h-14 w-14 items-center justify-center text-3xl font-black text-[var(--mario-ground)]">
          ?
        </div>
        <div className="animate-star-power absolute right-[16%] top-40 text-4xl text-[var(--mario-yellow)]">
          ★
        </div>
        <div className="pipe-green absolute bottom-0 left-6 h-20 w-20 rounded-t-[10px] md:h-24 md:w-24" />
        <div className="pipe-green absolute bottom-0 right-8 h-24 w-24 rounded-t-[10px] md:h-28 md:w-28" />
        <div className="brick-bg absolute inset-x-0 bottom-0 h-12 border-t-4 border-[var(--mario-ground)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-5 flex flex-wrap items-center justify-center gap-3 text-[11px] font-black uppercase tracking-[0.24em] text-white/90 sm:text-xs">
            <span className="question-block inline-flex px-4 py-2 text-[var(--mario-ground)]">
              Mission Select
            </span>
            <span className="pixel-border inline-flex bg-[var(--mario-dark)] px-4 py-2 text-[var(--mario-yellow)]">
              Spring/Summer 2026
            </span>
          </div>

          <h2 className="text-4xl font-black uppercase tracking-[0.08em] text-[var(--mario-yellow)] drop-shadow-[4px_4px_0_var(--mario-dark)] sm:text-5xl md:text-6xl">
            🎯 OPEN TO ROLES
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm font-bold uppercase tracking-[0.12em] text-[#F4F7FF] md:text-base">
            Currently seeking full-time opportunities — Spring/Summer 2026
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 flex flex-wrap items-stretch justify-center gap-6"
        >
          {openRoles.map((role, index) => (
            <motion.article
              key={role.title}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                boxShadow: `0 0 0 4px ${role.accent}, 0 0 24px ${role.accent}, 10px 10px 0 rgba(26,26,46,0.45)`,
              }}
              whileTap={{ scale: 0.98 }}
              className="pixel-border group relative flex w-full max-w-[230px] flex-1 flex-col overflow-hidden rounded-none bg-[var(--mario-dark)] text-white"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="absolute inset-x-0 top-0 h-3" style={{ backgroundColor: role.accent }} />
              <div className="absolute right-3 top-3 flex gap-1.5">
                <span className="h-3 w-3 border-2 border-[var(--mario-dark)]" style={{ backgroundColor: role.accent }} />
                <span className="h-3 w-3 border-2 border-[var(--mario-dark)] bg-[var(--mario-yellow)]" />
              </div>

              <div className="flex h-full flex-col p-5 pt-7">
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="animate-bounce-item flex h-14 w-14 items-center justify-center border-4 border-[var(--mario-dark)] text-3xl shadow-[4px_4px_0_rgba(0,0,0,0.3)]"
                    style={{ backgroundColor: role.accent }}
                  >
                    {role.icon}
                  </div>
                  <span className="question-block inline-flex px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--mario-ground)]">
                    {role.subtitle}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-black uppercase leading-tight text-[var(--mario-yellow)]">
                  {role.title}
                </h3>

                <p className="mt-3 inline-flex w-fit items-center border-4 border-[var(--mario-dark)] bg-white px-3 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[var(--mario-dark)] shadow-[4px_4px_0_rgba(0,0,0,0.25)]">
                  {role.badge}
                </p>

                <div className="mt-auto pt-5">
                  <div
                    className="h-3 w-full border-2 border-[var(--mario-dark)] bg-[rgba(255,255,255,0.12)]"
                    aria-hidden="true"
                  >
                    <div
                      className="h-full transition-all duration-200 group-hover:w-full"
                      style={{ width: "78%", backgroundColor: role.accent }}
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
