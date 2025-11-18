import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 75 },
  { name: 'Node.js', level: 80 },
  { name: 'FastAPI', level: 70 },
  { name: 'MongoDB', level: 70 },
  { name: 'C / C++', level: 65 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Compétences</h2>
        <p className="mt-2 max-w-2xl text-slate-200/80">Un mix entre dev front, backend et bas niveau. Toujours curieux d’apprendre de nouvelles stacks.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-white">{s.name}</span>
              <span className="text-xs text-slate-300">{s.level}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${s.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
