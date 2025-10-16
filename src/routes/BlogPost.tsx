import { useParams, Link } from 'react-router-dom'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

// Try to load all markdown files safely
let modules: Record<string, string> = {}
try {
  modules = import.meta.glob('../posts/*.md', { as: 'raw', eager: true })
} catch (err) {
  console.warn('⚠️ No posts directory found or import.meta.glob failed:', err)
}

export default function BlogPost() {
  const { slug } = useParams()

  // Defensive: handle empty or missing slug
  if (!slug) {
    return (
      <section className="text-center mt-20 text-brand-mist">
        <h2 className="text-2xl font-bold text-brand-fog">Invalid post URL ⚠️</h2>
        <p>
          <Link to="/blog" className="underline text-brand-teal hover:text-brand-fog">
            Back to Blog
          </Link>
        </p>
      </section>
    )
  }

  // Defensive: lookup the markdown file safely
  const raw = modules[`../posts/${slug}.md`]
  if (!raw) {
    return (
      <section className="text-center mt-20 text-brand-mist">
        <h2 className="text-2xl font-bold text-brand-fog">Post not found 📝</h2>
        <p>This article doesn’t exist or was removed.</p>
        <p className="mt-4">
          <Link to="/blog" className="underline text-brand-teal hover:text-brand-fog">
            ← Back to Blog
          </Link>
        </p>
      </section>
    )
  }

  // Parse markdown frontmatter + content
  const { data, content } = matter(raw)

  return (
    <article className="space-y-4">
      <Link to="/blog" className="text-brand-mist hover:text-brand-fog">← Back to Notes</Link>

      <h1 className="text-3xl font-bold text-brand-fog">{data.title || slug}</h1>
      {data.date && <div className="text-sm text-brand-mist">{data.date}</div>}

      <div className="prose prose-invert max-w-none mt-3">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  )
}
