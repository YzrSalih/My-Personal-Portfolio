import React from "react";
import styles from './Skills.module.css';
import Eyebrow from './Eyebrow';
import Footer from './Footer';

const skillCategories = [
    {
        title: 'Frontend Architecture', // "Frontend" yerine daha kurumsal
        type: 'bars',
        skills: [
            { name: 'React & Ecosystem', level: 'Expert', percent: 90 },
            { name: 'TypeScript', level: 'Advanced', percent: 80 },
            { name: 'Modern CSS (Tailwind/SASS)', level: 'Advanced', percent: 88 },
            { name: 'Performance Optimization', level: 'Strong', percent: 74 },
        ]
    },
    {
        title: 'Backend & Solutions',
        type: 'bars',
        skills: [
            { name: 'Node.js & Express', level: 'Advanced', percent: 78 },
            { name: 'RESTful API Design', level: 'Advanced', percent: 80 },
            { name: 'Salesforce & Cloud Platform', level: 'Advanced', percent: 82 },
            { name: 'Database Management', level: 'Intermediate', percent: 68 },
        ]
    },
    {
        title: 'Tech Stack & Workflow',
        type: 'chips',
        items: [ 'Git', 'GitHub', 'Agile', 'Docker', 'Vite', 'NPM', 'Testing' ]
    },
    {
        title: 'Product & UX Design',
        type: 'bars',
        skills: [
            { name: 'Figma Prototyping', level: 'Advanced', percent: 78 },
            { name: 'Design Systems', level: 'Strong', percent: 72 },
            { name: 'Responsive Strategy', level: 'Advanced', percent: 84 },
        ]
    }
];

const Skills = () => {
    return (
        <div className={styles.pageWrap}>
            <main className={styles.skillsPage} id="skills">
                <div className={styles.skillsShell}>
                    <header className={styles.headerBlock}>
                        {/* İngilizce Freelance Odaklı Başlıklar */}
                        <Eyebrow>Services & Expertise</Eyebrow>
                        <h1 className={styles.title}>
                            Turning Ideas into <br />
                            <span className={styles.titleGradient}>Digital Reality</span>
                            <span className={styles.titleGlow} aria-hidden="true"/>
                        </h1>
                        <p className={styles.subtitle}>
                            Delivering end-to-end web solutions with a focus on performance, 
                            scalability, and user-centric design. From concept to deployment, 
                            I sharpen my craft to ship exceptional experiences.
                        </p>
                    </header>
                    
                    <section className={styles.categoriesGrid} aria-label="Skill categories">
                        {skillCategories.map(cat => (
                            <article key={cat.title} className={styles.categoryCard}>
                                <div className={styles.categoryHeader}>
                                    <h2 className={styles.categoryTitle}>{cat.title}</h2>
                                </div>
                                {cat.type === 'bars' && (
                                    <ul className={styles.skillsList}>
                                        {cat.skills.map(s => (
                                            <li key={s.name} className={styles.skillRow}>
                                                <div className={styles.skillTop}>
                                                    <span className={styles.skillName}>{s.name}</span>
                                                    <span className={styles.skillLevel}>{s.level}</span>
                                                </div>
                                                <div className={styles.progressBar}>
                                                    {/* Tailwind veya CSS değişkeni ile genişlik */}
                                                    <span className={styles.progressFill} style={{ width: s.percent + '%' }} />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {cat.type === 'chips' && (
                                    <div className={styles.chipsWrap}>
                                        {cat.items.map(item => (
                                            <span key={item} className={styles.chip}>{item}</span>
                                        ))}
                                    </div>
                                )}
                            </article>
                        ))}
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Skills;