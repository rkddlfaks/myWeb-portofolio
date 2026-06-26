import { Navbar } from "@/components/public/Navbar"
import { HeroSection } from "@/components/public/HeroSection"
import { AboutSection } from "@/components/public/AboutSection"
import { ExperienceSection } from "@/components/public/ExperienceSection"
import { AchievementsSection } from "@/components/public/AchievementsSection"
import { CertificationsSection } from "@/components/public/CertificationsSection"
import { PortfolioSection } from "@/components/public/PortfolioSection"
import { EducationSection } from "@/components/public/EducationSection"
import { ContactSection } from "@/components/public/ContactSection"
import { Footer } from "@/components/public/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <AchievementsSection />
      <CertificationsSection />
      <PortfolioSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
