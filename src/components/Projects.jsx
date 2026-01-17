import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <span className="section-label">Portfolio</span>
        <h2 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Selected Projects</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '4rem', maxWidth: '600px' }}>
          A collection of {projects.length} projects showcasing my expertise in building scalable, user-centric interfaces.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="card-content">
                <div className="card-header">
                  <span className="category">{project.category}</span>
                  <div className="links">
                    <button className="icon-btn"><FolderGit2 size={16} /></button>
                    <button className="icon-btn"><ArrowUpRight size={16} /></button>
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description.substring(0, 100)}...</p>
                <div className="tech-tags">
                  {project.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
            gap: 2rem;
        }

        .project-card {
            background: var(--bg-card);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            overflow: hidden;
            transition: all 0.3s ease;
        }

        .project-card:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
            border-color: #cbd5e1;
        }

        .card-image {
            height: 200px;
            overflow: hidden;
            border-bottom: 1px solid var(--border);
        }

        .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .project-card:hover .card-image img {
            transform: scale(1.05);
        }

        .card-content {
            padding: 1.5rem;
        }

        .card-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        .category {
            font-size: 0.75rem;
            text-transform: uppercase;
            font-weight: 600;
            color: var(--primary);
            background: #e0e7ff;
            padding: 0.25rem 0.75rem;
            border-radius: 4px;
        }

        .links {
            display: flex;
            gap: 0.5rem;
        }

        .icon-btn {
            background: transparent;
            border: none;
            color: var(--text-muted);
            cursor: pointer;
            transition: color 0.2s;
        }
        
        .icon-btn:hover { color: var(--text-main); }

        .card-content h3 {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
        }

        .card-content p {
            color: var(--text-muted);
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
        }

        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .tag {
            font-size: 0.8rem;
            color: var(--text-muted);
            background: var(--bg-body);
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            border: 1px solid var(--border);
        }
      `}</style>
    </section>
  );
};

export default Projects;
