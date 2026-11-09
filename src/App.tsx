import { useEffect } from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ProjectDetailPage } from './pages/ProjectDetailPage'
import { HomeNavbar } from './components/HomeNavbar'
import { AboutPage } from './pages/AboutPage'
import { projectDetails } from './data/projectDetails'
import { ContactProvider } from './components/ContactMe'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' }))
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, hash])
  return null
}

export default function App() {
  const { pathname } = useLocation()
  const isFoundationPage = pathname === '/' || pathname === '/about'
  const detailSlug = pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1]
  const isCaseStudyPage = Boolean(detailSlug && Object.hasOwn(projectDetails, detailSlug))
  return <ContactProvider>
    <a className="skip-link" href="#main">跳转至内容</a>
    <ScrollManager />
    {isFoundationPage || isCaseStudyPage ? <HomeNavbar projectPage={isCaseStudyPage} /> : <Navbar />}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      <Route path="*" element={<main id="main" className="page-shell empty-page"><p className="eyebrow">404 / LOST IN SPACE</p><h1>这片星域还未被探索。</h1><Link className="text-link" to="/">返回首页 ↗</Link></main>} />
    </Routes>
    {!isFoundationPage && <Footer />}
  </ContactProvider>
}
