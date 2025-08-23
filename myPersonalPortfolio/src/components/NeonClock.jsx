import React, { useEffect, useRef } from 'react';
import styles from './NeonClock.module.css';

// Neon, glowing analog clock with smooth hands.
// Sits on a full-bleed black section to continue the GitHub area.
const NeonClock = () => {
  const watchRef = useRef(null);

  useEffect(() => {
    let rafId;
    const tick = () => {
      const now = new Date();
      const sec = now.getSeconds() + now.getMilliseconds() / 1000; // 0..60
      const min = now.getMinutes() + sec / 60; // 0..60
      const hour = (now.getHours() % 12) + min / 60; // 0..12

      const sdeg = (sec / 60) * 360;   // seconds to degrees
      const mdeg = (min / 60) * 360;   // minutes to degrees
      const hdeg = (hour / 12) * 360;  // hours to degrees

      const el = watchRef.current;
      if (el) {
        el.style.setProperty('--sdeg', sdeg.toFixed(3) + 'deg');
        el.style.setProperty('--mdeg', mdeg.toFixed(3) + 'deg');
        el.style.setProperty('--hdeg', hdeg.toFixed(3) + 'deg');
      }
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section className={styles.clockSection} aria-label="Neon animated clock">
      <div className={styles.clockCard}>
        <div className={styles.headerRow}>
          <span className={styles.dot} aria-hidden="true" />
          <h2 className={styles.title}>Live Clock</h2>
        </div>

        <div className={styles.stage}>
          {/* background light beams */}
          <span className={`${styles.beam} ${styles.beamBlue}`} aria-hidden="true" />
          <span className={`${styles.beam} ${styles.beamOrange}`} aria-hidden="true" />

          <div ref={watchRef} className={styles.watch}>
            <div className={`${styles.hand} ${styles.hour}`} />
            <div className={`${styles.hand} ${styles.min}`} />
            <div className={`${styles.hand} ${styles.sec}`} />
            <div className={styles.hub} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeonClock;
