// api/contact.js
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const TO = 'rishisameer7@gmail.com'

// Simple rate limiting store
const rateLimitStore = new Map()

function checkRateLimit(ip) {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutes
  const maxRequests = 5
  
  if (!rateLimitStore.has(ip)) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  const data = rateLimitStore.get(ip)
  
  if (now > data.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }
  
  if (data.count >= maxRequests) {
    return false
  }
  
  data.count++
  return true
}

// Verify simple math captcha (more flexible)
function verifyCaptcha(userAnswer, correctAnswer) {
  if (!userAnswer || !correctAnswer) return false
  
  // Clean and normalize both answers
  const cleanUserAnswer = userAnswer.toString().trim()
  const cleanCorrectAnswer = correctAnswer.toString().trim()
  
  // Direct comparison
  if (cleanUserAnswer === cleanCorrectAnswer) return true
  
  // Also try numeric comparison in case of type issues
  const userNum = parseInt(cleanUserAnswer)
  const correctNum = parseInt(cleanCorrectAnswer)
  
  return !isNaN(userNum) && !isNaN(correctNum) && userNum === correctNum
}

// Basic input sanitization
function sanitizeInput(input) {
  return input.replace(/<|>/g, '')
}

export default async function handler(req, res) {
  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // CORS headers
  const allowedOrigins = ['http://localhost:5173', 'https://yourdomain.com']
  const origin = req.headers.origin
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With')

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // Get client IP
  const clientIP = req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown'
  console.log('Contact form submission from IP:', clientIP)
  
  // Check rate limit
  if (!checkRateLimit(clientIP)) {
    console.log('Rate limit exceeded for IP:', clientIP)
    return res.status(429).json({ message: 'Too many requests. Please try again later.' })
  }

  try {
    const { name, email, subject, message, honey, captcha, captchaAnswer } = req.body

    // Honeypot check
    if (honey) {
      console.log('Honeypot triggered')
      return res.status(400).json({ message: 'Invalid submission' })
    }

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    // Verify captcha
    if (!captcha || !captchaAnswer) {
      return res.status(400).json({ message: 'Please solve the security check' })
    }

    if (!verifyCaptcha(captcha, captchaAnswer)) {
      console.log('Captcha verification failed:', { userAnswer: captcha, correctAnswer: captchaAnswer })
      return res.status(400).json({ 
        message: `Incorrect answer. The correct answer is ${captchaAnswer}. Please try again.` 
      })
    }

    console.log('Captcha verification passed:', { userAnswer: captcha, correctAnswer: captchaAnswer })

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name)
    const sanitizedEmail = sanitizeInput(email)
    const sanitizedSubject = sanitizeInput(subject)
    const sanitizedMessage = sanitizeInput(message)

    // Check for suspicious patterns
    const suspiciousPatterns = ['<script>', 'javascript:', '<iframe>', '<object>', '<embed>']
    const allText = `${sanitizedName} ${sanitizedEmail} ${sanitizedSubject} ${sanitizedMessage}`.toLowerCase()
    
    if (suspiciousPatterns.some(pattern => allText.includes(pattern))) {
      console.log('Suspicious pattern detected')
      return res.status(400).json({ message: 'Invalid content detected' })
    }

    // Check Resend API key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not set - returning success for development')
      
      // In development mode, simulate successful email send
      console.log('Development mode: Simulating email send')
      console.log('Email would be sent to:', 'rishisameer7@gmail.com')
      console.log('From:', sanitizedEmail)
      console.log('Subject:', `Portfolio Contact: ${sanitizedSubject}`)
      console.log('Message:', sanitizedMessage)
      
      return res.status(200).json({ 
        message: 'Email sent successfully! (Development mode - no actual email sent)',
        development: true 
      })
    }

    console.log('Sending email via Resend...')
    
    // Send email using Resend
    const emailData = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: 'rishisameer7@gmail.com',
      replyTo: sanitizedEmail,
      subject: `Portfolio Contact: ${sanitizedSubject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 10px;">
          <h2 style="color: #1f2937; border-bottom: 3px solid #3b82f6; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong style="color: #374151;">From:</strong> <span style="color: #1f2937;">${sanitizedName}</span></p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${sanitizedEmail}" style="color: #3b82f6; text-decoration: none;">${sanitizedEmail}</a></p>
            <p style="margin: 10px 0;"><strong style="color: #374151;">Subject:</strong> <span style="color: #1f2937;">${sanitizedSubject}</span></p>
          </div>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 0 0 10px 0;"><strong style="color: #374151;">Message:</strong></p>
            <p style="color: #1f2937; line-height: 1.6; white-space: pre-wrap;">${sanitizedMessage}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 4px;">
            <p style="margin: 0; font-size: 12px; color: #1e40af;">
              <strong>📧 Quick Reply:</strong> Just hit reply to respond directly to ${sanitizedEmail}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 11px; color: #6b7280;">
            <p style="margin: 5px 0;"><strong>IP Address:</strong> ${clientIP}</p>
            <p style="margin: 5px 0;"><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
            <p style="margin: 5px 0;"><strong>Protected by:</strong> Math Captcha + Honeypot</p>
          </div>
        </div>
      `
    })

    console.log('Email sent successfully:', emailData)
    return res.status(200).json({ message: 'Email sent successfully!' })
  } catch (error) {
    console.error('Error in contact API:', error)
    return res.status(500).json({ 
      message: 'Failed to send email. Please try again or contact directly.',
      error: error.message 
    })
  }
}
