import { useLayoutEffect, useRef, type CSSProperties } from 'react'

// Stable irregular positions across the full page; no per-frame JS or random rerenders.
const stars = Array.from({ length: 64 }, (_, index) => ({
  x: 3 + ((index * 37.719 + Math.sin(index * 2.3) * 11) % 94 + 94) % 94,
  y: 1 + (index + ((index * 13.17) % 1)) / 64 * 98,
  size: index % 3 === 0 ? 8 + Math.floor(index / 3) % 3 : 12 + index * 5 % 7,
  duration: 3 + (index * 17 % 21) / 10,
  delay: -(index * 1.731 % 5),
}))

export function BackgroundStars() {
  const fieldRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const field = fieldRef.current
    const home = field?.closest('.portfolio-home')
    if (!field || !home) return
    const avoidContent = () => {
      const content = Array.from(home.querySelectorAll('.hero-projects, .universe-hero__copy, .all-projects__heading, .all-projects__filters, .exploration-card, .outro-planet, .portfolio-outro__invitation, .portfolio-outro__back'), el => el.getBoundingClientRect())
      const bounds = field.getBoundingClientRect()
      const placements = stars.map((star, index) => {
        let x = bounds.left + bounds.width * star.x / 100
        const y = bounds.top + bounds.height * star.y / 100
        const clearance = star.size / 2 + (bounds.width <= 600 ? 1 : 12)
        const overlaps = () => content.some(rect => x > rect.left - clearance && x < rect.right + clearance && y > rect.top - clearance && y < rect.bottom + clearance)
        // On narrow screens the cards fill the center; use their existing 20px gutters.
        if (bounds.width <= 600 && overlaps()) x = index % 2 ? bounds.right - 10 : bounds.left + 10
        return { x: x - bounds.left, covered: overlaps() }
      })
      // Read layout once, then write; filtering/resizing triggers this, never animation ticks.
      Array.from(field.children).forEach((el, index) => {
        const style = (el as SVGElement).style
        style.left = `${placements[index].x}px`
        style.visibility = placements[index].covered ? 'hidden' : 'visible'
      })
    }
    const observer = new ResizeObserver(avoidContent)
    observer.observe(home)
    home.querySelectorAll('#home, #all-projects, #outro').forEach(el => observer.observe(el))
    avoidContent()
    return () => observer.disconnect()
  }, [])

  return <div ref={fieldRef} className="home-starfield" aria-hidden="true">
    {stars.map((star, index) => <svg key={index} className="home-starfield__star"
      viewBox="0 0 24 24" fill="currentColor" focusable="false" style={{
        left: `${star.x}%`, top: `${star.y}%`, width: star.size, height: star.size,
        '--star-duration': `${star.duration}s`, '--star-delay': `${star.delay}s`,
      } as CSSProperties}>
      <path d="M12 0 15 9 24 12 15 15 12 24 9 15 0 12 9 9Z" />
    </svg>)}
  </div>
}
