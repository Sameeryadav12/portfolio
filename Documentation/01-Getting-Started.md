# 🚀 Getting Started

Welcome! This guide will help you set up and run the portfolio project on your computer.

---

## 📋 What You'll Need

Before starting, make sure you have:

### Required Software

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Choose the LTS (Long Term Support) version
   - This includes npm (Node Package Manager)

2. **A Code Editor** (recommended)
   - VS Code: https://code.visualstudio.com/
   - Or any text editor you prefer

3. **Git** (optional but recommended)
   - Download from: https://git-scm.com/
   - Used for version control

### Checking if You Have Node.js

Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and run:

```bash
node --version
```

You should see something like `v18.0.0` or higher. If not, install Node.js first.

```bash
npm --version
```

You should see something like `8.0.0` or higher.

---

## 📥 Step 1: Get the Project

### If You Have Git

```bash
# Clone the repository
git clone <your-repository-url>

# Navigate into the project folder
cd portfolio
```

### If You Don't Have Git

1. Download the project as a ZIP file
2. Extract it to a folder on your computer
3. Open terminal/command prompt in that folder

---

## 📦 Step 2: Install Dependencies

Dependencies are the external packages and libraries that the project needs to run.

```bash
# Install all dependencies
npm install
```

This will take a few minutes. You'll see a progress bar as npm downloads and installs everything.

**What's happening?**
- npm reads the `package.json` file
- Downloads all required packages
- Creates a `node_modules` folder with all dependencies

**If you see any warnings**, that's usually okay. Errors (in red) mean something went wrong.

---

## ✅ Step 3: Verify Installation

After installation completes, check if everything is ready:

```bash
# Check if the project can build
npm run typecheck
```

If this runs without errors, you're all set! ✅

---

## 🚀 Step 4: Start the Development Server

Now let's run the project:

### Option 1: Frontend Only (Quick Start)

```bash
npm run dev
```

This starts the website at: **http://localhost:5173**

Open your browser and visit that URL to see your portfolio!

### Option 2: Full Setup (Frontend + API)

For the contact form to work, you need both servers:

```bash
npm run dev:full
```

This starts:
- **Frontend**: http://localhost:5173 (your portfolio)
- **API Server**: http://localhost:3001 (handles contact form)

---

## 🎉 Success!

If you see the portfolio website in your browser, congratulations! 🎊

You should see:
- Your portfolio homepage
- Navigation menu
- Projects section
- About section
- Contact form

---

## 🔍 Understanding What You See

### Terminal Output

When you run `npm run dev`, you'll see:

```
  VITE v5.4.9  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

This means:
- Vite (the build tool) is running
- Your site is available at http://localhost:5173
- Press Ctrl+C to stop the server

### Browser

You should see:
- ✅ The portfolio homepage loads
- ✅ You can navigate between pages
- ✅ Animations work smoothly
- ✅ Theme switcher works

---

## 🐛 Troubleshooting

### Port Already in Use

**Error**: `Port 5173 is already in use`

**Solution**: Another application is using that port.
```bash
# Kill the process or use a different port
npm run dev -- --port 3000
```

### Module Not Found

**Error**: `Cannot find module 'xyz'`

**Solution**: Dependencies not installed properly.
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Permission Errors

**Error**: `EACCES: permission denied`

**Solution**: Don't use `sudo` with npm. Fix permissions:
```bash
# On Mac/Linux
sudo chown -R $USER ~/.npm
```

### Nothing Happens

**Solution**: 
1. Make sure you're in the project folder
2. Check if Node.js is installed: `node --version`
3. Try reinstalling dependencies: `npm install`

---

## 📁 Project Structure Overview

Here's what the main folders contain:

```
portfolio/
├── src/                  # Source code
│   ├── components/       # Reusable UI components
│   ├── routes/          # Page components
│   ├── data/            # Data files (projects, experience)
│   ├── theme/           # Theme configuration
│   └── App.tsx          # Main application component
├── public/              # Static files (images, resume)
├── api/                 # Backend API endpoints
├── Documentation/       # This documentation
├── package.json         # Project configuration & dependencies
└── vite.config.ts       # Build tool configuration
```

---

## ⚙️ Configuration Files

You don't need to edit these files yet, but here's what they do:

| File | Purpose |
|------|---------|
| `package.json` | Lists all dependencies and scripts |
| `tsconfig.json` | TypeScript configuration |
| `vite.config.ts` | Build tool settings |
| `tailwind.config.js` | CSS framework configuration |
| `vercel.json` | Deployment configuration |

---

## 🎯 What's Next?

Now that you have the project running:

1. **Explore the code** - Open files in `src/` and see how they work
2. **Make changes** - Edit some text and see it update automatically
3. **Set up features** - Follow the [Development Setup Guide](./02-Development-Setup.md)
4. **Customize content** - Add your own projects and information

---

## 💡 Helpful Tips

### Hot Reload

When you edit and save a file, the browser automatically refreshes! No need to manually reload.

### Console is Your Friend

Press **F12** in your browser to open Developer Tools. The console shows:
- Error messages
- Warnings
- Debug information

### Saving Changes

Changes you make in your code editor are reflected immediately in the browser (thanks to hot reload).

### Stopping the Server

To stop the development server:
- Press **Ctrl+C** in the terminal
- Or close the terminal window

### Restarting the Server

If something goes wrong:
1. Stop the server (Ctrl+C)
2. Start it again (`npm run dev`)

---

## 🎓 Learning Resources

New to web development? Check out:

- **JavaScript**: https://javascript.info/
- **React**: https://react.dev/learn
- **TypeScript**: https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
- **Tailwind CSS**: https://tailwindcss.com/docs

---

## ✅ Checklist

Before moving on, make sure:

- [ ] Node.js is installed (version 18+)
- [ ] You've run `npm install` successfully
- [ ] You can start the dev server (`npm run dev`)
- [ ] You can see the website at http://localhost:5173
- [ ] Hot reload is working (edit a file and see changes)

---

## 🚀 Next Steps

Ready to customize and deploy? Continue to:

**→ [Development Setup Guide](./02-Development-Setup.md)**

Learn how to work with the development server and understand the project structure better.

---

**Need Help?** Check the [Troubleshooting Guide](./08-Troubleshooting.md) or the main [README](./README.md).




