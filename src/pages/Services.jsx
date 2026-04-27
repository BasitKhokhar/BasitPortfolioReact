import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../themes/colors";
import AOS from 'aos';
import 'aos/dist/aos.css';
import servicesData from "../data/servicesData.json";

const Services = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  // SVG Icons mapped by ID
  const icons = {
    "ui-ux-design": (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.5 1.5"></path>
        <path d="M7 11l5-5"></path>
      </svg>
    ),
    "web-development": (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    "app-development": (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    "e-commerce": (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
      </svg>
    ),
    "seo-optimization": (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
    "maintenance": (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services-section" className="py-24 relative overflow-hidden bg-black">
      {/* Background Animated Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 animate-pulse"
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
            SERVICES
          </h1>

          {/* Foreground Heading */}
          <h2 className="relative text-5xl md:text-7xl font-black text-white mb-8" data-aos="zoom-in">
            Premium <span style={{ 
              background: `linear-gradient(to right, #fff, ${colors.primary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Services</span>
          </h2>
          <div className="w-24 h-1.5 mx-auto rounded-full mb-8" style={{ background: colors.primary }} />
          <p className="relative max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: colors.mutedText }} data-aos="fade-up">
            Delivering high-performance digital solutions tailored to your business goals, 
            focused on SEO, UX, and technical excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/service/${service.id}`)}
              className="group relative p-10 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-3 cursor-pointer overflow-hidden shadow-2xl"
              style={{
                background: `rgba(255, 255, 255, 0.02)`,
                border: `1px solid rgba(255, 255, 255, 0.05)`,
                backdropFilter: "blur(10px)"
              }}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Holographic Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, transparent 0%, rgba(255,193,7,0.05) 50%, transparent 100%)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon Container */}
                <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-2xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${colors.primary}20, transparent)`,
                    border: `1px solid ${colors.primary}30`,
                    color: colors.primary
                  }}
                >
                  {icons[service.id]}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-base leading-relaxed mb-8" style={{ color: colors.mutedText }}>
                  {service.shortDesc}
                </p>

                {/* Read More Button */}
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-500 transform group-hover:translate-x-2"
                  style={{ color: colors.primary }}
                >
                  <span>Read More</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>

              {/* Animated Corner Border */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-20 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at top right, ${colors.primary}, transparent 70%)`
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, 20px); }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Services;


