import { motion } from 'framer-motion';

const projects = [
  {
    number: "01",
    title: "Indus group of Institution",
    imageUrl: "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg",
    tags: ["Education", "Campus", "Innovation"],
    description: "A state-of-the-art educational facility fostering innovation and learning excellence.",
    color: "bg-white/5 text-white"
  },
  {
    number: "02",
    title: "Hitech Homes",
    imageUrl: "https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg",
    tags: ["Real Estate", "Luxury", "Modern"],
    description: "Redefining modern living with smart architecture and premium real estate solutions.",
    color: "bg-white/5 text-white"
  },
  {
    number: "03",
    title: "Vishesh Academy",
    imageUrl: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg",
    tags: ["Education", "Commerce", "Success"],
    description: "Empowering students with professional coaching and strategic learning modules.",
    color: "bg-white/5 text-white"
  },
  {
    number: "04",
    title: "Frd Nutrition",
    imageUrl: "https://images.pexels.com/photos/17227607/pexels-photo-17227607.jpeg",
    tags: ["Health", "Nutrition", "Organic"],
    description: "Premium organic nutrition solutions designed for a balanced lifestyle.",
    color: "bg-white/5 text-white"
  }
];

export const ProjectsCarousel = () => {
  return (
    <section className="py-20 md:py-32 bg-black text-white font-switzer" id="work">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Simple & Clean Header - Matching Site Style */}
        <div className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-2 h-2 bg-white"></div>
            <span className="text-sm md:text-base font-medium uppercase tracking-widest text-white/50">Our Portfolio</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-2 md:gap-4"
          >
            <h2 className="text-4xl md:text-6xl font-normal tracking-tight">
              Selected <span className="text-white/40 italic font-medium">Works.</span>
            </h2>
            <p className="text-[10px] md:text-xs text-white/30 uppercase tracking-[0.4em] font-medium">
              founder contributions highlighted below
            </p>
          </motion.div>
        </div>

        {/* Clean & Balanced Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index % 2 * 0.1 }}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image - Sharp Corners, Full Width */}
              <div className="relative aspect-video overflow-hidden border border-white/10 mb-6">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Info contained in a sharp-edged box */}
              <div className={`p-8 md:p-10 border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] transition-all duration-500 space-y-5`}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>
                  <span className="text-xs md:text-sm font-bold text-white/10 font-mono italic">
                    {project.number}
                  </span>
                </div>

                <p className="text-sm md:text-lg text-white/40 font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] md:text-xs uppercase tracking-widest font-medium px-4 py-2 border border-white/10 bg-white/5 text-white/40">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-white hover:text-white/60 group-hover:gap-4 transition-all">
                  Explore Project
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
