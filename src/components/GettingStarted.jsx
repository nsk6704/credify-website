import {
  Smartphone, Rocket, Shield, SlidersHorizontal,
  ChevronRight, ArrowRight, Lock, Code, Download,
  Database, Wifi
} from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const guides = [
  {
    number: '1',
    icon: Smartphone,
    title: 'Download & Install',
    desc: 'Get the latest APK from our GitHub releases page. Enable "Install from Unknown Sources" in your device settings (Settings \u2192 Security or Apps), then tap the APK to install.',
    link: { href: 'https://github.com/nsk6704/UpWell/releases', text: 'View Releases' },
  },
  {
    number: '2',
    icon: Rocket,
    title: 'Start Tracking',
    desc: 'Launch the app with no registration needed. Log expenses, workouts, journal entries, and more. Each action earns XP and builds your streaks.',
    features: [
      'Track across 3 categories',
      'Earn XP and level up',
      'Build daily streaks',
      'Customize your experience',
    ],
  },
  {
    number: '3',
    icon: Shield,
    title: 'Your Data, Your Control',
    desc: 'Everything stays on your device. No accounts, no cloud sync, no data collection. Export your data anytime for backups or transfers.',
    badges: [
      { icon: Lock, label: '100% Private' },
      { icon: Code, label: 'Open Source' },
    ],
  },
  {
    number: '4',
    icon: SlidersHorizontal,
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
    badges: [{ icon: Download, label: 'Data Export' }],
  },
]

const faqs = [
  { icon: Shield, question: 'Why install from unknown sources?', answer: 'UpWell is completely open source, every line of code is public on GitHub. The APK distribution keeps the app 100% free with no ads or tracking, unlike Play Store alternatives.' },
  { icon: Database, question: 'Is my data safe?', answer: 'Absolutely! All data is stored locally on your device. UpWell never sends information to external servers. You have complete control, export or delete anytime.' },
  { icon: Wifi, question: 'Works offline?', answer: 'Yes! UpWell works completely offline. All features are available without an internet connection since everything is stored locally.' },
]

export default function GettingStarted() {
  return (
    <section id="getting-started" className="py-36 bg-muted">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Getting Started with UpWell</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know to begin your journey</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mb-32">
          {guides.map((g, i) => {
            const Icon = g.icon
            return (
              <div className="relative bg-card rounded-xl border-2 p-8 pt-12 hover:shadow-lg hover:-translate-y-2 hover:border-primary/50 transition-all" key={i}>
                <div className="absolute -top-4 left-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">{g.number}</div>
                <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-tight mb-3">{g.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{g.desc}</p>
                {g.features && (
                  <ul className="flex flex-col gap-2 mt-4">
                    {g.features.map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm text-muted-foreground"><ChevronRight className="w-3 h-3 text-primary" /> {f}</li>
                    ))}
                  </ul>
                )}
                {g.badges && (
                  <div className="flex flex-wrap gap-3 mt-6">
                    {g.badges.map((b, bi) => {
                      const BadgeIcon = b.icon
                      return (
                        <span key={bi} className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-full text-xs font-semibold border"><BadgeIcon className="w-3.5 h-3.5 text-primary" /> {b.label}</span>
                      )
                    })}
                  </div>
                )}
                {g.link && (
                  <a href={g.link.href} target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "default" }), "mt-6")}>
                    {g.link.text} <ArrowRight className="w-4 h-4" />
                  </a>
                )}
              </div>
            )
          })}
        </div>
        <div className="mt-36">
          <h3 className="text-3xl font-bold tracking-tight text-center mb-16">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-3 gap-10">
            {faqs.map((faq, i) => {
              const Icon = faq.icon
              return (
                <div className="bg-card rounded-xl border-2 p-8 hover:border-primary/50 hover:shadow-md hover:-translate-y-1 transition-all" key={i}>
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold mb-2 leading-snug">{faq.question}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
