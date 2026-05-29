import { Link } from 'react-router-dom'
import { villageRecognition } from '../data/domains.js'

const villageMetrics = [
  ['Soil tests conducted', '142', 75],
  ['Compost units created', '38', 60],
  ['Farmer meetings held', '24', 80],
  ['Demo plots created', '12', 45],
  ['Pesticide awareness sessions', '18', 70],
  ['Pollinator gardens created', '9', 50],
  ['Water-saving practices documented', '56', 90],
  ['Households reached', '420', 65]
]

export default function SustainableVillages() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Sustainable Villages</span>
          <h1>From schoolyard skills to village-wide change.</h1>
          <p className="lead">
            Every soil test, compost unit, demo plot and pollinator garden adds up to your village's
            sustainability score — visible to your panchayat, your farmers, and the world.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Community Dashboard Preview</span>
            <h2>What a Sustainable Village dashboard looks like</h2>
          </div>

          <div className="dash">
            <div className="dash-tiles-row">
              <div className="dash-tile">
                <strong>78</strong>
                <span>Village sustainability score</span>
                <div className="bar"><span style={{ width: '78%' }} /></div>
              </div>
              <div className="dash-tile">
                <strong>3</strong>
                <span>Soil Smart Schools active</span>
              </div>
              <div className="dash-tile">
                <strong>147</strong>
                <span>Student volunteers</span>
              </div>
              <div className="dash-tile">
                <strong>4</strong>
                <span>Recognitions earned</span>
              </div>
            </div>

            <div className="dash-grid">
              <div>
                <h4 style={{ marginBottom: 16 }}>Village Indicators</h4>
                {villageMetrics.map(([label, val, pct]) => (
                  <div key={label} style={{ marginBottom: 14 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.92rem', marginBottom: 4 }}>
                      <span style={{ color: 'var(--ink)' }}>{label}</span>
                      <strong style={{ color: 'var(--green-800)' }}>{val}</strong>
                    </div>
                    <div className="bar"><span style={{ width: pct + '%' }} /></div>
                  </div>
                ))}
              </div>

              <div>
                <h4 style={{ marginBottom: 16 }}>Recognitions Earned</h4>
                <div style={{ display: 'grid', gap: 10 }}>
                  {['Soil Smart Village', 'Water Smart Village', 'Composting Champion'].map(b => (
                    <div key={b} style={{ padding: 14, borderRadius: 12, background: 'var(--green-100)', display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--green-700)', color: '#fff', display: 'grid', placeItems: 'center', flexShrink: 0 }}>✓</span>
                      <strong style={{ color: 'var(--green-900)', fontSize: '.94rem' }}>{b}</strong>
                    </div>
                  ))}
                </div>
                <h4 style={{ marginTop: 22, marginBottom: 16 }}>Upcoming</h4>
                <p style={{ fontSize: '.92rem' }}>Next farmer interaction day: <strong>10 June 2026</strong> — topic: balanced fertilizer use.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center text-center">
            <span className="eyebrow">Village Recognition</span>
            <h2>Five ways your village earns recognition</h2>
          </div>
          <div className="badge-grid">
            {villageRecognition.map(b => (
              <div className="badge-tile" key={b}>
                <div className="badge-tile__circle" style={{ background: 'linear-gradient(140deg, #F4A261, #E76F51)' }}>★</div>
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
              <h2>Add your village to the map</h2>
              <p>Connect with a partner school and start building your village dashboard today.</p>
            </div>
            <div className="cta-strip__buttons">
              <Link to="/register" className="btn btn--light">Get Started</Link>
              <Link to="/partners" className="btn btn--white-outline">Find a Partner</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
