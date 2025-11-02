import { Footer } from "@/components/footer"

export default function BlogHowToPlayImposterGame() {
  return (
    <>
    <section className="bg-muted/30">
      <div className="container mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold">How to Play the Imposter Game</h1>
        <p className="text-sm text-muted-foreground mt-2">A quick guide to rules, setup, and winning strategies.</p>

        <div className="space-y-8 mt-8">
          <section>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Imposter is a social deduction word game for groups (4–10 players). Most players share the same secret
              word, while one player is the Imposter with a different word. By giving short clues in turn, players try
              to identify the Imposter—while the Imposter blends in and avoids detection.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Setup</h2>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>Gather 4–10 players and sit or stand in a circle.</li>
              <li>Use the Imposter Game Generator to get a round’s secret words.</li>
              <li>Privately show each player their word. Exactly one player gets the Imposter word.</li>
              <li>Choose turn order (clockwise works well) and a starting player.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">How a Round Works</h2>
            <ol className="mt-2 list-decimal list-inside text-sm text-muted-foreground space-y-2">
              <li>
                Clue Phase: In turn, each player says a short clue related to their word—no full definitions, names,
                or overly revealing hints.
              </li>
              <li>
                Discussion: After one clue per player (or two rounds of clues), the group briefly discusses suspicious
                clues or behavior.
              </li>
              <li>
                Vote: Count down and everyone points to who they think is the Imposter. The player with the most votes
                is accused.
              </li>
              <li>
                Reveal: The accused reveals if they were the Imposter. If yes, the group wins; if not, the Imposter
                continues and may try to guess the group’s word to steal the round.
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Clue Guidelines</h2>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>Keep clues short—one phrase or sentence.</li>
              <li>Avoid ultra-specific facts that would immediately reveal the word.</li>
              <li>Stay consistent: your second clue should align with your first.</li>
              <li>As Imposter, reference broad traits that could fit multiple similar words.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Winning Tips</h2>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>
                For Crewmates: Listen for contradictions, overly generic clues, or clues that feel slightly off-topic.
              </li>
              <li>
                For Imposter: Echo the tone of others’ clues and avoid committing to specifics until you’re confident.
              </li>
              <li>Use categories like “food”, “animals”, “movies” to ground clues naturally.</li>
              <li>Don’t over-explain—confidence without detail often looks more authentic.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Variants</h2>
            <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-2">
              <li>
                Double Imposter: Two players get the Imposter word. Great for 8–10 players and adds misdirection.
              </li>
              <li>
                Sudden Guess: After voting fails to find the Imposter, allow a single guess by the Imposter to win.
              </li>
              <li>
                Timed Clues: Each clue must be given within 10 seconds to keep pace lively.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold">FAQ</h2>
            <div className="mt-2 space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-medium text-foreground">What counts as an illegal clue?</p>
                <p>Directly saying the word, giving acronyms, or hyper-specific facts that only match the exact word.</p>
              </div>
              <div>
                <p className="font-medium text-foreground">How many clue rounds before voting?</p>
                <p>One or two rounds works well. More rounds increase difficulty for the Imposter.</p>
              </div>
              <div>
                <p className="font-medium text-foreground">How to break ties in voting?</p>
                <p>Revote between tied players, or let the starting player decide for this round.</p>
              </div>
            </div>
          </section>
        </div>

        <p className="text-xs text-muted-foreground mt-8">Happy gaming! Invite 4–10 friends and start a round now.</p>
      </div>
    </section>
    <Footer />
    </>
  )
}