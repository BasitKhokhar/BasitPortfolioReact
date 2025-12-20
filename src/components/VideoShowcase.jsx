import colors from "../themes/colors";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const VideoShowcase = () => {
  useEffect(() => {
  AOS.init({
    duration: 1000, 
    easing: 'ease-in-out',
    once: false, 
    mirror: false, 
  });
}, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <section data-aos="flip-up"
        className="w-full max-w-4xl px-4 py-12 rounded-2xl"
        style={{ backgroundColor: colors.background }}
      >
        <div className="w-full flex items-center justify-center">
          {/* Video Container */}
          <div
            className="relative lg:h-96 md:h-72 sm:h-52 rounded-2xl overflow-hidden shadow-2xl"
            style={{ aspectRatio: "16 / 9", border: `2px solid ${colors.primary}40` }}
          >
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              controls
            >
              <source
                src="/src/assets/videos/Portfolio video.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideoShowcase;
