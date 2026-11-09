import { Link } from 'react-router-dom'
import type { ExplorationProject } from '../data/allProjects'

export function ExplorationCard({ project }: { project: ExplorationProject }) {
  const content = <>
    <div className="exploration-card__cover">
      <img src={project.cover} alt={project.title + '项目封面'} style={{ objectPosition: project.coverPosition }} loading="lazy" decoding="async" />
    </div>
    <div className="exploration-card__meta"><span>{project.type}</span><span>{project.date}</span></div>
    <h3>{project.title}</h3>
    <p className="exploration-card__description">{project.description}</p>
  </>

  return <article className="exploration-card" data-project-id={project.id}>
    {project.detailUrl
      ? <Link className="exploration-card__link" to={project.detailUrl} aria-label={'查看' + project.title}>{content}</Link>
      : <div className="exploration-card__content">{content}</div>}
  </article>
}
