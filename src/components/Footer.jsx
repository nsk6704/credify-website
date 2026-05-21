import { Briefcase, Mail } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <img src="/icon.png" alt="UpWell Logo" className="logo-img" />
              <span>UpWell</span>
            </div>
            <p>Your all-in-one companion for tracking habits, finances, and well-being.</p>
          </div>
          <div className="footer-column">
            <h4>Product</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#tech-stack">Tech Stack</a></li>
              <li><a href="https://github.com/nsk6704/UpWell" target="_blank" rel="noreferrer">Documentation</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li><a href="https://github.com/nsk6704/UpWell" target="_blank" rel="noreferrer">GitHub</a></li>
              <li><a href="https://github.com/nsk6704/UpWell/issues" target="_blank" rel="noreferrer">Issues</a></li>
              <li><a href="https://github.com/nsk6704/UpWell/blob/main/LICENSE" target="_blank" rel="noreferrer">License</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Connect</h4>
            <div className="social-links">
              <a href="https://github.com/nsk6704" target="_blank" aria-label="GitHub" rel="noreferrer">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/saketh-kashyap-nagendra/" target="_blank" aria-label="LinkedIn" rel="noreferrer">
                <Briefcase size={18} />
              </a>
              <a href="mailto:sakethkashyap.nagendra@gmail.com" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 UpWell. Licensed under BSD 3-Clause License.</p>
          <p>Made by Saketh</p>
        </div>
      </div>
    </footer>
  )
}
