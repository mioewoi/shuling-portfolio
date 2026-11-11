import { useEffect, useRef, useState } from 'react'
import { aboutLifeImages } from '../data/aboutLifeImages'

export function AboutLifeCarousel() {
  const [active, setActive] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const resetTimer = useRef<() => void>(() => {})
  useEffect(() => {
    const container = containerRef.current!
    const motion = matchMedia('(prefers-reduced-motion: reduce)')
    let hovered = container.matches(':hover') && matchMedia('(hover: hover)').matches
    let timer: ReturnType<typeof setTimeout> | undefined
    let remaining = 4000
    let deadline = 0
    const stop = () => { clearTimeout(timer); timer = undefined }
    const schedule = () => {
      stop()
      if (hovered || document.hidden || motion.matches) return
      deadline = performance.now() + remaining
      timer = setTimeout(() => {
        timer = undefined
        if (hovered || document.hidden || motion.matches) return
        setActive(index => (index + 1) % aboutLifeImages.length)
        remaining = 4000
        schedule()
      }, remaining)
    }
    const reset = () => { remaining = 4000; schedule() }
    const enter = () => {
      if (!matchMedia('(hover: hover)').matches) return
      hovered = true; stop(); remaining = 4000
    }
    const leave = () => { hovered = false; reset() }
    const visibility = () => {
      if (document.hidden) {
        if (timer !== undefined) remaining = Math.max(0, deadline - performance.now())
        stop()
      } else schedule()
    }
    resetTimer.current = reset
    container.addEventListener('mouseenter', enter)
    container.addEventListener('mouseleave', leave)
    document.addEventListener('visibilitychange', visibility)
    motion.addEventListener('change', reset)
    schedule()
    return () => {
      stop()
      resetTimer.current = () => {}
      container.removeEventListener('mouseenter', enter)
      container.removeEventListener('mouseleave', leave)
      document.removeEventListener('visibilitychange', visibility)
      motion.removeEventListener('change', reset)
    }
  }, [])
  const gesture = useRef<{ x: number; y: number } | null>(null)
  const select = (index: number) => {
    setActive((index + aboutLifeImages.length) % aboutLifeImages.length)
    resetTimer.current()
  }
  return <div ref={containerRef} className="about-life__dog about-life-carousel" role="region" aria-roledescription="轮播" aria-label="工作之余生活照片"
    tabIndex={0}
    onKeyDown={event => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        event.preventDefault(); select(active + (event.key === 'ArrowLeft' ? -1 : 1))
      }
    }}
    onTouchStart={event => { const touch = event.touches[0]; gesture.current = { x: touch.clientX, y: touch.clientY } }}
    onTouchCancel={() => { gesture.current = null }}
    onTouchEnd={event => {
      const start = gesture.current; gesture.current = null
      if (!start) return
      const touch = event.changedTouches[0], dx = touch.clientX - start.x, dy = touch.clientY - start.y
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) select(active + (dx < 0 ? 1 : -1))
    }}>
    {aboutLifeImages.map((image, index) => <img key={image.src} src={image.src} alt={image.alt}
      className={`about-life-carousel__image${active === index ? ' is-active' : ''}`}
      aria-hidden={active !== index} loading="lazy" decoding="async" draggable={false} />)}
    <button type="button" className="about-life-carousel__arrow about-life-carousel__arrow--previous" aria-label="上一张照片" onClick={() => select(active - 1)}>‹</button>
    <button type="button" className="about-life-carousel__arrow about-life-carousel__arrow--next" aria-label="下一张照片" onClick={() => select(active + 1)}>›</button>
    <div className="about-life-carousel__dots" aria-label="选择照片">
      {aboutLifeImages.map((image, index) => <button type="button" key={image.src} aria-label={`查看第 ${index + 1} 张照片`}
        aria-current={active === index ? 'true' : undefined} onClick={() => select(index)}><span /></button>)}
    </div>
    <span className="sr-only" aria-live="off" aria-atomic="true">第 {active + 1} 张，共 {aboutLifeImages.length} 张</span>
  </div>
}
