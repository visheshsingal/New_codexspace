import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Web & App Development",
    description: "Custom websites and mobile apps that drive conversions and user engagement.",
    icon: "01"
  },
  {
    title: "SEO & Content Marketing",
    description: "Data-driven SEO strategies and compelling content that ranks and converts.",
    icon: "02"
  },
  {
    title: "Social Media Marketing",
    description: "Strategic SMM campaigns that build brand awareness and drive engagement.",
    icon: "03"
  },
  {
    title: "AI Solutions",
    description: "Cutting-edge AI integration for automation and intelligent decision-making.",
    icon: "04"
  },
  {
    title: "Podcast Production",
    description: "Professional podcast creation and distribution to amplify your brand voice.",
    icon: "05"
  },
  {
    title: "Financial Consulting",
    description: "Strategic financial planning and investment guidance for business growth.",
    icon: "06"
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
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
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
      className="relative text-black bg-stone-50 overflow-hidden py-20 md:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 px-4 md:px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">

          {/* Header Section */}
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-black/20 rounded-full">
              <div className="w-2 h-2 bg-black rounded-full" />
              <span className="text-sm uppercase tracking-wider font-medium">Our Services</span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight mb-6">
              Comprehensive
              <span className="block font-medium">
                Digital Solutions
              </span>
            </h2>

            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              From web development to AI integration, we provide end-to-end digital solutions that drive growth and deliver measurable results.
            </p>
          </div>

          {/* Services Grid */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group relative bg-white rounded-2xl p-8 md:p-10 border border-neutral-200 hover:border-black transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2"
              >
                {/* Icon Number */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-2xl font-light group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl md:text-2xl font-medium mb-4 group-hover:text-black transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-black group-hover:gap-4 transition-all duration-300"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-black opacity-[0.03] rounded-bl-[100px] rounded-tr-2xl group-hover:opacity-[0.08] transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 md:mt-24">
            <div className="inline-flex items-center gap-6 flex-wrap justify-center">
              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full hover:bg-neutral-800 transition-colors duration-300 group"
              >
                <span className="font-medium">View All Services</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-black border-2 border-black rounded-full hover:bg-black hover:text-white transition-all duration-300"
              >
                <span className="font-medium">Get a Quote</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};