import colors from "../themes/colors";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);
  return (
    <footer
      style={{ backgroundColor: colors.background }}
      className="py-12 border-t"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8" data-aos="fade-up">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>
              Basit Tech Solutions
            </h3>
            <p style={{ color: colors.mutedText }}>
              This is my portfolio where I showcase my expertise in Web & App development. Explore a
              collection of projects that emphasize creativity, usability, and technology
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  style={{ color: colors.mutedText, background: "transparent", }}
                  className="hover:text-yellow-400 transition-colors text-left"
                >
                  ➜ Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about-section")}
                  style={{ color: colors.mutedText, background: "transparent", }}
                  className="hover:text-yellow-400 transition-colors text-left"
                >
                  ➜ About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services-section")}
                  style={{ color: colors.mutedText, background: "transparent", }}
                  className="hover:text-yellow-400 transition-colors text-left"
                >
                  ➜ Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("projects-section")}
                  style={{ color: colors.mutedText, background: "transparent", }}
                  className="hover:text-yellow-400 transition-colors text-left"
                >
                  ➜ Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact-section")}
                  style={{ color: colors.mutedText, background: "transparent", }}
                  className="hover:text-yellow-400 transition-colors text-left"
                >
                  ➜ Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("services-section")}
                  style={{ color: colors.mutedText, background: "transparent", }}
                  className="hover:text-yellow-400 transition-colors text-left"
                >
                  ➜ Web Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services-section")}
                  style={{ color: colors.mutedText, background: "transparent", }}
                  className="hover:text-yellow-400 transition-colors text-left"
                >
                  ➜ Web Designing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services-section")}
                  style={{ color: colors.mutedText, background: "transparent", }}
                  className="hover:text-yellow-400 transition-colors text-left"
                >
                  ➜ React Native
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services-section")}
                  style={{ color: colors.mutedText, background: "transparent", }}
                  className="hover:text-yellow-400 transition-colors text-left"
                >
                  ➜ UI/UX Design
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li style={{ color: colors.mutedText, background: "transparent", }}>
                📍 Sargodha, Pakistan
              </li>
              <li>
                <a
                  href="tel:+923060760549"
                  style={{ color: colors.mutedText, background: "transparent", }}
                  className="hover:text-yellow-400 transition-colors"
                >
                  📞 +92306-0760549
                </a>
              </li>
              <li>
                <a
                  href="mailto:basitkhokhar957@gmail.com"
                  style={{ color: colors.mutedText, background: "transparent", }}
                  className="hover:text-yellow-400 transition-colors break-all"
                >
                  ✉️ basitkhokhar957@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="pt-8 text-center"
          style={{ borderColor: colors.border, borderTop: `1px solid ${colors.border}` }}
        >
          <p style={{ color: colors.mutedText, fontWeight: 'bold' }}>
            Copyright © 2024 All rights reserved by{" "}
            <span style={{ color: colors.primary, fontWeight: 'bolder', fontSize: 18 }}>Basit Tech Solutions</span>
          </p>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923154949862"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full flex items-center justify-center text-2xl hover:scale-110 transition-transform"
        style={{
          backgroundColor: colors.primary,
          color: colors.background,
          zIndex: 1000,
        }}
        aria-label="Chat on WhatsApp"
      >
        💬
      </a>
    </footer>
  );
};

export default Footer;
