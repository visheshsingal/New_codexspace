import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web & App Development",
    description: "Custom websites and mobile apps that drive conversions and user engagement.",
    icon: "01",
    color: "bg-[#E0F7FA] text-cyan-900" // Light Cyan
  },
  {
    title: "SEO & Content Marketing",
    description: "Data-driven SEO strategies and compelling content that ranks and converts.",
    icon: "02",
    color: "bg-[#F3E5F5] text-purple-900" // Light Purple
  },
  {
    title: "Social Media Marketing",
    description: "Strategic SMM campaigns that build brand awareness and drive engagement.",
    icon: "03",
    color: "bg-[#FFF3E0] text-orange-900" // Light Orange
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI integration for automation and intelligent decision-making.",
    icon: "04",
    color: "bg-[#E8F5E9] text-green-900" // Light Green
  },
  {
    title: "Podcast Production",
    description: "Professional podcast creation and distribution to amplify your brand voice.",
    icon: "05",
    color: "bg-[#FFEBEE] text-red-900" // Light Red
  },
  {
    title: "Financial Consulting",
    description: "Strategic financial planning and investment guidance for business growth.",
    icon: "06",
    color: "bg-[#E1F5FE] text-sky-900" // Light Sky Blue
  }
];

export const NewsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.service-card');

    // Animate cards on scroll
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=80',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.1,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-black bg-stone-50 overflow-hidden pt-12 pb-24 md:pb-32"
      id="services-section"
    >
      <div className="relative z-10 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Clean Professional Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-black/60">Services</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-normal tracking-tight text-neutral-900 leading-tight">
                Our suite of <span className="font-semibold">digital services</span> to help your business grow.
              </h2>
            </div>
            <div className="md:pb-2">
              <p className="text-lg text-neutral-500 max-w-sm leading-relaxed">
                We combine strategy, design, and technology to deliver results that matter.
              </p>
            </div>
          </div>

          {/* Grid Layout */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card group relative rounded-3xl p-10 border border-transparent hover:border-black/5 hover:shadow-lg transition-all duration-500 ${service.color}`}
              >
                {/* Number & Title */}
                <div className="mb-8">
                  <div className="text-sm font-bold opacity-40 mb-4 group-hover:opacity-100 transition-opacity duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                </div>

                <p className="opacity-70 leading-relaxed mb-10 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>

                {/* Refined Link */}
                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all duration-300"
                  >
                    <span>Read More</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Simple Professional CTA */}
          <div className="mt-20 flex flex-col items-center text-center">
            <div className="h-px w-20 bg-black/10 mb-12" />
            <h3 className="text-2xl md:text-3xl font-medium mb-8">Ready to start your next project?</h3>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-10 py-4 bg-black text-white rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-lg shadow-black/5"
              >
                Get in touch
              </a>
              <a
                href="#"
                className="px-10 py-4 border border-black/10 rounded-full hover:border-black transition-all duration-300"
              >
                Learn about us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};