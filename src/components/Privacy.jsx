import { Lock, Shield, CheckCircle } from 'lucide-react'

export default function Privacy() {
  return (
    <section className="privacy">
      <div className="container">
        <div className="privacy-content">
          <div className="privacy-visual">
            <div className="privacy-icon-wrapper">
              <Lock />
            </div>
          </div>
          <div className="privacy-text">
            <div className="section-badge">
              <Shield size={16} />
              <span>Data & Privacy</span>
            </div>
            <h2>Your Data Stays Yours</h2>
            <p>Complete privacy with local storage. No cloud sync, no third-party access, and full control over your personal information.</p>
            <ul className="feature-list">
              {[
                { icon: CheckCircle, title: 'Local Storage', desc: 'All data stored securely in SQLite database on your device' },
                { icon: CheckCircle, title: 'Export/Import', desc: 'JSON-based backup system for complete data portability' },
                { icon: CheckCircle, title: 'No Limits', desc: 'Store unlimited entries across all categories' },
                { icon: CheckCircle, title: 'Complete Control', desc: 'Export, reset, or delete your data anytime' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <li key={i}>
                    <Icon />
                    <div>
                      <strong>{item.title}</strong>
                      <span>{item.desc}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
