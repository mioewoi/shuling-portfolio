import { useState } from 'react'
import { allProjects, categories, type Category } from '../data/allProjects'
import { ExplorationCard } from './ExplorationCard'

export function ProjectFeedSection() {
  const [filter, setFilter] = useState<Category | '全部'>('全部')
  const shown = allProjects.filter(project => filter === '全部' || project.category === filter)

  return <section id="all-projects" className="all-projects" aria-labelledby="feed-heading">
    <div className="all-projects__container">
      <header className="all-projects__heading">
        <div><p className="all-projects__eyebrow">02 / MORE EXPLORATIONS</p><h2 id="feed-heading">全部作品</h2></div>
        <p className="all-projects__note">每一次尝试，都在拓展边界。</p>
      </header>
      <div className="all-projects__filters" role="group" aria-label="按项目类别筛选">
        {(['全部', ...categories] as const).map(category => <button
          key={category} type="button" aria-pressed={filter === category}
          aria-controls="all-projects-grid" onClick={() => setFilter(category)}
        >{category}<span>{category === '全部' ? allProjects.length : allProjects.filter(project => project.category === category).length}</span></button>)}
      </div>
      <p className="sr-only" role="status" aria-live="polite">{filter}，显示 {shown.length} 个项目</p>
      <div id="all-projects-grid" className="all-projects__grid" key={filter}>
        {shown.map(project => <ExplorationCard key={project.id} project={project} />)}
      </div>
    </div>
  </section>
}
