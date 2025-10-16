import { Link, useSearchParams } from 'react-router-dom'
import matter from 'gray-matter'
import { readingTime } from '../lib/readingTime'

let modules: Record<string, string> = {}
try {
  modules = import.meta.glob('../posts/*.md', { as: 'raw', eager: true })
} catch {
  console.warn('⚠️ No posts directory found, skipping blog import.')
}

type Post = { slug: string; title: string; date: string; tags: string[]; content: string }

const posts: Post[] = Object.entries(modules).map(([path, raw]) => {
  const { data, content } = matter(raw as string)
  const slug = path.split('/').pop()!.replace('.md', '')
  return { slug, title: data.title ?? slug, date: data.date ?? '', tags: data.tags ?? [], content }
}).sort((a, b) => (a.date < b.date ? 1 : -1))

const allTags = Array.from(new Set(posts.flatMap(p => p.tags))).sort()

export default function BlogList() {
  const [params, setParams] = useSearchParams()
  const active = params.get('tag') || 'All'
  const filtered = active === 'All' ? posts : posts.filter(p => p.tags.includes(active))

  if (posts.length === 0) {
    return (
      <section className="text-center mt-20 text-brand-mist">
        <h2 className="text-2xl font-bold text-brand-fog">No posts yet 📝</h2>
        <p>Blog section is under construction. Check back soon!</p>
      </section>
    )
  }

  return (
    <section className="space-y-4">
      <header className="text-center">
        <h1 className="text-3xl font-bold text-brand-fog">Notes & Blog</h1>
        <p className="text-brand-mist">Short write-ups on projects, patterns, and lessons learned.</p>
      </header>

      {/* Tag filter */}
      <div className="flex flex-wrap items-center gap-2 justify-center">
        {['All', ...allTags].map(tag => (
          <button
            key={tag}
            onClick={() => setParams(tag === 'All' ? {} : { tag })}
            className={`rounded-full border px-4 py-1 text-sm ${
              active === tag
                ? 'border-brand-mist/40 bg-brand-teal text-white'
                : 'border-brand-mist/20 bg-brand-base/50 text-brand-fog hover:bg-brand-base/70'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-4">
        {filtered.map(p => {
          const { mins } = readingTime(p.content)
          return (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="rounded-2xl border border-brand-mist/20 bg-brand-slate/40 p-5 hover:bg-brand-slate/60">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-brand-fog">{p.title}</h3>
                <span className="text-xs text-brand-mist">{p.date} · {mins} min read</span>
              </div>
              <div className="mt-2 flex flex-wrap gap-2 text-xs text-brand-mist">
                {p.tags?.map(t => <span key={t} className="rounded-full border border-brand-mist/20 px-2 py-0.5">{t}</span>)}
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
