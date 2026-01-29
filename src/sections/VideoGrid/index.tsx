import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Process Data ---
const processSteps = [
  {
    number: "01",
    title: "Discover",
    description: "We analyze your business, competitors, and market opportunities to create a strategic foundation."
  },
  {
    number: "02",
    title: "Define",
    description: "Clear objectives, target audience, and success metrics are established for measurable results."
  },
  {
    number: "03",
    title: "Design",
    description: "Creative solutions and user experiences that align with your brand and business goals."
  },
  {
    number: "04",
    title: "Develop",
    description: "Agile development process with regular updates and quality assurance at every stage."
  },
  {
    number: "05",
    title: "Deploy",
    description: "Strategic launch with comprehensive testing, optimization, and performance monitoring."
  },
  {
    number: "06",
    title: "Deliver",
    description: "Ongoing support, analytics, and optimization to ensure sustained growth and ROI."
  }
];

export const VideoGrid = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !ctaRef.current || !backgroundRef.current) return;

    const section = sectionRef.current;
    const cta = ctaRef.current;
    const background = backgroundRef.current;
    const processItems = section.querySelectorAll('.process-item');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=4000',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Calculate which step should be active based on scroll progress
          const progress = self.progress;
          const stepIndex = Math.min(Math.floor(progress * 8), 6);
          setActiveStep(stepIndex);
        }
      },
    });

    // First, show the main CTA
    tl.to(cta, {
      opacity: 1,
      duration: 0.5,
    })
      .to(cta, {
        opacity: 1,
        duration: 1,
      })
      .to(cta, {
        opacity: 0,
        duration: 0.5,
      })
      // Transition background
      .to(background, {
        backgroundColor: '#fafaf9',
        duration: 1,
      }, '-=0.3');

    // Animate each process item sliding up
    processItems.forEach((item, index) => {
      tl.to(item, {
        y: '0%',
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
      }, index === 0 ? '-=0.3' : '-=0.3');
    });

    // Hold at the end
    tl.to({}, { duration: 0.5 });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-black text-[15.1297px] box-border caret-transparent h-screen tracking-[-0.302594px] leading-[21.1816px] overflow-hidden md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-black transition-colors duration-1000"
      />

      {/* Main CTA - Our 6-D Process */}
      <div
        ref={ctaRef}
        className="absolute text-stone-50 text-[15.1297px] items-center box-border caret-transparent flex flex-col h-full justify-center tracking-[-0.302594px] leading-[21.1816px] mix-blend-difference text-center z-[50] inset-[0%] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] opacity-0"
      >
        <div className="text-[15.1297px] items-center box-border caret-transparent gap-x-[15.1297px] flex flex-col justify-start tracking-[-0.302594px] leading-[21.1816px] gap-y-[15.1297px] md:text-[15.2873px] md:gap-x-[22.9309px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:gap-y-[22.9309px]">
          <div className="text-[15.1297px] font-normal items-center box-border caret-transparent gap-x-[5.74929px] flex justify-start tracking-[-0.302594px] leading-[15.1297px] gap-y-[5.74929px] uppercase text-nowrap overflow-hidden md:text-[15.2873px] md:gap-x-[5.80917px] md:tracking-[-0.305746px] md:leading-[15.2873px] md:gap-y-[5.80917px]">
            <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[15.1297px] text-nowrap md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[15.2873px]">
              Our Methodology
            </div>
          </div>
          <h2 className="text-[37.8243px] box-border caret-transparent tracking-[-1.51297px] leading-[37.8243px] md:text-[80.2583px] md:tracking-[-3.21033px] md:leading-[80.2583px]">
            <span className="text-[37.8243px] box-border caret-transparent block tracking-[-1.51297px] leading-[37.8243px] mb-[-3.78243px] origin-[50%_100%] align-top w-full overflow-hidden pb-[3.78243px] md:text-[80.2583px] md:tracking-[-3.21033px] md:leading-[80.2583px] md:mb-[-8.02583px] md:pb-[8.02583px]">
              <span className="text-[37.8243px] box-border caret-transparent block tracking-[-1.51297px] leading-[37.8243px] md:text-[80.2583px] md:tracking-[-3.21033px] md:leading-[80.2583px]">
                Our 6-D
              </span>
            </span>
            <span className="text-[37.8243px] box-border caret-transparent block tracking-[-1.51297px] leading-[37.8243px] mb-[-3.78243px] origin-[50%_100%] align-top w-full overflow-hidden pb-[3.78243px] md:text-[80.2583px] md:tracking-[-3.21033px] md:leading-[80.2583px] md:mb-[-8.02583px] md:pb-[8.02583px]">
              <span className="text-[37.8243px] box-border caret-transparent block tracking-[-1.51297px] leading-[37.8243px] md:text-[80.2583px] md:tracking-[-3.21033px] md:leading-[80.2583px]">
                Process
              </span>
            </span>
          </h2>
          <p className="max-w-[500px] text-base md:text-lg opacity-80 mt-4">
            A proven methodology that ensures successful project delivery and measurable results.
          </p>
        </div>
      </div>

      {/* Process Grid */}
      <div className="absolute inset-0 text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] px-[15.1297px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[30.5746px]">
        <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] max-w-[1400px] h-full mx-auto md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
          <div className="relative h-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 py-16 md:py-24">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`process-item relative flex flex-col justify-between p-6 md:p-8 border border-neutral-200/20 rounded-lg backdrop-blur-sm transition-all duration-500 ${activeStep >= index + 1 ? 'bg-white/5' : 'bg-transparent'
                  }`}
                style={{
                  transform: 'translateY(100%)',
                  opacity: 0,
                }}
              >
                {/* Step Number */}
                <div className="flex flex-col gap-4">
                  <span className="text-5xl md:text-7xl font-light text-neutral-400/50">
                    {step.number}
                  </span>
                  <h3 className="text-xl md:text-2xl font-medium text-black">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-neutral-600 mt-4 leading-relaxed">
                  {step.description}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-neutral-300/50 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Dividers for aesthetic (hidden on mobile) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <div className="h-full max-w-[1400px] mx-auto grid grid-cols-3 gap-6 px-8">
          <div className="relative">
            <div className="absolute right-0 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-neutral-300/30 to-transparent" />
          </div>
          <div className="relative">
            <div className="absolute right-0 top-[10%] bottom-[10%] w-px bg-gradient-to-b from-transparent via-neutral-300/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};