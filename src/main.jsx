import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Moon, Sun, Sparkles, Terminal, Layers3, Braces, MoveUpRight } from 'lucide-react'
import { content, links } from './content'
import './styles.css'

const sections = ['home', 'stack', 'about', 'experience', 'work', 'contact']

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'pt')
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark')
  const t = content[language]

  useEffect(() => {
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en'
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#090b13' : '#f5f7fb'
    document.querySelector('meta[name="description"]').content = t.heroDescription
    localStorage.setItem('portfolio-language', language)
    localStorage.setItem('portfolio-theme', theme)
  }, [language, theme, t.heroDescription])

  return (
    <div className="site-shell overflow-hidden">
      <a className="skip-link" href="#main">{language === 'pt' ? 'Ir para o conteúdo' : 'Skip to content'}</a>
      <header className="site-header">
        <div className="page-width flex min-h-[76px] items-center justify-between gap-4">
          <a href="#home" className="brand" aria-label="Vinícius Padilha, home">vp<span className="brand-dot">.</span></a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label={language === 'pt' ? 'Navegação principal' : 'Main navigation'}>
            {sections.slice(1).map((id, index) => <a key={id} className="nav-link" href={`#${id}`}>{t.nav[index + 1]}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <div className="segmented" role="group" aria-label={t.languageLabel}>
              <button type="button" lang="pt-BR" aria-pressed={language === 'pt'} className={language === 'pt' ? 'selected' : ''} onClick={() => setLanguage('pt')}>PT</button>
              <button type="button" lang="en" aria-pressed={language === 'en'} className={language === 'en' ? 'selected' : ''} onClick={() => setLanguage('en')}>EN</button>
            </div>
            <button className="icon-button" type="button" aria-label={t.themeLabel} title={t.themeLabel} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun size={18} strokeWidth={1.8} /> : <Moon size={18} strokeWidth={1.8} />}
            </button>
          </div>
        </div>
        <nav className="mobile-nav page-width lg:hidden" aria-label={language === 'pt' ? 'Navegação principal' : 'Main navigation'}>
          {sections.slice(1).map((id, index) => <a key={id} href={`#${id}`}>{t.nav[index + 1]}</a>)}
        </nav>
      </header>

      <main id="main">
        <section id="home" className="hero relative scroll-mt-36">
          <div className="hero-glow" aria-hidden="true" />
          <div className="page-width relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.1fr_.9fr] lg:gap-14 lg:py-36">
            <div className="relative z-10">
              <div className="status-badge"><span className="status-pulse" />{t.availability}</div>
              <p className="eyebrow mt-12">{t.eyebrow}</p>
              <h1 className="hero-title mt-5">{t.heroTitle[0]} <span className="gradient-text">{t.heroTitle[1]}</span><br />{t.heroTitle[2]}</h1>
              <p className="hero-description mt-7 max-w-[640px]">{t.heroDescription}</p>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a className="button-primary" href="#contact">{t.heroPrimary}<ArrowUpRight size={18} /></a>
                <a className="button-secondary" href="#work">{t.heroSecondary}<ArrowRight size={17} /></a>
              </div>
              <div className="mt-14 flex items-center gap-5 border-t border-line pt-6">
                <div className="font-display text-4xl font-semibold tracking-tight text-main">10<span className="text-accent">+</span></div>
                <p className="max-w-36 text-sm leading-5 text-muted">{t.years}</p>
                <span className="mx-1 h-9 w-px bg-line" />
                <div className="flex items-center gap-3">
                  <a className="social-link" href={links.github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub — ${t.openNew}`}><Github size={19} /></a>
                  <a className="social-link" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`LinkedIn — ${t.openNew}`}><Linkedin size={19} /></a>
                </div>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
              <div className="art-ambient" />
              <div className="floating-glyph glyph-one"><Braces size={29} strokeWidth={1.5} /></div>
              <div className="floating-glyph glyph-two"><Sparkles size={27} strokeWidth={1.5} /></div>
              <div className="editor-card">
                <div className="editor-top"><span className="window-dots"><i /><i /><i /></span><span>vinicius.dev</span><span className="editor-top-right">↗</span></div>
                <div className="editor-body">
                  <p className="line-number">01 <span className="syntax-purple">const</span> developer <span className="syntax-pale">=</span> {'{'}</p>
                  <p className="line-number">02 &nbsp; name: <span className="syntax-green">'Vinícius Padilha'</span>,</p>
                  <p className="line-number">03 &nbsp; focus: [</p>
                  <p className="line-number">04 &nbsp;&nbsp; <span className="syntax-green">'frontend'</span>,</p>
                  <p className="line-number">05 &nbsp;&nbsp; <span className="syntax-green">'full stack'</span>,</p>
                  <p className="line-number">06 &nbsp;&nbsp; <span className="syntax-green">'AI'</span></p>
                  <p className="line-number">07 &nbsp; ],</p>
                  <p className="line-number">08 &nbsp; mindset: <span className="syntax-green">'keep building'</span></p>
                  <p className="line-number">09 {'}'}</p>
                </div>
                <div className="editor-bottom"><span className="inline-flex items-center gap-2"><span className="tiny-indicator" /> {t.experienceLabel}</span><span>TSX <span className="text-accent">●</span></span></div>
              </div>
              <div className="floating-label"><Layers3 size={16} /><span>BUILDING SCALABLE SOFTWARE</span></div>
            </div>
          </div>
          <div className="page-width relative hidden items-center gap-3 pb-8 text-[10px] tracking-[.24em] text-subtle sm:flex"><ArrowDown size={13} />{t.scroll}</div>
        </section>

        <section id="stack" className="section section-soft">
          <div className="page-width"><SectionHeading kicker={t.stackKicker} title={t.stackTitle} intro={t.stackIntro} />
            <div className="grid gap-4 md:grid-cols-3">{t.stackGroups.map((group, i) => {
              const Icon = [Terminal, Layers3, Sparkles][i]
              return <article className="stack-card" key={group.title}><div className="stack-icon"><Icon size={23} strokeWidth={1.6} /></div><h3 className="mt-8 font-display text-xl font-semibold text-main">{group.title}</h3><div className="mt-6 flex flex-wrap gap-2">{group.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div><span className="card-index">0{i + 1}</span></article>
            })}</div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="page-width grid gap-10 lg:grid-cols-[.85fr_1.15fr] lg:gap-24"><div><SectionHeading kicker={t.aboutKicker} title={t.aboutTitle} /></div>
            <div className="about-copy"><div className="quote-mark" aria-hidden="true">“</div>{t.aboutParagraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<div className="mt-9 flex flex-wrap gap-2">{t.aboutTags.map(tag => <span key={tag} className="value-tag"><span className="text-accent">✳</span> {tag}</span>)}</div></div>
          </div>
        </section>

        <section id="experience" className="section section-soft">
          <div className="page-width"><SectionHeading kicker={t.experienceKicker} title={t.experienceTitle} intro={t.experienceIntro} />
            <div className="experience-list">{t.jobs.map((job, i) => <article className="experience-item" key={job.company}><span className="experience-number">0{i + 1}</span><div><h3 className="font-display text-2xl font-semibold text-main">{job.company}</h3><p className="mt-1 text-sm font-medium text-accent">{job.role}</p><p className="mt-4 max-w-2xl leading-7 text-muted">{job.detail}</p><div className="mt-5 flex flex-wrap gap-2">{job.tags.map(tag => <span className="tag tag-small" key={tag}>{tag}</span>)}</div></div><span className="experience-period">{job.period}</span></article>)}</div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="page-width"><SectionHeading kicker={t.workKicker} title={t.workTitle} intro={t.workIntro} />
            <div className="grid gap-4 md:grid-cols-3">{t.work.map(item => <article key={item.number} className="work-card"><div className="flex items-center justify-between"><span className="eyebrow">/ {item.number}</span><MoveUpRight className="text-accent" size={21} /></div><div><h3 className="font-display text-2xl font-semibold text-main">{item.title}</h3><p className="mt-4 leading-7 text-muted">{item.description}</p></div><div className="flex flex-wrap gap-2">{item.tags.map(tag => <span className="tag tag-small" key={tag}>{tag}</span>)}</div></article>)}</div>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="page-width relative z-10"><p className="eyebrow">{t.contactKicker}</p><h2 className="mt-6 max-w-3xl font-display text-[clamp(2.7rem,6vw,5rem)] font-semibold leading-[1.12] tracking-[-.055em] text-main">{t.contactTitle}</h2><p className="mt-6 max-w-xl text-lg leading-8 text-muted">{t.contactText}</p><div className="mt-10 flex flex-wrap gap-3"><a className="button-primary" href={links.email}>{t.contactPrimary}<Mail size={18} /></a><a className="button-secondary" href={links.linkedin} target="_blank" rel="noopener noreferrer">{t.contactSecondary}<ArrowUpRight size={18} /></a></div></div>
          <div className="contact-orb" aria-hidden="true" />
        </section>
      </main>

      <footer className="footer"><div className="page-width flex flex-col gap-5 py-9 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-muted">© {new Date().getFullYear()} Vinícius Padilha. {t.footer}</p><div className="flex items-center gap-5"><a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">GitHub <ArrowUpRight size={13} /></a><a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn <ArrowUpRight size={13} /></a><a href="#home" aria-label={language === 'pt' ? 'Voltar ao início' : 'Back to top'}>↑ Top</a></div></div></footer>
    </div>
  )
}

function SectionHeading({ kicker, title, intro }) {
  return <div className="section-heading"><p className="eyebrow">{kicker}</p><h2 className="mt-5 max-w-3xl font-display text-[clamp(2.25rem,4.5vw,4rem)] font-semibold leading-[1.14] tracking-[-.045em] text-main">{title}</h2>{intro && <p className="mt-5 max-w-xl text-lg leading-8 text-muted">{intro}</p>}</div>
}

createRoot(document.getElementById('root')).render(<App />)
