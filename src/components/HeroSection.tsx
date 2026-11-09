import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { homeProjects } from '../data/homeProjects'
import { HeroProjectPreview } from './HeroProjectPreview'
import { inHeroHoverRegion } from './heroHoverRegion'
import '../hero-hover.css'

export function HeroSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const activeRef = useRef<string | null>(null)
  const heroRef = useRef<HTMLElement>(null)
  const entryRefs = useRef<Record<string, HTMLAnchorElement | null>>({})
  const openTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const touchInput = useRef(false)
  const pointerRegion = useRef<EventTarget | null>(null)
  const clearTimers = () => {
    clearTimeout(openTimer.current); clearTimeout(closeTimer.current)
    openTimer.current = undefined; closeTimer.current = undefined
  }
  const activate = (id: string | null) => { activeRef.current = id; setActiveProject(id) }
  const close = () => { clearTimers(); pointerRegion.current = null; activate(null) }
  const enter = (id: string, region: EventTarget) => {
    clearTimers()
    pointerRegion.current = region
    // Switching an existing focus never goes through the default state.
    if (activeRef.current) activate(id)
    else openTimer.current = setTimeout(() => {
      if (pointerRegion.current === region && !document.hidden) activate(id)
    }, 100)
  }
  const leave = () => {
    clearTimeout(openTimer.current)
    openTimer.current = undefined
    if (!closeTimer.current) closeTimer.current = setTimeout(() => { closeTimer.current = undefined; close() }, 120)
  }
  useEffect(() => {
    let pointer: { x: number; y: number } | null = null
    let scrollFrame = 0
    const insidePreview = () => {
      const id = activeRef.current
      const entry = id ? entryRefs.current[id] : null
      const preview = id ? document.getElementById(`${id}-hero-preview`) : null
      return Boolean(pointer && entry && preview && inHeroHoverRegion(entry, preview, pointer))
    }
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      if (pointer?.x === event.clientX && pointer.y === event.clientY) return
      pointer = { x: event.clientX, y: event.clientY }
      touchInput.current = false
      const hit = document.elementFromPoint(pointer.x, pointer.y)
      const entry = hit?.closest<HTMLAnchorElement>('.hero-project__link')
      if (entry && heroRef.current?.contains(entry)) {
        const id = entry.dataset.heroRegion!
        if (pointerRegion.current !== entry || activeRef.current) enter(id, entry)
      } else if (activeRef.current && insidePreview()) {
        clearTimers()
      } else {
        pointerRegion.current = null
        leave()
      }
    }
    const checkScroll = () => {
      scrollFrame = 0
      clearTimeout(openTimer.current)
      openTimer.current = undefined
      pointerRegion.current = null
      const rect = heroRef.current?.getBoundingClientRect()
      if (!rect || rect.bottom <= 0 || rect.top >= innerHeight) { close(); return }
      if (!activeRef.current) return
      if (pointer && !touchInput.current) {
        if (insidePreview()) clearTimers()
        else leave()
      }
    }
    const scheduleScroll = () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(checkScroll) }
    const dismiss = (event: PointerEvent) => {
      if (event.pointerType === 'mouse' && insidePreview()) return
      if (!(event.target instanceof Element) || !event.target.closest('[data-hero-region]')) close()
    }
    // Touch emits pointerout after every tap; it is not a viewport exit.
    const leaveViewport = (event: PointerEvent) => { if (event.pointerType === 'mouse' && !event.relatedTarget) close() }
    const hide = () => { if (document.hidden) close() }
    document.addEventListener('pointerdown', dismiss)
    document.addEventListener('pointermove', move)
    window.addEventListener('scroll', scheduleScroll, { passive: true })
    window.addEventListener('resize', scheduleScroll)
    document.addEventListener('pointerout', leaveViewport)
    document.addEventListener('pointercancel', close)
    document.addEventListener('visibilitychange', hide)
    window.addEventListener('blur', close)
    return () => {
      clearTimers()
      cancelAnimationFrame(scrollFrame)
      document.removeEventListener('pointermove', move)
      window.removeEventListener('scroll', scheduleScroll)
      window.removeEventListener('resize', scheduleScroll)
      document.removeEventListener('pointerdown', dismiss)
      document.removeEventListener('pointerout', leaveViewport)
      document.removeEventListener('pointercancel', close)
      document.removeEventListener('visibilitychange', hide)
      window.removeEventListener('blur', close)
    }
  }, [])
  const regionEvents = (id: string) => ({
    onFocus: (event: React.FocusEvent) => {
      if (event.target.matches(':focus-visible')) { clearTimers(); activate(id) }
    },
    onBlur: (event: React.FocusEvent) => {
      if (!(event.relatedTarget instanceof Element) || !event.relatedTarget.closest('[data-hero-region]')) leave()
    },
  })
  return <section ref={heroRef} id="home" className="universe-hero" aria-labelledby="hero-heading" data-active-project={activeProject ?? undefined}
    onKeyDown={event => {
      touchInput.current = false
      if (event.key === 'Escape') { event.preventDefault(); if (activeRef.current) entryRefs.current[activeRef.current]?.focus(); close() }
    }}>
    <div className="hero-projects" aria-label="精选作品入口">
      {homeProjects.map((project, index) => <div className="hero-project" key={project.id} data-project={project.id} data-active={activeProject === project.id}
        style={{ '--project-index': index } as CSSProperties}>
        <Link ref={node => { entryRefs.current[project.id] = node }} className="hero-project__link" to={project.href} aria-label={project.title}
          data-hero-region={project.id} {...regionEvents(project.id)}
          aria-expanded={activeProject === project.id}
          aria-controls={`${project.id}-hero-preview`}
          onPointerDown={event => { touchInput.current = event.pointerType === 'touch' }}
          onClick={event => {
            if (touchInput.current || matchMedia('(hover: none)').matches) {
              event.preventDefault(); clearTimers(); activate(activeRef.current === project.id ? null : project.id)
            }
          }}>
          <img className="hero-project__icon" src={project.icon} width="84" height="84" alt="" />
          <span>{project.heroLabel}</span>
        </Link>
        <HeroProjectPreview project={project} active={activeProject === project.id} onClose={close} regionEvents={regionEvents(project.id)} />
      </div>)}
    </div>
    <div className="universe-hero__copy">
      <h1 id="hero-heading">Glad to see you in my little universe</h1>
      <p>我是叶书伶，一名交互设计师。喜欢有趣的尝试，探索未被定义的可能，让设计自由生长，不囿于既定的边界。</p>
    </div>
  </section>
}
