export default function Gamification() {
  return (
    <section className="gamification">
      <div className="container">
        <div className="gamification-content">
          <div className="gamification-text">
            <div className="section-badge">
              <i className="fas fa-trophy"></i>
              <span>Gamification System</span>
            </div>
            <h2>Stay Motivated with Every Action</h2>
            <p>Transform your daily habits into an engaging journey. Earn experience points, level up, and maintain streaks across all categories.</p>
            <ul className="feature-list">
              {[
                { icon: 'fa-check-circle', title: 'Experience Points', desc: 'Earn XP for every positive action across categories' },
                { icon: 'fa-check-circle', title: 'Level Progression', desc: 'Advance through 12+ levels from Beginner to Immortal' },
                { icon: 'fa-check-circle', title: 'Streak Calendar', desc: 'GitHub-style heatmap tracking your consistency' },
                { icon: 'fa-check-circle', title: 'Weekly Summaries', desc: 'Gratitude and progress aggregated weekly' },
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
          <div className="gamification-visual">
            <div className="level-card">
              <div className="level-header">
                <i className="fas fa-crown"></i>
                <span>Level 7</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '65%' }}></div>
              </div>
              <div className="xp-text">6,500 / 10,000 XP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
