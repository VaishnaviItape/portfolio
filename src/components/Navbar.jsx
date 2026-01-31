import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Story', href: '#about' },
    { name: 'Works', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Start', href: '#contact' },
  ];

  return (
    <>
      <nav className={`navbar-creative ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container-c">
          <a href="#home" className="nav-logo-bold">
            V. <span className="logo-fill">ITAPE</span>
          </a>

          <div className="nav-stack-pill">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-pill-item">
                {link.name}
              </a>
            ))}
          </div>

          <button className="nav-menu-btn" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div className={`creative-sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <span className="logo-fill">Navigation</span>
          <button onClick={() => setIsOpen(false)}><X size={32} /></button>
        </div>
        <div className="sidebar-links-huge">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)}>
              {link.name}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .navbar-creative {
          position: fixed;
          top: 2rem;
          left: 5%;
          right: 5%;
          z-index: 1000;
          transition: var(--transition-smooth);
        }

        .nav-container-c {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 2.5rem;
          background: var(--bg-card);
          border: var(--border-bold);
          border-radius: var(--radius-full);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .navbar-creative.scrolled {
          top: 1rem;
        }

        .nav-logo-bold {
          font-family: 'Unbounded', cursive;
          font-size: 1.25rem;
          font-weight: 900;
          color: white;
          text-decoration: none;
        }

        .logo-fill {
          color: var(--primary);
        }

        .nav-stack-pill {
          display: flex;
          background: var(--bg-accent);
          padding: 0.4rem;
          border-radius: var(--radius-full);
          gap: 0.5rem;
        }

        .nav-pill-item {
          padding: 0.6rem 1.4rem;
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--text-gray);
          text-decoration: none;
          border-radius: var(--radius-full);
          transition: var(--transition-fast);
        }

        .nav-pill-item:hover {
          color: white;
          background: rgba(255,255,255,0.05);
        }

        .nav-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }

        .creative-sidebar {
          position: fixed;
          inset: 0;
          background: var(--bg-deep);
          z-index: 2000;
          padding: 4rem;
          transform: translateY(-100%);
          transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .creative-sidebar.active {
          transform: translateY(0);
        }

        .sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 6rem;
        }

        .sidebar-header button {
          background: none;
          border: none;
          color: white;
        }

        .sidebar-links-huge {
          display: flex;
          flex-direction: column;
          gap: 3rem;
        }

        .sidebar-links-huge a {
          font-family: 'Unbounded', cursive;
          font-size: 4rem;
          font-weight: 900;
          color: white;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .sidebar-links-huge a:hover {
          color: var(--primary);
          padding-left: 2rem;
        }

        @media (max-width: 900px) {
          .nav-stack-pill { display: none; }
          .nav-menu-btn { display: block; }
          .navbar-creative { top: 1.5rem; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
