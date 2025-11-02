import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Eye className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold">Imposter Game</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#how-to-play"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How to Play
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="#modes"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Game Modes
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            FAQ
          </Link>
        </nav>

        <Button size="lg" className="font-semibold">
          Start Playing
        </Button>
      </div>
    </header>
  )
}
