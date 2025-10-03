import { useEffect } from 'react'
import html2pdf from 'html2pdf.js'

export default function Resume() {
  // Ensure light background when printing
  useEffect(() => {
    document.title = 'Sameer Yadav — Resume'
  }, [])

  const handlePrint = () => window.print()

  return (
    <div className="space-y-4 print:space-y-0">
      <div className="flex items-center justify-between print:hidden">
        <h1 className="text-3xl font-bold text-brand-fog">Resume</h1>
        <button
          onClick={handlePrint}
          className="rounded-2xl px-4 py-2 text-white"
          style={{ backgroundColor: '#124E66' }}
        >
          Download PDF
        </button>
      </div>

      {/* A4 sheet */}
      <div className="bg-white text-black rounded-2xl shadow-xl p-8 print:rounded-none print:shadow-none resume-a4">
        {/* Header */}
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold">Sameer Yadav</h2>
          <div className="text-sm">
            <span>Adelaide, SA</span> • <a href="mailto:" className="underline">email</a> • <a href="" className="underline">github</a> • <a href="" className="underline">linkedin</a>
          </div>
        </div>
        <div className="mt-2 text-sm text-neutral-700">
          Full-stack developer focused on React, Node/Express, and modern databases. I build reliable UI + API + data systems with clear structure and maintainable code.
        </div>

        {/* Experience */}
        <h3 className="mt-5 text-lg font-bold">Experience</h3>
        <section className="mt-2 space-y-3 text-sm">
          <div>
            <div className="flex justify-between font-semibold">
              <span>Full Stack Developer, Call a Technician</span>
              <span>Jan 2025 – Present</span>
            </div>
            <div className="italic text-neutral-700">Built Admin & Technician Portal (CRM, jobs, invoices, scheduling). Stack: React, Vite, Tailwind, FullCalendar, Node.js, Express, MongoDB, JWT.</div>
            <ul className="list-disc list-inside mt-1">
              <li>Rule-based pricing (replaced manual edits)</li>
              <li>Linked Jobs ⇄ Invoices ⇄ Customers ⇄ Calendar to remove double entry</li>
              <li>Calendar scheduling with status colors & quick-create</li>
              <li>Print-ready invoices & CSV exports</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-semibold">
              <span>Pick & Packer — Woolworths Primary Connect</span>
              <span>Feb 2024 – Present</span>
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>Met daily KPIs for accuracy and throughput</li>
              <li>Supported urgent runs during peaks without incident</li>
              <li>Maintained audit-ready work area & safe practices</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-semibold">
              <span>Android Developer (Unity) — ATL Space Exploration</span>
              <span>Jul 2021 – Oct 2021</span>
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>Built interactive solar-system app in Unity/C# with models, animations, and smooth performance</li>
            </ul>
          </div>

          <div>
            <div className="flex justify-between font-semibold">
              <span>Game Dev — Balance 3D (Personal)</span>
              <span>Jul 2020 – Nov 2020</span>
            </div>
            <ul className="list-disc list-inside mt-1">
              <li>Designed & shipped a 12-level physics game in Unity (1,000+ downloads)</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <h3 className="mt-5 text-lg font-bold">Skills</h3>
        <div className="mt-1 grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
          <div><strong>Programming:</strong> Python, C++, C#, Java, JS, TS, Bash</div>
          <div><strong>Web:</strong> React, Node, Express, REST, HTML5, CSS3</div>
          <div><strong>Databases:</strong> MongoDB, SQL, PostgreSQL, MySQL</div>
          <div><strong>Cloud/Tools:</strong> Git, GitHub, Actions, Docker, Jira, Postman, Linux, Vercel, Firebase, Netlify, AWS EC2/S3</div>
          <div><strong>Practices:</strong> API design, JWT auth, CI/CD, perf tuning, Agile/Scrum</div>
          <div><strong>Game/3D:</strong> Unity (C#), Blender</div>
        </div>

        {/* Education (optional) */}
        {/* <h3 className="mt-5 text-lg font-bold">Education</h3> */}
      </div>
    </div>
  )
}
