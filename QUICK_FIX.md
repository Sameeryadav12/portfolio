# ⚡ Quick Fix - Get Contact Form Working

## 🎯 **The Problem**

Your reCAPTCHA is working perfectly! But you're using **Google's test keys**, so emails won't send.

---

## ✅ **The Solution (5 Minutes)**

### **Step 1: Create `.env` File**

In your project root folder (where `package.json` is), create a new file called `.env`:

```env
VITE_CONTACT_EMAIL=rishisameer7@gmail.com
RESEND_API_KEY=your_resend_key_here
VITE_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

---

### **Step 2: Get Resend API Key**

1. Go to: https://resend.com/api-keys
2. Sign in with `rishisameer7@gmail.com`
3. Click "Create API Key"
4. Copy the key (looks like: `re_abc123...`)
5. Paste it in `.env` as `RESEND_API_KEY=re_abc123...`

---

### **Step 3: Get reCAPTCHA Keys**

1. Go to: https://www.google.com/recaptcha/admin/create
2. Fill in:
   - Label: "Portfolio Contact"
   - Type: **reCAPTCHA v2** (checkbox)
   - Domains: `localhost` and your Vercel domain
3. Submit and copy both keys
4. Paste in `.env`:
   - `VITE_RECAPTCHA_SITE_KEY=` (your site key)
   - `RECAPTCHA_SECRET_KEY=` (your secret key)

---

### **Step 4: Restart Server**

```bash
# Press Ctrl+C to stop
# Then run:
npm run dev
```

---

### **Step 5: Test**

1. Go to: http://localhost:5173/contact
2. Check the debug panel - should show "🔑 REAL KEY"
3. Fill form and check reCAPTCHA
4. Submit
5. Check `rishisameer7@gmail.com` inbox in 1-5 minutes

---

## 🔍 **What You Should See Now**

### **Before Fix:**
```
🧪 TEST KEY
❌ Missing token
⚠️ Using TEST key - emails may not send
```

### **After Fix:**
```
🔑 REAL KEY
✅ Present token (after checking)
✅ Enabled button (after checking)
```

---

## 🚀 **For Vercel Deployment**

1. Go to Vercel dashboard → Your project → Settings → Environment Variables
2. Add all 4 variables from your `.env` file
3. Redeploy

---

## 📧 **Still Need Help?**

Read the detailed guide: **RECAPTCHA_FIX_GUIDE.md**

Or check the debug panel on the contact form - it shows exactly what's happening!





