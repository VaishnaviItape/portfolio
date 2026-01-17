import React from 'react';
import { profile } from '../data/profile';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <span className="section-label">Get in Touch</span>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to start a project?</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '3rem' }}>
          I'm currently available for freelance projects and open to full-time opportunities.
        </p>

        <div className="contact-card">
          <div className="info-row">
            <div className="c-item">
              <Mail className="c-icon" />
              <span>{profile.email}</span>
            </div>
            <div className="c-item">
              <Phone className="c-icon" />
              <span>{profile.phone}</span>
            </div>
            <div className="c-item">
              <MapPin className="c-icon" />
              <span>{profile.location}</span>
            </div>
          </div>

          <a href={`mailto:${profile.email}`} className="main-btn">
            Say Hello <Send size={18} />
          </a>
        </div>
      </div>

      <style>{`
                .contact-card {
                    background: white;
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    padding: 3rem;
                    box-shadow: var(--shadow-lg);
                }

                .info-row {
                    display: flex;
                    justify-content: center;
                    gap: 2rem;
                    flex-wrap: wrap;
                    margin-bottom: 2.5rem;
                }

                .c-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                }

                .c-icon {
                    color: var(--primary);
                    width: 24px;
                    height: 24px;
                }

                .c-item span {
                    font-weight: 500;
                    color: var(--text-main);
                }

                .main-btn {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.8rem;
                    background: var(--text-main);
                    color: white;
                    padding: 1rem 3rem;
                    border-radius: 50px;
                    font-size: 1.1rem;
                    font-weight: 600;
                    transition: transform 0.2s;
                }

                .main-btn:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }
            `}</style>
    </section>
  );
};

export default Contact;
