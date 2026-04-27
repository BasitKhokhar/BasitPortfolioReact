import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import About from "./About";
import Resume from "./Resume";
import Services from "./Services";

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
    <div style={{ backgroundColor: "transparent" }}>
      <Helmet>
        <title>Basit Khokhar | Senior Full Stack Developer & App Architect</title>
        <meta name="description" content="Expert Full Stack Developer and React Native App Architect specializing in Next.js, React, Node.js, and AI-powered mobile solutions. Delivering high-performance, SEO-optimized digital products." />
        <meta name="keywords" content="Basit Khokhar, Full Stack Developer, React Native Expert, Next.js Developer, Web Designer, Mobile App Development, SEO Specialist, AI Projects, Pakistan Developer" />
        <meta property="og:title" content="Basit Khokhar | Senior Full Stack Developer & App Architect" />
        <meta property="og:description" content="Explore the professional portfolio of Basit Khokhar. High-performance web and mobile app development services including React, Next.js, and React Native solutions." />
        <meta property="og:url" content="https://basitportfolioweb.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <section id="home-section">
        <HeroSection />
      </section>
      <About />
      <Resume />

      <Services />
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
