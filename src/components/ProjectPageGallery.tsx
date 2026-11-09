import type { ProjectPageImage } from '../data/projectDetailImages'

interface ProjectPageGalleryProps {
  images: ProjectPageImage[]
  title: string
}

/** Full PDF compositions stay intact: no fixed aspect ratio, crop, or repeated cover. */
export function ProjectPageGallery({ images, title }: ProjectPageGalleryProps) {
  return <div className="case-study__pages" aria-label={`${title}：完整设计过程与成果`}>
    {images.map((image, index) => <figure className="case-study__page" key={image.page} data-pdf-page={image.page}>
      <img
        src={image.src}
        srcSet={image.preview ? `${image.preview} 1280w, ${image.src} ${image.width}w` : undefined}
        sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 900px) calc(100vw - 48px), 852px"
        width={image.width}
        height={image.height}
        alt={image.alt ?? `${title} · 原作品集第 ${image.page} 页`}
        loading={index === 0 ? 'eager' : 'lazy'}
        fetchPriority={index === 0 ? 'high' : undefined}
        decoding="async"
      />
    </figure>)}
  </div>
}
