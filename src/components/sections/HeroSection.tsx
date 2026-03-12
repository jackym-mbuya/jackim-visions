import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download, MessageCircle, Terminal } from "lucide-react";
import HeroScene from "../three/HeroScene";
import MatrixRain from "../MatrixRain";
import TerminalWindow from "../TerminalWindow";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.02] z-[1]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      {/* Radial glow */}
      <div className="absolute inset-0 z-[1]" style={{
        background: "radial-gradient(ellipse 60% 50% at 30% 50%, hsla(142, 70%, 45%, 0.08) 0%, transparent 70%)",
      }} />

      {/* 3D Scene */}
      <HeroScene />

      {/* Terminal window */}
      <TerminalWindow />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center lg:text-left lg:ml-[8%]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-mono text-primary">Available for work</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="gradient-text">Jackim Mbuya</span>
            <br />
            <span className="text-foreground text-3xl sm:text-4xl md:text-5xl">Full-Stack Software Engineer</span>
          </h1>

          <div className="h-8 mb-10 flex items-center gap-2 justify-center lg:justify-start">
            <Terminal size={16} className="text-primary" />
            <TypeAnimation
              sequence={[
                "I build scalable web applications",
                2000,
                "I develop AI powered systems",
                2000,
                "I create modern digital solutions",
                2000,
                "I design full-stack platforms",
                2000,
                "I build multi-tenant systems",
                2000,
              ]}
              wrapper="p"
              speed={50}
              repeat={Infinity}
              className="text-lg md:text-xl text-muted-foreground font-mono"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold hover:shadow-[0_0_30px_hsla(142,70%,45%,0.4)] transition-all duration-300"
            >
              View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
            >
              Contact Me <MessageCircle size={16} />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300"
            >
              Download CV <Download size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-3 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
