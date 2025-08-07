import React from "react";
import "./Home.css";

const Skills = () => {
  return (
    <section className="skills-section" style={{ minHeight: '60vh', padding: '64px 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2 style={{ color: '#a18aff', fontSize: '2.2rem', fontWeight: 800, marginBottom: '32px' }}>Skills</h2>
      <div style={{ color: '#eaeaea', fontSize: '1.15rem', maxWidth: '700px', textAlign: 'center' }}>
        {/* Buraya yeteneklerinizi ekleyebilirsiniz */}
        React, JavaScript, TypeScript, HTML, CSS, Redux, Node.js, Express, MongoDB, Git, Figma, VS Code, ...
      </div>
    </section>
  );
};

export default Skills;
