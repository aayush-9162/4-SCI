import { Link } from 'react-router-dom'

const resources = [
  { tag: 'Soil', title: 'Soil sampling — the simple, correct way', desc: 'Take a representative soil sample in 5 minutes using only a stick, a clean bag and a label.' },
  { tag: 'Fertilizer', title: 'Balanced fertilizer: right time, right quantity', desc: 'A two-page guide to avoiding overuse and getting better yield without spending more.' },
  { tag: 'Pesticide', title: 'Safe handling of pesticides at home & farm', desc: 'Storage, mixing, spraying, disposal — and what to do if exposure happens.' },
  { tag: 'Compost', title: 'Build a compost pit with farm and kitchen waste', desc: 'Step-by-step, with photos, for a 1m × 1m pit that gives you compost in 8–10 weeks.' },
  { tag: 'Water', title: 'Mulching and moisture conservation', desc: 'Save 30% irrigation water using locally available straw, leaves and crop residue.' },
  { tag: 'Biodiversity', title: 'Pollinator-friendly farm corners', desc: 'Why even a 2m × 2m flowering corner around your field improves yield.' },
  { tag: 'Climate', title: 'Spotting crop stress early', desc: 'Visual indicators of heat, drought and water stress — and what to do.' },
  { tag: 'Demo', title: 'Run a demo plot, prove a practice', desc: 'How to design a side-by-side comparison plot that convinces other farmers.' }
]

export default function FarmerResources() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Farmer Resources</span>
          <h1>Practical, low-cost guides for safer & smarter farming.</h1>
          <p className="lead">
            Plain-language resources you can read on your phone, share with a neighbour, and use on your field tomorrow.
            Translated into local languages where available.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cards-grid">
            {resources.map(r => (
              <article className="card" key={r.title}>
                <span className="story-card__tag">{r.tag}</span>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
                <Link to="#" style={{ display: 'inline-block', marginTop: 12, fontWeight: 600 }}>Read guide →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="feature-row">
            <div>
              <span className="eyebrow">Farmer Interaction Days</span>
              <h2>Learn from your local Soil Smart School</h2>
              <p>
                Schools host farmer days, soil sampling demos and compost workshops every month.
                Find one near you, or request your nearest school to host one.
              </p>
              <Link to="/register" className="btn btn--primary">Find My Nearest School →</Link>
            </div>
            <div className="feature-illustration">
              <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet" width="100%" height="100%">
                <rect width="400" height="300" fill="#FFF8EC" rx="24"/>
                <circle cx="120" cy="160" r="40" fill="#74C69D"/>
                <circle cx="200" cy="140" r="50" fill="#2D6A4F"/>
                <circle cx="280" cy="170" r="38" fill="#E76F51"/>
                <path d="M0,230 Q200,210 400,230 L400,300 L0,300 Z" fill="#52B788"/>
                <text x="200" y="270" textAnchor="middle" fontSize="14" fill="#1B4332" fontWeight="700">Farmers · Students · Teachers</text>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
