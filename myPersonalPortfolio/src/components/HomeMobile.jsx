import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeMobile.module.css';
import Footer from './Footer';
import NavBar from './navBar';
import ExperienceDetails from './ExperienceDetails';
import AutoPlayVideo from './AutoPlayVideo';
import GitHubShowcase from './GitHubShowcase';
import ghImage from '../assets/Img/image.png';
import NeonWatch from './NeonWatch';

const titles = ["Web Developer", "Frontend Developer", "Fullstack Developer"];

function useTypingRotation(words, pause=1400){
  const [index,setIndex]=useState(0);
  const [text,setText]=useState('');
  const [del,setDel]=useState(false);
  useEffect(()=>{
    const full = words[index];
    let t;
    if(!del && text.length < full.length){
      t=setTimeout(()=>setText(full.slice(0,text.length+1)),120);
    } else if(del && text.length>0){
      t=setTimeout(()=>setText(full.slice(0,text.length-1)),60);
    } else if(!del && text.length===full.length){
      t=setTimeout(()=>setDel(true), pause);
    } else if(del && text.length===0){
      setDel(false); setIndex((i)=> (i+1)%words.length);
    }
    return ()=>clearTimeout(t);
  },[text,del,index,words,pause]);
  return text;
}

const HomeMobile = () => {
  const displayedText = useTypingRotation(titles);
  // measure navbar height so content starts below it
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    const update = () => {
      const h = document.querySelector('.custom-navbar')?.offsetHeight || 0;
      setNavHeight(h);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return (
    <div className={styles.pageWrap}>
      <NavBar />
      <section className={styles.homeSection} id="home" style={{ paddingTop: navHeight ? navHeight + 28 : undefined }}>
        {/* Added dynamic paddingTop so the Introduction badge is fully visible */}
        <div className={styles.heroBackdrop} aria-hidden="true" />
        <div className={styles.heroBlock}>
          <span className={styles.eyebrowBadge} style={{zIndex:2,position:'relative'}}>Introduction</span>
          <h1 className={styles.heroTitle}>Hello, I'm <span className="name">Salih</span></h1>
          <div className={styles.roleTyping}>{displayedText}<span className={styles.roleCursor}>|</span></div>
          <p className={styles.heroDesc}>Full Stack Developer focused on crafting performant, accessible and visually cohesive web applications.</p>
          <div className={styles.actionsRow}>
            <a className={styles.primaryBtn} href="https://www.linkedin.com/in/salih-yazar-216835206/" target="_blank" rel="noopener noreferrer">Connect ↗</a>
            <Link className={styles.ghostBtn} to="/projects">Projects</Link>
          </div>
          {/* Certifications section (mobile) */}
          <div className={styles.certsSection} aria-label="Professional certifications">
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
              <li className={styles.certItem}>
                <span className={styles.certBadge}>Google</span>
                <span className={styles.certTitle}>UX Design Certificate</span>
                <span className={styles.certMeta}>Aug 2025</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.sideStack}>
          <div className={styles.sideCard}>
            <h3>Education</h3>
            <ul className={styles.timeline}>
              <li className={styles.timelineItem}>
                <div className={styles.itemHeading}>B.Sc. Computer Science — Akademia Ekonomiczno‑Humanistyczna w Warszawie (VIZJA University)</div>
                <div className={styles.itemMeta}>Warsaw · GPA 4.24</div>
                <div className={styles.itemYear}>Mar 2021 – Sep 2024</div>
                <ul className={styles.itemDetails}>
                  <li>Algorithms & complexity</li>
                  <li>Operating Systems</li>
                  <li>MVC web application development</li>
                  <li>Object-oriented programming in JavaScript</li>
                  <li>REST-oriented web services</li>
                  <li>Cloud-oriented web applications</li>
                  <li>Modern frontend web application development</li>
                  <li>Introduction to Artificial Intelligence</li>
                </ul>
              </li>
              <li className={styles.timelineItem}>
                <div className={styles.itemHeading}>EPITA: Ecole d'Ingénieurs en Informatique — Bachelor's in Computer Science</div>
                <div className={styles.itemMeta}>Paris · Erasmus Program</div>
                <div className={styles.itemYear}>Sep 2022 – Jul 2023</div>
                <ul className={styles.itemDetails}>
                  <li>Project Management Principles</li>
                  <li>Data Flow and Computer Networks</li>
                  <li>Data Privacy by Design</li>
                  <li>Digital Transformation</li>
                  <li>Introduction to Blockchain & Bitcoin</li>
                  <li>Advanced Algorithmic</li>
                  <li>Operating Systems: Unix</li>
                  <li>Introduction to Python</li>
                  <li>Relational Databases</li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Removed the Experience side card to avoid duplication */}
        </div>

        {/* Keep detailed Experience section on mobile as well */}
        <ExperienceDetails />
        <AutoPlayVideo />
        <GitHubShowcase image={ghImage} title="GitHub Profile Overview" alt="Screenshot of Salih Yazar's GitHub profile overview page" />
        <NeonWatch />
      </section>
      <Footer />
    </div>
  );
};

export default HomeMobile;
