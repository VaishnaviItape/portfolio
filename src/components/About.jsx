import React from 'react';
import { profile } from '../data/profile';

const About = () => {
  const values = [
    { id: 1, label: 'Continuous Learning', icon: '🚀' },
    { id: 2, label: 'User Centricity', icon: '👤' },
    { id: 3, label: 'Clean Architecture', icon: '📐' },
    { id: 4, label: 'Impact Driven', icon: '💥' },
  ];

  return (
    <section id="about" className="section content-focused">
      <div className="about-creative-grid">
        <div className="about-main-card card-premium">
          <div className="badge-creative">Background</div>
          <h2 className="about-heading-bold">The <span className="text-gradient">Journey</span> So Far</h2>
          <p className="about-text-p">
            I'm a self-taught architect of digital realms. My fascination with
            technology began with a simple "Hello World" and evolved into building
            full-scale applications that solve real human problems.
          </p>
          <div className="values-grid">
            {values.map(v => (
              <div key={v.id} className="value-tag">
                <span className="v-icon">{v.icon}</span>
                <span className="v-label">{v.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="about-info-stack">
          <div className="info-card-small card-premium">
            <h3>Education</h3>
            <p>Computer Science & Engineering</p>
            <span className="info-sub">2020 - 2024</span>
          </div>
          <div className="info-card-small card-premium highlight-p">
            <h3>Philosophy</h3>
            <p>"If you can imagine it, you can code it."</p>
          </div>
        </div>
      </div>

      <style>{`
        .about-creative-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 2.5rem;
          align-items: start;
        }

        .about-main-card {
          padding: 4rem;
        }

        .about-heading-bold {
          font-size: 4rem;
          line-height: 1;
          margin-bottom: 2rem;
        }

        .about-text-p {
          font-size: 1.2rem;
          color: var(--text-gray);
          max-width: 600px;
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        .values-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .value-tag {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.5rem;
          background: var(--bg-accent);
          border-radius: var(--radius-sm);
          font-weight: 700;
          font-size: 0.9rem;
          border: 1px solid transparent;
          transition: var(--transition-fast);
        }

        .value-tag:hover {
          border-color: var(--primary);
          transform: translateY(-5px);
        }

        .about-info-stack {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .info-card-small {
          padding: 2.5rem;
        }

        .info-card-small h3 {
          font-size: 1.5rem;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .info-card-small p {
          font-weight: 600;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .info-sub {
          font-size: 0.9rem;
          color: var(--text-dim);
          font-weight: 700;
        }

        .highlight-p {
          background: var(--primary);
          border: none;
        }

        .highlight-p h3, .highlight-p p {
          color: var(--bg-deep);
        }

        @media (max-width: 1024px) {
          .about-creative-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
