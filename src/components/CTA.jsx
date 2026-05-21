import { Bug } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function CTA() {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Transform Your Daily Habits?</h2>
          <p>Join the journey towards better financial health, physical wellness, and mental well-being.</p>
          <div className="cta-buttons">
            <a href="https://github.com/nsk6704/UpWell" target="_blank" className="btn-cta" rel="noreferrer">
              <FaGithub size={20} />
              View on GitHub
            </a>
            <a href="https://github.com/nsk6704/UpWell/issues" target="_blank" className="btn-cta-outline" rel="noreferrer">
              <Bug size={20} />
              Report an Issue
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
