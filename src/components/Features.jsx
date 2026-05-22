import {
  Wallet, HeartPulse, Flower2, Receipt, ChartPie, PiggyBank,
  TrendingUp, Layers, Dumbbell, Droplet, Weight, Brain,
  BookOpen, Heart, Smile
} from 'lucide-react'

const categories = [
  {
    title: 'Financial Management',
    desc: 'Track your financial health with comprehensive tools',
    icon: Wallet,
    color: '#10B981',
    features: [
      { icon: Receipt, title: 'Expense Tracking', desc: 'Log transactions with customizable categories' },
      { icon: ChartPie, title: 'Budget Monitoring', desc: 'Set monthly budgets and track spending in real-time' },
      { icon: PiggyBank, title: 'Savings Goals', desc: 'Create financial goals with progress visualization' },
      { icon: TrendingUp, title: 'Spending Analytics', desc: 'Understand your spending patterns at a glance' },
      { icon: Layers, title: 'Multiple Budgets', desc: 'Set overall budgets plus per-category limits' },
    ],
  },
  {
    title: 'Health & Fitness',
    desc: 'Monitor your physical well-being and build consistency',
    icon: HeartPulse,
    color: '#F97316',
    features: [
      { icon: Dumbbell, title: 'Workout Logging', desc: 'Record exercises with duration, calories, and notes' },
      { icon: Droplet, title: 'Hydration Tracking', desc: 'Track daily water intake with visual progress' },
      { icon: Weight, title: 'Weight Tracker', desc: 'Log weight, set goals, track progress with visual charts and kg/lb support' },
    ],
  },
  {
    title: 'Mindfulness & Well-being',
    desc: 'Cultivate mental wellness through daily practices',
    icon: Flower2,
    color: '#06B6D4',
    features: [
      { icon: Brain, title: 'Meditation Sessions', desc: 'Log guided meditations and breathing exercises' },
      { icon: BookOpen, title: 'Digital Journaling', desc: 'Write unlimited entries with mood tracking' },
      { icon: Heart, title: 'Gratitude Logging', desc: 'Daily gratitude entries with weekly summaries and mood tracking' },
      { icon: Smile, title: 'Mood Tracking', desc: 'Monitor emotional patterns over time' },
    ],
  },
]

export default function Features() {
  return (
    <section id="features" className="py-36 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Comprehensive Feature Set
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to build lasting healthy routines and financial discipline
          </p>
        </div>
        <div className="flex flex-col gap-24">
          {categories.map((cat, ci) => {
            const Icon = cat.icon
            return (
              <div
                key={ci}
                className="animate-[fadeInUp_0.8s_ease_forwards] opacity-0"
                style={{ animationDelay: `${ci * 0.2}s` }}
              >
                <div className="flex items-center gap-6 mb-10 pb-10 border-b">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: cat.color + '20', color: cat.color }}
                  >
                    <Icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{cat.title}</h3>
                    <p className="text-muted-foreground">{cat.desc}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                  {cat.features.map((feat, fi) => {
                    const FeatIcon = feat.icon
                    return (
                      <div
                        key={fi}
                        className="bg-card rounded-xl border p-8 hover:shadow-md hover:border-primary/30 transition-all"
                      >
                        <FeatIcon className="w-10 h-10 rounded-lg p-2 mb-5" style={{ color: cat.color, backgroundColor: cat.color + '15' }} />
                        <h4 className="text-lg font-semibold mb-3">{feat.title}</h4>
                        <p className="text-sm text-muted-foreground">{feat.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
