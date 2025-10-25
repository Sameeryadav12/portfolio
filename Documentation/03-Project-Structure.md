# 📁 Project Structure Guide

This guide explains how the project is organized and what each file does.

---

## 🗂️ Overview

```
portfolio/
├── 📁 src/                    # Source code (your React app)
├── 📁 public/                 # Static files
├── 📁 api/                    # Backend API
├── 📁 Documentation/          # This documentation
├── 📁 dist/                   # Build output (auto-generated)
├── 📁 node_modules/           # Dependencies (auto-generated)
├── 📄 package.json            # Project configuration
├── 📄 vite.config.ts          # Build tool config
├── 📄 tsconfig.json           # TypeScript config
├── 📄 tailwind.config.js      # CSS framework config
└── 📄 vercel.json             # Deployment config
```

---

## 📁 Source Code (`src/`)

This is where all your React code lives.

### Directory Structure

```
src/
├── 📁 components/         # Reusable UI components
├── 📁 routes/            # Page components
├── 📁 data/              # Data files
├── 📁 theme/             # Theme system
├── 📁 lib/               # Utility functions
├── 📁 assets/            # Icons and images
├── 📁 posts/             # Blog posts
├── 📄 App.tsx            # Main app & routing
├── 📄 main.tsx           # Entry point
└── 📄 index.css          # Global styles
```

---

### 🧩 Components (`src/components/`)

**Reusable UI components** used across multiple pages.

| Component | Purpose | Used On |
|-----------|---------|---------|
| `Header.tsx` | Navigation bar | All pages |
| `Hero.tsx` | Homepage hero section | Homepage |
| `About.tsx` | About section | Homepage |
| `Projects.tsx` | Project showcase | Homepage, Projects page |
| `Skills.tsx` | Skills display | Homepage, Skills page |
| `Experience.tsx` | Work experience | Homepage |
| `TechLogos.tsx` | Technology logos | Various pages |
| `ThemeSelector.tsx` | Theme switcher | Header |
| `ScrollToTop.tsx` | Scroll to top button | All pages |
| `Layout.tsx` | Page layout wrapper | All pages |

**Example: Header.tsx**
```typescript
// Displays navigation menu
// Features:
// - Logo
// - Navigation links
// - Theme switcher
// - Responsive mobile menu
```

---

### 📄 Routes (`src/routes/`)

**Full page components** - each file represents a page on your website.

| Route File | URL Path | Description |
|------------|----------|-------------|
| `Home.tsx` | `/` | Homepage |
| `About.tsx` | `/about` | About page |
| `Projects.tsx` | `/projects` | Projects showcase |
| `Project.tsx` | `/projects/:id` | Individual project |
| `Skills.tsx` | `/skills` | Skills page |
| `Contact.tsx` | `/contact` | Contact form |
| `Resume.tsx` | `/resume` | Resume/CV page |
| `BlogList.tsx` | `/blog` | Blog posts list |
| `BlogPost.tsx` | `/blog/:slug` | Individual blog post |
| `NotFound.tsx` | `*` | 404 error page |

**Example: Contact.tsx**
```typescript
// Contact form page
// Features:
// - Form fields (name, email, subject, message)
// - Math captcha for spam protection
// - Form validation
// - Success/error messages
```

---

### 📊 Data (`src/data/`)

**Data files** that power your content.

#### `projects.ts` - Your Projects

```typescript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    image: "/images/project.jpg",
    technologies: ["React", "TypeScript"],
    github: "https://github.com/...",
    demo: "https://example.com",
    category: "Web Development"
  }
]
```

**To add a new project:**
1. Open `src/data/projects.ts`
2. Add a new object to the array
3. Include image in `public/images/`

#### `experience.ts` - Work Experience

```typescript
export const experience = [
  {
    company: "Company Name",
    position: "Job Title",
    duration: "Jan 2020 - Present",
    description: "What you did",
    technologies: ["Tech1", "Tech2"]
  }
]
```

#### `testimonials.ts` - Testimonials

```typescript
export const testimonials = [
  {
    name: "Client Name",
    role: "Their Position",
    company: "Their Company",
    testimonial: "What they said",
    image: "/images/testimonial.jpg"
  }
]
```

---

### 🎨 Theme (`src/theme/`)

**Theme system** for color schemes and styling.

#### `themes.ts` - Theme Definitions

```typescript
export const themes = {
  default: {
    primary: "#3b82f6",      // Blue
    secondary: "#8b5cf6",    // Purple
    accent: "#ec4899",       // Pink
    background: "#ffffff",   // White
    text: "#1f2937"          // Dark gray
  },
  dark: {
    primary: "#60a5fa",
    secondary: "#a78bfa",
    accent: "#f472b6",
    background: "#111827",   // Dark
    text: "#f9fafb"          // Light gray
  }
}
```

**To add a new theme:**
1. Add new theme object to `themes.ts`
2. Theme switcher will automatically include it

#### `ThemeProvider.tsx` - Theme Context

Provides theme to all components using React Context.

---

### 🛠️ Utilities (`src/lib/`)

**Helper functions** and utilities.

#### `techIcons.ts` - Technology Icons

Maps technology names to their icon components:

```typescript
export const techIcons = {
  'React': <ReactIcon />,
  'TypeScript': <TypeScriptIcon />,
  'Python': <PythonIcon />
  // ... more
}
```

#### `readingTime.ts` - Reading Time Calculator

Calculates estimated reading time for blog posts:

```typescript
export function calculateReadingTime(content: string): string {
  // Returns "5 min read"
}
```

---

### 📝 Blog Posts (`src/posts/`)

**Markdown files** for blog content.

Example post structure:
```markdown
---
title: "Blog Post Title"
date: "2024-01-15"
excerpt: "Short description"
tags: ["Tag1", "Tag2"]
---

## Content here

Your blog post content in Markdown format.
```

**To add a new blog post:**
1. Create a new `.md` file in `src/posts/`
2. Add frontmatter (metadata)
3. Write content in Markdown
4. It will automatically appear in the blog list

---

### 🎯 Main Files

#### `App.tsx` - Application Entry & Routing

```typescript
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* More routes */}
      </Routes>
    </Router>
  )
}
```

**This file:**
- Sets up routing
- Wraps app with providers (Theme, etc.)
- Defines all page routes

#### `main.tsx` - App Mount Point

```typescript
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**This file:**
- Mounts React to the DOM
- Wraps app in StrictMode for development

#### `index.css` - Global Styles

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom global styles */
body {
  font-family: 'Inter', sans-serif;
}
```

---

## 📁 Public (`public/`)

**Static files** served as-is (not processed by build tool).

```
public/
├── 📁 images/                 # Images
│   ├── project1.jpg
│   ├── project2.jpg
│   └── ...
├── 📁 cv/                     # Resume PDF
│   └── Sameer_Yadav_Resume.pdf
├── 📁 icons/                  # PWA icons
│   ├── icon-192.png
│   └── icon-512.png
├── 📄 robots.txt              # SEO: Search engine rules
├── 📄 manifest.webmanifest    # PWA manifest
└── 📄 vite.svg                # Vite logo
```

**How to use:**
```tsx
// In your components, reference files directly:
<img src="/images/project.jpg" alt="Project" />
<a href="/cv/Sameer_Yadav_Resume.pdf" download>Resume</a>
```

---

## 🔌 API (`api/`)

**Backend API endpoints** for serverless functions.

### `contact.js` - Contact Form Handler

```javascript
// Handles POST requests to /api/contact
export default async function handler(req, res) {
  // 1. Validate input
  // 2. Check captcha
  // 3. Send email via Resend
  // 4. Return response
}
```

**Handles:**
- Form validation
- Captcha verification
- Email sending
- Error handling

**Environment variables used:**
- `RESEND_API_KEY` - For sending emails
- `VITE_CONTACT_EMAIL` - Your email address

---

## ⚙️ Configuration Files

### `package.json` - Project Metadata

```json
{
  "name": "sameer-portfolio",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
    // ... more
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  }
}
```

**Contains:**
- Project name and version
- Dependencies list
- Scripts for development and building
- Node.js version requirements

---

### `tsconfig.json` - TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "jsx": "react-jsx",
    "strict": true
  }
}
```

**Configures:**
- TypeScript compilation
- Module resolution
- Type checking strictness

---

### `vite.config.ts` - Build Tool Configuration

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
})
```

**Configures:**
- React plugin
- Development server
- API proxy
- Build optimizations

---

### `tailwind.config.js` - CSS Framework Config

```javascript
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Custom colors
      }
    }
  }
}
```

**Configures:**
- Content files to scan
- Custom colors
- Theme extensions

---

### `vercel.json` - Deployment Configuration

```json
{
  "functions": {
    "api/contact.js": {
      "maxDuration": 30
    }
  },
  "rewrites": [
    {
      "source": "/api/:path*",
      "destination": "/api/:path*"
    }
  ]
}
```

**Configures:**
- Serverless functions
- Route rewrites
- Build settings

---

## 🏗️ Build Output (`dist/`)

**Auto-generated** when you run `npm run build`.

```
dist/
├── assets/              # Compiled JS and CSS
│   ├── index-xxx.js
│   └── index-xxx.css
├── images/             # Optimized images
├── index.html          # Main HTML file
└── ...
```

**Don't edit files here!** They're overwritten on each build.

---

## 📦 Dependencies (`node_modules/`)

**Auto-generated** when you run `npm install`.

Contains all installed packages. **Very large folder** (100k+ files).

**Never:**
- Edit files here
- Commit to Git
- Worry about what's inside

**If something breaks:**
```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 🔍 File Types Explained

### `.tsx` Files - TypeScript + React

```typescript
// Example: Component.tsx
import React from 'react'

export default function Component() {
  return <div>Hello!</div>
}
```

- TypeScript + JSX syntax
- Used for React components
- Type-safe

### `.ts` Files - TypeScript

```typescript
// Example: utils.ts
export function formatDate(date: Date): string {
  return date.toLocaleDateString()
}
```

- Pure TypeScript
- Used for utilities and data
- No JSX

### `.css` Files - Stylesheets

```css
/* Example: styles.css */
.my-class {
  color: blue;
}
```

- Standard CSS
- Global or component styles

### `.md` Files - Markdown

```markdown
# Heading

This is **bold** text.
```

- Used for blog posts
- Simple text formatting

---

## 📊 How It All Connects

```
User visits website
      ↓
index.html loads
      ↓
main.tsx runs
      ↓
App.tsx renders
      ↓
Router matches URL
      ↓
Route component renders
      ↓
Uses data from data/
      ↓
Styled with Tailwind CSS
      ↓
Theme from theme/
```

---

## 🎯 Key Concepts

### Components

Small, reusable pieces of UI:
```tsx
// Button component
function Button({ text }) {
  return <button>{text}</button>
}

// Use it anywhere:
<Button text="Click me!" />
```

### Props

Data passed to components:
```tsx
<Project 
  title="My Project"
  description="Cool project"
/>
```

### State

Data that changes:
```tsx
const [count, setCount] = useState(0)
// count is the value, setCount updates it
```

### Routing

Connecting URLs to pages:
```tsx
<Route path="/about" element={<About />} />
// /about shows the About component
```

---

## ✅ Best Practices

### File Organization

- ✅ Keep components small and focused
- ✅ Group related files together
- ✅ Use clear, descriptive names
- ✅ One component per file

### Code Style

- ✅ Use TypeScript types
- ✅ Follow existing patterns
- ✅ Comment complex logic
- ✅ Keep functions short

### Asset Management

- ✅ Optimize images before adding
- ✅ Use appropriate file formats
- ✅ Keep file sizes small
- ✅ Organize in folders

---

## 🚀 Next Steps

Now that you understand the structure:

**→ [Contact Form Setup](./04-Contact-Form-Setup.md)**

Learn how to set up and customize the contact form.

---

**Need Help?** Return to the main [README](./README.md) or check the [Troubleshooting Guide](./08-Troubleshooting.md).











