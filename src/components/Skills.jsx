import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { Code2, PenTool, Smartphone, Layers } from 'lucide-react';

const Skills = () => {
  const allSkills = [
    { name: 'React', color: '#61DAFB' },
    { name: 'JavaScript', color: '#F7DF1E' },
    { name: 'Node.js', color: '#339933' },
    { name: 'MongoDB', color: '#47A248' },
    { name: 'Express', color: '#000000' },
    { name: 'Tailwind', color: '#06B6D4' },
    { name: 'Firebase', color: '#FFCA28' },
    { name: 'Git', color: '#F05032' },
    { name: 'React Native', color: '#61DAFB' },
    { name: 'Figma', color: '#F24E1E' },
    { name: 'Python', color: '#3776AB' },
    { name: 'TypeScript', color: '#3178C6' }
  ];

  return (
    <section id="skills" className="section">
      <div className="skills-creative-wrapper">
        <div className="skills-intro">
          <div className="badge-creative">Tech Stack</div>
          <h2 className="title-huge">MY <span className="text-gradient">ARSENAL.</span></h2>
          <p className="subtitle-gray">Technologies I use to bring ideas into the physical world.</p>
        </div>

        <div className="skills-mosaic">
          {allSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: index % 2 === 0 ? 2 : -2 }}
              className="skill-sticker"
              style={{ '--accent-color': skill.color }}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-creative-wrapper {
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        .title-huge {
          font-size: 5rem;
          margin-top: 1rem;
        }

        .subtitle-gray {
          color: var(--text-gray);
          font-size: 1.25rem;
          max-width: 500px;
          margin-top: 1rem;
        }

        .skills-mosaic {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .skill-sticker {
          padding: 1rem 2rem;
          background: var(--bg-card);
          border: var(--border-bold);
          border-radius: var(--radius-sm);
          font-family: 'Unbounded', cursive;
          font-weight: 700;
          font-size: 1rem;
          cursor: crosshair;
          transition: var(--transition-fast);
          color: white;
          position: relative;
        }

        .skill-sticker::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--accent-color);
          opacity: 0;
          transition: var(--transition-fast);
          z-index: -1;
          border-radius: inherit;
        }

        .skill-sticker:hover {
          color: var(--bg-deep);
          border-color: var(--accent-color);
          box-shadow: 6px 6px 0px var(--accent-color);
        }

        .skill-sticker:hover::before {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .title-huge { font-size: 3rem; }
          .skills-mosaic { gap: 1rem; }
          .skill-sticker { padding: 0.8rem 1.2rem; font-size: 0.8rem; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
