import { useState } from 'react'
import { ImageLightbox } from './ImageLightbox'
import { Icon } from './Icon'

export function MaryCelesteImage() {
  const [open, setOpen] = useState(false)
  return <>
    <button type="button" className="mary-celeste-image" aria-label="全屏查看玛丽·塞勒斯特之谜高清主图" aria-haspopup="dialog" onClick={() => setOpen(true)}>
      <img src="/images/projects/mary-celeste/main-2560.webp" srcSet={`${import.meta.env.BASE_URL}images/projects/mary-celeste/main-1280.webp 1280w, ${import.meta.env.BASE_URL}images/projects/mary-celeste/main-2560.webp 2560w`}
        sizes="(max-width: 900px) calc(100vw - 48px), 852px" width={11811} height={11811} alt="玛丽·塞勒斯特之谜：以航海罗盘组织事件线索与八种猜想的信息图解" fetchPriority="high" />
      <span className="mary-celeste-image__zoom"><Icon name="zoomIn" size={24} /></span>
    </button>
    {open && <ImageLightbox src="/images/projects/mary-celeste/main-2560.webp" tiles={{ base: '/images/projects/mary-celeste/tiles', size: 1024 }} alt="玛丽·塞勒斯特之谜" width={11811} height={11811} onClose={() => setOpen(false)} />}
  </>
}
