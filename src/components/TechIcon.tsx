import React, { useState } from 'react'

interface TechIconProps {
  name: string
  size?: 'sm' | 'md' | 'lg'
}

// Map technology names to their icon filenames (using PNG)
const techIconMap: Record<string, string> = {
  'React': 'react.png',
  'TypeScript': 'typescript.png',
  'Node.js': 'nodejs.png',
  'Express.js': 'expressjs.png',
  'MongoDB': 'mongodb.png',
  'TailwindCSS': 'tailwindcss.png',
  'JWT': 'jwt.png',
  'FullCalendar': 'fullcalendar.png',
  'React Query': 'react-query.png',
  'Unity 3D': 'unity.png',
  'C#': 'csharp.png',
  'Blender': 'blender.png',
  'Photoshop/Figma': 'photoshop.png',
  'Figma': 'figma.png',
  'Graphic Design': 'design.png',
  'Vite': 'vite.png',
  'Framer Motion': 'framer.png',
  'Docker': 'docker.png',
  'PostgreSQL': 'postgresql.png',
  'Redis': 'redis.png',
  'Socket.io': 'socketio.png',
  'React Native': 'react.png',
  'Expo': 'expo.png',
  'Prisma': 'prisma.png',
  'Express': 'expressjs.png',
  'Stripe API': 'stripe.png',
  'Multer': 'nodejs.png',
  'Unity Physics': 'unity.png',
  'Cinemachine': 'unity.png',
  'Push Notifications': 'notification.png',
  'bcrypt': 'security.png',
}

const TechIcon: React.FC<TechIconProps> = ({ name, size = 'md' }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  }

  const iconFileName = techIconMap[name]
  
  // If no icon mapping exists, show text badge immediately
  if (!iconFileName) {
    return (
      <span className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
        {name}
      </span>
    )
  }
  
  const iconPath = `/images/tech-icons/icons-png/${iconFileName}`

  // If image fails to load, show text badge
  if (imageError) {
    return (
      <span className="px-3 py-1 bg-slate-700 text-slate-300 text-xs rounded-full">
        {name}
      </span>
    )
  }

  return (
    <div
      className="relative inline-flex items-center justify-center group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Tech Icon */}
      <div className={`${sizeClasses[size]} transition-transform duration-200 group-hover:scale-110`}>
        <img
          src={iconPath}
          alt={name}
          className="w-full h-full object-contain filter drop-shadow-lg"
          onLoad={() => {
            setImageLoaded(true)
          }}
          onError={() => {
            setImageError(true)
          }}
        />
      </div>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full mb-2 px-3 py-1.5 bg-slate-900 text-white text-xs rounded-lg shadow-lg z-10 whitespace-nowrap border border-slate-700 animate-fade-in">
          {name}
          {/* Tooltip Arrow */}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
            <div className="border-4 border-transparent border-t-slate-900" />
          </div>
        </div>
      )}
    </div>
  )
}

export default TechIcon