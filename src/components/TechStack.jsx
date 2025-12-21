import { useState, useEffect } from "react";
import colors from "../themes/colors";
import { getImageUrl } from "../utils/imageImporter";
import AOS from 'aos';
import 'aos/dist/aos.css';
const TechStack = () => {
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 4;

  // Auto-rotate carousel
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });


    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsPerView; i++) {
      items.push(technologies[(currentIndex + i) % technologies.length]);
    }
    return items;
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + technologies.length) % technologies.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % technologies.length);
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Animated Background Elements */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${colors.primary}, transparent)`,
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${colors.primary}, transparent)`,
          animation: "float 8s ease-in-out infinite 2s",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Heading */}
        <div className="relative text-center mb-20 overflow-hidden">
          <h1
            className="absolute inset-0 flex items-center justify-center font-extrabold uppercase select-none pointer-events-none"
            style={{
              fontSize: "clamp(60px, 12vw, 120px)",
              color: "rgba(255,255,255,0.05)",
              letterSpacing: "12px",
            }} data-aos="fade-up"
          >
            Tech Stack
          </h1>
          <h2
            className="relative text-5xl font-extrabold mb-4"
            style={{
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }} data-aos="fade-up"
          >
            Tech Stack
          </h2>
          <p
            className="relative text-lg max-w-2xl mx-auto"
            style={{ color: colors.mutedText }}
            data-aos="fade-up"
          >
            These are the technologies I use to build web & mobile applications
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Carousel Items */}
          <div className="overflow-hidden">
            <div className="flex gap-6 transition-all duration-500 ease-out">
              {getVisibleItems().map((tech, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 animate-fadeIn"
                >
                  <div
                    className="rounded-2xl p-8 text-center transition-all duration-300 hover:scale-110 hover:shadow-2xl transform"
                    style={{
                      background: `rgba(240, 248, 255, 0.05)`,
                      border: `2px solid ${colors.primary}30`,
                      backdropFilter: "blur(10px)",
                      animation: `slideInUp 0.6s ease-out ${idx * 0.1}s both`,
                    }}
                  >
                    {/* Tech Image */}
                    <div className="mb-6 flex items-center justify-center h-32">
                      <img
                        src={getImageUrl(tech.image)}
                        alt={tech.name}
                        className="h-full object-contain filter drop-shadow-lg transition-transform duration-300 hover:scale-110"
                      />
                    </div>

                    {/* Tech Name */}
                    <h3
                      className="text-lg font-bold"
                      style={{ color: colors.primary }}
                    >
                      {tech.name}
                    </h3>

                    {/* Animated Bottom Border */}
                    <div
                      className="h-1 rounded-full mt-4 transition-all duration-300"
                      style={{
                        background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
                        width: "0%",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute -left-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full transition-all hover:scale-110 z-20 hidden lg:flex"
            style={{
              background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
              color: colors.background,
            }}
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="absolute -right-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full transition-all hover:scale-110 z-20 hidden lg:flex"
            style={{
              background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
              color: colors.background,
            }}
          >
            →
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {technologies.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className="transition-all duration-300"
              style={{
                width: currentIndex === idx ? "32px" : "10px",
                height: "10px",
                borderRadius: "5px",
                background:
                  currentIndex === idx
                    ? `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`
                    : `${colors.primary}40`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
