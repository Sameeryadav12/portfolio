# 🔐 Google reCAPTCHA v2 Setup Guide

This guide will help you set up Google reCAPTCHA v2 for your portfolio contact form.

## 🎯 What is reCAPTCHA v2?

- **Visible Verification**: Shows the "I'm not a robot" checkbox
- **User-Friendly**: Simple checkbox interaction for most users
- **Industry Standard**: Trusted by millions of websites worldwide
- **Reliable**: Proven bot detection technology

## 📝 Step 1: Get Your reCAPTCHA Keys

1. **Go to Google reCAPTCHA Admin Console:**
   - Visit: https://www.google.com/recaptcha/admin/create

2. **Sign in** with your Google account (use `rishisameer7@gmail.com`)

3. **Register a new site:**
   - **Label**: `Portfolio Contact Form` (or any name you like)
   - **reCAPTCHA type**: Select **"reCAPTCHA v2"** → **"I'm not a robot" Checkbox**
   - **Domains**: Add your domains:
     - `localhost` (for development)
     - Your production domain (e.g., `yourportfolio.vercel.app`)
   - **Accept Terms**: Check the box
   - Click **"Submit"**

4. **Copy Your Keys:**
   - **Site Key** (starts with `6L...`) - This is public, goes in your frontend
   - **Secret Key** (starts with `6L...`) - This is private, goes in your backend

## 🔧 Step 2: Add Keys to Your Project

### For Local Development:

1. **Create a `.env` file** in your project root (if it doesn't exist)
2. **Add these lines:**
   ```env
   VITE_RECAPTCHA_SITE_KEY=your_site_key_here
   RECAPTCHA_SECRET_KEY=your_secret_key_here
   ```
3. **Replace** `your_site_key_here` and `your_secret_key_here` with your actual keys
4. **Restart your dev server** (very important!)

### For Vercel Production:

1. **Go to your Vercel dashboard:**
   - Visit: https://vercel.com/dashboard
   - Select your portfolio project

2. **Navigate to Settings → Environment Variables**

3. **Add these two variables:**
   
   **Variable 1:**
   - **Key**: `VITE_RECAPTCHA_SITE_KEY`
   - **Value**: Your Site Key (starts with `6L...`)
   - **Environment**: Check all (Production, Preview, Development)
   - Click **"Save"**
   
   **Variable 2:**
   - **Key**: `RECAPTCHA_SECRET_KEY`
   - **Value**: Your Secret Key (starts with `6L...`)
   - **Environment**: Check all (Production, Preview, Development)
   - Click **"Save"**

4. **Redeploy your application:**
   - Go to the **Deployments** tab
   - Click the three dots (...) on the latest deployment
   - Select **"Redeploy"**

## 🧪 Step 3: Test Your Setup

### Local Testing:

1. **Make sure you added keys to `.env` file**

2. **Restart your dev server:**
   ```bash
   # Press Ctrl+C to stop the server, then:
   npm run dev
   ```

3. **Open your browser**: Go to `http://localhost:5173/contact`

4. **You should see:**
   - The contact form with all fields
   - **A reCAPTCHA checkbox** at the bottom (before the Submit button)
   - Submit button is **disabled** until you check the box

5. **Fill out the form and check the reCAPTCHA box**

6. **Submit the form** - You should receive an actual email! ✅

### Production Testing:

1. **Deploy to Vercel:**
   ```bash
   git add .
   git commit -m "Add reCAPTCHA v2 protection"
   git push origin main
   ```

2. **Wait for deployment** to complete

3. **Visit your live site**: Go to your contact page

4. **Fill out the form and check the reCAPTCHA**

5. **Submit** - Check your email (`rishisameer7@gmail.com`)!

## 🔍 How to Verify It's Working

### What You Should See:
1. **reCAPTCHA checkbox** appears above the Submit button
2. **Submit button is disabled** until you check the box
3. **Click the checkbox** - it should show a checkmark
4. **Submit button becomes enabled** after checking
5. **Form submits** and you get a success message
6. **Email arrives** in your inbox!

### Console Messages:
Open browser console (F12) and you should see:
- `Sending email with reCAPTCHA verification...`
- `Email sent successfully!`

## 🛡️ Security Features

Your contact form now has:

✅ **Google reCAPTCHA v2** - Visible checkbox verification  
✅ **Honeypot Field** - Hidden field to catch simple bots  
✅ **Rate Limiting** - Max 5 submissions per 15 minutes per IP  
✅ **Input Sanitization** - Removes dangerous characters  
✅ **XSS Protection** - Blocks malicious scripts  
✅ **Real Email Sending** - Works in both dev and production!  

## 📊 Monitoring reCAPTCHA

1. **View Analytics:**
   - Go to: https://www.google.com/recaptcha/admin
   - Click on your site
   - View the **Analytics** tab

2. **What you'll see:**
   - Total requests
   - Successful verifications
   - Failed attempts
   - Traffic patterns

## 🐛 Troubleshooting

### reCAPTCHA not showing:
- Make sure you've added `VITE_RECAPTCHA_SITE_KEY` to `.env`
- **Restart your dev server** after adding the key
- Check browser console for errors

### Submit button stays disabled:
- Click the reCAPTCHA checkbox
- Make sure all form fields are filled correctly
- Check for validation errors in the form

### Form submits but no email received:
- Check that `RESEND_API_KEY` is set in Vercel (for production)
- Check that `RECAPTCHA_SECRET_KEY` is set in Vercel
- Check Vercel function logs for errors
- Make sure you're using the correct email (`rishisameer7@gmail.com`)

### "Invalid reCAPTCHA response":
- Make sure you're using the correct Site Key and Secret Key
- Verify that your domain is added in the reCAPTCHA admin console
- For localhost, make sure you added `localhost` as a domain

### Getting test key working:
The default test key (`6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI`) will always show the checkbox, but **won't send emails**. To send emails, you MUST use your own reCAPTCHA keys.

## 🎉 You're All Set!

Your contact form now:
- ✅ **Shows a visible reCAPTCHA checkbox**
- ✅ **Requires users to verify before submitting**
- ✅ **Sends real emails in both dev and production**
- ✅ **Blocks bots and spam effectively**

## 📚 Additional Resources

- [reCAPTCHA v2 Documentation](https://developers.google.com/recaptcha/docs/display)
- [reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
- [Resend Documentation](https://resend.com/docs)

---

**Need Help?** If you encounter any issues:
1. Check the browser console (F12) for error messages
2. Check Vercel function logs for API errors
3. Verify all environment variables are set correctly
4. Make sure you restarted your dev server after adding `.env`
