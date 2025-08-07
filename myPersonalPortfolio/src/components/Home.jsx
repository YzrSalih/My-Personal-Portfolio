import React, { useState, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const titles = ["Web Developer", "Frontend Developer", "Fullstack Developer"];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(300);

  useEffect(() => {
    let timer;
    const fullText = titles[currentTitle];
    if (!isDeleting && displayedText.length < fullText.length) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      }, typingSpeed / 2);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 1200);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitle, titles, typingSpeed]);

  return (
    <section className="home-section">
      <div className="stars-bg">
        <div className="shooting-star" />
        <div className="shooting-star delay1" />
        <div className="shooting-star delay2" />
      </div>
      <div className="home-main-layout">
        <div className="home-content home-content-left" style={{
          background: 'rgba(40, 20, 70, 0.45)',
          borderRadius: '24px',
          boxShadow: '0 4px 32px #a18aff22',
          padding: '40px 36px 32px 36px',
          marginTop: '72px', // YUKARI KAYDIRILDI
          marginLeft: '0',
          maxWidth: '520px',
          minWidth: '340px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '18px',
        }}>
          <div className="portfolio-badge" style={{
            background: '#3a2c5e',
            color: '#eaeaea',
            fontWeight: 700,
            fontSize: '1.1rem',
            borderRadius: '12px',
            padding: '8px 24px',
            marginBottom: '12px',
            boxShadow: '0 2px 12px #2c1e3a33',
            letterSpacing: '0.5px',
            alignSelf: 'flex-start',
            border: '1.5px solid #5c4a7d',
          }}>Welcome to my Portfolio</div>
          <h1 className="main-title" style={{
            fontSize: '3.1rem',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '0.2rem',
            letterSpacing: '1.5px',
            textShadow: '0 2px 16px #a18aff55',
            lineHeight: 1.1,
          }}>
            Hello, I'm <span style={{ color: '#a18aff', textShadow: 'none' }}>Salih</span>
          </h1>
          <h2 className="main-subtitle" style={{
            fontSize: '1.7rem',
            fontWeight: 700,
            marginBottom: '0.8rem',
            color: '#a18aff',
            minHeight: '2.2rem',
            textAlign: 'left',
            letterSpacing: '0.5px',
            background: 'linear-gradient(90deg, #a18aff 0%, #61dafb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            padding: '0.2rem 0.5rem',
            borderRadius: '8px',
            boxShadow: '0 2px 12px #a18aff22',
            display: 'inline-block',
          }}>
            <span style={{ display: 'inline-block', minWidth: '15ch' }}>
              {displayedText}
              <span className="typing-cursor" style={{ color: '#a18aff' }}>|</span>
            </span>
          </h2>
          <p className="main-desc" style={{
            background: 'rgba(30, 18, 50, 0.55)',
            borderRadius: '16px',
            padding: '18px 22px',
            color: '#eaeaea',
            fontSize: '1.08rem',
            lineHeight: 1.7,
            boxShadow: '0 2px 16px #a18aff22',
            marginBottom: '8px',
            marginTop: '0',
          }}>
            I’m a Full Stack Developer with 2 years of experience, currently focusing on building modern, responsive web applications using <span style={{ color: '#61dafb', fontWeight: 600 }}>React</span>. I also work as a freelancer, helping individuals and businesses bring their ideas to life through clean, functional, and user-friendly websites. If you're interested in having a React-based site built, feel free to reach out to me on <a href="https://www.linkedin.com/in/salih-yazar-216835206/?profileId=ACoAADRy1fIBmvfA3MFyOFnGIZdJ95vVAw4xsTY" target="_blank" rel="noopener noreferrer" style={{ color: '#a18aff', textDecoration: 'underline' }}>LinkedIn</a>. I'm also passionate about learning and sharing knowledge — you can follow my journey and insights on my <a href="https://medium.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#a18aff', textDecoration: 'underline' }}>Medium</a> channel where I write about what I’ve been exploring in tech. Let’s connect and create something meaningful.
          </p>
          <a
            className="main-connect-btn"
            href="https://www.linkedin.com/in/salih-yazar-216835206/?profileId=ACoAADRy1fIBmvfA3MFyOFnGIZdJ95vVAw4xsTY"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: '#2c1e3a',
              color: '#eaeaea',
              fontWeight: 700,
              fontSize: '1.15rem',
              borderRadius: '10px',
              padding: '12px 32px',
              marginTop: '10px',
              boxShadow: '0 2px 12px #2c1e3a33',
              border: '1.5px solid #5c4a7d',
              alignSelf: 'flex-start',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
          >
            Let's Connect <span>&rarr;</span>
          </a>
        </div>
        <div className="info-sections home-content-right">
          <div className="info-card">
            <h2 className="info-title">Education</h2>
            <ul className="info-list">
              <li>
                <span className="info-degree">B.Sc. Computer Science</span><br />
                <span className="info-school" style={{ display: 'block', marginTop: '2px' }}>VIZJA University</span><br />
                <span className="info-year" style={{ display: 'block', marginTop: '2px' }}>2019 - 2024</span>
              </li>
              <li style={{ marginTop: '12px' }}>
                <span className="info-degree">B.Sc. Computer Science</span><br />
                <span className="info-school" style={{ display: 'block', marginTop: '2px' }}>EPITA University</span><br />
                <span className="info-year" style={{ display: 'block', marginTop: '2px' }}>2021 - 2022 / Erasmus Program in Paris</span>
              </li>
              {/* Daha fazla eğitim eklenebilir */}
            </ul>
          </div>
          <div className="info-card">
            <h2 className="info-title">Experience</h2>
            <ul className="info-list">
              <li>
                <span className="info-role">Frontend Developer</span><br />
                <span className="info-company" style={{ display: 'block', marginTop: '2px' }}>Enresoft LLC</span><br />
                <span className="info-year" style={{ display: 'block', marginTop: '2px' }}>Mar 2024 - Present · Part-time</span>
              </li>
              <li style={{ marginTop: '12px' }}>
                <span className="info-role">Full Stack Salesforce Developer</span><br />
                <span className="info-company" style={{ display: 'block', marginTop: '2px' }}>Soft Innovas</span><br />
                <span className="info-year" style={{ display: 'block', marginTop: '2px' }}>Mar 2023 - Mar 2024 · Full-time</span>
              </li>
              {/* Daha fazla deneyim eklenebilir */}
            </ul>
          </div>
        </div>
      </div>
      <div className="astronaut-container">
        <img
          src="/src/assets/Img/rocket.svg"
          alt="Rocket"
          className="rocket-img"
        />
        <img
          src="/src/assets/Img/rocket.svg"
          alt="Rocket"
          className="rocket-img rocket-img-2"
        />
        <img
          src="/src/assets/Img/rocket.svg"
          alt="Rocket"
          className="rocket-img rocket-img-3"
        />
        <img
          src="/src/assets/Img/rocket.svg"
          alt="Rocket"
          className="rocket-img rocket-img-4"
        />
      </div>
    </section>
  );
};

export default Home;
