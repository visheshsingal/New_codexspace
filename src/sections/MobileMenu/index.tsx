import React, { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const links = [
    { name: 'Services', href: '#what-we-do' },
    { name: 'Work', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'News', href: '#news' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div
      id="mobile-nav-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000000',
        zIndex: 999999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '30px',
          right: '30px',
          background: 'none',
          border: 'none',
          color: 'white',
          fontSize: '40px',
          cursor: 'pointer',
          zIndex: 1000000
        }}
      >
        ✕
      </button>

      <nav style={{ display: 'flex', flexDirection: 'column', gap: '40px', textAlign: 'center' }}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={onClose}
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '2.5rem',
              fontWeight: '800',
              textTransform: 'uppercase'
            }}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <div style={{ marginTop: '80px', color: 'rgba(255,255,255,0.5)', fontSize: '14px' }}>
        <p>kp@CodeXSpace.in</p>
      </div>
    </div>
  );
};