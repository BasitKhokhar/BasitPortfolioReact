import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../themes/colors";

const navLinks = [
  { label: "Home", id: "home-section" },
  { label: "About", id: "about-section" },
  { label: "Resume", id: "resume-section" },
  { label: "Services", id: "services-section" },
  { label: "Skills", id: "skills-section" },
  { label: "Projects", id: "projects-section" },
  { label: "Contact", id: "contact-section" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home-section");
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  const scrollToHome = () => {
    setActiveSection("home-section");
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${isScrolled ? "py-4" : "py-4"
        }`}
      style={{
        backgroundColor: isScrolled ? "rgba(0, 0, 0, 0.7)" : "transparent",
        backdropFilter: isScrolled ? "blur(15px)" : "none",
        borderBottom: isScrolled ? `1px solid ${colors.primary}20` : "none",
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={scrollToHome}
          className="text-2xl font-extrabold tracking-tight cursor-pointer group flex items-center gap-2"
          style={{ background: "transparent" }}
        >
          <span
            style={{
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.goldGlow[1]})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Basit
          </span>
          <span className="text-white group-hover:text-primary transition-colors duration-300">
            Tech Solutions
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center px-2 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm">
          <ul className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="px-5 py-2 text-sm font-bold transition-all duration-300 relative group"
                  style={{
                    color: activeSection === link.id ? colors.primary : "#bfbfbf",
                    background: "transparent",
                  }}
                >
                  <span className="relative z-10">{link.label}</span>

                  {/* Bubble effect for active/hover link */}
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-300 -z-0 ${activeSection === link.id ? "opacity-100 scale-100" : "opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100"
                      }`}
                    style={{
                      background: `${colors.primary}15`,
                    }}
                  />
                  {/* Dot indicator */}
                  {activeSection === link.id && (
                    <span
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full shadow-[0_0_10px_#ffc107]"
                      style={{ backgroundColor: colors.primary }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-xl transition-all"
          style={{
            color: colors.text,
            background: isScrolled ? "rgba(255,255,255,0.05)" : "transparent",
            border: isScrolled ? "1px solid rgba(255,255,255,0.1)" : "none"
          }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <div className={`w-6 h-0.5 bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-x-0 top-full lg:hidden transition-all duration-500 overflow-hidden ${open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        style={{
          background: "rgba(0, 0, 0, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: `1px solid ${colors.primary}20`,
        }}
      >
        <ul className="flex flex-col space-y-2 p-8 pt-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="block text-xl font-bold w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 relative overflow-hidden"
                style={{
                  color: activeSection === link.id ? colors.primary : "#ffffff",
                  background: activeSection === link.id ? "rgba(255,193,7,0.1)" : "transparent",
                }}
              >
                {link.label}
                {activeSection === link.id && (
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 rounded-r-full"
                    style={{ backgroundColor: colors.primary }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;


