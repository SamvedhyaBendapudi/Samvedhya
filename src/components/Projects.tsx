"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { image: "/project-braintumor.jpg", title: "Brain Tumor Detection System", description: "Built with VGG16 and TensorFlow achieving 99.2% classification accuracy through targeted data augmentation. Exposed via REST API using Flask/FastAPI, paired with a responsive React frontend and deployed with Gunicorn and response caching.", tags: ["TensorFlow", "VGG16", "Flask", "FastAPI", "React"], color: "#E52521", github: "https://github.com/SamvedhyaBendapudi/Brain-tumor-detection" },
{ image: "/project-fitness.jpg", title: "Fitness Application", description: "Full-stack fitness platform leveraging RapidAPI integration to let users discover exercises, view guided demonstrations, and manage personalized workout routines through a clean, modern React interface.", tags: ["React", "Rapid API", "JavaScript", "REST API"], color: "#43B047", github: "https://github.com/SamvedhyaBendapudi/fitness-app" },
{ image: "/project-encryption.svg", title: "Cloud Security - Encryption", description: "Published research in IJIRCCE on secure cloud file deployment using Diffie-Hellman key exchange combined with AES encryption, addressing real-world vulnerabilities in cloud storage environments.", tags: ["Cryptography", "Cloud Security", "AES", "Diffie-Hellman"], color: "#049CD8", github: "https://github.com/SamvedhyaBendapudi/Encrypting_Files" },
{ image: null, title: "Healthcare Chatbot", description: "Developing a hybrid RAG pipeline for PCOS health-tech queries using fine-tuned BERT for semantic intent classification and GPT-3.5 via conversational chain prompting to deliver clinically contextualized, low-latency responses.", tags: ["BERT", "GPT-3.5", "NLP", "LLM", "RAG"], color: "#FBD000", github: null },

const clouds = [
  { className: "top-12 left-[8%] h-10 w-20", delay: 0 },
  { className: "top-28 right-[12%] h-12 w-24", delay: 0.8 },
  { className: "top-[22rem] left-[14%] h-9 w-16", delay: 1.2 },
  { className: "top-[30rem] right-[18%] h-11 w-24", delay: 0.4 },
];

const badgePalette = ["#43B047", "#049CD8", "#E52521", "#FBD000"];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-20 text-white md:py-24"
      style={{ backgroundColor: "#5C94FC" }}
    >
      <div className="pointer-events-none absolute inset-0">
        {clouds.map((cloud) => (
          <motion.div
            key={cloud.className}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: [0, -4, 0], x: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, delay: cloud.delay, ease: "easeInOut" }}
            className={`cloud-8bit animate-float absolute ${cloud.className}`}
            style={{ boxShadow: "4px 4px 0 #1a1a2e" }}
            aria-hidden="true"
          />
        ))}
        <div className="brick-bg absolute inset-x-0 bottom-0 h-14 border-t-4 border-[#1a1a2e]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <span className="question-block animate-coin flex h-12 w-12 items-center justify-center text-2xl font-black text-[#1a1a2e]">
              ?
            </span>
            <span className="question-block animate-coin flex h-12 w-12 items-center justify-center text-2xl font-black text-[#1a1a2e] [animation-delay:0.2s]">
              !
            </span>
          </div>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-white">
            Level 1-2 Portfolio World
          </p>
          <h2 className="text-4xl font-black uppercase tracking-[0.08em] text-[#FBD000] drop-shadow-[4px_4px_0_#1a1a2e] md:text-6xl">
            GAME COLLECTION
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#F4F7FF] md:text-base">
            Power-up inspired project cards showcasing AI, security, and full-stack builds with a full retro platformer vibe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="pixel-border relative overflow-hidden rounded-none bg-[#1a1a2e]"
            >
              <div className="brick-bg h-5 border-b-4 border-[#1a1a2e]" />
              <div className="absolute right-4 top-3 flex gap-2">
                <span className="h-3 w-3 border-2 border-[#1a1a2e]" style={{ backgroundColor: "#E52521" }} />
                <span className="h-3 w-3 border-2 border-[#1a1a2e]" style={{ backgroundColor: "#FBD000" }} />
                <span className="h-3 w-3 border-2 border-[#1a1a2e]" style={{ backgroundColor: "#43B047" }} />
              </div>

              <div className="space-y-5 p-5 md:p-6">
                <div className="pixel-border relative h-56 overflow-hidden bg-[#0f1020] p-2">
                  <div className="absolute inset-x-0 top-0 h-4" style={{ backgroundColor: project.color }} />
                  <div className="relative h-full w-full overflow-hidden border-4 border-[#0b0c18] bg-[#111827]">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="pixel-render object-cover"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center gap-3 bg-[radial-gradient(circle_at_top,_rgba(251,208,0,0.32),_transparent_45%),linear-gradient(180deg,_#1c2450,_#111827)] px-6 text-center">
                        <span className="animate-coin text-3xl">⭐</span>
                        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#FBD000]">
                          Bonus Stage
                        </p>
                        <p className="text-lg font-black uppercase text-white">
                          {project.title}
                        </p>
                      </div>
                    )}
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-14 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.45))]" />
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.25em] text-[#5C94FC]">
                      World {index + 1}
                    </p>
                    <h3 className="text-2xl font-black uppercase leading-tight text-[#FBD000]">
                      {project.title}
                    </h3>
                  </div>
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 1.6, repeat: Number.POSITIVE_INFINITY, delay: index * 0.15 }}
                    className="question-block mt-1 flex h-10 w-10 items-center justify-center text-xl text-[#1a1a2e]"
                    aria-hidden="true"
                  >
                    ★
                  </motion.span>
                </div>

                <p className="text-sm leading-7 text-[#F4F7FF]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className="pixel-border inline-flex items-center px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-white"
                      style={{ backgroundColor: badgePalette[tagIndex % badgePalette.length], boxShadow: "2px 2px 0 #0b0c18" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github ? (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="pipe-green inline-flex items-center gap-3 px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-white"
                  >
                    <span className="text-base">→</span>
                    <span>Enter Pipe</span>
                  </motion.a>
                ) : (
                  <div className="inline-flex items-center gap-3 border-4 border-[#1a1a2e] bg-[#4b5563] px-5 py-3 text-sm font-black uppercase tracking-[0.18em] text-white/80">
                    <span>⛔</span>
                    <span>Pipe Locked</span>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="animate-star-power pixel-border mt-10 bg-[linear-gradient(180deg,_#FBD000,_#D89B00)] px-6 py-5 text-center text-[#1a1a2e]"
        >
          <p className="text-lg font-black uppercase tracking-[0.18em] md:text-xl">
            ⭐ SPECIAL ITEM UNLOCKED
          </p>
          <p className="mt-2 text-sm font-black uppercase tracking-[0.12em] md:text-base">
            Claude Agentic AI Architect Certification (Ongoing)
          </p>
        </motion.div>
      </div>
    </section>
  );
}
