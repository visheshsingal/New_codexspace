export const FooterContent = () => {
  return (
    <div className="flex flex-col gap-4 max-w-xs">
      {/* Brand */}
      <div className="flex items-center">
        <span className="font-bold text-2xl tracking-tight text-white">
          CodeXSpace<span className="text-white">.</span>
        </span>
      </div>

      {/* Description */}
      <p className="text-neutral-400 text-xs leading-relaxed">
        We transform brands through strategic digital marketing, innovative technology solutions, and data-driven growth strategies.
      </p>

      {/* Contact Info */}
      <div className="flex flex-col gap-1 text-xs text-neutral-400">
        <p>Sector 40, Gurugram</p>
        <a href="tel:+919024939664" className="hover:text-white transition-colors">+91 99024939664</a>
        <a href="mailto:codexspacemain@gmail.com" className="hover:text-white transition-colors">CodeXSpacemain@gmail.com</a>
      </div>

      {/* Socials */}
      <div className="flex gap-4 mt-2">
        <a href="https://instagram.com/codexspace.in" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black transition-all">
          <span className="sr-only">Instagram</span>
          <img src="https://c.animaapp.com/mk1krdvf8IZhRk/assets/icon-23.svg" alt="" className="w-4 h-4 opacity-70" />
        </a>
        {/* <a href="https://linkedin.com" className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black transition-all">
          <span className="sr-only">LinkedIn</span>
          <img src="https://c.animaapp.com/mk1krdvf8IZhRk/assets/icon-24.svg" alt="" className="w-4 h-4 opacity-70" />
        </a> */}
      </div>
    </div>
  );
};