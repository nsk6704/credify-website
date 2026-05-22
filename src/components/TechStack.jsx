import { Atom, Smartphone, FileJson, Database, Layers, Shield, GitBranch } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const techs = [
  { icon: Atom, title: 'React Native', desc: 'Cross-platform mobile framework', version: '0.81.5', color: null },
  { icon: Smartphone, title: 'Expo', desc: 'Development platform & build tooling', version: '54.0.30', color: '#000' },
  { icon: FileJson, title: 'TypeScript', desc: 'Type-safe JavaScript', version: '5.9.2', color: '#3178c6' },
  { icon: Database, title: 'SQLite', desc: 'Local database storage', version: 'expo-sqlite', color: '#003b57' },
  { icon: Layers, title: 'React Context', desc: 'Global state management', version: 'Built-in', color: '#764abc' },
]

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-36 bg-muted">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Built with Modern Technology</h2>
          <p className="text-lg text-muted-foreground">Leveraging the best tools for a seamless cross-platform experience</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-24">
          {techs.map((tech, i) => {
            const Icon = tech.icon
            return (
              <div className="bg-card rounded-xl border p-8 text-center hover:shadow-md hover:-translate-y-1 transition-all" key={i}>
                <div className="w-16 h-16 mx-auto mb-5 bg-muted rounded-xl flex items-center justify-center" style={tech.color ? { color: tech.color } : undefined}>
                  <Icon className="w-8 h-8" />
                </div>
                <h4 className="font-semibold mb-1">{tech.title}</h4>
                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{tech.desc}</p>
                <span className="inline-block px-3 py-1 bg-muted rounded-full text-[10px] font-medium text-muted-foreground">{tech.version}</span>
              </div>
            )
          })}
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            { icon: Smartphone, label: 'Android' },
            { icon: Shield, label: 'Privacy First' },
            { icon: GitBranch, label: 'Open Source' },
          ].map((badge, i) => {
            const BadgeIcon = badge.icon
            return (
              <Badge key={i} variant="outline" className="px-4 py-2 gap-2 text-sm">
                <BadgeIcon className="w-4 h-4" />
                <span>{badge.label}</span>
              </Badge>
            )
          })}
        </div>
      </div>
    </section>
  )
}
