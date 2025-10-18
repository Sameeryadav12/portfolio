# 🎨 Sameer's Portfolio

[![License](https://img.shields.io/badge/License-Private-red.svg)](https://github.com/Sameeryadav12/portfolio)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)

A modern, professional portfolio website built with React, TypeScript, and Vite. Features responsive design, dark/light themes, contact form, blog system, and project showcase.

## ✨ Live Demo

🌐 **[View Live Portfolio](https://sameer-portfolio.vercel.app)**

## 🚀 Features

- 🎯 **Responsive Design** - Perfect on all devices
- 🌗 **Multiple Themes** - Dark/light mode with custom themes
- 📧 **Contact Form** - With anti-spam protection
- 📝 **Blog System** - Markdown-based blog posts
- 🚀 **Fast Performance** - Optimized with Vite
- 🔒 **Secure** - Multiple security layers
- 📱 **PWA Ready** - Progressive Web App support
- 🎨 **Modern UI** - Beautiful animations with Framer Motion

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/Sameeryadav12/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Start with API server (for contact form)
npm run dev:full

# Build for production
npm run build
```

---

## 📚 Documentation

Complete documentation is available in the **[Documentation](./Documentation/)** folder:

### Getting Started
- **[Getting Started Guide](./Documentation/01-Getting-Started.md)** - Installation and setup
- **[Development Setup](./Documentation/02-Development-Setup.md)** - Running the project
- **[Project Structure](./Documentation/03-Project-Structure.md)** - Understanding the codebase

### Features
- **[Contact Form Setup](./Documentation/04-Contact-Form-Setup.md)** - Configure contact form
- **[Email Configuration](./Documentation/05-Email-Configuration.md)** - Set up email sending
- **[Security Features](./Documentation/06-Security-Features.md)** - Security overview

### Deployment
- **[Deployment Guide](./Documentation/07-Deployment-Guide.md)** - Deploy to Vercel
- **[Troubleshooting](./Documentation/08-Troubleshooting.md)** - Fix common issues
- **[GitHub Preparation](./Documentation/11-GitHub-Preparation.md)** - Prepare for GitHub

### Recent Fixes
- **[Icon System Fix](./Documentation/10-Icon-System-Fix.md)** - Icon system improvements
- **[Final Organization Summary](./Documentation/12-Final-Organization-Summary.md)** - Complete project organization overview

### Advanced
- **[Admin Portal](./Documentation/09-Admin-Portal.md)** - Admin portal documentation

**Start here**: [Documentation README](./Documentation/README.md)

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express.js
- **Email**: Resend API
- **Deployment**: Vercel
- **Version Control**: Git, GitHub

---

## 🎨 Customization

### Personal Information
- Edit `src/routes/About.tsx` for personal details
- Update `src/data/projects.ts` for projects
- Modify `src/data/experience.ts` for work experience
- Customize `src/data/testimonials.ts` for testimonials

### Styling
- Colors: `src/theme/themes.ts`
- Components: `src/components/`
- Pages: `src/routes/`

### Content
- Blog posts: `src/posts/`
- Images: `public/images/`
- Icons: `public/images/tech-icons/`

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run dev:full     # Start with API server
npm run build        # Build for production
npm run preview      # Preview production build
npm run typecheck    # TypeScript type checking
npm run lint         # ESLint checking
```

## 📁 Project Structure

```
portfolio/
├── Documentation/          # Complete documentation
├── public/                # Static assets
│   ├── images/           # Project images and icons
│   ├── icons/            # PWA icons
│   └── cv/               # Resume files
├── src/
│   ├── components/       # Reusable components
│   ├── routes/          # Page components
│   ├── data/            # Static data
│   ├── theme/           # Theme configuration
│   └── lib/             # Utility functions
├── api/                 # Backend API
└── scripts/             # Build scripts
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Use GitHub Actions for deployment
- **Railway**: Deploy with one-click setup

## 🤝 Contributing

While this is a personal portfolio, contributions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: rishisameer7@gmail.com
- **Portfolio**: [Live Site](https://sameer-portfolio.vercel.app)
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub Profile](https://github.com/Sameeryadav12)

---

## 📝 License

This project is private and proprietary. All rights reserved.

© 2025 Sameer Yadav

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from various open-source icon sets
- Fonts from Google Fonts
- Images and assets are original or properly licensed

---

**⭐ If you found this portfolio helpful, please give it a star!**

**Need Help?** Check the **[Documentation](./Documentation/)** folder for detailed guides.
