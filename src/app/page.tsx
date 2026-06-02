import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import OpenRoles from "@/components/OpenRoles";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import MarioGame from "@/components/MarioGame";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <OpenRoles />
        <Experience />
        <Skills />
        <Projects />
        <MarioGame />
        <Education />
        <Contact />
      </main>
      <footer className="border-t-[3px] border-[var(--mario-dark)] py-8 text-center text-[10px] font-black text-white/50 uppercase tracking-widest bg-[var(--mario-dark)]">
        © 2026 Samvedhya Bendapudi. All rights reserved.
      </footer>
    </>
  );
}
