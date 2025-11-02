import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
    <section id="privacy" className="py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Privacy Policy</h1>
            <p className="text-sm text-muted-foreground">Last updated: 2025-10-09</p>
          </div>

          <div className="space-y-8 text-pretty">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Introduction</h2>
              <p className="text-muted-foreground">
                We care deeply about your privacy and data security. We follow a transparent, data-minimization approach and only collect what is necessary to provide our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">What We Collect</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Site usage:</strong> Your in-site game configuration and browsing behavior are not associated with personal identity.
                </li>
                <li>
                  <strong>Personally Identifiable Information (PII):</strong> We do not collect any PII unless you voluntarily provide it to us via email.
                </li>
                <li>
                  <strong>Cookies:</strong> We currently do not use cookies to track users.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">How We Use Information</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>To improve product experience and site stability (in anonymous, aggregated form).</li>
                <li>
                  For any information you voluntarily send to our email, we only use it to respond to your inquiries or support requests.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Third-Party Services</h2>
              <p className="text-muted-foreground">
                If we integrate third-party analytics or ads (e.g., Google Analytics/Ads), we will update this page to explain the purpose and how data is processed. We will update this page and the “Last updated” date for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have questions about this policy or wish to exercise your privacy rights, email us at <a href="mailto:contact@impostergamer.com" className="underline">contact@impostergamer.com</a>.
              </p>
            </section>

            <p className="text-xs text-muted-foreground mt-8">Source: Privacy Policy - Imposter Game Generator (<a href="https://impostergamer.com/privacy" className="underline" target="_blank" rel="noopener noreferrer">https://impostergamer.com/privacy</a>)</p>
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </>
  )
}