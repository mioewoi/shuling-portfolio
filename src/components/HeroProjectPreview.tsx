import type { CSSProperties, HTMLAttributes } from 'react'
import { Link } from 'react-router-dom'
import type { HomeProject } from '../data/homeProjects'
import { heroPreviews } from '../data/heroPreviews'

const asset = '/hero-hover/previews/LuxReal互动影游导演台/'

export function HeroProjectPreview({ project, active, onClose, regionEvents }: {
  project: HomeProject
  active: boolean
  onClose: () => void
  regionEvents: HTMLAttributes<HTMLElement>
}) {
  const preview = heroPreviews[project.id]
  return <div id={`${project.id}-hero-preview`} className="luxreal-hero-preview" data-project={project.id} data-active={active} aria-hidden={!active} inert={!active}>
    <div className="luxreal-hero-preview__visual" aria-hidden="true">
      {project.id === 'luxreal' ? <>
      <div className="luxreal-hero-preview__screen luxreal-hero-preview__screen--back"><img src={`${asset}Layer-01.png?v=20261108-1601`} alt="" /></div>
      <div className="luxreal-hero-preview__screen luxreal-hero-preview__screen--front"><img src={`${asset}Layer-02.png?v=20261108-1601`} alt="" /></div>
      <img className="luxreal-hero-preview__float luxreal-hero-preview__float--users" src={`${asset}Layer-07.svg`} alt="" />
      <img className="luxreal-hero-preview__float luxreal-hero-preview__float--agent" src={`${asset}Layer-06.png`} alt="" />
      <img className="luxreal-hero-preview__float luxreal-hero-preview__float--story" src={`${asset}Layer-05.svg`} alt="" />
      <img className="luxreal-hero-preview__float luxreal-hero-preview__float--branch" src={`${asset}Layer-04.svg`} alt="" />
      <img className="luxreal-hero-preview__float luxreal-hero-preview__float--flow" src={`${asset}Layer-03.svg`} alt="" />
      </> : <div className="hero-preview__composition">
        {preview.layers?.map((layer, index) => <div key={layer.file} className={`hero-preview__layer hero-preview__layer--${layer.className}`}
          style={{ '--float-delay': `${80 + index * 50}ms` } as CSSProperties}>
          <img src={`/hero-hover/previews/${preview.folder}/${layer.file}${layer.revision ? `?v=${layer.revision}` : ''}`} alt="" decoding="async" />
        </div>)}
      </div>}
    </div>
    <div className="luxreal-hero-preview__information">
      <Link className="luxreal-hero-preview__logo" to={project.href} aria-label={`打开 ${preview.title} 详情`} data-hero-region={project.id} {...regionEvents}><img src={project.icon} width="60" height="60" alt="" /></Link>
      <h2>{preview.title}</h2>
      <p>{preview.description}</p>
      <Link className="luxreal-hero-preview__details" to={project.href} data-hero-region={project.id} {...regionEvents}>查看详情 <span aria-hidden="true">→</span></Link>
      <button className="luxreal-hero-preview__close" type="button" data-hero-region={project.id} {...regionEvents} onClick={onClose}>收起预览</button>
    </div>
  </div>
}
