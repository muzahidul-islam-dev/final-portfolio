import HeroSection      from "./components/sections/HeroSection";
import AboutSection     from "./components/sections/AboutSection";
import ProjectsSection  from "./components/sections/ProjectsSection";
import ServicesSection  from "./components/sections/ServicesSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import ContactSection   from "./components/sections/ContactSection";
import FooterSection    from "./components/sections/FooterSection";

export default function App() {
  return (
    <div className="bg-[#080808] min-h-screen overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ExperienceSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
