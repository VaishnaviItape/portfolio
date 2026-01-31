import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Layers, Code2, Smartphone, GraduationCap, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Website', 'Admin Panel', 'Mobile App'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="projects-creative-header">
        <div className="badge-creative">Selected Works</div>
        <h2 className="title-huge">DIGITAL <span className="text-gradient">ARTIFACTS.</span></h2>

        <div className="creative-filters">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`c-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="projects-showcase">
        <AnimatePresence mode='wait'>
          <motion.div
            layout
            key={activeCategory}
            className="showcase-grid"
          >
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={project.id}
                className={`project-entry card-premium ${project.category === 'Mobile App' ? 'mobile-entry' : ''}`}
              >
                <div className="p-visual">
                  <img src={project.image} alt={project.title} />
                  <div className="p-category-badge">{project.category}</div>
                </div>

                <div className="p-details">
                  <div className="p-meta">
                    <h3 className="p-title">{project.title}</h3>
                    <div className="p-stack">
                      {project.techStack.map(t => <span key={t} className="p-tech">{t}</span>)}
                    </div>
                  </div>
                  <p className="p-desc">{project.description}</p>
                  <div className="p-actions">
                    <a href="#" className="p-link main">EXPLORE <ExternalLink size={16} /></a>
                    <a href="#" className="p-link"><Github size={18} /></a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .projects-creative-header {
          margin-bottom: 6rem;
        }

        .title-huge {
          font-size: 5rem;
          margin-bottom: 3rem;
        }

        .creative-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .c-filter-btn {
          padding: 1rem 2rem;
          background: var(--bg-card);
          border: var(--border-bold);
          border-radius: var(--radius-full);
          color: white;
          font-family: 'Unbounded', cursive;
          font-size: 0.8rem;
          font-weight: 700;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .c-filter-btn.active {
          background: var(--primary);
          color: var(--bg-deep);
          border-color: var(--primary);
          box-shadow: var(--shadow-neo);
        }

        .showcase-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }

        .project-entry {
          display: flex;
          flex-direction: column;
        }

        .p-visual {
          position: relative;
          aspect-ratio: 16/9;
          overflow: hidden;
          background: var(--bg-accent);
        }

        .mobile-entry .p-visual {
          aspect-ratio: 9/16;
          max-height: 500px;
          margin: 2rem auto;
          border-radius: 40px;
          border: 12px solid #222;
          width: fit-content;
        }

        .p-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: var(--transition-smooth);
        }

        .project-entry:hover .p-visual img {
          transform: scale(1.1);
        }

        .p-category-badge {
          position: absolute;
          top: 1.5rem;
          left: 1.5rem;
          padding: 0.5rem 1rem;
          background: var(--primary);
          color: var(--bg-deep);
          font-weight: 900;
          font-size: 0.7rem;
          text-transform: uppercase;
        }

        .p-details {
          padding: 3rem;
          background: var(--bg-card);
        }

        .p-title {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: white;
        }

        .p-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .p-tech {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--primary);
          padding: 0.4rem 0.8rem;
          background: rgba(197, 255, 65, 0.05);
          border: 1px solid rgba(197, 255, 65, 0.2);
          border-radius: 4px;
        }

        .p-desc {
          color: var(--text-gray);
          margin-bottom: 3rem;
          line-height: 1.6;
        }

        .p-actions {
          display: flex;
          align-items: center;
          gap: 2rem;
          border-top: 1px solid #222;
          padding-top: 2rem;
        }

        .p-link {
          text-decoration: none;
          color: var(--text-gray);
          font-weight: 800;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: var(--transition-fast);
        }

        .p-link.main {
          color: var(--primary);
        }

        .p-link:hover {
          color: white;
          transform: translateX(5px);
        }

        @media (max-width: 1100px) {
          .showcase-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .title-huge { font-size: 3rem; }
          .p-details { padding: 2rem; }
          .p-title { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default Projects;
