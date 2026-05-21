import { Atom, Smartphone, FileJson, Database, Layers, Shield, GitBranch } from 'lucide-react'

const techs = [
  { icon: Atom, title: 'React Native', desc: 'Cross-platform mobile framework', version: '0.81.5', color: null },
  { icon: Smartphone, title: 'Expo', desc: 'Development platform & build tooling', version: '54.0.30', color: '#000' },
  { icon: FileJson, title: 'TypeScript', desc: 'Type-safe JavaScript', version: '5.9.2', color: '#3178c6' },
  { icon: Database, title: 'SQLite', desc: 'Local database storage', version: 'expo-sqlite', color: '#003b57' },
  { icon: Layers, title: 'React Context', desc: 'Global state management', version: 'Built-in', color: '#764abc' },
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
          {techs.map((tech, i) => {
            const Icon = tech.icon
            return (
              <div className="tech-card" key={i}>
                <div className="tech-icon" style={tech.color ? { color: tech.color } : undefined}>
                  <Icon />
                </div>
                <h4>{tech.title}</h4>
                <p>{tech.desc}</p>
                <span className="tech-version">{tech.version}</span>
              </div>
            )
          })}
        </div>
        <div className="platform-badges">
          {[
            { icon: Smartphone, label: 'Android' },
            { icon: Shield, label: 'Privacy First' },
            { icon: GitBranch, label: 'Open Source' },
          ].map((badge, i) => {
            const BadgeIcon = badge.icon
            return (
              <div className="badge-item" key={i}>
                <BadgeIcon />
                <span>{badge.label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
