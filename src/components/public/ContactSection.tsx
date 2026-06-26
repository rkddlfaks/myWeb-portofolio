import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { Mail } from "lucide-react"

import { AnimateIn } from "@/components/ui/animate-in"
export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-1000 ease-in-out">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <AnimateIn>
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-12 text-lg leading-relaxed">
          Feel free to reach out to me for any collaborations, opportunities, or just to say hi!
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/rkddlfaks" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 active:text-slate-900 dark:hover:text-white dark:active:text-white hover:shadow-xl transition-all duration-300 shadow-sm hover:-translate-y-2 hover:scale-110 active:-translate-y-2 active:scale-110">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/ilmanaulya/" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 active:text-slate-900 dark:hover:text-white dark:active:text-white hover:shadow-xl transition-all duration-300 shadow-sm hover:-translate-y-2 hover:scale-110 active:-translate-y-2 active:scale-110">
            <FaLinkedin size={24} />
          </a>
          <a href="https://wa.me/6285121042683" target="_blank" rel="noopener noreferrer" className="p-4 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 active:text-slate-900 dark:hover:text-white dark:active:text-white hover:shadow-xl transition-all duration-300 shadow-sm hover:-translate-y-2 hover:scale-110 active:-translate-y-2 active:scale-110">
            <FaWhatsapp size={24} />
          </a>
          <a href="mailto:ilman.aulya@icloud.com" className="p-4 bg-white dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-slate-900 active:text-slate-900 dark:hover:text-white dark:active:text-white hover:shadow-xl transition-all duration-300 shadow-sm hover:-translate-y-2 hover:scale-110 active:-translate-y-2 active:scale-110">
            <Mail size={24} />
          </a>
        </div>
        </AnimateIn>
      </div>
    </section>
  )
}
