interface MobileMenuNavProps {
  onClose: () => void;
}

const links = [
  { name: 'Services', href: '#what-we-do' },
  { name: 'Work', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'News', href: '#news' },
  { name: 'Contact', href: '#contact' },
];

export const MobileMenuNav = ({ onClose }: MobileMenuNavProps) => {
  return (
    <div className="flex flex-col gap-12">
      <ul className="flex flex-col gap-4 list-none p-0 m-0">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={onClose}
              className="text-white text-5xl md:text-7xl font-bold tracking-tighter hover:text-white/70 transition-colors inline-block"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      <div className="text-white/50 text-sm md:text-base max-w-sm space-y-4">
        <p>CodeXSpacemain@gmail.com</p>
      </div>
    </div>
  );
};