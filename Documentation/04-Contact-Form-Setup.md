# 📧 Contact Form Setup Guide

Complete guide to setting up and understanding the contact form with anti-spam protection.

---

## 🎯 Overview

The contact form allows visitors to send you messages directly from your portfolio. It includes multiple layers of protection against spam and bots.

---

## 🛡️ Security Features

Your contact form has **3 layers of protection**:

### 1. Math Captcha ✅
- Simple addition/subtraction (e.g., "3 + 2 = ?")
- Human-friendly, effective against bots
- No external dependencies
- Always enabled

### 2. Honeypot Field ✅
- Hidden field that humans don't see
- Bots automatically fill it out
- If filled, submission is rejected
- Always enabled

### 3. Rate Limiting ✅
- Maximum 5 submissions per 15 minutes per IP
- Prevents spam attacks
- Automatic reset after time period
- Always enabled

---

## 🚀 How It Works

### User Flow

```
1. User fills out form
   ↓
2. User solves math captcha (e.g., "3 + 2 = ?")
   ↓
3. User clicks Submit
   ↓
4. Form validates input
   ↓
5. Captcha is checked
   ↓
6. Honeypot is checked
   ↓
7. Rate limit is checked
   ↓
8. Email is sent (production) or simulated (development)
   ↓
9. Success message shown
   ↓
10. Form resets
```

---

## 📝 Form Fields

### Name Field
- **Required**: Yes
- **Min length**: 2 characters
- **Max length**: 100 characters
- **Validation**: Letters, spaces, hyphens, apostrophes only

### Email Field
- **Required**: Yes
- **Format**: Valid email address
- **Validation**: RFC-compliant email regex
- **Example**: user@example.com

### Subject Field
- **Required**: Yes
- **Min length**: 3 characters
- **Max length**: 200 characters
- **Validation**: Any text (sanitized)

### Message Field
- **Required**: Yes
- **Min length**: 10 characters
- **Max length**: 5000 characters
- **Validation**: Any text (sanitized)

### Math Captcha
- **Required**: Yes
- **Format**: Number only
- **Validation**: Must match correct answer
- **Examples**: "3 + 2 = ?", "5 - 2 = ?"

---

## 🔧 Configuration

### Basic Settings

Location: `src/routes/Contact.tsx`

```typescript
// Contact email (where messages are sent)
const CONTACT_EMAIL = 'rishisameer7@gmail.com'

// Form validation rules
const schema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  subject: z.string().min(3).max(200),
  message: z.string().min(10).max(5000),
  captchaAnswer: z.string().min(1)
})
```

### Changing the Contact Email

**File**: `api/contact.js`

```javascript
// Line ~25
to: ['your-email@example.com'],
```

Replace with your email address.

---

## 🎨 Math Captcha System

### How It Works

The math captcha generates simple arithmetic questions:

```typescript
// Generate random number between 1-10
const num1 = Math.floor(Math.random() * 10) + 1
const num2 = Math.floor(Math.random() * 10) + 1

// Randomly choose addition or subtraction
const operation = Math.random() > 0.5 ? '+' : '-'

// Calculate correct answer
const answer = operation === '+' 
  ? num1 + num2 
  : Math.max(num1, num2) - Math.min(num1, num2)

// Question shown to user
const question = `${num1} ${operation} ${num2} = ?`
```

### Features

- ✅ Simple for humans (1st-grade math)
- ✅ Effective against bots
- ✅ No external services needed
- ✅ Refresh button to get new question
- ✅ Visual feedback on correct/incorrect
- ✅ Debug panel shows answer (development only)

---

## 🧪 Testing the Contact Form

### Development Testing

1. **Start the full stack server:**
   ```bash
   npm run dev:full
   ```

2. **Open the contact page:**
   ```
   http://localhost:5173/contact
   ```

3. **Fill out the form:**
   - Name: `Test User`
   - Email: `test@example.com`
   - Subject: `Test Subject`
   - Message: `This is a test message to verify the form works correctly.`

4. **Solve the captcha:**
   - Look at the question (e.g., "3 + 2 = ?")
   - Enter the answer (e.g., "5")
   - Submit button should turn blue (enabled)

5. **Click Submit**

6. **Check the results:**
   - ✅ Success message appears
   - ✅ Form resets to empty
   - ✅ Console shows email details

### Expected Console Output

**Browser Console (F12):**
```javascript
Form submission started
Captcha question: 3 + 2 = ?
User answer: 5
Correct answer: 5
Validating captcha - User: 5 Correct: 5
Captcha validation passed
Sending email...
✅ Email sent successfully!
```

**API Server Terminal:**
```
Contact form submission received: {
  name: 'Test User',
  email: 'test@example.com',
  subject: 'Test Subject',
  message: 'This is a test message to verify the form works correctly.'
}
Captcha verification passed: { userAnswer: '5', correctAnswer: '5' }
Simulating email send...
Email would be sent to: rishisameer7@gmail.com
From: test@example.com
Subject: Portfolio Contact: Test Subject
Message: This is a test message to verify the form works correctly.
```

---

## 🔍 Debug Panel

During development, a debug panel shows useful information:

```
🔍 Debug Information:
┌─────────────────┬─────────────────┐
│ Math Captcha    │ Submit Button   │
│ ✅ Correct      │ ✅ Enabled      │
├─────────────────┼─────────────────┤
│ Question        │ Form State      │
│ 3 + 2 = ? = 5   │ ⏸️ Ready        │
└─────────────────┴─────────────────┘

✅ Simple Math Captcha - No external dependencies!
🛠️ Development Mode: Using development API server on port 3001
```

**Shows:**
- Captcha status (correct/incorrect/empty)
- Submit button state (enabled/disabled)
- Current question and answer
- Form state (ready/submitting/success/error)
- Current mode (development/production)

---

## 📧 Development vs Production

### Development Mode (localhost)

**Email Behavior:**
- ❌ No real emails sent
- ✅ Email details logged to console
- ✅ Success message shown
- ✅ Form works exactly like production

**Success Message:**
```
"Email sent successfully! 
(Development mode - check console for details)"
```

**Why?**
- Test without spamming your inbox
- See exactly what would be sent
- Debug email content easily

---

### Production Mode (Vercel)

**Email Behavior:**
- ✅ Real emails sent to your inbox
- ✅ Uses Resend API
- ✅ Professional HTML email template
- ✅ Includes reply-to address

**Success Message:**
```
"Thank you for your message! 
I'll get back to you as soon as possible."
```

**Requirements:**
- `RESEND_API_KEY` environment variable
- `VITE_CONTACT_EMAIL` environment variable

See [Email Configuration](./05-Email-Configuration.md) for setup.

---

## 🎨 Customizing the Form

### Changing Validation Rules

**File**: `src/routes/Contact.tsx`

```typescript
const schema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  
  email: z.string()
    .email("Invalid email address"),
  
  subject: z.string()
    .min(3, "Subject is too short")
    .max(200, "Subject is too long"),
  
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(5000, "Message is too long")
})
```

Change the numbers to adjust limits.

---

### Changing Captcha Difficulty

**File**: `src/routes/Contact.tsx`

```typescript
// Current: numbers 1-10
const num1 = Math.floor(Math.random() * 10) + 1

// Easier: numbers 1-5
const num1 = Math.floor(Math.random() * 5) + 1

// Harder: numbers 1-20
const num1 = Math.floor(Math.random() * 20) + 1
```

---

### Adding Phone Number Field

1. **Add to form schema:**
```typescript
const schema = z.object({
  // ... existing fields
  phone: z.string()
    .regex(/^[0-9-+() ]+$/, "Invalid phone number")
    .min(10)
    .optional()
})
```

2. **Add to form HTML:**
```tsx
<input
  type="tel"
  {...register('phone')}
  placeholder="Phone (optional)"
/>
```

3. **Update API to handle it:**
```javascript
// api/contact.js
const { name, email, subject, message, phone } = req.body
```

---

### Changing Form Styling

All styling uses Tailwind CSS classes:

```tsx
<input
  className="
    w-full                    // Full width
    px-4 py-2                // Padding
    border border-gray-300   // Border
    rounded-lg               // Rounded corners
    focus:ring-2             // Focus effect
    focus:ring-blue-500      // Focus color
  "
/>
```

Change classes to modify appearance.

---

## 🐛 Common Issues

### Submit Button Stays Disabled

**Possible causes:**
1. Captcha not solved
2. Required fields empty
3. Email format invalid
4. Message too short

**Solution:** 
- Fill all required fields
- Enter valid email
- Solve the math captcha
- Check debug panel for details

---

### "Incorrect Captcha" Error

**Possible causes:**
1. Wrong answer entered
2. Multiple spaces in answer
3. Non-numeric characters

**Solution:**
- Enter only the number
- No spaces or special characters
- Click refresh icon for new question

---

### Form Submits But No Success Message

**Possible causes:**
1. API server not running
2. Network error
3. CORS issue

**Solution:**
```bash
# Make sure you're running both servers:
npm run dev:full

# Check browser console (F12) for errors
# Check API server terminal for errors
```

---

### Rate Limit Exceeded

**Error Message:**
```
"Too many requests. Please try again later."
```

**Cause:** More than 5 submissions in 15 minutes

**Solution:**
- Wait 15 minutes
- Or restart API server (development only)

---

## 📊 Form Analytics

### Tracking Submissions

You can add analytics to track form submissions:

```typescript
const handleSubmit = async (data) => {
  // Track submission
  console.log('Form submitted:', {
    timestamp: new Date(),
    fields: Object.keys(data)
  })
  
  // Send to analytics
  // analytics.track('Contact Form Submitted')
  
  // Continue with actual submission
}
```

---

## ✅ Testing Checklist

Before deploying, test:

- [ ] All fields validate correctly
- [ ] Email validation works
- [ ] Captcha validates correctly
- [ ] Form submits successfully
- [ ] Success message appears
- [ ] Form resets after submission
- [ ] Error messages display correctly
- [ ] Rate limiting works
- [ ] Responsive design (mobile, tablet, desktop)
- [ ] Honeypot catches spam (test by filling hidden field manually)

---

## 🚀 Next Steps

Your contact form is ready! Now set up email sending:

**→ [Email Configuration Guide](./05-Email-Configuration.md)**

Learn how to configure real email sending for production.

---

**Need Help?** Check the [Troubleshooting Guide](./08-Troubleshooting.md) or return to the main [README](./README.md).











