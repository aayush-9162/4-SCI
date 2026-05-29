import { Link } from 'react-router-dom'

const teacherFeatures = [
  ['Register Soil Smart Club', 'One-time setup for your school'],
  ['Add Students', 'Bulk import or add one by one'],
  ['Assign Missions', 'From a library of badge-earning challenges'],
  ['Validate Uploads', 'Approve evidence and award badges'],
  ['Track Class Progress', 'See activity, evidence and outcomes'],
  ['Generate School Report', 'Auto-built sustainability reports'],
  ['Organise Farmer Days', 'Connect students with local farmers'],
  ['Recommend Awards', 'Nominate students & schools for recognition']
]

const studentFeatures = [
  ['My Skills', 'Track skills earned across 12 domains'],
  ['My Missions', 'Active and completed missions'],
  ['Upload Activity', 'Photos, surveys, observations'],
  ['My Badges', 'Recognition for completed missions'],
  ['My Village Survey', 'Field data you have collected'],
  ['My Certificates', 'Downloadable proof of learning'],
  ['Leaderboard', 'See top peers across schools'],
  ['Reflection Diary', 'Your personal sustainability journal']
]

export default function SoilSmartSchools() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Soil Smart Schools</span>
          <h1>Your kitchen garden is a classroom for the planet.</h1>
          <p className="lead">
            Register your school's Soil Smart Club, run guided missions in your PM POSHAN kitchen garden,
            and watch students turn into community change agents.
          </p>
          <div style={{ marginTop: 22, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/register" className="btn btn--primary">Register School</Link>
            <Link to="/teacher-resources" className="btn btn--ghost">Teacher Resources</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Teacher Dashboard</span>
            <h2>Everything you need to run a Soil Smart Club</h2>
          </div>
          <div className="cards-grid">
            {teacherFeatures.map(([t, d]) => (
              <div className="card" key={t}>
                <div className="card__icon">✦</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Student Dashboard</span>
            <h2>For young learners, soil scientists & village changemakers</h2>
          </div>
          <div className="cards-grid">
            {studentFeatures.map(([t, d]) => (
              <div className="card" key={t}>
                <div className="card__icon">★</div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, textAlign: 'center', padding: '24px', background: 'var(--cream)', borderRadius: 16 }}>
            <strong style={{ color: 'var(--green-800)', fontSize: '1.05rem' }}>
              A student journey: Learn → Do Activity → Upload Evidence → Teacher Validates → Earn Badge → Contribute to Village Impact
            </strong>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center text-center">
            <span className="eyebrow">School Recognition</span>
            <h2>Six ways your school can be celebrated</h2>
          </div>
          <div className="badge-grid">
            {[
              'Soil Smart School',
              'Safe Farming Awareness School',
              'Composting Champion School',
              'Water Smart School',
              'Biodiversity Friendly School',
              'Sustainable Village Partner School'
            ].map(b => (
              <div className="badge-tile" key={b}>
                <div className="badge-tile__circle">✓</div>
                <div className="badge-tile__label">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-strip">
            <div>
              <h2>Ready to register your school?</h2>
              <p>Setup takes 5 minutes. Starter missions and teacher orientation included.</p>
            </div>
            <div className="cta-strip__buttons">
              <Link to="/register" className="btn btn--light">Register School →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
