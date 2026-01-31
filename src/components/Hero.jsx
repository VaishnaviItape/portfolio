import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { MousePointer2, Mail, Github, Linkedin, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-editorial">
      <div className="hero-content-wrapper">

        {/* Badge/Intro */}
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={14} className="text-primary" />
          <span>Available for new opportunities</span>
        </motion.div>

        {/* Main Headline */}
        <div className="headline-container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            Crafting digital <br />
            <span className="gradient-text">masterpieces</span> with code.
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm <strong>Vaishnavi Itape</strong>, a specialized Frontend Developer focused on creating
            high-performance, beautiful, and user-centric web applications at {profile.company}.
          </motion.p>
        </div>

        {/* Main Actions */}
        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <a href="#projects" className="btn-primary-premium">
            View Portfolio <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn-ghost-premium">
            Contact Me
          </a>
        </motion.div>

        {/* Social Links & Scroll Indicator */}
        <motion.div
          className="hero-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="social-pill">
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer"><Github size={18} /></a>
            <div className="divider"></div>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
            <div className="divider"></div>
            <a href={`mailto:${profile.email}`}><Mail size={18} /></a>
          </div>

          <div className="scroll-indicator">
            <div className="mouse">
              <div className="wheel"></div>
            </div>
            <span>Scroll Discovery</span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="decorative-blob blob-1"></div>
      <div className="decorative-blob blob-2"></div>

      <style>{`
                .hero-editorial {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    padding-top: 120px;
                    overflow: hidden;
                }

                .hero-content-wrapper {
                    max-width: 900px;
                    width: 100%;
                    text-align: center;
                    position: relative;
                    z-index: 10;
                }

                .hero-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.6rem 1.25rem;
                    background: rgba(99, 102, 241, 0.05);
                    border: 1px solid rgba(99, 102, 241, 0.1);
                    border-radius: 50px;
                    font-size: 0.85rem;
                    font-weight: 600;
                    color: var(--primary);
                    margin-bottom: 3rem;
                }

                .headline-container h1 {
                    font-size: clamp(3rem, 8vw, 5.5rem);
                    margin-bottom: 2rem;
                    letter-spacing: -0.05em;
                }

                .hero-description {
                    font-size: clamp(1.1rem, 2vw, 1.4rem);
                    color: var(--text-muted);
                    max-width: 650px;
                    margin: 0 auto 3rem;
                    line-height: 1.6;
                }

                .hero-actions {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 1.5rem;
                    margin-bottom: 6rem;
                }

                .btn-primary-premium {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 1.2rem 2.5rem;
                    background: var(--secondary);
                    color: white;
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 1.1rem;
                    transition: var(--transition-smooth);
                }

                .btn-primary-premium:hover {
                    background: var(--primary);
                    transform: translateY(-4px);
                    box-shadow: 0 20px 40px rgba(99, 102, 241, 0.2);
                }

                .btn-ghost-premium {
                    padding: 1.2rem 2.5rem;
                    background: transparent;
                    color: var(--text-main);
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 1.1rem;
                    border: 1px solid var(--border);
                    transition: var(--transition-smooth);
                }

                .btn-ghost-premium:hover {
                    background: var(--bg-soft);
                    border-color: var(--text-muted);
                }

                .hero-footer {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 3rem;
                }

                .social-pill {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    padding: 0.8rem 2rem;
                    background: white;
                    border: 1px solid var(--border);
                    border-radius: 50px;
                    box-shadow: var(--shadow-sm);
                }

                .social-pill a {
                    color: var(--text-muted);
                    display: flex;
                    transition: var(--transition-fast);
                }

                .social-pill a:hover {
                    color: var(--primary);
                    transform: scale(1.1);
                }

                .divider {
                    width: 1px;
                    height: 20px;
                    background: var(--border);
                }

                .scroll-indicator {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    color: var(--text-soft);
                    font-size: 0.8rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.2em;
                }

                .mouse {
                    width: 24px;
                    height: 40px;
                    border: 2px solid var(--text-soft);
                    border-radius: 20px;
                    display: flex;
                    justify-content: center;
                    padding-top: 8px;
                }

                .wheel {
                    width: 4px;
                    height: 8px;
                    background: var(--text-soft);
                    border-radius: 2px;
                    animation: scroll 2s infinite;
                }

                @keyframes scroll {
                    0% { transform: translateY(0); opacity: 1; }
                    100% { transform: translateY(15px); opacity: 0; }
                }

                .decorative-blob {
                    position: absolute;
                    width: 600px;
                    height: 600px;
                    border-radius: 50%;
                    filter: blur(80px);
                    z-index: 1;
                    opacity: 0.15;
                }

                .blob-1 {
                    top: -10%;
                    right: -10%;
                    background: var(--primary);
                }

                .blob-2 {
                    bottom: -10%;
                    left: -10%;
                    background: #f43f5e;
                }

                @media (max-width: 768px) {
                    .hero-actions {
                        flex-direction: column;
                        width: 100%;
                    }
                    .btn-primary-premium, .btn-ghost-premium {
                        width: 100%;
                        justify-content: center;
                    }
                }
            `}</style>
    </section>
  );
};

export default Hero;
