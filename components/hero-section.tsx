"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Sparkles, Zap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance md:text-7xl text-foreground">
            Free Imposter Game Generator - Play Online Now
          </h1>

          <p className="mb-10 text-lg text-muted-foreground text-pretty md:text-xl max-w-3xl mx-auto">
            The ultimate online imposter game and random word generator for your next party. Play this free imposter
            word game unblocked - guess the imposter, unmask the spy, and enjoy endless fun with our word imposter
            generator. Generate imposter words instantly, no downloads required. Perfect for groups of 4-10 players!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="text-lg px-8 py-6 font-semibold w-full sm:w-auto"
              onClick={() => {
                const el = document.getElementById("waitlist")
                el?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Join the Waitlist
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="p-6 text-center bg-card border-border hover:border-primary/50 transition-colors">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">4-10 Players</h3>
              <p className="text-sm text-muted-foreground">Perfect for small to medium groups</p>
            </Card>

            <Card className="p-6 text-center bg-card border-border hover:border-primary/50 transition-colors">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">Instant Setup</h3>
              <p className="text-sm text-muted-foreground">No downloads or registration needed</p>
            </Card>

            <Card className="p-6 text-center bg-card border-border hover:border-primary/50 transition-colors">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">Multiple Categories</h3>
              <p className="text-sm text-muted-foreground">Food, animals, movies, and more</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
