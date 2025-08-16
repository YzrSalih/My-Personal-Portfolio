import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import codezyLogoWhite from "../assets/Img/codezy4.png"; // white logo

const Home = () => {
  const titles = ["Web Developer", "Frontend Developer", "Fullstack Developer"];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    let timer;
    const fullText = titles[currentTitle];
    if (!isDeleting && displayedText.length < fullText.length) {
      timer = setTimeout(() => setDisplayedText(fullText.substring(0, displayedText.length + 1)), typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => setDisplayedText(fullText.substring(0, displayedText.length - 1)), typingSpeed / 2);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 1400);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitle, titles, typingSpeed]);

  return (
    <div className={styles.pageWrap}>
      <section className={styles.homeSection} id="home">
        <div className={styles.homeShell}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCol}>
              <div className={styles.heroBackdrop} aria-hidden="true" />
              <span className={`${styles.eyebrowBadge} ${styles.fadeIn}`}>Introduction</span>
              <h1 className={`${styles.heroTitle} ${styles.fadeIn} ${styles.delay1}`}>
                Hello, I'm <span className="name">Salih</span>
                <span className={styles.heroTitleGlow} aria-hidden="true" />
              </h1>
              <div className={styles.heroBar} aria-hidden="true" />
              <div className={`${styles.roleTyping} ${styles.fadeIn} ${styles.delay2}`}>
                {displayedText}<span className={styles.roleCursor}>|</span>
              </div>
              <p className={`${styles.heroDesc} ${styles.fadeIn} ${styles.delay2}`}>
                Full Stack Developer focused on crafting performant, accessible and visually cohesive web applications.
                I enjoy translating complex problems into elegant, scalable interface architectures.
                Freelancing & collaborating on modern <strong>React</strong> ecosystems while sharing what I learn.
              </p>
              <div className={`${styles.actionsRow} ${styles.fadeIn} ${styles.delay2}`}>
                <a className={styles.primaryBtn} href="https://www.linkedin.com/in/salih-yazar-216835206/" target="_blank" rel="noopener noreferrer">Connect ↗</a>
                <a className={styles.ghostBtn} href="https://medium.com/" target="_blank" rel="noopener noreferrer">Articles</a>
                <Link className={styles.ghostBtn} to="/projects">View Projects</Link>
              </div>
              <div className={`${styles.certsSection} ${styles.fadeIn} ${styles.delay2}`} aria-label="Professional certifications">
                <h2 className={styles.certsHeading}>Certifications</h2>
                <ul className={styles.certsList}>
                  <li className={styles.certItem}>
                    <span className={styles.certBadge}>Salesforce</span>
                    <span className={styles.certTitle}>AI Associate</span>
                    <span className={styles.certMeta}>Dec 2024 · ID 5394813</span>
                  </li>
                  <li className={styles.certItem}>
                    <span className={styles.certBadge}>IBM</span>
                    <span className={styles.certTitle}>Software Engineering</span>
                    <span className={styles.certMeta}>Oct 2024 · Expires 2035</span>
                  </li>
                  <li className={styles.certItem}>
                    <span className={styles.certBadge}>Salesforce</span>
                    <span className={styles.certTitle}>Platform App Builder</span>
                    <span className={styles.certMeta}>Sep 2022 · ID 2608580</span>
                  </li>
                  <li className={styles.certItem}>
                    <span className={styles.certBadge}>Salesforce</span>
                    <span className={styles.certTitle}>Platform Developer I</span>
                    <span className={styles.certMeta}>Aug 2022 · ID 2492783</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.sideWrapper} ${styles.fadeIn} ${styles.delay1}`}>
              <div className={styles.sideStack}>
                <div className={`${styles.sideCard} ${styles.educationCard}`}>
                  <div className={styles.sideCardHeader}><h3>Education</h3></div>
                  <ul className={styles.timeline}>
                    <li className={styles.timelineItem}>
                      <div className={styles.itemHeading}>B.Sc. Computer Science – VIZJA University</div>
                      <div className={styles.itemMeta}>Warsaw</div>
                      <div className={styles.itemYear}>2019 – 2024</div>
                    </li>
                    <li className={styles.timelineItem}>
                      <div className={styles.itemHeading}>B.Sc. Computer Science – EPITA University</div>
                      <div className={styles.itemMeta}>Paris · Erasmus Program</div>
                      <div className={styles.itemYear}>2021 – 2022</div>
                    </li>
                  </ul>
                </div>
                <div className={`${styles.sideCard} ${styles.experienceCard}`}>
                  <div className={styles.sideCardHeader}><h3>Experience</h3></div>
                  <ul className={styles.timeline}>
                    <li className={styles.timelineItem}>
                      <div className={styles.itemHeading}>Frontend Developer – Enresoft LLC</div>
                      <div className={styles.itemMeta}>Part-time</div>
                      <div className={styles.itemYear}>Mar 2024 – Present</div>
                    </li>
                    <li className={styles.timelineItem}>
                      <div className={styles.itemHeading}>Full Stack Salesforce Developer – Soft Innovas</div>
                      <div className={styles.itemMeta}>Full-time</div>
                      <div className={styles.itemYear}>Mar 2023 – Mar 2024</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.footerTransition} aria-hidden="true">
        <div className={styles.footerTransitionGlow} />
        <div className={styles.footerTransitionFadeTop} />
        <div className={styles.footerTransitionFadeBottom} />
        <div className={styles.techMarquee}>
          <div className={styles.techTrack}>
            <div className={`${styles.techIcon} ${styles.react}`}>{/* React */}<svg viewBox="0 0 841.9 595.3" fill="none"><g stroke="#61dafb" strokeWidth="36" fill="none"><ellipse cx="420.9" cy="296.5" rx="45.7" ry="45.7" fill="#61dafb" stroke="none"/><ellipse cx="420.9" cy="296.5" rx="218.4" ry="85.3"/><ellipse cx="420.9" cy="296.5" rx="218.4" ry="85.3" transform="rotate(60 420.9 296.5)"/><ellipse cx="420.9" cy="296.5" rx="218.4" ry="85.3" transform="rotate(120 420.9 296.5)"/></g></svg></div>
            <div className={`${styles.techIcon} ${styles.html}`}>{/* HTML */}<svg viewBox="0 0 128 128" aria-hidden="true"><defs><linearGradient id="htmlGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#E44D26"/><stop offset="100%" stopColor="#F16529"/></linearGradient></defs><path fill="url(#htmlGrad)" d="M19 0h90l-8.1 92L64 128 27.2 92z"/><path fill="#EBEBEB" d="M64 52H49.2l-1-11H64V30H36l.3 3.4 3 33.6H64zM64 88.7l-.1.1-12.5-3.4-.8-9.3H40.3l1.5 18.3L64 104z"/><path fill="#fff" d="M63.9 52v11h13.7l-1.3 14.3-12.4 3.4v12l22.7-6.3.2-2.2 2.6-30.2.3-3.6H63.9zM63.9 30v11h27.9l.2-2.5.5-5.1.3-3.4z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.js}`}>{/* JS */}<svg viewBox="0 0 128 128"><path fill="#F7DF1E" d="M2 2h124v124H2z"/><path d="M86.1 99.3c2.4 3.9 5.6 6.8 11.2 6.8 4.7 0 7.7-2.3 7.7-5.5 0-3.8-3-5.2-8.1-7.4l-2.8-1.2c-8.1-3.5-13.5-7.9-13.5-17.2 0-8.6 6.5-15.2 16.6-15.2 7.2 0 12.4 2.5 16.1 8.9l-8.8 5.6c-1.9-3.5-4-4.9-7.3-4.9-3.3 0-5.4 2.1-5.4 4.9 0 3.4 2.1 4.8 6.9 6.8l2.8 1.2c9.6 4.1 15 8.3 15 17.7 0 10.1-7.9 15.6-18.4 15.6-10.3 0-17-4.9-20.3-11.3zm-44.3 1c1.8 3.2 3.4 5.9 7.3 5.9 3.7 0 6-1.5 6-7.3V59.1h11.2v39.8c0 11.6-6.8 16.9-16.8 16.9-9 0-14.3-4.7-17-10.4z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.java}`}>{/* Java */}<svg viewBox="0 0 128 128"><path fill="#f8981d" d="M47.6 98.3s-4.2 2.5 3 3.4c8.6 1.1 13 1 22.5-.9 0 0 2.5 1.6 6 3-21.4 9.2-48.5-.5-31.5-5.5z"/><path fill="#f8981d" d="M44.4 83.7s-4.7 3.5 2.5 4.2c9.4.9 16.8 1 29.6-1.4 0 0 1.7 1.7 4.4 2.6-25.5 7.4-53.9.6-36.5-5.4z"/><path fill="#f8981d" d="M70.7 60.2c5.3 6.1-1.4 11.6-1.4 11.6s13.5-7 7.3-15.9c-5.8-8.2-10.3-12.3 13.9-26.4 0 .1-38 9.5-19.8 30.7z"/><path fill="#f8981d" d="M101.4 108.3s3.1 2.6-3.4 4.6c-12.3 3.7-51.2 4.8-62 .1-3.9-1.7 3.4-4 5.7-4.5 2.4-.5 3.7-.4 3.7-.4-4.3-3-27.7 5.9-11.9 8.5 43.2 7 78.8-3.2 68-8.3z"/><path fill="#f8981d" d="M49.9 69.6s-19.7 4.7-7 6.4c5.4.7 16.1.6 26-.3 8.1-.7 16.2-2.1 16.2-2.1s-2.8 1.2-4.9 2.6c-19.7 5.2-57.8 2.8-46.9-2.5 9.3-4.5 16.6-4.1 16.6-4.1z"/><path fill="#f8981d" d="M92.5 93.9c20-10.4 10.8-20.4 4.3-19 0 0 1.2 1 2.1 2.1 9.5 10.7-10 20.4-10 20.4z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.docker}`}>{/* Docker (simplified) */}<svg viewBox="0 0 128 128" aria-hidden="true"><g fill="#2496ed"><rect x="18" y="58" width="14" height="12" rx="2"/><rect x="34" y="58" width="14" height="12" rx="2"/><rect x="50" y="58" width="14" height="12" rx="2"/><rect x="34" y="44" width="14" height="12" rx="2"/><rect x="50" y="44" width="14" height="12" rx="2"/><rect x="66" y="58" width="14" height="12" rx="2"/><path d="M92 56c-4.4 0-7.6 2.4-9.6 5.4-1.8-.8-3.4-1.2-5.1-1.2H18.5a1.5 1.5 0 00-1.5 1.5c0 17.4 12.9 31.3 34.2 31.3 21.9 0 39.5-9.8 47.8-28.1 4.3.1 9.5-.9 11.7-5.8.2-.5-.1-1.1-.6-1.2-2.9-.7-8.2-1.2-11-7.1-1.7-3.6-4.7-5.8-8.6-5.8z"/></g></svg></div>
            <div className={`${styles.techIcon} ${styles.salesforce}`}>{/* Salesforce */}<svg viewBox="0 0 128 128"><path fill="#00a1e0" d="M92.4 54.9c-.6 0-1.2 0-1.8.1a19 19 0 00-28.6-14.5 16.3 16.3 0 00-27.6 11.7c0 1 .1 2 .3 3A17 17 0 0036 92.2a16.3 16.3 0 0020.9 3.3 19 19 0 0032.8-6.4 16.4 16.4 0 001.7-32.9 19 19 0 00-19-15.3z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.uiux}`}>{/* UI/UX icon text */}<svg viewBox="0 0 120 60" aria-hidden="true"><rect x="4" y="6" width="112" height="48" rx="14" ry="14" fill="none" stroke="#bfa6ff" strokeWidth="4"/><text x="60" y="38" textAnchor="middle" fontFamily="'Inter', 'Montserrat', system-ui, sans-serif" fontSize="24" fontWeight="700" fill="#bfa6ff" letterSpacing="2">UI / UX</text></svg></div>
            {/* Duplicate sequence for infinite scroll seamlessness */}
            <div className={`${styles.techIcon} ${styles.react}`}>{/* React duplicate */}<svg viewBox="0 0 841.9 595.3" fill="none"><g stroke="#61dafb" strokeWidth="36" fill="none"><ellipse cx="420.9" cy="296.5" rx="45.7" ry="45.7" fill="#61dafb" stroke="none"/><ellipse cx="420.9" cy="296.5" rx="218.4" ry="85.3"/><ellipse cx="420.9" cy="296.5" rx="218.4" ry="85.3" transform="rotate(60 420.9 296.5)"/><ellipse cx="420.9" cy="296.5" rx="218.4" ry="85.3" transform="rotate(120 420.9 296.5)"/></g></svg></div>
            <div className={`${styles.techIcon} ${styles.html}`}>{/* HTML duplicate */}<svg viewBox="0 0 128 128" aria-hidden="true"><defs><linearGradient id="htmlGrad2" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#E44D26"/><stop offset="100%" stopColor="#F16529"/></linearGradient></defs><path fill="url(#htmlGrad2)" d="M19 0h90l-8.1 92L64 128 27.2 92z"/><path fill="#EBEBEB" d="M64 52H49.2l-1-11H64V30H36l.3 3.4 3 33.6H64zM64 88.7l-.1.1-12.5-3.4-.8-9.3H40.3l1.5 18.3L64 104z"/><path fill="#fff" d="M63.9 52v11h13.7l-1.3 14.3-12.4 3.4v12l22.7-6.3.2-2.2 2.6-30.2.3-3.6H63.9zM63.9 30v11h27.9l.2-2.5.5-5.1.3-3.4z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.js}`}>{/* JS duplicate */}<svg viewBox="0 0 128 128"><path fill="#F7DF1E" d="M2 2h124v124H2z"/><path d="M86.1 99.3c2.4 3.9 5.6 6.8 11.2 6.8 4.7 0 7.7-2.3 7.7-5.5 0-3.8-3-5.2-8.1-7.4l-2.8-1.2c-8.1-3.5-13.5-7.9-13.5-17.2 0-8.6 6.5-15.2 16.6-15.2 7.2 0 12.4 2.5 16.1 8.9l-8.8 5.6c-1.9-3.5-4-4.9-7.3-4.9-3.3 0-5.4 2.1-5.4 4.9 0 3.4 2.1 4.8 6.9 6.8l2.8 1.2c9.6 4.1 15 8.3 15 17.7 0 10.1-7.9 15.6-18.4 15.6-10.3 0-17-4.9-20.3-11.3zm-44.3 1c1.8 3.2 3.4 5.9 7.3 5.9 3.7 0 6-1.5 6-7.3V59.1h11.2v39.8c0 11.6-6.8 16.9-16.8 16.9-9 0-14.3-4.7-17-10.4z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.java}`}>{/* Java duplicate */}<svg viewBox="0 0 128 128"><path fill="#f8981d" d="M47.6 98.3s-4.2 2.5 3 3.4c8.6 1.1 13 1 22.5-.9 0 0 2.5 1.6 6 3-21.4 9.2-48.5-.5-31.5-5.5z"/><path fill="#f8981d" d="M44.4 83.7s-4.7 3.5 2.5 4.2c9.4.9 16.8 1 29.6-1.4 0 0 1.7 1.7 4.4 2.6-25.5 7.4-53.9.6-36.5-5.4z"/><path fill="#f8981d" d="M70.7 60.2c5.3 6.1-1.4 11.6-1.4 11.6s13.5-7 7.3-15.9c-5.8-8.2-10.3-12.3 13.9-26.4 0 .1-38 9.5-19.8 30.7z"/><path fill="#f8981d" d="M101.4 108.3s3.1 2.6-3.4 4.6c-12.3 3.7-51.2 4.8-62 .1-3.9-1.7 3.4-4 5.7-4.5 2.4-.5 3.7-.4 3.7-.4-4.3-3-27.7 5.9-11.9 8.5 43.2 7 78.8-3.2 68-8.3z"/><path fill="#f8981d" d="M49.9 69.6s-19.7 4.7-7 6.4c5.4.7 16.1.6 26-.3 8.1-.7 16.2-2.1 16.2-2.1s-2.8 1.2-4.9 2.6c-19.7 5.2-57.8 2.8-46.9-2.5 9.3-4.5 16.6-4.1 16.6-4.1z"/><path fill="#f8981d" d="M92.5 93.9c20-10.4 10.8-20.4 4.3-19 0 0 1.2 1 2.1 2.1 9.5 10.7-10 20.4-10 20.4z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.docker}`}>{/* Docker duplicate */}<svg viewBox="0 0 128 128" aria-hidden="true"><g fill="#2496ed"><rect x="18" y="58" width="14" height="12" rx="2"/><rect x="34" y="58" width="14" height="12" rx="2"/><rect x="50" y="58" width="14" height="12" rx="2"/><rect x="34" y="44" width="14" height="12" rx="2"/><rect x="50" y="44" width="14" height="12" rx="2"/><rect x="66" y="58" width="14" height="12" rx="2"/><path d="M92 56c-4.4 0-7.6 2.4-9.6 5.4-1.8-.8-3.4-1.2-5.1-1.2H18.5a1.5 1.5 0 00-1.5 1.5c0 17.4 12.9 31.3 34.2 31.3 21.9 0 39.5-9.8 47.8-28.1 4.3.1 9.5-.9 11.7-5.8.2-.5-.1-1.1-.6-1.2-2.9-.7-8.2-1.2-11-7.1-1.7-3.6-4.7-5.8-8.6-5.8z"/></g></svg></div>
            <div className={`${styles.techIcon} ${styles.salesforce}`}>{/* Salesforce duplicate */}<svg viewBox="0 0 128 128"><path fill="#00a1e0" d="M92.4 54.9c-.6 0-1.2 0-1.8.1a19 19 0 00-28.6-14.5 16.3 16.3 0 00-27.6 11.7c0 1 .1 2 .3 3A17 17 0 0036 92.2a16.3 16.3 0 0020.9 3.3 19 19 0 0032.8-6.4 16.4 16.4 0 001.7-32.9 19 19 0 00-19-15.3z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.uiux}`}>{/* UI/UX icon text duplicate */}<svg viewBox="0 0 120 60" aria-hidden="true"><rect x="4" y="6" width="112" height="48" rx="14" ry="14" fill="none" stroke="#bfa6ff" strokeWidth="4"/><text x="60" y="38" textAnchor="middle" fontFamily="'Inter', 'Montserrat', system-ui, sans-serif" fontSize="24" fontWeight="700" fill="#bfa6ff" letterSpacing="2">UI / UX</text></svg></div>
            {/* Third duplicate sequence to fully eliminate end gap */}
            <div className={`${styles.techIcon} ${styles.react}`}>{/* React duplicate 2 */}<svg viewBox="0 0 841.9 595.3" fill="none"><g stroke="#61dafb" strokeWidth="36" fill="none"><ellipse cx="420.9" cy="296.5" rx="45.7" ry="45.7" fill="#61dafb" stroke="none"/><ellipse cx="420.9" cy="296.5" rx="218.4" ry="85.3"/><ellipse cx="420.9" cy="296.5" rx="218.4" ry="85.3" transform="rotate(60 420.9 296.5)"/><ellipse cx="420.9" cy="296.5" rx="218.4" ry="85.3" transform="rotate(120 420.9 296.5)"/></g></svg></div>
            <div className={`${styles.techIcon} ${styles.html}`}>{/* HTML duplicate 2 */}<svg viewBox="0 0 128 128" aria-hidden="true"><defs><linearGradient id="htmlGrad3" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#E44D26"/><stop offset="100%" stopColor="#F16529"/></linearGradient></defs><path fill="url(#htmlGrad3)" d="M19 0h90l-8.1 92L64 128 27.2 92z"/><path fill="#EBEBEB" d="M64 52H49.2l-1-11H64V30H36l.3 3.4 3 33.6H64zM64 88.7l-.1.1-12.5-3.4-.8-9.3H40.3l1.5 18.3L64 104z"/><path fill="#fff" d="M63.9 52v11h13.7l-1.3 14.3-12.4 3.4v12l22.7-6.3.2-2.2 2.6-30.2.3-3.6H63.9zM63.9 30v11h27.9l.2-2.5.5-5.1.3-3.4z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.js}`}>{/* JS duplicate 2 */}<svg viewBox="0 0 128 128"><path fill="#F7DF1E" d="M2 2h124v124H2z"/><path d="M86.1 99.3c2.4 3.9 5.6 6.8 11.2 6.8 4.7 0 7.7-2.3 7.7-5.5 0-3.8-3-5.2-8.1-7.4l-2.8-1.2c-8.1-3.5-13.5-7.9-13.5-17.2 0-8.6 6.5-15.2 16.6-15.2 7.2 0 12.4 2.5 16.1 8.9l-8.8 5.6c-1.9-3.5-4-4.9-7.3-4.9-3.3 0-5.4 2.1-5.4 4.9 0 3.4 2.1 4.8 6.9 6.8l2.8 1.2c9.6 4.1 15 8.3 15 17.7 0 10.1-7.9 15.6-18.4 15.6-10.3 0-17-4.9-20.3-11.3zm-44.3 1c1.8 3.2 3.4 5.9 7.3 5.9 3.7 0 6-1.5 6-7.3V59.1h11.2v39.8c0 11.6-6.8 16.9-16.8 16.9-9 0-14.3-4.7-17-10.4z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.java}`}>{/* Java duplicate 2 */}<svg viewBox="0 0 128 128"><path fill="#f8981d" d="M47.6 98.3s-4.2 2.5 3 3.4c8.6 1.1 13 1 22.5-.9 0 0 2.5 1.6 6 3-21.4 9.2-48.5-.5-31.5-5.5z"/><path fill="#f8981d" d="M44.4 83.7s-4.7 3.5 2.5 4.2c9.4.9 16.8 1 29.6-1.4 0 0 1.7 1.7 4.4 2.6-25.5 7.4-53.9.6-36.5-5.4z"/><path fill="#f8981d" d="M70.7 60.2c5.3 6.1-1.4 11.6-1.4 11.6s13.5-7 7.3-15.9c-5.8-8.2-10.3-12.3 13.9-26.4 0 .1-38 9.5-19.8 30.7z"/><path fill="#f8981d" d="M101.4 108.3s3.1 2.6-3.4 4.6c-12.3 3.7-51.2 4.8-62 .1-3.9-1.7 3.4-4 5.7-4.5 2.4-.5 3.7-.4 3.7-.4-4.3-3-27.7 5.9-11.9 8.5 43.2 7 78.8-3.2 68-8.3z"/><path fill="#f8981d" d="M49.9 69.6s-19.7 4.7-7 6.4c5.4.7 16.1.6 26-.3 8.1-.7 16.2-2.1 16.2-2.1s-2.8 1.2-4.9 2.6c-19.7 5.2-57.8 2.8-46.9-2.5 9.3-4.5 16.6-4.1 16.6-4.1z"/><path fill="#f8981d" d="M92.5 93.9c20-10.4 10.8-20.4 4.3-19 0 0 1.2 1 2.1 2.1 9.5 10.7-10 20.4-10 20.4z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.docker}`}>{/* Docker duplicate 2 */}<svg viewBox="0 0 128 128" aria-hidden="true"><g fill="#2496ed"><rect x="18" y="58" width="14" height="12" rx="2"/><rect x="34" y="58" width="14" height="12" rx="2"/><rect x="50" y="58" width="14" height="12" rx="2"/><rect x="34" y="44" width="14" height="12" rx="2"/><rect x="50" y="44" width="14" height="12" rx="2"/><rect x="66" y="58" width="14" height="12" rx="2"/><path d="M92 56c-4.4 0-7.6 2.4-9.6 5.4-1.8-.8-3.4-1.2-5.1-1.2H18.5a1.5 1.5 0 00-1.5 1.5c0 17.4 12.9 31.3 34.2 31.3 21.9 0 39.5-9.8 47.8-28.1 4.3.1 9.5-.9 11.7-5.8.2-.5-.1-1.1-.6-1.2-2.9-.7-8.2-1.2-11-7.1-1.7-3.6-4.7-5.8-8.6-5.8z"/></g></svg></div>
            <div className={`${styles.techIcon} ${styles.salesforce}`}>{/* Salesforce duplicate 2 */}<svg viewBox="0 0 128 128"><path fill="#00a1e0" d="M92.4 54.9c-.6 0-1.2 0-1.8.1a19 19 0 00-28.6-14.5 16.3 16.3 0 00-27.6 11.7c0 1 .1 2 .3 3A17 17 0 0036 92.2a16.3 16.3 0 0020.9 3.3 19 19 0 0032.8-6.4 16.4 16.4 0 001.7-32.9 19 19 0 00-19-15.3z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.uiux}`}>{/* UI/UX icon text duplicate 2 */}<svg viewBox="0 0 120 60" aria-hidden="true"><rect x="4" y="6" width="112" height="48" rx="14" ry="14" fill="none" stroke="#bfa6ff" strokeWidth="4"/><text x="60" y="38" textAnchor="middle" fontFamily="'Inter', 'Montserrat', system-ui, sans-serif" fontSize="24" fontWeight="700" fill="#bfa6ff" letterSpacing="2">UI / UX</text></svg></div>
            {/* Duplicate sequence for seamless scrolling */}
            <div className={`${styles.techIcon} ${styles.react}`}>{/* React duplicate 3 */}<svg viewBox="0 0 841.9 595.3" fill="none"><g stroke="#61dafb" strokeWidth="36" fill="none"><ellipse cx="420.9" cy="296.5" rx="45.7" ry="45.7" fill="#61dafb" stroke="none"/><ellipse cx="420.9" cy="296.5" rx="218.4" ry="85.3"/><ellipse cx="420.9" cy="296.5" rx="218.4" ry="85.3" transform="rotate(60 420.9 296.5)"/><ellipse cx="420.9" cy="296.5" rx="218.4" ry="85.3" transform="rotate(120 420.9 296.5)"/></g></svg></div>
            <div className={`${styles.techIcon} ${styles.html}`}>{/* HTML duplicate 3 */}<svg viewBox="0 0 128 128" aria-hidden="true"><defs><linearGradient id="htmlGrad4" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#E44D26"/><stop offset="100%" stopColor="#F16529"/></linearGradient></defs><path fill="url(#htmlGrad4)" d="M19 0h90l-8.1 92L64 128 27.2 92z"/><path fill="#EBEBEB" d="M64 52H49.2l-1-11H64V30H36l.3 3.4 3 33.6H64zM64 88.7l-.1.1-12.5-3.4-.8-9.3H40.3l1.5 18.3L64 104z"/><path fill="#fff" d="M63.9 52v11h13.7l-1.3 14.3-12.4 3.4v12l22.7-6.3.2-2.2 2.6-30.2.3-3.6H63.9zM63.9 30v11h27.9l.2-2.5.5-5.1.3-3.4z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.js}`}>{/* JS duplicate 3 */}<svg viewBox="0 0 128 128"><path fill="#F7DF1E" d="M2 2h124v124H2z"/><path d="M86.1 99.3c2.4 3.9 5.6 6.8 11.2 6.8 4.7 0 7.7-2.3 7.7-5.5 0-3.8-3-5.2-8.1-7.4l-2.8-1.2c-8.1-3.5-13.5-7.9-13.5-17.2 0-8.6 6.5-15.2 16.6-15.2 7.2 0 12.4 2.5 16.1 8.9l-8.8 5.6c-1.9-3.5-4-4.9-7.3-4.9-3.3 0-5.4 2.1-5.4 4.9 0 3.4 2.1 4.8 6.9 6.8l2.8 1.2c9.6 4.1 15 8.3 15 17.7 0 10.1-7.9 15.6-18.4 15.6-10.3 0-17-4.9-20.3-11.3zm-44.3 1c1.8 3.2 3.4 5.9 7.3 5.9 3.7 0 6-1.5 6-7.3V59.1h11.2v39.8c0 11.6-6.8 16.9-16.8 16.9-9 0-14.3-4.7-17-10.4z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.java}`}>{/* Java duplicate 3 */}<svg viewBox="0 0 128 128"><path fill="#f8981d" d="M47.6 98.3s-4.2 2.5 3 3.4c8.6 1.1 13 1 22.5-.9 0 0 2.5 1.6 6 3-21.4 9.2-48.5-.5-31.5-5.5z"/><path fill="#f8981d" d="M44.4 83.7s-4.7 3.5 2.5 4.2c9.4.9 16.8 1 29.6-1.4 0 0 1.7 1.7 4.4 2.6-25.5 7.4-53.9.6-36.5-5.4z"/><path fill="#f8981d" d="M70.7 60.2c5.3 6.1-1.4 11.6-1.4 11.6s13.5-7 7.3-15.9c-5.8-8.2-10.3-12.3 13.9-26.4 0 .1-38 9.5-19.8 30.7z"/><path fill="#f8981d" d="M101.4 108.3s3.1 2.6-3.4 4.6c-12.3 3.7-51.2 4.8-62 .1-3.9-1.7 3.4-4 5.7-4.5 2.4-.5 3.7-.4 3.7-.4-4.3-3-27.7 5.9-11.9 8.5 43.2 7 78.8-3.2 68-8.3z"/><path fill="#f8981d" d="M49.9 69.6s-19.7 4.7-7 6.4c5.4.7 16.1.6 26-.3 8.1-.7 16.2-2.1 16.2-2.1s-2.8 1.2-4.9 2.6c-19.7 5.2-57.8 2.8-46.9-2.5 9.3-4.5 16.6-4.1 16.6-4.1z"/><path fill="#f8981d" d="M92.5 93.9c20-10.4 10.8-20.4 4.3-19 0 0 1.2 1 2.1 2.1 9.5 10.7-10 20.4-10 20.4z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.docker}`}>{/* Docker duplicate 3 */}<svg viewBox="0 0 128 128" aria-hidden="true"><g fill="#2496ed"><rect x="18" y="58" width="14" height="12" rx="2"/><rect x="34" y="58" width="14" height="12" rx="2"/><rect x="50" y="58" width="14" height="12" rx="2"/><rect x="34" y="44" width="14" height="12" rx="2"/><rect x="50" y="44" width="14" height="12" rx="2"/><rect x="66" y="58" width="14" height="12" rx="2"/><path d="M92 56c-4.4 0-7.6 2.4-9.6 5.4-1.8-.8-3.4-1.2-5.1-1.2H18.5a1.5 1.5 0 00-1.5 1.5c0 17.4 12.9 31.3 34.2 31.3 21.9 0 39.5-9.8 47.8-28.1 4.3.1 9.5-.9 11.7-5.8.2-.5-.1-1.1-.6-1.2-2.9-.7-8.2-1.2-11-7.1-1.7-3.6-4.7-5.8-8.6-5.8z"/></g></svg></div>
            <div className={`${styles.techIcon} ${styles.salesforce}`}>{/* Salesforce duplicate 3 */}<svg viewBox="0 0 128 128"><path fill="#00a1e0" d="M92.4 54.9c-.6 0-1.2 0-1.8.1a19 19 0 00-28.6-14.5 16.3 16.3 0 00-27.6 11.7c0 1 .1 2 .3 3A17 17 0 0036 92.2a16.3 16.3 0 0020.9 3.3 19 19 0 0032.8-6.4 16.4 16.4 0 001.7-32.9 19 19 0 00-19-15.3z"/></svg></div>
            <div className={`${styles.techIcon} ${styles.uiux}`}>{/* UI/UX icon text duplicate 3 */}<svg viewBox="0 0 120 60" aria-hidden="true"><rect x="4" y="6" width="112" height="48" rx="14" ry="14" fill="none" stroke="#bfa6ff" strokeWidth="4"/><text x="60" y="38" textAnchor="middle" fontFamily="'Inter', 'Montserrat', system-ui, sans-serif" fontSize="24" fontWeight="700" fill="#bfa6ff" letterSpacing="2">UI / UX</text></svg></div>
          </div>
        </div>
      </div>
      <footer className={styles.siteFooter} id="footer">
        <div className={styles.footerShell}>
          <div className={styles.footerBrand}>
            <img src={codezyLogoWhite} alt="Codezy" className={styles.footerLogoImg} />
            <p className={styles.footerDesc}>Designing performant interfaces & scalable front-end architectures. Open for impactful collaboration.</p>
          </div>
          <div>
            <h3 className={styles.footerGroupTitle}>Navigate</h3>
            <ul className={styles.footerLinks}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/skills">Skills</Link></li>
            </ul>
          </div>
          <div>
            <h3 className={styles.footerGroupTitle}>Resources</h3>
            <ul className={styles.footerLinks}>
              <li><a href="https://medium.com/" target="_blank" rel="noopener noreferrer">Articles</a></li>
              <li><a href="https://github.com/YzrSalih" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="mailto:salih@example.com">Email</a></li>
            </ul>
          </div>
          <div>
            <h3 className={styles.footerGroupTitle}>Contact</h3>
            <ul className={styles.footerContact}>
              <li><span>Mail</span><a href="mailto:yzr.salih@gmail.com">yzr.salih@gmail.com</a></li>
              <li><span>Location</span>Warsaw / Remote</li>
              <li><span>LinkedIn</span><a href="https://www.linkedin.com/in/salih-yazar-216835206/" target="_blank" rel="noopener noreferrer">Profile ↗</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <div className={styles.footerSocial}>
            <a href="https://github.com/YzrSalih" aria-label="GitHub" target="_blank" rel="noopener noreferrer">GH</a>
            <a href="https://www.linkedin.com/in/salih-yazar-216835206/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">In</a>
            <a href="https://medium.com/" aria-label="Medium" target="_blank" rel="noopener noreferrer">M</a>
          </div>
          <small>© {new Date().getFullYear()} Salih Yazar. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
};

export default Home;
