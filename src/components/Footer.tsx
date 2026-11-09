import { useLocation } from 'react-router-dom'

export function Footer() {
  const isDirector = /^\/projects\/luxreal\/?$/.test(useLocation().pathname)
  return <footer data-node-id={isDirector ? '293:1402' : undefined} className="site-footer page-shell"><span>© {new Date().getFullYear()} 叶书伶</span><span>保持好奇，继续探索。</span><a href="#top" onClick={event => { event.preventDefault(); window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }) }}>{isDirector ? <>回到顶部<img src="/images/projects/luxreal/director-latest/up-arrow.svg" width="16" height="16" alt="" /></> : '回到顶部 ↑'}</a></footer>
}
