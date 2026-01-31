import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Terminal, Layout, Database, Cpu, Globe, Tool } from 'lucide-react';

const Skills = () => {
  const skillGroups = [
    {
      title: "Frontend Mastery",
      icon: <Layout className="text-primary" />,
      skills: profile.skills.filter(s => ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'Material UI'].includes(s)),
      desc: "Crafting beautiful and responsive user interfaces."
    },
    {
      title: "Performance & Tools",
      icon: <Terminal className="text-accent" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Vite', 'Webpack'],
      desc: "Optimizing code and using industry-standard tools."
    },
    {
      title: "Creative Design",
      icon: <Globe className="text-primary" />,
      skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Accessibility'],
      desc: "Bridging the gap between design and code."
    }
  ];

  return (
    <section id="skills" className="skills-editorial">
      <div className="section-header">
        <span className="section-tag">Expertise</span>
        <h2>Technical <span className="gradient-text">Skills</span></h2>
        <p>A comprehensive toolkit of technologies I use to bring ideas to life.</p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            className="skill-card-premium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card-header">
              <div className="icon-box">
                {group.icon}
              </div>
              <h3>{group.title}</h3>
            </div>
            <p className="card-desc">{group.desc}</p>
            <div className="skill-pills">
              {group.skills.map(skill => (
                <span key={skill} className="skill-pill-item">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
                .skills-editorial {
                    padding: 8rem 6%;
                    background: var(--bg-soft);
                    position: relative;
                }

                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
                    gap: 2rem;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .skill-card-premium {
                    background: var(--bg-card);
                    padding: 2.5rem;
                    border-radius: var(--radius-lg);
                    border: 1px solid var(--border-light);
                    transition: var(--transition-smooth);
                }

                .skill-card-premium:hover {
                    box-shadow: var(--shadow-xl);
                    transform: translateY(-5px);
                    border-color: var(--primary);
                }

                .card-header {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                    margin-bottom: 1.5rem;
                }

                .icon-box {
                    width: 48px;
                    height: 48px;
                    background: var(--bg-soft);
                    border-radius: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: var(--transition-fast);
                }

                .skill-card-premium:hover .icon-box {
                    background: var(--primary);
                    color: white;
                }

                .skill-card-premium:hover .icon-box svg {
                    color: white;
                }

                .card-header h3 {
                    font-size: 1.5rem;
                    letter-spacing: -0.02em;
                }

                .card-desc {
                    color: var(--text-muted);
                    font-size: 0.95rem;
                    margin-bottom: 2rem;
                    line-height: 1.6;
                }

                .skill-pills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                }

                .skill-pill-item {
                    font-size: 0.85rem;
                    font-weight: 600;
                    padding: 0.4rem 1rem;
                    background: var(--bg-soft);
                    color: var(--text-main);
                    border-radius: 50px;
                    border: 1px solid var(--border-light);
                    transition: var(--transition-fast);
                }

                .skill-pill-item:hover {
                    background: var(--primary);
                    color: white;
                    border-color: var(--primary);
                }

                @media (max-width: 768px) {
                    .skills-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
    </section>
  );
};

export default Skills;
