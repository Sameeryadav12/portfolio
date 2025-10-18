# 🎨 Technology Icons Guide

This folder contains icon images for all the technologies used in your projects.

## 📋 Required Icons

Based on your current projects, you need these icon files:

### Core Technologies
- `react.svg` - React
- `typescript.svg` - TypeScript
- `nodejs.svg` - Node.js
- `expressjs.svg` - Express.js
- `mongodb.svg` - MongoDB
- `vite.svg` - Vite

### Styling & UI
- `tailwindcss.svg` - Tailwind CSS
- `framer.svg` - Framer Motion
- `figma.svg` - Figma
- `design.svg` - Graphic Design (generic design icon)

### Game Development
- `unity.svg` - Unity 3D
- `csharp.svg` - C#
- `blender.svg` - Blender

### Backend & Database
- `postgresql.svg` - PostgreSQL
- `redis.svg` - Redis
- `prisma.svg` - Prisma

### Authentication & Security
- `jwt.svg` - JWT
- `security.svg` - bcrypt/security

### Mobile & Other
- `expo.svg` - Expo
- `socketio.svg` - Socket.io
- `stripe.svg` - Stripe API
- `docker.svg` - Docker
- `notification.svg` - Push Notifications

### Calendar & Libraries
- `fullcalendar.svg` - FullCalendar
- `react-query.svg` - React Query

### Fallback
- `default.svg` - Default icon for unknown technologies

---

## 🌐 Where to Get Icons

### Best Sources (Free & High Quality):

1. **Simple Icons** (https://simpleicons.org/)
   - Has almost every tech logo
   - Clean SVG format
   - Consistent style

2. **DevIcon** (https://devicon.dev/)
   - Developer-focused icons
   - Multiple variations (plain, original, line)

3. **Icons8** (https://icons8.com/)
   - Large library
   - Free for personal use

4. **Iconify** (https://icon-sets.iconify.design/)
   - Huge collection
   - Easy to search

### Quick Links:
- React: https://simpleicons.org/?q=react
- Node.js: https://simpleicons.org/?q=node
- MongoDB: https://simpleicons.org/?q=mongo
- Unity: https://simpleicons.org/?q=unity

---

## 📏 Icon Specifications

For best results, your icons should be:

- **Format**: SVG (recommended) or PNG
- **Size**: 512x512px or vector
- **Style**: Flat, simple, recognizable
- **Background**: Transparent
- **Color**: Original brand colors or white/monochrome

---

## 🎨 Naming Convention

File names should match exactly as they appear in the `techIconMap` in `TechIcon.tsx`:

```
Technology Name in Code → Icon Filename
------------------------------------------
"React"                  → react.svg
"Node.js"                → nodejs.svg
"TypeScript"             → typescript.svg
"C#"                     → csharp.svg
"Unity 3D"               → unity.svg
```

**Important**: Use lowercase for filenames!

---

## 🚀 How to Add New Icons

1. **Download icon** from one of the sources above
2. **Rename** to match the technology name (lowercase, .svg extension)
3. **Place** in this folder (`public/images/tech-icons/`)
4. **Test** - hover over the icon on your portfolio to see the tooltip

If the icon doesn't load, the system will automatically fall back to showing text badges.

---

## 🔧 Customization

Want to add a new technology?

1. Add it to your project's `stack` array in `src/data/projects.ts`
2. Add the mapping in `src/components/TechIcon.tsx`:
   ```typescript
   'Your Tech Name': 'filename.svg',
   ```
3. Add the icon file to this folder

---

## 💡 Tips

- **Consistent Style**: Try to use icons from the same source for consistency
- **Test Colors**: Some icons look better in dark/light mode - test both!
- **Optimize**: Use SVG format when possible for smaller file sizes
- **Credits**: If required, keep a credits.txt file for attribution

---

## ✅ Quick Checklist

Once you've added all icons:

- [ ] All icon files are in SVG format
- [ ] File names match the mapping in TechIcon.tsx
- [ ] Icons are transparent background
- [ ] Tested on your portfolio (hover to see tooltips)
- [ ] Icons look good in dark mode
- [ ] No missing icons (check browser console for errors)

---

**Need help?** Check the Documentation folder for more guides!





