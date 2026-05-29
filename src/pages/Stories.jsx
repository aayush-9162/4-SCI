import { Link } from 'react-router-dom'

const stories = [
  {
    tag: 'Madhya Pradesh',
    title: 'How a Class 8 club turned 40 households to compost',
    excerpt: 'In Sehore district, a Soil Smart Club began with one compost pit and now supports composting in 40+ village households.',
    img: '/img/story-compost.jpg',
    school: 'Govt. UM School, Sehore'
  },
  {
    tag: 'Karnataka',
    title: 'A pollinator corner that doubled chilli yield',
    excerpt: 'Students mapped pollinators and convinced two farmers to leave a flowering strip — yield rose visibly.',
    img: '/img/story-pollinator.jpg',
    school: 'ZP School, Tumakuru'
  },
  {
    tag: 'Maharashtra',
    title: 'Safe pesticide use — a campaign by 12-year-olds',
    excerpt: 'Posters, role-plays and a farmer meeting reduced unsafe pesticide handling in Hinganghat block.',
    img: '/img/story-campaign.jpg',
    school: 'ZP Marathi School, Hinganghat'
  },
  {
    tag: 'Rajasthan',
    title: '"We saved 40% water with mulching"',
    excerpt: 'A demo plot run by students convinced families to mulch — saving water in a drought-prone year.',
    img: '/img/story-water.jpg',
    school: 'Govt. Sr. Sec. School, Pali'
  },
  {
    tag: 'Tamil Nadu',
    title: 'Vermicompost as a school-led business',
    excerpt: 'A Class 10 club is selling vermicompost to neighbouring farms and funding more village missions.',
    img: '/img/story-vermicompost.jpg',
    school: 'Panchayat School, Madurai'
  },
  {
    tag: 'Odisha',
    title: 'Mapping every village water point',
    excerpt: 'Using basic GIS skills, students built a water-points map for their gram panchayat.',
    img: '/img/story-watermap.jpg',
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
            {stories.map((s, i) => (
              <article className="story-card" key={s.title} data-reveal style={{ '--reveal-delay': `${(i % 3) * 0.08}s` }}>
                <div className="story-card__img">
                  <img src={s.img} alt={s.title} loading="lazy" />
                </div>
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
