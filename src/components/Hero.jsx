export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fab fa-android"></i>
            <span>Android Only (Currently) • Open Source • Privacy First</span>
          </div>
          <h1 className="hero-title">
            Your All-in-One Companion for <span className="gradient-text">Better Living</span>
          </h1>
          <p className="hero-description">
            Track habits, manage finances, and cultivate well-being. UpWell brings all aspects of your personal wellness into one beautifully designed mobile experience.
          </p>
          <div className="hero-buttons">
            <a href="https://github.com/nsk6704/UpWell" target="_blank" className="btn-hero" rel="noreferrer">
              <i className="fab fa-github"></i>
              Get Started
            </a>
            <a href="#features" className="btn-secondary">
              Explore Features
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <i className="fas fa-chart-line"></i>
              <div>
                <div className="stat-number">12+</div>
                <div className="stat-label">Level Progression</div>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-database"></i>
              <div>
                <div className="stat-number">Local</div>
                <div className="stat-label">Data Storage</div>
              </div>
            </div>
            <div className="stat-item">
              <i className="fas fa-shield-alt"></i>
              <div>
                <div className="stat-number">100%</div>
                <div className="stat-label">Privacy First</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="decoration-circle circle-1"></div>
        <div className="decoration-circle circle-2"></div>
        <div className="decoration-circle circle-3"></div>
      </div>
    </section>
  )
}
