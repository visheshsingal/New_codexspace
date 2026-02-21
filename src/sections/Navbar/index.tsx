import { useState, useEffect } from 'react';
import { Logo } from "./components/Logo";
import { MenuButton } from "./components/MenuButton";
import { NavLinks } from "./components/NavLinks";

interface NavbarProps {
  onMenuClick: () => void;
}

export const Navbar = ({ onMenuClick }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6 md:py-8'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Logo scrolled={scrolled} />

        <div className="flex items-center gap-12">
          {/* Desktop Links */}
          <NavLinks scrolled={scrolled} />

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <MenuButton scrolled={scrolled} onClick={onMenuClick} />
          </div>
        </div>
      </div>
    </nav>
  );
};