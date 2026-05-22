import { Briefcase, Mail } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="py-20 bg-background border-t border-border">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <img src="/icon.png" alt="UpWell Logo" className="w-10 h-10 rounded-lg border-2" />
              <span className="text-xl font-bold tracking-tight">UpWell</span>
            </div>
            <p className="text-sm opacity-70 mt-3 max-w-xs">Your all-in-one companion for tracking habits, finances, and well-being.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#features" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Features</a></li>
              <li><a href="#tech-stack" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Tech Stack</a></li>
              <li><a href="https://github.com/nsk6704/UpWell" target="_blank" rel="noreferrer" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Documentation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="https://github.com/nsk6704/UpWell" target="_blank" rel="noreferrer" className="text-sm opacity-70 hover:opacity-100 transition-opacity">GitHub</a></li>
              <li><a href="https://github.com/nsk6704/UpWell/issues" target="_blank" rel="noreferrer" className="text-sm opacity-70 hover:opacity-100 transition-opacity">Issues</a></li>
              <li><a href="https://github.com/nsk6704/UpWell/blob/main/LICENSE" target="_blank" rel="noreferrer" className="text-sm opacity-70 hover:opacity-100 transition-opacity">License</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a href="https://github.com/nsk6704" target="_blank" aria-label="GitHub" rel="noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <FaGithub className="w-[18px] h-[18px]" />
              </a>
              <a href="https://www.linkedin.com/in/saketh-kashyap-nagendra/" target="_blank" aria-label="LinkedIn" rel="noreferrer" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Briefcase className="w-[18px] h-[18px]" />
              </a>
              <a href="mailto:sakethkashyap.nagendra@gmail.com" aria-label="Email" className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Mail className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-2 text-sm opacity-60">
          <p>&copy; 2026 UpWell. Licensed under BSD 3-Clause License.</p>
          <p>Made by Saketh</p>
        </div>
      </div>
    </footer>
  )
}
