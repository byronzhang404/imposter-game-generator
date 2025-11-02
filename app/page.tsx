import { HeroSection } from "@/components/hero-section"
import { HowToPlay } from "@/components/how-to-play"
import { GameFeatures } from "@/components/game-features"
import { GameModes } from "@/components/game-modes"
import { FAQ } from "@/components/faq"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HowToPlay />
        <GameFeatures />
        <GameModes />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
