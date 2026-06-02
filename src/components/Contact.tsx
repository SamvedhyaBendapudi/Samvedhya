"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type PipeItem = {
  label: string;
  value: string;
  href: string;
  badge: string;
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

const contactPipes: PipeItem[] = [
  {
    label: "Email",
    value: "samvedhya.careers@gmail.com",
    href: "mailto:samvedhya.careers@gmail.com",
    badge: "PIPE 01",
  },
  {
    label: "Phone",
    value: "+1 (619) 666-9293",
    href: "tel:+16196669293",
    badge: "PIPE 02",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/samvedhya-bendapudi",
    href: "https://linkedin.com/in/samvedhya-bendapudi",
    badge: "PIPE 03",
  },
  {
    label: "GitHub",
    value: "github.com/SamvedhyaBendapudi",
    href: "https://github.com/SamvedhyaBendapudi",
    badge: "PIPE 04",
  },
];

const entrance = {
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1] as const,
};

const initialForm: FormData = {
  name: "",
  email: "",
  message: "",
};

function WarpPipe({ item, index }: { item: PipeItem; index: number }) {
  return (
    <motion.a
      href={item.href}
      target={item.href.startsWith("http") ? "_blank" : undefined}
      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
      initial={{ opacity: 0, y: 28, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      transition={{ ...entrance, delay: 0.1 + index * 0.08 }}
      viewport={{ once: true, amount: 0.25 }}
      className="pipe-green pixel-border animate-bounce-item group relative block overflow-hidden px-5 pb-5 pt-6 text-left transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="absolute inset-x-0 top-0 h-4 bg-[#43B047] shadow-[inset_0_-4px_0_rgba(0,0,0,0.25)]" />
      <div className="relative pt-4">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="question-block px-3 py-1 text-xs font-black tracking-[0.2em] text-[#6B3300]">
            {item.badge}
          </span>
          <span className="animate-coin text-2xl leading-none text-[#FBD000]">◉</span>
        </div>
        <p className="text-xs font-black uppercase tracking-[0.24em] text-[#d7ffd9]">
          {item.label}
        </p>
        <p className="mt-3 break-words text-base font-black leading-7 text-white sm:text-lg">
          {item.value}
        </p>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState(
    "Drop your message in the pipe and I will get back to you soon.",
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState("submitting");
    setStatusMessage("Warping your message through the pipe...");

    try {
      const response = await fetch(event.currentTarget.action, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setFormData(initialForm);
      setSubmitState("success");
      setStatusMessage("Message sent! Replace the Formspree placeholder with your real form ID anytime.");
    } catch {
      setSubmitState("error");
      setStatusMessage(
        "Message could not be sent. Update the Formspree placeholder with a real form ID and try again.",
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-24 text-white md:px-8"
      style={{
        backgroundColor: "#1a1a2e",
        fontFamily: '"Courier New", "Lucida Console", monospace',
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="brick-bg absolute inset-x-0 bottom-0 h-28" />
        <div className="animate-float absolute left-[8%] top-16 h-10 w-24 rounded-full bg-white/10 blur-sm" />
        <div className="animate-float absolute right-[10%] top-28 h-8 w-20 rounded-full bg-white/10 blur-sm [animation-delay:1.2s]" />
        <div className="animate-star-power absolute left-1/2 top-10 -translate-x-1/2 text-3xl text-[#FBD000]">
          ✦
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={entrance}
          viewport={{ once: true, amount: 0.35 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-none border-4 border-[#0c0c18] bg-[#0f1024] px-4 py-2 text-xs font-black tracking-[0.28em] text-white">
            <span className="animate-coin text-[#FBD000]">◉</span>
            LEVEL CONTACT
            <span className="animate-coin text-[#FBD000]">◉</span>
          </div>
          <h2 className="mt-6 text-[clamp(2.75rem,9vw,5rem)] font-black uppercase leading-none tracking-[0.18em] text-[#43B047]">
            WARP ZONE
          </h2>
          <p className="mt-4 text-sm font-black uppercase tracking-[0.28em] text-white md:text-base">
            SELECT YOUR PIPE
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ...entrance, delay: 0.08 }}
          viewport={{ once: true, amount: 0.2 }}
          className="pixel-border mt-14 bg-[#101426]/95 p-6 md:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
            <div>
              <div className="flex items-center justify-between gap-4 border-b-4 border-dashed border-[#43B047] pb-4">
                <span className="question-block px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#6B3300]">
                  CONTACT PIPES
                </span>
                <span className="animate-star-power text-xl text-[#FBD000]">★</span>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                {contactPipes.map((item, index) => (
                  <WarpPipe key={item.label} item={item} index={index} />
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ ...entrance, delay: 0.14 }}
              viewport={{ once: true, amount: 0.25 }}
              className="pixel-border bg-[#161a34] p-5 sm:p-6 md:p-8"
            >
              <div className="flex items-center justify-between gap-4 border-b-4 border-dashed border-[#43B047] pb-4">
                <span className="question-block px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#6B3300]">
                  MESSAGE PIPE
                </span>
                <span className="animate-star-power text-xl text-[#FBD000]">✦</span>
              </div>

              <motion.form
                action="https://formspree.io/f/placeholder"
                method="POST"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...entrance, delay: 0.2 }}
                viewport={{ once: true, amount: 0.25 }}
                className="mt-8 space-y-5"
              >
                <div className="space-y-2">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-black uppercase tracking-[0.24em] text-[#FBD000]"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    placeholder="PLAYER ONE"
                    className="w-full border-[3px] border-black bg-[#2a2a4e] px-4 py-3 text-sm font-black tracking-[0.08em] text-white outline-none transition-colors duration-200 placeholder:text-white/45 focus:border-[#FBD000]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-email"
                    className="text-xs font-black uppercase tracking-[0.24em] text-[#FBD000]"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    placeholder="player@example.com"
                    className="w-full border-[3px] border-black bg-[#2a2a4e] px-4 py-3 text-sm font-black tracking-[0.08em] text-white outline-none transition-colors duration-200 placeholder:text-white/45 focus:border-[#FBD000]"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-xs font-black uppercase tracking-[0.24em] text-[#FBD000]"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="DROP YOUR QUEST DETAILS HERE..."
                    className="w-full resize-none border-[3px] border-black bg-[#2a2a4e] px-4 py-3 text-sm font-black tracking-[0.08em] text-white outline-none transition-colors duration-200 placeholder:text-white/45 focus:border-[#FBD000]"
                  />
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={submitState === "submitting"}
                    className="question-block inline-flex items-center justify-center px-6 py-4 text-center text-sm font-black uppercase tracking-[0.18em] text-[#6B3300] transition-transform duration-200 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitState === "submitting" ? "SENDING..." : "SEND MESSAGE 🍄"}
                  </button>

                  <p className="text-xs font-black uppercase tracking-[0.16em] text-white/80">
                    Replace <span className="text-[#FBD000]">placeholder</span> with your Formspree ID.
                  </p>
                </div>
              </motion.form>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...entrance, delay: 0.26 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`mt-6 border-[3px] px-4 py-3 text-sm font-black ${
                  submitState === "error"
                    ? "border-[#E52521] bg-[#38151a] text-white"
                    : submitState === "success"
                      ? "border-[#43B047] bg-[#14311d] text-white"
                      : "border-black bg-[#0f1024] text-white"
                }`}
              >
                {statusMessage}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ ...entrance, delay: 0.3 }}
                viewport={{ once: true, amount: 0.35 }}
                className="mt-8 flex justify-center sm:justify-start"
              >
                <div
                  className="question-block animate-blink inline-flex items-center gap-3 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.22em] md:text-base"
                  style={{ color: "#FBD000", backgroundColor: "#2c2100" }}
                >
                  <span className="animate-coin">◉</span>
                  INSERT COIN TO CONTINUE
                  <span className="animate-star-power">★</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
