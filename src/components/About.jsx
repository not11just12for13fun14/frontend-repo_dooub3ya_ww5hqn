import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">À propos</h2>
          <p className="mt-4 text-slate-200/90">
            Étudiant à Epitech, je me spécialise en développement web et logiciels. J’aime les interfaces élégantes,
            les architectures propres et les projets qui ont de l’impact. Mon objectif: rejoindre une équipe où je peux
            apprendre vite et contribuer à des produits concrets.
          </p>
          <div className="mt-6 flex gap-3 text-sm text-slate-300">
            <span className="rounded-full bg-white/10 px-3 py-1">Anglais B2</span>
            <span className="rounded-full bg-white/10 px-3 py-1">Hackathons</span>
            <span className="rounded-full bg-white/10 px-3 py-1">Contrib OSS</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="relative h-72 w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-cyan-400/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.35),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(34,211,238,0.25),transparent_35%)]" />
            <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/10 bg-slate-900/60 p-4 text-sm text-slate-200 backdrop-blur">
              Open to stage/alternance — IDF ou remote
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
