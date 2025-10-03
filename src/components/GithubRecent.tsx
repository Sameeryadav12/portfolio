import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Star, GitFork, Loader2 } from 'lucide-react'

type Repo = {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
}

const USER = import.meta.env.VITE_GH_USERNAME as string | undefined
const CACHE_KEY = 'gh_recent_cache_v1'
const CACHE_TTL_MS = 1000 * 60 * 30 // 30 minutes

export default function GithubRecent() {
  const [repos, setRepos] = useState<Repo[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const username = USER?.trim()

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        setLoading(true)
        setError(null)

        // Try cache first
        const cached = localStorage.getItem(CACHE_KEY)
        if (cached) {
          const { at, data } = JSON.parse(cached) as { at: number; data: Repo[] }
          if (Date.now() - at < CACHE_TTL_MS) {
            if (!cancelled) {
              setRepos(data)
              setLoading(false)
            }
            return
          }
        }

        if (!username) {
          setLoading(false)
          setRepos([])
          return
        }

        // Fetch public repos
        const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
        if (!res.ok) throw new Error(`GitHub API: ${res.status}`)

        const all = (await res.json()) as Repo[]

        // Sort by recent activity & some signal
        const picked = all
          .filter(r => !r.name.toLowerCase().includes('test'))
          .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
          .slice(0, 6)

        if (!cancelled) {
          setRepos(picked)
          setLoading(false)
          localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data: picked }))
        }
      } catch (e: any) {
        if (!cancelled) {
          setError(e?.message || 'Failed to load GitHub')
          setLoading(false)
        }
      }
    }

    load()
    return () => { cancelled = true }
  }, [username])

  const body = useMemo(() => {
    if (loading) {
      return (
        <div className="flex items-center justify-center py-8 text-brand-mist">
          <Loader2 className="animate-spin mr-2" size={18} />
          Loading recent repositories…
        </div>
      )
    }
    if (error) {
      return <div className="text-center text-brand-mist py-6">Couldn’t load GitHub right now.</div>
    }
    if (!repos || repos.length === 0) {
      return <div className="text-center text-brand-mist py-6">Add your GitHub username in <code>.env</code> to show recent work.</div>
    }

    return (
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {repos.map((r, idx) => (
          <motion.a
            href={r.html_url}
            key={r.id}
            target="_blank"
            rel="noreferrer"
            className="block rounded-2xl border border-brand-mist/20 bg-brand-base/50 p-4 hover:bg-brand-base/70"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.03 }}
          >
            <div className="flex items-center justify-between">
              <div className="font-semibold text-brand-fog">{r.name}</div>
              <Github size={16} className="text-brand-mist" />
            </div>
            {r.description && <p className="mt-1 text-sm text-brand-mist line-clamp-2">{r.description}</p>}
            <div className="mt-3 flex items-center gap-3 text-xs text-brand-mist">
              {r.language && <span className="rounded-full border border-brand-mist/20 px-2 py-0.5">{r.language}</span>}
              <span className="inline-flex items-center gap-1"><Star size={14} /> {r.stargazers_count}</span>
              <span className="inline-flex items-center gap-1"><GitFork size={14} /> {r.forks_count}</span>
              <span className="ml-auto">Updated {new Date(r.updated_at).toLocaleDateString()}</span>
            </div>
          </motion.a>
        ))}
      </div>
    )
  }, [loading, error, repos])

  return (
    <section className="mt-8 rounded-3xl border border-brand-mist/20 bg-brand-slate/40 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-brand-fog">Recent GitHub Work</h2>
        <div className="text-xs text-brand-mist">
          {username ? `@${username}` : 'Set VITE_GH_USERNAME in .env'}
        </div>
      </div>
      <div className="mt-4">{body}</div>
    </section>
  )
}
