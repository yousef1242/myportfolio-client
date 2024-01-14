import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import HeroSection from "../components/heroSection";

const HomePage = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* hero section */}
      <HeroSection />
      {/* about section */}
      <AboutSection />
      {/* skills section */}
      <SkillsSection />
      {/* projects section */}
      <ProjectsSection />
      {/* contact section */}
      <ContactSection />
    </>
  );
};

export default HomePage;
