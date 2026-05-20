const techs = [
  { icon: 'fa-react', title: 'React Native', desc: 'Cross-platform mobile framework', version: '0.81.5', color: null },
  { icon: 'fa-mobile-alt', title: 'Expo', desc: 'Development platform & build tooling', version: '54.0.30', color: '#000' },
  { icon: 'fa-js', title: 'TypeScript', desc: 'Type-safe JavaScript', version: '5.9.2', color: '#3178c6' },
  { icon: 'fa-database', title: 'SQLite', desc: 'Local database storage', version: 'expo-sqlite', color: '#003b57' },
  { icon: 'fa-layer-group', title: 'React Context', desc: 'Global state management', version: 'Built-in', color: '#764abc' },
  { icon: 'fa-calendar-alt', title: 'date-fns', desc: 'Date manipulation & formatting', version: 'Latest', color: '#770c56' },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="tech-stack">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Built with Modern Technology</h2>
          <p className="section-subtitle">Leveraging the best tools for a seamless cross-platform experience</p>
        </div>
        <div className="tech-grid">
          {techs.map((tech, i) => (
            <div className="tech-card" key={i}>
              <div className="tech-icon" style={tech.color ? { color: tech.color } : undefined}>
                <i className={`fab ${tech.icon}`}></i>
              </div>
              <h4>{tech.title}</h4>
              <p>{tech.desc}</p>
              <span className="tech-version">{tech.version}</span>
            </div>
          ))}
        </div>
        <div className="platform-badges">
          {[
            { icon: 'fa-android', label: 'Android' },
            { icon: 'fa-shield-alt', label: 'Privacy First' },
            { icon: 'fa-code-branch', label: 'Open Source' },
          ].map((badge, i) => (
            <div className="badge-item" key={i}>
              <i className={`fas ${badge.icon}`}></i>
              <span>{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
