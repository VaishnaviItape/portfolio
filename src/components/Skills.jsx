import React from 'react';
import { profile } from '../data/profile';
import { Code2, PenTool } from 'lucide-react';

const Skills = () => {
  // Grouping skills for better visuals
  const techSkills = profile.skills.filter(s => !['UI/UX Design', 'Git', 'Antigravity'].includes(s));
  const tools = ['Git', 'GitHub', 'Antigravity', 'VS Code', 'Figma'];

  return (
    <section id="skills" style={{ background: 'white' }}> {/* White strip for contrast */}
      <div className="container">
        <div className="skills-layout">

          <div className="skill-group">
            <div className="icon-header">
              <Code2 className="icon" size={32} />
              <h3>Development</h3>
            </div>
            <div className="pills">
              {techSkills.map(skill => (
                <span key={skill} className="pill">{skill}</span>
              ))}
            </div>
          </div>

          <div className="skill-group separator-line">
            <div className="icon-header">
              <PenTool className="icon" size={32} />
              <h3>Tools & Design</h3>
            </div>
            <div className="pills">
              {tools.map(skill => (
                <span key={skill} className="pill">{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
                .skills-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    background: var(--bg-body);
                    padding: 3rem;
                    border-radius: 20px;
                    border: 1px solid var(--border);
                }

                .icon-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .icon {
                    color: var(--primary);
                    background: #e0e7ff;
                    padding: 6px;
                    border-radius: 8px;
                    box-sizing: content-box;
                }

                .skill-group h3 {
                    font-size: 1.5rem;
                }

                .pills {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.8rem;
                }

                .pill {
                    font-size: 0.95rem;
                    color: var(--text-main);
                    background: white;
                    border: 1px solid var(--border);
                    padding: 0.6rem 1.2rem;
                    border-radius: 8px;
                    font-weight: 500;
                    box-shadow: var(--shadow-sm);
                }

                @media (max-width: 768px) {
                    .skills-layout { grid-template-columns: 1fr; gap: 2rem; }
                }
            `}</style>
    </section>
  );
};

export default Skills;
