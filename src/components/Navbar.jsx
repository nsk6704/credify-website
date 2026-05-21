import { FaGithub } from 'react-icons/fa'

export default function Navbar({ menuOpen, setMenuOpen }) {
  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const offset = 80
      const targetPosition = target.offsetTop - offset
      window.scrollTo({ top: targetPosition, behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar" id="navbar">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <img src="/icon.png" alt="UpWell Logo" className="logo-img" />
            <span>UpWell</span>
          </div>
          <a href="https://github.com/nsk6704/UpWell" target="_blank" className="btn-nav-cta nav-center" rel="noreferrer">
            <FaGithub size={16} /> <span className="btn-text">GitHub Repo</span>
          </a>
          <ul className={`nav-menu${menuOpen ? ' active' : ''}`} id="navMenu">
            <li><a href="#features" onClick={e => handleNavClick(e, '#features')}>Features</a></li>
            <li><a href="#tech-stack" onClick={e => handleNavClick(e, '#tech-stack')}>Tech Stack</a></li>
            <li><a href="#getting-started" onClick={e => handleNavClick(e, '#getting-started')}>Getting Started</a></li>
            <li><a href="#ios-waitlist" onClick={e => handleNavClick(e, '#ios-waitlist')}>iOS</a></li>
          </ul>
          <button
            className={`mobile-menu-toggle${menuOpen ? ' active' : ''}`}
            id="mobileMenuToggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(v => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}
