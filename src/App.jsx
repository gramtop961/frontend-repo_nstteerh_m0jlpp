import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero3D from './components/Hero3D.jsx';
import Pricing from './components/Pricing.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import AuthModal from './components/AuthModal.jsx';

function App() {
  const [theme, setTheme] = useState('dark');
  const [authOpen, setAuthOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
  }, [theme]);

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar onOpenAuth={() => setAuthOpen(true)} theme={theme} setTheme={setTheme} />
      <main>
        <Hero3D onOpenAuth={() => setAuthOpen(true)} />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <footer className="border-t border-neutral-200 py-8 text-center text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400">
        © {new Date().getFullYear()} StudioMin — Minimalist design for modern teams.
      </footer>
      <AuthModal open={authOpen} onClose={() => setAuthOpen(false)} />
    </div>
  );
}

export default App;
