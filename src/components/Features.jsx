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
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
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
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
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
    gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
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
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Comprehensive Feature Set</h2>
          <p className="section-subtitle">Everything you need to build lasting healthy routines and financial discipline</p>
        </div>
        <div className="feature-categories">
          {categories.map((cat, ci) => {
            const Icon = cat.icon
            return (
              <div className="feature-category" key={ci}>
                <div className="category-header">
                  <div className="category-icon" style={{ background: cat.gradient }}>
                    <Icon />
                  </div>
                  <div>
                    <h3>{cat.title}</h3>
                    <p>{cat.desc}</p>
                  </div>
                </div>
                <div className="feature-grid">
                  {cat.features.map((feat, fi) => {
                    const FeatIcon = feat.icon
                    return (
                      <div className="feature-card" key={fi}>
                        <FeatIcon />
                        <h4>{feat.title}</h4>
                        <p>{feat.desc}</p>
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
