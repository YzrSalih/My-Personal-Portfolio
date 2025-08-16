import React, { useMemo, useState } from "react";
import styles from "./Projects.module.css";
import Eyebrow from './Eyebrow';
import Footer from './Footer'; // added
// Import images so Vite bundles them (fix for prod)
import imgPortfolio from '../assets/Img/codezy3.png';
import imgDashboard from '../assets/Img/codezy4.png';
import imgBlog from '../assets/Img/codezy5.png';
import imgLanding from '../assets/Img/codezy2.svg';

// Sample project data (can be moved to a separate file later)
const Projects = () => {
  const projects = useMemo(() => [
    {
      id: 1,
      title: "Personal Portfolio",
      image: imgPortfolio,
      description:
        "Modern portfolio focusing on clean component architecture, motion and accessibility.",
      technologies: ["React", "Vite", "CSS"],
      repo: "https://github.com/YzrSalih",
      live: "#",
      category: "frontend",
      featured: true,
    },
    {
      id: 2,
      title: "E‑Commerce Dashboard",
      image: imgDashboard,
      description:
        "Analytics driven admin dashboard with product, order and user management views.",
      technologies: ["React", "TypeScript", "Redux"],
      repo: "https://github.com/YzrSalih",
      live: "#",
      category: "dashboard",
    },
    {
      id: 3,
      title: "Blog Platform",
      image: imgBlog,
      description:
        "Markdown publishing interface with search, tagging and category filters.",
      technologies: ["React", "Node.js", "MongoDB"],
      repo: "https://github.com/YzrSalih",
      live: "#",
      category: "fullstack",
    },
    {
      id: 4,
      title: "Landing Page Kit",
      image: imgLanding,
      description:
        "Reusable section + layout kit for rapid marketing page prototyping.",
      technologies: ["React", "Framer", "Sass"],
      repo: "https://github.com/YzrSalih",
      live: "#",
      category: "frontend",
    },
  ], []);

  const categories = useMemo(() => ["all", ...Array.from(new Set(projects.map(p => p.category)))], [projects]);
  const [activeCat, setActiveCat] = useState("all");
  const filtered = activeCat === "all" ? projects : projects.filter(p => p.category === activeCat);

  return (
    <div className={styles.pageWrap}> {/* added wrapper to allow footer at bottom */}
      <section id="projects" className={styles.projectsSection}>
        <div className={styles.bgDecor} aria-hidden="true" />
        <div className={styles.shell}>
          <header className={styles.head}>
            <Eyebrow>Showcase</Eyebrow>
            <h1 className={styles.projectsTitle}>Selected <span className={styles.projectsTitleGradient}>Projects</span><span className={styles.projectsTitleGlow} aria-hidden="true" /></h1>
            <p className={styles.projectsLead}>Interface builds highlighting component architecture, state orchestration and performance‑minded implementation across the stack.</p>
            <div className={styles.filters}>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={cat === activeCat ? `${styles.filterChip} ${styles.active}` : styles.filterChip}
                  onClick={() => setActiveCat(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </header>
          <div className={styles.grid}>
            {filtered.map((p, i) => (
              <article
                key={p.id}
                className={`${styles.card} ${p.featured ? styles.featured : ""} ${styles.fadeIn}`}
                style={{ "--i": i }}
              >
                <div className={styles.media}>
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <div className={styles.mediaOverlay} />
                  <div className={styles.indexTag}>0{i + 1}</div>
                  <ul className={styles.techChips}>
                    {p.technologies.map(t => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.body}> {/* card body */}
                  <h3 className={styles.title}>{p.title}</h3>
                  <p className={styles.desc}>{p.description}</p>
                  <div className={styles.actions}>
                    {p.live && <a className={styles.actionPrimary} href={p.live} target="_blank" rel="noopener noreferrer">Live ↗</a>}
                    {p.repo && <a className={styles.actionGhost} href={p.repo} target="_blank" rel="noopener noreferrer">Code</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;
