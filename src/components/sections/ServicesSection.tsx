import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Building2, Brain, Server, Bot } from "lucide-react";

const services = [
  {
    icon: <Code2 size={24} />,
    title: "Full-Stack Web Development",
    description: "Building scalable platforms using modern frameworks like React, Node.js, and TypeScript.",
  },
  {
    icon: <Building2 size={24} />,
    title: "Custom Business Systems",
    description: "Development of enterprise management software tailored to business needs.",
  },
  {
    icon: <Brain size={24} />,
    title: "AI Integration",
    description: "Embedding AI features into business applications for smarter workflows.",
  },
  {
    icon: <Server size={24} />,
    title: "System Architecture",
    description: "Designing robust backend infrastructures that scale with your business.",
  },
  {
    icon: <Bot size={24} />,
    title: "Automation & Web Scraping",
    description: "Automating data collection and business processes for efficiency.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-secondary/20">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">What I offer</p>
          <h2 className="text-3xl md:text-5xl font-bold">Services</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="service-card group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
