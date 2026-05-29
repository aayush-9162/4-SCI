import { impactStats, studentBadges, schoolRecognition, villageRecognition } from '../data/domains.js'

const stateData = [
  ['Madhya Pradesh', 412, 84],
  ['Karnataka', 365, 78],
  ['Maharashtra', 320, 72],
  ['Rajasthan', 280, 66],
  ['Tamil Nadu', 245, 70],
  ['Uttar Pradesh', 230, 60],
  ['Odisha', 198, 64],
  ['Bihar', 175, 55]
]

export default function ImpactDashboard() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Impact Dashboard</span>
          <h1>The 4-SCI impact, in real time.</h1>
          <p className="lead">
            A snapshot of what schools, students, teachers and farmers are building together —
            updated as evidence is uploaded across the country.
          </p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">National Pulse</span>
            <h2>Six headline numbers</h2>
          </div>
          <div className="stats-grid">
            {impactStats.map(s => (
              <div className="stat-card" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="dash-grid">
            <div className="dash">
              <h3 style={{ marginBottom: 18 }}>State-wise participation</h3>
              {stateData.map(([s, count, pct]) => (
                <div key={s} style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.94rem', marginBottom: 6 }}>
                    <strong style={{ color: 'var(--green-900)' }}>{s}</strong>
                    <span style={{ color: 'var(--muted)' }}>{count} schools</span>
                  </div>
                  <div className="bar"><span style={{ width: pct + '%' }} /></div>
                </div>
              ))}
            </div>

            <div className="dash">
              <h3 style={{ marginBottom: 18 }}>Top domain activity</h3>
              {[
                ['Soil Health', 92],
                ['Compost & Organic', 84],
                ['Water Care', 78],
                ['Pollinators', 64],
                ['Safe Inputs', 56],
                ['Demo Plots', 42]
              ].map(([d, p]) => (
                <div key={d} style={{ marginBottom: 14 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.94rem', marginBottom: 6 }}>
                    <strong style={{ color: 'var(--green-900)' }}>{d}</strong>
                    <span style={{ color: 'var(--green-700)' }}>{p}%</span>
                  </div>
                  <div className="bar"><span style={{ width: p + '%' }} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Recognition System</span>
            <h2>Badges and recognitions awarded</h2>
          </div>

          <h3 style={{ marginTop: 20 }}>Student Badges</h3>
          <div className="badge-grid">
            {studentBadges.map(b => (
              <div className="badge-tile" key={b}>
                <div className="badge-tile__circle">★</div>
                <div className="badge-tile__label">{b}</div>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: 36 }}>School Recognition</h3>
          <div className="badge-grid">
            {schoolRecognition.map(b => (
              <div className="badge-tile" key={b}>
                <div className="badge-tile__circle" style={{ background: 'linear-gradient(140deg, #B7E4C7, #40916C)' }}>✓</div>
                <div className="badge-tile__label">{b}</div>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: 36 }}>Village Recognition</h3>
          <div className="badge-grid">
            {villageRecognition.map(b => (
              <div className="badge-tile" key={b}>
                <div className="badge-tile__circle" style={{ background: 'linear-gradient(140deg, #F4A261, #E76F51)' }}>♦</div>
                <div className="badge-tile__label">{b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
