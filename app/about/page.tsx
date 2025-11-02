import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
    <section className="bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold">About Us</h1>
        <p className="text-sm text-muted-foreground mt-2">We believe the best party games are simple, fun, and require zero prep.</p>

        <div className="space-y-8 mt-8">
          <section>
            <h2 className="text-xl font-semibold">Our Mission</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Imposter Game Generator started from a simple idea: make gatherings effortless. No more brainstorming
              words, writing slips, or complicated setup. Open the website and start a high-quality round of
              Imposter/Werewolf-style fun in seconds.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">How It Works</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Click “Generate Your Game” and the site instantly prepares curated words and role assignments. Pass the
              phone around for players to see their roles, then start playing. Works offline with zero cost and zero
              friction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">The People Behind</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We’re a small team that loves in-person games and great product experiences. We focus on making things
              intuitive and delightful. Have ideas or feedback? We’d love to hear from you.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Email: <a href="mailto:contact@impostergamer.com" className="underline">contact@impostergamer.com</a>
            </p>
          </section>
        </div>

        <p className="text-xs text-muted-foreground mt-8">
          Source: About Us - Imposter Game Generator (
          <a
            href="https://impostergamer.com/about"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://impostergamer.com/about
          </a>
          )
        </p>
      </div>
    </section>
    <Footer />
    </>
  )
}