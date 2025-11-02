import { Card } from "@/components/ui/card"
import { Eye, MessageSquare, Vote, Trophy } from "lucide-react"

export function HowToPlay() {
  const steps = [
    {
      icon: Eye,
      title: "Get Your Word",
      description:
        "Each player receives secret imposter words from our random word generator. The imposter gets a different word or knows they are the spy.",
    },
    {
      icon: MessageSquare,
      title: "Give Clues",
      description: "Take turns giving one-word clues about your word. Be careful not to be too obvious!",
    },
    {
      icon: Vote,
      title: "Discuss & Vote",
      description: "After everyone gives clues, discuss and guess the imposter. Vote out who you think the spy is!",
    },
    {
      icon: Trophy,
      title: "Win the Game",
      description: "Civilians win by finding the imposter. The imposter wins by staying hidden or guessing the word.",
    },
  ]

  return (
    <section id="how-to-play" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">How to Play the Imposter Word Game</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Simple rules for this online imposter game. Learn to play word imposter in minutes, master it over time.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="relative p-6 hover:shadow-lg transition-shadow">
              <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                {index + 1}
              </div>
              <div className="mb-4 mt-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
