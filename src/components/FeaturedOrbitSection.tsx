import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function FeaturedOrbitSection() {
  const featured = projects.filter(p => p.featured)
  return <section id="works" className="featured-section page-shell" aria-labelledby="featured-heading">
    <div className="section-heading"><div><p className="eyebrow">01 / SELECTED WORKS</p><h2 id="featured-heading">不同轨道，同样的好奇心。</h2></div><p className="section-note">产品体验 / 交互逻辑 / 视觉表达<br />{String(featured.length).padStart(2, '0')} 个精选项目，构成我的设计坐标。</p></div>
    <div className="orbit-stage">
      {/* 轨道为静态 SVG。后续增强动效时保留 reduced-motion，并避免滚动劫持。 */}
      <svg className="orbit-lines" viewBox="0 0 1200 720" preserveAspectRatio="none" aria-hidden="true"><g fill="none" stroke="currentColor"><ellipse cx="600" cy="360" rx="580" ry="240" transform="rotate(-13 600 360)" /><ellipse cx="600" cy="360" rx="440" ry="160" transform="rotate(17 600 360)" /><ellipse cx="600" cy="360" rx="310" ry="275" transform="rotate(52 600 360)" /></g><g fill="currentColor"><circle cx="153" cy="540" r="3" /><circle cx="1050" cy="228" r="3" /><circle cx="575" cy="653" r="2" /></g></svg>
      <span className="orbit-center" aria-hidden="true">+<small>MY DESIGN ORBIT</small></span>
      {featured.map((p, i) => <ProjectCard key={p.id} project={p} featured index={i} />)}
    </div>
  </section>
}
