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
    role: 'Full-Stack Developer & Technical Lead',
    timeline: '2025 – Ongoing',
    stack: ['React', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'JWT', 'FullCalendar', 'React Query'],
    categories: ['Web', 'Backend', 'Full-Stack', 'Business Management'],
    summary:
      'Comprehensive business management system with job lifecycle management, advanced pricing system, CRM, technician management, invoice & billing, visual scheduling, and marketing integration. Features 50+ API endpoints, real-time updates, and secure authentication.',
    highlights: [
      'Built complete job lifecycle management: creation, assignment, scheduling, tracking, and completion with automated pricing logic',
      'Advanced pricing system: $165 base (2 hours) + $20.625 per 15-min increments + software licensing + pension/social media discounts',
      'Comprehensive CRM: customer database with 5-digit auto-generated IDs, address autocomplete for 200+ SA locations, and customer history tracking',
      'Technician management: staff scheduling, time-off tracking, working hours, skills management, and conflict detection system',
      'Professional invoicing: job-invoice syncing, real-time calculations, print-ready invoices, CSV export/import, and status tracking',
      'Interactive calendar: drag-drop scheduling, FullCalendar integration, technician filtering, time-off visualization, and conflict prevention',
      'Marketing integration: incoming job requests from website with image uploads, customer details, and automated job ID generation',
      'Real-time updates: React Query for data synchronization, optimistic updates, and automatic cache management',
      'Secure authentication: JWT-based auth with 7-day expiration, bcrypt password hashing, protected routes, and user-scoped data access',
      'Reduced manual workload by 30%+ through streamlined workflows, automated calculations, and data integrity checks',
      'Led full-stack development for admin and technician portals (backend, frontend, database) with team of 5 developers'
    ],
    links: {
      repo: 'https://github.com/Sameeryadav12/portfolio',
      demo: ''
    },
    sections: [
      {
        title: 'System Architecture',
        items: [
          'Frontend: React 18 with Hooks, Vite, TailwindCSS, React Query, React Router v6, FullCalendar',
          'Backend: Express.js REST API, MongoDB + Mongoose, JWT authentication, bcrypt password hashing',
          'Database: 6 models (User, Job, Invoice, Technician, Customer, IncomingJobRequest) with indexed queries',
          '50+ API endpoints covering authentication, jobs, invoices, technicians, customers, and time-off management'
        ]
      },
      {
        title: 'Key Features Implemented',
        items: [
          'Job Management: Create/edit jobs with customer auto-suggest, technician assignment, scheduling, and status tracking',
          'Pricing System: Base $165 + additional time pricing + software licensing + stackable discounts (pension 10%, social 5%)',
          'Customer CRM: 5-digit auto-generated IDs, comprehensive SA address database, customer history, and quick job creation',
          'Technician Management: Staff profiles, skills tracking, working hours, time-off management, and availability checking',
          'Invoice System: Professional invoicing with job sync, real-time calculations, print views, and CSV export/import',
          'Calendar Scheduling: Drag-drop interface, conflict detection, technician filtering, and time-off visualization',
          'Marketing Integration: Public job request endpoint with image uploads and automated processing'
        ]
      },
      {
        title: 'Technical Achievements',
        items: [
          'Built 7 main pages with 5,330+ lines of code across dashboard, CRM, technician management, invoicing, and scheduling',
          'Implemented comprehensive data validation: client-side and server-side validation with conflict detection',
          'Created real-time KPI dashboards: job counts by status, invoice totals, overdue tracking, and technician metrics',
          'Developed secure authentication system: JWT tokens, protected routes, user-scoped data access, and session management',
          'Optimized performance: React Query caching, MongoDB indexing, debounced search, and optimistic updates'
        ]
      },
      {
        title: 'Business Impact',
        items: [
          'Reduced manual workload by 30%+ through automated pricing, job-invoice syncing, and streamlined workflows',
          'Improved data integrity with comprehensive validation, conflict detection, and real-time synchronization',
          'Enhanced customer experience with address autocomplete, automated job creation, and professional invoicing',
          'Streamlined technician management with scheduling, time-off tracking, and availability checking',
          'Enabled data-driven decisions with real-time KPIs, export capabilities, and comprehensive reporting'
        ]
      },
      {
        title: 'What I Would Improve Next',
        items: [
          'Advanced calendar features: recurring jobs, iCal/Google Calendar sync, and roster view with conflict warnings',
          'Enhanced reporting: background workers for KPI pre-aggregation, advanced analytics, and custom dashboards',
          'Mobile optimization: dedicated mobile app or PWA for technicians in the field',
          'Integration capabilities: payment processing, email notifications, and third-party service integrations',
          'Advanced features: job templates, bulk operations, advanced search filters, and automated workflows'
        ]
      }
    ],
    visuals: {
      thumb: '/images/call-a-technician-thumbnail.jpg',
      banner: '/images/call-a-technician-thumbnail.jpg',
      gallery: [
        '/images/call-a-technician-thumbnail.jpg'
      ],
      accent: '#124E66'
    },
    stats: [
      { label: 'Manual Work Reduction', value: '−30%+' },
      { label: 'Team Size', value: '5' },
      { label: 'API Endpoints', value: '50+' },
      { label: 'Database Models', value: '6' },
      { label: 'Lines of Code', value: '5,330+' },
      { label: 'Features', value: '95% Complete' }
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
      thumb: '/images/balance%203d%20thumbnail.png',
      banner: '/images/balance%203d%20thumbnail.png',
      gallery: [
        '/images/balance%203d%20thumbnail.png',
        '/images/balance-3d/Image%201.png',
        '/images/balance-3d/Image%202.png',
        '/images/balance-3d/Image%203.png',
        '/images/balance-3d/Image%204.png',
        '/images/balance-3d/Image%205.png',
        '/images/balance-3d/Image%206.png',
        '/images/balance-3d/Image%207.png',
        '/images/balance-3d/Image%208.png'
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
      thumb: '/images/atl-space/atl1.png',
      banner: '/images/atl-space/atl1.png',
      gallery: [
        '/images/atl-space/atl1.png',
        '/images/atl-space/atl2.png',
        '/images/atl-space/atl3.png',
        '/images/atl-space/atl4.png',
        '/images/atl-space/atl5.png',
        '/images/atl-space/atl6.png',
        '/images/atl-space/atl7.png',
        '/images/atl-space/atl8.png'
      ],
      accent: '#52D5FF'
    },
  stats: [
    { label: 'Bodies', value: '20+' },
    { label: 'Mode', value: 'Free-fly + Click-focus' }
  ]
}
]
