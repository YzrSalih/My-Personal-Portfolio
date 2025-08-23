import React from 'react';
import styles from './GitHubShowcase.module.css';
import ghImage from '../assets/Img/image.png';

// Simple showcase for a GitHub dashboard screenshot with subtle animated lighting
// Props:
// - image: required screenshot URL or imported asset
// - title: optional small heading
// - alt: optional alt text
const GitHubShowcase = ({ image = ghImage, title = 'GitHub Profile Overview', alt = 'GitHub screenshot' }) => {
  return (
    <section className={styles.ghSection} aria-label="GitHub showcase">
      <div className={styles.ghCard}>
        <div className={styles.headerRow}>
          <span className={styles.dot} aria-hidden="true" />
          <h2 className={styles.title}>{title}</h2>
        </div>
        <div className={styles.frameWrap}>
          <img className={styles.screenshot} src={image} alt={alt} loading="lazy" />
          {/* moving edge glows */}
          <span className={styles.glowTop} aria-hidden="true" />
          <span className={styles.glowBottom} aria-hidden="true" />
          <span className={styles.glowLeft} aria-hidden="true" />
          <span className={styles.glowRight} aria-hidden="true" />
          <span className={styles.scan} aria-hidden="true" />
          <span className={styles.shimmer} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default GitHubShowcase;
