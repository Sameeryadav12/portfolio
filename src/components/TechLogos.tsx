// src/components/TechLogos.tsx - BULLETPROOF VERSION
import React from 'react';
import type { IconItem } from '../lib/techIcons';

// Simple, direct mapping to PNG files
const getIconPath = (techName: string): string | null => {
  const name = techName.toLowerCase().trim();
  
  const iconMap: Record<string, string> = {
    'react': 'react.png',
    'typescript': 'typescript.png',
    'node.js': 'nodejs.png',
    'nodejs': 'nodejs.png',
    'express.js': 'expressjs.png',
    'expressjs': 'expressjs.png',
    'express': 'expressjs.png',
    'mongodb': 'mongodb.png',
    'tailwind css': 'tailwindcss.png',
    'tailwindcss': 'tailwindcss.png',
    'jwt': 'jwt.png',
    'fullcalendar': 'fullcalendar.png',
    'react query': 'react-query.png',
    'react-query': 'react-query.png',
    'unity': 'unity.png',
    'unity 3d': 'unity.png',
    'c#': 'csharp.png',
    'csharp': 'csharp.png',
    'blender': 'blender.png',
    'photoshop': 'photoshop.png',
    'figma': 'figma.png',
    'graphic design': 'design.png',
    'design': 'design.png',
    'vite': 'vite.png',
    'framer motion': 'framer.png',
    'docker': 'docker.png',
    'postgresql': 'postgresql.png',
    'redis': 'redis.png',
    'socket.io': 'socketio.png',
    'react native': 'react.png',
    'expo': 'expo.png',
    'prisma': 'prisma.png',
    'stripe api': 'stripe.png',
    'multer': 'nodejs.png',
    'unity physics': 'unity.png',
    'cinemachine': 'unity.png',
    'push notifications': 'notification.png',
    'bcrypt': 'security.png',
  };
  
  return iconMap[name] || null;
};

export default function TechLogos({
  items,
  size = 24,
}: { items: IconItem[]; size?: number }) {
  if (!items?.length) return null;

  console.log(`🔍 TechLogos received items:`, items);

  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => {
        const iconFileName = getIconPath(item.name);
        const iconPath = iconFileName ? `/images/tech-icons/icons-png/${iconFileName}` : null;
        
        console.log(`🔍 TechLogos: ${item.name} → ${iconFileName} → ${iconPath}`);
        
        return (
          <li key={item.key}>
            <div
              className="
                h-10 w-10 rounded-lg
                flex items-center justify-center
                ring-1 ring-slate-300/30
                bg-slate-800/90 hover:bg-slate-700/80
                transition-all duration-300
                backdrop-blur-sm
                hover:scale-110 hover:ring-2
                relative
                group
              "
              title={item.name}
            >
              {iconPath ? (
                <img
                  src={iconPath}
                  alt={item.name}
                  style={{ 
                    width: size, 
                    height: size,
                    minWidth: '24px',
                    minHeight: '24px',
                    border: '2px solid blue'  // Debug border
                  }}
                  className="object-contain drop-shadow-lg"
                  loading="lazy"
                  onLoad={() => {
                    console.log(`✅ Icon loaded successfully: ${item.name} from ${iconPath}`);
                  }}
                  onError={(e) => {
                    console.log(`❌ Icon failed to load: ${item.name} from ${iconPath}`);
                    // Show fallback text
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.textContent = item.name.substring(0, 2).toUpperCase();
                    fallback.style.cssText = `
                      width: ${size}px; 
                      height: ${size}px; 
                      display: flex; 
                      align-items: center; 
                      justify-content: center; 
                      background: rgba(100, 100, 100, 0.5); 
                      color: white; 
                      font-size: 10px; 
                      font-weight: bold;
                      border-radius: 4px;
                    `;
                    target.parentNode?.appendChild(fallback);
                  }}
                />
              ) : (
                <span className="text-xs text-slate-300 font-semibold">
                  {item.name.substring(0, 2).toUpperCase()}
                </span>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}