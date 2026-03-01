import React from 'react';
import { workspaceImages } from '../constants';

const Workspace = () => {
  return (
    <section id="workspace" className="workspace">
      <div className="container">
        <div className="section-label">Our Workspace</div>
        <h2>Inside K.B.E.T. Enterprises</h2>
        <p className="section-description">
          Take a glimpse into our professional workspace and vibrant company culture.
        </p>
        <div className="workspace-gallery">
          {workspaceImages.map(item => (
            <div className="gallery-item" key={item.id}>
              <img src={item.url} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workspace;