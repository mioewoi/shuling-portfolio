import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useContact } from './ContactMe'

export function HomeNavbar({ projectPage = false }: { projectPage?: boolean }) {
  const openContact = useContact()
  const { pathname } = useLocation()
  const isDirector = /^\/projects\/luxreal\/?$/.test(pathname)
  const [inWorks, setInWorks] = useState(false)

  useEffect(() => {
    if (pathname !== '/') { setInWorks(false); return }
    const works = document.getElementById('works')
    if (!works) return
    let frame = 0
    const update = () => {
      frame = 0
      // A constant boundary avoids oscillation while the fixed header changes height.
      const expandedHeight = window.innerWidth <= 600 ? 100 : window.innerWidth <= 1023 ? 96 : 128
      setInWorks(works.getBoundingClientRect().top <= expandedHeight)
    }
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [pathname])

  const scrollToSection = (id: string) => {
    if (pathname !== '/') return
    document.getElementById(id)?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })
  }

  return <header data-node-id={isDirector ? '262:632' : undefined} className={'portfolio-nav' + (inWorks || projectPage || pathname === '/about' ? ' is-compact' : '')}>
    <nav className="portfolio-nav__inner" aria-label="主导航">
      <Link className="portfolio-nav__identity" to="/#home" onClick={() => scrollToSection('home')} aria-label="叶书伶，返回首页">
        <span>叶书伶</span><i aria-hidden="true">·</i><span>SHULING</span><i aria-hidden="true">·</i><span>UX&amp;UI 设计师</span>
      </Link>
      <div className="portfolio-nav__links">
        <Link to="/#home" onClick={() => scrollToSection('home')} aria-current={pathname === '/' && !inWorks ? 'page' : undefined}>Home</Link>
        <Link to="/#works" onClick={() => scrollToSection('works')} aria-current={projectPage || pathname === '/' && inWorks ? 'page' : undefined}>Work</Link>
        <Link to="/about" aria-current={pathname === '/about' ? 'page' : undefined}>About</Link>
        <button type="button" className="contact-trigger" aria-haspopup="dialog" onClick={openContact}>Contact</button>
      </div>
    </nav>
  </header>
}
