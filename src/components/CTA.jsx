import { Bug } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function CTA() {
  return (
    <section className="py-36 bg-card border-y border-border text-center">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Ready to Transform Your Daily Habits?</h2>
          <p className="text-lg text-muted-foreground mb-10">Join the journey towards better financial health, physical wellness, and mental well-being.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/nsk6704/UpWell" target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "default", size: "lg" }))}>
              <FaGithub className="w-5 h-5" />
              View on GitHub
            </a>
            <a href="https://github.com/nsk6704/UpWell/issues" target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
              <Bug className="w-5 h-5" />
              Report an Issue
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
