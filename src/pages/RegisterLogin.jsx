import { useState } from 'react'

export default function RegisterLogin() {
  const [tab, setTab] = useState('register')
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Register / Login</span>
          <h1>Join the 4-SCI movement.</h1>
          <p className="lead">
            Whether you're a school, a teacher, a student leader or a community partner — get started in minutes.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="auth-wrap">
            <div className="auth-card">
              <div className="auth-tabs">
                <button className={`auth-tab ${tab === 'register' ? 'active' : ''}`} onClick={() => { setTab('register'); setSubmitted(false) }}>Register</button>
                <button className={`auth-tab ${tab === 'login' ? 'active' : ''}`} onClick={() => { setTab('login'); setSubmitted(false) }}>Login</button>
              </div>

              {submitted ? (
                <div style={{ padding: 30, textAlign: 'center' }}>
                  <div style={{ fontSize: '2.4rem', margin: '0 auto 14px', width: 64, height: 64, borderRadius: '50%', background: 'var(--green-100)', color: 'var(--green-800)', display: 'grid', placeItems: 'center' }}>✓</div>
                  <h3 style={{ marginBottom: 8 }}>Thank you!</h3>
                  <p>We've received your details. Our team will reach out within 2 working days to onboard you.</p>
                </div>
              ) : tab === 'register' ? (
                <form onSubmit={onSubmit}>
                  <div className="field">
                    <label>I am a…</label>
                    <select required>
                      <option>School / Teacher</option>
                      <option>Student leader</option>
                      <option>NGO / Community partner</option>
                      <option>Government / CSR</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Full Name</label>
                    <input required placeholder="Your name" />
                  </div>
                  <div className="field">
                    <label>School / Organisation</label>
                    <input required placeholder="Govt. UM School, Sehore" />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div className="field">
                      <label>State</label>
                      <input required placeholder="e.g. Madhya Pradesh" />
                    </div>
                    <div className="field">
                      <label>District</label>
                      <input required placeholder="e.g. Sehore" />
                    </div>
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" required placeholder="you@school.gov.in" />
                  </div>
                  <div className="field">
                    <label>Phone</label>
                    <input type="tel" required placeholder="+91 ..." />
                  </div>
                  <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>Register →</button>
                </form>
              ) : (
                <form onSubmit={onSubmit}>
                  <div className="field">
                    <label>Email or Phone</label>
                    <input required placeholder="you@school.gov.in" />
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <input type="password" required placeholder="••••••••" />
                  </div>
                  <div style={{ textAlign: 'right', marginBottom: 16 }}>
                    <a href="#" style={{ fontSize: '.86rem' }}>Forgot password?</a>
                  </div>
                  <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>Login →</button>
                </form>
              )}
            </div>

            <div className="auth-side">
              <div>
                <span className="eyebrow" style={{ background: 'rgba(255,255,255,.12)', color: '#B7E4C7' }}>What you get</span>
                <h2>A complete platform for your Soil Smart Club</h2>
                <ul>
                  <li>Student & teacher dashboards</li>
                  <li>Mission library with starter badges</li>
                  <li>Activity upload & badge engine</li>
                  <li>School & village impact dashboard</li>
                  <li>Auto-generated certificates and reports</li>
                  <li>Free starter kit shipped to your school</li>
                </ul>
              </div>
              <div style={{ fontSize: '.86rem', color: 'rgba(255,255,255,.7)' }}>
                Need help? Email <strong style={{ color: '#fff' }}>hello@4-sci.org</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
