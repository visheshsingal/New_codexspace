import { Testimonial } from "../data";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div className="w-full h-full p-4 md:p-6 lg:p-8">
      <div
        className={`h-full flex flex-col justify-between p-6 md:p-8 lg:p-10 rounded-3xl ${testimonial.color} ${testimonial.textColor} transition-all duration-300`}
      >
        <div className="space-y-6 md:space-y-8">
          <div className="flex justify-between items-start gap-4">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-tight tracking-tight">
              {testimonial.text}
            </p>
            <div className="shrink-0 w-8 h-8 md:w-10 md:h-10">
              <img
                src={testimonial.icon}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-current/10">
          <div className="font-medium text-base md:text-lg">
            {testimonial.name}
          </div>
          <div className="text-sm md:text-base opacity-80">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
};