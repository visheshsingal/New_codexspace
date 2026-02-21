import React from 'react';

interface MenuButtonProps {
  scrolled: boolean;
  onClick: () => void;
}

export const MenuButton = ({ scrolled, onClick }: MenuButtonProps) => {
  const color = scrolled ? 'black' : 'white';

  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        padding: '8px',
        cursor: 'pointer',
        position: 'relative',
        zIndex: 50,
      }}
      aria-label="Toggle Menu"
    >
      <div style={{ width: '32px', height: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end', gap: '6px' }}>
        <div style={{ width: '32px', height: '2px', backgroundColor: color, transition: 'all 0.3s' }} />
        <div style={{ width: '24px', height: '2px', backgroundColor: color, transition: 'all 0.3s' }} />
        <div style={{ width: '16px', height: '2px', backgroundColor: color, transition: 'all 0.3s' }} />
      </div>
    </button>
  );
};