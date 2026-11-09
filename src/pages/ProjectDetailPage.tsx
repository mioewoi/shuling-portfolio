import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { ProjectArtwork } from '../components/ProjectArtwork'
import { ProjectPageGallery } from '../components/ProjectPageGallery'
import { projectDetailImages } from '../data/projectDetailImages'
import { allProjects } from '../data/allProjects'
import { projectDetails } from '../data/projectDetails'
import { ExtendedProjectContent, hasExtendedProject } from '../components/ExtendedProjectContent'
import { LuxRealDirectorCaseStudy } from '../components/LuxRealDirectorCaseStudy'
import '../project-details.css'

export function ProjectDetailPage() {
  const { slug } = useParams()
  const isDirector = slug === 'luxreal'
  const project = projects.find(p => p.slug === slug)
  const images = slug ? projectDetailImages[slug] : undefined
  const extended = Boolean(slug && hasExtendedProject(slug))
  const detail = allProjects.find(p => p.detailUrl === `/projects/${slug}`)
  const copy = slug && Object.hasOwn(projectDetails, slug) ? projectDetails[slug] : undefined
  useEffect(() => {
    document.title = project ? `${copy?.title ?? project.title} — 叶书伶的作品集` : '项目未找到 — 叶书伶'
    return () => { document.title = '叶书伶 — UI/UX 设计师' }
  }, [project, copy])
  const legacySchoolSlug = slug === 'school-1' ? 'secondhand-bookshop' : slug === 'school-2' ? 'chess-box' : null
  if (legacySchoolSlug) return <Navigate to={`/projects/${legacySchoolSlug}`} replace />
  if (!project) return <main id="main" className="page-shell empty-page"><p className="eyebrow">PROJECT NOT FOUND</p><h1>这个项目还未进入轨道。</h1><Link className="text-link" to="/#works">返回作品集 ↗</Link></main>
  const next = projects[(projects.indexOf(project) + 1) % projects.length]
  const nextDetail = copy ? allProjects.find(p => p.id === copy.nextProjectId) : undefined
  if ((isDirector || images || extended) && detail && copy) return <main id="main" className={`detail-page page-shell case-study case-study--${project.slug}`}>
    <Link data-node-id={isDirector ? '262:576' : undefined} className="back-link" to={project.featured ? '/#works' : '/#all-projects'}>{isDirector ? <><img src="/images/projects/luxreal/director-latest/back-arrow.svg" width="16" height="16" alt="" />返回作品集</> : '← 返回作品集'}</Link>
    <header className="detail-heading" data-node-id={isDirector ? '262:580' : undefined}>
      <h1>{copy.title}</h1>
      <p className="detail-summary">{copy.summary}</p>
      <dl className="detail-meta">
        <div><dt>年份 / YEAR</dt><dd>{copy.date ?? detail.date}</dd></div>
        <div><dt>角色 / ROLE</dt><dd>{copy.role}</dd></div>
        <div><dt>类别 / CATEGORY</dt><dd>{project.category}</dd></div>
        {copy.website && <div><dt>网址 / WEBSITE</dt><dd><a href={copy.website} target="_blank" rel="noreferrer">{copy.website}</a></dd></div>}
      </dl>
    </header>
    {project.slug === 'luxreal' ? <LuxRealDirectorCaseStudy /> : extended ? <ExtendedProjectContent key={project.slug} slug={project.slug} title={copy.title} /> : images && <ProjectPageGallery images={images} title={copy.title} />}
    <div className="next-project" data-node-id={isDirector ? '262:614' : undefined}>
      <p className="eyebrow">CONTINUE EXPLORING</p>
      {nextDetail && (nextDetail.detailUrl
        ? <Link to={nextDetail.detailUrl}>下一个项目：{copy.nextProjectTitle ?? nextDetail.title}{isDirector ? <img src="/images/projects/luxreal/director-latest/next-arrow.svg" width="32" height="32" alt="" /> : <span aria-hidden="true">→</span>}</Link>
        : <span className="case-study__next-pending" aria-disabled="true" title="该项目详情页尚未提供">下一个项目：{copy.nextProjectTitle ?? nextDetail.title}<span className="sr-only">（详情待补充）</span><span aria-hidden="true">→</span></span>)}
      <Link className="back-link" to="/#works">查看全部精选作品</Link>
    </div>
  </main>
  return <main id="main" className="detail-page page-shell">
    <Link className="back-link" to={project.featured ? '/#works' : '/#all-projects'}>← 返回作品集</Link>
    <header className="detail-heading"><p className="eyebrow">PROJECT {project.id} / {project.category}</p><h1>{project.title}</h1><p className="detail-summary">{project.summary}</p><dl className="detail-meta"><div><dt>年份 / YEAR</dt><dd>{project.year}</dd></div><div><dt>角色 / ROLE</dt><dd>{project.role}</dd></div><div><dt>类别 / CATEGORY</dt><dd>{project.category}</dd></div></dl></header>
    <ProjectArtwork project={project} large />
    <section className="detail-section"><div><p className="eyebrow">01 / OVERVIEW</p><h2>项目概述</h2></div><div><p className="detail-body">{project.overview}</p><div className="detail-placeholder">待补充：项目背景 / 用户需求 / 我的职责 / 设计目标</div></div></section>
    <section className="detail-section"><div><p className="eyebrow">02 / PROCESS</p><h2>设计过程</h2></div><div className="process-list">{[['01', '理解问题', '补充调研发现、场景分析与核心挑战。'], ['02', '探索方案', '补充信息架构、交互推导与方案迭代。'], ['03', '验证与反思', '补充验证方式、真实成果与设计复盘。']].map(([n, title, description]) => <div className="process-item" key={n}><span>{n}</span><div><h3>{title}</h3><p>{description}</p></div><span className="muted text-xs">待补充</span></div>)}</div></section>
    <section className="gallery-section"><div className="section-heading"><div><p className="eyebrow">03 / GALLERY</p><h2>设计呈现</h2></div><span className="section-note">为真实画面与交互 Demo 预留空间</span></div>{/* 后续替换为图片 / video controls。Demo 使用 poster + preload="none"，不自动加载。 */}<div className="gallery-grid">{['关键界面 / 全景展示', '交互细节 / DEMO', '设计细节 / 过程图'].map((label, i) => <div className={`gallery-placeholder ${i === 0 ? 'gallery-wide' : ''}`} key={label}><span aria-hidden="true">+</span><p>{label}</p><small>内容待补充</small></div>)}</div></section>
    <div className="next-project"><p className="eyebrow">CONTINUE EXPLORING</p><Link to={`/projects/${next.slug}`}>下一个项目：{next.title}<span aria-hidden="true">↗</span></Link><Link className="back-link" to="/#works">查看全部精选作品</Link></div>
  </main>
}
