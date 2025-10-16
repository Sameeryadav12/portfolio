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
    timeline: '2025 – Ongoing',
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
    categories: ['Web', 'Backend'],
    summary:
      'Web admin platform for jobs, invoices, technicians, and scheduling with KPI dashboards and invoice syncing.',
    highlights: [
      'Implemented job creation, technician assignment, and automated pricing logic',
      'Invoice management with job–invoice syncing and consistency checks',
      'Dashboards and KPI cards for real-time tracking (open/closed/overdue)',
      'Reduced manual workload by 30%+ via streamlined flows and data integrity',
      'Led full-stack development for admin and technician portals (backend, frontend, database)',
      'Team of 5: Priyanshu (Scrum Master), Vin (Company Website), Vijaya (Testing/Docs), Quinh (Frontend), Sameer (Full-Stack Admin/Technician Portals)'
    ],
    links: {
      repo: 'https://github.com/Sameeryadav12/portfolio',
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
    visuals: {
      thumb: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMTI0RTY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IndoaXRlIiByeD0iMTAiLz4KPHRleHQgeD0iMjAwIiB5PSIxNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzEyNEU2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2FsbC1hLVRlY2huaWNpYW48L3RleHQ+Cjx0ZXh0IHg9IjIwMCIgeT0iMTgwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiMxMjRFNjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFkbWluIFBvcnRhbDwvdGV4dD4KPC9zdmc+',
      banner: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgdmlld0JveD0iMCAwIDgwMCA0MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSIjMTI0RTY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IndoaXRlIiByeD0iMTUiLz4KPHRleHQgeD0iNDAwIiB5PSIyMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iIzEyNEU2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Q2FsbC1hLVRlY2huaWNpYW48L3RleHQ+Cjx0ZXh0IHg9IjQwMCIgeT0iMjUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMxMjRFNjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFkbWluIFBvcnRhbDwvdGV4dD4KPC9zdmc+',
      gallery: [
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMTI0RTY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IndoaXRlIiByeD0iMTUiLz4KPHRleHQgeD0iNDAwIiB5PSIzMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iIzEyNEU2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QWRtaW4gRGFzaGJvYXJkPC90ZXh0Pgo8L3N2Zz4=',
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMTI0RTY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IndoaXRlIiByeD0iMTUiLz4KPHRleHQgeD0iNDAwIiB5PSIzMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iIzEyNEU2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Sm9iIE1hbmFnZW1lbnQ8L3RleHQ+Cjwvc3ZnPg==',
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgdmlld0JveD0iMCAwIDgwMCA2MDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNjAwIiBmaWxsPSIjMTI0RTY2Ii8+CjxyZWN0IHg9IjUwIiB5PSI1MCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI1MDAiIGZpbGw9IndoaXRlIiByeD0iMTUiLz4KPHRleHQgeD0iNDAwIiB5PSIzMDAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iIzEyNEU2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW52b2ljZSBTeXN0ZW08L3RleHQ+Cjwvc3ZnPg=='
      ],
      accent: '#124E66'
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
      youtube: 'https://www.youtube.com/watch?v=D_uVdsMsjbI',
      demo: 'https://www.youtube.com/watch?v=D_uVdsMsjbI'
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
      thumb: '/images/balance 3d thumbnail.png',
      banner: '/images/balance 3d thumbnail.png',
      gallery: [
        '/images/balance 3d thumbnail.png'
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
      demo: 'https://www.youtube.com/watch?v=9dDQtavNqco',
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
    thumb: '/images/atl-space/Screenshot 2025-10-11 113157.png',
    banner: '/images/atl-space/Screenshot 2025-10-11 113321.png',
    gallery: [
      '/images/atl-space/Screenshot 2025-10-11 113157.png',
      '/images/atl-space/Screenshot 2025-10-11 113321.png',
      '/images/atl-space/Screenshot 2025-10-11 113357.png',
      '/images/atl-space/Screenshot 2025-10-11 113426.png'
    ],
    accent: '#52D5FF'
  },
    stats: [
      { label: 'Bodies', value: '20+' },
      { label: 'Mode', value: 'Free-fly + Click-focus' }
    ]
  }
]
