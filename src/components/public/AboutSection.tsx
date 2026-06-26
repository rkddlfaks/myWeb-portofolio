

import { AnimateIn } from "@/components/ui/animate-in"
export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-1000 ease-in-out">
      <div className="container mx-auto px-6">
        <AnimateIn>
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-center">
          <p className="mb-8">
            I am a results-driven Sales Professional with a strong foundation in Information Technology. Over the past 2 years, I have successfully leveraged my technical background to deeply understand complex products and communicate their value effectively to clients. I thrive at the intersection of tech and business, passionate about driving growth, building lasting client relationships, and delivering tailored solutions that meet real-world needs.
          </p>
        </div>
        </AnimateIn>
      </div>
    </section>
  )
}
