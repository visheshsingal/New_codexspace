export const FooterNav = () => {
  const servicesLinks = [
    { name: "Digital Marketing", href: "#" },
    { name: "Web Development", href: "#" },
    { name: "SEO & Content", href: "#" },
    { name: "Social Media", href: "#" },
    { name: "AI Solutions", href: "#" },
    { name: "Financial Consulting", href: "#" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
  ];

  return (
    <div className="flex flex-wrap gap-10 md:gap-20">
      {/* Services Column */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
          Services
        </h3>
        <ul className="flex flex-col gap-2">
          {servicesLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Company Column */}
      <div className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
          Company
        </h3>
        <ul className="flex flex-col gap-2">
          {companyLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-neutral-400 text-sm hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};