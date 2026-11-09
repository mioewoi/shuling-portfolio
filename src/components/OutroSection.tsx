import { useCallback, useEffect, useId, useRef, useState } from 'react'
import type { PointerEvent } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'

export function OutroSection() {
  const pathId = useId().replace(/:/g, '') + '-connect-orbit'
  const cursorRef = useRef<HTMLSpanElement>(null)
  const pointer = useRef({ x: 0, y: 0 })
  const frame = useRef(0)
  const [cursorVisible, setCursorVisible] = useState(false)

  const positionCursor = useCallback(() => {
    frame.current = 0
    const { x, y } = pointer.current
    // Update only the cursor transform, never React state, on each pointer frame.
    // Keep both lines readable near the right and bottom edges of the viewport.
    const left = Math.max(8, Math.min(x + 16, window.innerWidth - 126))
    const top = Math.max(8, Math.min(y + 14, window.innerHeight - 44))
    if (cursorRef.current) cursorRef.current.style.transform = 'translate3d(' + left + 'px,' + top + 'px,0)'
  }, [])

  const moveCursor = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType !== 'mouse' && event.pointerType !== 'pen') return
    if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (!cursorVisible) setCursorVisible(true)
    pointer.current = { x: event.clientX, y: event.clientY }
    if (!frame.current) frame.current = window.requestAnimationFrame(positionCursor)
  }

  const enterPlanet = (event: PointerEvent<HTMLAnchorElement>) => {
    if (event.pointerType === 'touch' || !matchMedia('(hover: hover) and (pointer: fine)').matches) return
    pointer.current = { x: event.clientX, y: event.clientY }
    positionCursor()
    setCursorVisible(true)
  }

  const leavePlanet = useCallback(() => {
    setCursorVisible(false)
    window.cancelAnimationFrame(frame.current)
    frame.current = 0
  }, [])

  useEffect(() => {
    // Do not leave a custom cursor floating over another section after scrolling or changing tabs.
    window.addEventListener('scroll', leavePlanet, { passive: true })
    window.addEventListener('blur', leavePlanet)
    return () => {
      window.cancelAnimationFrame(frame.current)
      window.removeEventListener('scroll', leavePlanet)
      window.removeEventListener('blur', leavePlanet)
    }
  }, [leavePlanet])

  return <section id="outro" className="portfolio-outro" aria-label="一起创作">
    <Link
      to="/about" className="outro-planet" data-cursor-active={cursorVisible}
      aria-label="了解我：个人介绍、简历与联系方式"
      onPointerEnter={enterPlanet} onPointerMove={moveCursor}
      onPointerLeave={leavePlanet} onPointerCancel={leavePlanet} onClick={leavePlanet}
    >
      {/* Three independent 2D layers: sphere, inclined orbit, then the masked foreground.
          Keep the orbit tilt fixed; only its inner SVG rotates. */}
      <span className="outro-planet__body" aria-hidden="true" />
      <div className="outro-planet__orbit" aria-hidden="true">
        {/* The source uses a 442 × 461 inner frame inside the 532 × 537 tilted mask. */}
        <div className="outro-planet__spin">
          <svg viewBox="0 0 100 100" overflow="visible" focusable="false">
            <defs><path id={pathId} d="M 0 50 A 50 50 0 1 0 100 50 A 50 50 0 1 0 0 50" /></defs>
            <text textLength={Math.PI * 100} lengthAdjust="spacingAndGlyphs">
              <textPath href={'#' + pathId} startOffset="0" dominantBaseline="hanging">
                {"LET'S CONNECT ✦ ".repeat(4)}
              </textPath>
            </text>
          </svg>
        </div>
      </div>
      <span className="outro-planet__foreground" aria-hidden="true" />
    </Link>
    <p className="portfolio-outro__invitation">Let's create something together.</p>
    <button className="portfolio-outro__back" type="button" onClick={() => {
      window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
    }}>
      <svg viewBox="0 0 18 10" width="18" height="10" aria-hidden="true"><path d="M0 10 9 0l9 10Z" fill="currentColor" /></svg>
      <span>Back to Top</span>
    </button>
    {/* A body portal keeps the fixed cursor outside the planet's clipped/3D layers. */}
    {createPortal(<span ref={cursorRef} className="outro-cursor" data-visible={cursorVisible} aria-hidden="true">
      <span>CLICK TO</span><span>CONTACT ME!</span>
    </span>, document.body)}
  </section>
}
