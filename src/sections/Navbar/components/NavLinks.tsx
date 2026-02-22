import React from 'react';

interface NavLinksProps {
    scrolled: boolean;
}

const links = [
    { name: 'Services', href: '#what-we-do' },
    { name: 'Work', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
];

export const NavLinks = ({ scrolled }: NavLinksProps) => {
    return (
        <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-medium tracking-wide uppercase transition-colors duration-300 no-underline ${scrolled ? 'text-black/70 hover:text-black' : 'text-white/70 hover:text-white'
                        }`}
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
};
