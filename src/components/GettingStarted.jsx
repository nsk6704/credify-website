const guides = [
  {
    number: '1',
    icon: 'fa-android',
    title: 'Download & Install',
    desc: (
      <>
        <strong style={{ color: '#2563eb' }}><i className="fab fa-android"></i> Android Only</strong> &mdash; Download the latest APK from our GitHub releases page. Enable &ldquo;Install from Unknown Sources&rdquo; in your device settings (Settings → Security or Apps), then tap the APK to install.
      </>
    ),
    link: { href: 'https://github.com/nsk6704/UpWell/releases', text: 'Download APK' },
  },
  {
    number: '2',
    icon: 'fa-rocket',
    title: 'Start Tracking',
    desc: 'Launch the app—no registration needed! Log expenses, workouts, journal entries, and more. Each action earns XP and builds your streaks.',
    features: [
      'Track across 3 categories',
      'Earn XP and level up',
      'Build daily streaks',
      'Customize your experience',
    ],
  },
  {
    number: '3',
    icon: 'fa-shield-alt',
    title: 'Your Data, Your Control',
    desc: 'Everything stays on your device. No accounts, no cloud sync, no data collection. Export your data anytime for backups or transfers.',
    badges: [
      { icon: 'fa-lock', label: '100% Private' },
      { icon: 'fa-code', label: 'Open Source' },
      { icon: 'fa-heart', label: 'Always Free' },
    ],
  },
  {
    number: '4',
    icon: 'fa-sliders-h',
    title: 'Customize Your Experience',
    desc: (
      <>
        Access settings via the gear icon in the top-right corner in the <strong>Profile</strong> section. Tailor the app to match your lifestyle and preferences.
      </>
    ),
    features: [
      'Themes: Dark, Light, or Auto mode',
      'Styles: Modern, Minimal, Classic, Vibrant',
      'Set daily goals for expenses, workouts, water, weight',
      'Choose flexible or strict streak tracking',
      'Export & import your data as JSON backups',
      'Weight unit: kg or lb',
    ],
    badges: [{ icon: 'fa-download', label: 'Data Export' }],
  },
]

const faqs = [
  { icon: 'fa-shield-halved', question: 'Why install from unknown sources?', answer: 'UpWell is completely open source—every line of code is public on GitHub. The APK distribution keeps the app 100% free with no ads or tracking, unlike Play Store alternatives.' },
  { icon: 'fa-database', question: 'Is my data safe?', answer: 'Absolutely! All data is stored locally on your device. UpWell never sends information to external servers. You have complete control—export or delete anytime.' },
  { icon: 'fa-wifi', question: 'Works offline?', answer: 'Yes! UpWell works completely offline. All features are available without an internet connection since everything is stored locally.' },
]

export default function GettingStarted() {
  return (
    <section id="getting-started" className="getting-started">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Getting Started with UpWell</h2>
          <p className="section-subtitle">Everything you need to know to begin your journey</p>
        </div>
        <div className="guide-grid">
          {guides.map((g, i) => (
            <div className="guide-card" key={i}>
              <div className="guide-number">{g.number}</div>
              <div className="guide-icon">
                <i className={`fas ${g.icon}`}></i>
              </div>
              <h3>{g.title}</h3>
              <p>{g.desc}</p>
              {g.features && (
                <ul className="guide-features">
                  {g.features.map((f, fi) => (
                    <li key={fi}><i className="fas fa-chevron-right"></i> {f}</li>
                  ))}
                </ul>
              )}
              {g.badges && (
                <div className="privacy-badges">
                  {g.badges.map((b, bi) => (
                    <span key={bi}><i className={`fas ${b.icon}`}></i> {b.label}</span>
                  ))}
                </div>
              )}
              {g.link && (
                <a href={g.link.href} target="_blank" className="guide-link" rel="noreferrer">
                  {g.link.text} <i className="fas fa-arrow-right"></i>
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="faq-section">
          <h3 className="faq-title">Frequently Asked Questions</h3>
          <div className="faq-grid">
            {faqs.map((faq, i) => (
              <div className="faq-item" key={i}>
                <div className="faq-icon">
                  <i className={`fas ${faq.icon}`}></i>
                </div>
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
