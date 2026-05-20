const categories = [
  {
    title: 'Financial Management',
    desc: 'Track your financial health with comprehensive tools',
    icon: 'fa-wallet',
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
    features: [
      { icon: 'fa-receipt', title: 'Expense Tracking', desc: 'Log transactions with customizable categories' },
      { icon: 'fa-chart-pie', title: 'Budget Monitoring', desc: 'Set monthly budgets and track spending in real-time' },
      { icon: 'fa-piggy-bank', title: 'Savings Goals', desc: 'Create financial goals with progress visualization' },
      { icon: 'fa-chart-line', title: 'Spending Analytics', desc: 'Understand your spending patterns at a glance' },
      { icon: 'fa-layer-group', title: 'Multiple Budgets', desc: 'Set overall budgets plus per-category limits' },
    ],
  },
  {
    title: 'Health & Fitness',
    desc: 'Monitor your physical well-being and build consistency',
    icon: 'fa-heartbeat',
    gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
    features: [
      { icon: 'fa-dumbbell', title: 'Workout Logging', desc: 'Record exercises with duration, calories, and notes' },
      { icon: 'fa-tint', title: 'Hydration Tracking', desc: 'Track daily water intake with visual progress' },
      { icon: 'fa-weight', title: 'Weight Tracker', desc: 'Log weight, set goals, track progress with visual charts and kg/lb support' },
    ],
  },
  {
    title: 'Mindfulness & Well-being',
    desc: 'Cultivate mental wellness through daily practices',
    icon: 'fa-spa',
    gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
    features: [
      { icon: 'fa-brain', title: 'Meditation Sessions', desc: 'Log guided meditations and breathing exercises' },
      { icon: 'fa-book-open', title: 'Digital Journaling', desc: 'Write unlimited entries with mood tracking' },
      { icon: 'fa-heart', title: 'Gratitude Logging', desc: 'Daily gratitude entries with weekly summaries and mood tracking' },
      { icon: 'fa-smile', title: 'Mood Tracking', desc: 'Monitor emotional patterns over time' },
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
          {categories.map((cat, ci) => (
            <div className="feature-category" key={ci}>
              <div className="category-header">
                <div className="category-icon" style={{ background: cat.gradient }}>
                  <i className={`fas ${cat.icon}`}></i>
                </div>
                <div>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </div>
              </div>
              <div className="feature-grid">
                {cat.features.map((feat, fi) => (
                  <div className="feature-card" key={fi}>
                    <i className={`fas ${feat.icon}`}></i>
                    <h4>{feat.title}</h4>
                    <p>{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
