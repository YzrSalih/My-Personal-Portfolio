import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import codezyLogoWhite from "../assets/Img/codezy4.png"; // white logo
import Footer from "./Footer"; // added

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
      <Footer />
    </div>
  );
};

export default Home;
