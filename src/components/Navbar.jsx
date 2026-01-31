import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Introduction', href: '#home' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Experience', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
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
            <a href="#contact" className="nav-btn-highlight">Let's Talk</a>
          </div>

          <button className="nav-mobile-trigger" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`nav-drawer-editorial ${isOpen ? 'active' : ''}`}>
        <div className="drawer-header">
          <span className="drawer-logo">V. ITAPE</span>
          <button onClick={() => setIsOpen(false)}><X size={32} /></button>
        </div>
        <div className="drawer-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .nav-editorial {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 2.5rem 6%;
          transition: var(--transition-smooth);
        }

        .nav-editorial.scrolled {
          padding: 1.25rem 6%;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border-light);
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
          color: var(--secondary);
          text-decoration: none;
          letter-spacing: -0.5px;
        }

        .logo-thin {
          font-weight: 300;
          color: var(--text-muted);
        }

        .nav-links-editorial {
          display: flex;
          align-items: center;
          gap: 3rem;
        }

        .nav-link-item {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-soft);
          text-decoration: none;
          transition: var(--transition-fast);
          position: relative;
        }

        .nav-link-item:hover {
          color: var(--primary);
        }

        .nav-btn-highlight {
          padding: 0.75rem 1.75rem;
          background: var(--secondary);
          color: white;
          border-radius: var(--radius-full);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          transition: var(--transition-smooth);
        }

        .nav-btn-highlight:hover {
          background: var(--primary);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
        }

        .nav-mobile-trigger {
          display: none;
          background: none;
          border: none;
          color: var(--secondary);
          cursor: pointer;
        }

        .nav-drawer-editorial {
          position: fixed;
          inset: 0;
          background: var(--bg-body);
          z-index: 2000;
          padding: 3rem 6%;
          transform: translateX(100%);
          transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .nav-drawer-editorial.active {
          transform: translateX(0);
        }

        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5rem;
        }

        .drawer-logo {
          font-family: 'Outfit', sans-serif;
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--secondary);
        }

        .drawer-links {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .drawer-links a {
          font-family: 'Outfit', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--secondary);
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .nav-links-editorial { display: none; }
          .nav-mobile-trigger { display: block; }
          .nav-editorial { padding: 1.5rem 6%; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
