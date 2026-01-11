import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>B.Creatives | Basit Khokhar Portfolio</title>
        <meta name="description" content="Professional Full Stack Developer and App Designer portfolio. Showcasing AI-based projects, mobile apps, and web solutions." />
        <meta property="og:title" content="B.Creatives | Basit Khokhar Portfolio" />
        <meta property="og:description" content="Professional Full Stack Developer and App Designer portfolio. Showcasing AI-based projects, mobile apps, and web solutions." />
        <meta property="og:url" content="https://basitportfolioweb.netlify.app/" />
      </Helmet>
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
