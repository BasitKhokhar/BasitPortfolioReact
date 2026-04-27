import colors from "../themes/colors";
import contactImage from "../assets/images/basit.png";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      ),
      title: "Address",
      content: "Sargodha, Pakistan",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      ),
      title: "Contact Number",
      content: "+92306-0760549",
      link: "tel:+923060760549",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      title: "Email Address",
      content: "basitkhokhar957@gmail.com",
      link: "mailto:basitkhokhar957@gmail.com",
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      title: "Website",
      content: "basitportfolioweb.netlify.app",
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
    });
  }, []);


  return (
    <section
      id="contact-section"
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: "transparent",
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
            CONTACT
          </h1>

          {/* Foreground Heading */}
          <h2 className="relative text-5xl md:text-7xl font-black mb-6" data-aos="zoom-in">
            <span style={{ 
              background: `linear-gradient(to right, #fff, ${colors.primary})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>
              Get In Touch
            </span>
          </h2>
          <div className="w-24 h-1.5 mx-auto rounded-full mb-8" style={{ background: colors.primary }} />
          <p className="relative max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: colors.mutedText }} data-aos="fade-up">
            Let's discuss your next project. I'm always open to new opportunities, 
            collaborations, or just a friendly chat about technology.
          </p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="group relative p-8 rounded-[2rem] text-center transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden shadow-2xl"
              style={{
                background: `rgba(255, 255, 255, 0.02)`,
                border: `1px solid rgba(255, 255, 255, 0.05)`,
                backdropFilter: "blur(10px)"
              }}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Glow Background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `radial-gradient(circle at center, ${colors.primary}10, transparent 70%)` }}
              />

              <div className="relative z-10 flex flex-col items-center">
                {/* Icon Container */}
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl"
                  style={{ 
                    background: `rgba(0,0,0,0.3)`, 
                    border: `1px solid ${colors.primary}30`,
                    color: colors.primary
                  }}
                >
                  {info.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                  {info.title}
                </h3>

                {info.link ? (
                  <a
                    href={info.link}
                    className="text-sm font-medium transition-colors break-all"
                    style={{ color: colors.mutedText }}
                    onMouseEnter={(e) => e.target.style.color = colors.primary}
                    onMouseLeave={(e) => e.target.style.color = colors.mutedText}
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="text-sm font-medium" style={{ color: colors.mutedText }}>
                    {info.content}
                  </p>
                )}
              </div>

              {/* Decorative Accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] group-hover:w-full transition-all duration-700"
                style={{ background: colors.primary }}
              />
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

            }} data-aos="fade-up"
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
              boxShadow: `0 0 40px ${colors.primary}40`,
              border: `2px solid ${colors.primary}20`,
            }} data-aos="fade-up"
          >
            <img
              src={contactImage}
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

