import { Link } from 'react-router-dom'

const stories = [
  {
    tag: 'Madhya Pradesh',
    title: 'How a Class 8 club turned 40 households to compost',
    excerpt: 'In Sehore district, a Soil Smart Club began with one compost pit and now supports composting in 40+ village households.',
    color: 'linear-gradient(135deg, #2D6A4F, #74C69D)',
    school: 'Govt. UM School, Sehore'
  },
  {
    tag: 'Karnataka',
    title: 'A pollinator corner that doubled chilli yield',
    excerpt: 'Students mapped pollinators and convinced two farmers to leave a flowering strip — yield rose visibly.',
    color: 'linear-gradient(135deg, #6A4C93, #E76F51)',
    school: 'ZP School, Tumakuru'
  },
  {
    tag: 'Maharashtra',
    title: 'Safe pesticide use — a campaign by 12-year-olds',
    excerpt: 'Posters, role-plays and a farmer meeting reduced unsafe pesticide handling in Hinganghat block.',
    color: 'linear-gradient(135deg, #E76F51, #F4A261)',
    school: 'ZP Marathi School, Hinganghat'
  },
  {
    tag: 'Rajasthan',
    title: '"We saved 40% water with mulching"',
    excerpt: 'A demo plot run by students convinced families to mulch — saving water in a drought-prone year.',
    color: 'linear-gradient(135deg, #3DA5D9, #1D3557)',
    school: 'Govt. Sr. Sec. School, Pali'
  },
  {
    tag: 'Tamil Nadu',
    title: 'Vermicompost as a school-led business',
    excerpt: 'A Class 10 club is selling vermicompost to neighbouring farms and funding more village missions.',
    color: 'linear-gradient(135deg, #1B998B, #2A9D8F)',
    school: 'Panchayat School, Madurai'
  },
  {
    tag: 'Odisha',
    title: 'Mapping every village water point',
    excerpt: 'Using basic GIS skills, students built a water-points map for their gram panchayat.',
    color: 'linear-gradient(135deg, #3DA5D9, #2D6A4F)',
    school: 'Govt. School, Kandhamal'
  }
]

export default function Stories() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Stories from Schools</span>
          <h1>Real schools. Real villages. Real change.</h1>
          <p className="lead">
            Read how Soil Smart Clubs across India are using practical green skills to transform their soil, their farms, and their communities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="story-grid">
            {stories.map(s => (
              <article className="story-card" key={s.title}>
                <div className="story-card__img" style={{ background: s.color }} />
                <div className="story-card__body">
                  <span className="story-card__tag">{s.tag}</span>
                  <h3>{s.title}</h3>
                  <p>{s.excerpt}</p>
                  <div className="story-card__meta">{s.school}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="cta-strip">
            <div>
              <h2>Have a story to share?</h2>
              <p>If your Soil Smart Club did something special, we'd love to feature it.</p>
            </div>
            <div className="cta-strip__buttons">
              <Link to="/register" className="btn btn--light">Submit Your Story</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
