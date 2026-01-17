import React from 'react';
import { profile } from '../data/profile';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">

          {/* Text Content */}
          <div className="text-col">
            <span className="section-label">About Me</span>
            <h2>More than just code</h2>
            <p className="lead">
              I'm a developer who cares deeply about user experience. I don't just write code; I build solutions that solve real problems.
            </p>
            <p className="body-text">{profile.bio}</p>

            <div className="stats-row">
              <div className="stat">
                <span className="num">1.5+</span>
                <span className="txt">Years Experience</span>
              </div>
              <div className="stat">
                <span className="num">12+</span>
                <span className="txt">Projects Completed</span>
              </div>
            </div>
          </div>

          {/* Timeline Content */}
          <div className="timeline-col">
            <h3 className="col-title">Experience & Education</h3>

            <div className="timeline">
              {profile.workExperience.map((work, i) => (
                <div className="timeline-item" key={`work-${i}`}>
                  <div className="dot active"></div>
                  <span className="date">{work.duration}</span>
                  <h4>{work.role}</h4>
                  <div className="place">{work.company}</div>
                </div>
              ))}

              {profile.education.map((edu, i) => (
                <div className="timeline-item" key={`edu-${i}`}>
                  <div className="dot"></div>
                  <span className="date">{edu.year}</span>
                  <h4>{edu.degree}</h4>
                  <div className="place">{edu.institution}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
            .about-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 4rem;
                align-items: start;
            }

            .lead {
                font-size: 1.25rem;
                color: var(--text-main);
                font-weight: 500;
                margin-bottom: 1.5rem;
            }

            .body-text {
                color: var(--text-muted);
                margin-bottom: 2.5rem;
            }

            .stats-row {
                display: flex;
                gap: 3rem;
                border-top: 1px solid var(--border);
                padding-top: 2rem;
            }

            .stat {
                display: flex;
                flex-direction: column;
            }

            .num {
                font-size: 2.5rem;
                font-weight: 700;
                color: var(--primary);
                line-height: 1;
                margin-bottom: 0.5rem;
            }

            .txt {
                font-size: 0.9rem;
                color: var(--text-muted);
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }

            .col-title {
                margin-bottom: 2rem;
                padding-bottom: 1rem;
                border-bottom: 2px solid var(--border);
            }

            .timeline-item {
                position: relative;
                padding-left: 2rem;
                padding-bottom: 2.5rem;
                border-left: 2px solid var(--border);
            }

            .timeline-item:last-child {
                border-left-color: transparent;
            }

            .dot {
                position: absolute;
                left: -6px; /* 2px border width + 4px offset to center 10px dot */
                top: 0;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background: var(--bg-body);
                border: 2px solid var(--text-muted);
            }

            .dot.active {
                background: var(--primary);
                border-color: var(--primary);
            }

            .date {
                font-size: 0.85rem;
                font-weight: 600;
                color: var(--primary);
                margin-bottom: 0.25rem;
                display: block;
            }

            .timeline-item h4 {
                font-size: 1.1rem;
                margin-bottom: 0.25rem;
            }

            .place {
                font-size: 0.95rem;
                color: var(--text-muted);
            }

            @media (max-width: 768px) {
                .about-grid { grid-template-columns: 1fr; }
            }
        `}</style>
    </section>
  );
};

export default About;
