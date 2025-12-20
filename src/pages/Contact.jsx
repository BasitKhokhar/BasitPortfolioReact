import colors from "../themes/colors";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: "📍",
      title: "Address",
      content: "Sargodha, Pakistan",
    },
    {
      icon: "📞",
      title: "Contact Number",
      content: "+92306-0760549",
      link: "tel:+923060760549",
    },
    {
      icon: "✉️",
      title: "Email Address",
      content: "basitkhokhar957@gmail.com",
      link: "mailto:basitkhokhar957@gmail.com",
    },
    {
      icon: "🌐",
      title: "Website",
      content: "https://basitportfolioweb.netlify.app",
      link: "https://basitportfolioweb.netlify.app",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section
      id="contact-section"
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.background} 0%, #1a1a1a 100%)`,
      }}
    >
      {/* Animated Background */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${colors.primary}, transparent)`,
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        {/* ================= HEADING ================= */}
        <div className="relative text-center mb-20 overflow-hidden">
          {/* Background Shadow Heading */}
          <h1
            className="absolute inset-0 flex items-center justify-center font-extrabold uppercase select-none pointer-events-none"
            style={{
              fontSize: "clamp(60px, 12vw, 120px)",
              color: "rgba(255,255,255,0.05)",
              letterSpacing: "12px",
            }}
          >
            Contact
          </h1>

          {/* Foreground Heading */}
          <h2
            className="relative text-5xl font-extrabold mb-4"
            style={{
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "slideInUp 0.8s ease-out",
            }}
          >
            Contact Me
          </h2>
          <p
            className="relative max-w-2xl mx-auto"
            style={{
              color: colors.mutedText,
              animation: "slideInUp 0.8s ease-out 0.2s backwards",
            }}
          >
            Contact me to explore opportunities for creating innovative web solutions that resonate with your
            audience.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-2xl transition-all transform hover:scale-110 hover:shadow-2xl group relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${colors.gradients.dark[0]}, ${colors.gradients.dark[1]})`,
                border: `2px solid ${colors.primary}30`,
                animation: `slideInUp 0.8s ease-out ${idx * 0.1}s`,
              }}
            >
              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}20, ${colors.gradients.sunsetGold[1]}20)`,
                }}
              />

              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-gray-400 hover:text-yellow-400 transition-colors break-all text-sm"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p style={{ color: colors.mutedText }} className="text-sm">
                    {info.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Form */}
          <div
            className="p-8 rounded-2xl relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${colors.gradients.dark[0]}, ${colors.gradients.dark[1]})`,
              border: `2px solid ${colors.primary}30`,
              animation: "slideInLeft 0.8s ease-out 0.2s both",
            }}
          >
            {/* Background Gradient */}
            <div
              className="absolute inset-0 opacity-100"
              style={{
                background: `linear-gradient(135deg, rgba(255,193,7,0.05), rgba(249,158,11,0.05))`,
              }}
            />

            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
              <div className="space-y-2">
                <label style={{ color: colors.primary }} className="text-sm font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                  style={{
                    borderColor: colors.primary + "40",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: colors.text,
                    focusRingColor: colors.primary,
                  }}
                  required
                />
              </div>

              <div className="space-y-2">
                <label style={{ color: colors.primary }} className="text-sm font-semibold">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                  style={{
                    borderColor: colors.primary + "40",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: colors.text,
                  }}
                  required
                />
              </div>

              <div className="space-y-2">
                <label style={{ color: colors.primary }} className="text-sm font-semibold">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2"
                  style={{
                    borderColor: colors.primary + "40",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: colors.text,
                  }}
                  required
                />
              </div>

              <div className="space-y-2">
                <label style={{ color: colors.primary }} className="text-sm font-semibold">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Enter your message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border transition-all focus:outline-none focus:ring-2 resize-none"
                  style={{
                    borderColor: colors.primary + "40",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: colors.text,
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 rounded-xl font-bold transition-all transform hover:scale-105 hover:shadow-2xl relative group overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
                  color: colors.background,
                }}
              >
                <span className="relative z-10">Send Message</span>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, ${colors.gradients.sunsetGold[0]}, ${colors.gradients.sunsetGold[1]})`,
                  }}
                />
              </button>
            </form>
          </div>

          {/* Image */}
          <div
            className="rounded-2xl overflow-hidden h-full"
            style={{
              animation: "slideInRight 0.8s ease-out 0.2s both",
              boxShadow: `0 0 40px ${colors.primary}40`,
              border: `2px solid ${colors.primary}20`,
            }}
          >
            <img
              src="/src/assets/images/basit.png"
              alt="Contact"
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(20px); }
        }
      `}</style>
    </section>
  );
};

export default Contact;

