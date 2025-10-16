import { pinned } from '../data/pinnedRepos';
import { motion } from 'framer-motion';
import TechLogos from './TechLogos';
import { toIconItems } from '../lib/techIcons';

export default function PinnedRepos() {
  if (!pinned.length) return null;

  return (
    <section className="mt-8 rounded-3xl border border-brand-mist/20 bg-brand-slate/40 p-6">
      <h2 className="text-xl font-semibold text-brand-fog">Pinned Code</h2>

      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pinned.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url || '#'}
            target={p.url ? '_blank' : undefined}
            rel={p.url ? 'noreferrer' : undefined}
            className={`block rounded-2xl border border-brand-mist/20 bg-brand-base/50 p-4 ${
              p.url ? 'hover:bg-brand-base/70' : 'opacity-60'
            }`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: i * 0.03 }}
          >
            <div className="font-semibold text-brand-fog">{p.name}</div>
            {p.desc && <p className="mt-1 text-sm text-brand-mist">{p.desc}</p>}

            {/* REPLACE pills with logos */}
            <div className="mt-3">
              <TechLogos items={toIconItems(p.tech)} />
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
