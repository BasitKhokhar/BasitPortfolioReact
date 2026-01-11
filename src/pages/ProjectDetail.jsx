import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import colors from "../themes/colors";
import appProjects from "../data/AppProjects.json";
import websiteProjects from "../data/WebProjects.json";
import { getImageUrl } from "../utils/imageImporter";

const ProjectDetail = () => {
    const { type, id } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);
    const [imageSliderIndex, setImageSliderIndex] = useState(0);
    const [screenshotSliderIndex, setScreenshotSliderIndex] = useState(0);

    useEffect(() => {
        let foundProject = null;
        const projectId = parseInt(id);

        if (type === "app") {
            foundProject = appProjects.apps.find((app) => app.id === projectId);
        } else if (type === "web") {
            foundProject = websiteProjects.projects.find((web) => web.id === projectId);
        } else if (type === "fullstack") {
            foundProject = websiteProjects.fullStackProjects.find((fs) => fs.id === projectId);
        } else if (type === "featured") {
            foundProject = websiteProjects.featured.find((f) => f.id === projectId);
        }

        if (foundProject) {
            setProject(foundProject);
            // Reset sliders when project changes
            setImageSliderIndex(0);
            setScreenshotSliderIndex(0);
            window.scrollTo(0, 0);
        } else {
            // If project not found, redirect to home or all projects
            navigate("/project/all");
        }
    }, [type, id, navigate]);

    if (!project) return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: colors.background }}>
            <div className="text-2xl" style={{ color: colors.primary }}>Loading project details...</div>
        </div>
    );

    const hasImages = project.images && project.images.length > 0;
    const hasScreenshots = project.screenshots && project.screenshots.length > 0;
    const descriptionItems = project.descriptionPoints || project.features || [];

    // Determine project type and orientation
    const isAppProject = type === "app";
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
        <div className="min-h-screen pt-24 pb-12" style={{ backgroundColor: colors.background }}>
            <Helmet>
                <title>{project.title} | B.Creatives</title>
                <meta name="description" content={project.description || project.subtitle} />

                {/* OG Tags */}
                <meta property="og:title" content={`${project.title} - Full Stack Project`} />
                <meta property="og:description" content={project.description || project.subtitle} />
                <meta property="og:image" content={new URL(getImageUrl(project.image), window.location.origin).href} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="article" />

                {/* Twitter Tags */}
                <meta name="twitter:title" content={project.title} />
                <meta name="twitter:description" content={project.description || project.subtitle} />
                <meta name="twitter:image" content={new URL(getImageUrl(project.image), window.location.origin).href} />
            </Helmet>
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center gap-2 px-6 py-2 rounded-xl transition-all hover:scale-105"
                    style={{ background: colors.primary, color: colors.background }}
                >
                    ← Back
                </button>

                <div
                    className="rounded-3xl overflow-hidden relative shadow-2xl"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.03)",
                        border: `1px solid ${colors.primary}30`,
                    }}
                >
                    <div className="flex flex-col lg:flex-row gap-12 p-8 lg:p-12">
                        {/* LEFT SIDE - Project Details */}
                        <div className="flex-1">
                            {/* Main Image */}
                            <div className="mb-8 rounded-2xl overflow-hidden bg-gray-900/50 p-2 border border-white/5 shadow-inner">
                                <img
                                    src={getImageUrl(project.image)}
                                    alt={project.title}
                                    className="w-full h-auto object-contain rounded-xl"
                                    style={{ maxHeight: "500px" }}
                                />
                            </div>

                            {/* Title */}
                            <h1
                                className="text-4xl lg:text-5xl font-extrabold mb-6"
                                style={{
                                    background: `linear-gradient(90deg, ${colors.primary}, ${colors.gradients.warmGold[1]})`,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                {project.title}
                            </h1>

                            {/* Subtitle if exists */}
                            {project.subtitle && (
                                <p className="text-xl font-medium mb-6" style={{ color: "#aaa" }}>
                                    {project.subtitle}
                                </p>
                            )}

                            {/* Category if exists */}
                            {project.category && (
                                <p
                                    className="text-sm font-semibold mb-6 px-4 py-1.5 rounded-full inline-block"
                                    style={{
                                        background: `${colors.primary}20`,
                                        color: colors.primary,
                                        border: `1px solid ${colors.primary}40`,
                                    }}
                                >
                                    {project.category}
                                </p>
                            )}

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2.5 mb-8">
                                {project.tags?.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-1.5 rounded-full text-sm font-medium border"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.05)",
                                            color: colors.primary,
                                            borderColor: `${colors.primary}40`,
                                        }}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Description */}
                            {project.description && (
                                <div className="mb-10">
                                    <h3 className="text-xl font-bold mb-4" style={{ color: colors.primary }}>Description</h3>
                                    <p
                                        className="text-lg leading-relaxed"
                                        style={{ color: "#bbb" }}
                                    >
                                        {project.description}
                                    </p>
                                </div>
                            )}

                            {/* Description Points / Features */}
                            {descriptionItems.length > 0 && (
                                <div className="mb-10">
                                    <h3
                                        className="text-xl font-bold mb-4"
                                        style={{ color: colors.primary }}
                                    >
                                        {project.descriptionPoints ? "Key Features & Details" : "Features"}
                                    </h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ color: "#ccc" }}>
                                        {descriptionItems.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                                                <span
                                                    className="text-xl flex-shrink-0"
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

                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
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
                                        className="flex-1 py-4 px-8 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 text-center shadow-lg"
                                        style={{
                                            background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
                                            color: colors.background,
                                        }}
                                    >
                                        📱 Download APK
                                    </button>
                                )}

                                {/* Preview Link if exists */}
                                {(project.previewLink || project.url || project.projectUrl) && (
                                    <a
                                        href={project.previewLink || project.url || project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-4 px-8 rounded-xl font-bold transition-all transform hover:scale-105 active:scale-95 text-center shadow-lg"
                                        style={{
                                            background: `linear-gradient(135deg, ${colors.gradients.goldGlow[0]}, ${colors.gradients.goldGlow[1]})`,
                                            color: colors.background,
                                        }}
                                    >
                                        {isAppProject ? "👁️ View Project Demo" : "👁️ Preview Live Website"}
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* RIGHT SIDE - Images & Screenshots Sliders */}
                        <div className="w-full lg:w-[45%] flex flex-col gap-10">
                            {/* IMAGES Gallery - Top */}
                            {hasImages && (
                                <div className="flex flex-col">
                                    <h3
                                        className="text-xl font-bold mb-6"
                                        style={{ color: colors.primary }}
                                    >
                                        Gallery
                                    </h3>

                                    <div
                                        className="relative rounded-2xl overflow-hidden mb-6 group shadow-2xl"
                                        style={{
                                            background: `rgba(0,0,0,0.3)`,
                                            border: `1px solid ${colors.primary}30`,
                                            aspectRatio: "16/10",
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
                                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all active:scale-90 z-10 shadow-lg"
                                            style={{
                                                background: colors.primary,
                                                color: colors.background,
                                            }}
                                        >
                                            ←
                                        </button>
                                        <button
                                            onClick={nextImage}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all active:scale-90 z-10 shadow-lg"
                                            style={{
                                                background: colors.primary,
                                                color: colors.background,
                                            }}
                                        >
                                            →
                                        </button>

                                        {/* Image Counter */}
                                        <div
                                            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg"
                                            style={{
                                                background: `${colors.primary}dd`,
                                                color: colors.background,
                                                backdropFilter: "blur(5px)",
                                            }}
                                        >
                                            {imageSliderIndex + 1} / {project.images.length}
                                        </div>
                                    </div>

                                    {/* Thumbnail Slider */}
                                    <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                                        {project.images.map((img, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setImageSliderIndex(i)}
                                                className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-md"
                                                style={{
                                                    border:
                                                        i === imageSliderIndex
                                                            ? `3px solid ${colors.primary}`
                                                            : `2px solid transparent`,
                                                    background: `rgba(255,255,255,0.05)`,
                                                }}
                                            >
                                                <img
                                                    src={getImageUrl(img)}
                                                    alt={`Thumbnail ${i + 1}`}
                                                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
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
                                        className="text-xl font-bold mb-6 flex items-center gap-2"
                                        style={{ color: colors.primary }}
                                    >
                                        <span>📸</span> Screenshots
                                    </h3>

                                    <div
                                        className={`relative rounded-3xl overflow-hidden mb-6 group shadow-2xl ${screenshotOrientation === "portrait" ? "max-w-[280px] mx-auto" : "w-full"
                                            }`}
                                        style={{
                                            background: `rgba(0,0,0,0.3)`,
                                            border: `1px solid ${colors.primary}30`,
                                            aspectRatio: screenshotOrientation === "portrait" ? "9/19" : "16/9",
                                        }}
                                    >
                                        {/* Main Screenshot */}
                                        <img
                                            src={getImageUrl(project.screenshots[screenshotSliderIndex])}
                                            alt={`App Screenshot ${screenshotSliderIndex + 1}`}
                                            className="w-full h-full object-cover"
                                        />

                                        {/* Navigation Buttons */}
                                        <button
                                            onClick={prevScreenshot}
                                            className={`absolute ${screenshotOrientation === "portrait" ? "-left-14" : "left-4"} top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all active:scale-90 z-10 shadow-lg`}
                                            style={{
                                                background: colors.primary,
                                                color: colors.background,
                                            }}
                                        >
                                            ←
                                        </button>
                                        <button
                                            onClick={nextScreenshot}
                                            className={`absolute ${screenshotOrientation === "portrait" ? "-right-14" : "right-4"} top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-all active:scale-90 z-10 shadow-lg`}
                                            style={{
                                                background: colors.primary,
                                                color: colors.background,
                                            }}
                                        >
                                            →
                                        </button>

                                        {/* Screenshot Counter */}
                                        <div
                                            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-sm font-bold shadow-lg"
                                            style={{
                                                background: `${colors.primary}dd`,
                                                color: colors.background,
                                                backdropFilter: "blur(5px)",
                                            }}
                                        >
                                            {screenshotSliderIndex + 1} / {project.screenshots.length}
                                        </div>
                                    </div>

                                    {/* Screenshot Thumbnail Slider */}
                                    <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                                        {project.screenshots.map((screenshot, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setScreenshotSliderIndex(i)}
                                                className={`flex-shrink-0 rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-md ${screenshotOrientation === "portrait"
                                                    ? "w-14 h-24"
                                                    : "w-24 h-14"
                                                    }`}
                                                style={{
                                                    border:
                                                        i === screenshotSliderIndex
                                                            ? `3px solid ${colors.primary}`
                                                            : `2px solid transparent`,
                                                    background: `rgba(255,255,255,0.05)`,
                                                }}
                                            >
                                                <img
                                                    src={getImageUrl(screenshot)}
                                                    alt={`Screenshot Thumbnail ${i + 1}`}
                                                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Videos Section */}
                    {project.videos && project.videos.length > 0 && (
                        <div className="px-8 lg:px-12 pb-12">
                            <h3
                                className="text-2xl font-bold mb-8 flex items-center gap-3"
                                style={{ color: colors.primary }}
                            >
                                <span className="text-3xl">🎥</span> Project Videos
                            </h3>

                            <div
                                className={`grid gap-8
                  ${isAppProject
                                        ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                                        : "grid-cols-1 lg:grid-cols-2"
                                    }
             `}
                            >
                                {project.videos.map((video, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col gap-4 rounded-2xl p-4 transition-all hover:bg-white/5 border border-white/5"
                                        style={{
                                            background: "rgba(255,255,255,0.02)",
                                        }}
                                    >
                                        <h5 className="font-bold text-white text-base">
                                            {video.title}
                                        </h5>

                                        <div className="relative rounded-xl overflow-hidden shadow-xl" style={{ border: `1px solid ${colors.primary}20` }}>
                                            <video
                                                controls
                                                className="w-full h-full"
                                                style={{
                                                    aspectRatio: isAppProject ? "9 / 16" : "16 / 9",
                                                    objectFit: "cover",
                                                    backgroundColor: "#000",
                                                }}
                                            >
                                                <source src={getImageUrl(video.file)} type="video/mp4" />
                                            </video>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Custom scrollbar for some containers */
        .custom-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: ${colors.primary}80;
          border-radius: 10px;
        }
        .custom-scroll::-webkit-scrollbar-thumb:hover {
          background: ${colors.primary};
        }
      `}</style>
        </div>
    );
};

export default ProjectDetail;
