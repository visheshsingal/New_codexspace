import { MobileMenuFooter } from "@/sections/MobileMenu/components/MobileMenuFooter";
import { MobileMenuNav } from "@/sections/MobileMenu/components/MobileMenuNav";
import { MobileMenuShowreel } from "@/sections/MobileMenu/components/MobileMenuShowreel";

interface MobileMenuContentProps {
  onClose: () => void;
}

export const MobileMenuContent = ({ onClose }: MobileMenuContentProps) => {
  return (
    <div className="relative flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12 h-full z-[1]">
      <MobileMenuNav onClose={onClose} />
      <MobileMenuShowreel />
      <MobileMenuFooter />
    </div>
  );
};