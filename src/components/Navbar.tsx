import { useLocation } from 'react-router-dom'
import { HomeNavbar } from './HomeNavbar'

// Legacy routes share the same navigation and active-state rules.
export function Navbar() {
  const { pathname } = useLocation()
  return <HomeNavbar projectPage={pathname.startsWith('/projects/')} />
}
