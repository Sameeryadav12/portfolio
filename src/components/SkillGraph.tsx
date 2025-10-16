import { memo, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

type Group = 'web' | 'backend' | 'db' | 'game' | 'devops' | 'testing' | 'cloud'
type Node = { id: string; label: string; group: Group; x: number; y: number; size?: number; hub?: boolean }

const NODES: Node[] = [
  { id: 'fullstack', label: 'Full-Stack', group: 'web',     x: 50, y: 38, size: 5.6, hub: true },
  { id: 'apis',      label: 'APIs',       group: 'backend', x: 30, y: 56, size: 4.8, hub: true },
  { id: 'unity3d',   label: 'Unity / 3D', group: 'game',    x: 73, y: 58, size: 5.2, hub: true },
  { id: 'react', label: 'React', group: 'web', x: 60, y: 28, size: 3.2 },
  { id: 'ts', label: 'TypeScript', group: 'web', x: 43, y: 26, size: 3.0 },
  { id: 'vite', label: 'Vite', group: 'web', x: 67, y: 20, size: 2.8 },
  { id: 'router', label: 'Router', group: 'web', x: 69, y: 33, size: 2.9 },
  { id: 'tailwind', label: 'Tailwind', group: 'web', x: 39, y: 33, size: 2.9 },
  { id: 'node', label: 'Node.js', group: 'backend', x: 22, y: 64, size: 3.0 },
  { id: 'express', label: 'Express', group: 'backend', x: 16, y: 73, size: 2.8 },
  { id: 'rest', label: 'REST', group: 'backend', x: 33, y: 71, size: 2.6 },
  { id: 'jwt', label: 'JWT', group: 'backend', x: 26, y: 80, size: 2.4 },
  { id: 'mongo', label: 'MongoDB', group: 'db', x: 36, y: 83, size: 2.7 },
  { id: 'sql', label: 'SQL', group: 'db', x: 45, y: 86, size: 2.5 },
  { id: 'postgres', label: 'PostgreSQL', group: 'db', x: 50, y: 79, size: 2.6 },
  { id: 'mysql', label: 'MySQL', group: 'db', x: 42, y: 92, size: 2.4 },
  { id: 'unity', label: 'Unity', group: 'game', x: 79, y: 66, size: 3.2 },
  { id: 'csharp', label: 'C#', group: 'game', x: 86, y: 62, size: 2.7 },
  { id: 'blender', label: 'Blender', group: 'game', x: 84, y: 75, size: 2.7 },
  { id: 'ux', label: 'UX / UI', group: 'game', x: 70, y: 66, size: 2.6 },
  { id: 'git', label: 'Git/GitHub', group: 'devops', x: 56, y: 93, size: 2.6 },
  { id: 'docker', label: 'Docker', group: 'devops', x: 62, y: 86, size: 2.4 },
  { id: 'jira', label: 'Jira', group: 'devops', x: 68, y: 92, size: 2.3 },
  { id: 'tests', label: 'Testing', group: 'testing', x: 14, y: 88, size: 2.4 },
  { id: 'perf', label: 'Performance', group: 'testing', x: 24, y: 91, size: 2.4 },
  { id: 'vercel', label: 'Vercel', group: 'cloud', x: 74, y: 86, size: 2.5 },
  { id: 'aws', label: 'AWS', group: 'cloud', x: 80, y: 90, size: 2.5 },
  { id: 'firebase', label: 'Firebase', group: 'cloud', x: 68, y: 88, size: 2.5 },
]
const EDGES: Array<[string, string]> = [
  ['fullstack','react'], ['fullstack','ts'], ['fullstack','router'], ['fullstack','tailwind'], ['fullstack','vite'],
  ['apis','node'], ['apis','express'], ['apis','rest'], ['apis','jwt'],
  ['node','mongo'], ['node','sql'], ['sql','postgres'], ['sql','mysql'],
  ['unity3d','unity'], ['unity','csharp'], ['unity3d','blender'], ['unity3d','ux'],
  ['fullstack','apis'], ['fullstack','vercel'], ['apis','tests'], ['tests','perf'], ['fullstack','firebase'],
]
const GROUP_COLOR: Record<Group, string> = {
  web: '#124E66', backend: '#8BA3A7', db: '#D3D9D4', game: '#31EE88',
  devops: '#748D92', testing: '#9BB5B9', cloud: '#52D5FF',
}

const Dot = memo(({ n }: { n: Node }) => {
  const r = (n.size ?? 2.4) / 2
  const color = GROUP_COLOR[n.group]
  const font = n.hub ? 2.2 : 1.6
  return (
    <g transform={`translate(${n.x} ${n.y})`} pointerEvents="none">
      <motion.circle r={r} fill={color} stroke="rgba(211,217,212,0.35)" strokeWidth={0.4}
        initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.35 }} />
      <text x={r + 1.2} y={0.5} style={{ fontSize: font, fill: '#D3D9D4', opacity: 0.95 }}>{n.label}</text>
    </g>
  )
})

export default function SkillGraph() {
  const pos = useMemo(() => Object.fromEntries(NODES.map(n => [n.id, n])), [])
  const [scale, setScale] = useState(1)
  const [tx, setTx] = useState(0)
  const [ty, setTy] = useState(0)
  const dragging = useRef<null | { x: number; y: number }>(null)
  const surfaceRef = useRef<SVGSVGElement | null>(null)

  // Wheel zoom (capture) — block page scroll
  const onWheelCapture: React.WheelEventHandler<SVGSVGElement> = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const svg = e.currentTarget
    const pt = svg.createSVGPoint()
    pt.x = e.clientX; pt.y = e.clientY
    const cursor = pt.matrixTransform(svg.getScreenCTM()!.inverse())
    const factor = Math.exp(-e.deltaY * 0.001)
    const newScale = Math.min(3, Math.max(0.6, scale * factor))
    const k = newScale / scale
    setTx(cursor.x - k * (cursor.x - tx))
    setTy(cursor.y - k * (cursor.y - ty))
    setScale(newScale)
  }

  // Pointer pan (mouse/touch)
  const onPointerDown: React.PointerEventHandler<SVGSVGElement> = (e) => {
    const svg = e.currentTarget
    svg.setPointerCapture(e.pointerId)
    const pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY
    const cur = pt.matrixTransform(svg.getScreenCTM()!.inverse())
    dragging.current = { x: cur.x, y: cur.y }
  }
  const onPointerMove: React.PointerEventHandler<SVGSVGElement> = (e) => {
    if (!dragging.current) return
    const svg = e.currentTarget
    const pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY
    const cur = pt.matrixTransform(svg.getScreenCTM()!.inverse())
    const dx = cur.x - dragging.current.x
    const dy = cur.y - dragging.current.y
    setTx(v => v + dx); setTy(v => v + dy)
    dragging.current = cur
  }
  const onPointerUp: React.PointerEventHandler<SVGSVGElement> = (e) => {
    const svg = e.currentTarget
    try { svg.releasePointerCapture(e.pointerId) } catch {}
    dragging.current = null
  }

  const reset = () => { setScale(1); setTx(0); setTy(0) }
  const zoomIn = () => setScale(s => Math.min(3, s * 1.2))
  const zoomOut = () => setScale(s => Math.max(0.6, s / 1.2))

  return (
    <section className="mt-8 rounded-3xl border border-brand-mist/20 bg-brand-slate/40 p-4">
      <div className="flex items-center justify-between">
        <h2 className="px-2 pt-2 text-xl font-semibold text-brand-fog">Skills Map</h2>
        <div className="flex items-center gap-2 text-brand-mist">
          <button onClick={zoomOut} className="rounded-xl border border-brand-mist/20 bg-brand-base/50 px-2 py-1">–</button>
          <button onClick={zoomIn}  className="rounded-xl border border-brand-mist/20 bg-brand-base/50 px-2 py-1">+</button>
          <button onClick={reset}   className="rounded-xl border border-brand-mist/20 bg-brand-base/50 px-2 py-1">Reset</button>
        </div>
      </div>

      <div
        className="mt-2 rounded-2xl border border-brand-mist/20 bg-brand-base/40 overscroll-contain"
        style={{ overscrollBehavior: 'contain' }}
      >
        <svg
          ref={surfaceRef}
          viewBox="0 0 100 100"
          className="w-full h-[340px] sm:h-[380px] lg:h-[430px] cursor-grab active:cursor-grabbing select-none"
          role="img"
          aria-label="Interactive skill graph"
          onWheelCapture={onWheelCapture}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          style={{ touchAction: 'none' }}  // disables native scroll/zoom on this element
        >
          <g transform={`translate(${tx} ${ty}) scale(${scale})`}>
            <g stroke="rgba(211,217,212,0.22)" strokeWidth={0.35 / scale}>
              {EDGES.map(([a, b]) => {
                const A = pos[a], B = pos[b]; if (!A || !B) return null
                return <line key={`${a}-${b}`} x1={A.x} y1={A.y} x2={B.x} y2={B.y} />
              })}
            </g>
            {NODES.map(n => <Dot key={n.id} n={n} />)}
          </g>
        </svg>
      </div>

      <div className="mt-3 flex flex-wrap gap-3 text-xs text-brand-mist">
        {Object.entries(GROUP_COLOR).map(([k, c]) => (
          <span key={k} className="inline-flex items-center gap-2">
            <span className="inline-block h-3 w-3 rounded-full" style={{ background: c }} />
            {k}
          </span>
        ))}
      </div>
    </section>
  )
}
