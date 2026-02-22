import { FooterContent } from "@/sections/Footer/components/FooterContent";
import { FooterNav } from "@/sections/Footer/components/FooterNav";
import { FooterCTA } from "@/sections/Footer/components/FooterCTA";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-neutral-800">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        {/* Top Section: CTA */}
        <FooterCTA />

        <div className="h-px w-full bg-neutral-800 my-10 opacity-50" />

        {/* Middle Section: Main Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">
          <div className="flex-shrink-0">
            <FooterContent />
          </div>

          <div className="flex-grow flex justify-start lg:justify-end">
            <FooterNav />
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="mt-12 pt-6 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-neutral-500">
          <p>© 2025 CodeXSpace. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};