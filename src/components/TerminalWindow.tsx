import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  "$ whoami",
  "> jackim_mbuya",
  "$ cat skills.json",
  '> { "frontend": ["React", "TypeScript"] }',
  '> { "backend": ["Node.js", "Express"] }',
  '> { "db": ["MongoDB", "MySQL"] }',
  "$ git status",
  "> all systems operational ✓",
  "$ deploy --production",
  "> deploying... success ✓",
];

const TerminalWindow = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) return 0;
        return prev + 1;
      });
    }, 800);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-[380px] z-10"
    >
      <div className="glass-card rounded-xl overflow-hidden border border-primary/20">
        {/* Terminal header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <div className="w-3 h-3 rounded-full bg-destructive/60" />
          <div className="w-3 h-3 rounded-full bg-primary/40" />
          <div className="w-3 h-3 rounded-full bg-primary/60" />
          <span className="ml-2 text-xs font-mono text-muted-foreground">terminal</span>
        </div>

        {/* Terminal body */}
        <div className="p-4 font-mono text-xs space-y-1.5 min-h-[260px]">
          {codeLines.slice(0, visibleLines).map((line, i) => (
            <motion.div
              key={`${i}-${visibleLines > codeLines.length ? "r" : ""}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className={
                line.startsWith("$")
                  ? "text-primary"
                  : line.includes("✓")
                  ? "text-accent"
                  : "text-muted-foreground"
              }
            >
              {line}
            </motion.div>
          ))}
          {/* Blinking cursor */}
          <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
        </div>
      </div>
    </motion.div>
  );
};

export default TerminalWindow;
