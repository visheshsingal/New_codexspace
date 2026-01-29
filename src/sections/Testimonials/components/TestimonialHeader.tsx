interface TestimonialHeaderProps {
  onPrev: () => void;
  onNext: () => void;
}

export const TestimonialHeader = ({ onPrev, onNext }: TestimonialHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 md:px-8 mb-8">
      <div className="flex items-center gap-3 mb-4 md:mb-0">
        <div className="w-2 h-2 rounded-full bg-black"></div>
        <h3 className="text-lg md:text-xl uppercase tracking-wide font-medium">Testimonials</h3>
      </div>

      <div className="flex gap-4 self-end md:self-auto">
        <button
          onClick={onPrev}
          aria-label="Previous slide"
          className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={onNext}
          aria-label="Next slide"
          className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors duration-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
};

