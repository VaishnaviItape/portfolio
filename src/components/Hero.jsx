import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Github, Linkedin, Download, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="section hero-section">
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="badge-creative"
        >
          <Code2 size={16} />
          <span>Crafting Digital Magic</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, cubicBezier: [0.19, 1, 0.22, 1] }}
        >
          I BUILD <span className="text-gradient">THINGS</span> THAT LIVE ON THE <span className="text-gradient">INTERNET.</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hey, I'm <span className="highlight">Vaishnavi Itape</span>. A software alchemist turning
          complex code into pixel-perfect experiences. Specialized in React, Native, and Design.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#projects" className="btn-main">
            EXPLORE WORK <ArrowDown size={18} />
          </a>
          <a href="#contact" className="btn-outline">
            SAY HELLO
          </a>
        </motion.div>

        <motion.div
          className="hero-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="social-pill">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
            <span className="divider"></span>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            <span className="divider"></span>
            <a href="mailto:itapev2@gmail.com"><Mail size={20} /></a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 120px;
          position: relative;
        }

        .hero-content {
          max-width: 1000px;
          text-align: left;
        }

        .hero-title {
          font-size: clamp(3.5rem, 12vw, 7.5rem);
          line-height: 0.9;
          margin-bottom: 2.5rem;
          color: white;
        }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          color: var(--text-gray);
          margin-bottom: 4rem;
          max-width: 800px;
          line-height: 1.5;
        }

        .highlight {
          color: var(--primary);
          font-weight: 700;
        }

        .hero-actions {
          display: flex;
          gap: 2rem;
          margin-bottom: 6rem;
        }

        .hero-footer {
          display: flex;
          align-items: center;
        }

        .social-pill {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 0.8rem 1.5rem;
          background: var(--bg-card);
          border: var(--border-bold);
          border-radius: var(--radius-full);
        }

        .social-pill a {
          color: var(--text-gray);
          transition: var(--transition-fast);
        }

        .social-pill a:hover {
          color: var(--primary);
          transform: scale(1.2);
        }

        .divider {
          width: 1px;
          height: 20px;
          background: #333;
        }

        @media (max-width: 850px) {
          .hero-title { font-size: 3.5rem; line-height: 1; }
          .hero-actions { flex-direction: column; width: 100%; }
          .btn-main, .btn-outline { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
