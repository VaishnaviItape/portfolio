import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Layers, Code2, Smartphone, GraduationCap, Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    { name: 'All', icon: <Layers size={18} /> },
    { name: 'Website', icon: <Code2 size={18} /> },
    { name: 'Admin Panel', icon: <Layers size={18} /> },
    { name: 'Mobile App', icon: <Smartphone size={18} /> },
    { name: 'Final Year', icon: <GraduationCap size={18} /> },
  ];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="header-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="badge"
          >
            <Layers size={14} />
            <span>Portfolio</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            A curated selection of my work across Web, Mobile, and Enterprise solutions.
          </motion.p>
        </div>

        {/* Categories */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`tab-btn ${activeCategory === cat.name ? 'active' : ''}`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="projects-grid">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="project-card"
              >
                {/* Image Box */}
                <div className="card-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="image-overlay">
                    <div className="overlay-actions">
                      {/* <button className="action-btn" title="View Code">
                        <Github size={20} />
                      </button> */}
                      {/* <button className="action-btn primary" title="Live Demo">
                        <ExternalLink size={20} />
                      </button> */}
                    </div>
                  </div>
                  <span className="category-tag">
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-stack">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category.</p>
          </div>
        )}
      </div>

      <style>{`
                .projects-section {
                    padding: 6rem 0;
                    background: var(--bg-body);
                    position: relative;
                }

                .header-content {
                    text-align: center;
                    max-width: 600px;
                    margin: 0 auto 4rem;
                }

                .badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.5rem 1rem;
                    background: #e0e7ff;
                    color: var(--primary);
                    border-radius: 50px;
                    font-size: 0.875rem;
                    font-weight: 600;
                    margin-bottom: 1rem;
                }

                .header-content h2 {
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    background: linear-gradient(to right, var(--primary), #2563eb);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .header-content p {
                    color: var(--text-muted);
                    font-size: 1.1rem;
                }

                /* Tabs */
                .filter-tabs {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 3rem;
                }

                .tab-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    padding: 0.6rem 1.5rem;
                    border-radius: 50px;
                    border: 1px solid var(--border);
                    background: var(--bg-card);
                    color: var(--text-muted);
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .tab-btn:hover {
                    background: #f1f5f9;
                }

                .tab-btn.active {
                    background: var(--primary);
                    color: white;
                    border-color: var(--primary);
                    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
                }

                /* Grid */
                .projects-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                    gap: 2.5rem;
                }

                .project-card {
                    background: var(--bg-card);
                    border-radius: 16px;
                    border: 1px solid var(--border);
                    overflow: hidden;
                    box-shadow: var(--shadow-sm);
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                }

                .project-card:hover {
                    box-shadow: var(--shadow-lg);
                    transform: translateY(-5px);
                    border-color: #cbd5e1;
                }

                .card-image-wrapper {
                    position: relative;
                    height: 220px;
                    overflow: hidden;
                }

                .card-image-wrapper img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }

                .project-card:hover .card-image-wrapper img {
                    transform: scale(1.05);
                }

                .image-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(0, 0, 0, 0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .project-card:hover .image-overlay {
                    opacity: 1;
                }

                .overlay-actions {
                    display: flex;
                    gap: 1rem;
                }

                .action-btn {
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    background: white;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-main);
                    cursor: pointer;
                    transition: all 0.2s;
                    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
                }

                .action-btn:hover {
                    transform: scale(1.1);
                }

                .action-btn.primary {
                    background: var(--primary);
                    color: white;
                }

                .category-tag {
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(4px);
                    padding: 0.3rem 0.8rem;
                    border-radius: 8px;
                    font-size: 0.75rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    color: var(--text-main);
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }

                .card-content {
                    padding: 1.5rem;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                }

                .card-content h3 {
                    font-size: 1.25rem;
                    margin-bottom: 0.5rem;
                    color: var(--text-main);
                }

                .card-content p {
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                    flex: 1; /* Pushes tech stack down */
                }

                .tech-stack {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    padding-top: 1rem;
                    border-top: 1px solid var(--border);
                }

                .tech-badge {
                    font-size: 0.8rem;
                    padding: 0.25rem 0.75rem;
                    background: #f1f5f9;
                    color: var(--text-muted);
                    border-radius: 6px;
                    font-weight: 500;
                }

                .no-projects {
                    text-align: center;
                    color: var(--text-muted);
                    padding: 3rem;
                }

                @media (max-width: 768px) {
                    .projects-grid {
                        grid-template-columns: 1fr;
                    }
                    .header-content h2 {
                        font-size: 2rem;
                    }
                }
            `}</style>
    </section>
  );
};

export default Projects;
