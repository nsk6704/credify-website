import { ArrowRight, TrendingUp, Database, Shield, Smartphone } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Button } from './ui/button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm mb-8">
          <Smartphone size={16} />
          <span>Android Only (Currently) • Open Source • Privacy First</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
          Your All-in-One Companion for <span className="text-primary">Better Living</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
          Track habits, manage finances, and cultivate well-being. UpWell brings all aspects of your personal wellness into one beautifully designed mobile experience.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 mb-24">
          <a href="https://github.com/nsk6704/UpWell" target="_blank" rel="noreferrer">
            <Button variant="default" size="lg" className="gap-2">
              <FaGithub size={20} />
              Get Started
            </Button>
          </a>
          <a href="#features">
            <Button variant="outline" size="lg" className="gap-2">
              Explore Features
              <ArrowRight size={16} />
            </Button>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex items-center gap-4">
            <TrendingUp className="w-8 h-8 text-primary" />
            <div className="text-left">
              <div className="text-2xl font-bold">12+</div>
              <div className="text-sm text-muted-foreground">Level Progression</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Database className="w-8 h-8 text-primary" />
            <div className="text-left">
              <div className="text-2xl font-bold">Local</div>
              <div className="text-sm text-muted-foreground">Data Storage</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Shield className="w-8 h-8 text-primary" />
            <div className="text-left">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm text-muted-foreground">Privacy First</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-[0.03] bg-primary" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 rounded-full opacity-[0.03] bg-primary" />
        <div className="absolute -bottom-20 right-1/3 w-64 h-64 rounded-full opacity-[0.03] bg-primary" />
      </div>
    </section>
  )
}
