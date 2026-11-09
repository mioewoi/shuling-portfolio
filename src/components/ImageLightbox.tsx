import { useLayoutEffect, useRef, useState, type PointerEvent } from 'react'
import { createPortal } from 'react-dom'
import { Icon } from './Icon'
import './image-lightbox.css'

type Point = { x: number; y: number }
export function ImageLightbox({ src, alt, width, height, tiles, onClose }: {
  src: string; alt: string; width: number; height: number; tiles?: { base: string; size: number }; onClose: () => void
}) {
  const dialog = useRef<HTMLDialogElement>(null)
  const stage = useRef<HTMLDivElement>(null)
  const [viewport, setViewport] = useState({ width: 0, height: 0 })
  const [mode, setMode] = useState<'fit' | 'manual'>('fit')
  const [manualScale, setManualScale] = useState(1)
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)
  const drag = useRef<{ id: number; start: Point; offset: Point } | null>(null)
  // Fit may be below 25% for very large originals; manual zoom remains 25–400%.
  const fit = Math.min(viewport.width / width, viewport.height / height, 1)
  const scale = mode === 'fit' ? fit : manualScale
  const limitX = Math.max(0, (width * scale - viewport.width) / 2)
  const limitY = Math.max(0, (height * scale - viewport.height) / 2)
  const clamp = (point: Point): Point => ({ x: Math.max(-limitX, Math.min(limitX, point.x)), y: Math.max(-limitY, Math.min(limitY, point.y)) })
  const position = clamp(offset)
  const canDrag = limitX > 0 || limitY > 0
  const visibleTiles = []
  if (tiles && mode === 'manual' && scale >= .25) {
    const left = width / 2 - (viewport.width / 2 + position.x) / scale
    const top = height / 2 - (viewport.height / 2 + position.y) / scale
    for (let row = Math.max(0, Math.floor(top / tiles.size)); row < Math.min(Math.ceil(height / tiles.size), Math.ceil((top + viewport.height / scale) / tiles.size)); row++) {
      for (let col = Math.max(0, Math.floor(left / tiles.size)); col < Math.min(Math.ceil(width / tiles.size), Math.ceil((left + viewport.width / scale) / tiles.size)); col++) {
        visibleTiles.push({ col, row, x: col * tiles.size, y: row * tiles.size })
      }
    }
  }

  useLayoutEffect(() => {
    const trigger = document.activeElement as HTMLElement | null
    const root = document.documentElement
    const body = document.body
    const scroll = { x: window.scrollX, y: window.scrollY }
    const previous = { overflow: root.style.overflow, gutter: root.style.scrollbarGutter, position: body.style.position, top: body.style.top, left: body.style.left, width: body.style.width }
    root.style.scrollbarGutter = 'stable'
    root.style.overflow = 'hidden'
    Object.assign(body.style, { position: 'fixed', top: `${-scroll.y}px`, left: `${-scroll.x}px`, width: '100%' })
    dialog.current!.showModal()
    const bounds = stage.current!.getBoundingClientRect()
    setViewport({ width: bounds.width, height: bounds.height })
    const observer = new ResizeObserver(([entry]) => setViewport({ width: entry.contentRect.width, height: entry.contentRect.height }))
    observer.observe(stage.current!)
    return () => {
      observer.disconnect()
      dialog.current?.close()
      root.style.overflow = previous.overflow
      root.style.scrollbarGutter = previous.gutter
      Object.assign(body.style, { position: previous.position, top: previous.top, left: previous.left, width: previous.width })
      window.scrollTo({ ...{ left: scroll.x, top: scroll.y }, behavior: 'instant' })
      if (trigger?.isConnected) trigger.focus({ preventScroll: true })
    }
  }, [])

  const zoom = (next: number) => {
    const value = Math.max(.25, Math.min(4, next))
    const ratio = scale > 0 ? value / scale : 1
    setOffset({ x: position.x * ratio, y: position.y * ratio })
    setManualScale(value)
    setMode('manual')
  }
  const finishDrag = (event: PointerEvent) => {
    if (drag.current?.id !== event.pointerId) return
    drag.current = null
    setDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId)
  }
  return createPortal(<dialog ref={dialog} className="image-lightbox" aria-label={`${alt}：全屏图片预览`}
    onCancel={event => { event.preventDefault(); onClose() }}>
    <button className="image-lightbox__close" type="button" aria-label="关闭图片预览" onClick={onClose} autoFocus><Icon name="close" size={24} /></button>
    <div className="image-lightbox__stage" ref={stage} data-draggable={canDrag} data-dragging={dragging}
      onPointerDown={event => {
        if (event.button !== 0 || !canDrag || drag.current) return
        event.preventDefault()
        drag.current = { id: event.pointerId, start: { x: event.clientX, y: event.clientY }, offset: position }
        event.currentTarget.setPointerCapture(event.pointerId)
        setDragging(true)
      }} onPointerMove={event => {
        const current = drag.current
        if (!current || current.id !== event.pointerId) return
        setOffset(clamp({ x: current.offset.x + event.clientX - current.start.x, y: current.offset.y + event.clientY - current.start.y }))
      }} onPointerUp={finishDrag} onPointerCancel={finishDrag} onLostPointerCapture={() => { drag.current = null; setDragging(false) }}>
      {!loaded && <p role="status">{failed ? '图片加载失败，请关闭后重试。' : '正在加载高清图片…'}</p>}
      <div className="image-lightbox__image" style={{ width: width * scale, height: height * scale, transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))` }}>
        <img src={src} alt={alt} draggable={false} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} style={{ width: '100%', height: '100%', opacity: loaded ? 1 : 0 }} />
        {tiles && visibleTiles.map(tile => <img key={`${tile.col}-${tile.row}`} className="image-lightbox__tile" src={`${tiles.base}/${tile.col}-${tile.row}.webp`} alt="" aria-hidden="true" draggable={false}
          style={{ left: tile.x * scale, top: tile.y * scale, width: Math.min(tiles.size, width - tile.x) * scale, height: Math.min(tiles.size, height - tile.y) * scale }} />)}
      </div>
    </div>
    <div className="image-lightbox__toolbar" role="group" aria-label="图片缩放工具">
      <button type="button" aria-label="缩小" title="缩小" disabled={scale <= .25} onClick={() => zoom(scale - .25)}><Icon name="zoomOut" size={22} /></button>
      <output aria-live="polite" aria-label="当前缩放比例">{Math.round(scale * 100)}%</output>
      <button type="button" aria-label="放大" title="放大" disabled={scale >= 4} onClick={() => zoom(scale + .25)}><Icon name="zoomIn" size={22} /></button>
      <span className="image-lightbox__divider" />
      <button type="button" aria-label="适应页面" title="适应页面" aria-pressed={mode === 'fit'} onClick={() => { setMode('fit'); setOffset({ x: 0, y: 0 }) }}><Icon name="fit" size={22} /><span>适应页面</span></button>
      <button type="button" aria-label="原始尺寸" title="原始尺寸" aria-pressed={mode === 'manual' && scale === 1} onClick={() => zoom(1)}><Icon name="original" size={22} /><span>原始尺寸</span></button>
    </div>
  </dialog>, document.body)
}
