import { pinned } from '../data/pinnedRepos';
import { motion } from 'framer-motion';

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

            {/* Tech stack with icons */}
            <div className="mt-3">
              <div className="flex flex-wrap gap-2">
                {p.tech.map((tech) => {
                  // Simple icon mapping
                  let iconSrc = null;
                  const techLower = tech.toLowerCase();
                  
                  if (techLower.includes('react')) iconSrc = '/images/tech-icons/icons-png/react.png';
                  else if (techLower.includes('typescript')) iconSrc = '/images/tech-icons/icons-png/typescript.png';
                  else if (techLower.includes('node')) iconSrc = '/images/tech-icons/icons-png/nodejs.png';
                  else if (techLower.includes('express')) iconSrc = '/images/tech-icons/icons-png/expressjs.png';
                  else if (techLower.includes('mongodb')) iconSrc = '/images/tech-icons/icons-png/mongodb.png';
                  else if (techLower.includes('tailwind')) iconSrc = '/images/tech-icons/icons-png/tailwindcss.png';
                  else if (techLower.includes('jwt')) iconSrc = '/images/tech-icons/icons-png/jwt.png';
                  else if (techLower.includes('fullcalendar')) iconSrc = '/images/tech-icons/icons-png/fullcalendar.png';
                  else if (techLower.includes('react query')) iconSrc = '/images/tech-icons/icons-png/react-query.png';
                  else if (techLower.includes('unity')) iconSrc = '/images/tech-icons/icons-png/unity.png';
                  else if (techLower.includes('c#')) iconSrc = '/images/tech-icons/icons-png/csharp.png';
                  else if (techLower.includes('blender')) iconSrc = '/images/tech-icons/icons-png/blender.png';
                  else if (techLower.includes('photoshop')) iconSrc = '/images/tech-icons/icons-png/photoshop.png';
                  else if (techLower.includes('figma')) iconSrc = '/images/tech-icons/icons-png/figma.png';
                  else if (techLower.includes('design')) iconSrc = '/images/tech-icons/icons-png/design.png';
                  else if (techLower.includes('vite')) iconSrc = '/images/tech-icons/icons-png/vite.png';
                  else if (techLower.includes('docker')) iconSrc = '/images/tech-icons/icons-png/docker.png';
                  else if (techLower.includes('postgresql')) iconSrc = '/images/tech-icons/icons-png/postgresql.png';
                  else if (techLower.includes('redis')) iconSrc = '/images/tech-icons/icons-png/redis.png';
                  else if (techLower.includes('socket')) iconSrc = '/images/tech-icons/icons-png/socketio.png';
                  else if (techLower.includes('expo')) iconSrc = '/images/tech-icons/icons-png/expo.png';
                  else if (techLower.includes('prisma')) iconSrc = '/images/tech-icons/icons-png/prisma.png';
                  else if (techLower.includes('stripe')) iconSrc = '/images/tech-icons/icons-png/stripe.png';
                  else if (techLower.includes('notification')) iconSrc = '/images/tech-icons/icons-png/notification.png';
                  else if (techLower.includes('security') || techLower.includes('bcrypt')) iconSrc = '/images/tech-icons/icons-png/security.png';
                  else if (techLower.includes('framer')) iconSrc = '/images/tech-icons/icons-png/framer.png';
                  
                  return (
                    <div key={tech} className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-700 text-slate-300 text-sm">
                      {iconSrc && (
                        <img 
                          src={iconSrc} 
                          alt={tech}
                          className="w-4 h-4"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      )}
                      <span className="font-medium">{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
