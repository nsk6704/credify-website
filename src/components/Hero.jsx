import { ArrowRight, TrendingUp, Database, Shield, Smartphone } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <Smartphone size={16} />
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
              <FaGithub size={20} />
              Get Started
            </a>
            <a href="#features" className="btn-secondary">
              Explore Features
              <ArrowRight size={16} />
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <TrendingUp />
              <div>
                <div className="stat-number">12+</div>
                <div className="stat-label">Level Progression</div>
              </div>
            </div>
            <div className="stat-item">
              <Database />
              <div>
                <div className="stat-number">Local</div>
                <div className="stat-label">Data Storage</div>
              </div>
            </div>
            <div className="stat-item">
              <Shield />
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
