// src/lib/techIcons.ts
// Centralized tech icon mapping + helpers

// ==== ICON IMPORTS ====
// Core stack
import reactIcon         from '../assets/icons/react.svg'
import tsIcon            from '../assets/icons/typescript.svg'
import nodeIcon          from '../assets/icons/nodejs.svg'
import nodeAltIcon       from '../assets/icons/node-js.svg'
import expressIcon       from '../assets/icons/express.svg'
import mongoIcon         from '../assets/icons/mongodb.svg'

import tailwindIcon      from '../assets/icons/tailwind.svg'
import tailwindAltIcon   from '../assets/icons/tailwind-css.svg'
import viteIcon          from '../assets/icons/vite.svg'

// Basics
import htmlIcon          from '../assets/icons/html.svg'
import htmlAlt1Icon      from '../assets/icons/html-1.svg'
import htmlAlt2Icon      from '../assets/icons/html-2.svg'
import cssIcon           from '../assets/icons/css.svg'          // ✅ add CSS icon
import jsIcon            from '../assets/icons/js.svg'
import jsAltIcon         from '../assets/icons/js-1.svg'
import pythonIcon        from '../assets/icons/python.svg'

import csharpIcon        from '../assets/icons/c-sharp.svg'
import phpIcon           from '../assets/icons/php.svg'
import php2Icon          from '../assets/icons/php-2.svg'
import wordpressIcon     from '../assets/icons/wordpress.svg'
import awsIcon           from '../assets/icons/aws.svg'
import awsAlt1Icon       from '../assets/icons/aws-1.svg'
import awsAlt2Icon       from '../assets/icons/aws-2.svg'
import chromeIcon        from '../assets/icons/chrome.svg'
import webIcon           from '../assets/icons/web.svg'
import wwwIcon           from '../assets/icons/www.svg'
import programmingIcon   from '../assets/icons/programming.svg'

// Game & tools
import figmaIcon         from '../assets/icons/figma.svg'
import figma1Icon        from '../assets/icons/figma-1.svg'
import photoshopIcon     from '../assets/icons/photoshop.svg'
import unityIcon         from '../assets/icons/unity.svg'        // ✅ add Unity
import blenderIcon       from '../assets/icons/blender.svg'      // ✅ add Blender
import prismaIcon        from '../assets/icons/prisma.svg'       // ✅ add Prisma
import dockerIcon        from '../assets/icons/docker.svg'       // ✅ add Docker
import postgresIcon      from '../assets/icons/postgresql.svg'   // ✅ add PostgreSQL
import designIcon        from '../assets/icons/design.svg'       // ✅ unique design icon

// ==== FALLBACK PREFERENCES ====
// Pick the best-looking version if dupes exist
const REACT     = reactIcon     
const NODE      = nodeIcon      || nodeAltIcon
const TAILWIND  = tailwindIcon  || tailwindAltIcon
const HTML      = htmlIcon      || htmlAlt1Icon || htmlAlt2Icon
const CSS       = cssIcon
const JS        = jsIcon        || jsAltIcon
const FIGMA     = figmaIcon     || figma1Icon
const PHP       = phpIcon       || php2Icon
const AWS       = awsIcon       || awsAlt1Icon || awsAlt2Icon

// ==== TYPES ====
export type IconItem = { key: string; name: string; src: string }

// ==== ICON MAP ====
// Map all labels (in lowercase) to icons
const ICONS: Record<string, IconItem> = {
  // Core web stack
  'react':          { key: 'react',    name: 'React',          src: REACT },
  'typescript':     { key: 'ts',       name: 'TypeScript',     src: tsIcon },
  'node.js':        { key: 'node',     name: 'Node.js',        src: NODE },
  'nodejs':         { key: 'node',     name: 'Node.js',        src: NODE },
  'express.js':     { key: 'express',  name: 'Express.js',     src: expressIcon },
  'express':        { key: 'express',  name: 'Express.js',     src: expressIcon },
  'mongodb':        { key: 'mongo',    name: 'MongoDB',        src: mongoIcon },
  'tailwind':       { key: 'tailwind', name: 'Tailwind CSS',   src: TAILWIND },
  'tailwindcss':    { key: 'tailwind', name: 'Tailwind CSS',   src: TAILWIND },
  'vite':           { key: 'vite',     name: 'Vite',           src: viteIcon },
  'prisma':         { key: 'prisma',   name: 'Prisma',         src: prismaIcon },
  'docker':         { key: 'docker',   name: 'Docker',         src: dockerIcon },
  'postgresql':     { key: 'pg',       name: 'PostgreSQL',     src: postgresIcon },
  'sql':            { key: 'pg',       name: 'SQL',            src: postgresIcon },

  // Web basics
  'html':           { key: 'html',     name: 'HTML5',          src: HTML },
  'css':            { key: 'css',      name: 'CSS',            src: CSS },
  'javascript':     { key: 'js',       name: 'JavaScript',     src: JS },
  'js':             { key: 'js',       name: 'JavaScript',     src: JS },
  'python':         { key: 'py',       name: 'Python',         src: pythonIcon },
  'php':            { key: 'php',      name: 'PHP',            src: PHP },
  'wordpress':      { key: 'wp',       name: 'WordPress',      src: wordpressIcon },
  'aws':            { key: 'aws',      name: 'AWS',            src: AWS },
  'chrome':         { key: 'chrome',   name: 'Chrome',         src: chromeIcon },
  'web':            { key: 'web',      name: 'Web',            src: webIcon },
  'www':            { key: 'www',      name: 'Web',            src: wwwIcon },

  // Game & design
  'c#':             { key: 'csharp',   name: 'C#',             src: csharpIcon },
  'unity':          { key: 'unity',    name: 'Unity',          src: unityIcon },
  'blender':        { key: 'blender',  name: 'Blender',        src: blenderIcon },
  'figma':          { key: 'figma',    name: 'Figma',          src: FIGMA },
  'photoshop':      { key: 'ps',       name: 'Photoshop',      src: photoshopIcon },
  'graphic design': { key: 'design',   name: 'Graphic Design', src: designIcon },

  // Fallback generic
  'programming':    { key: 'prog',     name: 'Programming',    src: programmingIcon },
}

// ==== HELPERS ====
// Normalize strings → lowercase + trim
function normalize(label: string): string {
  return label.trim().toLowerCase()
}

// Convert ["React","TypeScript",...] → deduped array of {key,name,src}
export function toIconItems(tech?: string[]): IconItem[] {
  if (!tech?.length) return []

  const seen = new Set<string>()
  const out: IconItem[] = []

  for (const t of tech) {
    const norm = normalize(t)
    if (seen.has(norm)) continue // skip duplicates
    seen.add(norm)
    out.push(ICONS[norm] || { key: norm, name: t, src: programmingIcon })
  }

  return out
}
