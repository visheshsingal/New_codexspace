import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { testimonials } from './data';

export const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Multiply testimonials to create infinite loop effect
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-20 md:py-32 bg-stone-50 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center md:text-left">
        <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
          <div className="w-2 h-2 rounded-full bg-black"></div>
          <span className="text-sm md:text-base font-medium uppercase tracking-widest text-black/60">Kind Words</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-normal tracking-tight text-neutral-900 leading-tight max-w-3xl">
          What our <span className="font-semibold italic">clients say</span> about CodeXSpace.
        </h2>
      </div>

      {/* Auto-sliding round cards container */}
      <div className="relative flex overflow-hidden py-10">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{ x: [0, -1500] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }
          }}
          style={{ width: "fit-content" }}
        >
          {extendedTestimonials.map((item, index) => (
            <div
              key={index}
              className="inline-block"
            >
              <div
                className={`w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full flex flex-col items-center justify-center text-center p-8 md:p-12 transition-all duration-500 hover:scale-105 border border-black/5 shadow-xl ${item.color} ${item.textColor}`}
              >
                <div className="mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="opacity-40">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V14M3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V14" />
                  </svg>
                </div>

                <p className="text-sm md:text-base font-medium leading-relaxed mb-6 italic whitespace-normal line-clamp-4">
                  "{item.text}"
                </p>

                <div className="mt-2">
                  <div className="font-bold text-sm md:text-base uppercase tracking-tighter">
                    {item.name}
                  </div>
                  <div className="text-[10px] md:text-xs opacity-70 font-semibold uppercase tracking-widest mt-1">
                    {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Gradient overlays for smooth fading effect */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-stone-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-stone-50 to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};
