import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

import { AnimateIn } from "@/components/ui/animate-in"
export function PortfolioSection() {
  const projects = [
    { 
      id: 1, 
      title: "BSI Innovation Incubation : Leap to Lead 2023", 
      date: "Nov 2023 – Jan 2024",
      associated: "Corporate Innovation Asia - CIAS",
      description: "Facilitated corporate innovation incubation programs utilizing Design Thinking and Agile Project Management methodologies to drive strategic outcomes.",
      skills: ["Design Thinking", "Agile Project Management"]
    },
    { 
      id: 2, 
      title: "Masked Face Recognition Using YOLO-v5", 
      date: "Aug 2022 – Aug 2023",
      associated: "Universitas Komputer Indonesia",
      description: "Created a robust face mask recognition model boasting a 96% average accuracy rate using YOLOv5 (CNN) to address public health and safety challenges.",
      skills: ["YOLO", "Computer Vision", "Deep Learning"]
    },
    { 
      id: 3, 
      title: "Akosta.id's Customer Acquisition System", 
      date: "Sep 2022 – Oct 2022",
      associated: "Universitas Komputer Indonesia",
      description: "Overseeing agile software development initiatives (week-long sprints) to streamline customer acquisition and management in the real estate brokerage sector.",
      skills: ["Agile Project Management", "Collaborative Leadership", "Software Development"]
    },
    { 
      id: 4, 
      title: "Chit Chat", 
      date: "Aug 2021 – Feb 2022",
      associated: "Corporate Innovation Asia - CIAS",
      description: "Founded a startup to address English proficiency in Indonesia using Design Thinking and Agile execution, fostering a safe and supportive ecosystem for learners.",
      skills: ["Agile Project Management", "Design Thinking", "Entrepreneurship"]
    },
  ]

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-1000 ease-in-out">
      <div className="container mx-auto px-6">
        <AnimateIn>
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects & Portfolio</h2>
        <div className=" flex overflow-x-auto pb-8 -mx-6 px-6 md:mx-auto md:px-0 md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
          {projects.map((project) => (
            <Card key={project.id} className="w-[85vw] sm:w-[60vw] md:w-auto flex-shrink-0 md:flex-shrink snap-center hover:shadow-xl hover:-translate-y-1 transition-all border-t-4 border-t-indigo-600 flex flex-col h-full">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                </div>
                <CardDescription className="font-semibold text-indigo-600 dark:text-indigo-400">
                  {project.associated}
                </CardDescription>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {project.date}
                </p>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow justify-between">
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.skills.map((skill, index) => (
                    <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                      {skill}
                    </span>
                  ))}
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
