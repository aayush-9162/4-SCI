import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand" style={{ color: '#fff', marginBottom: 14 }}>
              <span className="brand__mark" style={{ background: '#40916C' }}>4</span>
              <span className="brand__title-wrap">
                <span className="brand__sub" style={{ color: '#B7E4C7' }}>Soil Smart · Sustainable Communities</span>
                4-SCI
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '.92rem', maxWidth: 380 }}>
              Learning smart farming skills for healthy soil, safe farming and sustainable communities.
              A school–community digital action platform anchored in PM POSHAN kitchen gardens.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <Link to="/about">About 4-SCI</Link>
            <Link to="/soil-smart-schools">Soil Smart Schools</Link>
            <Link to="/sustainable-villages">Sustainable Villages</Link>
            <Link to="/skills-missions">Skills & Missions</Link>
            <Link to="/impact">Impact Dashboard</Link>
          </div>

          <div>
            <h4>For Users</h4>
            <Link to="/teacher-resources">Teacher Resources</Link>
            <Link to="/farmer-resources">Farmer Resources</Link>
            <Link to="/stories">Stories from Schools</Link>
            <Link to="/partners">Partners</Link>
            <Link to="/register">Register / Login</Link>
          </div>

          <div>
            <h4>Contact</h4>
            <a href="mailto:hello@4-sci.org">hello@4-sci.org</a>
            <a href="#">+91 11 0000 0000</a>
            <a href="#">New Delhi, India</a>
            <div style={{ marginTop: 14, display: 'flex', gap: 10 }}>
              <a href="#" aria-label="Twitter" style={{ display: 'inline-grid', placeItems: 'center', width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,.1)' }}>X</a>
              <a href="#" aria-label="LinkedIn" style={{ display: 'inline-grid', placeItems: 'center', width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,.1)' }}>in</a>
              <a href="#" aria-label="YouTube" style={{ display: 'inline-grid', placeItems: 'center', width: 36, height: 36, borderRadius: 10, background: 'rgba(255,255,255,.1)' }}>YT</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} 4-SCI Initiative. All rights reserved.</span>
          <span>Soil Smart Schools & Sustainable Communities Initiative</span>
        </div>
      </div>
    </footer>
  )
}
