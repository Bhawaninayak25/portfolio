import React, { useState } from 'react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a href="#home" className="brand-mark" onClick={closeMenu}>
        <span className="brand-mark__title">Bhawani Shankar</span>
        <span className="brand-mark__subtitle">Full Stack Developer</span>
      </a>

      <button
        type="button"
        className={`menu-toggle ${menuOpen ? 'active' : ''}`}
        onClick={() => setMenuOpen((current) => !current)}
        aria-label="Toggle navigation"
        aria-expanded={menuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a href="#contact" className="nav-cta" onClick={closeMenu}>
          Hire Me
        </a>
      </nav>
    </header>
  );
};

export default Header;
