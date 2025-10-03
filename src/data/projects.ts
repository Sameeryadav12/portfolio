// src/data/projects.ts

// ---------- Types (safe to extend; optional fields won't break current pages) ----------
export type DeepSection = {
  title: string
  body?: string
  items?: string[]
}

export type LinkSet = Partial<{
  repo: string
  demo: string
  youtube: string
  store: string
}>

export type Visuals = Partial<{
  thumb: string            // small image for cards
  banner: string           // wide hero image
  gallery: string[]        // extra screenshots
  accent: string           // hex accent for this project (optional)
}>

export type Stat = { label: string; value: string }

export type Project = {
  slug: string
  title: string
  role: string
  timeline: string
  stack: string[]
  summary: string
  highlights: string[]
  links?: LinkSet
  sections?: DeepSection[]
  visuals?: Visuals
  stats?: Stat[]           // quick metrics you might want to render later
  categories?: string[] 
}

// ---------- Data ----------
export const projects: Project[] = [
  {
  slug: 'call-a-technician',
  title: 'Call-a-Technician Admin Portal',
  role: 'Full-Stack Developer',
  timeline: '2025 – Ongoing',                 // ✅ was "period"
  stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
  categories: ['Web', 'Backend'],
  summary:
    'Web admin platform for jobs, invoices, technicians, and scheduling with KPI dashboards and invoice syncing.',
  highlights: [
    'Implemented job creation, technician assignment, and automated pricing logic',
    'Invoice management with job–invoice syncing and consistency checks',
    'Dashboards and KPI cards for real-time tracking (open/closed/overdue)',
    'Reduced manual workload by 30%+ via streamlined flows and data integrity',
    'Team of 5; one of two full-stack engineers (front-end & back-end integration)'
  ],
  links: {
    repo: '',                                  // leave empty until GitHub is ready
    demo: ''
  },
  sections: [
    {
      title: 'Key Decisions',
      items: [
        'MongoDB for flexible job/invoice schema; indexed queries for KPI cards',
        'Server-side pagination and validation in Express',
        'JWT-based auth; print-friendly invoice view for finance'
      ]
    },
    {
      title: 'What I’d Improve Next',
      items: [
        'Roster/columns schedule with conflict warnings',
        'Recurring jobs + calendar sync (iCal/Google)',
        'Background worker to pre-aggregate KPIs for large datasets'
      ]
    }
  ],
  visuals: {                                    // ✅ merged into a single "visuals"
    thumb: '/images/call-tech/thumb.png',
    banner: '/images/call-tech/banner.png',     // make sure the file exists
    gallery: [
      '/images/call-tech/screen-1.png',
      '/images/call-tech/screen-2.png'
    ],
    accent: '#124E66'                           // your teal accent
  },
  stats: [
    { label: 'Manual Work', value: '−30%+' },
    { label: 'Team Size', value: '5' }
  ]
},


  {
    slug: 'balance-3d',
    title: 'Balance 3D',
    role: 'Solo Developer',
    timeline: '2021 – 2022',
    stack: ['Unity 3D', 'C#', 'Blender', 'Photoshop/Figma'],
    categories: ['Game', 'Unity'],
    summary:
      'A 3D physics-based ball-balancing game with 12 levels, dynamic traps, and a level unlocking system. Previously on Google Play with 1,000+ downloads.',
    highlights: [
      'C# gameplay systems (physics, collisions, checkpoints, level unlocks)',
      'Level design with animated obstacles: moving bridges, rotating saws, spears, falling pins, narrow paths',
      'UI/UX: canvas menus, level select, settings (volume up/down), pause/resume',
      '3D assets created/edited in Blender; integrated third-party assets for polish',
      'Optimized controls and performance; delivered to real users (1,000+ downloads)'
    ],
    links: {
      repo: '',
      store: '',
      youtube: 'https://www.youtube.com/watch?v=D_uVdsMsjbI'
    },
    sections: [
      {
        title: 'Core Mechanics',
        items: [
          'Start-to-boat progression: reaching the boat wins the level and unlocks the next',
          'Hazards (water, traps) reset the level with consistent checkpointing',
          'Camera follow & sensitivity tuning for better feel on mobile'
        ]
      },
      {
        title: 'Design & Art',
        items: [
          'Obstacle modeling/edits in Blender; authored simple animations',
          'Graphic design for menus & HUD; cohesive visual style across levels'
        ]
      }
    ],
    visuals: {
      thumb: '/images/balance3d/thumb.jpg',
      banner: '/images/balance3d/banner.jpg',
      gallery: [
        '/images/balance3d/level-1.jpg',
        '/images/balance3d/level-4.jpg',
        '/images/balance3d/level-8.jpg'
      ],
      accent: '#31EE88'
    },
    stats: [
      { label: 'Downloads', value: '1,000+' },
      { label: 'Levels', value: '12' }
    ]
  },

  {
    slug: 'space-exploration-3d',
    title: 'Space Exploration 3D (ATL Space Challenge)',
    role: 'Lead Developer (3-member team)',
    timeline: '2021',
    stack: ['Unity 3D', 'C#', 'Graphic Design'],
    categories: ['Game', 'Unity', 'Education'],
    summary:
      'Interactive 3D solar-system app: free-fly camera, click any body (Sun, planets, moons, satellites) for detailed descriptions; quick-jump menu to focus camera.',
    highlights: [
      'Built C# interaction layer: movement, selection, camera focus/transition',
      'Structured educational content per celestial object; click-to-view info',
      'Menu to jump to planets/moons/satellites for fast navigation',
      'Led technical build; coordinated with teammates for docs & presentation'
    ],
    links: {
      repo: '',
      demo: '',
      youtube: 'https://www.youtube.com/watch?v=9dDQtavNqco'
    },
    sections: [
      {
        title: 'Interaction & Navigation',
        items: [
          'WASD/arrow keys + mouse look; speed clamping to reduce motion sickness',
          'Click object → smooth camera dolly/zoom and info panel reveal'
        ]
      },
      {
        title: 'Content & Visuals',
        items: [
          'Readable planet scale & textures (balance realism vs clarity)',
          'Graphic design for UI panels and menus; consistent typography/icons'
        ]
      }
    ],
    visuals: {
      thumb: '/images/space/thumb.jpg',
      banner: '/images/space/banner.jpg',
      gallery: ['/images/space/earth.jpg', '/images/space/jupiter.jpg', '/images/space/menu.jpg'],
      accent: '#52D5FF'
    },
    stats: [
      { label: 'Bodies', value: '20+' },
      { label: 'Mode', value: 'Free-fly + Click-focus' }
    ]
  },

  {
    slug: 'portfolio-website',
    title: 'Personal Portfolio Website',
    role: 'Full-Stack Frontend Developer',
    timeline: '2025',
    stack: ['React', 'TypeScript', 'Vite', 'TailwindCSS', 'React Router', 'Framer Motion', 'GitHub Actions', 'Vercel'],
    categories: ['Web', 'Portfolio'],
    summary:
      'A fast, modern portfolio to showcase projects with deep case studies, resume download, and a contact form. Built for performance, accessibility, and SEO.',
    highlights: [
      'Typed React + Tailwind design system; dark mode and subtle animations',
      'Projects module with cards and detailed case-study pages',
      'Resume viewer/download and serverless-ready contact form',
      'CI with GitHub Actions (typecheck/test/build) and Vercel deploy previews'
    ],
    links: {
      repo: '' // ← paste GitHub repo when ready
    },
    sections: [
      {
        title: 'Engineering Focus',
        items: [
          'Accessibility: keyboard navigation, semantic HTML, contrast-aware palette',
          'Performance: code splitting, image optimization; Lighthouse 95+ targets',
          'SEO: meta/OG, sitemap, JSON-LD'
        ]
      }
    ],
    visuals: {
      thumb: '/images/portfolio/thumb.png',
      banner: '/images/portfolio/banner.png',
      gallery: ['/images/portfolio/hero.png', '/images/portfolio/projects.png'],
      accent: '#8B5CF6'
    }
  }
]
