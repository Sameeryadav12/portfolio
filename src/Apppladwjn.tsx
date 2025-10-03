import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col items-center justify-center gap-8">
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Sameer Yadav</h1>
        <p className="text-white/80">
          Final-Year B.IT (Software Engineering) • Backend & Full-Stack Developer
        </p>
      </header>

      <div className="card text-center">
        <p className="mb-3">Tailwind + Vite + React are working 🎉</p>
        <button className="btn btn-primary" onClick={() => setCount((c) => c + 1)}>
          count is {count}
        </button>
      </div>

      <p className="text-white/60">
        Edit <code className="text-brand-sky">src/App.tsx</code> and save to test HMR
      </p>
    </div>
  )
}
