import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Briefcase, GraduationCap, Calendar, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="about-editorial">
      <div className="about-wrapper">

        {/* Intro Content */}
        <div className="about-intro">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="intro-text"
          >
            <span className="section-tag">About Me</span>
            <h2>Bridging <span className="gradient-text">Design</span> and <span className="gradient-text">Performance</span></h2>
            <p className="lead-text">
              I am a Frontend Specialist with a passion for building high-fidelity digital interfaces.
              My approach combines aesthetic precision with technical rigor.
            </p>
            <p className="description-text">{profile.bio}</p>

            <div className="experience-stats">
              <div className="stat-card">
                <h3>1.5+</h3>
                <span>Years of Expertise</span>
              </div>
              <div className="stat-card">
                <h3>12+</h3>
                <span>Projects Shipped</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="profile-display"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="image-frame">
              <img src={profile.imgSrc} alt="Vaishnavi" />
              <div className="frame-decoration"></div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Section */}
        <div className="timeline-grid">
          <div className="timeline-column">
            <div className="column-header">
              <Briefcase size={24} className="text-primary" />
              <h3>Experience</h3>
            </div>
            <div className="timeline-items">
              {profile.workExperience.map((work, i) => (
                <motion.div
                  className="timeline-card"
                  key={`work-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="time-period">{work.duration}</span>
                  <h4>{work.role}</h4>
                  <span className="location">{work.company}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="timeline-column">
            <div className="column-header">
              <GraduationCap size={24} className="text-accent" />
              <h3>Education</h3>
            </div>
            <div className="timeline-items">
              {profile.education.map((edu, i) => (
                <motion.div
                  className="timeline-card"
                  key={`edu-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="time-period">{edu.year}</span>
                  <h4>{edu.degree}</h4>
                  <span className="location">{edu.institution}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
                .about-editorial {
                    padding: 8rem 6%;
                    position: relative;
                }

                .about-wrapper {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .about-intro {
                    display: grid;
                    grid-template-columns: 1.2fr 0.8fr;
                    gap: 6rem;
                    align-items: center;
                    margin-bottom: 8rem;
                }

                .intro-text h2 {
                    font-size: 3.5rem;
                    margin-bottom: 2rem;
                }

                .lead-text {
                    font-size: 1.25rem;
                    font-weight: 500;
                    color: var(--text-main);
                    margin-bottom: 1.5rem;
                    line-height: 1.5;
                }

                .description-text {
                    color: var(--text-muted);
                    font-size: 1.1rem;
                    line-height: 1.7;
                    margin-bottom: 3rem;
                }

                .experience-stats {
                    display: flex;
                    gap: 3rem;
                }

                .stat-card h3 {
                    font-size: 2.5rem;
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                }

                .stat-card span {
                    font-size: 0.9rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    color: var(--text-soft);
                }

                .profile-display {
                    position: relative;
                }

                .image-frame {
                    position: relative;
                    border-radius: var(--radius-lg);
                    overflow: hidden;
                    aspect-ratio: 4/5;
                    box-shadow: var(--shadow-xl);
                }

                .image-frame img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .frame-decoration {
                    position: absolute;
                    inset: 0;
                    border: 12px solid white;
                    border-radius: var(--radius-lg);
                    pointer-events: none;
                }

                .timeline-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                }

                .column-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 3rem;
                }

                .column-header h3 {
                    font-size: 1.75rem;
                }

                .timeline-items {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem;
                }

                .timeline-card {
                    background: var(--bg-card);
                    padding: 2rem;
                    border-radius: var(--radius-md);
                    border: 1px solid var(--border-light);
                    transition: var(--transition-smooth);
                    position: relative;
                }

                .timeline-card:hover {
                    border-color: var(--primary);
                    box-shadow: var(--shadow-lg);
                    transform: translateX(10px);
                }

                .time-period {
                    display: block;
                    font-size: 0.85rem;
                    font-weight: 800;
                    color: var(--primary);
                    margin-bottom: 0.5rem;
                    text-transform: uppercase;
                    letter-spacing: 0.05em;
                }

                .timeline-card h4 {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                }

                .location {
                    color: var(--text-muted);
                    font-weight: 500;
                }

                @media (max-width: 900px) {
                    .about-intro {
                        grid-template-columns: 1fr;
                        gap: 4rem;
                    }
                    .timeline-grid {
                        grid-template-columns: 1fr;
                    }
                    .intro-text h2 { font-size: 2.5rem; }
                }
            `}</style>
    </section>
  );
};

export default About;
