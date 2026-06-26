import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Image from "next/image"

import { AnimateIn } from "@/components/ui/animate-in"
export function EducationSection() {
  const educations = [
    {
      id: 1,
      institution: "Universitas Komputer Indonesia",
      degree: "Bachelor of Computer Science, Informatics Engineering",
      date: "Jul 2019 - Dec 2023",
      gpa: "3.62/4.00",
      courses: "Digital Marketing, Entrepreneurship, Professional Ethics, Project Management, and Human Resource Management",
      logo: "/UNIKOM-LOGO-2025-High-Resolution-1024x1024.webp"
    }
  ]

  return (
    <section id="education" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-1000 ease-in-out">
      <div className="container mx-auto px-6">
        <AnimateIn>
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="max-w-4xl mx-auto grid gap-6">
          {educations.map((edu) => (
            <Card key={edu.id} className="w-[85vw] sm:w-[60vw] md:w-auto flex-shrink-0 md:flex-shrink snap-center hover:shadow-xl hover:-translate-y-1 transition-all border-t-4 border-t-indigo-600">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-16 h-16 flex items-center justify-center rounded-md bg-white border border-slate-200 dark:border-slate-800 flex-shrink-0 overflow-hidden relative p-1 shadow-sm">
                    <Image src={edu.logo} alt={`${edu.institution} logo`} fill className="object-contain p-1" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{edu.institution}</CardTitle>
                    <CardDescription className="font-medium text-slate-700 dark:text-slate-300 mt-1">
                      {edu.degree}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-slate-600 dark:text-slate-400 ml-[40px]">
                  <p className="font-semibold text-slate-800 dark:text-slate-200">
                    Cumulative GPA: <span className="text-indigo-600 font-bold">{edu.gpa}</span>
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Related Coursework:</span> {edu.courses}
                  </p>
                  <p className="text-sm font-medium bg-slate-100 dark:bg-slate-800 inline-block px-3 py-1 rounded-full text-slate-500 dark:text-slate-400 mt-2">
                    {edu.date}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        </AnimateIn>
      </div>
    </section>
  )
}
