import { useEffect, useRef, useState } from 'react'
import { LuxRealMobileDemo } from './ProjectDetailMedia'
import { caseOverviews } from '../data/extendedProjectContent'
import '../luxreal-mobile.css'

const media = '/images/projects/luxreal-mobile/latest/'

function OperationVideo() {
  const ref = useRef<HTMLVideoElement>(null)
  const userPaused = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  useEffect(() => {
    const video = ref.current!
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !userPaused.current) void video.play().catch(() => {})
      else video.pause()
    }, { threshold: .15 })
    observer.observe(video)
    return () => observer.disconnect()
  }, [])
  return <figure className="lux-mobile__video">
    <video ref={ref} muted autoPlay playsInline loop preload="metadata" width="1080" height="2328"
      poster={`${media}demo-poster.webp`} src={`${media}demo.mp4`} aria-label="LuxReal 移动端操作演示视频"
      onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)}
      onLoadedMetadata={event => setDuration(event.currentTarget.duration)}
      onTimeUpdate={event => setTime(event.currentTarget.currentTime)} />
    <div className="lux-mobile__video-controls">
      <button type="button" aria-label={playing ? '暂停操作视频' : '播放操作视频'} onClick={() => {
        const video = ref.current!
        userPaused.current = !video.paused
        if (video.paused) void video.play().catch(() => {})
        else video.pause()
      }}>{playing ? '暂停' : '播放'}</button>
      <input aria-label="操作视频播放进度" type="range" min="0" max={duration || 1} step="0.1" value={time}
        onChange={event => { ref.current!.currentTime = Number(event.target.value); setTime(Number(event.target.value)) }} />
    </div>
  </figure>
}

export function ScrollablePhoneMockup({ title, image, scrollable = false, bottom }: {
  title: string; image: string; scrollable?: boolean; bottom?: string
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const screen = scrollRef.current
    if (!screen) return
    // Hand a fresh wheel gesture back to the document at either screen edge.
    const wheel = (event: WheelEvent) => {
      const atStart = screen.scrollTop <= 1
      const atEnd = screen.scrollTop + screen.clientHeight >= screen.scrollHeight - 1
      if ((event.deltaY < 0 && atStart) || (event.deltaY > 0 && atEnd)) {
        event.preventDefault()
        const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1
        window.scrollBy({ top: event.deltaY * unit, behavior: 'instant' })
      }
    }
    screen.addEventListener('wheel', wheel, { passive: false })
    return () => screen.removeEventListener('wheel', wheel)
  }, [])
  return <figure className="lux-mobile__phone-item">
    <figcaption>{title}</figcaption>
    <div className="lux-mobile__phone">
      {scrollable ? <div className="lux-mobile__screen">
        <div ref={scrollRef} className={`lux-mobile__scroll${bottom ? ' lux-mobile__scroll--actions' : ''}`} tabIndex={0} role="region" aria-label={`${title}，可上下滚动`}>
          <img src={media + image} alt={`${title}完整页面`} loading="lazy" />
        </div>
        {bottom && <img className="lux-mobile__actions" src={media + bottom} alt="立即开拍操作栏" loading="lazy" />}
      </div> : <img className="lux-mobile__static" src={media + image} alt={title} loading="lazy" />}
      <img className="lux-mobile__frame" src={`${media}phone-frame.png`} alt="" aria-hidden="true" />
    </div>
  </figure>
}

export function LuxRealMobileCaseStudy() {
  return <>
    <OperationVideo />
    <section className="detail-section case-study__overview">
      <div><p className="eyebrow">01 / OVERVIEW</p><h2>项目概述</h2></div>
      <dl className="case-study__facts">{caseOverviews['mobile-exploration'].items!.map(item =>
        <div key={item.number}><span aria-hidden="true">{item.number}</span><div><dt>{item.title}</dt><dd>{item.body}</dd></div></div>
      )}</dl>
    </section>
    <section className="lux-mobile__gallery">
      <div className="section-heading case-study__gallery-heading"><div><p className="eyebrow">02 / GALLERY</p><h2>设计呈现</h2></div><span className="section-note">探索形式、媒介与表达的更多可能</span></div>
      <div className="lux-mobile__grid">
        <ScrollablePhoneMockup title="01 首页" image="home.webp" />
        <ScrollablePhoneMockup title="02 剧本模板详情页" image="script.webp" scrollable bottom="script-actions.png" />
        <ScrollablePhoneMockup title="03 首页指令输入" image="input.webp" />
        <ScrollablePhoneMockup title="04 创作页 - LUI" image="lui.webp" scrollable />
      </div>
    </section>
    <section className="lux-mobile__interactive">
      <div className="section-heading case-study__gallery-heading"><div><p className="eyebrow">03 / INTERACTIVE DEMO</p><h2>可交互 Demo</h2></div><span className="section-note">Vibe Coding实现线上手机端</span></div>
      <LuxRealMobileDemo />
    </section>
  </>
}
