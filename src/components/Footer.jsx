import React from 'react';

const Footer = () => {
    return (
        <footer className="footer-creative">
            <div className="footer-top-c">
                <h2 className="footer-logo-massive">V. <span className="logo-fill">ITAPE</span></h2>
                <div className="footer-nav-c">
                    <a href="#about">STORY</a>
                    <a href="#projects">WORKS</a>
                    <a href="#skills">SKILLS</a>
                    <a href="#contact">START</a>
                </div>
            </div>

            <div className="footer-bottom-c">
                <div className="legal-c">
                    <span>© {new Date().getFullYear()} VAISHNAVI ITAPE</span>
                    <span className="dot-sep"></span>
                    <span>MADE WITH MAGIC</span>
                </div>
                <div className="social-links-c">
                    <a href="https://linkedin.com">LN</a>
                    <a href="https://github.com">GH</a>
                    <a href="https://instagram.com">IG</a>
                </div>
            </div>

            <style>{`
                .footer-creative {
                    margin-top: 10rem;
                    padding: 8rem 7% 4rem;
                    background: var(--bg-dark);
                    border-top: var(--border-bold);
                }

                .footer-top-c {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 8rem;
                    gap: 4rem;
                }

                .footer-logo-massive {
                    font-size: clamp(3rem, 15vw, 10rem);
                    line-height: 0.8;
                }

                .footer-nav-c {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                    text-align: right;
                }

                .footer-nav-c a {
                    font-family: 'Unbounded', cursive;
                    font-size: 1.25rem;
                    font-weight: 700;
                    color: white;
                    text-decoration: none;
                    transition: var(--transition-fast);
                }

                .footer-nav-c a:hover {
                    color: var(--primary);
                    transform: translateX(-10px);
                }

                .footer-bottom-c {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-top: 3rem;
                    border-top: 1px solid #222;
                }

                .legal-c {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    font-size: 0.8rem;
                    font-weight: 800;
                    color: var(--text-dim);
                }

                .dot-sep {
                    width: 4px;
                    height: 4px;
                    background: #333;
                    border-radius: 50%;
                }

                .social-links-c {
                    display: flex;
                    gap: 2rem;
                }

                .social-links-c a {
                    font-size: 0.9rem;
                    font-weight: 900;
                    color: white;
                    text-decoration: none;
                    transition: var(--transition-fast);
                }

                .social-links-c a:hover {
                    color: var(--primary);
                }

                @media (max-width: 900px) {
                    .footer-top-c {
                        flex-direction: column;
                        align-items: flex-start;
                        margin-bottom: 4rem;
                    }
                    .footer-nav-c {
                        text-align: left;
                    }
                    .footer-bottom-c {
                        flex-direction: column;
                        gap: 2rem;
                        align-items: flex-start;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
