import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <>
      <section className="bg-muted/30">
        <div className="container mx-auto max-w-4xl px-4 py-16">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-sm text-muted-foreground mt-2">Got a question, suggestion, or collaboration idea? We’d love to hear from you!</p>

          <div className="space-y-6 mt-8 text-sm text-muted-foreground">
            <div>
              <p className="text-foreground font-medium">Email</p>
              <p>
                <a href="mailto:contact@impostergamer.com" className="underline">contact@impostergamer.com</a>
              </p>
            </div>

            <div>
              <p className="text-foreground font-medium">Tip</p>
              <p>Include context and screenshots if possible. It helps us respond faster.</p>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-8">
            Source: Contact Us - Imposter Game Generator (
            <a
              href="https://impostergamer.com/contact"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://impostergamer.com/contact
            </a>
            )
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}