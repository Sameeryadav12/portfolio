# 🛠️ Development Setup Guide

This guide explains how to work with the development environment and understand the different modes.

---

## 🎯 Understanding the Setup

This portfolio has two parts:

1. **Frontend** - The website you see (React app)
2. **API Server** - Handles the contact form (Node.js server)

---

## 🚀 Running the Project

### Method 1: Frontend Only (Basic)

Perfect for viewing and editing the website without using the contact form.

```bash
npm run dev
```

**What starts:**
- ✅ Frontend at http://localhost:5173

**What works:**
- ✅ All pages (Home, About, Projects, etc.)
- ✅ Theme switching
- ✅ Navigation
- ✅ Animations

**What doesn't work:**
- ❌ Contact form submission (will get 404 error)

---

### Method 2: Full Stack (Recommended)

For full functionality including the contact form.

```bash
npm run dev:full
```

**What starts:**
- ✅ Frontend at http://localhost:5173
- ✅ API Server at http://localhost:3001

**What works:**
- ✅ Everything from Method 1
- ✅ Contact form submission
- ✅ Form validation
- ✅ Email simulation (in development mode)

---

### Method 3: Separate Terminals (Advanced)

For better control and debugging.

**Terminal 1 - API Server:**
```bash
npm run dev:api
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

**Advantage:** See logs from each server separately.

---

## 🔍 What Happens When You Start?

### Frontend Server

```
VITE v5.4.9  ready in 500 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

**This means:**
- Vite is running and serving your React app
- Visit http://localhost:5173 to see it
- Changes to code will auto-reload the browser

### API Server

```
🚀 Development API server running on http://localhost:3001
📧 Contact endpoint: http://localhost:3001/api/contact
```

**This means:**
- API server is ready to handle form submissions
- Contact form will work properly
- Emails will be simulated (logged to console)

---

## 🎨 Development vs Production

### Development Mode (localhost)

**What it does:**
- ✅ Fast hot reload
- ✅ Detailed error messages
- ✅ Simulated email sending (no real emails sent)
- ✅ Console logging for debugging
- ✅ CORS enabled for testing

**Email behavior:**
When you submit the contact form in development:
```javascript
// In the console you'll see:
Development mode: Simulating email send
Email would be sent to: rishisameer7@gmail.com
From: user@example.com
Subject: Portfolio Contact: Test Subject
Message: Test message here
```

**No real emails are sent** - this is intentional! It lets you test without spamming your inbox.

### Production Mode (Vercel)

**What it does:**
- ✅ Optimized build
- ✅ Real email sending via Resend
- ✅ Security headers enabled
- ✅ Rate limiting active
- ✅ Production error handling

**Email behavior:**
Real emails are sent to your inbox immediately!

---

## 🏗️ Project Structure Deep Dive

### Source Code (`src/`)

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Top navigation
│   ├── Hero.tsx        # Homepage hero section
│   ├── Projects.tsx    # Projects showcase
│   └── ...             # Other components
│
├── routes/             # Page components (full pages)
│   ├── Home.tsx       # Homepage
│   ├── About.tsx      # About page
│   ├── Contact.tsx    # Contact form page
│   ├── Projects.tsx   # Projects page
│   └── ...            # Other pages
│
├── data/              # Data files
│   ├── projects.ts    # Project information
│   ├── experience.ts  # Work experience
│   └── ...            # Other data
│
├── theme/             # Theme configuration
│   ├── themes.ts      # Theme colors & settings
│   └── ThemeProvider.tsx  # Theme context
│
├── lib/               # Utility functions
│   └── techIcons.ts   # Technology icons mapping
│
├── App.tsx           # Main app component & routing
├── main.tsx          # App entry point
└── index.css         # Global styles
```

### API (`api/`)

```
api/
└── contact.js         # Contact form handler
```

This file:
- Receives form submissions
- Validates input
- Checks captcha
- Sends emails (in production)
- Returns responses

### Public (`public/`)

```
public/
├── images/           # Images used in the site
│   └── ...
├── cv/              # Your resume PDF
│   └── Sameer_Yadav_Resume.pdf
├── icons/           # PWA icons
└── ...              # Other static files
```

Static files that are served as-is.

---

## 🔧 Configuration Files

### `package.json` - Project Configuration

```json
{
  "scripts": {
    "dev": "vite",                    // Start frontend
    "dev:api": "node dev-server.js",  // Start API
    "dev:full": "concurrently ...",   // Start both
    "build": "vite build",            // Build for production
    "preview": "vite preview"         // Preview production build
  }
}
```

### `vite.config.ts` - Build Configuration

Key features:
- **Proxy**: Routes `/api` requests to port 3001
- **React plugin**: Enables React features
- **Build optimization**: Minification, chunking

### `dev-server.js` - Development API Server

A simple Express server that:
- Handles `/api/contact` POST requests
- Validates form data
- Simulates email sending
- Returns appropriate responses

---

## 🧪 Testing Your Setup

### 1. Test Frontend

1. Start the server: `npm run dev`
2. Open http://localhost:5173
3. Navigate through all pages
4. Try the theme switcher
5. Check for any console errors (F12)

### 2. Test Contact Form

1. Start full stack: `npm run dev:full`
2. Go to http://localhost:5173/contact
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Subject: Test Subject
   - Message: This is a test message
4. Solve the math captcha (e.g., "3 + 2 = ?" → enter "5")
5. Click Submit

**Expected Result:**
- ✅ Success message appears
- ✅ Form resets
- ✅ Console shows email details
- ✅ No errors in browser console

### 3. Check Console Output

**API Server Terminal:**
```
Contact form submission received: {
  name: 'Test User',
  email: 'test@example.com',
  subject: 'Test Subject',
  message: 'This is a test message'
}
Captcha verification passed
Simulating email send...
Email would be sent to: rishisameer7@gmail.com
```

**Browser Console (F12):**
```javascript
Form submission started
Captcha validation passed
Sending email...
✅ Email sent successfully!
```

---

## 🎯 Development Workflow

### Daily Development Flow

1. **Start the server** in the morning
   ```bash
   npm run dev:full
   ```

2. **Edit files** in your code editor
   - Changes auto-reload in the browser
   - Check console for errors

3. **Test your changes**
   - Navigate through affected pages
   - Check responsive design (F12 → Device toolbar)
   - Test on different themes

4. **Commit changes** (if using Git)
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

5. **Stop the server** when done
   - Press Ctrl+C in terminal

### Making Changes

**To edit content:**
1. Find the relevant file in `src/routes/` or `src/data/`
2. Edit the content
3. Save the file
4. Browser auto-reloads with your changes

**To edit styling:**
1. Find the component file
2. Edit Tailwind classes or CSS
3. Save and see changes immediately

**To add new features:**
1. Create new component in `src/components/`
2. Import and use it where needed
3. Test thoroughly

---

## 🐛 Common Development Issues

### Port Already in Use

**Error:**
```
Port 5173 is already in use
```

**Solution:**
```bash
# Option 1: Kill the existing process
# On Windows: Open Task Manager, end node.exe processes
# On Mac/Linux: lsof -ti:5173 | xargs kill -9

# Option 2: Use a different port
npm run dev -- --port 3000
```

### Changes Not Reflecting

**Problem:** You edit a file but don't see changes

**Solutions:**
1. **Save the file** (Ctrl+S)
2. **Hard refresh** browser (Ctrl+Shift+R)
3. **Restart the dev server**
   ```bash
   # Stop: Ctrl+C
   # Start: npm run dev
   ```
4. **Clear browser cache**

### Module Not Found

**Error:**
```
Cannot find module 'xyz'
```

**Solution:**
```bash
# Reinstall dependencies
npm install

# If that doesn't work, clean install:
rm -rf node_modules package-lock.json
npm install
```

### API 404 Error

**Error:**
```
POST http://localhost:5173/api/contact 404 (Not Found)
```

**Solution:**
```bash
# Make sure you're running the full stack:
npm run dev:full

# Not just:
npm run dev
```

---

## 💡 Development Tips

### Browser Developer Tools

Press **F12** to open:
- **Console**: See logs, errors, warnings
- **Network**: See API requests and responses
- **Elements**: Inspect and edit HTML/CSS live
- **Sources**: Debug JavaScript

### VS Code Extensions (Recommended)

- **ES7+ React/Redux/React-Native snippets** - Fast React coding
- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind
- **ESLint** - Code quality checks
- **Prettier** - Code formatting

### Hot Reload Magic

Vite's hot reload is smart:
- **Component changes** → Updates without full reload
- **CSS changes** → Injects new styles instantly
- **Route changes** → Refreshes the page

### Console Logging

Add `console.log()` anywhere to debug:
```typescript
console.log('Debug:', someVariable)
```

View it in browser console (F12).

---

## 📊 Performance Monitoring

### Build Size

```bash
npm run build
```

Check the output to see bundle sizes. Keep an eye on:
- JavaScript chunks
- CSS file size
- Asset sizes

### Load Time

Use browser DevTools → Network tab to see:
- Total load time
- Individual file load times
- Network requests

---

## ✅ Development Checklist

Before committing changes:

- [ ] Code runs without errors
- [ ] All pages load correctly
- [ ] Contact form works (if changed)
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] No console errors or warnings
- [ ] Theme switcher works
- [ ] Navigation works on all pages

---

## 🚀 Next Steps

Now that you understand the development setup:

**→ [Project Structure Guide](./03-Project-Structure.md)**

Learn about the detailed project structure and how everything connects.

---

**Need Help?** Check the [Troubleshooting Guide](./08-Troubleshooting.md) or return to the main [README](./README.md).





