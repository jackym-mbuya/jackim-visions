import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, User } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">Get to know me</p>
          <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <User size={20} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Who I Am</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Jackim Mbuya is a passionate Software Engineer with a strong focus on building 
              scalable full-stack applications, intelligent platforms, and modern web solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              He specializes in developing business systems, multi-tenant platforms, and 
              AI-assisted software solutions that drive real-world impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="border-l-2 border-primary/30 pl-6">
              <p className="text-sm font-mono text-primary mb-1">2019 — 2024</p>
              <h4 className="font-semibold text-lg">Kirinyaga University</h4>
              <p className="text-muted-foreground">
                Bachelor's Degree in Software Engineering
              </p>
              <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                Second Class Upper
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
