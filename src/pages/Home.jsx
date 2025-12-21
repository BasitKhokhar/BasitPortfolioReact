import HeroSection from "../components/HeroSection";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";
import TechStack from "../components/TechStack";
import Skills from "./Skills";
import Pricing from "../components/Pricing";
import Projects from "./Projects";
import StatsCounter from "../components/StatsCounter";
import FreelanceHire from "../components/FreelanceHire";
import VideoShowcase from "../components/VideoShowcase";
import Contact from "./Contact";
import colors from "../themes/colors";

const Home = () => {
  return (
    <div style={{ backgroundColor: colors.background }}>
      <section id="home-section">
        <HeroSection />
      </section>
      <About />
      <Resume />
      <Services />
      <TechStack />
      <Skills />
      <Pricing />
      <Projects />
      <StatsCounter />
      <FreelanceHire />
      <VideoShowcase />
      <Contact />
    </div>
  );
};

export default Home;
