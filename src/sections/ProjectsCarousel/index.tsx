import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Project Data ---
const projects = [
  {
    number: "Project 01",
    title: "Indus group of Institution",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=800&fit=crop",
    tags: ["Education", "Campus", "Innovation"],
    description: "A state-of-the-art educational facility fostering innovation and learning excellence through modern infrastructure."
  },
  {
    number: "Project 02",
    title: "Policicue",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=800&fit=crop",
    tags: ["Technology", "Global", "Strategy", "Future"],
    description: "Revolutionizing policy and strategy through advanced technological solutions and data-driven insights."
  },
  {
    number: "Project 03",
    title: "Frd Nutrition",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=800&fit=crop",
    tags: ["Health", "Nutrition", "Organic", "Wellness"],
    description: "Premium organic nutrition solutions designed for a healthier and more balanced lifestyle."
  }
];

// --- Main Component ---

export const ProjectsCarousel = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentProject, setCurrentProject] = useState(1);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const section = sectionRef.current;
    const container = containerRef.current;
    const projectPanels = gsap.utils.toArray<HTMLElement>('.project-panel');

    // Calculate the total width to scroll
    const totalWidth = (projectPanels.length - 1) * window.innerWidth;

    // Create the horizontal scroll animation
    const scrollTween = gsap.to(projectPanels, {
      xPercent: -100 * (projectPanels.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projectPanels.length - 1),
          duration: { min: 0.2, max: 0.5 },
          ease: 'power1.inOut'
        },
        end: () => `+=${totalWidth}`,
        onUpdate: (self) => {
          const progress = self.progress;
          const projectIndex = Math.round(progress * (projectPanels.length - 1)) + 1;
          setCurrentProject(projectIndex);
        }
      },
    });

    // Handle resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scrollTween.scrollTrigger?.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black text-white h-screen overflow-hidden"
    >
      <div
        ref={containerRef}
        className="flex h-full w-full"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-panel flex-shrink-0 w-screen h-full flex items-center justify-center px-8 md:px-16 lg:px-24"
          >
            <div className="grid grid-cols-12 gap-6 w-full max-w-[1400px] items-center">
              {/* Left Column - Title */}
              <div className="col-span-12 md:col-span-4 z-10 mix-blend-difference">
                <div className="flex flex-col gap-4">
                  <span className="text-sm uppercase tracking-wider opacity-80">
                    {project.number}
                  </span>
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
                    {project.title}
                  </h2>
                </div>
              </div>

              {/* Center Column - Image */}
              <div className="col-span-12 md:col-span-4 relative">
                <div className="aspect-square w-full max-w-[500px] mx-auto overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Right Column - Tags & Description */}
              <div className="col-span-12 md:col-span-4 flex flex-col gap-6 justify-end">
                <div className="flex flex-col gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-sm uppercase tracking-wider underline underline-offset-4"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-base md:text-lg opacity-80 max-w-[350px]">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Controls */}
      <div className="absolute bottom-8 left-0 right-0 px-8 md:px-16 lg:px-24">
        <div className="flex justify-between items-center max-w-[1400px] mx-auto">
          {/* Progress Indicator */}
          <div className="flex items-center gap-2">
            <span className="text-sm">[ </span>
            <span className="text-sm font-medium">{currentProject}</span>
            <span className="text-sm opacity-50"> / {projects.length}</span>
            <span className="text-sm"> ]</span>
          </div>

          {/* Progress Bar */}
          <div className="hidden md:block flex-1 mx-8 h-[1px] bg-neutral-700 relative">
            <div
              className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
              style={{ width: `${(currentProject / projects.length) * 100}%` }}
            />
          </div>

          {/* View All Link */}
          <a href="#" className="flex items-center gap-2 text-sm uppercase tracking-wider hover:opacity-70 transition-opacity">
            View all projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
