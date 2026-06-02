"use client";

import { motion, type Variants } from "framer-motion";

const techGrid = [
  { symbol: "Py", name: "PYTHON", number: 1, color: "#3776AB" },
  { symbol: "Js", name: "JAVASCRIPT", number: 2, color: "#F7DF1E" },
  { symbol: "Ts", name: "TYPESCRIPT", number: 3, color: "#3178C6" },
  { symbol: "Jv", name: "JAVA", number: 4, color: "#ED8B00" },
  { symbol: "Sq", name: "SQL", number: 5, color: "#336791" },
  { symbol: "C+", name: "C++", number: 6, color: "#00599C" },
  { symbol: "Re", name: "REACT", number: 7, color: "#61DAFB" },
  { symbol: "Nx", name: "NEXT.JS", number: 8, color: "#000000" },
  { symbol: "Nd", name: "NODE.JS", number: 9, color: "#339933" },
  { symbol: "Dj", name: "DJANGO", number: 10, color: "#092E20" },
  { symbol: "Fl", name: "FLASK", number: 11, color: "#000000" },
  { symbol: "Sb", name: "SPRING BOOT", number: 12, color: "#6DB33F" },
  { symbol: "Aw", name: "AWS", number: 13, color: "#FF9900" },
  { symbol: "Az", name: "AZURE", number: 14, color: "#0078D4" },
  { symbol: "Dk", name: "DOCKER", number: 15, color: "#2496ED" },
  { symbol: "K8", name: "KUBERNETES", number: 16, color: "#326CE5" },
  { symbol: "Tf", name: "TERRAFORM", number: 17, color: "#7B42BC" },
  { symbol: "Jk", name: "JENKINS", number: 18, color: "#D24939" },
  { symbol: "Sp", name: "SPARK", number: 19, color: "#E25A1C" },
  { symbol: "Db", name: "DATABRICKS", number: 20, color: "#FF3621" },
  { symbol: "Sf", name: "SNOWFLAKE", number: 21, color: "#29B5E8" },
  { symbol: "Pg", name: "POSTGRESQL", number: 22, color: "#4169E1" },
  { symbol: "Mg", name: "MONGODB", number: 23, color: "#47A248" },
  { symbol: "Kf", name: "KAFKA", number: 24, color: "#231F20" },
  { symbol: "Gf", name: "GRAFANA", number: 25, color: "#F46800" },
  { symbol: "Pm", name: "PROMETHEUS", number: 26, color: "#E6522C" },
  { symbol: "Af", name: "AIRFLOW", number: 27, color: "#017CEE" },
  { symbol: "Rd", name: "REDUX", number: 28, color: "#764ABC" },
  { symbol: "Tw", name: "TAILWIND", number: 29, color: "#06B6D4" },
  { symbol: "Gt", name: "GIT", number: 30, color: "#F05032" },
  { symbol: "Gh", name: "GITHUB ACTIONS", number: 31, color: "#2088FF" },
  { symbol: "Ag", name: "ARGOCD", number: 32, color: "#EF7B4D" },
];

const gridVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      staggerChildren: 0.04,
      delayChildren: 0.12,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },
};

const brickPattern =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96' fill='none'%3E%3Crect width='96' height='96' fill='%231a1a2e'/%3E%3Crect x='0' y='0' width='48' height='24' fill='%23272546'/%3E%3Crect x='48' y='0' width='48' height='24' fill='%23222240'/%3E%3Crect x='0' y='24' width='24' height='24' fill='%23222240'/%3E%3Crect x='24' y='24' width='48' height='24' fill='%232a2a4e'/%3E%3Crect x='72' y='24' width='24' height='24' fill='%23222240'/%3E%3Crect x='0' y='48' width='48' height='24' fill='%232a2a4e'/%3E%3Crect x='48' y='48' width='48' height='24' fill='%23272546'/%3E%3Crect x='0' y='72' width='24' height='24' fill='%23272546'/%3E%3Crect x='24' y='72' width='48' height='24' fill='%23222240'/%3E%3Crect x='72' y='72' width='24' height='24' fill='%232a2a4e'/%3E%3Cpath d='M0 24H96M0 48H96M0 72H96M24 24V48M72 24V48M48 0V24M48 48V72M24 72V96M72 72V96' stroke='%23313158' stroke-width='2'/%3E%3C/svg%3E\")";

export default function Skills() {
  return (
    <section
      id="skills"
      className="brick-bg relative overflow-hidden px-4 py-24 text-white md:px-8 md:py-32"
      style={{ backgroundColor: "#1a1a2e", backgroundImage: brickPattern, backgroundSize: "96px 96px" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,70,140,0.35),transparent_42%),linear-gradient(180deg,rgba(10,10,18,0)_0%,rgba(8,8,14,0.45)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.45)_100%)]" />

      <div className="pipe-green absolute -left-6 bottom-0 h-24 w-20 rounded-t-[10px] border-[3px] border-black/70 bg-[#199c47] shadow-[0_-6px_0_#34d27a_inset,8px_0_0_rgba(0,0,0,0.18)_inset] md:h-28 md:w-24" />
      <div className="pipe-green absolute -right-6 top-20 h-28 w-24 rounded-b-[10px] border-[3px] border-black/70 bg-[#199c47] shadow-[0_6px_0_#34d27a_inset,-8px_0_0_rgba(0,0,0,0.18)_inset] md:h-32 md:w-28" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 flex flex-col gap-5 md:mb-12"
        >
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-black uppercase tracking-[0.22em] text-white/80 sm:text-xs">
            <span className="animate-coin inline-flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-[#6d5200] bg-[#FBD000] text-[#6d5200] shadow-[0_0_0_3px_rgba(0,0,0,0.22)]">
              ★
            </span>
            <span className="rounded-none border-[3px] border-black bg-[#2a2a4e] px-3 py-2 text-[#f4f4ff] shadow-[4px_4px_0_rgba(0,0,0,0.35)]">
              Cave Level // Skill Select
            </span>
            <span className="animate-star-power rounded-none border-[3px] border-black bg-[#3b2b67] px-3 py-2 text-[#FBD000] shadow-[4px_4px_0_rgba(0,0,0,0.35)]">
              32 POWER-UPS
            </span>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <h2
                className="text-4xl font-black uppercase leading-none text-[#FBD000] drop-shadow-[4px_4px_0_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl"
                style={{ fontFamily: '"Courier New", monospace' }}
              >
                POWER-UP INVENTORY
              </h2>
              <p className="mt-4 max-w-3xl text-sm font-bold uppercase tracking-[0.14em] text-[#d6d7ef] sm:text-base">
                Descend into the underground stash of tools, frameworks, cloud gear, and platform loot powering the build.
              </p>
            </div>

            <div className="rounded-none border-[3px] border-black bg-[#2a2a4e] px-4 py-3 text-sm font-black uppercase tracking-[0.22em] text-[#f4f4ff] shadow-[5px_5px_0_rgba(0,0,0,0.4)]">
              Press Start To Inspect
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative rounded-none border-[3px] border-[#0d0d18] bg-[rgba(10,10,22,0.55)] p-3 shadow-[0_0_0_3px_rgba(69,54,112,0.45),12px_12px_0_rgba(0,0,0,0.28)] sm:p-4"
        >
          <div className="pointer-events-none absolute inset-0 opacity-70" style={{ backgroundImage: brickPattern, backgroundSize: "96px 96px" }} />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_28%,rgba(0,0,0,0.14))]" />

          <div className="relative grid grid-cols-4 gap-2 sm:grid-cols-6 md:grid-cols-8">
            {techGrid.map((tech) => (
              <motion.div
                key={tech.number}
                variants={itemVariants}
                whileHover={{
                  scale: 1.06,
                  y: -4,
                  boxShadow: `0 0 0 3px ${tech.color}, 0 0 18px ${tech.color}99, 6px 6px 0 rgba(0, 0, 0, 0.45)`,
                }}
                className="pixel-border group relative flex aspect-square cursor-default flex-col justify-end overflow-hidden rounded-none bg-[#2a2a4e] p-2 transition-transform duration-150 ease-out"
                style={{ borderWidth: "3px", borderColor: "#11111f", boxShadow: "4px 4px 0 rgba(0,0,0,0.35)" }}
              >
                <div className="absolute inset-x-0 top-0 h-8 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]" />
                <span className="absolute left-2 top-2 text-[10px] font-black leading-none text-white/65 md:text-[11px]">
                  {tech.number}
                </span>

                <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
                  <span
                    className="text-[1.5rem] font-black leading-none drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)] sm:text-[1.75rem] md:text-[1.95rem]"
                    style={{ color: tech.color }}
                  >
                    {tech.symbol}
                  </span>
                  <span className="mt-2 text-[7px] font-black uppercase leading-[1.25] tracking-[0.08em] text-white sm:text-[8px] md:text-[9px]">
                    {tech.name}
                  </span>
                </div>

                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100"
                  style={{ boxShadow: `inset 0 0 0 2px ${tech.color}88` }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .pixel-border {
          image-rendering: pixelated;
          clip-path: polygon(
            0 6px,
            6px 6px,
            6px 0,
            calc(100% - 6px) 0,
            calc(100% - 6px) 6px,
            100% 6px,
            100% calc(100% - 6px),
            calc(100% - 6px) calc(100% - 6px),
            calc(100% - 6px) 100%,
            6px 100%,
            6px calc(100% - 6px),
            0 calc(100% - 6px)
          );
        }

        .brick-bg {
          image-rendering: pixelated;
        }

        .pipe-green {
          image-rendering: pixelated;
        }

        .animate-coin {
          animation: coin-bounce 1.8s steps(2, end) infinite;
        }

        .animate-star-power {
          animation: star-power 1.2s steps(2, end) infinite;
        }

        @keyframes coin-bounce {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-6px) scale(1.06);
          }
        }

        @keyframes star-power {
          0%,
          100% {
            box-shadow: 0 0 0 rgba(251, 208, 0, 0.2);
            filter: brightness(1);
          }
          50% {
            box-shadow: 0 0 18px rgba(251, 208, 0, 0.55);
            filter: brightness(1.18);
          }
        }
      `}</style>
    </section>
  );
}
