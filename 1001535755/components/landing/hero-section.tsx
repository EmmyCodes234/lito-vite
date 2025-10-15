import { Button } from "@/components/ui/button"
import { PenLine } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  console.log("[v0] HeroSection rendering")
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-20"
      style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #a855f7 100%)" }}
    >
      {/* Paper Boat Icon */}
      <div className="mb-12">
        <svg
          width="120"
          height="80"
          viewBox="0 0 120 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
        >
          <path d="M60 10L20 70H100L60 10Z" fill="white" opacity="0.95" />
          <path d="M60 10L60 70" stroke="white" strokeWidth="2" opacity="0.3" />
          <path d="M20 70L60 10L100 70" stroke="#E5E7EB" strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal text-white text-center mb-12 tracking-tight">
        write away today.
      </h1>

      {/* CTA Button */}
      <Link href="/auth/sign-up">
        <Button
          size="lg"
          className="bg-white hover:bg-white/90 text-primary font-semibold text-lg px-8 py-7 rounded-full shadow-2xl flex items-center gap-3 transition-all hover:scale-105"
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <PenLine className="w-5 h-5 text-white" />
          </div>
          Start Writing
        </Button>
      </Link>

      {/* Footer */}
      <div className="absolute bottom-8 text-white/60 text-sm">© 2025 Lito</div>
    </section>
  )
}
