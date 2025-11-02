import Link from "next/link"
import { Eye } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-muted/30">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Eye className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Imposter Game</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              The ultimate free online imposter game generator. Find the spy among your friends with instant word
              generation and endless fun.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#how-to-play" className="text-muted-foreground hover:text-foreground transition-colors">
                  How to Play
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#modes" className="text-muted-foreground hover:text-foreground transition-colors">
                  Game Modes
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Game Rules
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Strategy Tips
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Word Categories
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© 2025 Imposter Game Generator. All rights reserved. Built for party game enthusiasts.</p>
        </div>
      </div>
    </footer>
  )
}
