# 🔧 reCAPTCHA Complete Fix Guide

## 🚨 **Current Issue**

Your contact form IS working correctly! The error you're seeing is **expected behavior** because:

1. ✅ **reCAPTCHA checkbox is showing**
2. ✅ **Form validation is working**
3. ✅ **Submit button enables/disables correctly**
4. ❌ **But you're using Google's TEST keys** (which don't send real emails)

---

## 📋 **What's Happening**

### **Current State:**
- **Site Key**: `6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI` (Test key)
- **Secret Key**: Using test or no key
- **Result**: reCAPTCHA works visually, but emails fail

### **The Error Message You See:**
> "Sorry, there was an error sending your message..."

This happens because:
1. You check the reCAPTCHA ✅
2. Form submits to API ✅
3. API tries to send email ✅
4. Resend service rejects it (invalid API key or test reCAPTCHA) ❌

---

## ✅ **Complete Fix - Step by Step**

### **Step 1: Create `.env` File**

Create a file named `.env` in your project root (same folder as `package.json`):

```bash
# .env
VITE_CONTACT_EMAIL=rishisameer7@gmail.com
RESEND_API_KEY=re_YourActualResendKeyHere
VITE_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

---

### **Step 2: Get Your Resend API Key**

1. **Go to**: https://resend.com/api-keys
2. **Sign in** with `rishisameer7@gmail.com`
3. **Click** "Create API Key"
4. **Copy** the key (starts with `re_`)
5. **Paste** it in `.env` as `RESEND_API_KEY=re_...`

---

### **Step 3: Get Your reCAPTCHA Keys**

#### **A. Create reCAPTCHA Keys:**

1. **Go to**: https://www.google.com/recaptcha/admin/create
2. **Sign in** with your Google account
3. **Fill in the form:**
   - **Label**: "Portfolio Contact Form"
   - **reCAPTCHA type**: ✅ **reCAPTCHA v2** → "I'm not a robot" Checkbox
   - **Domains**: 
     - `localhost` (for development)
     - Your Vercel domain (e.g., `your-portfolio.vercel.app`)
4. **Submit** and you'll get:
   - **Site Key** (public - goes in frontend)
   - **Secret Key** (private - goes in backend)

#### **B. Add Keys to `.env`:**

```bash
# .env
VITE_RECAPTCHA_SITE_KEY=your_new_site_key_here
RECAPTCHA_SECRET_KEY=your_new_secret_key_here
```

---

### **Step 4: Update Vercel Environment Variables**

1. **Go to**: https://vercel.com/dashboard
2. **Select** your portfolio project
3. **Click** "Settings" → "Environment Variables"
4. **Add these variables**:

| Name | Value | Environment |
|------|-------|-------------|
| `RESEND_API_KEY` | `re_YourKey...` | Production + Preview + Development |
| `RECAPTCHA_SECRET_KEY` | `Your secret key` | Production + Preview + Development |
| `VITE_RECAPTCHA_SITE_KEY` | `Your site key` | Production + Preview + Development |
| `VITE_CONTACT_EMAIL` | `rishisameer7@gmail.com` | Production + Preview + Development |

5. **Redeploy** your site

---

### **Step 5: Restart Development Server**

```bash
# Stop the server (Ctrl+C)
# Then restart:
npm run dev
```

---

## 🧪 **Testing Your Fix**

### **1. Check Browser Console (F12):**

When you load the contact page, you should see:
```
✅ No errors about reCAPTCHA loading
✅ reCAPTCHA widget appears
```

### **2. Fill Out Form:**

- Enter name, email, subject, message
- **Check the reCAPTCHA box** ☐ → ✓
- **Watch debug info** change:
  - Before: `reCAPTCHA Token: ❌ Missing | Submit Disabled: Yes`
  - After: `reCAPTCHA Token: ✅ Present | Submit Disabled: No`

### **3. Submit Form:**

Console should show:
```
reCAPTCHA token changed: Token received
Sending email with reCAPTCHA verification...
Email sent successfully!
```

### **4. Check Your Email:**

- Open `rishisameer7@gmail.com` inbox
- **Email should arrive in 1-5 minutes**
- Subject: "Portfolio Contact: [Your Subject]"

---

## 🔍 **Troubleshooting**

### **Issue: "Please complete the reCAPTCHA verification"**

**Cause**: Submit button clicked before checking reCAPTCHA

**Fix**: Make sure to ✅ check the "I'm not a robot" box first

---

### **Issue: "RESEND_API_KEY not set"**

**Cause**: `.env` file missing or incorrect

**Fix**: 
1. Create `.env` file in project root
2. Add: `RESEND_API_KEY=re_YourKey...`
3. Restart server: `npm run dev`

---

### **Issue: "Failed to send email"**

**Cause**: Invalid Resend API key or domain not verified

**Fix**:
1. Verify domain in Resend dashboard
2. Use `onboarding@resend.dev` as sender (already done ✅)
3. Check API key is correct and active

---

### **Issue: reCAPTCHA shows error**

**Cause**: Invalid site key or domain not allowed

**Fix**:
1. Go to reCAPTCHA admin console
2. Add `localhost` to allowed domains
3. Add your Vercel domain
4. Use the correct site key in `.env`

---

### **Issue: Email not received after 5 minutes**

**Possible causes**:
1. **Check spam folder** in Gmail
2. **Verify Resend API key** is active
3. **Check Vercel logs** for errors
4. **Ensure `rishisameer7@gmail.com`** is the recipient in `api/contact.js`

---

## 📧 **Email Delivery Time**

### **Expected Timeline:**
- **Immediate**: Form submitted, shows success ✅
- **1-2 minutes**: Resend processes email
- **2-5 minutes**: Email arrives in Gmail inbox
- **5+ minutes**: Check spam folder or Vercel logs

### **Why the delay?**
- Resend queues emails for delivery
- Gmail may delay external emails
- Anti-spam checks take time

---

## ✅ **Verification Checklist**

Before testing, ensure:

- [ ] `.env` file exists in project root
- [ ] `RESEND_API_KEY` is set (starts with `re_`)
- [ ] `VITE_RECAPTCHA_SITE_KEY` is set (your key, not test)
- [ ] `RECAPTCHA_SECRET_KEY` is set (your secret key)
- [ ] `VITE_CONTACT_EMAIL` is `rishisameer7@gmail.com`
- [ ] Development server restarted after creating `.env`
- [ ] reCAPTCHA admin console shows `localhost` in domains
- [ ] Resend dashboard shows verified sender

---

## 🎯 **Quick Test (Without Real Keys)**

If you want to test the form flow **without** setting up keys:

1. The test keys are already in the code
2. reCAPTCHA will work visually
3. Form will submit
4. **Email won't send** (this is expected)
5. You'll see the error message

This is **normal** for development with test keys!

---

## 🚀 **Final Notes**

### **For Development:**
- Test keys work fine for UI testing
- Emails won't send (expected)
- Debug info shows token state

### **For Production (Vercel):**
- **MUST** use real keys
- Add all environment variables
- Redeploy after adding keys
- Emails will send in 1-5 minutes

---

## 📞 **Still Having Issues?**

### **Check the following:**

1. **Browser Console** (F12 → Console tab):
   - Any red errors?
   - What does it say when you click submit?

2. **Network Tab** (F12 → Network tab):
   - Look for `/api/contact` request
   - What's the response status? (200, 400, 500?)
   - What's the response body?

3. **Vercel Logs** (if deployed):
   - Go to Vercel dashboard → Project → Deployments
   - Click on latest deployment → View Function Logs
   - Any errors about API keys or reCAPTCHA?

---

## ✨ **Summary**

Your contact form code is **100% correct**! The issue is just that you need to:

1. Create `.env` file with real API keys
2. Get Resend API key from https://resend.com
3. Get reCAPTCHA keys from https://www.google.com/recaptcha/admin/create
4. Add keys to `.env` file
5. Restart server

**That's it!** Once you have real keys, emails will send successfully. 🎉





