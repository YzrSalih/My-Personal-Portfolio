import React from "react";
import "./Home.css";

const Projects = () => {
  return (
    <section className="projects-section" style={{ minHeight: '60vh', padding: '64px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ color: '#a18aff', fontSize: '2.2rem', fontWeight: 800, marginBottom: '32px' }}>Projects</h2>
      <div style={{ color: '#eaeaea', fontSize: '1.15rem', maxWidth: '700px', textAlign: 'center' }}>
        {/* Buraya projelerinizi ekleyebilirsiniz */}
        Portfolio, E-commerce, Blog, Dashboard, Landing Page, ...
      </div>
    </section>
  );
};

export default Projects;
