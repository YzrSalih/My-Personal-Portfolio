import React, { useEffect, useRef, useState } from "react";
import styles from "./AutoPlayVideo.module.css";
import codeVideo from "../assets/Img/package.mp4"; // local code lines video

// Lightweight auto-playing video showcase.
// Uses a royalty‑free, software-themed sample video by default.
const AutoPlayVideo = ({ onWhite, src, bgImage }) => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [isOnWhite, setIsOnWhite] = useState(false);

  // Try to infer if the section sits on a white/light background unless prop provided
  useEffect(() => {
    if (typeof onWhite === 'boolean') { setIsOnWhite(onWhite); return; }

    const parseRgb = (c) => {
      const m = c.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
      if (!m) return null; return { r: +m[1], g: +m[2], b: +m[3], a: m[4] !== undefined ? +m[4] : 1 };
    };
    const luminance = ({r,g,b}) => {
      const srgb = [r,g,b].map(v=>{ v/=255; return v<=0.03928? v/12.92 : Math.pow((v+0.055)/1.055,2.4); });
      return 0.2126*srgb[0]+0.7152*srgb[1]+0.0722*srgb[2];
    };
    const findBg = (el) => {
      let node = el;
      while (node) {
        const cs = getComputedStyle(node);
        const img = cs.backgroundImage && cs.backgroundImage !== 'none';
        const col = cs.backgroundColor;
        const parsed = parseRgb(col || 'rgba(0,0,0,0)');
        if (img || (parsed && parsed.a > 0)) return { cs, parsed };
        node = node.parentElement;
      }
      const rootCol = parseRgb(getComputedStyle(document.documentElement).backgroundColor);
      return { parsed: rootCol || { r:255,g:255,b:255,a:1 } };
    };

    const decide = () => {
      const { parsed } = findBg(sectionRef.current || document.body);
      if (!parsed) { setIsOnWhite(false); return; }
      setIsOnWhite(luminance(parsed) > 0.8); // consider very light backgrounds as white
    };

    decide();
    window.addEventListener('resize', decide);
    return () => window.removeEventListener('resize', decide);
  }, [onWhite]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Make sure attributes are set before play attempts
    video.muted = true; // for iOS/Safari
    video.defaultMuted = true;
    video.playsInline = true;

    // Respect reduced motion
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const tryPlay = () => {
      if (reduce) return; // don't auto play on reduced motion
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {/* ignore */});
    };

    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) tryPlay();
          else video.pause();
        });
      }, { threshold: 0.2 }); // play sooner
      observer.observe(video);
    }

    // Extra hooks to nudge autoplay across browsers
    const onLoaded = () => tryPlay();
    const onCanPlay = () => tryPlay();
    const onVisibility = () => { if (document.visibilityState === 'visible') tryPlay(); };

    video.addEventListener('loadeddata', onLoaded);
    video.addEventListener('canplay', onCanPlay);
    document.addEventListener('visibilitychange', onVisibility);

    // Try once immediately as well
    tryPlay();

    return () => {
      if (observer) observer.disconnect();
      video.removeEventListener('loadeddata', onLoaded);
      video.removeEventListener('canplay', onCanPlay);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  // Default royalty‑free video with visible code lines; replace via `src` prop if you like.
  const defaultVideo = codeVideo; // use local uploaded video

  return (
    <section ref={sectionRef} className={`${styles.videoSection} ${isOnWhite ? styles.onWhite : ''}`} aria-label="Intro video and freelance availability">
      {/* Background: if an image is provided, use it. Otherwise, fall back to procedural effects */}
      <div className={styles.bgLayer} aria-hidden="true">
        {bgImage ? (
          <span className={styles.bgImage} style={{ "--bg-url": `url(${bgImage})` }} />
        ) : (
          <>
            <span className={styles.rings} />
            <span className={styles.ringsSoft} />
            <span className={styles.dots} />
            <span className={styles.sweep} />
            <span className={styles.orb} />
          </>
        )}
      </div>
      <div className={styles.videoCard}>
        <div className={styles.headerRow}>
          <span className={styles.dot} aria-hidden="true" />
          <h2 className={styles.title}>Freelance & Intro</h2>
        </div>
        <p className={styles.lead}>
          I collaborate with teams as a freelance developer. If you need a fast, modern React front‑end or a full‑stack MVP, I'm available for part‑time and project‑based work.
        </p>
        <div className={styles.playerWrap}>
          <video
            ref={videoRef}
            className={styles.video}
            playsInline
            muted
            loop
            autoPlay
            preload="metadata"
            poster="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1280&auto=format&fit=crop" /* code on screen */
          >
            {/* Primary source: visible code lines */}
            <source src={src || defaultVideo} type="video/mp4" />
            {/* Fallback sources */}
            <source src="https://cdn.coverr.co/videos/coverr-coding-typing-on-laptop-9710/1080p.mp4" type="video/mp4" />
            <source src="https://assets.mixkit.co/videos/preview/mixkit-programmer-coding-on-a-laptop-1569-large.mp4" type="video/mp4" />
          </video>
          <span className={styles.autoBadge}>Auto‑play</span>
        </div>
        <div className={styles.ctaRow}>
          <a className={styles.hireBtn} href="mailto:salihyazar.dev@gmail.com?subject=Freelance%20Project%20Inquiry">Hire me</a>
          <a className={styles.ghostBtn} href="https://www.linkedin.com/in/salih-yazar-216835206/" target="_blank" rel="noopener noreferrer">Let’s talk ↗</a>
        </div>
      </div>
    </section>
  );
};

export default AutoPlayVideo;
