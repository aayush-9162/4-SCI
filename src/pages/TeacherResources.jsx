import { Link } from 'react-router-dom'

const resources = [
  { tag: 'Setup', title: 'Soil Smart Club: starter kit', desc: 'Charter, member list template, first-week activities and orientation slides.' },
  { tag: 'Curriculum', title: 'Kitchen garden lesson plans (Grades 6–10)', desc: 'Aligned to NCERT outcomes — Science, Geography, Environmental Studies.' },
  { tag: 'Mission Guide', title: 'How to run "Know Your Soil"', desc: 'Materials list, safety notes, evidence checklist and validation tips.' },
  { tag: 'Mission Guide', title: 'How to run "Build Compost"', desc: 'Six-week timeline, weekly observation prompts and parent communication.' },
  { tag: 'Evidence', title: 'What good student evidence looks like', desc: 'Examples of strong vs weak photo, survey and report evidence.' },
  { tag: 'Reporting', title: 'Auto-generating your school report', desc: 'A walk-through of the school report builder and how to share with your DEO.' },
  { tag: 'Awards', title: 'Recommending students for awards', desc: 'Criteria, nomination form, and the recognition calendar.' },
  { tag: 'Community', title: 'Hosting a Farmer Interaction Day', desc: 'Run sheet, invitation template, simple-language talking points.' }
]

export default function TeacherResources() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Teacher Resources</span>
          <h1>Run a Soil Smart Club with confidence.</h1>
          <p className="lead">
            Lesson plans, mission guides, validation tips and reporting templates — designed for teachers
            who don't have time to design from scratch.
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
                <Link to="#" style={{ display: 'inline-block', marginTop: 12, fontWeight: 600 }}>Open resource →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="cta-strip">
            <div>
              <h2>Need a printed starter kit?</h2>
              <p>We ship a free starter kit to every newly registered school, including badges, lesson cards and a Soil Smart Club banner.</p>
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
