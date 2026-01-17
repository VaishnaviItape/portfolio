import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { ArrowDown, Mail, Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">

        {/* Profile Image */}
        <motion.div
          className="profile-wrapper"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="img-container">
            <img src={profile.imgSrc} alt="Vaishnavi Itape" />
          </div>
          <div className="status-indicator">
            <span className="dot"></span> Open to work
          </div>
        </motion.div>

        {/* Main Text */}
        <motion.div
          className="text-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1>
            Building digital products, <br />
            <span className="gradient-text">brands, and experiences.</span>
          </h1>
          <p className="bio">
            Hi, I'm <strong>Vaishnavi Itape</strong>. A Frontend Developer at <strong>{profile.company}</strong> with {profile.experience} of experience. I specialize in building accessible, pixel-perfect user interfaces that blend form and function.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a href="#contact" className="btn btn-primary">
            Contact Me <Mail size={18} />
          </a>
          <a href="#projects" className="btn btn-outline">
            View Work <ArrowDown size={18} />
          </a>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          className="socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
        </motion.div>

      </div>

      <style>{`
        .hero-section {
            min-height: 90vh; /* Not full 100vh to show some content below */
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .hero-container {
            max-width: 800px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2rem;
        }

        .profile-wrapper {
            position: relative;
        }

        .img-container {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            overflow: hidden;
            border: 4px solid white;
            box-shadow: var(--shadow-md);
        }

        .img-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .status-indicator {
            position: absolute;
            bottom: 5px;
            right: -10px;
            background: white;
            padding: 0.4rem 0.8rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 600;
            color: var(--text-muted);
            box-shadow: var(--shadow-sm);
            display: flex;
            align-items: center;
            gap: 0.4rem;
        }

        .dot {
            width: 8px;
            height: 8px;
            background: #10b981; /* Green 500 */
            border-radius: 50%;
            animation: pulse 2s infinite;
        }

        h1 {
            font-size: 3.5rem;
            line-height: 1.1;
            margin-bottom: 1.5rem;
            color: var(--text-main);
        }

        .gradient-text {
            background: linear-gradient(135deg, var(--primary) 0%, #818cf8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .bio {
            font-size: 1.2rem;
            color: var(--text-muted);
            line-height: 1.7;
            max-width: 600px;
            margin: 0 auto;
        }

        .bio strong {
            color: var(--text-main);
            font-weight: 600;
        }

        .actions {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.8rem 1.5rem;
            border-radius: 50px;
            font-weight: 500;
            font-size: 1rem;
            transition: all 0.2s ease;
        }

        .btn-primary {
            background: var(--primary);
            color: white;
            box-shadow: 0 4px 14px 0 rgba(79, 70, 229, 0.4);
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            background: var(--primary-hover);
        }

        .btn-outline {
            background: white;
            border: 1px solid var(--border);
            color: var(--text-main);
        }

        .btn-outline:hover {
            background: var(--bg-body);
            border-color: var(--text-muted);
        }

        .socials {
            display: flex;
            gap: 1.5rem;
            margin-top: 2rem;
            color: var(--text-muted);
        }

        .socials a {
            padding: 0.5rem;
            border-radius: 50%;
            transition: all 0.2s;
        }
        
        .socials a:hover {
            color: var(--primary);
            background: rgba(79, 70, 229, 0.1);
        }

        @keyframes pulse {
            0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
            70% { box-shadow: 0 0 0 6px rgba(16, 185, 129, 0); }
            100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }

        @media (max-width: 768px) {
            h1 { font-size: 2.5rem; }
            .bio { font-size: 1rem; }
            .actions { flex-direction: column; width: 100%; }
            .btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
