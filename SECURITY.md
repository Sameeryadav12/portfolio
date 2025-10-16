# Security Measures

This portfolio website implements multiple layers of security to protect against common web vulnerabilities.

## 🔒 Implemented Security Features

### 1. **Input Validation & Sanitization**
- Client-side validation using Zod schema
- Server-side input sanitization
- Length limits on all form fields
- Regex validation for email and text fields
- XSS protection through input filtering

### 2. **Rate Limiting**
- Client-side: 1-minute cooldown between submissions
- Server-side: 5 requests per 15 minutes per IP
- User-Agent based rate limiting

### 3. **Advanced Bot Protection**
- **Behavioral Analysis:** Tracks mouse movements, keystrokes, time on page
- **Time-based Challenges:** Ensures forms are filled at human speed
- **Honeypot Fields:** Hidden fields to catch automated bots
- **IP-based Blocking:** Automatically blocks suspicious IPs after violations
- **User-Agent Analysis:** Detects and blocks known bot user agents
- **Screen Resolution Tracking:** Verifies real browser environments

### 4. **Spam Protection**
- **Content Analysis:** Detects spam keywords and suspicious patterns
- **Disposable Email Blocking:** Prevents temporary/fake email addresses
- **Pattern Recognition:** Identifies common spam message structures
- **XSS Protection:** Filters malicious scripts and HTML injection

### 5. **Security Headers**
- `X-Frame-Options: DENY` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-XSS-Protection: 1; mode=block` - XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Strict-Transport-Security` - HTTPS enforcement
- `Content-Security-Policy` - Prevents code injection

### 6. **CORS Configuration**
- Restricted to specific domains
- Proper preflight handling
- Secure headers for cross-origin requests

### 7. **Environment Security**
- API keys stored in environment variables
- No sensitive data in client-side code
- Proper secret management

## 🚀 Deployment Security Checklist

### Before Deployment:
- [ ] Update `vercel.json` with your actual domain
- [ ] Set environment variables in Vercel dashboard
- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Test contact form functionality
- [ ] Verify security headers are working

### Environment Variables to Set:
```
RESEND_API_KEY=your-resend-api-key
VITE_CONTACT_EMAIL=your-email@domain.com
```

### Post-Deployment:
- [ ] Test all security headers
- [ ] Verify rate limiting works
- [ ] Check CSP doesn't break functionality
- [ ] Monitor for suspicious activity
- [ ] Regular security updates

## 🛡️ Additional Security Recommendations

### For Production:
1. **Use a CDN** (Cloudflare) for additional protection
2. **Enable DDoS protection**
3. **Set up monitoring** for suspicious activity
4. **Regular security audits**
5. **Keep dependencies updated**
6. **Use a WAF** (Web Application Firewall)

### Monitoring:
- Monitor failed login attempts
- Track unusual traffic patterns
- Log security events
- Set up alerts for suspicious activity

## 🤖 Bot Protection Features

### **Behavioral Analysis:**
- **Mouse Movement Tracking:** Monitors cursor activity
- **Keystroke Counting:** Tracks typing patterns
- **Time Analysis:** Measures form completion time
- **Page Interaction:** Monitors time spent on page

### **Automated Blocking:**
- **IP Blocking:** Blocks IPs after 3 violations (24-hour block)
- **Suspicious Activity Tracking:** Monitors and logs suspicious behavior
- **Disposable Email Detection:** Blocks temporary email services
- **Content Filtering:** Detects spam keywords and patterns

### **Human Verification:**
- **Time-based Challenges:** Requires realistic form completion time
- **Browser Environment Checks:** Verifies screen resolution, language, timezone
- **User-Agent Analysis:** Blocks known bot user agents

## 🔍 Security Testing

Test your security measures:
1. Try submitting forms with malicious scripts
2. Test rate limiting by rapid submissions
3. Verify CORS restrictions
4. Check security headers with online tools
5. Test XSS protection
6. **Test bot detection:** Try submitting forms too quickly
7. **Test disposable emails:** Use temporary email services
8. **Test IP blocking:** Submit multiple violations from same IP

## 📞 Reporting Security Issues

If you find a security vulnerability, please contact:
- Email: rishisameer7@gmail.com
- Please include steps to reproduce the issue
- Do not publicly disclose until fixed

## 🔄 Regular Updates

- Update dependencies monthly
- Review security headers quarterly
- Monitor logs for suspicious activity
- Keep up with security best practices
