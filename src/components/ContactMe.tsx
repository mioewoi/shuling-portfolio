import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { ContactDialog } from './ContactDialog'
import '../contact.css'

const ContactContext = createContext<() => void>(() => {})
export const useContact = () => useContext(ContactContext)
const email = 'yeshuling05327@qq.com'

function ContactContent() {
  const [copyStatus, setCopyStatus] = useState('')
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopyStatus('邮箱已复制')
    } catch {
      setCopyStatus('复制失败，请选中邮箱手动复制')
    }
  }
  return <>
    <header className="contact-dialog__heading">
      <h2 id="contact-dialog-title">COME SAY HI~</h2>
      <p>很高兴在这里遇见你，期待我们的进一步沟通~</p>
    </header>
    <div className="contact-dialog__body">
      <dl className="contact-dialog__channels">
        <div><dt>手机</dt><dd><a href="tel:15906188607">15906188607</a></dd></div>
        <div className="contact-dialog__email"><dt>邮箱</dt><dd>
          <a href={`mailto:${email}`}>{email}</a>
          <button type="button" className="contact-dialog__copy" onClick={copyEmail} aria-label="复制邮箱" title="复制邮箱">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true"><rect x="5" y="5" width="8" height="9" rx="1" stroke="currentColor" /><path d="M10 3V2H2v9h1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </dd></div>
        <div><dt>微信</dt><dd>A1738alice</dd></div>
      </dl>
      <div className="contact-dialog__opportunity"><p>求职期望</p><div>UX / UI 设计师<br />任何有趣的项目合作与设计交流</div></div>
    </div>
    <div className="contact-dialog__rule" aria-hidden="true" />
    <img className="contact-dialog__qr" src="/images/contact/wechat-qr.png" alt="叶书伶的微信二维码" width="53" height="53" />
    <p className="contact-dialog__status" role="status">{copyStatus}</p>
  </>
}

export function ContactProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const route = location.pathname + location.search + location.hash
  const [openedAt, setOpenedAt] = useState<string | null>(null)
  useEffect(() => { setOpenedAt(null) }, [route])
  return <ContactContext.Provider value={() => setOpenedAt(route)}>
    {children}
    {openedAt === route && <ContactDialog onClosed={() => setOpenedAt(null)}><ContactContent /></ContactDialog>}
  </ContactContext.Provider>
}
