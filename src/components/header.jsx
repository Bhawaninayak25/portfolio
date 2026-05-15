import React, { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Chat', href: '#contact' },
];

const Header = ({ theme, onToggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = navItems.map((item) => document.querySelector(item.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f5f0e8]/80 px-4 py-3 backdrop-blur-2xl dark:border-white/10 dark:bg-[#07080d]/78 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3 no-underline">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white/70 font-display text-sm font-bold text-amber-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-amber-300">
            BS
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-bold tracking-tight">Bhawani Shankar</span>
            <span className="hidden text-[0.68rem] font-bold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 sm:block">
              Full Stack Developer
            </span>
          </span>
        </a>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white/70 dark:border-white/10 dark:bg-white/5 lg:hidden"
          onClick={() => setMenuOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
            <span className="block h-0.5 w-5 bg-current"></span>
          </span>
        </button>

        <nav
          className={`absolute left-4 right-4 top-[calc(100%+10px)] rounded-2xl border border-black/10 bg-[#f5f0e8]/95 p-3 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-[#080a10]/95 lg:static lg:flex lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-0 ${
            menuOpen ? 'grid gap-2' : 'hidden lg:flex'
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className={`rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                activeSection === item.href.slice(1)
                  ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950'
                  : 'text-zinc-600 hover:bg-black/5 hover:text-zinc-950 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onToggleTheme}
            className="rounded-xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-bold text-zinc-700 transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:hover:bg-white/10"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <a
            href="#contact"
            onClick={closeMenu}
            className="rounded-xl bg-gradient-to-r from-amber-300 to-yellow-100 px-4 py-2.5 text-center text-sm font-extrabold text-zinc-950 shadow-lg shadow-amber-400/20 transition hover:-translate-y-0.5"
          >
            Chat Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
