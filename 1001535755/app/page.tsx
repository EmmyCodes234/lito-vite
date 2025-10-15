import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"

export default function LandingPage() {
  console.log("[v0] Landing page rendering")
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
    </main>
  )
}
