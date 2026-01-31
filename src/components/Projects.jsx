import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Layers, Github, ExternalLink, ArrowUpRight, Smartphone } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects-editorial">
      <div className="section-header">
        <span className="section-tag">
          <Layers size={14} />
          Selected Works
        </span>
        <h2>Creative <span className="gradient-text">Portfolio</span></h2>
        <p>A showcase of professional projects blending technical excellence with artistic design.</p>
      </div>

      {/* Category Filter */}
      <div className="filter-wrapper">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`filter-chip ${activeCategory === cat ? 'active' : ''}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="projects-editorial-grid">
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project, index) => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              key={project.id}
              className={`project-premium-card ${project.category === 'Mobile App' ? 'mobile-type' : ''}`}
            >
              <div className="card-media">
                {project.category === 'Mobile App' ? (
                  <div className="phone-mockup-container">
                    <div className="phone-frame">
                      <div className="phone-camera"></div>
                      <div className="phone-screen">
                        <img src={project.image} alt={project.title} loading="lazy" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <img src={project.image} alt={project.title} loading="lazy" />
                    <div className="card-overlay">
                      <div className="overlay-content">
                        <div className="project-links">
                          {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-link">
                              <Github size={20} />
                            </a>
                          )}
                          {project.link && (
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-link primary">
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </>
                )}
                <span className="cat-badge">
                  {project.category === 'Mobile App' && <Smartphone size={10} style={{ marginRight: '4px' }} />}
                  {project.category}
                </span>
              </div>

              <div className="card-body">
                <div className="title-row">
                  <h3>{project.title}</h3>
                  <ArrowUpRight size={20} className="title-arrow" />
                </div>
                <p className="description">{project.description}</p>

                <div className="stack-row">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="stack-pill">{tech}</span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="stack-more">+{project.techStack.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <style>{`
                .projects-editorial {
                    padding: 10rem 6%;
                }

                .section-header {
                    text-align: center;
                    max-width: 700px;
                    margin: 0 auto 5rem;
                }

                .section-header h2 {
                    font-size: 3.5rem;
                    margin-bottom: 1.5rem;
                }

                .section-header p {
                    font-size: 1.25rem;
                    color: var(--text-muted);
                }

                .filter-wrapper {
                    display: flex;
                    justify-content: center;
                    gap: 1rem;
                    margin-bottom: 4rem;
                    flex-wrap: wrap;
                }

                .filter-chip {
                    padding: 0.6rem 1.5rem;
                    background: transparent;
                    border: 1px solid var(--border);
                    border-radius: 50px;
                    font-weight: 600;
                    font-size: 0.95rem;
                    color: var(--text-muted);
                    transition: var(--transition-smooth);
                }

                .filter-chip:hover {
                    border-color: var(--primary);
                    color: var(--primary);
                }

                .filter-chip.active {
                    background: var(--secondary);
                    color: white;
                    border-color: var(--secondary);
                    box-shadow: var(--shadow-md);
                }

                .projects-editorial-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
                    gap: 3rem;
                }

                .project-premium-card {
                    background: var(--bg-card);
                    border-radius: var(--radius-lg);
                    border: 1px solid var(--border-light);
                    overflow: hidden;
                    transition: var(--transition-smooth);
                    display: flex;
                    flex-direction: column;
                }

                .project-premium-card:hover {
                    transform: translateY(-10px);
                    box-shadow: var(--shadow-xl);
                    border-color: var(--border);
                }

                .card-media {
                    position: relative;
                    height: 280px;
                    overflow: hidden;
                    background: var(--bg-soft);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .card-media > img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
                }

                .project-premium-card:hover .card-media > img {
                    transform: scale(1.08);
                }

                /* Mobile App Mockup Styles */
                .phone-mockup-container {
                    padding: 2rem;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(244, 63, 94, 0.1));
                }

                .phone-frame {
                    width: 140px;
                    height: 280px;
                    background: #1e293b;
                    border-radius: 24px;
                    border: 6px solid #0f172a;
                    position: relative;
                    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
                    overflow: hidden;
                }

                .phone-camera {
                    position: absolute;
                    top: 10px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 40px;
                    height: 12px;
                    background: #0f172a;
                    border-radius: 10px;
                    z-index: 10;
                }

                .phone-screen {
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    background: white;
                }

                .phone-screen img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .card-overlay {
                    position: absolute;
                    inset: 0;
                    background: rgba(15, 23, 42, 0.4);
                    backdrop-filter: blur(4px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: var(--transition-smooth);
                }

                .project-premium-card:hover .card-overlay {
                    opacity: 1;
                }

                .icon-link {
                    width: 50px;
                    height: 50px;
                    background: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--secondary);
                    transition: var(--transition-fast);
                }

                .icon-link:hover {
                    transform: scale(1.1);
                    background: var(--primary);
                    color: white;
                }

                .project-links {
                    display: flex;
                    gap: 1rem;
                }

                .cat-badge {
                    position: absolute;
                    top: 1.5rem;
                    left: 1.5rem;
                    padding: 0.4rem 1rem;
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(8px);
                    border-radius: 50px;
                    font-size: 0.75rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    color: var(--secondary);
                    display: flex;
                    align-items: center;
                    z-index: 5;
                }

                .card-body {
                    padding: 2rem;
                    flex: 1;
                }

                .title-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                }

                .title-row h3 {
                    font-size: 1.5rem;
                    letter-spacing: -0.02em;
                }

                .title-arrow {
                    color: var(--text-soft);
                    transition: var(--transition-smooth);
                }

                .project-premium-card:hover .title-arrow {
                    color: var(--primary);
                    transform: translate(3px, -3px);
                }

                .description {
                    color: var(--text-muted);
                    font-size: 1.05rem;
                    margin-bottom: 2rem;
                    line-height: 1.6;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .stack-row {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.6rem;
                    align-items: center;
                    margin-top: auto;
                }

                .stack-pill {
                    font-size: 0.8rem;
                    font-weight: 600;
                    padding: 0.4rem 0.8rem;
                    background: var(--bg-soft);
                    color: var(--text-muted);
                    border-radius: 6px;
                }

                .stack-more {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: var(--primary);
                }

                @media (max-width: 768px) {
                    .projects-editorial-grid {
                        grid-template-columns: 1fr;
                    }
                    .section-header h2 { font-size: 2.5rem; }
                    .card-media { height: auto; min-height: 220px; }
                    .phone-mockup-container { padding: 1.5rem; }
                    .phone-frame { width: 120px; height: 240px; }
                }
            `}</style>
    </section>
  );
};

export default Projects;
