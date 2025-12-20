import colors from "../themes/colors";

const VideoShowcase = () => {
  return (
    <div style={{ background: `rgba(240, 248, 255, 0.068)` }}>
      <section
        className="container mx-auto my-8 px-4 py-12 rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${colors.primary}15, ${colors.gradients.warmGold[1]}15)`,
          border: `2px solid ${colors.primary}40`,
        }}
      >
        <div className="flex items-center justify-center">
          <div className="w-full max-w-4xl">
            {/* Section Title */}
            <h2
              className="text-3xl md:text-4xl font-bold text-center mb-8"
              style={{ color: colors.primary }}
            >
              📹 Portfolio Video
            </h2>

            {/* Video Container */}
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "16 / 9" }}>
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                controls
                style={{
                  border: `2px solid ${colors.primary}40`,
                }}
              >
                <source src="/src/assets/videos/Portfolio video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoShowcase;
