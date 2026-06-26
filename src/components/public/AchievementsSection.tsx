import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FaTrophy } from "react-icons/fa"

import { AnimateIn } from "@/components/ui/animate-in"
export function AchievementsSection() {
  const achievements = [
    {
      id: 1,
      title: "Best Retail Outlet Officer for Medium Service Point",
      organization: "DHL Express Indonesia",
      date: "November 2025",
      description: "Exceeded growth targets with an impressive achievement of 182% compared to the same period last year (YoY)."
    },
    {
      id: 2,
      title: "Agile Innovation Project Based Learning",
      organization: "CIAS",
      date: "Aug 2021 - Feb 2022",
      description: "Ranked 2nd Place for Best Pitching among 50 competing teams. Demonstrated strong capabilities in product pitching, teamwork, and agile project execution."
    },
    {
      id: 3,
      title: "Webinar Speaker (Kampus Merdeka)",
      organization: "Himpunan Mahasiswa Teknik Informatika",
      date: "May 2023",
      description: "Served as webinar speaker for Kampus Merdeka program, sharing insights on Independent Study track and delivering guidance on CV building strategies."
    },
    {
      id: 4,
      title: "Author (Historical Science Topic)",
      organization: "Pers Birama UNIKOM",
      date: "June 2022",
      description: "Wrote and published an article focusing on historical science topic, highlighting Nikola Tesla and his contributions to modern technology."
    }
  ]

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-1000 ease-in-out">
      <div className="container mx-auto px-6">
        <AnimateIn>
        <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
        <div className="max-w-4xl mx-auto  flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-auto md:px-0 md:grid md:grid-cols-2 gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {achievements.map((item) => (
            <Card key={item.id} className="w-[85vw] sm:w-[60vw] md:w-auto flex-shrink-0 md:flex-shrink snap-center hover:shadow-xl hover:-translate-y-1 transition-all border-t-4 border-t-amber-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <FaTrophy className="text-amber-500 flex-shrink-0" size={24} />
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </div>
                <CardDescription className="font-medium text-slate-700 dark:text-slate-300">
                  {item.organization} • {item.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        </AnimateIn>
      </div>
    </section>
  )
}
