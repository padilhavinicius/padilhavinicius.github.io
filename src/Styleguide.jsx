import React from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Braces, Check, Github, Layers3, Linkedin, Mail, Moon, MoveUpRight, Sparkles, Sun, Terminal } from 'lucide-react'

const palette = [
  { name: 'Background', token: '--bg', dark: '#090B13', light: '#F5F7FB' },
  { name: 'Surface', token: '--surface', dark: '#0E121D', light: '#FFFFFF' },
  { name: 'Raised', token: '--surface-raised', dark: '#121826', light: '#F8FAFC' },
  { name: 'Text', token: '--main', dark: '#EEF3FA', light: '#111E2D' },
  { name: 'Muted', token: '--muted', dark: '#9AA8B9', light: '#4F6071' },
  { name: 'Subtle', token: '--subtle', dark: '#69798E', light: '#6B7A89' },
  { name: 'Border', token: '--line', dark: '#253041', light: '#DCE4EB' },
  { name: 'Accent', token: '--accent', dark: '#69DDD1', light: '#137E78' },
]

const copy = {
  pt: {
    back: 'Voltar ao portfólio', label: 'SISTEMA VISUAL / 2026', title: 'Guia de estilo',
    intro: 'As escolhas visuais por trás deste portfólio, reunidas em uma página viva. Use os controles acima para comparar os temas e idiomas.',
    index: 'Nesta página', sections: ['Cores', 'Tipografia', 'Elementos', 'Padrões', 'Ícones', 'Princípios'],
    colors: 'Cores & temas', colorsDesc: 'Tokens semânticos mantêm contraste e hierarquia nos dois temas. Os valores exibidos correspondem ao CSS do site.',
    token: 'Token', current: 'Tema atual', alternate: 'Outro tema',
    gradients: 'Gradientes de destaque', gradientsDesc: 'O gradiente de texto combina verde água, azul e violeta. A versão clara usa tons mais escuros para leitura.',
    type: 'Tipografia', typeDesc: 'Space Grotesk dá personalidade aos títulos, DM Sans sustenta a leitura e DM Mono marca detalhes técnicos.',
    display: 'Título principal', section: 'Título de seção', card: 'Título de card', body: 'Texto corrido', small: 'Texto auxiliar', eyebrow: 'SOBRE / 02',
    sampleHero: 'Construindo software que faz a diferença.', sampleSection: 'Tecnologia com intenção.', sampleCard: 'Interfaces & mobile',
    sampleBody: 'Uma boa interface torna problemas complexos mais claros. Ritmo, contraste e espaço ajudam a orientar cada leitura.',
    sampleSmall: 'Informação secundária com contraste suficiente para leitura.',
    components: 'Elementos de interface', componentsDesc: 'Botões, etiquetas e superfícies seguem os mesmos tokens da página principal.',
    primary: 'Vamos conversar', secondary: 'Explorar trabalho', availability: 'Aberto a conexões e novas oportunidades',
    cardTitle: 'Card de conteúdo', cardText: 'Uma superfície sutil, com borda delicada e espaço para informação objetiva.',
    patterns: 'Padrões & layout', patternsDesc: 'Fundo pontilhado, brilho radial discreto, bordas finas e cartões formam a linguagem visual.',
    dots: 'Malha pontilhada', dotsDetail: 'Pontos de 1 px, repetidos a cada 26 px.', glow: 'Luz ambiente', glowDetail: 'Radiais suaves em verde água e violeta.', spacing: 'Espaçamento', spacingDetail: 'Conteúdo até 1180 px; respiro amplo entre seções.',
    icons: 'Ícones', iconsDesc: 'Ícones lineares Lucide, geralmente com traço de 1,5–1,8 px; 16–23 px no conteúdo e 18 px nas ações.',
    principles: 'Princípios de uso', principlesDesc: 'Regras simples que ajudam a manter consistência ao expandir o portfólio.',
    rules: ['Use um único h1 por página e respeite a sequência h2 → h3.', 'Reserve o acento para ações, marcadores e pequenas ênfases.', 'Prefira parágrafos curtos, verbos diretos e conteúdo verificável.', 'Mantenha foco visível, texto legível e movimento reduzido quando solicitado.'],
    footer: 'Este guia é parte do próprio portfólio. Os exemplos usam os estilos reais do site.',
  },
  en: {
    back: 'Back to portfolio', label: 'VISUAL SYSTEM / 2026', title: 'Style guide',
    intro: 'The visual choices behind this portfolio, collected in a living page. Use the controls above to compare themes and languages.',
    index: 'On this page', sections: ['Colors', 'Typography', 'Elements', 'Patterns', 'Icons', 'Principles'],
    colors: 'Colors & themes', colorsDesc: 'Semantic tokens keep contrast and hierarchy consistent across both themes. Values below match the site CSS.',
    token: 'Token', current: 'Current theme', alternate: 'Other theme',
    gradients: 'Accent gradients', gradientsDesc: 'The text gradient blends teal, blue and violet. The light version uses darker tones for readability.',
    type: 'Typography', typeDesc: 'Space Grotesk brings character to headings, DM Sans supports reading, and DM Mono marks technical details.',
    display: 'Hero heading', section: 'Section heading', card: 'Card heading', body: 'Body copy', small: 'Supporting copy', eyebrow: 'ABOUT / 02',
    sampleHero: 'Building software that makes a difference.', sampleSection: 'Technology with purpose.', sampleCard: 'Interfaces & mobile',
    sampleBody: 'A good interface makes complex problems easier to understand. Rhythm, contrast and space guide each reading.',
    sampleSmall: 'Secondary information with enough contrast to read comfortably.',
    components: 'Interface elements', componentsDesc: 'Buttons, tags and surfaces use the same tokens as the main page.',
    primary: "Let's talk", secondary: 'Explore work', availability: 'Open to connections and new opportunities',
    cardTitle: 'Content card', cardText: 'A subtle surface with a fine border and room for focused information.',
    patterns: 'Patterns & layout', patternsDesc: 'A dotted background, subtle radial glow, fine borders and cards shape the visual language.',
    dots: 'Dot grid', dotsDetail: '1 px dots repeated every 26 px.', glow: 'Ambient light', glowDetail: 'Soft teal and violet radial gradients.', spacing: 'Spacing', spacingDetail: 'Content up to 1180 px; generous space between sections.',
    icons: 'Icons', iconsDesc: 'Lucide outline icons, usually 1.5–1.8 px stroke; 16–23 px in content and 18 px in actions.',
    principles: 'Usage principles', principlesDesc: 'Simple rules to keep the portfolio consistent as it grows.',
    rules: ['Use one h1 per page and keep the h2 → h3 heading order.', 'Reserve the accent color for actions, markers and small highlights.', 'Write short paragraphs, use direct verbs and keep claims verifiable.', 'Keep focus visible, text legible and reduce motion when requested.'],
    footer: 'This guide is part of the portfolio itself. Examples use the site’s actual styles.',
  },
}

const ids = ['colors', 'typography', 'elements', 'patterns', 'icons', 'principles']
const iconSamples = [
  ['ArrowUpRight', ArrowUpRight], ['ArrowRight', ArrowRight], ['Sparkles', Sparkles],
  ['Terminal', Terminal], ['Layers3', Layers3], ['Braces', Braces],
  ['Github', Github], ['Linkedin', Linkedin], ['Mail', Mail],
  ['Moon', Moon], ['Sun', Sun], ['MoveUpRight', MoveUpRight],
]

function GuideSection({ id, number, title, description, children }) {
  return <section id={id} className="section guide-section">
    <div className="page-width">
      <div className="section-heading"><p className="eyebrow">{number} / {id.toUpperCase()}</p><h2 className="guide-h2">{title}</h2><p className="guide-lead">{description}</p></div>
      {children}
    </div>
  </section>
}

export function Styleguide({ language, theme }) {
  const t = copy[language]
  const other = theme === 'dark' ? 'light' : 'dark'
  return <main id="main">
    <div className="guide-hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="page-width relative py-20 sm:py-28">
        <a className="guide-back" href="/"><ArrowLeft size={17} />{t.back}</a>
        <p className="eyebrow mt-16">{t.label}</p>
        <h1 className="hero-title mt-5"><span className="gradient-text">{t.title}</span><span className="brand-dot">.</span></h1>
        <p className="hero-description mt-7 max-w-[660px]">{t.intro}</p>
        <div className="guide-index mt-12"><span className="font-mono text-xs text-subtle">{t.index}</span><nav aria-label={t.index}>{ids.map((id, i) => <a key={id} href={`#${id}`}>{t.sections[i]}</a>)}</nav></div>
      </div>
    </div>

    <GuideSection id="colors" number="01" title={t.colors} description={t.colorsDesc}>
      <div className="guide-palette">{palette.map(color => <article className="guide-swatch" key={color.token}>
        <div className="guide-swatch-color" style={{ background: `var(${color.token})` }} />
        <div className="guide-swatch-info"><strong>{color.name}</strong><code>{color.token}</code><span>{t.current}: {color[theme]}</span><span>{t.alternate}: {color[other]}</span></div>
      </article>)}</div>
      <div className="guide-gradient-panel mt-8"><div className="guide-gradient-sample"><span className="gradient-text">Aa / 01</span></div><div><h3 className="font-display text-xl font-semibold text-main">{t.gradients}</h3><p className="mt-2 leading-7 text-muted">{t.gradientsDesc}</p><code className="guide-code">linear-gradient(105deg, teal → blue → violet)</code></div></div>
    </GuideSection>

    <GuideSection id="typography" number="02" title={t.type} description={t.typeDesc}>
      <div className="guide-type-meta"><span>Space Grotesk <small>DISPLAY · 600</small></span><span>DM Sans <small>BODY · 400 / 700</small></span><span>DM Mono <small>DETAILS · 500</small></span></div>
      <div className="guide-type-list">
        <div><span className="guide-spec">{t.display} · Space Grotesk · clamp(3.25rem, 6vw, 6.2rem)</span><p className="hero-title guide-type-hero">{t.sampleHero}</p></div>
        <div><span className="guide-spec">{t.section} · Space Grotesk · clamp(2.25rem, 4.5vw, 4rem)</span><h3 className="guide-h2">{t.sampleSection}</h3></div>
        <div><span className="guide-spec">{t.card} · Space Grotesk · 1.5rem</span><p className="font-display text-2xl font-semibold text-main">{t.sampleCard}</p></div>
        <div><span className="guide-spec">{t.body} · DM Sans · 1.125rem / 2rem</span><p className="max-w-2xl text-lg leading-8 text-muted">{t.sampleBody}</p></div>
        <div><span className="guide-spec">{t.eyebrow} · DM Mono · .7rem / tracking .2em</span><p className="eyebrow">{t.eyebrow}</p><p className="mt-4 text-sm text-muted">{t.sampleSmall}</p></div>
      </div>
    </GuideSection>

    <GuideSection id="elements" number="03" title={t.components} description={t.componentsDesc}>
      <div className="guide-elements">
        <div className="guide-surface"><p className="guide-spec">BUTTONS / LINKS</p><div className="mt-6 flex flex-wrap gap-3"><a className="button-primary" href="mailto:vinicius.padilha.br@gmail.com">{t.primary}<ArrowUpRight size={18} /></a><a className="button-secondary" href="/#work">{t.secondary}<ArrowRight size={17} /></a></div></div>
        <div className="guide-surface"><p className="guide-spec">BADGES / TAGS</p><div className="mt-6 flex flex-wrap items-center gap-3"><span className="status-badge"><span className="status-pulse" />{t.availability}</span><span className="tag">React</span><span className="tag tag-small">TypeScript</span><span className="value-tag"><span className="text-accent">✳</span> Design Systems</span></div></div>
        <div className="guide-surface"><p className="guide-spec">CARDS / SURFACES</p><article className="stack-card guide-demo-card mt-6"><div className="stack-icon"><Layers3 size={23} strokeWidth={1.6} /></div><h3 className="mt-6 font-display text-xl font-semibold text-main">{t.cardTitle}</h3><p className="mt-3 leading-7 text-muted">{t.cardText}</p><span className="card-index">01</span></article></div>
      </div>
    </GuideSection>

    <GuideSection id="patterns" number="04" title={t.patterns} description={t.patternsDesc}>
      <div className="guide-patterns">
        <article className="guide-pattern"><div className="guide-pattern-preview guide-pattern-dots" /><h3>{t.dots}</h3><p>{t.dotsDetail}</p><code>radial-gradient · 26px × 26px</code></article>
        <article className="guide-pattern"><div className="guide-pattern-preview guide-pattern-glow" /><h3>{t.glow}</h3><p>{t.glowDetail}</p><code>radial-gradient · teal / violet</code></article>
        <article className="guide-pattern"><div className="guide-pattern-preview guide-pattern-space"><span /><span /><span /></div><h3>{t.spacing}</h3><p>{t.spacingDetail}</p><code>max-width: 1180px · section: 112px</code></article>
      </div>
    </GuideSection>

    <GuideSection id="icons" number="05" title={t.icons} description={t.iconsDesc}>
      <div className="guide-icons">{iconSamples.map(([name, Icon]) => <div className="guide-icon" key={name}><Icon size={23} strokeWidth={1.7} /><code>{name}</code></div>)}</div>
    </GuideSection>

    <GuideSection id="principles" number="06" title={t.principles} description={t.principlesDesc}>
      <div className="guide-rules">{t.rules.map((rule, i) => <div className="guide-rule" key={rule}><span className="guide-rule-number">0{i + 1}</span><Check size={18} className="text-accent" aria-hidden="true" /><p>{rule}</p></div>)}</div>
      <p className="mt-10 text-sm leading-7 text-muted">{t.footer}</p>
      <a className="guide-back mt-8" href="/"><ArrowLeft size={17} />{t.back}</a>
    </GuideSection>
  </main>
}
