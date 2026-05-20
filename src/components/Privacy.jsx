export default function Privacy() {
  return (
    <section className="privacy">
      <div className="container">
        <div className="privacy-content">
          <div className="privacy-visual">
            <div className="privacy-icon-wrapper">
              <i className="fas fa-lock"></i>
            </div>
          </div>
          <div className="privacy-text">
            <div className="section-badge">
              <i className="fas fa-shield-alt"></i>
              <span>Data & Privacy</span>
            </div>
            <h2>Your Data Stays Yours</h2>
            <p>Complete privacy with local storage. No cloud sync, no third-party access, and full control over your personal information.</p>
            <ul className="feature-list">
              {[
                { icon: 'fa-check-circle', title: 'Local Storage', desc: 'All data stored securely in SQLite database on your device' },
                { icon: 'fa-check-circle', title: 'Export/Import', desc: 'JSON-based backup system for complete data portability' },
                { icon: 'fa-check-circle', title: 'No Limits', desc: 'Store unlimited entries across all categories' },
                { icon: 'fa-check-circle', title: 'Complete Control', desc: 'Export, reset, or delete your data anytime' },
              ].map((item, i) => (
                <li key={i}>
                  <i className={`fas ${item.icon}`}></i>
                  <div>
                    <strong>{item.title}</strong>
                    <span>{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
