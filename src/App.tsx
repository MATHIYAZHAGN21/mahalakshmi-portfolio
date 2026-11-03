import { createElement, useEffect, useState, type ComponentType, type ElementType } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, BarChart3, BriefcaseBusiness, CheckCircle2, ChevronRight, Cpu, Database, Download, GraduationCap, Handshake, Mail, Menu, MessageCircle, Phone, PieChart, Presentation, Sprout, Table2, Users, X, Zap } from 'lucide-react'

const nav = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']
type Skill = { name: string; detail: string; icon: ElementType | string }
const technicalSkills: Skill[] = [
  { name: 'Python', detail: 'Programming', icon: 'Py' },
  { name: 'Power BI', detail: 'Data visualization', icon: BarChart3 },
  { name: 'Tableau', detail: 'Data visualization', icon: PieChart },
  { name: 'Data Handling & Management', detail: 'Data analytics', icon: Database },
  { name: 'MS Office', detail: 'Productivity', icon: Presentation },
  { name: 'Documentation', detail: 'Reporting', icon: Table2 },
  { name: 'Embedded Systems', detail: 'Technology', icon: Cpu },
  { name: 'Internet of Things (IoT)', detail: 'Technology', icon: Zap },
]
const education = [
  { degree: 'B.E. – Electronics and Communication Engineering', school: 'VV College of Engineering', date: '2022 – 2026', result: 'CGPA: 7.59', current: true },
  { degree: 'HSC', school: 'Mary Ann Best Girls Higher Secondary School', date: '2021 – 2022', result: 'Percentage: 71%' },
  { degree: 'SSLC', school: 'Mary Ann Best Girls Higher Secondary School', date: '2019 – 2020', result: 'Percentage: 61.20%' },
]

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: .65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 600)
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.clearTimeout(timer); window.removeEventListener('scroll', onScroll) }
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  if (loading) return <div className="loader"><div className="loader-mark">MS<span>.</span></div><div className="loader-line"><motion.span initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: .55 }} /></div></div>

  return <>
    <header className="nav-shell">
      <a href="#home" className="wordmark">MAHALAKSHMI <strong>S.</strong></a>
      <nav aria-label="Main navigation">{nav.map(item => <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>)}</nav>
      <a className="resume-button" href="/resume.pdf" download><Download size={16} />Download Resume</a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      {menuOpen && <div className="mobile-nav">{nav.map(item => <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>)}</div>}
    </header>

    <main>
      <section className="hero-section" id="home">
        <div className="hero-grid-lines" />
        <Reveal className="hero-copy">
          <div className="status-pill"><span /> Electronics & Communication Engineering Graduate</div>
          <p className="hello">Hello, I'm Mahalakshmi S.</p>
          <h1>Turning Data Into <em>Insights</em> & Ideas Into <em>Innovation.</em></h1>
          <p className="hero-intro">I am an enthusiastic and detail-oriented engineering graduate with knowledge of Python, Data Analytics, Power BI, Tableau, and IoT. I enjoy exploring technology, analyzing data, solving problems, and continuously learning new skills.</p>
          <div className="hero-actions"><button className="button primary" onClick={() => scrollTo('projects')}>Explore My Work <ArrowRight size={18} /></button><button className="button secondary" onClick={() => scrollTo('contact')}>Contact Me</button></div>
        </Reveal>
        <Reveal className="portrait-column" delay={.15}>
          <div className="portrait-orbit orbit-one" /><div className="portrait-orbit orbit-two" />
          <div className="portrait-frame"><img src="/profile.jpg" alt="Mahalakshmi S" loading="eager" fetchPriority="high" /><div className="portrait-caption"><span>ECE</span><div><small>Graduate portfolio</small><strong>VV College of Engineering</strong></div></div></div>
        </Reveal>
        <button className="scroll-cue" onClick={() => scrollTo('about')} aria-label="Scroll to about"><ArrowDown size={18} /></button>
      </section>

      <section className="section about-section" id="about">
        <Reveal><p className="section-kicker">01 / About</p><h2>About <em>Me</em></h2></Reveal>
        <div className="about-grid">
          <Reveal className="about-quote"><span>“</span><p>Purposeful learning.<br />Practical innovation.</p></Reveal>
          <Reveal className="about-copy" delay={.08}><p>I am Mahalakshmi S, an Electronics and Communication Engineering graduate from VV College of Engineering. I have developed technical knowledge in Python programming, data handling, MS Office, Power BI, Tableau, and embedded systems.</p><p>Through internships and academic projects, I have gained exposure to data analytics, exploratory data analysis, IoT systems, and technology-driven problem-solving.</p><p>I am a quick learner who enjoys collaboration, maintaining accuracy, and adapting to new challenges. I am looking forward to opportunities where I can apply my knowledge and grow professionally.</p></Reveal>
        </div>
        <div className="highlights">{[['Engineering Graduate', GraduationCap], ['Data Analytics Enthusiast', BarChart3], ['Continuous Learner', Zap]].map(([label, Icon], i) => {
          const HighlightIcon = Icon as ComponentType<{ size?: number }>
          return <Reveal className="highlight" delay={i * .08} key={label as string}><div><HighlightIcon size={22} /></div><strong>{label as string}</strong></Reveal>
        })}</div>
      </section>

      <section className="section skills-section" id="skills">
        <Reveal className="section-heading"><div><p className="section-kicker">02 / Expertise</p><h2>Technical <em>Skills</em></h2></div><p>Tools and technologies I work with across engineering, analytics, reporting, and IoT.</p></Reveal>
        <div className="skills-grid">{technicalSkills.map((skill, i) => {
          const Icon = typeof skill.icon === 'string' ? null : skill.icon
          return <Reveal delay={i * .04} key={skill.name}><article className="skill-card"><div className="skill-icon">{typeof skill.icon === 'string' ? skill.icon : createElement(skill.icon, { size: 23 })}</div><small>{skill.detail}</small><h3>{skill.name}</h3><ChevronRight className="skill-arrow" size={19} /></article></Reveal>
        })}</div>
      </section>

      <section className="section experience-section" id="experience">
        <Reveal><p className="section-kicker light-kicker">03 / Experience</p><h2>Internship <em>Journey</em></h2></Reveal>
        <div className="timeline">
          <Reveal className="timeline-card"><div className="timeline-index">01</div><div className="timeline-main"><p className="company-label">Virtual Internship</p><h3>GenAI-Powered Data Analytics Job Simulation</h3><ul>{['Analyzed customer and repayment data using Python to identify business insights.', 'Performed Exploratory Data Analysis (EDA) to detect high-risk customer segments.', 'Created data visualizations to communicate key findings.', 'Delivered stakeholder-ready business reports and presentations.', 'Proposed an AI-driven, ethical collections approach for process improvement.'].map(x => <li key={x}><CheckCircle2 size={16} />{x}</li>)}</ul></div></Reveal>
          <Reveal className="timeline-card" delay={.1}><div className="timeline-index">02</div><div className="timeline-main"><div className="experience-meta"><span>22 January – 21 February 2025</span><span>Chennai</span></div><p className="company-label">National Institute of Ocean Technology (NIOT)</p><h3>Embedded Systems and IoT System Intern</h3></div></Reveal>
        </div>
      </section>

      <section className="section projects-section" id="projects">
        <Reveal className="section-heading"><div><p className="section-kicker">04 / Projects</p><h2>Selected <em>Work</em></h2></div><p>Academic projects presented through collaborative engineering and technology events.</p></Reveal>
        <div className="projects-grid">
          <Reveal className="project-card"><div className="project-art smart-art"><div className="art-grid" /><Sprout size={92} /><span>IoT & Engineering</span></div><div className="project-body"><small>VV Project Expo · February 2025</small><h3>Smart Irrigation System</h3><p>An academic project showcased at the VV College of Engineering Project Expo.</p><button onClick={() => scrollTo('contact')}>Project details <ArrowRight size={16} /></button></div></Reveal>
          <Reveal className="project-card" delay={.08}><div className="project-art biometric-art"><div className="scan-target" /><div className="finger">⌾</div><span>Security & Verification</span></div><div className="project-body"><small>VV College of Engineering</small><h3>Secured Biometric Voter Verification System</h3><p>An academic project focused on biometric-based voter verification.</p><button onClick={() => scrollTo('contact')}>Project details <ArrowRight size={16} /></button></div></Reveal>
        </div>
      </section>

      <section className="section education-section" id="education">
        <Reveal><p className="section-kicker">05 / Education</p><h2>Academic <em>Background</em></h2></Reveal>
        <div className="education-grid">{education.map((item, i) => <Reveal delay={i * .08} key={item.degree} className="education-card"><div className="education-year">{item.date}</div><div className="education-icon"><GraduationCap /></div><h3>{item.degree}</h3><p>{item.school}</p><strong>{item.result}</strong>{item.current && <span className="current-tag">Current education</span>}</Reveal>)}</div>
      </section>

      <section className="soft-section">
        <Reveal className="soft-title"><p className="section-kicker">06 / Professional strengths</p><h2>How I <em>contribute</em></h2></Reveal>
        <div className="soft-grid">{[
          { label: 'Teamwork', Icon: Users },
          { label: 'Collaboration', Icon: Handshake },
          { label: 'Quick Learner', Icon: Zap },
          { label: 'Accuracy', Icon: CheckCircle2 },
          { label: 'Problem Solving', Icon: BriefcaseBusiness },
          { label: 'Interpersonal Skills', Icon: MessageCircle },
        ].map(({ label, Icon }, i) => {
          return <Reveal className="soft-card" delay={i * .05} key={label}><Icon size={22} /><span>{label}</span></Reveal>
        })}</div>
      </section>

      <section className="section contact-section" id="contact">
        <Reveal className="contact-intro"><p className="section-kicker light-kicker">07 / Contact</p><h2>Let's Connect & Create <em>Something Meaningful.</em></h2><p>I am always interested in learning opportunities, professional connections, and opportunities to contribute my skills.</p></Reveal>
        <div className="contact-grid">
          <Reveal className="contact-links"><a href="mailto:mahalakshmisenthil2k5@gmail.com"><Mail /><span><small>Email</small>mahalakshmisenthil2k5@gmail.com</span></a><a href="tel:+917550376378"><Phone /><span><small>Phone</small>+91 75503 76378</span></a><div className="location"><BriefcaseBusiness /><span><small>Location</small>Udangudi, Tuticorin, Tamil Nadu</span></div></Reveal>
          <Reveal className="contact-form-wrap" delay={.1}><form className="contact-form" action="mailto:mahalakshmisenthil2k5@gmail.com" method="post" encType="text/plain"><label>Name<input name="name" required /></label><label>Email<input name="email" type="email" required /></label><label>Message<textarea name="message" rows={4} required /></label><button className="button primary" type="submit">Send Message <ArrowRight size={18} /></button></form></Reveal>
        </div>
      </section>
    </main>

    <footer><div className="footer-mark">MAHALAKSHMI <strong>S.</strong></div><p>Learning. Growing. Innovating.</p><nav>{nav.slice(0, 6).map(item => <button key={item} onClick={() => scrollTo(item.toLowerCase())}>{item}</button>)}</nav><a href="mailto:mahalakshmisenthil2k5@gmail.com">mahalakshmisenthil2k5@gmail.com</a><small>© 2026 Mahalakshmi S. All Rights Reserved.</small></footer>
    <button className={`back-top ${showTop ? 'visible' : ''}`} onClick={() => scrollTo('home')} aria-label="Back to top">↑</button>
  </>
}
