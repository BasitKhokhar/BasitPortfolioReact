import { useEffect, useRef, useState } from "react";
import colors from "../themes/colors";
import AOS from 'aos';
import 'aos/dist/aos.css';
import resumeFile from "../assets/Pdfs/Basit Resume20-12-25.pdf";

const Resume = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const education = [
    {
      date: "2021–2025",
      title: "Bachelor of Software Engineering",
      institution: "University Of Lahore",
      description: "Focusing on modern software architecture, algorithms, and full-stack development.",
    },
    {
      date: "2018–2020",
      title: "FSc Pre-Engineering",
      institution: "Superior College Sargodha",
      description: "Foundational studies in mathematics and physics.",
    },
  ];

  const experience = [
    {
      date: "2024–Present",
      title: "Fullstack Developer",
      company: "Coderzpark",
      description: "Developing scalable web and mobile applications using React, Node.js, and React Native.",
    },
    {
      date: "Aug 2023–Feb 2024",
      title: "Web Development Internship",
      company: "CoderzPark",
      description: "Assisted in building responsive front-end components and integrating REST APIs.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const TimelineItem = ({ item, isLeft, index }) => (
    <div 
      className={`relative flex items-center justify-between mb-12 w-full ${isLeft ? "flex-row-reverse" : "flex-row"}`}
      data-aos={isLeft ? "fade-right" : "fade-left"}
      data-aos-delay={index * 100}
    >
      {/* Timeline Line Connector */}
      <div className="hidden md:block w-5/12" />

      {/* Timeline Dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-20"
        style={{ 
          background: colors.primary,
          boxShadow: `0 0 15px ${colors.primary}`,
          border: `2px solid ${colors.background}`
        }}
      />

      {/* Card Content */}
      <div 
        className="w-full md:w-5/12 p-6 rounded-2xl relative group overflow-hidden"
        style={{
          background: `rgba(255, 255, 255, 0.03)`,
          backdropFilter: "blur(12px)",
          border: `1px solid rgba(255, 193, 7, 0.2)`,
          transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        }}
      >
        {/* Glow Overlay */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${colors.primary}15, transparent 70%)`
          }}
        />

        <div className="relative z-10">
          <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 inline-block"
            style={{ background: `${colors.primary}20`, color: colors.primary }}
          >
            {item.date}
          </span>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-yellow-400 transition-colors">
            {item.title}
          </h3>
          <h4 className="text-sm font-medium mb-3" style={{ color: colors.mutedText }}>
            {item.company || item.institution}
          </h4>
          <p className="text-sm leading-relaxed" style={{ color: colors.mutedText }}>
            {item.description}
          </p>
        </div>

        {/* Hover Border Glow */}
        <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
          style={{ background: colors.primary }}
        />
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} id="resume-section" className="py-24 relative overflow-hidden bg-black">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full blur-[120px] opacity-20 animate-pulse"
        style={{ background: colors.primary }}
      />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full blur-[120px] opacity-10 animate-float"
        style={{ background: colors.primary }}
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
            RESUME
          </h1>

          {/* Foreground Heading */}
          <h2 className="relative text-5xl md:text-7xl font-black mb-6" data-aos="zoom-in">
            <span style={{ 
              background: `linear-gradient(to right, #fff, ${colors.primary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              My Journey
            </span>
          </h2>
          <div className="w-24 h-1.5 mx-auto rounded-full mb-8" style={{ background: colors.primary }} />
          <p className="relative max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: colors.mutedText }} data-aos="fade-up">
            A chronological overview of my professional experience and academic background.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="flex flex-col md:flex-row gap-16">
          
          {/* Experience Column */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-12" data-aos="fade-right">
              <div className="p-3 rounded-xl" style={{ background: `${colors.primary}20` }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white">Experience</h3>
            </div>
            
            <div className="space-y-12 relative border-l-2 ml-6 md:ml-0 md:border-l-0" style={{ borderColor: `${colors.primary}30` }}>
               {/* Mobile Timeline Line */}
               <div className="absolute left-0 top-0 h-full w-[2px] md:hidden" style={{ background: `linear-gradient(to bottom, ${colors.primary}, transparent)` }} />
               
               {experience.map((item, idx) => (
                 <div key={idx} className="pl-10 md:pl-0" data-aos="fade-up" data-aos-delay={idx * 150}>
                    <div className="relative p-8 rounded-3xl group transition-all duration-500 hover:translate-y-[-5px]"
                      style={{
                        background: `linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.8))`,
                        border: `1px solid ${colors.primary}20`,
                        boxShadow: `0 10px 30px -15px rgba(0,0,0,0.5)`
                      }}
                    >
                      <div className="absolute top-8 -left-[41px] w-5 h-5 rounded-full z-10 hidden md:block"
                        style={{ background: colors.background, border: `3px solid ${colors.primary}`, boxShadow: `0 0 15px ${colors.primary}` }}
                      />
                      <span className="text-sm font-bold mb-3 block" style={{ color: colors.primary }}>{item.date}</span>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm mb-4 font-medium opacity-80" style={{ color: colors.primary }}>{item.company}</p>
                      <p className="text-sm leading-relaxed" style={{ color: colors.mutedText }}>{item.description}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-12" data-aos="fade-left">
              <div className="p-3 rounded-xl" style={{ background: `${colors.primary}20` }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white">Education</h3>
            </div>
            
            <div className="space-y-12 relative border-l-2 ml-6 md:ml-0 md:border-l-0" style={{ borderColor: `${colors.primary}30` }}>
               <div className="absolute left-0 top-0 h-full w-[2px] md:hidden" style={{ background: `linear-gradient(to bottom, ${colors.primary}, transparent)` }} />
               
               {education.map((item, idx) => (
                 <div key={idx} className="pl-10 md:pl-0" data-aos="fade-up" data-aos-delay={idx * 150}>
                    <div className="relative p-8 rounded-3xl group transition-all duration-500 hover:translate-y-[-5px]"
                      style={{
                        background: `linear-gradient(145deg, rgba(20,20,20,0.8), rgba(10,10,10,0.8))`,
                        border: `1px solid ${colors.primary}20`,
                        boxShadow: `0 10px 30px -15px rgba(0,0,0,0.5)`
                      }}
                    >
                      <div className="absolute top-8 -left-[41px] w-5 h-5 rounded-full z-10 hidden md:block"
                        style={{ background: colors.background, border: `3px solid ${colors.primary}`, boxShadow: `0 0 15px ${colors.primary}` }}
                      />
                      <span className="text-sm font-bold mb-3 block" style={{ color: colors.primary }}>{item.date}</span>
                      <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm mb-4 font-medium opacity-80" style={{ color: colors.primary }}>{item.institution}</p>
                      <p className="text-sm leading-relaxed" style={{ color: colors.mutedText }}>{item.description}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

        </div>

        {/* Download Section */}
        <div className="mt-24 text-center" data-aos="fade-up">
          <a
            href={resumeFile}
            download="Basit_Resume.pdf"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:scale-105 active:scale-95 group"
            style={{
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.gradients.sunsetGold[0]})`,
              color: colors.background,
              boxShadow: `0 10px 40px ${colors.primary}30`
            }}
          >
            <span>Download My Resume</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-y-1 transition-transform">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Resume;

