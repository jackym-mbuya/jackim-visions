import { motion } from "framer-motion";

const technologies = [
  "React", "TypeScript", "Next.js", "Vue.js", "Node.js", "Python", 
  "MongoDB", "PostgreSQL", "Docker", "AWS", "Tailwind", "GraphQL",
  "React", "TypeScript", "Next.js", "Vue.js", "Node.js", "Python", 
  "MongoDB", "PostgreSQL", "Docker", "AWS", "Tailwind", "GraphQL"
];

const TechMarquee = () => {
  return (
    <div className="relative overflow-hidden py-8 bg-secondary/10 border-y border-primary/10">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        }}
      >
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="mx-8 text-lg font-mono text-muted-foreground hover:text-primary transition-colors cursor-default"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;
