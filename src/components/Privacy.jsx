import { Lock, Shield, CheckCircle } from 'lucide-react'

export default function Privacy() {
  return (
    <section className="py-36 bg-background">
      <div className="container">
        <div className="md:grid md:grid-cols-2 gap-24 items-center">
          <div className="flex items-center justify-center mb-16 md:mb-0">
            <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center text-primary animate-[pulse_2s_ease-in-out_infinite]">
              <Lock className="w-20 h-20" />
            </div>
          </div>
          <div className="max-w-lg">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm mb-6">
              <Shield size={16} />
              <span>Data & Privacy</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Your Data Stays Yours</h2>
            <p className="text-lg text-muted-foreground mb-12">Complete privacy with local storage. No cloud sync, no third-party access, and full control over your personal information.</p>
            <ul className="flex flex-col gap-8">
              {[
                { icon: CheckCircle, title: 'Local Storage', desc: 'All data stored securely in SQLite database on your device' },
                { icon: CheckCircle, title: 'Export/Import', desc: 'JSON-based backup system for complete data portability' },
                { icon: CheckCircle, title: 'No Limits', desc: 'Store unlimited entries across all categories' },
                { icon: CheckCircle, title: 'Complete Control', desc: 'Export, reset, or delete your data anytime' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <li key={i} className="flex gap-4">
                    <Icon className="text-primary w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold">{item.title}</strong>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
