import React from 'react'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10/5 py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} — Portfolio étudiant Epitech</p>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-white">Haut de page</a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
