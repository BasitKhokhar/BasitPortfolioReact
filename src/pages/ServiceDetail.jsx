import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import servicesData from "../data/servicesData.json";
import colors from "../themes/colors";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const foundService = servicesData.find(s => s.id === id);
    if (foundService) {
      setService(foundService);
    } else {
      navigate("/"); // Redirect if service not found
    }
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (!service) return null;

  return (
    <div className="min-h-screen bg-black pt-32 pb-20 relative overflow-hidden">
      <Helmet>
        <title>{`${service.title} | Basit Khokhar Services`}</title>
        <meta name="description" content={service.shortDesc} />
        <meta property="og:title" content={`${service.title} | Basit Khokhar Services`} />
        <meta property="og:description" content={service.shortDesc} />
      </Helmet>
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 animate-pulse"
        style={{ background: `radial-gradient(circle, ${colors.primary}, transparent)` }}
      />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] opacity-5"
        style={{ background: `radial-gradient(circle, ${colors.primary}, transparent)` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center gap-2 mb-12 text-sm font-bold uppercase tracking-widest transition-all hover:gap-4" style={{ color: colors.primary }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </Link>

        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left: Visuals (Service Title Iconography) */}
          <div className="w-full lg:w-1/3" data-aos="zoom-in">
            <div className="relative group p-12 rounded-[3rem] aspect-square flex items-center justify-center overflow-hidden"
              style={{
                background: `rgba(255, 255, 255, 0.03)`,
                border: `1px solid rgba(255, 193, 7, 0.2)`,
                backdropFilter: "blur(20px)"
              }}
            >
              <div className="text-[10rem] select-none filter drop-shadow-[0_0_20px_rgba(255,193,7,0.4)] relative z-10">
                {/* We'll use a generic icon or the first letter since we don't have SVGs in JSON yet */}
                <span className="font-black" style={{ color: colors.primary }}>{service.title.charAt(0)}</span>
              </div>

              {/* Spinning Glow */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-1000"
                style={{ background: `conic-gradient(from 0deg, transparent, ${colors.primary}, transparent)` }}
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-2/3">
            <div className="mb-8" data-aos="fade-up">
              <span className="text-sm font-bold uppercase tracking-[0.3em] mb-4 block" style={{ color: colors.primary }}>
                Professional Service
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8">
                {service.title}
              </h1>
              <div className="w-32 h-2 rounded-full mb-10" style={{ background: colors.primary }} />
              <p className="text-xl leading-relaxed mb-12" style={{ color: colors.mutedText }}>
                {service.fullDesc}
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="200">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: `${colors.primary}20` }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={colors.primary} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span className="font-bold text-white text-lg">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16" data-aos="fade-up" data-aos-delay="400">
              <Link to="/#contact-section" className="inline-flex items-center gap-4 px-12 py-5 rounded-full font-black text-xl transition-all duration-500 hover:scale-105"
                style={{ background: colors.primary, color: colors.background }}
              >
                Start Your Project
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
