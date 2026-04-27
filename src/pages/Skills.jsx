import { useEffect, useRef, useState } from "react";
import colors from "../themes/colors";
import TechSphere from "../components/TechSphere";
import { getImageUrl } from "../utils/imageImporter";

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const skills = [
    { name: "React.js", image: "src/assets/images/react.png", percentage: 90 },
    { name: "Node.js", image: "src/assets/images/Node.png", percentage: 85 },
    { name: "React Native", image: "src/assets/images/reactnative.png", percentage: 80 },
    { name: "Tailwind CSS", image: "src/assets/images/tailwind.png", percentage: 95 },
    { name: "JavaScript", image: "src/assets/images/JS.png", percentage: 88 },
    { name: "MySQL", image: "src/assets/images/mysql.png", percentage: 82 },
  ];

  const technologies = [
    { name: "HTML", image: "src/assets/images/html.png" },
    { name: "CSS", image: "src/assets/images/css.png" },
    { name: "Tailwind CSS", image: "src/assets/images/tailwind.png" },
    { name: "JavaScript", image: "src/assets/images/JS.png" },
    { name: "React.js", image: "src/assets/images/react.png" },
    { name: "React Native", image: "src/assets/images/reactnative.png" },
    { name: "Node.js", image: "src/assets/images/Node.png" },
    { name: "Express.js", image: "src/assets/images/express.png" },
    { name: "MySQL", image: "src/assets/images/mysql.png" },
    { name: "Firebase", image: "src/assets/images/firebase.png" },
    { name: "MongoDB", image: "src/assets/images/mongodb.png" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills-section" className="py-24 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
        style={{ background: `radial-gradient(circle, ${colors.primary}, transparent)` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ================= HEADING WITH SHADOW ================= */}
        <div className="relative text-center mb-24 overflow-hidden">
          {/* Shadow Text */}
          <h1
            className="absolute inset-0 flex items-center justify-center font-extrabold uppercase select-none pointer-events-none"
            style={{
              fontSize: "clamp(60px, 15vw, 150px)",
              color: "rgba(255,255,255,0.03)",
              letterSpacing: "15px",
            }}
          >
            SKILLS
          </h1>

          {/* Foreground Heading */}
          <h2 className="relative text-5xl md:text-7xl font-black mb-6" data-aos="zoom-in">
            <span style={{ 
              background: `linear-gradient(to right, #fff, ${colors.primary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Technical Skills
            </span>
          </h2>
          <div className="w-24 h-1.5 mx-auto rounded-full mb-8" style={{ background: colors.primary }} />
          <p className="relative max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: colors.mutedText }} data-aos="fade-up">
            My expertise in modern web and mobile development, focused on building high-performance 
            digital experiences.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Skills Progress Bars */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="py-2"
                data-aos="fade-right"
                data-aos-delay={idx * 100}
              >
                <div className="flex justify-between items-end mb-2">
                  <div className="flex items-center gap-3">
                    <img 
                      src={getImageUrl(skill.image)} 
                      alt={skill.name} 
                      className="w-5 h-5 object-contain"
                    />
                    <h3 className="text-lg font-bold text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="font-black text-lg" style={{ color: colors.primary }}>
                    {skill.percentage}%
                  </span>
                </div>

                {/* Progress Bar Container */}
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 relative">
                  <div 
                    className="h-full rounded-full transition-all duration-[1500ms] ease-out relative"
                    style={{ 
                      width: isVisible ? `${skill.percentage}%` : "0%",
                      background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.sunsetGold[1]})`,
                      boxShadow: `0 0 15px ${colors.primary}40`
                    }}
                  >
                    {/* Animated Shine */}
                    <div className="absolute inset-0 w-full h-full animate-shine" 
                      style={{ background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: 3D Tech Sphere */}
          <div className="w-full lg:w-1/2 flex justify-center" data-aos="fade-left">
            <div className="w-full max-w-[600px]">
              <TechSphere technologies={technologies} />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shine {
          animation: shine 3s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;




