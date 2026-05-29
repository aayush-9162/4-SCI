import { Link } from 'react-router-dom'
import { domains, missions } from '../data/domains.js'

const padId = (n) => String(n).padStart(2, '0')

export default function SkillsMissions() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Skills & Missions</span>
          <h1>12 domains. 60+ practical skills. Endless missions.</h1>
          <p className="lead">
            The complete skill library for students, teachers and community facilitators — each domain comes with
            a focus area, five practical skills and one key skill to master.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {domains.map(d => (
            <div className="skill-block" key={d.id}>
              <div className="skill-block__head">
                <div className="skill-block__thumb">
                  <img src={`/domains/${padId(d.id)}.png`} alt={d.title} loading="lazy" />
                </div>
                <div className="skill-block__title-wrap">
                  <span className="skill-block__pill" style={{ background: d.color }}>Domain {d.id} · {d.tagline}</span>
                  <h3>{d.title}</h3>
                  <p className="skill-block__focus"><strong>Focus:</strong> {d.focus}</p>
                  <Link to={`/domains/${d.slug}`} className="skill-block__open" style={{ color: d.color }}>
                    Open domain page →
                  </Link>
                </div>
              </div>
              <table className="skill-table">
                <thead>
                  <tr><th style={{ width: '38%' }}>Skill</th><th>Practical Use</th></tr>
                </thead>
                <tbody>
                  {d.skills.map(([s, u]) => (
                    <tr key={s}><td><strong>{s}</strong></td><td>{u}</td></tr>
                  ))}
                </tbody>
              </table>
              <div className="skill-block__key">
                <strong>Most important practical skill:</strong> {d.keySkill}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Mission examples</span>
            <h2>Pick a mission, earn a badge, change your village.</h2>
          </div>
          <div className="mission-grid">
            {missions.map((m, i) => (
              <div className="mission-card" key={m.title} style={{ '--mission-color': m.color }}>
                <div className="mission-card__head">
                  <span className="mission-card__num">Mission {String(i + 1).padStart(2, '0')}</span>
                  <h3>{m.title}</h3>
                  <span className="mission-card__badge">★ {m.badge}</span>
                </div>
                <ul className="mission-card__list">{m.activities.map(a => <li key={a}>{a}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
