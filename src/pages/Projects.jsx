import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import colors from "../themes/colors";
import appProjects from "../data/AppProjects.json";
import websiteProjects from "../data/WebProjects.json";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { getImageUrl } from "../utils/imageImporter";
import AOS from 'aos';
import 'aos/dist/aos.css';



const Projects = () => {
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  // Combine projects from both JSON files
  const combinedProjects = [
    ...appProjects.apps.map((app) => ({ ...app, type: "app" })),
    ...websiteProjects.projects.map((web) => ({ ...web, type: "web" })),
  ];

  // Take first 6 projects (2 rows of 3)
  const displayProjects = combinedProjects.slice(0, 6);

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
      id="projects-section"
      className="min-h-screen py-20 relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${colors.background} 0%, #1a1a1a 100%)`,
      }}
    >
      {/* Animated Background */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl"
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
            }} data-aos="fade-up"
          >
            Projects
          </h1>

          {/* Foreground Heading */}
          <h2
            className="relative text-5xl font-extrabold mb-4"
            style={{
              background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",

            }} data-aos="fade-up"
          >
            My Projects
          </h2>
          <p
            className="relative max-w-2xl mx-auto"
            style={{
              color: colors.mutedText,

            }} data-aos="fade-up"
          >
            Explore my portfolio showcasing diverse projects highlighting creativity, functionality, and
            technical expertise.
          </p>
        </div>

        {/* Projects Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayProjects.map((project, idx) => (
            <div key={`${project.type}-${project.id}`} data-aos="flip-left">
              <div
                className="rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 hover:shadow-2xl h-full"
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
                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: colors.primary }}
                  >
                    {project.title}
                  </h3>

                  {/* Category Badge (for websites) */}
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

                  {/* Type Badge (app or web) */}
                  <p
                    className="text-xs font-medium mb-3 px-3 py-1 rounded-full inline-block"
                    style={{
                      background: project.type === "app" ? `${colors.primary}30` : `${colors.primary}20`,
                      color: colors.primary,
                    }}
                  >
                    {project.type === "app" ? "📱 App Project" : "🌐 Web Project"}
                  </p>

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

                  {/* First 3 Features/Description Points */}
                  <ul className="text-sm mb-6 space-y-1" style={{ color: "#ccc" }}>
                    {(project.descriptionPoints || project.features || []).slice(0, 3).map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span style={{ color: colors.primary }}>•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Detail Button */}
                  <button
                    onClick={() => setSelectedProject(project)}
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
            </div>
          ))}
        </div>

        {/* See All Button */}
        <div className="text-center" style={{ animation: "fadeInUp 1s ease-out 0.8s both" }}>
          <button
            onClick={() => navigate("/project/all")}
            className="px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-110 hover:shadow-2xl relative group overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
              color: colors.background,
            }}
          >
            <span className="relative z-10">See All Projects</span>
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"
              style={{
                background: `linear-gradient(135deg, ${colors.gradients.sunsetGold[0]}, ${colors.gradients.sunsetGold[1]})`,
              }}
            />
          </button>
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

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
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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

export default Projects;