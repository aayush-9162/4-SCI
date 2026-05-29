import { Link } from 'react-router-dom'

const padId = (n) => String(n).padStart(2, '0')

export default function DomainCard({ domain }) {
  return (
    <Link
      className="domain-card"
      to={`/domains/${domain.slug}`}
      title={`${domain.id}. ${domain.title}`}
      aria-label={`Domain ${domain.id}: ${domain.title} — ${domain.tagline}`}
    >
      <img
        src={`/domains/${padId(domain.id)}.png`}
        alt={`${domain.title} — ${domain.tagline}`}
        loading="lazy"
      />
    </Link>
  )
}
