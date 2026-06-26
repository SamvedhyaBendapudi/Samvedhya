"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    world: "WORLD 5-1",
    company: "San Diego State University",
    location: "San Diego, CA",
    role: "Teaching Assistant — Data Structures & Algorithms",
    period: "01/2025 – 05/2025",
    color: "#FBD000",
    metrics: [
      "50+ students taught Data Structures & Algorithms in C++",
      "50+ students mentored on AI workflows with GitHub Copilot",
      "3 course sections supported with weekly office hours + grading",
    ],
  },
  {
    world: "WORLD 4-1",
    company: "SDSU Research Foundation",
    location: "San Diego, CA",
    role: "Research Software Developer",
    period: "09/2024 – Present",
    color: "#43B047",
    metrics: [
      "10K+ telemetry points/minute visualized in React + TypeScript dashboards",
"REST + Node.js services engineered to deliver 100M+ genomic records via Delta Lakehouse on AWS S3",
"25+ zero-downtime deployments/day via Jenkins + Docker + Kubernetes (EKS)",
"45% fewer merge conflicts after migrating 35+ devs to GitHub Enterprise",
"65% lower MTTR with CloudWatch, ELK, Prometheus, Grafana observability",
    ],
  },
  {
    world: "WORLD 3-1",
    company: "Hitachi Vantara",
    location: "Bengaluru, India",
    role: "Software Engineer",
    period: "08/2022 – 08/2024",
    color: "#E52521",
    metrics: [
      "12 reusable React / Web Components built with Carbon design system parity",
"Python OAuth + REST API connectors streaming 1.2M+ records/week",
"72% reduction in manual handling via Azure Databricks medallion pipelines",
"38 production repos migrated from Bitbucket → GitHub Enterprise with GitOps",
"120+ independently versioned microservices extracted from a monolith refactor",
    ],
  },
  {
    world: "WORLD 2-1",
    company: "Hitachi Vantara",
    location: "Bengaluru, India",
    role: "Software Engineer (Co-Op)",
    period: "01/2022 – 08/2022",
    color: "#049CD8",
    metrics: [
      "3 full-stack builders shipped: workflow editor, query builder, form designer",
      "SQL ETL serving financial transactions across 3 banking regions",
      "12% productivity gain from a unified Jira + GitHub + Teams interface",
    ],
  },
  {
    world: "WORLD 1-1",
    company: "Datapro",
    location: "Visakhapatnam, India",
    role: "Software Engineer (Co-Op)",
    period: "01/2021 – 10/2021",
    color: "#FBD000",
    metrics: [
      "Responsive E-Learning UI serving 20K active users at 33-min avg engagement",
      "AWS Lambda + Redshift + S3 ETL pipeline processing 1TB/day",
      "30% faster releases via automated Postman + Jenkins test pipelines",
    ],
  },
] as const;

const titleFont = "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif";

export default function Experience() {
  return (
    <section
      id="experience"
      className="brick-bg relative overflow-hidden border-y-4 border-[#0f1020] py-20 text-white md:py-24"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(92,148,252,0.9)_0%,rgba(92,148,252,0.72)_40%,rgba(26,26,46,0.96)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[#6B3300]" />
      <div className="absolute inset-x-0 bottom-20 h-6 bg-[#C84C0C]" />
      <div className="animate-float absolute left-[8%] top-16 h-6 w-20 rounded-full bg-white/95 blur-[1px] md:h-8 md:w-28" />
      <div className="animate-float absolute right-[12%] top-24 h-5 w-16 rounded-full bg-white/90 blur-[1px] [animation-delay:1s] md:h-7 md:w-24" />
      <div className="animate-star-power absolute left-[14%] top-32 text-2xl text-[#FBD000] md:text-3xl">★</div>
      <div className="animate-coin absolute right-[18%] top-40 text-xl text-[#FBD000] md:text-2xl">◉</div>

      <div className="relative mx-auto max-w-[1580px] px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
        >
          <div className="max-w-4xl space-y-5">
            <div className="question-block inline-flex items-center gap-3 px-4 py-2 text-[11px] font-black uppercase tracking-[0.32em] text-[#6B3300]">
              <span className="animate-coin text-lg leading-none text-[#E52521]">◉</span>
              WORLD MAP
            </div>

            <div className="space-y-4">
              <h2
                className="animate-star-power text-5xl font-black uppercase leading-none tracking-[0.05em] text-[#FBD000] md:text-7xl"
                style={{ fontFamily: titleFont }}
              >
                LEVEL SELECT
              </h2>
              <p className="max-w-3xl text-sm font-black uppercase tracking-[0.16em] text-white/85 md:text-base">
                Power-ups only: every world shows fast impact, hard numbers, and shipped outcomes.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="pixel-border w-fit bg-[#1a1a2e] px-4 py-3 text-sm font-black uppercase tracking-[0.2em] text-[#FBD000]"
          >
            High Score <span className="animate-blink text-[#43B047]">METRICS</span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mb-6 flex items-center gap-4"
        >
          <div className="h-3 flex-1 rounded-full border-2 border-[#0f1020] bg-[#43B047]" />
          <p className="question-block px-4 py-2 text-[11px] font-black uppercase tracking-[0.3em] text-[#6B3300]">
            Scroll To Travel
          </p>
          <div className="h-3 w-20 rounded-full border-2 border-[#0f1020] bg-[#E52521] md:w-28" />
        </motion.div>

        <div className="overflow-x-auto pb-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex min-w-max items-stretch gap-0 pr-6 md:pr-10">
            {experiences.map((experience, index) => (
              <div key={`${experience.world}-${experience.company}`} className="flex items-stretch">
                <motion.article
                  initial={{ opacity: 0, x: 48, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                  className="pixel-border flex w-[340px] shrink-0 flex-col overflow-hidden bg-[#1a1a2e] md:w-[390px]"
                >
                  <div className="h-5 w-full border-b-4 border-[#0f1020]" style={{ backgroundColor: experience.color }} />

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="space-y-3">
                        <div className="question-block inline-flex px-3 py-2 text-[11px] font-black uppercase tracking-[0.24em] text-[#6B3300]">
                          {experience.world}
                        </div>
                        <div className="space-y-2">
                          <p className="text-xs font-black uppercase tracking-[0.26em] text-white/70">{experience.location}</p>
                          <h3 className="text-2xl font-black uppercase leading-tight text-[#FBD000]">{experience.company}</h3>
                          <p className="text-sm font-black uppercase leading-6 text-white">{experience.role}</p>
                        </div>
                      </div>

                      <div className="border-4 border-[#0f1020] bg-black px-3 py-2 text-right font-black uppercase shadow-[4px_4px_0px_#0f1020]">
                        <span className="block text-[10px] tracking-[0.22em] text-[#FBD000]">TIME</span>
                        <span className="block text-xs tracking-[0.12em] text-white">{experience.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 border-t-4 border-white/15 pt-5 text-[13px] font-black uppercase leading-6 tracking-[0.04em] text-white/95">
                      {experience.metrics.map((metric) => (
                        <li key={metric} className="flex items-start gap-3">
                          <span className="text-base leading-6" style={{ color: experience.color }} aria-hidden="true">
                            ▸
                          </span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>

                {index < experiences.length - 1 ? (
                  <div className="flex w-16 shrink-0 items-center justify-center md:w-20">
                    <motion.div
                      initial={{ opacity: 0, scaleY: 0.7 }}
                      whileInView={{ opacity: 1, scaleY: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.35, delay: index * 0.1 + 0.15 }}
                      className="pipe-green h-28 w-10 md:h-36 md:w-12"
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
