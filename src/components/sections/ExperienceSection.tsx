import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code2, Layers } from "lucide-react";

const experiences = [
  {
    period: "2022 — Present",
    title: "Software Engineer",
    company: "Freelance / Independent Developer",
    description: "Building full-stack web applications and multi-tenant platforms for clients across various industries.",
    projects: [
      "Multi-tenant school management platforms",
      "Ecommerce systems with vendor aggregation",
      "Automation and web scraping tools",
      "Business management systems",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">My journey</p>
          <h2 className="text-3xl md:text-5xl font-bold">Experience</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-20 mb-12"
            >
              {/* Dot */}
              <div className="absolute left-6 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <span className="text-sm font-mono text-primary mb-2 block">{exp.period}</span>
              <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{exp.company}</p>
              <p className="text-sm text-muted-foreground mb-4">{exp.description}</p>

              <div className="glass-card rounded-xl p-5">
                <p className="text-xs font-mono text-primary mb-3 uppercase tracking-wider">Key Projects</p>
                <ul className="space-y-2">
                  {exp.projects.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
