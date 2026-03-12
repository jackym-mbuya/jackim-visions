import { motion } from "framer-motion";

const orbs = [
  { size: 300, x: "10%", y: "20%", delay: 0 },
  { size: 200, x: "80%", y: "60%", delay: 2 },
  { size: 250, x: "50%", y: "80%", delay: 4 },
  { size: 150, x: "70%", y: "15%", delay: 1 },
  { size: 180, x: "20%", y: "70%", delay: 3 },
];

const FloatingOrbs = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            left: orb.x,
            top: orb.y,
            background: `radial-gradient(circle, hsla(142, 70%, 45%, 0.06) 0%, transparent 70%)`,
            filter: "blur(60px)",
          }}
          animate={{
            y: [0, -30, 0, 20, 0],
            x: [0, 15, 0, -15, 0],
            scale: [1, 1.1, 1, 0.95, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
