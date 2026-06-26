import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Award } from "lucide-react"

import { AnimateIn } from "@/components/ui/animate-in"
export function CertificationsSection() {
  const certifications = [
    {
      id: 1,
      title: "Agile Innovation Project Based Learning",
      issuer: "CIAS"
    },
    {
      id: 2,
      title: "CCNA: Introduction to Networks",
      issuer: "CISCO"
    },
    {
      id: 3,
      title: "Agile Execution Fundamentals",
      issuer: "CIAS"
    },
    {
      id: 4,
      title: "Design Thinking Fundamentals",
      issuer: "CIAS"
    }
  ]

  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-1000 ease-in-out">
      <div className="container mx-auto px-6">
        <AnimateIn>
        <h2 className="text-3xl font-bold mb-12 text-center">Licenses & Certifications</h2>
        <div className="max-w-4xl mx-auto  flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-auto md:px-0 md:grid md:grid-cols-2 gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {certifications.map((cert) => (
            <Card key={cert.id} className="w-[85vw] sm:w-[60vw] md:w-auto flex-shrink-0 md:flex-shrink snap-center hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 border-t-indigo-500">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Award className="text-indigo-600 flex-shrink-0" size={24} />
                  <div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription className="font-medium text-slate-700 dark:text-slate-300 mt-1">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
        </AnimateIn>
      </div>
    </section>
  )
}
