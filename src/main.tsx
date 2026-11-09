import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'
import './home.css'
import './outro.css'

// Pages redirects directory entries to a trailing slash; keep existing route checks.
const base = import.meta.env.BASE_URL
if (window.location.pathname.startsWith(base) && window.location.pathname.length > base.length && window.location.pathname.endsWith('/')) {
  window.history.replaceState(null, '', window.location.pathname.replace(/\/+$/, '') + window.location.search + window.location.hash)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode><BrowserRouter basename={base}><App /></BrowserRouter></React.StrictMode>,
)
