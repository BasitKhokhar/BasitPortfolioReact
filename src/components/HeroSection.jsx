import React, { useEffect, useRef, useState } from "react";
import colors from "../themes/colors";

const HeroSection = () => {
  const [subheading, setSubheading] = useState("");
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const hasTyped = useRef(false);

  const typeWriter = (text, setter, delay = 100, callback) => {
    let i = 0;
    const type = () => {
      if (i < text.length) {
        setter((prev) => prev + text.charAt(i));
        i++;
        setTimeout(type, delay);
      } else {
        if (callback) callback();
      }
    };
    type();
  };

  useEffect(() => {
    if (hasTyped.current) return;
    hasTyped.current = true;

    typeWriter("Heello!", setSubheading, 150, () => {
      typeWriter("I''m Talha Basit", setName, 150, () => {
        typeWriter(
          "A  Freelance Fullstack Web & App Developer",
          setJob,
          150
        );
      });
    });
  }, []);

  return (
    <section
      id="home-section"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.background} 0%, #1a1a1a 50%, ${colors.background} 100%)`,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full opacity-10 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${colors.primary}, transparent)`,
            top: "-50px",
            right: "-50px",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full opacity-10 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${colors.primary}, transparent)`,
            bottom: "-50px",
            left: "-50px",
            animation: "float 8s ease-in-out infinite reverse",
          }}
        />
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
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
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="container mx-auto px-6 mt-16 overflow-hidden relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left" style={{ animation: "slideInLeft 1s ease-out" }}>
            <span
              className="block font-bold mb-2 text-2xl md:text-3xl"
              style={{
                background: `linear-gradient(90deg, ${colors.gradients.warmGold[0]}, ${colors.gradients.warmGold[1]})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {subheading}
            </span>

            <h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
              <span
                style={{
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.goldGlow[1]})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {name}
              </span>
            </h1>

            <h2
              className="mt-3 text-lg sm:text-2xl font-semibold mb-8 min-h-12"
              style={{ color: colors.mutedText }}
            >
              {job}
            </h2>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start" style={{ animation: "fadeInUp 1.2s ease-out" }}>
              <a
                href="#contact-section"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer relative group overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
                  color: colors.background,
                  border: "none",
                }}
              >
                <span className="relative z-10">Hire Me</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${colors.gradients.sunsetGold[0]}, ${colors.gradients.sunsetGold[1]})`,
                  }}
                />
              </a>

              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-lg font-semibold border-2 transition-all transform hover:scale-105 cursor-pointer hover:shadow-lg"
                style={{
                  borderColor: colors.primary,
                  color: colors.primary,
                  background: "transparent",
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div
            className="md:w-1/2 flex justify-center mb-8 md:mb-0"
            style={{ animation: "slideInRight 1s ease-out" }}
          >
            <img
              src="/src/assets/images/basit.png"
              alt="Hero"
              className="w-72 sm:w-80 md:w-105 rounded-lg shadow-2xl transition-transform transform hover:scale-105"
              style={{
                boxShadow: `0 0 40px ${colors.primary}40`,
                animation: "float 4s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
