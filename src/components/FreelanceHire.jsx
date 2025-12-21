import colors from "../themes/colors";
import { useEffect } from "react";
import { getImageUrl } from "../utils/imageImporter";
import AOS from 'aos';
import 'aos/dist/aos.css';
const FreelanceHire = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);
  return (
    <div className="relative -mt-24 z-20">
      {/* Background Image Section */}
      <section
        className="py-32 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('src/assets/images/bg_1.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          {/* Content */}
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-5xl lg:text-6xl font-extrabold mb-6" data-aos="fade-up">
              <span style={{ color: colors.mutedText }}>I'm </span>
              <span
                style={{
                  background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Available
              </span>
              <span style={{ color: colors.mutedText }}> for freelancing</span>
            </h2>

            <p
              className="text-lg lg:text-xl max-w-3xl mx-auto mb-10"
              style={{ color: "#e0e0e0" }} data-aos="fade-up"
            >
              I am available for freelance web development projects, ready to bring your ideas to life with
              expertise and creativity. Let's collaborate and create something amazing together.
            </p>

            {/* CTA Button */}
            <button
              className="px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl"
              style={{
                background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
                color: colors.background,
              }} data-aos="fade-up"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Decorative Background Elements */}
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
      </section>
    </div>
  );
};

export default FreelanceHire;
