import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../themes/colors";
import appProjects from "../data/AppProjects.json";
import websiteProjects from "../data/WebProjects.json";
import { getImageUrl } from "../utils/imageImporter";
import AOS from 'aos';
import 'aos/dist/aos.css';



const AllProjects = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("apps");
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
      className="min-h-screen py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl font-extrabold mb-4"
            style={{
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }} data-aos="fade-up"
          >
            All Projects
          </h1>
          <p style={{ color: colors.mutedText }} className="text-lg" data-aos="fade-up">
            Explore my complete portfolio of projects
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-16">
          {[
            { key: "apps", label: "App Projects" },
            { key: "websites", label: "Website Projects" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="px-8 py-3 rounded-xl font-semibold transition-all transform hover:scale-105"
              style={{
                background:
                  activeTab === tab.key
                    ? `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`
                    : "transparent",
                color: activeTab === tab.key ? colors.background : colors.primary,
                border: `2px solid ${colors.primary}`,
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* APP PROJECTS TAB */}
        {activeTab === "apps" && (
          <div className="animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {appProjects.apps.map((app) => (
                <div
                  key={app.id}
                  className="rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
                  style={{
                    background: `rgba(240, 248, 255, 0.05)`,
                    border: `1px solid ${colors.primary}30`,
                    backdropFilter: "blur(10px)",
                  }} data-aos="flip-left"
                >
                  {/* Image at Top */}
                  <div className="relative h-56 overflow-hidden group">
                    <img
                      src={getImageUrl(app.image)}
                      alt={app.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
                      }}
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ color: colors.primary }}
                    >
                      {app.title}
                    </h3>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {app.tags.slice(0, 4).map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-full text-xs font-medium border"
                          style={{
                            background: "rgba(255, 255, 255, 0.08)",
                            color: colors.primary,
                            borderColor: `${colors.primary}40`,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* First 3 Description Points */}
                    <ul className="text-sm mb-6 space-y-1" style={{ color: "#ccc" }}>
                      {app.descriptionPoints.slice(0, 3).map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span style={{ color: colors.primary }}>•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Detail Button */}
                    <button
                      onClick={() => navigate(`/project/app/${app.id}`)}
                      className="w-full py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
                        color: colors.background,
                      }}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WEBSITE PROJECTS TAB */}
        {activeTab === "websites" && (
          <div className="animate-fadeIn">
            {/* Regular Projects Grid */}
            <div>
              <h3
                className="text-2xl font-bold mb-8"
                style={{ color: colors.primary }}
              >
                Featured Websites
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {websiteProjects.projects.map((project) => (
                  <div
                    key={project.id}
                    className="rounded-2xl overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
                    style={{
                      background: `rgba(240, 248, 255, 0.05)`,
                      border: `1px solid ${colors.primary}30`,
                      backdropFilter: "blur(10px)",
                    }} data-aos="flip-left"
                  >
                    {/* Image at Top */}
                    <div className="relative h-56 overflow-hidden group">
                      <img
                        src={getImageUrl(project.image)}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity"
                        style={{
                          background: `linear-gradient(135deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
                        }}
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Title */}
                      <h3
                        className="text-xl font-bold mb-3"
                        style={{ color: colors.primary }}
                      >
                        {project.title}
                      </h3>

                      {/* Category */}
                      {project.category && (
                        <p
                          className="text-xs font-medium mb-3 px-3 py-1 rounded-full inline-block"
                          style={{
                            background: `${colors.primary}20`,
                            color: colors.primary,
                          }}
                        >
                          {project.category}
                        </p>
                      )}

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 4).map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 rounded-full text-xs font-medium border"
                            style={{
                              background: "rgba(255, 255, 255, 0.08)",
                              color: colors.primary,
                              borderColor: `${colors.primary}40`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* First 3 Features */}
                      <ul className="text-sm mb-6 space-y-1" style={{ color: "#ccc" }}>
                        {project.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span style={{ color: colors.primary }}>•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Detail Button */}
                      <button
                        onClick={() => navigate(`/project/web/${project.id}`)}
                        className="w-full py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                        style={{
                          background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
                          color: colors.background,
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Full Stack Projects */}
            {websiteProjects.fullStackProjects && websiteProjects.fullStackProjects.length > 0 && (
              <div data-aos="flip-left">
                <h3
                  className="text-2xl font-bold mb-8"
                  style={{ color: colors.primary }}
                >
                  Full-Stack Projects
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {websiteProjects.fullStackProjects.map((project) => (
                    <div
                      key={project.id}
                      className="rounded-2xl overflow-hidden transition-all hover:scale-105 cursor-pointer"
                      style={{
                        background: `rgba(240, 248, 255, 0.05)`,
                        border: `1px solid ${colors.primary}30`,
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {/* Image at Top */}
                      <div className="relative h-56 overflow-hidden group">
                        <img
                          src={getImageUrl(project.image)}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div
                          className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity"
                          style={{
                            background: `linear-gradient(135deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
                          }}
                        />
                      </div>

                      {/* Card Content */}
                      <div className="p-6">
                        <h4
                          className="text-2xl font-bold mb-2"
                          style={{ color: colors.primary }}
                        >
                          {project.title}
                        </h4>
                        <p className="text-sm font-medium mb-4" style={{ color: "#aaa" }}>
                          {project.subtitle}
                        </p>

                        <p className="mb-6 leading-relaxed line-clamp-3" style={{ color: "#ddd" }}>
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.slice(0, 4).map((tag, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs rounded-full"
                              style={{
                                background: `${colors.primary}20`,
                                color: colors.primary,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <button
                          onClick={() => navigate(`/project/fullstack/${project.id}`)}
                          className="py-2 px-4 rounded-lg font-semibold text-sm transition-all"
                          style={{
                            background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
                            color: colors.background,
                          }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section >
  );
};

export default AllProjects;
