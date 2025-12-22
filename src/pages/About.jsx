import colors from "../themes/colors";
import aboutImage from "../assets/images/bg2.png";
import { useEffect, useRef, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import cvFile from "../assets/Pdfs/Basit CV20-12-25.pdf";

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={sectionRef}
      id="about-section"
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.background} 0%, #1a1a1a 100%)`,
      }}
    >
      {/* Animated Background */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${colors.primary}, transparent)`,
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        {/* ================= HEADING ================= */}
        <div className="relative text-center mb-2 overflow-hidden pb-24">
          {/* Background Shadow Heading */}
          <h1
            className="absolute inset-0 flex items-center justify-center font-extrabold uppercase select-none pointer-events-none"
            style={{
              fontSize: "clamp(60px, 12vw, 120px)",
              color: "rgba(255,255,255,0.05)",
              letterSpacing: "12px",
            }}
          >
            About
          </h1>

          {/* Foreground Heading */}
          <h2
            className="relative text-5xl font-extrabold mb-4"
            style={{
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "slideInUp 0.8s ease-out",
            }}
          >
            About Me
          </h2>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image Section */}
          <div
            className="flex justify-center"
            data-aos="fade-right"
          >
            <div
              className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
              style={{
                boxShadow: `0 0 60px ${colors.primary}30`,
                border: `2px solid ${colors.primary}20`,
              }}
            >
              <img
                src={aboutImage}
                alt="About Image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div
            className="space-y-6"
            data-aos="fade-left"
          >
            <p style={{ color: colors.text, fontSize: "14px" }} className="leading-relaxed">
              Hi there! I'm a dedicated <b>Full Stack Web & React Native Developer</b> with 2.5 years
              of hands-on experience building modern, high-performance web and mobile applications.
              On the frontend, I work extensively with React.js and Tailwind CSS and also build mobile
              applications using React Native. On the backend, I utilize Node.js and Express.js to create
              scalable APIs and server-side logic, paired with MySQL and Firebase for efficient data
              management and real-time features.
            </p>

            {/* Info List */}
            <div className="space-y-4">
              {[
                { label: "Name:", value: "Muhammad Talha Basit" },
                { label: "Address:", value: "Sargodha, Pakistan" },
                { label: "Email:", value: "basitkhokhar957@gmail.com" },
                { label: "Phone:", value: "+92306 0760549" },
              ].map((info, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 p-3 rounded-lg transition-all hover:translate-x-2"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary}10, transparent)`,
                    borderLeft: `3px solid ${colors.primary}`,
                  }}
                >
                  <span style={{ color: colors.primary }} className="font-bold whitespace-nowrap">
                    {info.label}
                  </span>
                  <span style={{ color: colors.text }}>{info.value}</span>
                </div>
              ))}
            </div>

            {/* Counter & Download */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div
                className="p-4 rounded-lg"
                style={{
                  background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}20, ${colors.gradients.goldGlow[1]}20)`,
                  border: `1px solid ${colors.primary}40`,
                }}
              >
                <p style={{ color: colors.primary }} className="font-bold mb-1">
                  15+ Projects Complete
                </p>
                <p style={{ color: colors.mutedText }} className="text-sm">
                  Successfully delivered
                </p>
              </div>
              <a
                href={cvFile}
                download="Basit_CV.pdf"
                className="px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-2xl relative group overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.gradients.sunsetGold[0]}, ${colors.gradients.sunsetGold[1]})`,
                  color: colors.background,
                }}
              >
                <span className="relative z-10">Download CV</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
      `}</style>
    </section>
  );
};

export default About;
