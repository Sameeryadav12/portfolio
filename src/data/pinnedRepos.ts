export type Pinned = { name: string; desc?: string; url: string; tech?: string[] }

export const pinned: Pinned[] = [
  { name: 'Portfolio', url: 'https://github.com/Sameeryadav12/portfolio', desc: 'Vite + React + Tailwind + Framer Motion', tech: ['React','TS','Tailwind'] },
  { name: 'Call-a-Technician', url: '', desc: 'Admin portal with KPIs, invoices, scheduling', tech: ['React','Node','MongoDB'] },
  { name: 'Balance 3D', url: 'https://www.youtube.com/watch?v=D_uVdsMsjbI', desc: 'Unity physics game (12 levels, 1,000+ downloads)', tech: ['Unity','C#'] },
  { name: 'Space Exploration', url: 'https://www.youtube.com/watch?v=9dDQtavNqco', desc: 'Interactive solar system app in Unity', tech: ['Unity','C#'] }
]
