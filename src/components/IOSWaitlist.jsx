import { ArrowRight, Info } from 'lucide-react'
import { FaApple } from 'react-icons/fa'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export default function IOSWaitlist() {
  return (
    <section id="ios-waitlist" className="py-28 bg-muted">
      <div className="container">
        <div className="text-center max-w-lg mx-auto">
          <div className="w-20 h-20 mx-auto mb-6 bg-card rounded-2xl flex items-center justify-center text-foreground border border-border">
            <FaApple className="w-10 h-10" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Want UpWell on iOS?</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">Currently Android-only. Show your interest and we&rsquo;ll notify you when the iOS version is ready.</p>
          <a href="https://forms.gle/Gt6n38YsoWCvdcJt6" target="_blank" rel="noreferrer" className={cn(buttonVariants({ variant: "default" }), "gap-2 px-6 py-3 h-auto text-base")}>
            <FaApple className="w-5 h-5" /> Show Interest for iOS
            <ArrowRight className="w-4 h-4" />
          </a>
          <span className="block mt-5 text-sm text-muted-foreground"><Info className="text-primary w-3.5 h-3.5 inline mr-1 align-middle" /> Just your email, one notification when ready</span>
        </div>
      </div>
    </section>
  )
}
