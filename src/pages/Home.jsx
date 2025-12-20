import HeroSection from "../components/HeroSection";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
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
      <Skills />
      <Projects />
      <VideoShowcase />
      <Contact />
    </div>
  );
};

export default Home;
