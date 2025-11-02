import { Footer } from "@/components/footer"

export default function BlogIndexPage() {
  const posts = [
    {
      slug: "/blog/how-to-play-imposter-game",
      title: "How to Play the Imposter Game",
      description:
        "A practical guide to rules, setup, clue flow, and winning strategies for groups of 4–10 players.",
    },
  ]

  return (
    <>
    <section className="bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="text-sm text-muted-foreground mt-2">Articles and guides for playing the Imposter word game.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={post.slug}
              className="block rounded-lg border border-border bg-card p-6 hover:border-primary/50 transition-colors"
            >
              <h2 className="text-xl font-semibold text-card-foreground">{post.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{post.description}</p>
              <span className="mt-4 inline-block text-sm text-primary">Read more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}