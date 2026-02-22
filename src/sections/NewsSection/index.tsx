import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const newsItems = [
  {
    title: "The Future of Web Design in 2025",
    description: "Exploring the shift towards immersive 3D experiences and minimalist AI-driven interfaces.",
    date: "Feb 15, 2025",
    category: "Design",
    color: "bg-[#E0F7FA] text-cyan-900"
  },
  {
    title: "AI Integration in Marketing",
    description: "How machine learning is revolutionizing lead generation and personalized customer journeys.",
    date: "Feb 10, 2025",
    category: "Technology",
    color: "bg-[#F3E5F5] text-purple-900"
  },
  {
    title: "The Art of Strategic Branding",
    description: "Building deep emotional connections with your audience through purposeful brand storytelling.",
    date: "Feb 05, 2025",
    category: "Branding",
    color: "bg-[#FFF3E0] text-orange-900"
  }
];

export const NewsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll('.news-card');

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
      id="news"
    >
      <div className="relative z-10 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">

          {/* Clean Professional Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-1.5 bg-black rounded-full" />
                <span className="text-xs uppercase tracking-[0.2em] font-bold text-black/60">Insights</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-normal tracking-tight text-neutral-900 leading-tight">
                Latest from our <span className="font-semibold">studio & industry</span> perspective.
              </h2>
            </div>
            <div className="md:pb-2">
              <p className="text-lg text-neutral-500 max-w-sm leading-relaxed">
                Stay updated with the latest trends, news, and deep dives from our creative team.
              </p>
            </div>
          </div>

          {/* Grid Layout */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {newsItems.map((item, index) => (
              <div
                key={index}
                className={`news-card group relative rounded-3xl p-10 border border-transparent hover:border-black/5 hover:shadow-xl transition-all duration-500 ${item.color}`}
              >
                {/* Category & Date */}
                <div className="mb-8 flex justify-between items-center">
                  <div className="text-xs font-bold uppercase tracking-widest opacity-60">
                    {item.category}
                  </div>
                  <div className="text-xs opacity-40">
                    {item.date}
                  </div>
                </div>

                <h3 className="text-2xl font-semibold tracking-tight mb-6">
                  {item.title}
                </h3>

                <p className="opacity-70 leading-relaxed mb-10 group-hover:opacity-100 transition-opacity duration-500">
                  {item.description}
                </p>

                {/* Refined Link */}
                <div className="mt-auto">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all duration-300"
                  >
                    <span>Read Article</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Simple Professional CTA */}
          <div className="mt-20 flex flex-col items-center text-center">
            <div className="h-px w-20 bg-black/10 mb-12" />
            <h3 className="text-2xl md:text-3xl font-medium mb-8">Want to learn more about our work?</h3>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-10 py-4 bg-black text-white rounded-full hover:bg-neutral-800 transition-all duration-300 shadow-lg shadow-black/5"
              >
                View Case Studies
              </a>
              <a
                href="#contact"
                className="px-10 py-4 border border-black/10 rounded-full hover:border-black transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};