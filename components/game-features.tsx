import { Card } from "@/components/ui/card"
import { Smartphone, Globe, Shuffle, Shield } from "lucide-react"

export function GameFeatures() {
  const features = [
    {
      icon: Smartphone,
      title: "Mobile Friendly",
      description: "Play on any device - phone, tablet, or desktop. Responsive design for seamless gameplay.",
    },
    {
      icon: Globe,
      title: "Free & Unblocked",
      description:
        "This imposter game is free and unblocked. Start playing instantly in your browser with no restrictions.",
    },
    {
      icon: Shuffle,
      title: "Random Word Generator",
      description:
        "Our random word generator creates thousands of imposter words across multiple categories for endless replayability.",
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "All games are local to your device. No data collection, completely private gameplay.",
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Why Choose Our Online Imposter Game?</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            The best free imposter game generator with features designed for maximum fun. Play word imposter games
            anytime, anywhere.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <feature.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
