import Script from "next/script"

export function Waitlist() {
  return (
    <section id="waitlist" className="py-20 bg-muted/30">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Join the Waitlist</h2>
          <p className="text-lg text-muted-foreground">
            Leave your email to get notified when we launch.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <iframe
            data-tally-src="https://tally.so/embed/31Z8Zg?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            width="100%"
            height="180"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Imposter Game Generator Waitlist"
          />
        </div>
      </div>

      {/* Tally embed script to support dynamic height and features */}
      <Script src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
    </section>
  )
}