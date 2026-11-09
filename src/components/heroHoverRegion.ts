type Point = { x: number; y: number }
type Box = { left: number; right: number; top: number; bottom: number }
const center = (box: Box): Point => ({ x: (box.left + box.right) / 2, y: (box.top + box.bottom) / 2 })
const contains = (box: Box, point: Point, padding = 6) => point.x >= box.left - padding && point.x <= box.right + padding && point.y >= box.top - padding && point.y <= box.bottom + padding

function inBridge(point: Point, from: Point, to: Point) {
  const dx = to.x - from.x, dy = to.y - from.y
  const length = dx * dx + dy * dy
  const t = length ? Math.max(0, Math.min(1, ((point.x - from.x) * dx + (point.y - from.y) * dy) / length)) : 0
  return Math.hypot(point.x - from.x - t * dx, point.y - from.y - t * dy) <= 16
}

// Geometry-only regions never intercept clicks or cover another project's entry.
export function inHeroHoverRegion(entry: HTMLElement, preview: HTMLElement, point: Point) {
  const entryBox = entry.getBoundingClientRect()
  const target = getComputedStyle(entry, '::before')
  const width = Math.max(entryBox.width, parseFloat(target.width) || 0)
  const height = Math.max(entryBox.height, parseFloat(target.height) || 0)
  const origin = center(entryBox)
  const boxes: Box[] = [{ left: origin.x - width / 2, right: origin.x + width / 2, top: origin.y - height / 2, bottom: origin.y + height / 2 }]
  preview.querySelectorAll('img, h2, p, .luxreal-hero-preview__details, .luxreal-hero-preview__close').forEach(element => {
    if (!element.getClientRects().length) return
    if (element.matches('h2, p')) {
      // Text line bounds, not the full-width paragraph's transparent rectangle.
      const range = document.createRange()
      range.selectNodeContents(element)
      boxes.push(...Array.from(range.getClientRects()))
    } else boxes.push(element.getBoundingClientRect())
  })
  if (boxes.some(box => contains(box, point))) return true

  // Join the nearest islands with narrow corridors, rather than one preview-sized overlay.
  const connected = [boxes[0]]
  const remaining = boxes.slice(1)
  while (remaining.length) {
    let distance = Infinity, closest = 0, source = connected[0]
    connected.forEach(from => remaining.forEach((to, index) => {
      const gap = Math.hypot(Math.max(0, from.left - to.right, to.left - from.right), Math.max(0, from.top - to.bottom, to.top - from.bottom))
      if (gap < distance) { distance = gap; closest = index; source = from }
    }))
    const destination = remaining.splice(closest, 1)[0]
    if (inBridge(point, center(source), center(destination))) return true
    connected.push(destination)
  }
  return false
}
