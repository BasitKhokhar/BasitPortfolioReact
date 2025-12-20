import React, { useState,useEffect } from "react";

import colors from "../themes/colors";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Pricing = () => {
    
  const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: false, 
      mirror: false, 
    });
  }, []);
  
  const pricingPlans = [
    {
      title: "Basic",
      price: "$100",
      features: [
        "5 Pages",
        "upto 5 Sections",
        "Fully Responsive Static Websites",
        "Convert any design to functional Website",
        "7 Days Delivery",
        "Unlimited Revisions",
      ],
    },
    {
      title: "Standard",
      price: "$200",
      features: [
        "5 Pages upto 6 sections each",
        "Animated & Attractive UI",
        "Content Upload",
        "Deliver a Custom Functional Website",
        "10 Days Delivery",
        "Unlimited Revisions",
      ],
    },
    {
      title: "Premium",
      price: "$300",
      features: [
        "5 Pages upto 6 sections",
        "Animated & Attractive UI",
        "Content Upload",
        "Complete Business Website & Admin Panel",
        "14 Days Delivery",
        "Unlimited Revisions",
      ],
    },
  ];

  return (
    <section
      id="pricing-section"
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.background} 0%, #1a1a1a 100%)`,
      }}
    >
      {/* Animated Background */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
        style={{
          background: `radial-gradient(circle, ${colors.primary}, transparent)`,
          animation: "float 8s ease-in-out infinite",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="relative text-center mb-20 overflow-hidden">
          {/* Background Shadow Heading */}
          <h1
            className="absolute inset-0 flex items-center justify-center font-extrabold uppercase select-none pointer-events-none"
            style={{
              fontSize: "clamp(60px, 12vw, 120px)",
              color: "rgba(255,255,255,0.05)",
              letterSpacing: "12px",
            }} data-aos="fade-up"
          >
            Pricing
          </h1>

          {/* Foreground Heading */}
          <h2
            className="relative text-5xl font-extrabold mb-4"
            style={{
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}data-aos="fade-up"
          >
            Pricing Plans
          </h2>
          <p
            className="relative max-w-2xl mx-auto text-lg"
            style={{
              color: colors.mutedText,
            }}data-aos="fade-up"
          >
            View the pricing options for my services. Custom deals can be made, so contact me for such
            deals.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 transform"
              style={{
                background: hoveredCard === index ? colors.primary : "#1a1a1a",
                border: `1px solid rgba(${parseInt(colors.primary.slice(1, 3), 16)}, ${parseInt(colors.primary.slice(3, 5), 16)}, ${parseInt(colors.primary.slice(5, 7), 16)}, 0.2)`,
                animation: `slideInUp 0.8s ease-out ${0.2 + index * 0.1}s backwards`,
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              data-aos="flip-left"
            >
              <div className="p-8">
                {/* Title */}
                <h3
                  className="text-2xl font-bold mb-6 text-center transition-colors duration-300"
                  style={{
                    color: hoveredCard === index ? "#1a1a1a" : colors.primary,
                  }}
                >
                  {plan.title}
                </h3>

                {/* Features List */}
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, featureIdx) => (
                    <li
                      key={featureIdx}
                      className="flex items-start text-sm md:text-base transition-colors duration-300"
                      style={{
                        color: hoveredCard === index ? "#1a1a1a" : colors.text,
                      }}
                    >
                      <span
                        className="mr-3 mt-1 flex-shrink-0 transition-colors duration-300"
                        style={{
                          color: hoveredCard === index ? "#1a1a1a" : colors.primary,
                        }}
                      >
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="text-center mb-6">
                  <h4
                    className="text-4xl font-bold transition-colors duration-300"
                    style={{
                      color: hoveredCard === index ? "#1a1a1a" : colors.primary,
                    }}
                  >
                    {plan.price}
                  </h4>
                </div>

                {/* Button */}
                <a
                  href="#contact-section"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById("contact-section")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full py-3 px-6 rounded-lg font-semibold transition-all transform hover:scale-105 text-center cursor-pointer block relative group overflow-hidden"
                  style={{
                    background: hoveredCard === index ? "#1a1a1a" : `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
                    color: hoveredCard === index ? colors.primary : colors.background,
                    border: hoveredCard === index ? `2px solid #1a1a1a` : "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  <span className="relative z-10">Order Now</span>
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
                    style={{
                      background: `linear-gradient(135deg, ${colors.gradients.sunsetGold[0]}, ${colors.gradients.sunsetGold[1]})`,
                    }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
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
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(20px);
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;
