import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Dashboard DataViz',
    desc: 'Visualisation temps réel de métriques via WebSocket, React + D3.',
    tags: ['React', 'D3', 'WebSocket'],
    link: '#',
  },
  {
    title: 'Moteur de Jeu 2D',
    desc: 'Petit moteur en C avec système d’entités et collisions.',
    tags: ['C', 'SDL2'],
    link: '#',
  },
  {
    title: 'API Auth JWT',
    desc: 'API FastAPI sécurisée avec JWT, tests et CI.',
    tags: ['FastAPI', 'MongoDB', 'JWT'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
      <div className="mb-10 flex items-end justify-between">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Projets récents</h2>
        <a href="#" className="text-sm text-blue-300 hover:text-blue-200">Voir tout</a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.link}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:bg-white/10"
          >
            <div className="mb-3 h-40 w-full rounded-xl bg-gradient-to-br from-blue-500/30 to-cyan-400/20 transition group-hover:from-blue-500/40" />
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-1 text-sm text-slate-200/80">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-200">{t}</span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
