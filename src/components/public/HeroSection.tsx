import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import Image from "next/image"

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden transition-colors duration-1000 ease-in-out">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 -z-20 h-full w-full bg-slate-50 dark:bg-slate-950 bg-[linear-gradient(to_right,#cbd5e1_1px,transparent_1px),linear-gradient(to_bottom,#cbd5e1_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_80%,transparent_100%)]"></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="container mx-auto px-6 text-center flex flex-col items-center relative z-10">
        <div className="relative w-40 h-40 md:w-56 md:h-56 mb-8 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-[0_0_40px_rgba(79,70,229,0.4)] dark:shadow-[0_0_50px_rgba(99,102,241,0.5)]">
          <Image 
            src="/BA793426-460F-4AB6-B87C-7F635F07B7C6.webp" 
            alt="Ilman Aulya" 
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          Hi, I am <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Ilman Aulya</span>
        </h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          Informatics Engineering Graduate & Award-Winning Sales Professional | Proven track record in driving exceptional revenue growth, customer acquisition, and program operations.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="#portfolio" className={cn(buttonVariants({ size: "lg" }), "bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1")}>
            View My Work
          </Link>
          <Link href="#contact" className={cn(buttonVariants({ variant: "outline", size: "lg" }))}>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}
