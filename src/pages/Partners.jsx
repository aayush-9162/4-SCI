import { Link } from 'react-router-dom'

const partners = [
  'PM POSHAN', 'NCERT', 'KVK Network', 'State Education Depts.', 'Krishi Vigyan Kendras',
  'Panchayati Raj Inst.', 'NGO Network', 'CSR Foundations', 'Soil Health Labs',
  'NABARD', 'ICAR', 'Universities', 'Sustainability Networks', 'UNICEF India',
  'WWF India', 'UN Decade — Ecosystem'
]

const partnerTypes = [
  ['Government', 'State and central departments aligning 4-SCI with school education, agriculture and rural development.'],
  ['CSR & Foundations', 'Funding partners adopting districts or states, with full impact reporting.'],
  ['Research & Academia', 'Universities and KVKs contributing expertise, training and validation.'],
  ['NGOs & Field Partners', 'On-ground partners running farmer days, training and village engagement.']
]

export default function Partners() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Partners</span>
          <h1>Stronger together, greater impact.</h1>
          <p className="lead">
            4-SCI is built on Partnership & Convergence — linking schools, panchayats, KVKs, NGOs and CSR partners
            into one shared sustainability mission.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our ecosystem</span>
            <h2>Partner with us</h2>
          </div>
          <div className="cards-grid">
            {partnerTypes.map(([t, d]) => (
              <div className="card" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-head section-head--center text-center">
            <span className="eyebrow">Allied with</span>
            <h2>Institutions in the 4-SCI network</h2>
          </div>
          <div className="partner-grid">
            {partners.map(p => <div className="partner-tile" key={p}>{p}</div>)}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-strip">
            <div>
              <h2>Become a 4-SCI partner</h2>
              <p>Adopt a district, fund a state programme, or contribute expertise. We'd love to talk.</p>
            </div>
            <div className="cta-strip__buttons">
              <a href="mailto:partners@4-sci.org" className="btn btn--light">partners@4-sci.org</a>
              <Link to="/about" className="btn btn--white-outline">Learn More</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
