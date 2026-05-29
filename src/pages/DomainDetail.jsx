import { useParams, Link } from 'react-router-dom'
import { domains, domainDetails, getDomainBySlug } from '../data/domains.js'
import NotFound from './NotFound.jsx'

const padId = (n) => String(n).padStart(2, '0')

export default function DomainDetail() {
  const { slug } = useParams()
  const domain = getDomainBySlug(slug)
  const detail = domain ? domainDetails[domain.id] : null

  if (!domain || !detail) return <NotFound />

  const prev = domains.find(d => d.id === domain.id - 1)
  const next = domains.find(d => d.id === domain.id + 1)

  return (
    <>
      {/* Domain hero */}
      <section className="domain-hero" style={{ '--dc': domain.color }}>
        <div className="container domain-hero__inner">
          <div className="domain-hero__text">
            <Link to="/skills-missions" className="domain-hero__back">← All domains</Link>
            <span className="domain-hero__num">Domain {padId(domain.id)}</span>
            <h1>{domain.title}</h1>
            <p className="domain-hero__tag">{domain.tagline}</p>
            <p className="domain-hero__focus"><strong>Focus:</strong> {domain.focus}</p>
          </div>
          <div className="domain-hero__art">
            <img src={`/domains/${padId(domain.id)}.png`} alt={domain.title} />
          </div>
        </div>
      </section>

      {/* Flow: Skills → Mission → Activity → Evidence → Badge → Community Impact */}
      <section className="section">
        <div className="container">
          <div className="dflow">

            {/* Skills */}
            <div className="dflow__row">
              <div className="dflow__marker"><span>1</span></div>
              <div className="dflow__card">
                <span className="dflow__label" style={{ color: domain.color }}>Skills</span>
                <h3>5 practical skills you'll build</h3>
                <ol className="dflow__skills">
                  {domain.skills.map(([s, u]) => (
                    <li key={s}>
                      <strong>{s}</strong>
                      <span>{u}</span>
                    </li>
                  ))}
                </ol>
                <div className="dflow__key" style={{ borderColor: domain.color }}>
                  <strong>Most important skill:</strong> {domain.keySkill}
                </div>
              </div>
            </div>

            {/* Mission */}
            <div className="dflow__row">
              <div className="dflow__marker"><span>2</span></div>
              <div className="dflow__card">
                <span className="dflow__label" style={{ color: domain.color }}>Mission</span>
                <h3>{detail.mission}</h3>
                <p className="muted">A guided action challenge for your Soil Smart Club.</p>
              </div>
            </div>

            {/* Activity */}
            <div className="dflow__row">
              <div className="dflow__marker"><span>3</span></div>
              <div className="dflow__card">
                <span className="dflow__label" style={{ color: domain.color }}>Activities</span>
                <h3>Complete these field tasks</h3>
                <ul className="dflow__activities">
                  {detail.activities.map((a, i) => (
                    <li key={a}><span className="dflow__act-num" style={{ background: domain.color }}>{i + 1}</span>{a}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Evidence */}
            <div className="dflow__row">
              <div className="dflow__marker"><span>4</span></div>
              <div className="dflow__card">
                <span className="dflow__label" style={{ color: domain.color }}>Evidence</span>
                <h3>Submit your proof</h3>
                <div className="dflow__evidence">
                  <span>📷 Photo / Video</span>
                  <span>📝 Report / Survey file</span>
                </div>
                <p className="muted" style={{ marginTop: 14 }}>Your teacher validates the upload before the badge is awarded.</p>
              </div>
            </div>

            {/* Badge */}
            <div className="dflow__row">
              <div className="dflow__marker"><span>5</span></div>
              <div className="dflow__card">
                <span className="dflow__label" style={{ color: domain.color }}>Badge</span>
                <div className="dflow__badge">
                  <div className="dflow__badge-circle" style={{ background: domain.color }}>★</div>
                  <div>
                    <h3 style={{ margin: 0 }}>{detail.badge}</h3>
                    <p className="muted" style={{ margin: 0 }}>Earned on mission completion</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Impact */}
            <div className="dflow__row">
              <div className="dflow__marker dflow__marker--end"><span>✓</span></div>
              <div className="dflow__card dflow__card--impact" style={{ background: domain.color }}>
                <span className="dflow__label" style={{ color: '#fff' }}>Community Impact</span>
                <p>{detail.communityImpact}</p>
              </div>
            </div>

          </div>

          {/* Prev / Next */}
          <div className="domain-nav">
            {prev ? (
              <Link to={`/domains/${prev.slug}`} className="domain-nav__link">
                <span>← Previous domain</span>
                <strong>{prev.title}</strong>
              </Link>
            ) : <span />}
            {next ? (
              <Link to={`/domains/${next.slug}`} className="domain-nav__link domain-nav__link--next">
                <span>Next domain →</span>
                <strong>{next.title}</strong>
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--tight">
        <div className="container">
          <div className="cta-strip">
            <div>
              <h2>Ready to start this mission?</h2>
              <p>Register your school's Soil Smart Club and assign “{detail.mission}” to your students.</p>
            </div>
            <div className="cta-strip__buttons">
              <Link to="/register" className="btn btn--light">Register school</Link>
              <Link to="/skills-missions" className="btn btn--white-outline">All domains</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
