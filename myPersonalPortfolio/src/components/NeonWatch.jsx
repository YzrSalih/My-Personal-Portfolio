import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NeonWatch.module.css';
import codezyLogo from '../assets/Img/codezy4.png';

// Static, neon-lit watch art with subtle light animations and Codezy logo inside
// This is NOT a live clock; only ambient glows move slowly.
const NeonWatch = () => {
  const numerals = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <section className={styles.watchSection} aria-label="Neon watch visual">
      <div className={styles.watchCard}>
        <div className={styles.stage}>
          {/* background diagonal light beams */}
          <span className={`${styles.beam} ${styles.beamOrange}`} aria-hidden="true" />
          <span className={`${styles.beam} ${styles.beamBlue}`} aria-hidden="true" />

          {/* LEFT: main watch */}
          <div className={styles.watchWrap}>
            <div className={styles.watch}>
              <span className={styles.edgeGlow} aria-hidden="true" />
              <span className={`${styles.ring} ${styles.blueRing}`} aria-hidden="true" />
              <span className={`${styles.ring} ${styles.orangeRing}`} aria-hidden="true" />
              <span className={styles.halftone} aria-hidden="true" />

              {/* light trails following the hands (hands removed by request) */}
              <span className={styles.trailHour} aria-hidden="true" />
              <span className={styles.trailMin} aria-hidden="true" />

              {/* center hub retained for aesthetics */}
              <span className={styles.hub} aria-hidden="true" />

              {/* numerals */}
              {numerals.map((n, i) => (
                <span key={n} className={styles.numeral} style={{ '--a': `${i * 30}deg` }}>{n}</span>
              ))}

              {/* centered logo (bigger) */}
              <img className={styles.logo} src={codezyLogo} alt="Codezy logo" />
            </div>
          </div>

          {/* RIGHT: content */}
          <div className={styles.content}>
            <span className={styles.eyebrow}>Showcase</span>
            <h3 className={styles.heading}>Crafting clean, fast and delightful UIs</h3>
            <p className={styles.subtext}>
              Explore projects, articles and experiments. I build performant React apps with a keen eye for motion,
              accessibility and cohesive visual systems.
            </p>
            <div className={styles.ctaRow}>
              <Link className={styles.ctaPrimary} to="/projects">View Projects</Link>
              <a className={styles.ctaSecondary} href="https://www.linkedin.com/in/salih-yazar-216835206/" target="_blank" rel="noopener noreferrer">Connect</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeonWatch;
