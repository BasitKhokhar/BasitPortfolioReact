import { useEffect, useRef, useState } from "react";
import colors from "../themes/colors";

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "Tailwind CSS", percentage: 95 },
    { name: "JavaScript", percentage: 70 },
    { name: "React.js", percentage: 90 },
    { name: "MySQL", percentage: 80 },
    { name: "Node.js / Express.js", percentage: 80 },
    { name: "React Native", percentage: 80 },
  ];

  /* ================= INTERSECTION OBSERVER ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills-section"
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.background}, #1a1a1a)`,
      }}
    >
      {/* Floating Background Glow */}
      <div
        className={`absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          isVisible ? "animate-float" : ""
        }`}
        style={{
          background: `radial-gradient(circle, ${colors.primary}, transparent)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* ================= HEADING ================= */}
        <div className="relative text-center mb-20 overflow-hidden">
          {/* Background Shadow Heading */}
          <h1
            className="absolute inset-0 flex items-center justify-center font-extrabold uppercase select-none pointer-events-none"
            style={{
              fontSize: "120px",
              color: "rgba(255,255,255,0.05)",
              letterSpacing: "12px",
            }}
          >
            Skills
          </h1>

          {/* Foreground Heading */}
          <h2
            className={`relative text-5xl font-extrabold mb-4 ${
              isVisible ? "animate-fadeUp" : "opacity-0"
            }`}
            style={{
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            My Skills
          </h2>

          <p
            className={`relative max-w-2xl mx-auto ${
              isVisible ? "animate-fadeUp delay-200" : "opacity-0"
            }`}
            style={{ color: colors.mutedText }}
          >
            Proficient in modern front-end and back-end technologies with strong
            expertise in building scalable, responsive, and high-performance
            applications.
          </p>
        </div>

        {/* ================= SKILLS GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={`space-y-4 p-6 rounded-xl transition-all group ${
                isVisible ? "animate-fadeUp" : "opacity-0"
              }`}
              style={{
                background: `linear-gradient(135deg, ${colors.gradients.dark[0]}, ${colors.gradients.dark[1]})`,
                border: `1px solid ${colors.primary}30`,
                animationDelay: `${idx * 0.15}s`,
              }}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-white font-semibold group-hover:text-yellow-300 transition-colors">
                  {skill.name}
                </h3>
                <span
                  className="font-bold text-lg"
                  style={{ color: colors.primary }}
                >
                  {skill.percentage}%
                </span>
              </div>

              {/* Progress Bar */}
              <div
                className="h-4 rounded-full overflow-hidden relative"
                style={{
                  background: `${colors.primary}20`,
                  border: `1px solid ${colors.primary}30`,
                }}
              >
                <div
                  className="h-full rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: isVisible ? `${skill.percentage}%` : "0%",
                    background: `linear-gradient(90deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.sunsetGold[1]})`,
                    boxShadow: `0 0 12px ${colors.primary}80`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.9s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
