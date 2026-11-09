import { HeroSection } from '../components/HeroSection'
import { HomeCosmicBackground } from '../components/HomeCosmicBackground'
import { FeaturedOrbitSection } from '../components/FeaturedOrbitSection'
import { ProjectFeedSection } from '../components/ProjectFeedSection'
import { OutroSection } from '../components/OutroSection'

export function HomePage() {
  return <main id="main" className="portfolio-home">
    <HomeCosmicBackground />
    <HeroSection />
    <div id="works" className="home-work-anchor"><ProjectFeedSection /></div>
    <OutroSection />
  </main>
}

// Kept for later reuse so the previous work feed and profile/contact content remain available.
export function LegacyHomeContent() {
  return <main id="legacy-home-content">
    {/* Existing sections remain intact for future routes or reuse. */}
    <FeaturedOrbitSection /><ProjectFeedSection />
    <section id="about" className="about-section page-shell" aria-labelledby="about-heading"><p className="eyebrow">03 / ABOUT ME</p><div className="about-grid"><h2 id="about-heading">设计，也是一次<br /><span>对未知的探索。</span></h2><div><p className="about-intro">我是叶书伶，一名 UI/UX 设计师。</p><p className="muted leading-8">在产品体验、复杂交互与视觉表达之间，持续探索设计的可能性。</p><p className="content-placeholder">个人经历、设计理念与简历将在这里补充。</p></div></div></section>
    <section id="contact" className="contact-section page-shell" aria-labelledby="contact-heading"><p className="eyebrow">04 / MAKE A CONNECTION</p><div className="contact-layout"><h2 id="contact-heading">让下一次探索，<br />从一次交流开始。</h2><div><p className="muted">期待交流设计，也期待新的合作。</p>{/* 添加真实邮箱 / 社交链接后，将占位文字替换为 mailto 链接。 */}<p className="contact-placeholder">联系方式待补充 <span aria-hidden="true">↗</span></p></div></div></section>
  </main>
}
