import { Trophy, CheckCircle, Crown } from 'lucide-react'

export default function Gamification() {
  return (
    <section className="py-36 bg-card border-y border-border">
      <div className="container">
        <div className="md:grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-xp/10 text-xp rounded-full text-sm mb-8">
              <Trophy size={16} />
              <span>Gamification System</span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight mb-6">Stay Motivated with Every Action</h2>
            <p className="text-lg text-muted-foreground mb-12">Transform your daily habits into an engaging journey. Earn experience points, level up, and maintain streaks across all categories.</p>
            <ul className="flex flex-col gap-8">
              {[
                { icon: CheckCircle, title: 'Experience Points', desc: 'Earn XP for every positive action across categories' },
                { icon: CheckCircle, title: 'Level Progression', desc: 'Advance through 12+ levels from Beginner to Immortal' },
                { icon: CheckCircle, title: 'Streak Calendar', desc: 'GitHub-style heatmap tracking your consistency' },
                { icon: CheckCircle, title: 'Weekly Summaries', desc: 'Gratitude and progress aggregated weekly' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <li key={i} className="flex gap-5">
                    <Icon className="text-xp w-6 h-6 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block">{item.title}</strong>
                      <span className="text-sm text-muted-foreground">{item.desc}</span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="mt-16 md:mt-0">
            <div className="p-10 bg-surfaceLight rounded-xl border border-border">
              <div className="flex items-center gap-3 text-2xl font-bold mb-6">
                <Crown className="text-xp w-6 h-6" />
                <span>Level 7</span>
              </div>
              <div className="h-3 bg-surfaceLighter rounded-full overflow-hidden mb-4">
                <div className="h-full bg-xp rounded-full w-[65%]"></div>
              </div>
              <div className="text-sm text-muted-foreground">6,500 / 10,000 XP</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
