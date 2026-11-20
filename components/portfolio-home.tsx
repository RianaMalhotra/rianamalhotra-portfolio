'use client'

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Radio,
  Wind,
} from 'lucide-react'
import { ProjectBrowser } from '@/components/project-browser'

const experiences = [
  {
    company: 'Trimble',
    role: 'Embedded Software & Test Automation Engineer',
    dates: 'May 2026 — Present',
    detail:
      'Building firmware flashing, device setup, and regression tooling for GNSS/INS systems. Automated production workflows to reduce programming time by about 20%.',
    tags: ['Python', 'C++', 'C#', 'QNX / Linux', 'CAN / UART'],
    current: true,
  },
  {
    company: 'Trimble',
    role: 'Embedded Systems Engineer',
    dates: 'May 2025 — Aug 2025',
    detail:
      'Supported embedded firmware deployment and hardware validation, working close to bootloaders, flash memory, and system-level debugging.',
    tags: ['C++', 'Python', 'QNX', 'Firmware'],
  },
  {
    company: 'University of Toronto Aerospace Team',
    role: 'Embedded Hardware & Firmware Engineer — Avionics',
    dates: 'Sep 2023 — Aug 2025',
    detail:
      'Developed flight software for STM32 and AVR systems, integrating sensors, telemetry, and onboard data logging for rocket avionics.',
    tags: ['C / C++', 'STM32', 'I²C', 'UART', 'Telemetry'],
  },
  {
    company: 'University of Toronto Robotics Association',
    role: 'Autonomous Systems & Controls Engineer',
    dates: 'Jan 2024 — Dec 2024',
    detail:
      'Built rover navigation software and tuned closed-loop motion with PID control, sensor calibration, and trajectory tracking.',
    tags: ['C++', 'Python', 'ROS', 'Controls'],
  },
]

const toolkits = [
  {
    number: '01',
    title: 'Embedded systems',
    summary: 'Firmware, device bring-up, and reliable hardware-software integration.',
    items: ['C / C++', 'Python', 'QNX / Linux', 'STM32', 'Arduino', 'CAN · UART · I²C'],
    icon: Radio,
  },
  {
    number: '02',
    title: 'Digital design & verification',
    summary: 'RTL design, simulation, and verification automation.',
    items: ['SystemVerilog', 'Verilog', 'cocotb', 'Verilator', 'Vivado', 'Quartus'],
    icon: Cpu,
  },
  {
    number: '03',
    title: 'Software & data',
    summary: 'Tools that make systems easier to test, understand, and use.',
    items: ['TypeScript', 'JavaScript', 'SQL', 'ROS', 'GitHub Actions', 'GIS'],
    icon: ArrowRight,
  },
  {
    number: '04',
    title: 'Aviation & design',
    summary: 'A pilot’s perspective on instruments, interfaces, and real-world constraints.',
    items: ['Student pilot', 'Flight training', 'CAD', 'Inclusive design', 'Prototyping'],
    icon: Wind,
  },
]

export function PortfolioHome() {
  return (
    <main>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <header className="site-header">
          <a className="wordmark" href="#home" aria-label="Riana Malhotra home">
            <span className="wordmark-symbol">RM</span>
            <span>Riana Malhotra</span>
          </a>
          <nav className="main-nav" aria-label="Main navigation">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#toolkit">Toolkit</a>
            <a className="nav-contact" href="#contact">
              Let&apos;s connect <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>
        </header>

        <div className="hero-content page-width">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span>Computer Engineering</span>
              <span className="eyebrow-divider" aria-hidden="true" />
              University of Toronto
            </p>
            <h1 id="hero-title">
              I build systems
              <br />
              for the real world.
            </h1>
            <p className="hero-description">
              Embedded software, digital design, and autonomous machines — from the
              first signal to the final test.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#projects">
                Explore my work <ArrowDown aria-hidden="true" />
              </a>
              <a
                className="button button-quiet"
                href="https://github.com/RianaMalhotra"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <aside className="hero-note" aria-label="Current roles">
            <span className="status-dot" />
            <span>Trimble · Embedded systems</span>
            <span className="hero-note-separator">/</span>
            <span>Incoming SoC DFX / DV intern at AMD</span>
          </aside>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span>Scroll to explore</span>
          <span className="hero-scroll-line" />
        </div>
      </section>

      <div className="signal-strip" aria-label="Areas of work">
        <div className="signal-track" aria-hidden="true">
          <span>Embedded systems</span><i />
          <span>FPGA & RTL</span><i />
          <span>Robotics</span><i />
          <span>Aviation</span><i />
          <span>Test automation</span><i />
          <span>Embedded systems</span><i />
          <span>FPGA & RTL</span><i />
          <span>Robotics</span><i />
          <span>Aviation</span><i />
          <span>Test automation</span><i />
        </div>
      </div>

      <section className="section projects-section" id="projects" aria-labelledby="projects-title">
        <div className="page-width">
          <div className="section-heading projects-heading">
            <div>
              <p className="eyebrow section-eyebrow"><span>Selected work</span><span className="eyebrow-divider" /> 2023 — 2026</p>
              <h2 id="projects-title">Built to work.<br /><span>Made to matter.</span></h2>
            </div>
            <p className="section-intro">
              A growing collection of hardware, software, and systems projects —
              shaped by curiosity and tested in the real world.
            </p>
          </div>
          <ProjectBrowser />
        </div>
      </section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="page-width experience-layout">
          <div className="experience-intro">
            <p className="eyebrow section-eyebrow"><span>Where I&apos;ve been</span><span className="eyebrow-divider" /> Experience</p>
            <h2 id="experience-title">Engineering,<br /><span>in the field.</span></h2>
            <p>
              I like working close to the hardware — and alongside the teams who
              depend on it.
            </p>
            <a className="text-link" href="https://www.linkedin.com/in/riana-malhotra/" target="_blank" rel="noreferrer">
              More on LinkedIn <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-item" key={`${experience.company}-${experience.role}`}>
                <div className="experience-marker" aria-hidden="true"><span /></div>
                <div className="experience-main">
                  <div className="experience-meta">
                    <span>{experience.company}</span>
                    <span>{experience.dates}</span>
                  </div>
                  <h3>{experience.role}</h3>
                  <p>{experience.detail}</p>
                  <ul className="tag-list" aria-label="Technologies">
                    {experience.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
                {experience.current && <span className="current-badge"><span className="status-dot" /> Current</span>}
              </article>
            ))}
            <article className="experience-item experience-next">
              <div className="experience-marker" aria-hidden="true"><span /></div>
              <div className="experience-main">
                <div className="experience-meta"><span>AMD</span><span>Incoming · 2027</span></div>
                <h3>SoC DFX / Design Verification Intern</h3>
                <p>Looking forward to exploring design-for-test and verification at the silicon level.</p>
                <ul className="tag-list" aria-label="Focus areas"><li>Semiconductors</li><li>SoC</li><li>Verification</li></ul>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section toolkit-section" id="toolkit" aria-labelledby="toolkit-title">
        <div className="page-width">
          <div className="section-heading toolkit-heading">
            <div>
              <p className="eyebrow section-eyebrow"><span>How I work</span><span className="eyebrow-divider" /> Engineering toolkit</p>
              <h2 id="toolkit-title">Curious at every<br /><span>layer of the stack.</span></h2>
            </div>
            <p className="section-intro">
              I enjoy the details: the interface between a sensor and its firmware,
              a test and its signal, an idea and its first prototype.
            </p>
          </div>
          <div className="toolkit-grid">
            {toolkits.map((toolkit) => {
              const Icon = toolkit.icon
              return (
                <article className="toolkit-card" key={toolkit.number}>
                  <div className="toolkit-card-top">
                    <span className="toolkit-number">{toolkit.number}</span>
                    <Icon aria-hidden="true" />
                  </div>
                  <h3>{toolkit.title}</h3>
                  <p>{toolkit.summary}</p>
                  <ul className="toolkit-list">
                    {toolkit.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              )
            })}
          </div>
          <div className="side-notes">
            <div className="side-note-icon"><Wind aria-hidden="true" /></div>
            <p><strong>Beyond engineering:</strong> student pilot, president of the U of T Aviation Club, and host of Riana&apos;s Lens — a podcast celebrating women in STEM.</p>
            <span>Always learning</span>
          </div>
        </div>
      </section>

      <footer className="site-footer" id="contact">
        <div className="page-width">
          <p className="eyebrow footer-eyebrow"><span>Have a project in mind?</span><span className="eyebrow-divider" /> Toronto, Canada</p>
          <div className="footer-main">
            <h2>Let&apos;s make<br /><span>something real.</span></h2>
            <a className="footer-cta" href="https://www.linkedin.com/in/riana-malhotra/" target="_blank" rel="noreferrer">
              Say hello on LinkedIn <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="footer-bottom">
            <a className="wordmark footer-wordmark" href="#home">
              <span className="wordmark-symbol">RM</span><span>Riana Malhotra</span>
            </a>
            <p>Computer Engineering · University of Toronto</p>
            <div className="social-links">
              <a href="https://github.com/RianaMalhotra" target="_blank" rel="noreferrer" aria-label="GitHub profile">GH</a>
              <a href="https://www.linkedin.com/in/riana-malhotra/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">in</a>
            </div>
            <span className="footer-credit">Designed for curiosity <span aria-hidden="true">·</span> 2026</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
