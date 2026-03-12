import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ShoppingCart, School, Store, BookOpen } from "lucide-react";

const projects = [
  {
    title: "PricePal",
    description: "Price comparison platform for online products.",
    icon: <ShoppingCart size={24} />,
    tech: ["React", "Node.js", "MongoDB"],
    features: ["Compare product prices", "Multiple vendors", "Smart filtering"],
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Multi-School Management System",
    description: "A multi-tenant school platform where each school operates under a unique ID.",
    icon: <School size={24} />,
    tech: ["React", "Node.js", "MongoDB"],
    features: ["Teachers management", "Parents access", "School administration", "Super admin panel"],
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "Multi-Vendor Ecommerce Platform",
    description: "Platform that aggregates product pricing from stores like Jumia, Amazon, and AliExpress.",
    icon: <Store size={24} />,
    tech: ["React", "Node.js", "MongoDB"],
    features: ["Vendor price comparison", "External purchase links", "Product aggregation"],
    color: "from-primary/20 to-accent/20",
  },
  {
    title: "Junior Secondary Management System",
    description: "Education platform for managing operations and communication between teachers, students, and parents.",
    icon: <BookOpen size={24} />,
    tech: ["React", "Node.js", "MySQL"],
    features: ["Student management", "Teacher portal", "Parent access", "Report generation"],
    color: "from-accent/20 to-primary/20",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">My work</p>
          <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="project-card group"
              style={{ perspective: "1000px" }}
            >
              {/* Header gradient */}
              <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <div className="w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-primary">
                  {project.icon}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-1 mb-6">
                  {project.features.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-3">
                  <a href="https://github.com/jackym-mbuya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline">
                    <Github size={14} /> Code
                  </a>
                  <a href="https://github.com/jackym-mbuya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-accent hover:underline">
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
