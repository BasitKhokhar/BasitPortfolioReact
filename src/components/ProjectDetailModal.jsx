import { useState } from "react";
import colors from "../themes/colors";
import { getImageUrl } from "../utils/imageImporter";

const ProjectDetailModal = ({ project, isOpen, onClose }) => {
  const [imageSliderIndex, setImageSliderIndex] = useState(0);
  const [screenshotSliderIndex, setScreenshotSliderIndex] = useState(0);

  if (!isOpen || !project) return null;

  const hasImages = project.images && project.images.length > 0;
  const hasScreenshots = project.screenshots && project.screenshots.length > 0;
  const descriptionItems = project.descriptionPoints || project.features || [];

  // Determine project type and orientation
  const isAppProject = project.descriptionPoints !== undefined; // App projects use descriptionPoints
  const screenshotOrientation = isAppProject ? "portrait" : "landscape";

  const nextImage = () => {
    if (hasImages) {
      setImageSliderIndex((prev) => (prev + 1) % project.images.length);
    }
  };

  const prevImage = () => {
    if (hasImages) {
      setImageSliderIndex(
        (prev) => (prev - 1 + project.images.length) % project.images.length
      );
    }
  };

  const nextScreenshot = () => {
    if (hasScreenshots) {
      setScreenshotSliderIndex((prev) => (prev + 1) % project.screenshots.length);
    }
  };

  const prevScreenshot = () => {
    if (hasScreenshots) {
      setScreenshotSliderIndex(
        (prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length
      );
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.85)" }}
      onClick={onClose}
    >
      <div
        className="rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto relative"
        style={{
          backgroundColor: colors.background,
          border: `2px solid ${colors.primary}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center rounded-full transition-all hover:scale-110"
          style={{ background: colors.primary, color: colors.background }}
        >
          ✕
        </button>

        <div className="flex flex-col lg:flex-row gap-8 p-8">
          {/* LEFT SIDE - Project Details */}
          <div className="flex-1 lg:w-[50%]">
            {/* Main Image */}
            <div className="mb-8 rounded-2xl overflow-hidden bg-gray-900">
              <img
                src={getImageUrl(project.image)}
                alt={project.title}
                className="w-full h-auto object-contain"
                style={{ maxHeight: "400px" }}
              />
            </div>

            {/* Title */}
            <h2
              className="text-3xl font-bold mb-4"
              style={{ color: colors.primary }}
            >
              {project.title}
            </h2>

            {/* Subtitle if exists */}
            {project.subtitle && (
              <p className="text-lg font-medium mb-4" style={{ color: "#aaa" }}>
                {project.subtitle}
              </p>
            )}

            {/* Category if exists */}
            {project.category && (
              <p
                className="text-sm font-medium mb-4 px-3 py-1 rounded-full inline-block"
                style={{
                  background: `${colors.primary}20`,
                  color: colors.primary,
                }}
              >
                {project.category}
              </p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-sm font-medium border"
                  style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    color: colors.primary,
                    borderColor: `${colors.primary}60`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            {project.description && (
              <p
                className="text-lg leading-relaxed mb-8"
                style={{ color: "#ddd" }}
              >
                {project.description}
              </p>
            )}

            {/* Description Points / Features */}
            {descriptionItems.length > 0 && (
              <div className="mb-8">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: colors.primary }}
                >
                  {project.descriptionPoints ? "Key Features & Details" : "Features"}
                </h3>
                <ul className="space-y-0" style={{ color: "#ccc" }}>
                  {descriptionItems.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className="text-xl mt-0 flex-shrink-0"
                        style={{ color: colors.primary }}
                      >
                        ✓
                      </span>
                      <span className="text-base leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {/* Download APK Button if exists */}
            {project.apklink && (
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = getImageUrl(project.apklink);
                  link.download = `${project.title}.apk`;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="w-full py-3 px-8 rounded-xl font-semibold transition-all transform hover:scale-105 text-center"
                style={{
                  background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
                  color: colors.background,
                }}
              >
                📱 Download APK to Check App
              </button>
            )}

            {/* Preview Link if exists */}
            {(project.previewLink || project.url || project.projectUrl) && (
              <div className="mt-4">
                <a
                  href={project.previewLink || project.url || project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block py-3 px-8 rounded-xl font-semibold transition-all transform hover:scale-105 text-center"
                  style={{
                    background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
                    color: colors.background,
                  }}
                >
                  {isAppProject ? "👁️ View Project Demo" : "👁️ Preview Live Website"}
                </a>
              </div>
            )}
          </div>

          {/* RIGHT SIDE - Images & Screenshots Sliders */}
          <div className="w-full lg:w-[50%] flex flex-col gap-8">
            {/* IMAGES Gallery - Top */}
            {hasImages && (
              <div className="flex flex-col">
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: colors.primary }}
                >
                  Gallery
                </h3>

                <div
                  className="relative flex-1 rounded-2xl overflow-hidden mb-4 group"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}20, ${colors.gradients.warmGold[1]}20)`,
                    border: `2px solid ${colors.primary}40`,
                    minHeight: "280px",
                  }}
                >
                  {/* Main Slider Image */}
                  <img
                    src={getImageUrl(project.images[imageSliderIndex])}
                    alt={`Screenshot ${imageSliderIndex + 1}`}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    style={{
                      background: colors.primary,
                      color: colors.background,
                    }}
                  >
                    ←
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    style={{
                      background: colors.primary,
                      color: colors.background,
                    }}
                  >
                    →
                  </button>

                  {/* Image Counter */}
                  <div
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      background: `${colors.primary}80`,
                      color: colors.background,
                    }}
                  >
                    {imageSliderIndex + 1} / {project.images.length}
                  </div>
                </div>

                {/* Thumbnail Slider */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setImageSliderIndex(i)}
                      className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all hover:scale-110"
                      style={{
                        border:
                          i === imageSliderIndex
                            ? `3px solid ${colors.primary}`
                            : `2px solid ${colors.primary}40`,
                      }}
                    >
                      <img
                        src={getImageUrl(img)}
                        alt={`Thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* SCREENSHOTS Slider - Bottom */}
            {hasScreenshots && (
              <div className="flex flex-col">
                <h3
                  className="text-xl text-center font-bold mb-4"
                  style={{ color: colors.primary }}
                >
                  📸 Screenshots
                </h3>

                <div
                  className={`relative flex-1 rounded-2xl mb-4 group ${screenshotOrientation === "portrait" ? "max-w-sm mx-auto" : ""
                    }`}
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}20, ${colors.gradients.warmGold[1]}20)`,
                    border: `2px solid ${colors.primary}40`,
                    minHeight: screenshotOrientation === "portrait" ? "400px" : "350px",
                    width: screenshotOrientation === "portrait" ? "250px" : "100%",
                  }}
                >
                  {/* Main Screenshot */}
                  <img
                    src={getImageUrl(project.screenshots[screenshotSliderIndex])}
                    alt={`App Screenshot ${screenshotSliderIndex + 1}`}
                    className="w-full h-full object-cover"
                    style={{
                      objectFit: screenshotOrientation === "portrait" ? "cover" : "cover",
                    }}
                  />

                  {/* Navigation Buttons */}
                  <button
                    onClick={prevScreenshot}
                    className="absolute left-[-20%] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    style={{
                      background: colors.primary,
                      color: colors.background,
                    }}
                  >
                    ←
                  </button>
                  <button
                    onClick={nextScreenshot}
                    className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    style={{
                      background: colors.primary,
                      color: colors.background,
                    }}
                  >
                    →
                  </button>

                  {/* Screenshot Counter */}
                  <div
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      background: `${colors.primary}80`,
                      color: colors.background,
                    }}
                  >
                    {screenshotSliderIndex + 1} / {project.screenshots.length}
                  </div>
                </div>

                {/* Screenshot Thumbnail Slider */}
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {project.screenshots.map((screenshot, i) => (
                    <button
                      key={i}
                      onClick={() => setScreenshotSliderIndex(i)}
                      className={`flex-shrink-0 rounded-lg overflow-hidden transition-all hover:scale-110 ${screenshotOrientation === "portrait"
                        ? "w-12 h-20"
                        : "w-16 h-16"
                        }`}
                      style={{
                        border:
                          i === screenshotSliderIndex
                            ? `3px solid ${colors.primary}`
                            : `2px solid ${colors.primary}40`,
                      }}
                    >
                      <img
                        src={getImageUrl(screenshot)}
                        alt={`Screenshot Thumbnail ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        {/* Videos Section */}
        <div className=" pl-10">
          {project.videos && project.videos.length > 0 && (
            <div className="mb-8">
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: colors.primary }}
              >
                Project Videos
              </h3>

              <div
                className={`grid gap-6
                  ${isAppProject
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    : "grid-cols-1 lg:grid-cols-2"
                  }
             `}
              >

                {project.videos.map((video, i) => (
                  <div
                    key={i}
                    className="flex flex-col gap-2 rounded-2xl p-3"
                    style={{
                      border: `1px solid ${colors.primary}40`,
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <h5 className="font-semibold text-white text-sm">
                      {video.title}
                    </h5>

                    <video
                      controls
                      className="rounded-xl w-full"
                      style={{
                        aspectRatio: isAppProject ? "9 / 16" : "16 / 9",
                        objectFit: "contain",
                        backgroundColor: "#000",
                        border: `1px solid ${colors.primary}40`,
                      }}
                    >
                      <source src={getImageUrl(video.file)} type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>

      <style>{`
        /* Scrollbar styling for modal */
        div::-webkit-scrollbar {
          width: 8px;
        }
        
        div::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        
        div::-webkit-scrollbar-thumb {
          background: ${colors.primary};
          border-radius: 4px;
        }
        
        div::-webkit-scrollbar-thumb:hover {
          background: ${colors.primary}dd;
        }
      `}</style>
    </div>
  );
};

export default ProjectDetailModal;
