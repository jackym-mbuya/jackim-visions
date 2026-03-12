import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingOrbs from "../components/FloatingOrbs";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ServicesSection from "../components/sections/ServicesSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import ContactSection from "../components/sections/ContactSection";
import TechMarquee from "../components/TechMarquee";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <FloatingOrbs />
      <Navbar />
      <HeroSection />
      <TechMarquee />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
