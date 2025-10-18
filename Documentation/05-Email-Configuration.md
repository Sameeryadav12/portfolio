# 📧 Email Configuration Guide

Complete guide to setting up real email sending for your contact form using Resend.

---

## 🎯 Overview

In development mode, the contact form simulates email sending. For production (live website), you need to set up Resend to send real emails.

---

## 🆓 What is Resend?

**Resend** is a modern email API service:

- ✅ **Free tier**: 3,000 emails/month for free
- ✅ **Easy setup**: 5 minutes to get started
- ✅ **Reliable**: Built for developers
- ✅ **Good deliverability**: Emails reach inbox, not spam
- ✅ **Simple API**: Easy to use

**Website**: https://resend.com

---

## 🚀 Step-by-Step Setup

### Step 1: Create Resend Account

1. **Go to**: https://resend.com

2. **Click "Get Started"** (top right)

3. **Sign up** with your email or GitHub

4. **Verify your email** (check inbox for confirmation)

**Time**: ~2 minutes

---

### Step 2: Get Your API Key

1. **Go to**: https://resend.com/api-keys

2. **Click "Create API Key"**

3. **Settings:**
   - **Name**: `Portfolio Contact Form`
   - **Permission**: `Full Access` (or `Sending Access`)
   - **Domain**: `All Domains` (for now)

4. **Click "Create"**

5. **Copy the API key** 
   - Starts with `re_`
   - Example: `re_123abc456def789...`
   - ⚠️ **Save it now** - you won't see it again!

**Time**: ~1 minute

---

### Step 3: Add to Local Development (Optional)

If you want to test real emails locally:

1. **Create `.env` file** in project root (if it doesn't exist)

2. **Add these lines:**
   ```env
   RESEND_API_KEY=re_your_api_key_here
   VITE_CONTACT_EMAIL=rishisameer7@gmail.com
   ```

3. **Replace** `re_your_api_key_here` with your actual API key

4. **Replace** the email with your email address

5. **Restart your dev server:**
   ```bash
   # Press Ctrl+C to stop, then:
   npm run dev:full
   ```

**⚠️ Important**: Don't commit `.env` to Git! It's already in `.gitignore`.

**Time**: ~1 minute

---

### Step 4: Add to Vercel (Production)

For your live website to send emails:

1. **Go to**: https://vercel.com/dashboard

2. **Select your portfolio project**

3. **Click "Settings"** (top menu)

4. **Click "Environment Variables"** (left sidebar)

5. **Add first variable:**
   - **Key**: `RESEND_API_KEY`
   - **Value**: `re_your_api_key_here` (paste your key)
   - **Environments**: ✅ Production, ✅ Preview, ✅ Development
   - Click **"Save"**

6. **Add second variable:**
   - **Key**: `VITE_CONTACT_EMAIL`
   - **Value**: `rishisameer7@gmail.com` (your email)
   - **Environments**: ✅ Production, ✅ Preview, ✅ Development
   - Click **"Save"**

7. **Redeploy** your application:
   - Go to **"Deployments"** tab
   - Click **⋯** (three dots) on latest deployment
   - Select **"Redeploy"**
   - Wait for deployment to complete (~2 minutes)

**Time**: ~3 minutes

---

## ✅ Step 5: Test It!

### Test in Production

1. **Visit your live website**: `https://your-site.vercel.app/contact`

2. **Fill out the contact form:**
   - Name: Your Name
   - Email: your-email@example.com
   - Subject: Test Email
   - Message: Testing the contact form with real email sending!

3. **Solve the math captcha**

4. **Click Submit**

5. **Check your email** (`rishisameer7@gmail.com`)
   - Email should arrive in 10-30 seconds
   - Check spam folder if not in inbox

**Expected Result:**
- ✅ Success message appears on website
- ✅ Email arrives in your inbox
- ✅ Email has professional formatting
- ✅ Reply-to is set to sender's email

---

## 📧 Email Template

The email your contact form sends looks like this:

### Subject Line
```
Portfolio Contact: [Their Subject]
```

### Email Body
```html
<h2>New Contact Form Submission</h2>

<div style="background: #f3f4f6; padding: 20px; border-radius: 8px;">
  <h3>Contact Details:</h3>
  <p><strong>Name:</strong> [Their Name]</p>
  <p><strong>Email:</strong> [Their Email]</p>
  <p><strong>Subject:</strong> [Their Subject]</p>
</div>

<h3>Message:</h3>
<p>[Their Message]</p>

<hr>

<p>Reply to this email to respond directly to the sender.</p>
```

**Features:**
- Professional HTML formatting
- Easy to read
- Reply-to automatically set
- Your branding colors

---

## 🎨 Customizing Email Template

Want to change how emails look?

**File**: `api/contact.js`

Find this section (around line 30):

```javascript
const { data, error } = await resend.emails.send({
  from: 'Portfolio Contact <onboarding@resend.dev>',
  to: ['rishisameer7@gmail.com'],
  replyTo: email,
  subject: `Portfolio Contact: ${subject}`,
  html: `
    <h2>New Contact Form Submission</h2>
    
    <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
      <h3 style="margin-top: 0;">Contact Details:</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
    </div>

    <h3>Message:</h3>
    <div style="background: #ffffff; padding: 15px; border-left: 4px solid #3b82f6; margin: 20px 0;">
      <p>${message.replace(/\n/g, '<br>')}</p>
    </div>

    <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
    
    <p style="color: #6b7280; font-size: 14px;">
      <em>This email was sent from your portfolio contact form.</em><br>
      Reply to this email to respond directly to ${name}.
    </p>
  `
})
```

### Change Colors

```javascript
// Change blue accent color (currently #3b82f6)
border-left: 4px solid #10b981;  // Green
border-left: 4px solid #f59e0b;  // Orange
border-left: 4px solid #8b5cf6;  // Purple
```

### Add More Information

```javascript
html: `
  // ... existing HTML
  
  <div>
    <p><strong>IP Address:</strong> ${req.headers['x-forwarded-for']}</p>
    <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
    <p><strong>User Agent:</strong> ${req.headers['user-agent']}</p>
  </div>
`
```

---

## 🔐 Verify Domain (Optional)

For better email deliverability and custom "from" addresses:

### Why Verify?

**Without domain verification:**
- From: `onboarding@resend.dev`
- Works fine, but looks generic

**With domain verification:**
- From: `contact@yourname.com`
- More professional
- Better deliverability

### How to Verify

1. **In Resend dashboard**, go to **"Domains"**

2. **Click "Add Domain"**

3. **Enter your domain**: `yourname.com`

4. **Add DNS records** (provided by Resend) to your domain:
   - Go to your domain provider (GoDaddy, Namecheap, etc.)
   - Add the DNS records
   - Wait for verification (can take up to 48 hours)

5. **Once verified**, update the "from" field:
   ```javascript
   from: 'Contact Form <contact@yourname.com>',
   ```

**Note**: This step is optional. The form works fine without it!

---

## 📊 Monitoring Emails

### Resend Dashboard

View email statistics:

1. **Go to**: https://resend.com/emails

2. **See:**
   - Total emails sent
   - Delivery rate
   - Recent emails
   - Email status (delivered, bounced, etc.)

### Email Status

- **Delivered**: ✅ Email reached recipient
- **Bounced**: ❌ Invalid email address
- **Spam**: ⚠️ Marked as spam
- **Failed**: ❌ Sending error

---

## 🐛 Troubleshooting

### Email Not Received

**Check these:**

1. **Spam folder** - Check if email went to spam

2. **API key** - Make sure it's correct:
   - Starts with `re_`
   - No extra spaces
   - Added to Vercel correctly

3. **Email address** - Verify `VITE_CONTACT_EMAIL` is correct

4. **Resend dashboard** - Check if email shows as sent:
   - Go to https://resend.com/emails
   - Look for recent sends
   - Check status

5. **Vercel logs** - Check for errors:
   - Go to Vercel dashboard
   - Click "Functions"
   - Check logs for `/api/contact`

---

### "Failed to Send Email" Error

**Common causes:**

1. **Invalid API key**
   - Copy it again from Resend
   - Remove any spaces
   - Save it in Vercel

2. **API key not set**
   - Check Vercel Environment Variables
   - Make sure `RESEND_API_KEY` exists
   - Redeploy after adding

3. **Rate limit exceeded**
   - Free tier: 3,000 emails/month
   - Check your usage in Resend dashboard

---

### Email Goes to Spam

**Solutions:**

1. **Verify your domain** (see section above)

2. **Warm up your sending** - Don't send 100 emails immediately

3. **Check content** - Avoid spam trigger words:
   - "Free", "Winner", "Click here"
   - Excessive caps
   - Too many exclamation marks

4. **Add SPF/DKIM records** (comes with domain verification)

---

### Wrong Email Address

If emails are going to the wrong address:

1. **Check** `api/contact.js` line ~25:
   ```javascript
   to: ['your-email@example.com'],
   ```

2. **Update** with your email

3. **Redeploy** to Vercel

---

## 📈 Usage Limits

### Free Tier

- **3,000 emails/month** - Free forever
- **100 emails/day** - Sending limit
- **No credit card** required

**More than enough for a portfolio!**

### If You Need More

Paid plans start at $20/month for 50,000 emails.

---

## 🔒 Security Best Practices

### API Key Security

✅ **DO:**
- Store in environment variables
- Never commit to Git
- Keep it secret
- Rotate periodically

❌ **DON'T:**
- Share it publicly
- Commit to GitHub
- Hardcode in files
- Use same key for multiple projects

### Email Security

✅ **DO:**
- Validate all input
- Sanitize messages
- Use rate limiting
- Check honeypot

❌ **DON'T:**
- Trust user input
- Allow HTML injection
- Skip validation
- Ignore spam protection

---

## ✅ Setup Checklist

Before going live:

- [ ] Resend account created
- [ ] API key generated
- [ ] `RESEND_API_KEY` added to Vercel
- [ ] `VITE_CONTACT_EMAIL` added to Vercel
- [ ] Redeployed after adding variables
- [ ] Tested contact form on live site
- [ ] Received test email
- [ ] Email looks good (formatting, content)
- [ ] Reply-to works correctly
- [ ] Not going to spam

---

## 🎉 You're Done!

Your contact form now sends real emails! 

### What happens when someone contacts you:

1. They fill out your form
2. Solve the captcha
3. Click Submit
4. Email arrives in your inbox in seconds
5. You can reply directly
6. Done! 🎊

---

## 🚀 Next Steps

**→ [Security Features](./06-Security-Features.md)**

Learn about the security features protecting your contact form.

---

## 📚 Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Resend API Reference](https://resend.com/docs/api-reference)
- [Email Best Practices](https://resend.com/docs/best-practices)

---

**Need Help?** Check the [Troubleshooting Guide](./08-Troubleshooting.md) or return to the main [README](./README.md).





