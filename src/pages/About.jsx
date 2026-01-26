import colors from "../themes/colors";
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

  const expertise = [
    {
      title: "Frontend Development",
      description: "Crafting beautiful, responsive, and high-performance web interfaces using React.js and Tailwind CSS.",
      icon: "⚛️",
      delay: "100"
    },
    {
      title: "Mobile Apps",
      description: "Building cross-platform mobile applications with React Native for seamless user experiences.",
      icon: "📱",
      delay: "200"
    },
    {
      title: "Backend Solutions",
      description: "Developing scalable APIs and server-side logic using Node.js and Express.js with robust security.",
      icon: "⚙️",
      delay: "300"
    },
    {
      title: "Database Management",
      description: "Efficient data handling and real-time features using MySQL, Firebase, and MongoDB.",
      icon: "🗄️",
      delay: "400"
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about-section"
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.background} 0%, #0a0a0a 100%)`,
      }}
    >
      {/* Decorative Animated Background Orbs */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full opacity-10 blur-[100px]"
        style={{
          background: colors.primary,
          animation: "float 10s ease-in-out infinite",
        }}
      />
      <div
        className="absolute top-1/2 -right-24 w-[500px] h-[500px] rounded-full opacity-5 blur-[120px]"
        style={{
          background: colors.gradients.warmGold[0],
          animation: "float 12s ease-in-out infinite reverse",
        }}
      />
      <div
        className="absolute -bottom-24 left-1/4 w-80 h-80 rounded-full opacity-10 blur-[80px]"
        style={{
          background: colors.primary,
          animation: "float 8s ease-in-out infinite 1s",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading Section */}
        <div className="relative text-center mb-16 overflow-hidden pb-10">
          <h1
            className="absolute inset-0 flex items-center justify-center font-extrabold uppercase select-none pointer-events-none"
            style={{
              fontSize: "clamp(60px, 15vw, 150px)",
              color: "rgba(255,255,255,0.03)",
              letterSpacing: "15px",
            }}
          >
            About
          </h1>
          <h2
            className="relative text-5xl md:text-6xl font-extrabold mb-4"
            style={{
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "slideInUp 0.8s ease-out",
            }}
          >
            About Me
          </h2>
          <div className="w-20 h-1.5 mx-auto rounded-full" style={{ background: colors.primary }}></div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side: Expertise Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <div
                key={index}
                data-aos="fade-right"
                data-aos-delay={item.delay}
                className="p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-3 group"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  borderColor: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-all duration-300 group-hover:scale-110 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}20, transparent)`,
                    border: `1px solid ${colors.primary}30`,
                  }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ color: colors.primary }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.mutedText }}>
                  {item.description}
                </p>
                <div
                  className="h-1 w-0 group-hover:w-full transition-all duration-500 mt-4 rounded-full"
                  style={{ background: colors.primary }}
                />
              </div>
            ))}
          </div>

          {/* Right Side: Biography & Details */}
          <div className="space-y-8" data-aos="fade-left">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold" style={{ color: colors.text }}>
                I am a passionate <span style={{ color: colors.primary }}>Developer</span> based in Pakistan.
              </h3>
              <p style={{ color: colors.mutedText, fontSize: "16px" }} className="leading-relaxed">
                Hi there! I'm a dedicated <b>Full Stack Web & React Native Developer</b> with 2.5 years
                of hands-on experience building modern, high-performance web and mobile applications.
                I specialize in turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
            </div>

            {/* Info List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: "Name", value: "Muhammad Talha Basit" },
                { label: "Address", value: "Sargodha, Pakistan" },
                { label: "Email", value: "basitkhokhar957@gmail.com" },
                { label: "Phone", value: "+92 306 0760549" },
              ].map((info, idx) => (
                <div
                  key={idx}
                  className="flex flex-col gap-1 p-4 rounded-2xl border transition-all hover:bg-white/5"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    borderColor: "rgba(255, 255, 255, 0.05)",
                  }}
                >
                  <span style={{ color: colors.primary }} className="text-xs uppercase tracking-widest font-bold">
                    {info.label}
                  </span>
                  <span style={{ color: colors.text }} className="font-medium">{info.value}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="pt-6 flex flex-wrap gap-6">
              <div
                className="flex items-center gap-4 px-6 py-4 rounded-2xl border"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}10, transparent)`,
                  borderColor: `${colors.primary}30`,
                }}
              >
                <div className="text-4xl font-extrabold" style={{ color: colors.primary }}>15+</div>
                <div className="text-sm leading-tight" style={{ color: colors.mutedText }}>
                  Projects<br /><span className="font-bold text-white">Completed</span>
                </div>
              </div>

              <a
                href={cvFile}
                download="Basit_CV.pdf"
                className="px-10 py-5 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-2xl relative group overflow-hidden flex items-center justify-center min-w-[200px]"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.gradients.warmGold[0]})`,
                  color: colors.background,
                }}
              >
                <span className="relative z-10">Download My CV</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity"
                  style={{
                    background: "white",
                  }}
                />
              </a>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, 25px); }
        }
      `}</style>
    </section>
  );
};

export default About;
