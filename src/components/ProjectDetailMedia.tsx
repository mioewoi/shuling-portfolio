import { useEffect, useRef, useState } from 'react'
import type { DetailMedia } from '../data/extendedProjectMedia'

/** Each source page remains intact; never crop a case-study page. */
export function DetailImage({ image, title, eager = false, className = '' }: {
  image: DetailMedia; title: string; eager?: boolean; className?: string
}) {
  return <figure className={`case-study__page ${className}`} data-source-page={image.page}>
    <img src={image.src}
      srcSet={image.previewWidth < image.width ? `${image.preview} ${image.previewWidth}w, ${image.src} ${image.width}w` : undefined}
      sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 900px) calc(100vw - 48px), 852px"
      width={image.width} height={image.height} alt={title}
      loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'auto'} decoding="async" />
  </figure>
}

export function DetailImageSequence({ images, title, eager = false }: {
  images: DetailMedia[]; title: string; eager?: boolean
}) {
  return <div className="case-study__pages">{images.map((image, index) =>
    <DetailImage key={image.src} image={image} title={`${title} · 原始第 ${image.page} 页`} eager={eager && index === 0} />
  )}</div>
}

/** Figma iPhone 17 - 1: fixed 402 × 874 viewport, uniformly scaled only on narrow screens. */
export function LuxRealMobileDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const observer = new ResizeObserver(([entry]) => {
      setScale(Math.min(1, entry.contentRect.width / 402))
    })
    observer.observe(container)
    return () => observer.disconnect()
  }, [])
  return <div ref={containerRef} className="case-study__mobile-demo" style={{ borderRadius: 30 * scale }}>
    <iframe title="LuxReal 移动端交互 Demo" width={402} height={874}
      src="https://mioewoi.github.io/LuxReal-/"
      sandbox="allow-scripts allow-same-origin allow-forms"
      style={{ transform: `scale(${scale})` }} />
  </div>
}
