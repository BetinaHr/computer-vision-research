import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { HistorySection } from "@/components/history-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ChallengesSection } from "@/components/challenges-section"
import { AboutSection } from "@/components/about-section"
import { TechnologiesSection } from "@/components/technologies-section"
import { ApplicationsSection } from "@/components/applications-section"
import { GestureDemoSection } from "@/components/gesture-demo-section"
import { ObjectDetectionDemoSection } from "@/components/object-detection-demo-section"
import { TensorflowObjectDetectionDemo } from "@/components/tensorflow-object-detection-demo"
import { DemoSection } from "@/components/demo-section"
import { FutureSection } from "@/components/future-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <HistorySection />
      <TechnologiesSection />
      <ApplicationsSection />
      <GestureDemoSection />
      {/* <ObjectDetectionDemoSection /> */}
      <TensorflowObjectDetectionDemo />
      <DemoSection />
      <ChallengesSection />
      <FutureSection />
      <Footer />
    </main>
  )
}
