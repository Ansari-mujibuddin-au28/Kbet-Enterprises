import React from 'react';
import { projects } from '../constants';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-label">Our Projects</div>
        <h2>Construction Portfolio</h2>
        <p className="section-description">
          Showcasing our completed and ongoing construction projects that stand as testaments to our commitment to quality and excellence.
        </p>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;