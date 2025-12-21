import { useEffect, useRef, useState } from "react";
import colors from "../themes/colors";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Services = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const services = [
    { icon: "🎨", title: "UI / UX Design" },
    { icon: "💻", title: "Web Development" },
    { icon: "📱", title: "React Native Apps" },
    { icon: "🛒", title: "E-Commerce Solutions" },
    { icon: "🔍", title: "SEO Optimization" },
    { icon: "⚙️", title: "Maintenance & Support" },
  ];

  /* ================= INTERSECTION OBSERVER ================= */
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });


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
      id="services-section"
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.background}, #1a1a1a)`,
      }}
    >
      {/* ================= YELLOW GLOW BACKGROUND ================= */}
      <div
        className={`absolute top-0 right-0 w-120 h-120 rounded-full blur-3xl opacity-10 ${isVisible ? "animate-float" : ""
          }`}
        style={{
          background: `radial-gradient(circle, ${colors.gradients.sunsetGold[1]}, transparent)`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">

        {/* ================= HEADING ================= */}
        <div className="relative text-center mb-20 overflow-hidden">
          {/* Background Shadow Heading */}
          <h1
            className="absolute inset-0 flex items-center justify-center font-extrabold uppercase select-none pointer-events-none"
            style={{
              fontSize: "clamp(60px, 12vw, 120px)",
              color: "rgba(255,255,255,0.05)",
              letterSpacing: "12px",
            }} data-aos="fade-up"
          >
            Services
          </h1>

          {/* Foreground Heading */}
          <h2
            className={`relative text-5xl font-extrabold mb-4
              }`}
            style={{
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.sunsetGold[1]})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }} data-aos="fade-up"
          >
            My Services
          </h2>

          <p
            className={`relative max-w-2xl mx-auto ${isVisible ? "animate-fadeUp delay-200" : "opacity-0"
              }`}
            style={{ color: colors.mutedText }} data-aos="fade-up"
          >
            I provide end-to-end digital solutions, crafting modern,
            scalable, and visually stunning products with long-term support.
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`relative group p-10 rounded-xl transition-all duration-300 hover:scale-110 cursor-pointer
                }`}
              style={{
                background: `linear-gradient(135deg, ${colors.gradients.dark[0]}, ${colors.gradients.dark[1]})`,
                border: `2px solid ${colors.primary}30`,
                // animationDelay: `${idx * 0.15}s`,
              }} data-aos="zoom-in"
            >
              {/* Hover Gold Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}25, ${colors.gradients.sunsetGold[1]}25)`,
                }}
              />

              {/* Animated Border */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                style={{
                  border: `2px solid ${colors.gradients.sunsetGold[1]}`,
                  animation: "pulse 2s infinite",
                }}
              />

              <div className="relative z-10 text-center">
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                  {service.title}
                </h3>
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

        @keyframes pulse {
          0% { opacity: 0.4; }
          50% { opacity: 1; }
          100% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
};

export default Services;
