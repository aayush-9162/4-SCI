import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About 4-SCI</span>
          <h1>A digital action platform for soil-smart schools and sustainable communities.</h1>
          <p className="lead">
            SSSI is designed as a school–community digital action platform, not just a learning website. Its heart is a clear path:
            <strong> Domains → Skills → Missions → Activities → Evidence → Badges → Community Impact.</strong>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-row">
            <div>
              <span className="eyebrow">Vision</span>
              <h2>Healthy soil, safer farming, sustainable villages.</h2>
              <p>
                4-SCI promotes experiential sustainability learning through School Kitchen Gardens (under PM POSHAN)
                that function as living laboratories for soil health, safe farming, biodiversity conservation,
                water stewardship, and climate-smart agriculture.
              </p>
              <p>
                <strong>Core promise:</strong> SSSI helps students build green skills while helping farmers adopt
                practical, safer and more sustainable farming practices.
              </p>
            </div>
            <div className="feature-illustration">
              <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
                <rect width="400" height="300" fill="#D8F3DC" rx="24"/>
                <circle cx="200" cy="150" r="100" fill="#fff" stroke="#2D6A4F" strokeWidth="3"/>
                <g transform="translate(200,150)" textAnchor="middle">
                  <text y="-30" fontFamily="DM Serif Display, serif" fontSize="32" fill="#2D6A4F">4-SCI</text>
                  <text y="0" fontSize="12" fill="#1B4332">Soil Smart Schools</text>
                  <text y="18" fontSize="12" fill="#1B4332">Sustainable Communities</text>
                </g>
                <circle cx="80" cy="80" r="32" fill="#74C69D"/>
                <circle cx="320" cy="80" r="32" fill="#E9B23B"/>
                <circle cx="80" cy="220" r="32" fill="#3DA5D9"/>
                <circle cx="320" cy="220" r="32" fill="#E76F51"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">The SSSI Skill Engine</span>
            <h2>How learning becomes impact</h2>
          </div>
          <div className="cards-grid">
            {[
              ['Domain', 'Broad sustainability area'],
              ['Skill', 'Practical capability students learn'],
              ['Mission', 'Guided action challenge'],
              ['Activity', 'Field-level task'],
              ['Evidence', 'Photo, survey, report, video'],
              ['Badge', 'Recognition for completion'],
              ['Impact', 'School / village-level change']
            ].map(([t, d], i) => (
              <div className="card" key={t}>
                <div className="card__icon">{i + 1}</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center text-center">
            <span className="eyebrow">Designed in three phases</span>
            <h2>Technology that grows with you</h2>
          </div>
          <div className="cards-grid">
            <div className="card">
              <h3>MVP</h3>
              <p>Responsive website · Student & teacher login · Activity upload · Badge engine · Basic dashboard · Resource library.</p>
            </div>
            <div className="card">
              <h3>Phase 2</h3>
              <p>Mobile-first PWA · Offline data collection · Village dashboard · GIS tagging · Farmer survey forms · Certificate generation.</p>
            </div>
            <div className="card">
              <h3>Phase 3</h3>
              <p>AI advisory support · Multilingual content · Crop/season-specific missions · KVK expert integration · Automated impact reports.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-strip">
            <div>
              <h2>Want to know more or partner with us?</h2>
              <p>From CSR teams to state governments, schools to KVKs — we'd love to talk.</p>
            </div>
            <div className="cta-strip__buttons">
              <Link to="/partners" className="btn btn--light">Become a Partner</Link>
              <Link to="/register" className="btn btn--white-outline">Register School</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
