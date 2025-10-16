// src/components/Hero.tsx
import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative py-16 sm:py-20">
      {/* subtle spotlight background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(600px 300px at 20% 10%, rgba(18,78,102,0.25), transparent 60%), radial-gradient(700px 360px at 80% 0%, rgba(116,141,146,0.18), transparent 60%)',
        }}
      />

      <div className="mx-auto max-w-[72rem] px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Big intro card */}
          <motion.div
            className="lg:col-span-7 rounded-2xl bg-[#2E3944]/50 border border-brand-mist/20 p-6 sm:p-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-brand-mist mb-2">Hi, I’m</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-brand-fog tracking-tight">
              Sameer Yadav — Full-Stack Developer
            </h1>
            <p className="mt-4 text-brand-mist max-w-prose">
              I build fast, accessible web apps with React, TypeScript, Node and cloud. 
              Explore my work, case studies, and technical notes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link className="rounded-xl px-4 py-2 bg-[#124E66] text-[#D3D9D4] hover:bg-[#0f4152] transition"
                to="/projects">View Projects</Link>
              <Link className="rounded-xl px-4 py-2 border border-brand-mist/30 text-brand-fog hover:bg-[#2E3944]/40 transition"
                to="/resume">Download Resume</Link>
            </div>
          </motion.div>

          {/* Small stat cards */}
          <motion.div
            className="lg:col-span-5 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="rounded-2xl bg-[#212A31] border border-brand-mist/20 p-5">
              <p className="text-4xl font-semibold text-brand-fog">5+</p>
              <p className="text-brand-mist mt-1">Production Projects</p>
            </div>
            <div className="rounded-2xl bg-[#212A31] border border-brand-mist/20 p-5">
              <p className="text-4xl font-semibold text-brand-fog">TypeScript</p>
              <p className="text-brand-mist mt-1">React • Node • Vite</p>
            </div>
            <div className="rounded-2xl bg-[#212A31] border border-brand-mist/20 p-5">
              <p className="text-4xl font-semibold text-brand-fog">Cloud</p>
              <p className="text-brand-mist mt-1">Vercel • CI/CD</p>
            </div>
            <div className="rounded-2xl bg-[#212A31] border border-brand-mist/20 p-5">
              <p className="text-4xl font-semibold text-brand-fog">Open Source</p>
              <p className="text-brand-mist mt-1">Docs • Tutorials</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

