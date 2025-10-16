export type Experience = {
  title: string
  company?: string
  location?: string
  period: string
  summary: string
  achievements?: string[]
}

export const intro = `Full stack developer with hands-on experience building web platforms, backend services, and mobile/3D apps. I help businesses by turning requirements into reliable products that connect the user interface, server logic, and data in a single system that teams can run every day. I focus on clear structure, simple user flows, and maintainable code in React, Node, and modern databases so features ship on time and are easy to extend.
What makes me different is end-to-end ownership: I handle UI, APIs, data models, auth, and release steps, plus I bring practical exposure across web, Android (Unity/C#), databases, and core networking. I’m seeking a full-stack developer role where I can take responsibility for features that matter to customers and the business.
`

export const experiences: Experience[] = [
  {
    title: 'Full Stack Developer',
    company: 'Call a Technician',
    period: 'Jan 2025 – Present',
    summary:
      'Built Admin and Technician Portal (CRM, jobs, invoices, scheduling). Stack: React, Vite, Tailwind, FullCalendar, Node.js, Express, MongoDB, JWT.',
    achievements: [
      'Replaced manual price edits with rule-based pricing for base and additional time',
      'Linked Jobs, Invoices, Customers, Calendar to avoid double entry',
      'Added calendar scheduling with color status and quick-create',
      'Delivered print-ready invoices and CSV exports',
    ],
  },
  {
    title: 'Pick and Packer',
    company: 'Woolworths Primary Connect (Gepps Cross Warehouse)',
    period: 'Feb 2024 – Present',
    summary:
      'Picked, packed, and staged orders in a high-volume warehouse; wrapped pallets; ensured accuracy and safety.',
    achievements: [
      'Met daily shift KPIs for accuracy and throughput',
      'Supported urgent runs during peaks without incident',
      'Maintained audit-ready work area and safe practices',
    ],
  },
  {
    title: 'Android Developer (Unity)',
    company: 'ATL — Space Exploration App',
    period: 'Jul 2021 – Oct 2021',
    summary:
      'Built an Android app to explore the solar system in 3D (Unity/C#). Implemented models, animations, interactions.',
    achievements: [
      'Delivered a working app used for ATL presentations',
      'Matched scientific detail with clear visuals and navigation',
    ],
  },
  {
    title: 'Game Developer (Personal Project)',
    company: 'Balance 3D',
    period: 'Jul 2020 – Nov 2020',
    summary:
      'Designed and developed a physics-based 3D mobile game in Unity with C#; levels, UI, and progression.',
    achievements: [
      'Released a complete mobile game with 12 levels',
      'Managed full lifecycle from design to publishing',
    ],
  },
]
