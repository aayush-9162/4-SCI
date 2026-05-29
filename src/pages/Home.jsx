import { Link } from 'react-router-dom'
import { domains, missions, impactStats } from '../data/domains.js'
import DomainCard from '../components/DomainCard.jsx'

const flow = [
  { label: 'Domain', desc: 'Sustainability area' },
  { label: 'Skill', desc: 'Practical capability' },
  { label: 'Mission', desc: 'Action challenge' },
  { label: 'Activity', desc: 'Field-level task' },
  { label: 'Evidence', desc: 'Photo, survey, video' },
  { label: 'Badge', desc: 'Recognition' },
  { label: 'Impact', desc: 'Village change' }
]

export default function Home() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section className="hero">
        <div className="container">
          <div className="hero__top">
            <span className="hero__kicker">Soil Smart Schools · Sustainable Communities</span>
            <h1 className="hero__title">
              Healthy soil. <em>Safer farming.</em> Stronger villages.
            </h1>
            <p className="hero__sub">
              A school–community platform where students learn practical green skills, farmers adopt
              safer practices, and villages track real sustainability progress.
            </p>
          </div>

          <div className="hero__domains">
            <div className="hero__domains-head">
              <span className="hero__domains-label">The 12 sustainability domains</span>
              <Link to="/skills-missions" className="hero__domains-link">View skill library →</Link>
            </div>
            <div className="domain-grid">
              {domains.map(d => <DomainCard key={d.id} domain={d} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROMISE ============ */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Our core promise</span>
            <h2>From a school kitchen garden to village-wide change.</h2>
            <p className="lead">
              4-SCI promotes experiential sustainability learning through School Kitchen Gardens that function as
              living laboratories for soil health, safe farming, biodiversity conservation, water stewardship,
              and climate-smart agriculture.
            </p>
          </div>

          <div className="pillars">
            <div className="pillar" data-reveal>
              <span className="pillar__num">01</span>
              <h3>Students build green skills</h3>
              <p>Hands-on field learning across 12 sustainability domains, validated by teachers and recognised with badges.</p>
            </div>
            <div className="pillar" data-reveal style={{ '--reveal-delay': '.1s' }}>
              <span className="pillar__num">02</span>
              <h3>Farmers adopt safer practices</h3>
              <p>Practical, low-cost advice on balanced fertilizer, safe inputs, compost, water-saving and pollinator care.</p>
            </div>
            <div className="pillar" data-reveal style={{ '--reveal-delay': '.2s' }}>
              <span className="pillar__num">03</span>
              <h3>Villages track real progress</h3>
              <p>Soil tests, compost units, demo plots, water-saving practices — visible on a live community dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FLOW ============ */}
      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">How it works</span>
            <h2>Domain → Skill → Mission → Activity → Evidence → Badge → Impact.</h2>
            <p className="lead">A clear learning path that turns every classroom lesson into a verifiable village outcome.</p>
          </div>
          <div className="steps" data-reveal>
            {flow.map((s, i) => (
              <div className="step" key={s.label}>
                <div className="step__icon">{String(i + 1).padStart(2, '0')}</div>
                <div className="step__label">{s.label}</div>
                <div className="step__desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ MISSIONS ============ */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Sample missions</span>
            <h2>Guided, badge-earning challenges.</h2>
            <p className="lead">
              Missions are designed so a student can complete them with simple tools, a phone camera and a curious mind.
            </p>
          </div>
          <div className="mission-grid">
            {missions.map((m, i) => (
              <div className="mission-card" key={m.title} data-reveal style={{ '--mission-color': m.color, '--reveal-delay': `${i * 0.08}s` }}>
                <div className="mission-card__num">M·{String(i + 1).padStart(2, '0')}</div>
                <div className="mission-card__sub">Badge — {m.badge}</div>
                <h3>{m.title}</h3>
                <ul>{m.activities.map(a => <li key={a}>{a}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ SCHOOL ============ */}
      <section className="section">
        <div className="container">
          <div className="feature-row" data-reveal>
            <div>
              <span className="eyebrow">For Schools</span>
              <h2>Turn your kitchen garden into a living laboratory.</h2>
              <p>
                Register your Soil Smart Club, run guided missions, validate student evidence and earn recognition
                for your school — all from one teacher dashboard.
              </p>
              <ul className="feature-bullets">
                <li>Add students, assign missions, track class progress</li>
                <li>Validate uploads and award badges</li>
                <li>Organise farmer interaction days</li>
                <li>Auto-generate school sustainability reports</li>
              </ul>
              <Link to="/soil-smart-schools" className="btn btn--primary">Open the school playbook</Link>
            </div>
            <div className="feature-illustration feature-illustration--photo">
              <img src="/img/schools-garden.jpg" alt="A freshly harvested kitchen-garden trug of vegetables" loading="lazy" />
            </div>
          </div>

          <div className="divider" style={{ margin: '80px 0' }}></div>

          <div className="feature-row feature-row--reverse" data-reveal>
            <div>
              <span className="eyebrow">For Villages & Farmers</span>
              <h2>A community dashboard your panchayat can be proud of.</h2>
              <p>
                Watch your village sustainability score climb as soil tests are conducted, compost units come online,
                demo plots prove safer practices, and pollinator gardens take root.
              </p>
              <ul className="feature-bullets">
                <li>Soil tests, compost units & demo plots tracked live</li>
                <li>Farmer meetings & safe-input awareness sessions</li>
                <li>Pollinator gardens and water-saving practices</li>
                <li>Village sustainability score and recognition</li>
              </ul>
              <Link to="/sustainable-villages" className="btn btn--primary">See a village dashboard</Link>
            </div>
            <div className="feature-illustration feature-illustration--photo">
              <img src="/img/village-community.jpg" alt="Villagers working together in lush green paddy fields" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ============ IMPACT ============ */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Live impact pulse</span>
            <h2>What schools and villages are building together.</h2>
            <p className="lead">A snapshot of activity flowing in from Soil Smart Clubs across India — updated as schools and farmers upload evidence.</p>
          </div>
          <div className="stats-grid">
            {impactStats.map((s, i) => (
              <div className="stat-card" key={s.label} data-reveal style={{ '--reveal-delay': `${i * 0.07}s` }}>
                <span className="stat-card__pill">{['Schools','Students','Compost','Villages','Farmers','Uploads'][i]}</span>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40 }}>
            <Link to="/impact" className="btn btn--white-outline">Open the live dashboard</Link>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="section section--tight">
        <div className="container">
          <div className="cta-strip" data-reveal>
            <div>
              <h2>Bring 4-SCI to your school or village.</h2>
              <p>Register today and we'll set up your Soil Smart Club, give you starter missions, and onboard your teachers.</p>
            </div>
            <div className="cta-strip__buttons">
              <Link to="/register" className="btn btn--light">Register school</Link>
              <Link to="/partners" className="btn btn--white-outline">Become a partner</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
