export type Testimonial = {
  name: string
  role: string
  quote: string
  avatar?: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Project Supervisor',
    role: 'Federation University',
    quote:
      'Sameer delivered consistently — from reliable backend endpoints to polished front-end flows. The KPI work directly reduced manual workload for our stakeholders.'
  },
  {
    name: 'Teammate — Admin Portal',
    role: 'Full-Stack Developer',
    quote:
      'Great collaborator. He took ownership of complex tasks and kept the team unblocked with clear communication and clean code.'
  },
  {
    name: 'User — Balance 3D',
    role: 'Google Play Review',
    quote:
      'The levels are challenging in a good way. Feels polished. Would love more levels!'
  }
]
