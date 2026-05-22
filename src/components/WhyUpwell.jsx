import { Sprout } from 'lucide-react'

export default function WhyUpwell() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <div className="max-w-2xl mx-auto p-12 md:p-14 text-center bg-card rounded-xl border border-border hover:border-primary/20 hover:-translate-y-1 transition-all">
          <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
            <Sprout className="w-7 h-7" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">Why &ldquo;UpWell&rdquo;?</h3>
          <p className="text-muted-foreground leading-relaxed">UpWell represents <strong className="text-primary font-bold">uplifting your well-being</strong> &mdash; a holistic approach to living better. It&rsquo;s about growing upward in all aspects of life: financial health, physical wellness, and mental clarity. Every positive action earns XP, building streaks and leveling up your real-life journey toward a better you.</p>
        </div>
      </div>
    </section>
  )
}
