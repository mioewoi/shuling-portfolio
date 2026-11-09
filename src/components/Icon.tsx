import type { CSSProperties } from 'react'
import './icon.css'

const files = { left: '箭头左', right: '箭头右', up: '箭头上', close: '关闭', zoomIn: '放大', zoomOut: '缩小', fit: '适应页面', original: '原始尺寸' } as const
export function Icon({ name, size = 16, width = size, height = size }: {
  name: keyof typeof files; size?: number; width?: number; height?: number
}) {
  return <span className="functional-icon" aria-hidden="true" style={{
    width, height, '--icon-url': `url("${import.meta.env.BASE_URL}icon/${files[name]}.svg")`,
  } as CSSProperties} />
}
