import { useEffect, useRef, useState } from "react";
import colors from "../themes/colors";

const Resume = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const resumeItems = [
    [
       {
        date: "2024–continue",
        title: "Web & App Development",
        position: "Fullstack Developer @ Coderzpark",
      },
      {
        date: "2021–2025",
        title: "Bachelor of Software Engineering",
        position: "University Of Lahore",
      },
     ,
    ],
    [
      {
        date: "August 2023–February 2024",
        title: "Web Development Internship",
        position: "CoderzPark",
      },
      {
        date: "2018–2020",
        title: "FSc Pre-Engineering",
        position: "Superior College Sargodha",
      },
    ],
  ];

  /* ================= INTERSECTION OBSERVER ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="resume-section"
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.background}, #1a1a1a)`,
      }}
    >
      {/* Floating Background Glow */}
      <div
        className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-10 ${
          isVisible ? "animate-float" : ""
        }`}
        style={{
          background: `radial-gradient(circle, ${colors.primary}, transparent)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* ================= HEADING ================= */}
        <div className="relative text-center mb-20 overflow-hidden">
          {/* Big Shadow Text */}
          <h1
            className="absolute inset-0 flex items-center justify-center font-extrabold uppercase select-none pointer-events-none"
            style={{
              fontSize: "120px",
              color: "rgba(255,255,255,0.05)",
              letterSpacing: "12px",
            }}
          >
            Resume
          </h1>

          {/* Foreground Title */}
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
            Resume
          </h2>

          <p
            className={`relative max-w-2xl mx-auto ${
              isVisible ? "animate-fadeUp delay-200" : "opacity-0"
            }`}
            style={{ color: colors.mutedText }}
          >
            Explore my journey as a skilled web developer with a passion for
            crafting innovative digital experiences.
          </p>
        </div>

        {/* ================= RESUME GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {resumeItems.map((column, colIdx) => (
            <div key={colIdx} className="space-y-8">
              {column.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative p-7 rounded-2xl group hover:scale-105 transition-all duration-300 ${
                    isVisible ? "animate-fadeUp" : "opacity-0"
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${colors.gradients.dark[0]}, ${colors.gradients.dark[1]})`,
                    border: `2px solid ${colors.primary}30`,
                    animationDelay: `${(colIdx * 2 + idx) * 0.2}s`,
                  }}
                >
                  {/* Hover Glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}10, ${colors.gradients.sunsetGold[1]}10)`,
                    }}
                  />

                  <div className="relative z-10">
                    <span
                      className="inline-block px-4 py-1 rounded-full text-sm font-bold mb-3"
                      style={{
                        color: colors.primary,
                        background: `${colors.primary}20`,
                      }}
                    >
                      {item.date}
                    </span>

                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-yellow-300 transition-colors">
                      {item.title}
                    </h3>

                    <p
                      className="text-sm"
                      style={{ color: colors.mutedText }}
                    >
                      {item.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* ================= DOWNLOAD BUTTON ================= */}
        <div
          className={`text-center ${
            isVisible ? "animate-fadeUp delay-600" : "opacity-0"
          }`}
        >
          <a
            href="/Files/Basit_Resume.pdf"
            download
            className="relative inline-block px-10 py-4 rounded-xl font-bold text-lg hover:scale-110 transition-all duration-300 overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${colors.gradients.sunsetGold[0]}, ${colors.gradients.sunsetGold[1]})`,
              color: colors.background,
            }}
          >
            <span className="relative z-10">Download Resume</span>
            <div
              className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity"
              style={{
                background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
              }}
            />
          </a>
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

        .delay-200 { animation-delay: 0.2s; }
        .delay-600 { animation-delay: 0.6s; }

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

export default Resume;
