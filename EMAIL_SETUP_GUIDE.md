# Email Setup Guide for Portfolio Contact Form

This guide will help you set up email functionality for your portfolio contact form using Vercel and Resend.

## 🚀 Quick Setup

### 1. Set up Resend Account

1. Go to [resend.com](https://resend.com) and create an account
2. Verify your email address
3. Go to the API Keys section and create a new API key
4. Copy the API key (starts with `re_`)

### 2. Deploy to Vercel

1. Push your code to GitHub (if not already done)
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. In the Environment Variables section, add:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Your Resend API key (the one starting with `re_`)
5. Deploy the project

### 3. Verify Domain (Optional but Recommended)

For production use, you should verify your domain:

1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., `yourname.com`)
3. Add the required DNS records to your domain provider
4. Once verified, update the `from` field in `api/contact.js`:
   ```javascript
   from: 'Portfolio Contact <noreply@yourname.com>',
   ```

## 🔧 Configuration Files

### API Endpoint (`api/contact.js`)
- Handles form submissions
- Validates input data
- Sends emails via Resend
- Includes spam protection (honeypot)

### Vercel Configuration (`vercel.json`)
- Configures the API function
- Sets up environment variables

## 📧 Email Features

### What the contact form does:
- ✅ Validates all form fields
- ✅ Prevents spam with honeypot protection
- ✅ Sends formatted HTML emails
- ✅ Includes sender's email as reply-to
- ✅ Shows success/error messages
- ✅ Resets form after successful submission

### Email Template includes:
- Professional HTML formatting
- Contact details section
- Message content
- Reply instructions
- Your branding colors

## 🧪 Testing

### Local Testing
1. Run `npm run dev`
2. Go to `/contact` page
3. Fill out the form
4. Check browser console for any errors

### Production Testing
1. Deploy to Vercel
2. Test the contact form on your live site
3. Check your email for the test message

## 🐛 Troubleshooting

### Common Issues:

1. **"Failed to send email" error**
   - Check if `RESEND_API_KEY` is set in Vercel environment variables
   - Verify the API key is correct and active

2. **Form not submitting**
   - Check browser console for JavaScript errors
   - Ensure all required fields are filled

3. **Emails not received**
   - Check spam folder
   - Verify the `to` email address in `api/contact.js`
   - Check Resend dashboard for delivery status

4. **CORS errors**
   - Make sure the API endpoint is deployed correctly
   - Check that the fetch URL matches your deployed domain

## 📝 Customization

### Change Email Recipient
In `api/contact.js`, update line 25:
```javascript
to: ['your-email@example.com'],
```

### Modify Email Template
Edit the `html` section in `api/contact.js` (lines 30-60) to customize the email appearance.

### Add More Validation
Add additional validation rules in the `handler` function before the Resend API call.

## 🔒 Security Notes

- The honeypot field prevents basic spam
- Email validation prevents malformed addresses
- All user input is sanitized in the email template
- API key is stored securely in Vercel environment variables

## 📊 Monitoring

- Check Resend dashboard for email delivery statistics
- Monitor Vercel function logs for any errors
- Set up email notifications for failed deliveries

---

## 🎉 You're All Set!

Once you've completed these steps, your contact form will be fully functional and will send emails directly to your inbox whenever someone contacts you through your portfolio.

**Next Steps:**
1. Test the contact form thoroughly
2. Consider adding a "Thank you" page after form submission
3. Set up email notifications for new contacts
4. Monitor the form performance and user feedback
