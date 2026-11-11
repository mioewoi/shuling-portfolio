import { AboutLifeCarousel } from '../components/AboutLifeCarousel'
import { Footer } from '../components/Footer'
import { ToolkitDock } from '../components/ToolkitDock'
import { aboutExperience } from '../data/aboutExperience'
import '../about.css'

export function AboutPage() {
  return <div className="about-view">
    <main id="main" className="about-page">
      <h1 className="about-sr-only">关于叶书伶</h1>
      <section className="about-resume" aria-label="个人信息与经历">
        <aside className="about-profile">
          <div className="about-profile__portrait-frame"><img className="about-profile__portrait" src="/images/about/portrait.jpg" alt="叶书伶的个人照片" width="1080" height="1924" fetchPriority="high" /></div>
          <div id="contact" className="about-profile__details">
            <p>姓名：叶书伶</p><p>年龄：21</p><p>专业：视觉传达</p>
            <p>学校：中国美术学院（大四在读）</p>
            <p>电话：<a href="tel:15906188607">15906188607</a></p>
            <p>邮箱：<a href="mailto:yeshuling05327@qq.com">yeshuling05327@qq.com</a></p>
            <p>微信：A1738alice</p><p>毕业时间：2027年6月</p>
          </div>
          {/* QR image reused from Figma image fill 139:449; not generated from a username. */}
          <img className="about-profile__qr" src="/images/about/contact-qr.png" alt="叶书伶的微信联系二维码" width="184" height="184" />
        </aside>
        <div className="about-experience">
          {aboutExperience.map(group => <section className="about-experience__group" key={group.label} aria-label={group.label}>
            <h2 className="about-experience__badge">{group.label}</h2>
            <div className="about-experience__body">
              {group.company && <header className="about-experience__company"><h3>{group.company}</h3><span>{group.date}</span></header>}
              {group.items.map(item => <article className="about-experience__item" key={item.title}>
                <header className="about-experience__item-heading">
                  <h3>{item.title}<span className="about-experience__date">{item.date}</span></h3>
                  <ul className="about-experience__tags" aria-label="项目标签">{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                </header>
                <div className="about-experience__copy">{item.paragraphs.map((paragraph, index) => <p key={index}>{paragraph.label && <strong>{paragraph.label}：</strong>}{paragraph.text}</p>)}</div>
              </article>)}
            </div>
          </section>)}
        </div>
      </section>
      <section className="about-toolkit" aria-labelledby="toolkit-title"><h2 id="toolkit-title">常用工具</h2><ToolkitDock /></section>
      <section className="about-life" aria-labelledby="life-title">
        <h2 id="life-title">工作之余</h2>
        <div className="about-life__grid">
          <AboutLifeCarousel />
          <div className="about-life__column">
            <img src="/images/about/life-02.webp" alt="现场音乐与舞台演出" loading="lazy" decoding="async" />
            <img className="about-life__focus" src="/images/about/life-03.webp" alt="Hollow Knight Silksong" loading="lazy" decoding="async" />
          </div>
          <div className="about-life__column about-life__column--right">
            <img src="/images/about/life-04.webp" alt="剧场里的舞台表演" loading="lazy" decoding="async" />
            <img className="about-life__focus" src="/images/about/life-05.webp" alt="不同图案的陶瓷器物" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
}
