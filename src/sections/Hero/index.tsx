import { motion } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const heroContainerRef = useRef<HTMLDivElement>(null);

  return (
    <header
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black"
      ref={heroContainerRef}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source
            src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/6790eb2f5ded350d9d7fa8b1_CreativeGiants_Hero_Showreel-transcode.mp4"
            type="video/mp4"
          />
        </video>
        {/* Deep, classy overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/80"></div>
      </div>

      {/* Main Content - Centered & Classy */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-6"
        >
          {/* Minimalist Intro */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/50 text-xs md:text-sm uppercase tracking-[0.4em] font-medium"
          >
            Digital Excellence Redefined
          </motion.span>

          {/* Premium Headline */}
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
            CodeXSpace<span className="text-white">.</span>
          </h1>

          {/* Elegant Tagline */}
          <p className="text-white/70 text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto leading-relaxed mt-4">
            We build <span className="text-white font-normal">strategic digital solutions</span> that transform brands and drive measurable growth.
          </p>

          {/* Simple but Premium CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-full font-semibold text-lg overflow-hidden transition-all hover:pr-14 hover:bg-red-600 hover:text-white"
            >
              <span>Work with us</span>
              <svg
                className="w-5 h-5 absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14m-7-7l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/30 text-[10px] uppercase tracking-[0.3em]">Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent"></div>
        </div>
      </motion.div>
    </header>
  );
};
