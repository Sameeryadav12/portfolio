import { useParams, Link } from 'react-router-dom'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'

const modules = import.meta.glob('../posts/*.md', { as: 'raw', eager: true })

export default function BlogPost() {
  const { slug } = useParams()
  const path = `../posts/${slug}.md`
  const raw = (modules as Record<string, string>)[path]

  if (!raw) {
    return <div className="text-brand-mist">Post not found.</div>
  }

  const { data, content } = matter(raw)

  return (
    <article className="space-y-3">
      <Link to="/blog" className="text-brand-mist hover:text-brand-fog">← Back to Notes</Link>
      <h1 className="text-3xl font-bold text-brand-fog">{data.title}</h1>
      <div className="text-sm text-brand-mist">{data.date}</div>
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </article>
  )
}
