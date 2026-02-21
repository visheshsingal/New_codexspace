import { motion } from 'framer-motion';
import { useRef } from 'react';

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
            {/* Simple text for stability */}
            <div className="text-white text-[16vw] md:text-[12vw] lg:text-[9vw] xl:text-[8vw] font-black uppercase tracking-tight leading-[0.85]">
              Codex
            </div>
            <div className="text-white/70 text-[7vw] md:text-[5vw] lg:text-[4vw] font-bold tracking-[0.3em] uppercase -mt-1 md:-mt-2">
              Space
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
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light leading-snug mb-6 max-w-2xl"
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
            {/* Primary CTA - White */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, backgroundColor: '#f5f5f5' }}
              whileTap={{ scale: 0.97 }}
              className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center"
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
            </motion.a>

            {/* Secondary CTA - Outline */}
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
              whileTap={{ scale: 0.97 }}
              className="border border-white/40 text-white px-8 py-4 rounded-full font-medium text-base md:text-lg hover:border-white/70 transition-all duration-300 backdrop-blur-sm inline-flex items-center"
            >
              View Our Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#what-we-do"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 right-8 z-20 cursor-pointer"
        whileHover={{ scale: 1.1 }}
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
      </motion.a>

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
