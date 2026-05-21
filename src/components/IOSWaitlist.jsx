import { ArrowRight, Info } from 'lucide-react'
import { FaApple } from 'react-icons/fa'

export default function IOSWaitlist() {
  return (
    <section id="ios-waitlist" className="ios-waitlist">
      <div className="container">
        <div className="waitlist-content">
          <div className="waitlist-icon">
            <FaApple />
          </div>
          <h2>Want UpWell on iOS?</h2>
          <p>Currently Android-only. Show your interest and we&rsquo;ll notify you when the iOS version is ready.</p>
          <a href="https://forms.gle/Gt6n38YsoWCvdcJt6" className="btn-waitlist" target="_blank" rel="noopener noreferrer">
            <FaApple size={20} /> Show Interest for iOS
            <ArrowRight size={16} />
          </a>
          <span className="waitlist-note"><Info size={14} /> Just your email, one notification when ready</span>
        </div>
      </div>
    </section>
  )
}
