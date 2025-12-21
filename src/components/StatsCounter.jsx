import { useState, useEffect, useRef } from "react";
import colors from "../themes/colors";
import AOS from 'aos';
import 'aos/dist/aos.css';
const StatsCounter = () => {
  const stats = [
    { number: 2, label: "Awards" },
    { number: 15, label: "Complete Projects" },
    { number: 10, label: "Happy Customers" },
    { number: 300, label: "Cups of Coffee" },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);
  const isVisibleRef = useRef(false);
  const animationTimeoutRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });



    const observer = new IntersectionObserver(
      (entries) => {
        const isCurrentlyVisible = entries[0].isIntersecting;

        if (isCurrentlyVisible && !isVisibleRef.current) {
          // Section just became visible - start animation
          isVisibleRef.current = true;
          startCounters();
        } else if (!isCurrentlyVisible && isVisibleRef.current) {
          // Section just became hidden - reset visibility flag
          isVisibleRef.current = false;
          // Clear any pending timeout
          if (animationTimeoutRef.current) {
            clearTimeout(animationTimeoutRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, []);

  const startCounters = () => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animateCounters = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const newCounters = stats.map((stat) => {
        return Math.floor(stat.number * progress);
      });

      setCounters(newCounters);

      if (progress < 1) {
        requestAnimationFrame(animateCounters);
      } else {
        setCounters(stats.map((stat) => stat.number));
      }
    };

    requestAnimationFrame(animateCounters);
  };

  return (
    <section
      ref={sectionRef}
      className="py-10 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.background} 0%, #1a1a1a 100%)`,
      }}
    >
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
          background: `radial-gradient(circle, ${colors.gradients.warmGold[0]}, transparent)`,
          animation: "float 8s ease-in-out infinite 2s",
        }}
      />

      <div className="container mx-auto px-6 max-w-7xl relative z-50">
        {/* Grid of Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-8 text-center transform transition-all duration-300 hover:scale-105"
              style={{
                background: `rgba(240, 248, 255, 0.05)`,
                border: `2px solid ${colors.primary}30`,
                backdropFilter: "blur(10px)",

              }} data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              {/* Counter Number */}
              <div className="mb-4">
                <div
                  className="text-6xl font-extrabold"
                  style={{
                    background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {counters[idx]}
                  <span style={{ color: colors.primary }}>+</span>
                </div>
              </div>

              {/* Label */}
              <p
                className="text-lg font-semibold"
                style={{ color: colors.mutedText }}
              >
                {stat.label}
              </p>

              {/* Bottom Accent */}
              <div
                className="h-1 rounded-full mt-6 mx-auto"
                style={{
                  width: "60%",
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Optional: Decorative Element */}

      </div>
    </section>
  );
};

export default StatsCounter;
