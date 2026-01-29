import { SectionHeader } from "@/components/SectionHeader";
import { SectionContent } from "@/components/SectionContent";
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const WhatWeDo = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.animate-fade-in'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="text-black text-[15.1297px] bg-stone-50 box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
    >
      <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] px-[15.1297px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[30.5746px]">
        <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] max-w-[1815.56px] w-full mx-auto py-[60.5188px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:max-w-[1834.48px] md:py-[107.011px]">
          <div className="text-[15.1297px] box-border caret-transparent gap-x-[37.8243px] flex flex-col auto-cols-[1fr] grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[auto] tracking-[-0.302594px] leading-[21.1816px] gap-y-[37.8243px] md:text-[15.2873px] md:gap-x-[61.1492px] md:grid md:flex-row md:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] md:tracking-[-0.305746px] md:leading-[21.4022px] md:gap-y-[61.1492px]">
            <div className="animate-fade-in">
              <SectionHeader />
            </div>
            <div className="animate-fade-in">
              <SectionContent />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};