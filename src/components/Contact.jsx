import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-3xl px-6 py-24 sm:px-10 lg:px-16">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Contact</h2>
        <p className="mt-2 text-slate-200/80">Envie d’échanger ? Laissez-moi un message, je reviens vers vous rapidement.</p>
      </div>

      <motion.form
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-sm text-slate-300">Nom</label>
            <input required className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none placeholder:text-slate-400 focus:border-blue-500" placeholder="Votre nom" />
          </div>
          <div>
            <label className="text-sm text-slate-300">Email</label>
            <input type="email" required className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none placeholder:text-slate-400 focus:border-blue-500" placeholder="vous@exemple.com" />
          </div>
        </div>
        <div className="mt-4">
          <label className="text-sm text-slate-300">Message</label>
          <textarea required rows={5} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none placeholder:text-slate-400 focus:border-blue-500" placeholder="Parlons de votre projet ou d’une opportunité…" />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <button className="rounded-xl bg-blue-500 px-5 py-2.5 text-white shadow-lg shadow-blue-500/30 transition hover:-translate-y-0.5 hover:bg-blue-400">Envoyer</button>
          {sent && <span className="text-sm text-emerald-300">Merci ! Message simulé envoyé.</span>}
        </div>
      </motion.form>
    </section>
  )
}
