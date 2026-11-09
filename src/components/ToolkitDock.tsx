import { useCallback, useEffect, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { aboutToolkit } from '../data/aboutToolkit'

const resting = () => aboutToolkit.map(() => 1)

// Smooth interpolation through the requested 1.4 / 1.2 / 1.08 / 1 proximity levels.
function proximityScale(distance: number) {
  const levels = [1.4, 1.2, 1.08, 1]
  const step = Math.min(Math.floor(distance), 3)
  if (step === 3) return 1
  const t = distance - step
  const eased = t * t * (3 - 2 * t)
  return levels[step] + (levels[step + 1] - levels[step]) * eased
}

export function ToolkitDock() {
  const row = useRef<HTMLDivElement>(null)
  const buttons = useRef<(HTMLButtonElement | null)[]>([])
  const scales = useRef(resting())
  const targets = useRef(resting())
  const frame = useRef(0)
  const lastTime = useRef(0)
  const magnification = useRef(false)
  const dimensions = useRef({ size: 48, gap: 12 })
  const [active, setActive] = useState<number | null>(null)

  const paint = useCallback(() => {
    const { size } = dimensions.current
    const totalGrowth = scales.current.reduce((sum, scale) => sum + size * (scale - 1), 0)
    let precedingGrowth = 0
    scales.current.forEach((scale, index) => {
      const growth = size * (scale - 1)
      // Reserve the actual scaled width on both sides; transformed icons never overlap.
      const shift = precedingGrowth + growth / 2 - totalGrowth / 2
      const button = buttons.current[index]
      button?.style.setProperty('--dock-shift', shift + 'px')
      button?.style.setProperty('--dock-scale', String(scale))
      button?.style.setProperty('--dock-rise', growth + 'px')
      precedingGrowth += growth
    })
  }, [])

  const animateTo = useCallback((next: number[]) => {
    targets.current = next
    if (!magnification.current) {
      cancelAnimationFrame(frame.current)
      frame.current = 0
      scales.current = resting()
      paint()
      return
    }
    if (frame.current) return
    lastTime.current = performance.now()
    const tick = (time: number) => {
      const dt = Math.min(time - lastTime.current, 32)
      lastTime.current = time
      // ~220ms to settle, independent of monitor refresh rate.
      const blend = 1 - Math.exp(-dt / 55)
      let moving = false
      scales.current = scales.current.map((scale, index) => {
        const difference = targets.current[index] - scale
        if (Math.abs(difference) < 0.0005) return targets.current[index]
        moving = true
        return scale + difference * blend
      })
      paint()
      frame.current = moving ? requestAnimationFrame(tick) : 0
    }
    frame.current = requestAnimationFrame(tick)
  }, [paint])

  useEffect(() => {
    const desktop = matchMedia('(min-width: 640px) and (hover: hover) and (pointer: fine)')
    const reduced = matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      magnification.current = desktop.matches && !reduced.matches
      if (row.current) {
        const style = getComputedStyle(row.current)
        dimensions.current = { size: parseFloat(style.getPropertyValue('--dock-size')), gap: parseFloat(style.columnGap) }
      }
      animateTo(resting())
    }
    update()
    desktop.addEventListener('change', update)
    reduced.addEventListener('change', update)
    return () => {
      cancelAnimationFrame(frame.current)
      frame.current = 0
      desktop.removeEventListener('change', update)
      reduced.removeEventListener('change', update)
    }
  }, [animateTo])

  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !row.current) return
    const x = event.clientX - row.current.getBoundingClientRect().left
    const { size, gap } = dimensions.current
    // Measure against stable resting centers, never the animated bounding boxes.
    animateTo(aboutToolkit.map((_, i) => proximityScale(Math.abs(x - (i * (size + gap) + size / 2)) / (size + gap))))
    let nearest = 0
    let distance = Infinity
    buttons.current.forEach((button, index) => {
      if (!button) return
      const rect = button.getBoundingClientRect()
      const next = Math.abs(event.clientX - (rect.left + rect.width / 2))
      if (next < distance) { nearest = index; distance = next }
    })
    setActive(nearest)
  }
  const reset = () => { setActive(null); animateTo(resting()) }

  return <div className="toolkit-dock" onPointerLeave={reset}>
    <div ref={row} className="toolkit-dock__row" role="group" aria-label="My toolkit" onPointerMove={move}
      onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) reset() }}>
      {aboutToolkit.map((tool, index) => <button key={tool.src} ref={element => { buttons.current[index] = element }}
        type="button" className="toolkit-dock__item" aria-label={tool.name}
        aria-describedby={active === index ? 'toolkit-tip-' + index : undefined}
        onFocus={() => { setActive(index); animateTo(aboutToolkit.map((_, i) => proximityScale(Math.abs(i - index)))) }}
        onKeyDown={event => {
          if (event.key === 'Escape') reset()
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault()
            const direction = event.key === 'ArrowRight' ? 1 : -1
            buttons.current[(index + direction + aboutToolkit.length) % aboutToolkit.length]?.focus()
          }
        }}>
        <img src={tool.src} alt="" width="48" height="48" draggable="false" loading="lazy" />
        <span id={'toolkit-tip-' + index} role="tooltip" className={'toolkit-dock__tooltip' + (active === index ? ' is-visible' : '')} aria-hidden={active !== index}>{tool.name}</span>
      </button>)}
    </div>
  </div>
}
