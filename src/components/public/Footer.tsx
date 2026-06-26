export function Footer() {
  return (
    <footer className="py-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center">
      <p className="text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Ilman Aulya. All rights reserved.
      </p>
    </footer>
  )
}
