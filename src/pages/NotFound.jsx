import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>This page hasn't sprouted yet.</h1>
        <p className="lead" style={{ margin: '0 auto 24px' }}>Try heading back to the homepage and exploring our 12 sustainability domains.</p>
        <Link to="/" className="btn btn--primary">Back to Home</Link>
      </div>
    </section>
  )
}
