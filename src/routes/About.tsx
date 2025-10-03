import { motion } from 'framer-motion'

export default function About() {
  return (
    <div className="space-y-6">
      <motion.header
        className="rounded-3xl border border-brand-mist/20 bg-brand-slate/40 p-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-brand-fog">About</h1>
        <p className="mt-3 text-brand-fog/90">
          Full stack developer with hands-on experience building web platforms, backend services, and mobile/3D apps.
          I turn requirements into reliable products that connect UI, API, and data in a single system. I focus on clear
          structure, simple user flows, and maintainable code in React, Node, and modern databases so features ship on time
          and are easy to extend. I bring end-to-end ownership across UI, APIs, data models, auth, and release steps —
          with practical exposure to web, Android (Unity/C#), databases, and core networking.
        </p>
        <p className="mt-3 text-brand-fog/90">
          I’m seeking a full-stack developer role where I can take responsibility for features that matter to customers
          and the business.
        </p>
      </motion.header>

      {/* Hard Skills */}
      <section className="rounded-3xl border border-brand-mist/20 bg-brand-slate/40 p-6">
        <h2 className="text-xl font-semibold text-brand-fog">Hard Skills</h2>
        <ul className="mt-3 list-disc list-inside text-brand-fog/90 space-y-1">
          <li><strong>Programming:</strong> Python, C++, C#, Java, JavaScript, TypeScript, Bash</li>
          <li><strong>Web Development:</strong> React, Node.js, Express, REST APIs, HTML5, CSS3, Firebase, MongoDB, SQL, PostgreSQL, MySQL</li>
          <li><strong>Tools & Cloud:</strong> Git, GitHub, GitHub Actions, Docker, Jira, VS Code, Postman, Linux, Vercel, Firebase Hosting, Netlify, AWS EC2/S3</li>
          <li><strong>Networking & Practices:</strong> TCP/IP, DNS, DHCP, VPNs, VLANs, subnetting, API design, JWT auth, CI/CD, performance tuning</li>
          <li><strong>Operations & Delivery:</strong> Project scheduling, Agile/Scrum, stakeholder communication, technical writing/documentation</li>
          <li><strong>Systems:</strong> Hardware/software install (workstations, drivers, basic diagnostics)</li>
          <li><strong>Game/3D:</strong> Unity (C#), Blender (animation, 3D modeling), UX for gameplay</li>
        </ul>
      </section>

      {/* Soft Skills */}
      <section className="rounded-3xl border border-brand-mist/20 bg-brand-slate/40 p-6">
        <h2 className="text-xl font-semibold text-brand-fog">Soft Skills</h2>
        <ul className="mt-3 list-disc list-inside text-brand-fog/90 space-y-1">
          <li>Communication & active listening • Team collaboration & leadership • Cultural awareness</li>
          <li>Problem-solving & critical thinking • Conflict resolution & negotiation</li>
          <li>Time management & multitasking • Customer focus & reliability • Creativity & innovation</li>
          <li>Ability to work under pressure</li>
        </ul>
      </section>
    </div>
  )
}
