'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, ExternalLink, Search } from 'lucide-react'
import { projectCategories, projects, type Project } from '@/lib/projects'

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="project-links">
      {project.live && (
        <a href={project.live} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>
          Live demo <ExternalLink aria-hidden="true" />
        </a>
      )}
      {project.github && (
        <a href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}>
          Source <ArrowUpRight aria-hidden="true" />
        </a>
      )}
      {!project.github && project.source && <span className="source-note">Listed on LinkedIn</span>}
    </div>
  )
}

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className={`featured-card featured-card-${index + 1}`}>
      <div className="featured-card-top">
        <span className="project-category">{project.category}</span>
        <span className="project-index">0{index + 1}</span>
      </div>
      <div className="project-emblem" aria-hidden="true">
        <span className="emblem-orbit emblem-orbit-one" />
        <span className="emblem-orbit emblem-orbit-two" />
        <span className="emblem-center">{project.title.charAt(0)}</span>
        <span className="emblem-pulse" />
      </div>
      <div className="featured-card-copy">
        <p className="project-highlight">{project.highlight}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <ul className="project-stack" aria-label="Technology stack">
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
      <ProjectLinks project={project} />
    </article>
  )
}

function ArchiveCard({ project }: { project: Project }) {
  return (
    <article className="archive-card">
      <div className="archive-card-meta">
        <span className="project-category">{project.category}</span>
        {project.source && <span className="source-tag">{project.source}</span>}
      </div>
      <h3>{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="project-stack" aria-label="Technology stack">
        {project.stack.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <ProjectLinks project={project} />
    </article>
  )
}

export function ProjectBrowser() {
  const [activeCategory, setActiveCategory] = useState('All work')
  const [query, setQuery] = useState('')
  const featured = projects.filter((project) => project.featured)
  const normalizedQuery = query.trim().toLowerCase()
  const visibleProjects = useMemo(() => projects.filter((project) => {
    const matchesCategory = activeCategory === 'All work' || project.category === activeCategory
    const searchable = [project.title, project.category, project.description, ...project.stack].join(' ').toLowerCase()
    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery))
  }), [activeCategory, normalizedQuery])

  return (
    <>
      <div className="featured-grid">
        {featured.map((project, index) => (
          <FeaturedProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
      <div className="archive-heading" id="project-archive">
        <div>
          <p className="eyebrow section-eyebrow"><span>Project archive</span><span className="eyebrow-divider" /> All the side quests, too</p>
          <h3>Every build,<br /><span>in one place.</span></h3>
        </div>
        <p>From tiny C programs to full-stack systems and hardware prototypes. Search by project, tool, or discipline.</p>
      </div>
      <div className="archive-toolbar">
        <div className="project-filters" role="group" aria-label="Filter projects by category">
          {['All work', ...projectCategories].map((category) => (
            <button
              className={`filter-button${activeCategory === category ? ' is-active' : ''}`}
              type="button"
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category === 'All work' ? `${category} · ${projects.length}` : category}
            </button>
          ))}
        </div>
        <label className="project-search">
          <Search aria-hidden="true" />
          <span className="sr-only">Search projects</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search projects or tools"
          />
          <kbd>/</kbd>
        </label>
      </div>
      <p className="archive-count" aria-live="polite">
        Showing <strong>{visibleProjects.length}</strong> of {projects.length} projects
      </p>
      {visibleProjects.length > 0 ? (
        <div className="archive-grid">
          {visibleProjects.map((project) => <ArchiveCard key={project.title} project={project} />)}
        </div>
      ) : (
        <div className="empty-results">
          <p>No projects match that search.</p>
          <button type="button" onClick={() => { setQuery(''); setActiveCategory('All work') }}>Clear filters</button>
        </div>
      )}
    </>
  )
}
