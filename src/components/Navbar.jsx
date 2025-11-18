import React from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 backdrop-blur-md">
          <motion.a
            href="#home"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg font-semibold text-white"
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Epitech Portfolio</span>
          </motion.a>

          <nav className="hidden items-center gap-6 text-slate-200 md:flex">
            <a href="#projects" className="hover:text-white transition">Projets</a>
            <a href="#skills" className="hover:text-white transition">Compétences</a>
            <a href="#about" className="hover:text-white transition">À propos</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>

          <a href="#contact" className="hidden rounded-xl bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur hover:bg-white/20 md:block">Discutons</a>
        </div>
      </div>
    </header>
  )
}
