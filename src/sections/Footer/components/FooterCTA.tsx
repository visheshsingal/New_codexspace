
export const FooterCTA = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <h2 className="text-2xl md:text-4xl font-light tracking-tight text-white">
        Ready to transform <span className="text-neutral-500">your digital presence?</span>
      </h2>

      <a
        href="#contact"
        className="group flex-shrink-0 inline-flex items-center justify-center px-6 py-3 bg-white text-black text-sm rounded-full font-medium transition-transform hover:scale-105"
      >
        <span>Start a Project</span>
        <svg
          className="w-3 h-3 ml-2 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
    </div>
  );
};