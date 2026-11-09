import { useEffect, useRef, useState } from 'react'

const assets = '/images/projects/luxreal/director-latest'

function HighlightVideo({ src, label, nodeId }: { src: string; label: string; nodeId: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const userPaused = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [playFailed, setPlayFailed] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let visible = false
    let disposed = false
    const updatePlayback = () => {
      if (visible && !document.hidden && !userPaused.current && !reduceMotion.matches) {
        void video.play().then(() => {
          if (!disposed) setPlayFailed(false)
        }).catch((error: DOMException) => {
          if (!disposed && error.name !== 'AbortError') setPlayFailed(true)
        })
      } else {
        video.pause()
      }
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio > 0
      updatePlayback()
    }, { threshold: [0, 0.01] })
    observer.observe(video)
    reduceMotion.addEventListener('change', updatePlayback)
    document.addEventListener('visibilitychange', updatePlayback)
    return () => {
      disposed = true
      observer.disconnect()
      reduceMotion.removeEventListener('change', updatePlayback)
      document.removeEventListener('visibilitychange', updatePlayback)
      video.pause()
    }
  }, [])

  const togglePlayback = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      userPaused.current = false
      void video.play().then(() => { setPlaying(true); setPlayFailed(false) }).catch(() => setPlayFailed(true))
    } else {
      userPaused.current = true
      video.pause()
      setPlaying(false)
    }
  }

  return <figure className="luxreal-director__video-wrap" data-node-id={nodeId}>
    <video
      ref={videoRef}
      className="luxreal-director__video"
      src={src}
      aria-label={label}
      muted
      loop
      playsInline
      preload="metadata"
      onPlay={() => setPlaying(true)}
      onPause={() => setPlaying(false)}
      onError={() => setPlayFailed(true)}
    />
    <button className="luxreal-director__video-toggle" type="button" onClick={togglePlayback} aria-label={playing ? `暂停${label}` : `播放${label}`}>
      {playing ? '暂停' : playFailed ? '点击播放' : '播放'}
    </button>
  </figure>
}

export function LuxRealDirectorCaseStudy() {
  return <div className="luxreal-director" aria-label="LuxReal互动影游导演台项目详情">
    <img data-node-id="262:608" className="luxreal-director__cover" src={`${assets}/cover.jpg`} width="1913" height="1095" alt="LuxReal AI互动影游导演台设计" fetchPriority="high" />

    <section className="luxreal-director__section" aria-labelledby="director-overview">
      <div className="luxreal-director__intro" data-node-id="265:758">
        <p className="eyebrow">01 / OVERVIEW</p>
        <h2 id="director-overview">背景与用户</h2>
        <p className="luxreal-director__copy">互动影游引入剧情分支和玩家选择，使创作从线性流程转变为复杂的叙事结构。随着节点、角色和制作任务不断增加，创作者需要一个能统一理解、管理和调整剧情的工作空间。</p>
      </div>
      <img data-node-id="266:823" className="luxreal-director__diagram" src={`${assets}/story-structure.png`} width="866" height="169" alt="传统短剧的剧情1至4依次推进；互动影游由剧情3、剧情4分支，继续延伸至剧情3.1、剧情4.1及后续选择。" loading="lazy" decoding="async" />
      <div className="luxreal-director__user-types" data-node-id="266:874">
        <div><h3>AI 创作新手</h3><p>希望快速理解剧情结构，降低创作和操作门槛。</p></div>
        <div><h3>专业影视创作团队</h3><p>需要清晰管理故事分支、制作状态及创作进度。</p></div>
      </div>
    </section>

    <section className="luxreal-director__section" aria-labelledby="director-strategy">
      <div className="luxreal-director__intro" data-node-id="268:914">
        <p className="eyebrow">02 / OVERVIEW</p>
        <h2 id="director-strategy">挑战与策略</h2>
        <h3 className="luxreal-director__subheading">AI 能生成故事，但复杂故事如何管理？</h3>
        <p className="luxreal-director__copy">现有 AI 创作工具逐渐具备内容生成能力，但剧情拆分后，节点的信息识别、分支定位与编辑操作仍存在较高成本。</p>
      </div>
      <div className="luxreal-director__goals" data-node-id="270:947">
        <div className="luxreal-director__goal"><h3>看得懂</h3><p>强化<br />节点的信息识别</p></div>
        <img src={`${assets}/strategy-arrow.svg`} width="74" height="37" alt="" />
        <div className="luxreal-director__goal"><h3>找得到</h3><p>提升复杂剧情中<br />节点定位效率</p></div>
        <img src={`${assets}/strategy-arrow.svg`} width="74" height="37" alt="" />
        <div className="luxreal-director__goal"><h3>改得快</h3><p>降低节点编辑<br />与调整成本</p></div>
      </div>
    </section>

    <section className="luxreal-director__section" aria-labelledby="director-feature-01">
      <div className="luxreal-director__intro" data-node-id="275:948">
        <p className="eyebrow">03 / Feature 01 — Node System</p>
        <h2 id="director-feature-01">设计亮点 01</h2>
        <h3 className="luxreal-director__subheading">减少信息负担，让节点一眼可识别</h3>
        <p className="luxreal-director__copy">根据故事中的不同职责，建立开始、剧情、互动、结束四类节点体系。针对剧情节点，将信息组织为剧本文字与成片两种核心状态，并通过默认、悬停和选中态逐步呈现操作入口。</p>
      </div>
      {/* Exact module image returned by Figma MCP for 284:697, not a legacy PDF page. */}
      <img data-node-id="284:697" className="luxreal-director__comparison" src={`${assets}/node-comparison.png`} width="852" height="605" alt="Before / After：剧情节点优化信息层级与出演资产入口；互动节点突出人物、选项与分支关系，提升游戏感、功能透传和差异化。" loading="lazy" decoding="async" />
      <div className="luxreal-director__node-states" data-node-id="289:1204" role="group" aria-label="节点的默认、悬停与选中状态">
        {[
          { label: 'Normal', file: 'normal', width: 1031, height: 1159, alt: '节点默认态：剧本文字卡片与深色空间底座。' },
          { label: 'Hover', file: 'hover', width: 1032, height: 1162, alt: '节点悬停态：边框高亮，并显示视频制作按钮。' },
          { label: 'Selected', file: 'selected', width: 1084, height: 1301, alt: '节点选中态：显示成片、操作工具栏及蓝色高亮底座。' },
        ].map(state => <figure key={state.file} className="luxreal-director__node-state">
          <figcaption>{state.label}</figcaption>
          <div className="luxreal-director__node-state-image">
            <img src={`${assets}/node-state-${state.file}.png`} width={state.width} height={state.height} alt={state.alt} loading="lazy" decoding="async" />
          </div>
        </figure>)}
      </div>
    </section>

    <section className="luxreal-director__section" aria-labelledby="director-feature-02">
      <div className="luxreal-director__intro" data-node-id="289:1369">
        <p className="eyebrow">04 / Feature 02 — Interactive Storytelling</p>
        <h2 id="director-feature-02">设计亮点 02</h2>
        <h3 className="luxreal-director__subheading">看懂每一次选择，理清每一条分支</h3>
        <p className="luxreal-director__copy">重新组织互动节点的视觉结构，将角色、剧情选项与分支连线直接关联。放大关键选项，弱化次要信息，并让编辑操作集中在需要交互的状态中。</p>
      </div>
      <HighlightVideo nodeId="293:1384" src="/videos/projects/luxreal-director/design-highlight-02.mp4" label="设计亮点 02 动态演示" />
    </section>

    <section className="luxreal-director__section" aria-labelledby="director-feature-03">
      <div className="luxreal-director__intro" data-node-id="293:1387">
        <p className="eyebrow">05 / Feature 03 — Progress &amp; Guidance</p>
        <h2 id="director-feature-03">设计亮点 03</h2>
        <h3 className="luxreal-director__subheading">让创作者知道当前进度，以及下一步该做什么</h3>
        <p className="luxreal-director__copy">针对用户在进入导演台后难以定位下一步操作的问题，通过画布聚焦与必要的引导提示，将操作指引直接关联到对应的剧情节点。</p>
      </div>
      <HighlightVideo nodeId="293:1399" src="/videos/projects/luxreal-director/design-highlight-03.mp4" label="设计亮点 03 动态演示" />
    </section>
  </div>
}
