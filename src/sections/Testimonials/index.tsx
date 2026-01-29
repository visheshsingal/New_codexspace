import { TestimonialHeader } from "@/sections/Testimonials/components/TestimonialHeader";
import { TestimonialCard } from "@/sections/Testimonials/components/TestimonialCard";
import { testimonials } from "./data";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-32 bg-stone-50 overflow-hidden" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header with Navigation */}
        <TestimonialHeader onPrev={handlePrev} onNext={handleNext} />

        {/* Testimonials Carousel */}
        <div className="relative w-full min-h-[500px] md:min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full"
            >
              <TestimonialCard testimonial={testimonials[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
