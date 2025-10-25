# 🚀 Deployment Guide

Complete guide to deploying your portfolio to production using Vercel.

---

## 🎯 Overview

**Vercel** is a cloud platform for deploying web applications:

- ✅ **Free tier** - Perfect for portfolios
- ✅ **Automatic HTTPS** - Secure by default
- ✅ **Global CDN** - Fast worldwide
- ✅ **Automatic deployments** - Push code, it deploys
- ✅ **Serverless functions** - API routes work automatically
- ✅ **Custom domains** - Use your own domain

**Time to deploy**: ~10 minutes

---

## 📋 Pre-Deployment Checklist

Before deploying, make sure:

- [ ] Project works locally (`npm run dev:full`)
- [ ] No console errors
- [ ] All pages load correctly
- [ ] Contact form works
- [ ] You have a GitHub account
- [ ] You have a Vercel account
- [ ] Code is committed to Git

---

## 🚀 Step-by-Step Deployment

### Step 1: Prepare Your Code

1. **Make sure everything is working:**
   ```bash
   npm run dev:full
   ```
   Visit http://localhost:5173 and test all features.

2. **Build the project** (optional but recommended):
   ```bash
   npm run build
   ```
   This checks for build errors before deploying.

3. **Commit all changes:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   ```

**Time**: ~2 minutes

---

### Step 2: Push to GitHub

1. **Create a new repository** on GitHub:
   - Go to https://github.com/new
   - Name: `portfolio` (or any name)
   - Privacy: Private (recommended) or Public
   - **Don't** initialize with README
   - Click "Create repository"

2. **Connect your local code to GitHub:**
   ```bash
   # Add remote (replace YOUR_USERNAME)
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   
   # Push code
   git branch -M main
   git push -u origin main
   ```

3. **Verify** - Refresh GitHub, you should see your code!

**Time**: ~2 minutes

---

### Step 3: Deploy to Vercel

1. **Go to**: https://vercel.com

2. **Sign up** or **Sign in**:
   - Use your GitHub account (easiest)
   - Or email/Google

3. **Click "New Project"** (big button)

4. **Import your GitHub repository:**
   - If first time: Click "Add GitHub Account"
   - Allow Vercel to access GitHub
   - Find your `portfolio` repository
   - Click "Import"

5. **Configure the project:**

   **Project Name:**
   ```
   portfolio
   ```
   (or any name - this becomes your URL)

   **Framework Preset:**
   ```
   Vite
   ```
   (Should auto-detect)

   **Root Directory:**
   ```
   ./
   ```
   (Leave as is)

   **Build Command:**
   ```
   npm run build
   ```

   **Output Directory:**
   ```
   dist
   ```

   **Install Command:**
   ```
   npm install
   ```

6. **Environment Variables** (important!):
   
   Click "Environment Variables" dropdown
   
   **Add these variables:**

   ```
   Variable 1:
   Name: RESEND_API_KEY
   Value: re_your_resend_api_key
   Environment: Production, Preview, Development
   
   Variable 2:
   Name: VITE_CONTACT_EMAIL
   Value: rishisameer7@gmail.com
   Environment: Production, Preview, Development
   ```

   (Get RESEND_API_KEY from [Email Configuration](./05-Email-Configuration.md) if you haven't already)

7. **Click "Deploy"**

8. **Wait for deployment** (~2 minutes)
   - You'll see build logs
   - "Building..." then "Deploying..."
   - Finally "Ready"

**Time**: ~5 minutes

---

### Step 4: Celebrate! 🎉

Your portfolio is now live!

**Your URL:**
```
https://your-project-name.vercel.app
```

**What to test:**

1. **Visit your live site**
2. **Test all pages:**
   - [ ] Home page loads
   - [ ] About page works
   - [ ] Projects display correctly
   - [ ] Skills page shows up
   - [ ] Resume/CV is viewable
   - [ ] Blog works (if you have posts)

3. **Test contact form:**
   - [ ] Form loads
   - [ ] Math captcha works
   - [ ] Form submits successfully
   - [ ] Email arrives in your inbox
   - [ ] Reply-to is correct

4. **Test on mobile:**
   - [ ] Responsive design works
   - [ ] Navigation menu works
   - [ ] Forms work on mobile

**Time**: ~5 minutes

---

## 🌐 Custom Domain Setup

Want to use your own domain (e.g., `yourname.com`)?

### Prerequisites

- Own a domain (buy from GoDaddy, Namecheap, Google Domains, etc.)
- Have access to DNS settings

### Steps

1. **In Vercel dashboard:**
   - Click your project
   - Go to "Settings" → "Domains"
   - Click "Add"
   - Enter your domain: `yourname.com`
   - Click "Add"

2. **Configure DNS** (in your domain provider):

   Vercel will show you DNS records to add. Typically:

   **For root domain** (`yourname.com`):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

   **For www** (`www.yourname.com`):
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **Wait for DNS propagation** (5 minutes to 48 hours)

4. **Verify** - Visit your domain!

**Automatic HTTPS** is set up by Vercel (SSL certificates).

---

## 🔄 Automatic Deployments

Every time you push to GitHub, Vercel automatically:

1. Detects the new code
2. Builds the project
3. Runs tests
4. Deploys to production
5. Sends you a notification

### Making Updates

```bash
# 1. Make changes to your code
# Edit files in your editor

# 2. Test locally
npm run dev:full

# 3. Commit changes
git add .
git commit -m "Updated homepage"

# 4. Push to GitHub
git push origin main

# 5. Vercel auto-deploys (watch in dashboard)
# Visit https://vercel.com/dashboard
```

**Deployment time**: 1-2 minutes

---

## 🎨 Preview Deployments

Vercel creates preview deployments for branches and pull requests:

### Create Preview

```bash
# Create new branch
git checkout -b new-feature

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push branch
git push origin new-feature
```

**Result:**
- Vercel creates preview deployment
- Get unique URL: `https://portfolio-abc123.vercel.app`
- Test changes without affecting production
- Merge when ready

---

## 📊 Monitoring Your Site

### Vercel Dashboard

View important metrics:

**Analytics** (free tier includes):
- Page views
- Unique visitors
- Popular pages
- Traffic sources
- Performance data

**Functions Logs**:
- API request logs
- Error messages
- Response times
- Invocation counts

**Build Logs**:
- Build history
- Build duration
- Success/failure status
- Error messages

---

## ⚙️ Advanced Configuration

### Environment Variables

Add more variables in Vercel dashboard:

**Settings → Environment Variables**

```env
# Analytics
VITE_GA_ID=G-XXXXXXXXXX

# Feature flags
VITE_ENABLE_BLOG=true
VITE_ENABLE_PROJECTS=true

# API keys
VITE_API_KEY=your_api_key
```

**Remember**: Variables starting with `VITE_` are available in frontend.

---

### Custom Headers

Already configured in `public/_headers`:

```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
```

**These are automatically applied** by Vercel.

---

### Redirects

Add to `vercel.json`:

```json
{
  "redirects": [
    {
      "source": "/old-page",
      "destination": "/new-page",
      "permanent": true
    }
  ]
}
```

---

### 404 Page

Already included: `src/routes/NotFound.tsx`

Vercel automatically serves this for 404 errors.

---

## 🐛 Deployment Troubleshooting

### Build Failed

**Check build logs:**
1. Go to Vercel dashboard
2. Click failed deployment
3. View logs for errors

**Common issues:**

**TypeScript errors:**
```bash
# Fix locally first
npm run typecheck

# Fix errors shown
# Then deploy again
```

**Missing dependencies:**
```bash
# Make sure package.json is up to date
npm install
git add package.json package-lock.json
git commit -m "Update dependencies"
git push
```

**Environment variables:**
- Check they're set correctly
- No typos in names
- Values are correct

---

### Site Not Loading

**Check these:**

1. **Deployment status** - Is it "Ready"?
2. **DNS settings** - Correct if using custom domain
3. **Browser cache** - Try incognito/private mode
4. **Console errors** - Check browser console (F12)

---

### API Errors

**Contact form not working?**

1. **Check environment variables:**
   - `RESEND_API_KEY` is set
   - `VITE_CONTACT_EMAIL` is set
   - No extra spaces

2. **Check function logs:**
   - Vercel dashboard → Functions
   - Look for `/api/contact` errors
   - Read error messages

3. **Test API directly:**
   ```bash
   curl -X POST https://your-site.vercel.app/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test message","captchaAnswer":"5","captchaQuestion":"3 + 2 = ?"}'
   ```

---

### Slow Performance

**Optimize:**

1. **Images** - Compress before uploading
2. **Dependencies** - Remove unused packages
3. **Code splitting** - Already done by Vite
4. **Caching** - Automatic on Vercel

**Check performance:**
- Use Lighthouse (F12 → Lighthouse)
- Aim for 90+ scores
- Follow suggestions

---

## 🔒 Security After Deployment

### Immediate Steps

- [ ] Test HTTPS works (https://your-site.com)
- [ ] Verify security headers (use https://securityheaders.com)
- [ ] Test contact form spam protection
- [ ] Check CORS is working
- [ ] Verify rate limiting works

### Ongoing

- [ ] Monitor error logs weekly
- [ ] Check for suspicious activity
- [ ] Update dependencies monthly
- [ ] Review access logs
- [ ] Test security features after updates

---

## 📈 Performance Tips

### Optimize Images

**Before adding images:**
```bash
# Use tools like:
- TinyPNG (https://tinypng.com)
- ImageOptim (Mac)
- Squoosh (https://squoosh.app)
```

**Good practices:**
- Use WebP format when possible
- Compress JPEG/PNG
- Max width: 1920px for full-width images
- Use appropriate sizes

### Lazy Loading

Images already lazy load with React:
```tsx
<img 
  src="/images/large-image.jpg" 
  loading="lazy"
  alt="Description"
/>
```

### Code Splitting

Vite automatically splits code into chunks. You can optimize further:

```typescript
// Lazy load routes
const About = lazy(() => import('./routes/About'))
const Projects = lazy(() => import('./routes/Projects'))
```

---

## 📊 Analytics Setup (Optional)

### Google Analytics

1. **Get tracking ID** from Google Analytics

2. **Add to environment variables:**
   ```
   VITE_GA_ID=G-XXXXXXXXXX
   ```

3. **Add to `index.html`:**
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### Vercel Analytics

Already available in dashboard (free tier).

**Enable:**
1. Go to project settings
2. Click "Analytics"
3. Enable Web Analytics

---

## ✅ Post-Deployment Checklist

After deploying:

### Functionality

- [ ] All pages load correctly
- [ ] Navigation works
- [ ] Contact form works
- [ ] Email delivery confirmed
- [ ] Resume/CV downloads
- [ ] Images load properly
- [ ] Links work
- [ ] Mobile responsive

### Performance

- [ ] Lighthouse score 90+
- [ ] Images optimized
- [ ] Load time under 3 seconds
- [ ] No console errors

### Security

- [ ] HTTPS enabled
- [ ] Security headers present
- [ ] CORS working
- [ ] Rate limiting active
- [ ] Captcha working

### SEO

- [ ] Meta tags present
- [ ] Open Graph tags
- [ ] Sitemap accessible
- [ ] Robots.txt present
- [ ] Title tags unique

---

## 🎯 Going Live Checklist

Final steps before announcing:

- [ ] Test on multiple devices
- [ ] Test on multiple browsers
- [ ] Test all forms
- [ ] Check spelling/grammar
- [ ] Update social media links
- [ ] Add professional email
- [ ] Set up custom domain (optional)
- [ ] Enable analytics
- [ ] Create backup of code
- [ ] Share with friends for feedback

---

## 🚀 Next Steps

Your portfolio is live! Now what?

1. **Share it:**
   - Add to LinkedIn
   - Add to resume
   - Share on social media
   - Add to email signature

2. **Keep it updated:**
   - Add new projects
   - Update experience
   - Write blog posts
   - Refresh content regularly

3. **Monitor:**
   - Check analytics
   - Read error logs
   - Watch for contact form submissions
   - Track visitor behavior

4. **Improve:**
   - Act on feedback
   - Update based on analytics
   - Add new features
   - Optimize performance

---

## 📚 Useful Vercel Commands

### Vercel CLI (Optional)

Install CLI for advanced features:

```bash
# Install
npm install -g vercel

# Login
vercel login

# Deploy from terminal
vercel

# Deploy to production
vercel --prod

# View logs
vercel logs

# List deployments
vercel ls
```

---

## 🎉 Congratulations!

Your portfolio is now live on the internet! 🚀

**What you've accomplished:**
- ✅ Built a professional portfolio
- ✅ Deployed to production
- ✅ Secured with HTTPS
- ✅ Set up email contact form
- ✅ Made it accessible worldwide

**Share your portfolio:**
```
🌐 https://your-portfolio.vercel.app
```

---

## 🚀 Next Steps

**→ [Troubleshooting Guide](./08-Troubleshooting.md)**

Learn how to fix common issues and problems.

---

**Need Help?** Return to the main [README](./README.md) or check the [Troubleshooting Guide](./08-Troubleshooting.md).











