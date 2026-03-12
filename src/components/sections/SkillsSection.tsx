import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2, Server, Database, Container, Brain,
  FileCode, Palette, Globe, GitBranch, Terminal
} from "lucide-react";
import SpotlightCard from "../SpotlightCard";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Palette size={20} />,
    skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    size: "lg:col-span-2",
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    skills: ["Node.js", "Express", "Python", "Django", "PHP"],
    size: "",
  },
  {
    title: "Database",
    icon: <Database size={20} />,
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"],
    size: "",
  },
  {
    title: "DevOps",
    icon: <Container size={20} />,
    skills: ["Docker", "Git", "GitHub", "Linux"],
    size: "",
  },
  {
    title: "Other",
    icon: <Brain size={20} />,
    skills: ["AI Integration", "System Architecture", "Web Scraping", "API Development"],
    size: "lg:col-span-2",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">What I work with</p>
          <h2 className="text-3xl md:text-5xl font-bold">Skills & Technologies</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={cat.size}
            >
              <SpotlightCard className="p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {cat.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-xs font-medium rounded-lg bg-muted text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
