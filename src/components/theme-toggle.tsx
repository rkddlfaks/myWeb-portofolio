"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch by waiting for component to mount
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="p-2 w-10 h-10 flex items-center justify-center text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-all hover:scale-110 active:scale-95 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-full shadow-sm border border-slate-200 dark:border-slate-700">
        <span className="sr-only">Toggle theme</span>
      </button>
    )
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 w-10 h-10 flex items-center justify-center text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-all hover:scale-110 active:scale-95 z-50 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-full shadow-sm border border-slate-200 dark:border-slate-700 relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <Sun className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${resolvedTheme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${resolvedTheme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
    </button>
  )
}
