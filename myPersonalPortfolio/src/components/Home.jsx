import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import useIsMobile from './hooks/useIsMobile';
import HomeMobile from './HomeMobile';
import ExperienceDetails from './ExperienceDetails';
import AutoPlayVideo from './AutoPlayVideo';
import GitHubShowcase from './GitHubShowcase';
import ghImage from '../assets/Img/image.png';
import NeonWatch from './NeonWatch';

const Home = () => {
  const isMobile = useIsMobile(820);
  const titles = ["Web Developer", "Frontend Developer", "Fullstack Developer"];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = titles[currentTitle];
    if (!isDeleting && displayedText.length < fullText.length) {
      timer = setTimeout(() => setDisplayedText(fullText.substring(0, displayedText.length + 1)), 100);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => setDisplayedText(fullText.substring(0, displayedText.length - 1)), 50);
    } else if (!isDeleting && displayedText.length === fullText.length) {
      timer = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitle]);

  if (isMobile) return <HomeMobile />;

  return (
    <div className="text-white min-h-screen font-sans overflow-x-hidden">
      {/* Arka Plan Izgarası */}
      <div className="fixed inset-0 technical-grid pointer-events-none opacity-40"></div>

      <main className="relative z-10">
        {/* --- AURA HERO BÖLÜMÜ --- */}
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-20 border-b border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-emerald-500/20 rounded-full bg-emerald-500/5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest">Introduction</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-medium tracking-tighter mb-10 leading-[0.9]">
            Hello, I'm Salih. <br />
            <span className="text-gradient italic">{displayedText}|</span>
          </h1>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <p className="max-w-xl text-lg text-neutral-400 leading-relaxed font-light">
              Full Stack Developer focused on crafting performant, accessible and visually cohesive web applications.
              I enjoy translating complex problems into elegant, scalable interface architectures.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/salih-yazar-216835206/" target="_blank" className="px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-neutral-200 transition-all">Connect ↗</a>
              <Link to="/projects" className="px-8 py-4 border border-white/10 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all">Projects</Link>
            </div>
          </div>
        </section>

        {/* --- SERTİFİKALAR & EĞİTİM (VERİLERİN BURADA) --- */}
        <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Sertifikalar Kartı */}
          <div className="wall-card rounded-3xl p-10">
            <h2 className="text-xs font-mono text-emerald-400 uppercase tracking-[0.3em] mb-10">Professional Certifications</h2>
            <div className="space-y-8">
              {[
                { org: "Salesforce", title: "AI Associate", date: "Dec 2024" },
                { org: "IBM", title: "Software Engineering", date: "Oct 2024" },
                { org: "Salesforce", title: "Platform App Builder", date: "Sep 2022" },
                { org: "Salesforce", title: "Platform Developer I", date: "Aug 2022" },
                { org: "Google", title: "UX Design Certificate", date: "Aug 2025" }
              ].map((cert, i) => (
                <div key={i} className="group border-l border-white/10 pl-6 hover:border-emerald-500/50 transition-colors">
                  <div className="text-[10px] text-neutral-500 uppercase mb-1 font-mono">{cert.org}</div>
                  <div className="text-white text-lg font-medium group-hover:text-emerald-400 transition-colors">{cert.title}</div>
                  <div className="text-xs text-neutral-600 mt-1">{cert.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Eğitim Kartı */}
          <div className="wall-card rounded-3xl p-10 flex flex-col justify-between">
            <h2 className="text-xs font-mono text-indigo-400 uppercase tracking-[0.3em] mb-10">Education Background</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-medium text-white mb-2">B.Sc. Computer Science</h3>
                <p className="text-neutral-400 text-sm">VIZJA University · Warsaw</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Algorithms", "OS", "MVC", "REST", "Cloud", "AI"].map(skill => (
                    <span key={skill} className="text-[9px] px-2 py-1 border border-white/5 rounded bg-white/5 text-neutral-400 uppercase tracking-tighter">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="pt-6 border-t border-white/5">
                <h3 className="text-xl font-medium text-white mb-2">EPITA Paris</h3>
                <p className="text-neutral-400 text-sm">Erasmus Program · Computer Science</p>
                <p className="text-[10px] text-neutral-600 mt-2 font-mono">Sep 2022 – Jul 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- DİĞER BİLEŞENLER --- */}
        <div className="max-w-7xl mx-auto px-6 space-y-24 pb-24">
          <ExperienceDetails />
          <AutoPlayVideo />
          <GitHubShowcase image={ghImage} title="GitHub Profile" />
          <NeonWatch />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;