import { MaryCelesteImage } from './MaryCelesteImage'
import { extendedProjectMedia } from '../data/extendedProjectMedia'
import { caseOverviews } from '../data/extendedProjectContent'
import { DetailImage, DetailImageSequence, DetailVideo } from './ProjectDetailMedia'

export const extendedProjectSlugs = ['mobile-exploration', 'baidu-netdisk', 'secondhand-bookshop', 'chess-box', 'pavilions', 'mary-celeste'] as const
export function hasExtendedProject(slug: string) {
  return (extendedProjectSlugs as readonly string[]).includes(slug)
}
function Overview({ slug }: { slug: string }) {
  const copy = caseOverviews[slug]
  if (!copy) return null
  return <section className="detail-section case-study__overview">
    <div><p className="eyebrow">01 / OVERVIEW</p><h2>项目概述</h2></div>
    <div>{copy.items ? <dl className="case-study__facts">{copy.items.map(item => <div key={item.number}><span aria-hidden="true">{item.number}</span><div><dt>{item.title}</dt><dd>{item.body}</dd></div></div>)}</dl> : <>{copy.heading && <h3>{copy.heading}</h3>}<p className="detail-body">{copy.body}</p></>}</div>
  </section>
}
function GalleryHeading({ note }: { note?: string }) {
  return <div className="section-heading case-study__gallery-heading"><div><p className="eyebrow">03 / GALLERY</p><h2>设计呈现</h2></div>{note && <span className="section-note">{note}</span>}</div>
}
/** Per-project composition: a portrait demo, continuous PDF pages, or ordered editorial images. */
export function ExtendedProjectContent({ slug, title }: { slug: string; title: string }) {
  if (slug === 'pavilions') {
    const [cover, ...pages] = extendedProjectMedia.pavilions
    return <><DetailImage image={cover} title={`${title} · 封面`} eager /><Overview slug={slug} />
      <section className="case-study__editorial-gallery"><div className="section-heading case-study__gallery-heading"><div><p className="eyebrow">02 / GALLERY</p><h2>设计呈现</h2></div><span className="section-note">探索形式、媒介与表达的更多可能</span></div><DetailImageSequence images={pages} title={title} /></section></>
  }
  if (slug === 'mary-celeste') return <><MaryCelesteImage /><Overview slug={slug} />
    <section className="case-study__book-information detail-section"><div><p className="eyebrow">02 / INFORMATION</p><h2>基础信息</h2></div>
      <dl className="case-study__facts">{[['01', '尺寸', '2m * 2m'], ['02', '纸张', '牛皮纸']].map(([number, label, value]) => <div key={number}><span aria-hidden="true">{number}</span><div><dt>{label}</dt><dd>{value}</dd></div></div>)}</dl>
    </section></>
  if (slug === 'mobile-exploration') return <><DetailVideo /><Overview slug={slug} /></>
  if (slug === 'baidu-netdisk') return <DetailImageSequence images={extendedProjectMedia[slug]} title={title} eager />
  if (slug === 'secondhand-bookshop') {
    const [cover, ...pages] = extendedProjectMedia[slug]
    return <>
      {/* The source is portrait; contain the full image instead of cropping its book composition. */}
      <DetailImage image={cover} title={`${title} · 01`} eager className="case-study__book-cover" />
      <Overview slug={slug} />
      <section className="case-study__book-information detail-section">
        <div><p className="eyebrow">02 / INFORMATION</p><h2>基础信息</h2></div>
        <dl className="case-study__facts">{[['01', '尺寸', '240mm*320mm'], ['02', '装订方式', 'PUR胶装'], ['03', '纸张', '封面 - 牛皮纸\n内页 - 筒子页 - 棉质环保纸80g']].map(([number, label, value]) => <div key={number}><span aria-hidden="true">{number}</span><div><dt>{label}</dt><dd>{value}</dd></div></div>)}</dl>
      </section>
      <section className="case-study__editorial-gallery"><GalleryHeading note="探索形式、媒介与表达的更多可能" />
        {pages.map(image => <DetailImage key={image.src} image={image} title={`${title} · ${String(image.page).padStart(2, '0')}`} />)}
      </section>
    </>
  }
  if (slug === 'chess-box') return <>
    <div className="case-study__pages">{extendedProjectMedia['chess-box-intro'].map((image, index) => <DetailImage key={image.src} image={image} title={`${title} · ${index === 0 ? '打印_48' : '打印_50'}`} eager={index === 0} />)}</div>
    <Overview slug={slug} />
    <section className="case-study__editorial-gallery"><GalleryHeading />
      <DetailImageSequence images={extendedProjectMedia[slug]} title={title} />
    </section>
  </>
  return null
}
