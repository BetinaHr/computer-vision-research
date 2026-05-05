import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ApplicationsSection } from "@/components/applications-section"
import { GestureDemoSection } from "@/components/gesture-demo-section"
import { FutureSection } from "@/components/future-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
      <ApplicationsSection />
      <GestureDemoSection />
      <FutureSection />
      <Footer />
    </main>
  )
}
