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

/** LuxReal mobile demo only: load on entry and leave native playback controls available. */
export function DetailVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [autoplayEnabled] = useState(() =>
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    // Restore the source when React checks effect cleanup in development StrictMode.
    if (!video.getAttribute('src')) video.src = '/videos/projects/luxreal-mobile/interaction-demo.mp4'
    video.muted = true
    if (autoplayEnabled) {
      // One attempt per mount: a blocked request falls back to the native play button.
      void video.play().catch(() => {})
    }
    return () => {
      video.pause()
      video.removeAttribute('src')
      video.load()
    }
  }, [autoplayEnabled])
  return <div className="case-study__demo">
    <video ref={videoRef} width={1080} height={2328} autoPlay={autoplayEnabled} muted loop controls playsInline
      preload="auto" aria-label="LuxReal 移动端交互 Demo"
      src="/videos/projects/luxreal-mobile/interaction-demo.mp4"
      onError={() => setFailed(true)}>
      你的浏览器不支持视频播放。
    </video>
    {failed && <p className="case-study__media-error">视频暂时无法播放，请刷新后重试。</p>}
  </div>
}
