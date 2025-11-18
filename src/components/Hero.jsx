import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900"></div>
      <div className="pointer-events-none absolute -inset-x-24 -top-40 h-80 bg-gradient-to-b from-blue-500/30 blur-3xl"></div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 py-28 sm:px-10 lg:px-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-sm text-emerald-200/90">Disponible pour alternance / stage</span>
        </motion.div>

        <motion.h1
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.1 }}
          className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Étudiant Epitech passionné par le code
        </motion.h1>

        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200/90"
        >
          J’adore concevoir des expériences web modernes, performantes et animées. Entre projets perso et
          collaborations, je transforme des idées en produits concrets.
        </motion.p>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-500 px-6 py-3 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400"
          >
            Voir mes projets
            <svg className="h-5 w-5 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Me contacter
          </a>
        </motion.div>
      </div>
    </section>
  )
}
