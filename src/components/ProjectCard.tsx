import { Icon } from './Icon'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { ProjectArtwork } from './ProjectArtwork'

export function ProjectCard({ project, featured = false, index = 0 }: { project: Project; featured?: boolean; index?: number }) {
  return <Link to={`/projects/${project.slug}`} className={`project-card ${featured ? `featured-card orbit-position-${index}` : 'feed-card'}`} aria-label={`查看${project.title}：${project.summary}`}>
    <ProjectArtwork project={project} />
    <div className="card-info"><div className="card-meta"><span>{project.category}</span><span>{project.year === '待补充' ? '年份待补充' : project.year}</span></div><div className="card-title-row"><h3>{project.title}</h3><span className="card-arrow" aria-hidden="true"><Icon name="right" /></span></div><p>{project.summary}</p></div>
  </Link>
}
