import React from 'react';

interface LogoProps {
  scrolled: boolean;
}

export const Logo = ({ scrolled }: LogoProps) => {
  return (
    <div className="relative pointer-events-auto z-10 transition-all duration-500">
      <a href="#" className="flex items-center no-underline">
        <span className={`font-bold text-2xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'
          }`}>
          CodeXSpace<span className={scrolled ? 'text-black' : 'text-white'}>.</span>
        </span>
      </a>
    </div>
  );
};