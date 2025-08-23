import React, { useState } from "react";
import styles from "./ExperienceDetails.module.css";

const ExperienceDetails = () => {
  const [expanded, setExpanded] = useState(false);

  const enresoftBullets = [
    "Built an internal dashboard with React and TypeScript for real-time visibility into warehouse operations and KPIs.",
    "Designed REST APIs with Java Spring Boot to integrate the internal WMS with third‑party e‑commerce platforms.",
    "Improved backend performance by adding Redis caching and refactoring SQL queries, reducing average response time by ~40%.",
    "Troubleshot dashboard/API issues and supported internal teams to ensure smooth daily operations.",
  ];

  const softInnovasBullets = [
    "Participated in the development and rollout of a Salesforce system for a UK school group to streamline registrations and course selections across three sites.",
    "Managed deployments and monitoring as part of Agile ceremonies; coordinated changes across Sales and Service Cloud.",
    "Provided technical support and troubleshooting across Sales, Service, and Experience Cloud.",
    "Documented processes and collaborated with stakeholders to ensure reliable operations and timely releases.",
  ];

  const visibleCount = expanded ? undefined : 2;

  return (
    <section id="experience-details" className={styles.expSection} aria-label="Detailed experience">
      <div className={styles.expCard}>
        <div className={styles.headerRow}>
          <span className={styles.dot} aria-hidden="true" />
          <h2 className={styles.title}>Experience</h2>
        </div>
        <ul className={styles.timeline}>
          <li className={styles.item}>
            <div className={styles.itemHeadingRow}>
              <h3 className={styles.itemTitle}>
                Frontend Developer <span className={styles.emDash}>—</span> Enresoft LLC
              </h3>
              <span className={`${styles.badge} ${styles.badgeSoft}`}>Part-time</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.period}>Mar 2024 — Present</span>
            </div>
            <ul className={styles.bullets}>
              {(visibleCount ? enresoftBullets.slice(0, visibleCount) : enresoftBullets).map((t, i) => (
                <li key={`enresoft-${i}`}>{t}</li>
              ))}
            </ul>
          </li>

          <li className={styles.item}>
            <div className={styles.itemHeadingRow}>
              <h3 className={styles.itemTitle}>
                Full Stack Salesforce Developer <span className={styles.emDash}>—</span> Soft Innovas
              </h3>
              <span className={`${styles.badge} ${styles.badgeHard}`}>Full-time</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.period}>Mar 2023 — Mar 2024</span>
            </div>
            <ul className={styles.bullets}>
              {(visibleCount ? softInnovasBullets.slice(0, visibleCount) : softInnovasBullets).map((t, i) => (
                <li key={`soft-${i}`}>{t}</li>
              ))}
            </ul>
          </li>
        </ul>

        <div className={styles.expActions}>
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceDetails;
