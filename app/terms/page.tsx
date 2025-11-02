import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <>
    <section className="bg-muted/30">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <h1 className="text-3xl font-bold">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mt-2">Last updated: October 17, 2025</p>

        <div className="space-y-8 mt-8">
          <section>
            <h2 className="text-xl font-semibold">Agreement to Terms</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              These Terms of Service constitute a legally binding agreement between you and Imposter Game Generator
              regarding your access to and use of the site and related services. By accessing the site, you confirm
              you have read, understood, and agreed to be bound by these Terms. If you do not agree with all of these
              Terms, you are expressly prohibited from using the site and must discontinue use immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Intellectual Property Rights</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Unless otherwise indicated, the site and all content—including code, databases, functionality, software,
              designs, text, photographs, graphics, audio, and video—along with the trademarks, service marks, and
              logos (collectively, the “Marks”) are owned or controlled by us or licensed to us, and are protected by
              applicable intellectual property laws. The content and Marks are provided "AS IS" for information and
              personal use only. Except as expressly permitted in these Terms, no content or Marks may be copied,
              reproduced, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted,
              distributed, sold, licensed, or otherwise exploited for any commercial purpose without our prior written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">User Representations</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              By using the site, you represent and warrant that: (1) you have legal capacity and agree to comply with
              these Terms; (2) you are not under the age of 13; (3) if you are a minor in your jurisdiction, you have
              parental or guardian consent; (4) you will not access the site through automated or non-human means;
              (5) you will not use the site for any illegal or unauthorized purpose; and (6) your use of the site will
              not violate any applicable law or regulation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">User Generated Contributions</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              The site may invite you to post content or materials ("User Generated Contributions"). All such
              contributions must comply with these Terms. By posting contributions to any part of the site, you grant
              us a license to use, modify, publicly perform, publicly display, reproduce, and distribute such
              contributions on and through the site solely for the purpose of providing our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Prohibited Activities</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              You agree not to access or use the site for any purpose other than that for which we make the site
              available. Prohibited activities include, without limitation: unauthorized collection of user data;
              creating accounts under false pretenses; using the site to advertise or sell goods/services without
              approval; unauthorized framing or linking; attempting to bypass measures to restrict access; harassing or
              threatening staff; removing copyright notices; and uploading or transmitting malicious code.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Modifications and Interruptions</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We reserve the right to change, modify, or remove the contents of the site at any time for any reason at
              our sole discretion, without notice. We cannot guarantee the site will be available at all times, and we
              may experience hardware, software, or other problems or need to perform maintenance related to the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Governing Law</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              These Terms and your use of the site are governed by the laws of the United States and applicable state
              laws, without regard to conflict of law principles.
            </p>
          </section>
        </div>

        <p className="text-xs text-muted-foreground mt-8">
          Source: Terms of Service - Imposter Game Generator (
          <a
            href="https://impostergamer.com/terms"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://impostergamer.com/terms
          </a>
          )
        </p>
      </div>
    </section>
    <Footer />
    </>
  )
}