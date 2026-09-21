import { useEffect, useState } from 'react'
import Icon from './components/Icon'
import { portfolioData, services } from './data/portfolioData'
import './App.css'

const navItems = ['Home', 'About', 'Skills', 'Education', 'Experience', 'Services', 'Contact']

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('Home')
  const [formStatus, setFormStatus] = useState('')

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.toLowerCase()))
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) setActiveSection(visible.target.id[0].toUpperCase() + visible.target.id.slice(1))
    }, { rootMargin: '-35% 0px -55% 0px' })
    sections.forEach((section) => section && observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (label) => {
    document.getElementById(label.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    setFormStatus('Thanks. This is a frontend-only form; connect an email service in the form handler to receive messages.')
    event.target.reset()
  }

  return <div className="site-shell">
    <header className="navbar"><button className="brand" onClick={() => scrollTo('Home')} aria-label="Go to home"><span>K</span><strong>KASHYAP</strong></button><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><Icon name={menuOpen ? 'close' : 'menu'} /></button><nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">{navItems.map((item) => <button key={item} className={activeSection === item ? 'active' : ''} onClick={() => scrollTo(item)}>{item}</button>)}</nav><a className="nav-cta" href="/resume.pdf" download>Download CV <Icon name="arrow" size={16} /></a></header>
    <main>
      <section id="home" className="hero section-pad"><div className="hero-copy reveal"><p className="eyebrow"><span className="status-dot" /> Available for learning & collaboration</p><h1>Building digital<br /><em>experiences</em> that matter.</h1><p className="hero-intro">I am <strong>{portfolioData.name}</strong>, a student and aspiring full-stack developer based in {portfolioData.location}. I enjoy turning ideas into useful, well-crafted software.</p><div className="hero-actions"><button className="button button-primary" onClick={() => scrollTo('Education')}>View Background <Icon name="arrow" size={17} /></button><button className="button button-ghost" onClick={() => scrollTo('Contact')}>Contact Me</button></div><div className="social-row"><a href={portfolioData.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Icon name="github" /></a><a href={portfolioData.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Icon name="linkedin" /></a><span>Follow the journey</span></div></div><div className="hero-visual reveal"><div className="portrait-frame"><div className="portrait-glow" /><div className="portrait-placeholder"><span>KK</span><small>PROFILE IMAGE<br />PLACEHOLDER</small></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div><div className="code-chip chip-one">&lt;developer /&gt;</div><div className="code-chip chip-two">{`{ passion: true }`}</div></div></section>
      <div className="marquee"><span>CREATIVE CODE</span><i>+</i><span>CURIOUS MIND</span><i>+</i><span>FULL-STACK FOCUS</span><i>+</i><span>CREATIVE CODE</span></div>
      <section id="about" className="section-pad about-section"><div className="section-heading"><p className="eyebrow">01 / About me</p><h2>Curious by nature.<br /><em>Intentional</em> by craft.</h2></div><div className="about-grid"><div className="about-lead"><p>{portfolioData.bio}</p><p>I am interested in programming, product thinking, and the small details that make technology feel human. My goal is to keep learning, make meaningful contributions, and grow into a developer who can work across the full stack.</p><a className="text-link" href={`mailto:${portfolioData.email}`}>Let's connect <Icon name="arrow" size={16} /></a></div><div className="fact-list"><div><span>01</span><p><strong>Currently</strong> Student developer</p></div><div><span>02</span><p><strong>Focus</strong> Full-stack development</p></div><div><span>03</span><p><strong>Based in</strong> {portfolioData.location}</p></div><div><span>04</span><p><strong>Born</strong> {portfolioData.dateOfBirth}</p></div></div></div></section>
      <section id="skills" className="section-pad skills-section"><div className="section-heading centered"><p className="eyebrow">02 / Toolkit</p><h2>Tools I use to bring<br /><em>ideas to life.</em></h2></div><div className="skills-grid">{portfolioData.skills.map((group) => <div className="skill-card" key={group.category}><div className="skill-icon"><Icon name={group.icon} /></div><h3>{group.category}</h3><div className="skill-items">{group.items.map((item) => <span key={item}>{item}</span>)}</div></div>)}</div></section>
      <section id="education" className="section-pad timeline-section"><div className="section-heading"><p className="eyebrow">03 / Background</p><h2>The foundation<br /><em>so far.</em></h2></div><div className="timeline">{portfolioData.education.map((item) => <div className="timeline-item" key={item.course}><span className="timeline-dot" /><div><p className="timeline-meta">{item.year}</p><h3>{item.course}</h3><p className="timeline-place">{item.institution}</p><p>{item.description}</p></div></div>)}</div></section>
      <section id="experience" className="section-pad timeline-section experience-section"><div className="section-heading"><p className="eyebrow">04 / Experience</p><h2>Growing through<br /><em>real practice.</em></h2></div><div className="timeline">{portfolioData.experience.map((item) => <div className="timeline-item" key={item.label}><span className="timeline-dot" /><div><p className="timeline-meta">{item.year}</p><h3>{item.label}</h3><p>{item.description}</p></div></div>)}</div></section>
      <section id="services" className="section-pad services-section"><div className="section-heading centered"><p className="eyebrow">05 / What I do</p><h2>From first thought<br />to <em>working product.</em></h2></div><div className="services-grid">{services.map((service) => <article className="service-card" key={service.title}><Icon name={service.icon} /><h3>{service.title}</h3><p>{service.description}</p><span className="service-number">/</span></article>)}</div></section>
      <section id="contact" className="section-pad contact-section"><div className="contact-intro"><p className="eyebrow">06 / Say hello</p><h2>Have an idea?<br /><em>Let's talk.</em></h2><p>Whether you have a project in mind or simply want to connect, my inbox is open.</p><div className="contact-details"><a href={`mailto:${portfolioData.email}`}><Icon name="mail" /><span>{portfolioData.email}</span></a><a href={`tel:${portfolioData.phone}`}><Icon name="phone" /><span>{portfolioData.phone}</span></a><span><Icon name="pin" /><span>{portfolioData.location}</span></span></div></div><form className="contact-form" onSubmit={handleSubmit}><label>Name<input name="name" required minLength="2" placeholder="Your name" /></label><label>Email<input name="email" type="email" required placeholder="you@example.com" /></label><label>Subject<input name="subject" required placeholder="What is this about?" /></label><label>Message<textarea name="message" required minLength="10" placeholder="Tell me a little about your idea..." rows="4" /></label><button className="button button-primary" type="submit">Send Message <Icon name="arrow" size={17} /></button>{formStatus && <p className="form-status" role="status">{formStatus}</p>}<p className="form-note">Frontend demo only. Connect Formspree, EmailJS, or your own backend in this form handler to receive messages.</p></form></section>
    </main>
    <footer className="footer"><div><button className="brand" onClick={() => scrollTo('Home')}><span>K</span><strong>KASHYAP</strong></button><p>Designed & built with curiosity.</p></div><div className="footer-right"><div className="footer-social"><a href={portfolioData.github} target="_blank" rel="noreferrer"><Icon name="github" /></a><a href={portfolioData.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" /></a></div><p>© 2026 {portfolioData.name}</p></div></footer><button className="scroll-top" onClick={() => scrollTo('Home')} aria-label="Scroll to top"><Icon name="up" size={18} /></button>
  </div>
}

export default App
