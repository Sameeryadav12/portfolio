# 🔧 Troubleshooting Guide

Complete guide to fixing common issues and problems.

---

## 🎯 Quick Fixes

Try these first before diving deeper:

```bash
# 1. Restart the development server
Press Ctrl+C, then: npm run dev:full

# 2. Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# 3. Clear browser cache
Ctrl+Shift+Delete (or Cmd+Shift+Delete on Mac)

# 4. Check for typos in environment variables
cat .env  # On Windows: type .env

# 5. Check browser console for errors
Press F12 → Console tab
```

---

## 🚀 Development Issues

### Issue: Can't Start Server

**Error:**
```
Cannot find module 'xyz'
```

**Solution:**
```bash
# Reinstall dependencies
npm install

# If that doesn't work:
rm -rf node_modules package-lock.json
npm install
```

---

**Error:**
```
Port 5173 is already in use
```

**Solution:**
```bash
# Option 1: Kill the process
# Windows: Open Task Manager, end node.exe processes
# Mac/Linux: lsof -ti:5173 | xargs kill -9

# Option 2: Use different port
npm run dev -- --port 3000
```

---

**Error:**
```
Permission denied
```

**Solution:**
```bash
# Don't use sudo!
# Fix npm permissions:
# Mac/Linux:
sudo chown -R $USER ~/.npm

# Windows: Run terminal as administrator
```

---

### Issue: Changes Not Showing

**Problem:** You edit files but don't see changes in browser

**Solutions:**

1. **Save the file** (Ctrl+S / Cmd+S)

2. **Hard refresh browser**
   - Windows/Linux: Ctrl+Shift+R
   - Mac: Cmd+Shift+R

3. **Clear browser cache**
   - F12 → Network tab → Check "Disable cache"
   - Or: Settings → Clear browsing data

4. **Restart dev server**
   ```bash
   # Stop: Ctrl+C
   # Start: npm run dev
   ```

5. **Check file is saved** (look for dot in tab title)

6. **Check correct file** (make sure you're editing the right file)

---

### Issue: TypeScript Errors

**Error:**
```
Property 'xyz' does not exist on type 'ABC'
```

**Solutions:**

1. **Check types:**
   ```bash
   npm run typecheck
   ```

2. **Common fixes:**
   ```typescript
   // Add type annotation
   const data: DataType = {...}
   
   // Use optional chaining
   const value = object?.property
   
   // Type assertion (use carefully)
   const value = something as SomeType
   ```

3. **Restart TypeScript server:**
   - VS Code: Ctrl+Shift+P → "TypeScript: Restart TS Server"

---

### Issue: Import Errors

**Error:**
```
Module not found: Can't resolve './Component'
```

**Solutions:**

1. **Check file exists** (case-sensitive!)
   ```typescript
   // Wrong (if file is Component.tsx)
   import Component from './component'
   
   // Correct
   import Component from './Component'
   ```

2. **Check path is correct**
   ```typescript
   // Current folder
   import Component from './Component'
   
   // Parent folder
   import Component from '../Component'
   
   // From src root
   import Component from '@/Component'  // if configured
   ```

3. **Check file extension**
   ```typescript
   // Don't include extension (Vite handles it)
   import Component from './Component.tsx'  // ❌
   import Component from './Component'      // ✅
   ```

---

## 📧 Contact Form Issues

### Issue: 404 Error on Form Submit

**Error:**
```
POST http://localhost:5173/api/contact 404 (Not Found)
```

**Solution:**
```bash
# You need BOTH servers running:
npm run dev:full

# NOT just:
npm run dev
```

**Why:** `npm run dev` only starts frontend. API needs separate server in development.

---

### Issue: Submit Button Disabled

**Problem:** Can't click submit button (grayed out)

**Reasons:**

1. **Captcha not solved**
   - Solve the math question
   - Enter a number

2. **Required fields empty**
   - Fill all fields marked with *
   - Name, email, subject, message

3. **Email format invalid**
   - Use proper email: user@example.com
   - No spaces

4. **Message too short**
   - Minimum 10 characters
   - Write a proper message

**Debug:** Look at debug panel (development mode) for hints.

---

### Issue: "Incorrect Captcha" Error

**Problem:** Form says captcha is wrong even when it's right

**Solutions:**

1. **Check answer carefully**
   - Look at the question: "3 + 2 = ?"
   - Answer: 5 (just the number)

2. **No spaces or special characters**
   - Wrong: " 5 ", "5.", "+5"
   - Right: "5"

3. **Refresh captcha**
   - Click the refresh icon (🔄)
   - Try a different question

4. **Check console** (F12)
   - See what answer is expected
   - Compare with what you entered

---

### Issue: Form Submits But No Email

**In Development:**

**Expected behavior:** No real email sent, but you'll see in console:
```
Development mode: Simulating email send
Email would be sent to: rishisameer7@gmail.com
```

This is **normal**! Development doesn't send real emails.

**To send real emails in dev:**
1. Add `RESEND_API_KEY` to `.env`
2. Restart server
3. Try again

---

**In Production:**

**If no email received:**

1. **Check spam folder** - Email might be there

2. **Check environment variables in Vercel:**
   - `RESEND_API_KEY` is set
   - `VITE_CONTACT_EMAIL` is set
   - No typos or extra spaces

3. **Check Resend dashboard:**
   - https://resend.com/emails
   - Look for sent emails
   - Check delivery status

4. **Check Vercel function logs:**
   - Dashboard → Functions → `/api/contact`
   - Look for errors

5. **Test API directly:**
   ```bash
   curl -X POST https://your-site.vercel.app/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","subject":"Test","message":"Test message testing","captchaAnswer":"5","captchaQuestion":"3 + 2 = ?"}'
   ```

---

### Issue: Rate Limit Error

**Error:**
```
Too many requests. Please try again later.
```

**Cause:** More than 5 submissions in 15 minutes

**Solutions:**

1. **Wait 15 minutes** - Rate limit will reset

2. **Development only:** Restart API server
   ```bash
   # Stop and restart
   npm run dev:full
   ```

3. **Production:** Can't bypass - by design for security

---

## 🏗️ Build Issues

### Issue: Build Fails

**Error:**
```
Build failed with errors
```

**Solutions:**

1. **Check TypeScript errors:**
   ```bash
   npm run typecheck
   ```
   Fix any errors shown.

2. **Check for syntax errors:**
   - Missing semicolons
   - Unclosed brackets
   - Import errors

3. **Clear dist folder:**
   ```bash
   rm -rf dist
   npm run build
   ```

4. **Check dependencies:**
   ```bash
   npm install
   npm run build
   ```

---

### Issue: Build Success But Site Broken

**Problem:** Build completes but deployed site doesn't work

**Solutions:**

1. **Check environment variables**
   - All VITE_ variables set in Vercel?
   - No typos?

2. **Check asset paths**
   ```typescript
   // Use absolute paths from public/
   <img src="/images/photo.jpg" />
   
   // NOT relative paths
   <img src="./images/photo.jpg" />  // ❌
   ```

3. **Check browser console**
   - Visit deployed site
   - Press F12
   - Look for errors

4. **Test production build locally:**
   ```bash
   npm run build
   npm run preview
   ```
   Visit http://localhost:4173 to test.

---

## 🌐 Deployment Issues

### Issue: Vercel Deployment Fails

**Error:**
```
Error: Command "npm run build" exited with 1
```

**Solutions:**

1. **Build locally first:**
   ```bash
   npm run build
   ```
   Fix any errors that appear.

2. **Check Node version:**
   - Vercel uses Node 18
   - Check `package.json`:
   ```json
   "engines": {
     "node": "18.x"
   }
   ```

3. **Check build command in Vercel:**
   - Should be: `npm run build`
   - Output dir: `dist`

4. **Check dependencies:**
   ```bash
   # Make sure package-lock.json is committed
   git add package-lock.json
   git commit -m "Update package-lock.json"
   git push
   ```

---

### Issue: Site Not Loading After Deploy

**Problem:** Deployment succeeds but site shows error

**Solutions:**

1. **Check deployment status**
   - Vercel dashboard → Deployments
   - Status should be "Ready"

2. **Check domain settings**
   - Vercel dashboard → Domains
   - Domain pointing to correct deployment?

3. **Clear DNS cache**
   ```bash
   # Windows
   ipconfig /flushdns
   
   # Mac
   sudo dscacheutil -flushcache
   
   # Linux
   sudo systemd-resolve --flush-caches
   ```

4. **Try incognito mode** (rules out browser cache)

5. **Check from different network** (rules out DNS issues)

---

### Issue: Environment Variables Not Working

**Problem:** Site deployed but features don't work

**Solutions:**

1. **Check variables are set**
   - Vercel → Settings → Environment Variables
   - All required variables present?

2. **Check variable names**
   - Exact match (case-sensitive)
   - No extra spaces
   - No quotes around values

3. **Redeploy after adding variables**
   - Variables don't apply to existing deployments
   - Deployments → ⋯ → Redeploy

4. **Check which environment**
   - Set for: Production? Preview? Development?
   - Should be all three

---

## 🎨 Styling Issues

### Issue: Tailwind Classes Not Working

**Problem:** Tailwind CSS classes have no effect

**Solutions:**

1. **Check class name spelling**
   ```html
   <!-- Wrong -->
   <div class="flex-centr">
   
   <!-- Correct -->
   <div class="flex-center">
   ```

2. **Check Tailwind config**
   - `tailwind.config.js` includes your files?
   ```javascript
   content: ['./src/**/*.{js,ts,jsx,tsx}'],
   ```

3. **Restart dev server**
   ```bash
   npm run dev
   ```

4. **Check if custom class**
   ```css
   /* Add to index.css if custom */
   .my-custom-class {
     /* styles */
   }
   ```

---

### Issue: Dark Mode Not Working

**Problem:** Dark mode toggle doesn't change appearance

**Solutions:**

1. **Check theme is applied**
   - Look at HTML element
   - Should have `data-theme` attribute

2. **Check theme CSS**
   - Theme variables in CSS?
   - Using theme variables in components?

3. **Clear local storage**
   ```javascript
   // In browser console (F12)
   localStorage.clear()
   location.reload()
   ```

---

## 🖼️ Image Issues

### Issue: Images Not Loading

**Problem:** Broken image icons instead of images

**Solutions:**

1. **Check image path**
   ```tsx
   // Images in public/ folder
   <img src="/images/photo.jpg" />  // ✅
   
   // NOT
   <img src="images/photo.jpg" />   // ❌
   <img src="./images/photo.jpg" /> // ❌
   ```

2. **Check image exists**
   - Look in `public/images/` folder
   - Correct filename (case-sensitive!)

3. **Check file extension**
   - `.jpg` vs `.jpeg` vs `.png`
   - Check actual file extension

4. **Check image size**
   - Very large images may timeout
   - Compress before adding

---

### Issue: Images Load Slowly

**Problem:** Images take too long to load

**Solutions:**

1. **Compress images**
   - Use TinyPNG (https://tinypng.com)
   - Or Squoosh (https://squoosh.app)
   - Target: <200KB per image

2. **Use appropriate size**
   - Don't upload 5000px wide images
   - Resize before adding
   - Max: 1920px wide for full-width

3. **Use modern formats**
   - WebP for smaller file sizes
   - JPEG for photos
   - PNG for graphics with transparency

4. **Add loading="lazy"**
   ```tsx
   <img src="/images/photo.jpg" loading="lazy" />
   ```

---

## 🔐 Security Issues

### Issue: CORS Error

**Error:**
```
Access to fetch at 'https://api...' from origin 'https://...' has been blocked by CORS policy
```

**Solutions:**

1. **Check API server CORS config**
   ```javascript
   // In api/contact.js
   res.setHeader('Access-Control-Allow-Origin', origin)
   res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
   ```

2. **Check origin**
   - Request from allowed origin?
   - Check `allowedOrigins` array

3. **Development:**
   ```bash
   # Make sure proxy is working
   # vite.config.ts should have:
   proxy: {
     '/api': 'http://localhost:3001'
   }
   ```

---

### Issue: API Key Not Working

**Error:**
```
Invalid API key
```

**Solutions:**

1. **Check key format**
   - Resend: starts with `re_`
   - No spaces before/after
   - No quotes

2. **Copy key again**
   - Go to Resend dashboard
   - Create new key if needed
   - Copy carefully

3. **Check environment**
   - Development: `.env` file
   - Production: Vercel environment variables

4. **Restart server** after adding key

---

## 📱 Mobile Issues

### Issue: Site Looks Bad on Mobile

**Problem:** Layout broken or weird on mobile devices

**Solutions:**

1. **Check responsive design**
   ```tsx
   // Use Tailwind responsive classes
   <div className="
     flex-col        /* Mobile: column */
     md:flex-row     /* Desktop: row */
   ">
   ```

2. **Test in browser**
   - F12 → Device toolbar
   - Toggle device emulation
   - Try different sizes

3. **Check viewport meta tag** (should be in index.html)
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
   ```

4. **Test on real device** if possible

---

### Issue: Touch Events Not Working

**Problem:** Buttons/links don't work on mobile

**Solutions:**

1. **Check z-index**
   - Something covering the button?
   - Use browser inspect tool

2. **Check touch target size**
   ```tsx
   // Make buttons bigger on mobile
   <button className="px-6 py-3">  // Bigger padding
   ```

3. **Remove hover-only effects**
   ```tsx
   // Add active state for mobile
   className="hover:bg-blue-500 active:bg-blue-600"
   ```

---

## 🔍 Debugging Tips

### Browser Console

**Open console:** Press F12

**Useful commands:**
```javascript
// Clear console
clear()

// Log variable
console.log(variable)

// Table view
console.table(arrayOfObjects)

// Trace function calls
console.trace()

// Time operations
console.time('operation')
// ... code ...
console.timeEnd('operation')
```

---

### React DevTools

**Install:** [React DevTools extension](https://react.dev/learn/react-developer-tools)

**Use:**
- F12 → Components tab
- Inspect component props
- View component state
- See component hierarchy

---

### Network Tab

**Open:** F12 → Network tab

**Use for:**
- See all requests
- Check API calls
- View response data
- Check loading times
- Find failed requests

**Filter:** XHR for API calls only

---

## 💡 Common Mistakes

### 1. Not Restarting Server

**Mistake:** Changing config and not restarting

**Files that need restart:**
- `.env`
- `vite.config.ts`
- `tailwind.config.js`
- `package.json`

**Solution:** Always restart after config changes!

---

### 2. Wrong Import Path

**Mistake:**
```typescript
// Wrong case
import Component from './component'  // File is Component.tsx

// Wrong path
import Component from './Component'  // File is in parent folder
```

**Solution:** Match exact filename and path.

---

### 3. Forgetting to Save

**Mistake:** Edit file, see no changes, forget to save

**Solution:** 
- Save with Ctrl+S (Cmd+S)
- Enable auto-save in editor
- Check for dot in tab title (unsaved indicator)

---

### 4. Committing Secrets

**Mistake:** Commit `.env` to Git

**Prevention:**
```bash
# Make sure .gitignore includes:
.env
.env.local
```

**If committed:**
1. Remove from Git: `git rm --cached .env`
2. Regenerate API keys
3. Never use compromised keys

---

### 5. Not Checking Console

**Mistake:** Ignore browser console errors

**Solution:** Always check console (F12) when something doesn't work!

---

## 🆘 Still Stuck?

If nothing here helped:

### 1. Check Error Message Carefully

- Read the full error
- Google the exact error message
- Check line numbers

### 2. Isolate the Problem

- When did it start?
- What changed?
- Does it work locally?
- Does it work in production?

### 3. Create Minimal Example

- Remove unrelated code
- Test specific feature alone
- Easier to debug

### 4. Ask for Help

- Stack Overflow
- GitHub Issues
- React Discord
- Web dev communities

**When asking:**
- Describe what you tried
- Share error messages
- Include code snippets
- Mention environment (OS, Node version)

---

## ✅ Prevention Checklist

Avoid issues by:

- [ ] Testing locally before deploying
- [ ] Checking console for errors
- [ ] Committing working code only
- [ ] Keeping dependencies updated
- [ ] Reading error messages
- [ ] Testing on multiple devices
- [ ] Using version control (Git)
- [ ] Making small changes
- [ ] Testing after each change

---

## 🚀 Back to Normal

Once you fix the issue:

1. **Test thoroughly** - Make sure it's really fixed
2. **Commit changes** - Save your fix
3. **Document what happened** - For future reference
4. **Continue developing** - You got this! 💪

---

**Need More Help?** Return to the main [README](./README.md) or check specific feature guides.











