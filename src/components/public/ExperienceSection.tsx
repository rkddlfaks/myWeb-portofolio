import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"

import { AnimateIn } from "@/components/ui/animate-in"
export function ExperienceSection() {
  const experiences = [
    {
      id: 1,
      title: "Retail Outlet Officer",
      company: "DHL Express Indonesia",
      logo: "/dhl.webp", 
      duration: "Jul 2024 - Now",
      description: [
        "Achieved up to 150% of monthly sales target, consistently exceeding performance expectations (117%–147% within first 6 months).",
        "Recognized as Best Retail Outlet Officer (Nov 2025) with 182% YoY growth performance.",
        "Boosted BQZ revenue by 32%, shipments by 9%, and weight by 77% through upselling and customer engagement (Q1 2025 vs Q1 2026).",
        "Managed end-to-end export sales process including quotation follow-up, customer acquisition, documentation, and shipment execution.",
        "Led Retail Sales Desk pilot initiative, managing multi-source leads and converting quotations into shipments via proactive follow-ups, boosting call channel sales performance."
      ]
    },
    {
      id: 2,
      title: "Program Operations (CIAS)",
      company: "PT Cipta Konsultan Internasional",
      logo: "/corporate_innovation_asia_logo.webp", 
      duration: "Feb 2023 - Jul 2024",
      description: [
        "Managed large-scale learning programs involving 80+ participant squads (±400 individuals), ensuring smooth execution of end-to-end program activities.",
        "Facilitated corporate innovation training programs for BUMN and private companies, including Agile and Design Thinking-based projects (e.g., Bank BSI digital transformation initiative).",
        "Improved operational efficiency through digital tools (Google Workspace, automation systems, centralized resource hubs).",
        "Strong background in stakeholder coordination, acting as liaison between participants, mentors, internal teams, and corporate clients."
      ]
    },
    {
      id: 3,
      title: "Mentee of MSIB Batch 1",
      company: "PT Cipta Konsultan Internasional (CIAS)",
      logo: "/corporate_innovation_asia_logo.webp", 
      duration: "Aug 2021 - Feb 2022",
      description: [
        "Converted ~5% of total leads (1,000 database) into active weekly customers through consistent follow-up and relationship building.",
        "Drove 100% growth in customer acquisition within 1 month (50 → 100 users) through targeted outreach and engagement strategies.",
        "Managed end-to-end customer journey from initial contact, onboarding, to repeat usage."
      ]
    }
  ]

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-1000 ease-in-out">
      <div className="container mx-auto px-6">
        <AnimateIn>
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-auto md:px-0 md:flex-col gap-6 md:gap-0 md:space-y-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory max-w-4xl">
          {experiences.map((exp) => (
            <Card key={exp.id} className="w-[85vw] sm:w-[70vw] md:w-auto flex-shrink-0 md:flex-shrink snap-center relative hover:shadow-xl hover:-translate-y-1 transition-all border-l-4 border-l-indigo-600">
              <CardHeader>
                <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white border border-slate-200 dark:border-slate-800 text-slate-500 font-bold text-lg flex-shrink-0 overflow-hidden relative p-1 shadow-sm">
                      {exp.logo.startsWith("/") ? (
                        <Image src={exp.logo} alt={`${exp.company} logo`} fill className="object-contain p-1" />
                      ) : (
                        exp.logo
                      )}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base text-slate-700 dark:text-slate-300 font-medium">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <span className="text-sm px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full font-semibold">
                    {exp.duration}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-outside ml-5 space-y-2 text-slate-600 dark:text-slate-400">
                  {exp.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        </AnimateIn>
      </div>
    </section>
  )
}
