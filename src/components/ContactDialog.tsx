import { Icon } from './Icon'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

// Non-modal: only the card intercepts pointers; background and keyboard navigation stay available.
export function ContactDialog({ children, onClosed }: { children: ReactNode; onClosed: () => void }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const dismissRef = useRef(onClosed)
  dismissRef.current = onClosed
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const card = cardRef.current
    closeRef.current?.focus({ preventScroll: true })
    const frame = requestAnimationFrame(() => setVisible(true))
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        dismissRef.current()
      }
    }
    document.addEventListener('keydown', escape)
    return () => {
      cancelAnimationFrame(frame)
      document.removeEventListener('keydown', escape)
      // Restore focus only if it is still in this card, never steal it from background navigation.
      if (card?.contains(document.activeElement) && trigger?.isConnected) trigger.focus({ preventScroll: true })
    }
  }, [])

  return createPortal(<div className="contact-dialog" data-visible={visible}>
    <div ref={cardRef} className="contact-dialog__card" role="dialog" aria-labelledby="contact-dialog-title">
      <div className="contact-dialog__content">
      <button ref={closeRef} type="button" className="contact-dialog__close" aria-label="关闭 Contact Me" onClick={onClosed}>
        <span>关闭</span>
        <Icon name="close" />
      </button>
      {children}
      </div>
    </div>
  </div>, document.body)
}
