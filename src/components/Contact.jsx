import React from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="contact-creative-wrapper">
        <div className="contact-text-huge">
          <div className="badge-creative">Collaboration</div>
          <h2 className="title-massive">READY TO <span className="text-gradient">START?</span></h2>
          <p className="contact-p-creative">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <div className="contact-quick-info">
            <div className="info-item-c">
              <span className="info-c-label">EMAIL</span>
              <a href="mailto:itapev2@gmail.com" className="info-c-value">itapev2@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="contact-form-card card-premium">
          <form onSubmit={(e) => e.preventDefault()} className="c-form">
            <div className="c-input-group">
              <label>What's your name?</label>
              <input type="text" placeholder="John Doe" required />
            </div>
            <div className="c-input-group">
              <label>Your email address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            <div className="c-input-group">
              <label>Tell me about your project</label>
              <textarea placeholder="Hello, I have an idea..." rows="4" required></textarea>
            </div>
            <button type="submit" className="btn-main">
              SEND MESSAGE <Send size={20} />
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact-creative-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }

        .title-massive {
          font-size: clamp(3rem, 8vw, 6.5rem);
          line-height: 0.9;
          margin-bottom: 2.5rem;
        }

        .contact-p-creative {
          font-size: 1.25rem;
          color: var(--text-gray);
          margin-bottom: 4rem;
          max-width: 500px;
        }

        .contact-quick-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-c-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--primary);
          margin-bottom: 0.5rem;
        }

        .info-c-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          text-decoration: none;
          transition: var(--transition-fast);
        }

        .info-c-value:hover {
          color: var(--primary);
        }

        .contact-form-card {
          padding: 4rem;
        }

        .c-form {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .c-input-group {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .c-input-group label {
          font-family: 'Unbounded', cursive;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-dim);
        }

        .c-input-group input, .c-input-group textarea {
          background: var(--bg-accent);
          border: var(--border-bold);
          border-radius: var(--radius-sm);
          padding: 1.25rem;
          color: white;
          font-family: inherit;
          font-size: 1rem;
          transition: var(--transition-fast);
        }

        .c-input-group input:focus, .c-input-group textarea:focus {
          outline: none;
          border-color: var(--primary);
          background: var(--bg-card);
        }

        @media (max-width: 1024px) {
          .contact-creative-wrapper {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
