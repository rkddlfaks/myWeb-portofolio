"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Listen to scroll to optionally add shadow and background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Resume" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800 py-0' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white z-50 flex items-center gap-1" onClick={closeMenu}>
          Ilman<span className="text-indigo-600">Aulya</span>
        </Link>

        {/* Actions (Theme Toggle & Menu) */}
        <div className="flex items-center gap-3 z-50">
          <ThemeToggle />
          
          <button 
            className="p-2 text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-all hover:scale-110 active:scale-95 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md rounded-full shadow-sm border border-slate-200 dark:border-slate-700" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Animated Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="absolute top-20 right-6 w-56 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-2xl overflow-hidden origin-top-right"
          >
            <div className="flex flex-col p-2 font-medium text-slate-700 dark:text-slate-300">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all block py-3 px-4 rounded-xl"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
