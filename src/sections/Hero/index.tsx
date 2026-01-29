import { motion } from 'framer-motion';
import { useRef } from 'react';
import TextCursorProximity from '@/components/ui/text-cursor-proximity';

export const Hero = () => {
  const heroContainerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      ref={heroContainerRef}
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/6790eb2f5ded350d9d7fa8b1_CreativeGiants_Hero_Showreel-transcode.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.prod.website-files.com/678fc13a6195245eefbb1f34/6790eb2f5ded350d9d7fa8b1_CreativeGiants_Hero_Showreel-transcode.webm"
            type="video/webm"
          />
        </video>
        {/* Clean dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
      </div>

      {/* Main Content Container */}
      <div className="absolute bottom-0 left-0 z-20 p-6 md:p-12 lg:p-16 max-w-5xl">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white"
        >
          {/* Large Company Name with Cursor Proximity Effect */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5, ease: 'easeOut' }}
            className="mb-6 md:mb-10 relative"
          >
            {/* Codex text with proximity effect */}
            <div className="relative z-10 leading-none">
              <TextCursorProximity
                label="Codex"
                className="hero-company-name block text-[18vw] md:text-[14vw] lg:text-[12vw] xl:text-[10vw] 2xl:text-[9vw] font-black will-change-transform cursor-default"
                styles={{
                  transform: {
                    from: "scale(1)",
                    to: "scale(1.12)",
                  },
                  color: {
                    from: "#ffffff",
                    to: "#e5e5e5"
                  },
                  textShadow: {
                    from: "0 4px 20px rgba(0,0,0,0.4), 0 8px 40px rgba(0,0,0,0.3)",
                    to: "0 0 60px rgba(255,255,255,0.4), 0 0 100px rgba(255,255,255,0.2), 0 4px 20px rgba(0,0,0,0.4)"
                  }
                }}
                falloff="gaussian"
                radius={120}
                containerRef={heroContainerRef as React.RefObject<HTMLDivElement>}
              />

              {/* Space text - elegant positioning */}
              <TextCursorProximity
                label="Space"
                className="hero-company-name block text-[8vw] md:text-[6vw] lg:text-[5vw] xl:text-[4.5vw] 2xl:text-[4vw] font-bold tracking-[0.3em] will-change-transform cursor-default -mt-1 md:-mt-2"
                styles={{
                  transform: {
                    from: "scale(1)",
                    to: "scale(1.08)",
                  },
                  color: {
                    from: "#a3a3a3",
                    to: "#ffffff"
                  },
                  textShadow: {
                    from: "0 2px 10px rgba(0,0,0,0.3)",
                    to: "0 0 40px rgba(255,255,255,0.3), 0 0 80px rgba(255,255,255,0.15)"
                  }
                }}
                falloff="gaussian"
                radius={100}
                containerRef={heroContainerRef as React.RefObject<HTMLDivElement>}
              />
            </div>

            {/* Decorative accent line - white */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 1.5, ease: 'easeOut' }}
              className="h-[1px] md:h-[2px] bg-gradient-to-r from-white via-white/60 to-transparent w-full max-w-md mt-4 md:mt-6 origin-left"
            />
          </motion.div>

          {/* Location Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mb-6 md:mb-8"
          >
            <span className="inline-flex items-center gap-2 text-sm md:text-base font-light uppercase tracking-[0.2em] text-white/70">
              <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              Gurugram, India
            </span>
          </motion.div>

          {/* Main Tagline */}
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-xl md:text-3xl lg:text-4xl xl:text-5xl font-light leading-tight mb-6 max-w-2xl"
          >
            <span className="font-medium text-white">Transform</span>{' '}
            <span className="text-white/70">Your Brand with</span>{' '}
            <span className="font-medium text-white">Strategic Digital Solutions</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-sm md:text-base lg:text-lg text-white/60 mb-8 md:mb-10 leading-relaxed max-w-lg"
          >
            Empowering businesses with cutting-edge digital solutions that drive growth, enhance brand presence, and deliver measurable ROI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="flex flex-wrap gap-4"
          >
            {/* Primary CTA - White */}
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: '#f5f5f5' }}
              whileTap={{ scale: 0.97 }}
              className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span className="flex items-center gap-3">
                Get Started Today
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
              </span>
            </motion.button>

            {/* Secondary CTA - Outline */}
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.97 }}
              className="border border-white/40 text-white px-8 py-4 rounded-full font-medium text-base md:text-lg hover:border-white/70 transition-all duration-300 backdrop-blur-sm"
            >
              View Our Work
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
        <p className="text-white/40 text-xs mt-2 text-center tracking-widest uppercase">Scroll</p>
      </motion.div>

      {/* Decorative Elements - Right Side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.2 }}
        className="absolute top-1/2 right-12 transform -translate-y-1/2 z-10 hidden lg:flex flex-col items-center gap-4"
      >
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      </motion.div>

      {/* Corner Accent - Top Right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 2 }}
        className="absolute top-8 right-8 z-10 hidden md:block"
      >
        <div className="w-20 h-20 border border-white/10 rounded-lg rotate-45"></div>
        <div className="absolute top-2 left-2 w-16 h-16 border border-white/5 rounded-lg rotate-45"></div>
      </motion.div>
    </motion.header>
  );
};
