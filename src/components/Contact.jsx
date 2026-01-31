import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Mail, Phone, MapPin, Send, MessageSquare, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="contact-editorial">
      <div className="contact-container">
        <div className="contact-header">
          <span className="section-tag">Contact</span>
          <h2>Let's build something <span className="gradient-text">extraordinary</span> together.</h2>
          <p>Whether you have a question or just want to say hi, my inbox is always open.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Info Cards */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="info-card-premium">
              <div className="info-icon bg-blue">
                <Mail size={24} />
              </div>
              <div className="info-details">
                <span>Email me at</span>
                <h4>{profile.email}</h4>
              </div>
            </div>

            <div className="info-card-premium">
              <div className="info-icon bg-rose">
                <MessageSquare size={24} />
              </div>
              <div className="info-details">
                <span>Let's chat</span>
                <h4>{profile.phone}</h4>
              </div>
            </div>

            <div className="info-card-premium">
              <div className="info-icon bg-indigo">
                <MapPin size={24} />
              </div>
              <div className="info-details">
                <span>Based in</span>
                <h4>{profile.location}</h4>
              </div>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            className="contact-cta-box"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-content">
              <h3>Have a specific project in mind?</h3>
              <p>I specialize in building custom web solutions from the ground up.</p>

              <a href={`mailto:${profile.email}`} className="btn-primary-large">
                Send a Message <Send size={20} />
              </a>
            </div>

            <div className="cta-footer">
              <p>Current Availability: <span>Available for Hire</span></p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
                .contact-editorial {
                    padding: 10rem 6%;
                    background: var(--secondary);
                    color: white;
                    position: relative;
                    overflow: hidden;
                }

                .contact-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    position: relative;
                    z-index: 10;
                }

                .contact-header {
                    text-align: center;
                    max-width: 800px;
                    margin: 0 auto 6rem;
                }

                .contact-header h2 {
                    font-size: clamp(2.5rem, 5vw, 4rem);
                    margin: 1.5rem 0;
                    color: white;
                }

                .contact-header p {
                    font-size: 1.25rem;
                    color: var(--text-soft);
                }

                .contact-grid {
                    display: grid;
                    grid-template-columns: 1fr 1.2fr;
                    gap: 4rem;
                }

                .contact-info {
                    display: flex;
                    flex-direction: column;
                    gap: 1.5rem;
                }

                .info-card-premium {
                    background: rgba(255, 255, 255, 0.05);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    padding: 2rem;
                    border-radius: var(--radius-md);
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                    transition: var(--transition-smooth);
                }

                .info-card-premium:hover {
                    background: rgba(255, 255, 255, 0.1);
                    transform: translateX(10px);
                }

                .info-icon {
                    width: 56px;
                    height: 56px;
                    border-radius: 14px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .bg-blue { background: #3b82f6; }
                .bg-rose { background: #f43f5e; }
                .bg-indigo { background: #6366f1; }

                .info-details span {
                    font-size: 0.8rem;
                    color: var(--text-soft);
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-weight: 700;
                    margin-bottom: 0.25rem;
                    display: block;
                }

                .info-details h4 {
                    font-size: 1.25rem;
                    font-weight: 600;
                }

                .contact-cta-box {
                    background: white;
                    color: var(--text-main);
                    padding: 4rem;
                    border-radius: var(--radius-lg);
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .cta-content h3 {
                    font-size: 2rem;
                    margin-bottom: 1.5rem;
                }

                .cta-content p {
                    font-size: 1.1rem;
                    color: var(--text-muted);
                    margin-bottom: 3rem;
                    line-height: 1.6;
                }

                .btn-primary-large {
                    display: inline-flex;
                    align-items: center;
                    gap: 1rem;
                    padding: 1.25rem 3rem;
                    background: var(--primary);
                    color: white;
                    border-radius: 50px;
                    font-weight: 700;
                    font-size: 1.1rem;
                    transition: var(--transition-smooth);
                    box-shadow: 0 10px 30px rgba(99, 102, 241, 0.3);
                }

                .btn-primary-large:hover {
                    background: var(--secondary);
                    transform: translateY(-5px);
                    box-shadow: 0 20px 40px rgba(15, 23, 42, 0.2);
                }

                .cta-footer {
                    margin-top: 4rem;
                    padding-top: 2rem;
                    border-top: 1px solid var(--border);
                }

                .cta-footer p {
                    font-weight: 600;
                    color: var(--text-muted);
                }

                .cta-footer span {
                    color: #10b981;
                    margin-left: 0.5rem;
                }

                @media (max-width: 900px) {
                    .contact-grid {
                        grid-template-columns: 1fr;
                    }
                    .contact-cta-box {
                        padding: 2.5rem;
                    }
                    .contact-header h2 { font-size: 2rem; }
                }
            `}</style>
    </section>
  );
};

export default Contact;
