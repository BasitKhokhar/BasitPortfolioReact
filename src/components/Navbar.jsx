import { useState } from "react";
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
  const navigate = useNavigate();

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
      className="fixed top-0 left-0 w-full z-50"
      style={{
        backgroundColor: colors.background,
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={scrollToHome}
          className="text-2xl font-extrabold tracking-wide cursor-pointer hover:opacity-80 transition-opacity"
          style={{ color: colors.primary,background: "transparent", }}
        >
          B.Creatives
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="px-4 py-2 text-sm font-medium transition-all duration-300 relative group"
                style={{
                  color: activeSection === link.id ? colors.primary : "#999999",
                  background: "transparent",
                }}
              >
                {link.label}
                
                {/* Underline indicator */}
                <span
                  className="absolute bottom-0 left-0 h-1 rounded-full transition-all duration-300"
                  style={{
                    background: activeSection === link.id 
                      ? `linear-gradient(90deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.warmGold[1]})`
                      : "transparent",
                    width: activeSection === link.id ? "100%" : "0%",
                  }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl"
          style={{ color: colors.text }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="lg:hidden px-6 pb-6"
          style={{
            background: `linear-gradient(180deg, ${colors.gradients.dark.join(
              ", "
            )})`,
          }}
        >
          <ul className="flex flex-col space-y-2 pt-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <button
                  onClick={() => scrollToSection(link.id)}
                  className="block text-base font-medium w-full text-left px-4 py-2 rounded-lg transition-all duration-300 relative group"
                  style={{
                    color: activeSection === link.id ? colors.primary : "#999999",
                    background: "transparent",
                  }}
                >
                  {link.label}
                  
                  {/* Active indicator bar */}
                  {activeSection === link.id && (
                    <span
                      className="absolute left-0 top-0 h-full w-1 rounded-r-full"
                      style={{
                        background: `linear-gradient(180deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.warmGold[1]})`,
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Gradient Bottom Line */}
      <div
        className="h-0.5"
        style={{
          background: `linear-gradient(90deg, ${colors.primary}, transparent)`,
        }}
      />
    </nav>
  );
};

export default Navbar;

      
