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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#home" className="logo">Vaishnavi.</a>

          <div className="desktop-menu">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="nav-link">
                {link.name}
              </a>
            ))}
          </div>

          <button className="mobile-toggle" onClick={() => setIsOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div className={`mobile-sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <span className="logo">Menu</span>
          <button onClick={() => setIsOpen(false)}><X size={24} /></button>
        </div>
        <div className="sidebar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>

      {isOpen && <div className="backdrop" onClick={() => setIsOpen(false)}></div>}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.5rem 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
            padding: 1rem 0;
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(12px);
            border-bottom: 1px solid var(--border);
        }

        .nav-container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo {
            font-size: 1.25rem;
            font-weight: 700;
            color: var(--text-main);
            letter-spacing: -0.02em;
        }

        .desktop-menu {
            display: flex;
            gap: 2rem;
            background: white;
            padding: 0.5rem 1.5rem;
            border-radius: 50px;
            border: 1px solid var(--border);
            box-shadow: var(--shadow-sm);
        }
        
        .navbar.scrolled .desktop-menu {
            background: transparent;
            border: none;
            box-shadow: none;
            padding: 0;
        }

        .nav-link {
            font-size: 0.9rem;
            font-weight: 500;
            color: var(--text-muted);
            transition: color 0.2s;
        }

        .nav-link:hover {
            color: var(--primary);
        }

        .mobile-toggle {
            display: none;
            background: none;
            border: none;
            cursor: pointer;
            color: var(--text-main);
        }

        /* Mobile Sidebar */
        .mobile-sidebar {
            position: fixed;
            top: 0;
            right: -100%;
            width: 300px;
            height: 100vh;
            background: white;
            z-index: 1100;
            transition: right 0.3s ease;
            box-shadow: var(--shadow-lg);
            padding: 2rem;
        }
        
        .mobile-sidebar.active { right: 0; }
        
        .sidebar-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3rem;
        }
        
        .sidebar-header button {
            background: none;
            border: none;
            cursor: pointer;
        }

        .sidebar-links {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
        }

        .sidebar-links a {
            font-size: 1.2rem;
            font-weight: 600;
            color: var(--text-main);
        }

        .backdrop {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1050;
        }

        @media (max-width: 768px) {
            .desktop-menu { display: none; }
            .mobile-toggle { display: block; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
