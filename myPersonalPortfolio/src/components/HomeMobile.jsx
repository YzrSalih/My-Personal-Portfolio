import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomeMobile.module.css';
import Footer from './Footer';
import NavBar from './navBar';

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
        </div>
        <div className={styles.sideStack}>
          <div className={styles.sideCard}>
            <h3>Education</h3>
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
          <div className={styles.sideCard}>
            <h3>Experience</h3>
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
      </section>
      <Footer />
    </div>
  );
};

export default HomeMobile;
