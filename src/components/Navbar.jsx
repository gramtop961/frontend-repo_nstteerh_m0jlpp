import React, { useEffect, useState } from 'react';

const Navbar = ({ onOpenAuth, theme, setTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-all ${scrolled ? 'backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-black/5 dark:border-white/10' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">
          StudioMin
        </a>
        <div className="hidden gap-6 text-sm text-neutral-700 dark:text-neutral-300 md:flex">
          <a href="#pricing" className="hover:text-neutral-950 dark:hover:text-white">Pricing</a>
          <a href="#blog" className="hover:text-neutral-950 dark:hover:text-white">Blog</a>
          <a href="#contact" className="hover:text-neutral-950 dark:hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-3 py-2 text-xs font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-100 dark:border-white/10 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          <button
            onClick={onOpenAuth}
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-neutral-900"
          >
            Sign in
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
