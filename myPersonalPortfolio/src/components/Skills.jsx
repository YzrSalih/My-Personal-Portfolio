import React from "react";
import styles from './Skills.module.css';
import Eyebrow from './Eyebrow';

const skillCategories = [
	{
		title: 'Frontend',
		type: 'bars',
		skills: [
			{ name: 'React', level: 'Expert', percent: 90 },
			{ name: 'TypeScript', level: 'Advanced', percent: 80 },
			{ name: 'JavaScript (ESNext)', level: 'Advanced', percent: 85 },
			{ name: 'HTML5 / Semantic', level: 'Advanced', percent: 88 },
			{ name: 'CSS3 / Modern Layout', level: 'Advanced', percent: 82 },
			{ name: 'Redux Toolkit', level: 'Advanced', percent: 78 },
			{ name: 'Accessibility (a11y)', level: 'Strong', percent: 72 },
			{ name: 'Performance Optimization', level: 'Strong', percent: 74 },
		]
	},
	{
		title: 'Backend & Platform',
		type: 'bars',
		skills: [
			{ name: 'Node.js', level: 'Advanced', percent: 78 },
			{ name: 'Express', level: 'Advanced', percent: 76 },
			{ name: 'RESTful API Design', level: 'Advanced', percent: 80 },
			{ name: 'MongoDB', level: 'Intermediate', percent: 68 },
			{ name: 'SQL Basics', level: 'Intermediate', percent: 60 },
			{ name: 'JWT / Auth Flows', level: 'Strong', percent: 70 },
			{ name: 'Salesforce Platform', level: 'Advanced', percent: 82 },
			{ name: 'CI/CD Concepts', level: 'Working', percent: 58 },
		]
	},
	{
		title: 'Dev & Workflow',
		type: 'chips',
		items: [ 'Git', 'GitHub', 'Agile', 'Jira', 'Testing', 'Vite', 'Webpack', 'ESLint', 'Prettier', 'Docker Basics', 'NPM / PNPM', 'CLI' ]
	},
	{
		title: 'UI / UX & Product',
		type: 'bars',
		skills: [
			{ name: 'Design Systems', level: 'Strong', percent: 72 },
			{ name: 'Figma', level: 'Advanced', percent: 78 },
			{ name: 'Wireframing', level: 'Advanced', percent: 80 },
			{ name: 'Prototyping', level: 'Strong', percent: 70 },
			{ name: 'User Flows', level: 'Strong', percent: 68 },
			{ name: 'UX Writing', level: 'Intermediate', percent: 60 },
			{ name: 'Responsive Strategy', level: 'Advanced', percent: 84 },
		]
	},
	{
		title: 'Other & Learning',
		type: 'chips',
		items: [ 'GraphQL (Learning)', 'Microservices', 'Serverless', 'WebSockets', 'OAuth', 'TDD', 'OpenAI APIs', 'Analytics', 'Performance Audits', 'Security Basics' ]
	}
];

const Skills = () => {
	return (
		<main className={styles.skillsPage} id="skills">
			<div className={styles.skillsShell}>
				<header className={styles.headerBlock}>
					<Eyebrow>Capabilities</Eyebrow>
					<h1 className={styles.title}>Focused Crafting of <span className={styles.titleGradient}>Modern Interfaces</span><span className={styles.titleGlow} aria-hidden="true"/></h1>
					<p className={styles.subtitle}>End-to-end proficiency across frontend architecture, platform integration and user-centered product design. Continuously sharpening skills to ship accessible, maintainable and performant experiences.</p>
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
												<span className={styles.progressFill} style={{ ['--w']: s.percent + '%' }} />
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
	);
};

export default Skills;
