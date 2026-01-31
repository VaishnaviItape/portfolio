import React from 'react';
import { profile } from '../data/profile';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer-editorial">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <span className="footer-logo">V. ITAPE</span>
                        <p>Building Digital Excellence</p>
                    </div>

                    <div className="footer-nav">
                        <a href="#home">Intro</a>
                        <a href="#about">About</a>
                        <a href="#projects">Work</a>
                        <a href="#contact">Contact</a>
                    </div>

                    <div className="footer-socials">
                        <a href={profile.social.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                        <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} Designed & Developed by Vaishnavi Itape</p>
                    <div className="made-with">
                        <span>Made with</span>
                        <Heart size={14} className="text-accent" fill="currentColor" />
                        <span>in India</span>
                    </div>
                </div>
            </div>

            <style>{`
                .footer-editorial {
                    background: var(--bg-soft);
                    border-top: 1px solid var(--border-light);
                    padding: 6rem 6% 3rem;
                }

                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .footer-top {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    align-items: center;
                    margin-bottom: 5rem;
                }

                .footer-brand .footer-logo {
                    font-size: 1.5rem;
                    font-weight: 800;
                    letter-spacing: -0.02em;
                    color: var(--text-main);
                    display: block;
                    margin-bottom: 0.5rem;
                }

                .footer-brand p {
                    color: var(--text-soft);
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                .footer-nav {
                    display: flex;
                    justify-content: center;
                    gap: 3rem;
                }

                .footer-nav a {
                    font-size: 0.95rem;
                    font-weight: 600;
                    color: var(--text-muted);
                    transition: var(--transition-fast);
                }

                .footer-nav a:hover {
                    color: var(--primary);
                }

                .footer-socials {
                    display: flex;
                    justify-content: flex-end;
                    gap: 2rem;
                }

                .footer-socials a {
                    color: var(--text-muted);
                    transition: var(--transition-fast);
                }

                .footer-socials a:hover {
                    color: var(--primary);
                    transform: translateY(-3px);
                }

                .footer-bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 3rem;
                    border-top: 1px solid var(--border-light);
                    color: var(--text-soft);
                    font-size: 0.9rem;
                    font-weight: 500;
                }

                .made-with {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                @media (max-width: 900px) {
                    .footer-top {
                        grid-template-columns: 1fr;
                        gap: 3rem;
                        text-align: center;
                    }
                    .footer-nav {
                        flex-direction: column;
                        gap: 1.5rem;
                    }
                    .footer-socials {
                        justify-content: center;
                    }
                    .footer-bottom {
                        flex-direction: column;
                        gap: 1.5rem;
                        text-align: center;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
