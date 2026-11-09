import { Icon } from './Icon'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

// Native dialog supplies top-layer rendering, background inertness and Tab containment.
export function ContactDialog({ children, onClosed }: { children: ReactNode; onClosed: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [visible, setVisible] = useState(false)
  const closing = useRef(false)
  const exitTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const dismiss = () => {
    if (closing.current) return
    closing.current = true
    setVisible(false)
    exitTimer.current = setTimeout(onClosed, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 200)
  }

  useEffect(() => {
    const dialog = dialogRef.current!
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const root = document.documentElement
    const previousOverflow = root.style.overflow
    const previousGutter = root.style.scrollbarGutter
    if (window.innerWidth > root.clientWidth) root.style.scrollbarGutter = 'stable'
    root.style.overflow = 'hidden'
    dialog.showModal()
    const frame = requestAnimationFrame(() => setVisible(true))
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(exitTimer.current)
      dialog.close()
      root.style.overflow = previousOverflow
      root.style.scrollbarGutter = previousGutter
      if (trigger?.isConnected) trigger.focus({ preventScroll: true })
    }
  }, [])

  return createPortal(<dialog ref={dialogRef} className="contact-dialog" aria-labelledby="contact-dialog-title" data-visible={visible}
    onKeyDown={event => {
      if (event.key !== 'Tab') return
      const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], [tabindex="0"]'))
      const index = controls.indexOf(document.activeElement as HTMLElement)
      if (event.shiftKey && index <= 0 || !event.shiftKey && (index === controls.length - 1 || index < 0)) {
        event.preventDefault()
        controls[event.shiftKey ? controls.length - 1 : 0]?.focus({ preventScroll: true })
      }
    }}
    onCancel={event => { event.preventDefault(); dismiss() }}
    onClick={event => { if (event.target === event.currentTarget) dismiss() }}>
    <div className="contact-dialog__card">
      <div className="contact-dialog__content">
      <button type="button" className="contact-dialog__close" aria-label="关闭 Contact Me" onClick={dismiss} autoFocus>
        <span>关闭</span>
        <Icon name="close" />
      </button>
      {children}
      </div>
    </div>
  </dialog>, document.body)
}
