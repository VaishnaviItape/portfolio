import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Home, Briefcase, User, Cpu, MessageSquare } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
  };

  const navLinks = [
    { name: 'Intro', href: '#home', icon: <Home size={20} /> },
    { name: 'Work', href: '#projects', icon: <Briefcase size={20} /> },
    { name: 'About', href: '#about', icon: <User size={20} /> },
    { name: 'Skills', href: '#skills', icon: <Cpu size={20} /> },
    { name: 'Contact', href: '#contact', icon: <MessageSquare size={20} /> },
  ];

  return (
    <>
      <nav className={`nav-editorial ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-wrapper">
          <a href="#home" className="nav-logo-premium">
            V. <span className="logo-thin">ITAPE</span>
          </a>

          <div className="nav-links-editorial">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link-item">
                {link.name}
              </a>
            ))}

            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a href="#contact" className="nav-btn-highlight">Let's Talk</a>
          </div>

          <div className="mobile-actions">
            <button className="theme-toggle" onClick={toggleTheme}>
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className="nav-mobile-trigger" onClick={() => setIsOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation (Native App Style) */}
      <div className="mobile-bottom-nav">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="bottom-nav-item">
            {link.icon}
            <span>{link.name}</span>
          </a>
        ))}
      </div>

      {/* Mobile Drawer */}
      <div className={`nav-drawer-editorial ${isOpen ? 'active' : ''}`}>
        <div className="drawer-header">
          <span className="drawer-logo">V. ITAPE</span>
          <div className="drawer-controls">
            <button onClick={() => setIsOpen(false)} className="close-btn"><X size={32} /></button>
          </div>
        </div>
        <div className="drawer-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="drawer-cta" onClick={() => setIsOpen(false)}>Start a Project</a>
        </div>
      </div>

      {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)}></div>}

      <style>{`
        .nav-editorial {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 2.5rem 6%;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .nav-editorial.scrolled {
          padding: 1.25rem 6%;
          background: var(--bg-body);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
        }

        .nav-wrapper {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav-logo-premium {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-main);
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .logo-thin {
          font-weight: 300;
          color: var(--text-soft);
        }

        .nav-links-editorial {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-link-item {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-muted);
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .nav-link-item:hover {
          color: var(--primary);
        }

        .theme-toggle {
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;
          border-radius: 50%;
          transition: var(--transition-fast);
        }

        .theme-toggle:hover {
          background: var(--bg-soft);
          color: var(--primary);
        }

        .nav-btn-highlight {
          padding: 0.75rem 1.75rem;
          background: var(--secondary);
          color: white;
          border-radius: var(--radius-full);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 700;
          transition: var(--transition-smooth);
        }

        .nav-btn-highlight:hover {
          background: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(99, 102, 241, 0.2);
        }

        /* Mobile Adjustments */
        .mobile-actions {
          display: none;
          align-items: center;
          gap: 1rem;
        }

        .nav-mobile-trigger {
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }

        /* Bottom Nav - The "App" Experience */
        .mobile-bottom-nav {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: var(--bg-body);
          border-top: 1px solid var(--border-light);
          padding: 0.75rem 0;
          z-index: 1000;
          justify-content: space-around;
          align-items: center;
          box-shadow: 0 -4px 10px rgba(0,0,0,0.05);
          backdrop-filter: blur(10px);
        }

        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.7rem;
          font-weight: 700;
          transition: var(--transition-fast);
        }

        .bottom-nav-item span {
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .bottom-nav-item:hover, .bottom-nav-item.active {
          color: var(--primary);
        }

        .nav-drawer-editorial {
          position: fixed;
          inset: 0;
          background: var(--bg-body);
          z-index: 2000;
          padding: 3rem 6%;
          transform: translateY(-100%);
          transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
          visibility: hidden;
          display: none;
        }

        .nav-drawer-editorial.active {
          transform: translateY(0);
          visibility: visible;
          display: flex;
          flex-direction: column;
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5rem;
        }

        .drawer-logo {
          font-family: 'Outfit', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--text-main);
        }

        .close-btn {
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
        }

        .drawer-links {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .drawer-links a {
          font-family: 'Outfit', sans-serif;
          font-size: 3rem;
          font-weight: 700;
          color: var(--text-main);
          text-decoration: none;
          letter-spacing: -0.02em;
        }

        @media (max-width: 900px) {
          .nav-links-editorial { display: none; }
          .mobile-actions { display: flex; }
          .mobile-bottom-nav { display: flex; }
          .nav-editorial { padding: 1.25rem 6%; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
