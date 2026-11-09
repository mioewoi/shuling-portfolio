import type { Project } from '../data/projects'

export function ProjectArtwork({ project, large = false }: { project: Project; large?: boolean }) {
  if (project.cover) return <div className={`project-artwork ${large ? 'artwork-large' : ''}`}><img src={project.cover} alt={`${project.title}项目封面`} loading="lazy" decoding="async" /></div>
  return <div className={`project-artwork artwork-${project.artwork} ${large ? 'artwork-large' : ''}`} aria-label={`${project.title}封面占位图`} role="img">
    {/* 仅为抽象的构图占位，不代表真实项目界面；替换 projects.ts 的 cover 后自动显示图片。 */}
    <span className="artwork-coordinate" aria-hidden="true">{project.id} / EXPLORATION</span>
    <div className="artwork-shape" aria-hidden="true"><span /><span /><span /></div>
    <span className="artwork-caption" aria-hidden="true">{project.artwork === 'director' ? 'L / EXPERIENCE' : project.artwork === 'mobile' ? 'M / INTERACTION' : project.artwork === 'visual' ? 'V / EXPRESSION' : 'S / EXPLORATION'}</span>
    <span className="placeholder-tag" aria-hidden="true">封面占位</span>
  </div>
}
