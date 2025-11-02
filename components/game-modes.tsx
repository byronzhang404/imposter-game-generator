import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function GameModes() {
  const modes = [
    {
      title: "Classic Mode",
      description:
        "Traditional word imposter game with one spy among civilians. Perfect for beginners learning to guess the imposter.",
      players: "4-8 players",
      difficulty: "Easy",
      popular: true,
    },
    {
      title: "Multiple Imposters",
      description: "Add more imposters for increased difficulty. Can you find all the spies?",
      players: "6-10 players",
      difficulty: "Hard",
      popular: false,
    },
    {
      title: "Themed Categories",
      description:
        "Our random word generator offers specific themes like food, movies, or animals for targeted imposter word gameplay.",
      players: "4-10 players",
      difficulty: "Medium",
      popular: true,
    },
    {
      title: "Family Friendly",
      description: "Curated word lists suitable for all ages. Great for family gatherings.",
      players: "4-10 players",
      difficulty: "Easy",
      popular: false,
    },
  ]

  return (
    <section id="modes" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Imposter Game Modes</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Choose from various online imposter game modes to match your group's skill level and preferences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {modes.map((mode, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold">{mode.title}</h3>
                {mode.popular && (
                  <Badge variant="secondary" className="font-semibold">
                    Popular
                  </Badge>
                )}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{mode.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm">
                  <span className="text-muted-foreground">{mode.players}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="font-medium">{mode.difficulty}</span>
                </div>
                <Button variant="outline">Try This Mode</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
