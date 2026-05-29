import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/soil-smart-schools', label: 'Schools' },
  { to: '/sustainable-villages', label: 'Villages' },
  { to: '/skills-missions', label: 'Skills' },
  { to: '/farmer-resources', label: 'Farmers' },
  { to: '/teacher-resources', label: 'Teachers' },
  { to: '/impact', label: 'Impact' },
  { to: '/stories', label: 'Stories' },
  { to: '/partners', label: 'Partners' }
]

// Home is the logo on desktop; show all but Home in the inline nav
const desktopLinks = links.filter(l => l.to !== '/')

export default function Header() {
  const [open, setOpen] = useState(false)

  // Lock body scroll while the drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const Brand = ({ onClick }) => (
    <Link to="/" className="brand" onClick={onClick}>
      <span className="brand__mark">4</span>
      <span className="brand__title-wrap">
        4-SCI
      </span>
    </Link>
  )

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Brand onClick={() => setOpen(false)} />

        <nav className="nav">
          {desktopLinks.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-cta">
          <Link to="/register" className="btn btn--primary">Login</Link>
          <button
            className={`hamburger ${open ? 'is-active' : ''}`}
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>

      {/* Mobile drawer — portaled to body so it isn't trapped by the header's backdrop-filter */}
      {createPortal(
        <>
          <div
            className={`drawer-overlay ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside className={`drawer ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu">
            <div className="drawer__head">
              <Brand onClick={() => setOpen(false)} />
              <button className="drawer__close" aria-label="Close menu" onClick={() => setOpen(false)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18"/>
                </svg>
              </button>
            </div>

            <nav className="drawer__nav">
              {links.map((l, i) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${0.08 + i * 0.035}s` : '0s' }}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  <span>{l.label}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 6l6 6-6 6"/>
                  </svg>
                </NavLink>
              ))}
            </nav>

            <div className="drawer__foot">
              <Link to="/register" className="btn btn--primary" onClick={() => setOpen(false)} style={{ width: '100%' }}>
                Login
              </Link>
              <p className="drawer__contact">hello@4-sci.org · New Delhi, India</p>
            </div>
          </aside>
        </>,
        document.body
      )}
    </header>
  )
}
