// Development API server for contact form
import express from 'express';
import cors from 'cors';
import path from 'path';
import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config({ path: '.env' });

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    console.log('Contact form submission received:', req.body);
    
    const { name, email, subject, message, honey, captcha, captchaAnswer } = req.body;

    // Honeypot check
    if (honey) {
      console.log('Honeypot triggered');
      return res.status(400).json({ message: 'Invalid submission (honeypot detected)' });
    }

    // Basic validation
    if (!name || !email || !subject || !message || !captcha || !captchaAnswer) {
      return res.status(400).json({ message: 'All fields are required, including captcha.' });
    }

    // Captcha verification
    const userAnswer = captcha?.toString().trim();
    const correctAnswer = captchaAnswer?.toString().trim();
    
    if (userAnswer !== correctAnswer) {
      console.log('Captcha verification failed:', { userAnswer, correctAnswer });
      return res.status(400).json({
        message: `Incorrect answer. The correct answer is ${correctAnswer}. Please try again.`
      });
    }

    console.log('Captcha verification passed:', { userAnswer, correctAnswer });

    // Check if Resend API key is available
    if (!process.env.RESEND_API_KEY) {
      console.log('⚠️  RESEND_API_KEY not found - simulating email send');
      console.log('Email would be sent to: rishisameer7@gmail.com');
      console.log('From:', email);
      console.log('Subject:', `Portfolio Contact: ${subject}`);
      console.log('Message:', message);
      
      return res.status(200).json({ 
        message: 'Email sent successfully! (Development mode - no actual email sent)',
        development: true 
      });
    }

    // Send real email using Resend
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      
      console.log('📧 Sending real email via Resend...');
      
      const emailResult = await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: 'rishisameer7@gmail.com',
        replyTo: email,
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Submission</h2>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>From:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
              <h3 style="color: #555;">Message:</h3>
              <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
            <p style="font-size: 12px; color: #888;">
              📧 Quick Reply: Just hit reply to respond directly to ${email}
            </p>
            <p style="font-size: 12px; color: #888;">
              Timestamp: ${new Date().toLocaleString()}<br>
              Protected by: Math Captcha + Honeypot
            </p>
          </div>
        `
      });

      console.log('✅ Email sent successfully via Resend!', emailResult);
      
      res.status(200).json({ 
        message: 'Email sent successfully! Check your inbox at rishisameer7@gmail.com',
        development: false 
      });
      
    } catch (emailError) {
      console.error('❌ Resend error:', emailError);
      res.status(500).json({ 
        message: 'Failed to send email. Please try again.',
        error: emailError.message 
      });
    }

  } catch (error) {
    console.error('Error in contact API:', error);
    res.status(500).json({ 
      message: 'Internal server error. Please try again.',
      error: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Development API server is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Development API server running on http://localhost:${PORT}`);
  console.log(`📧 Contact endpoint: http://localhost:${PORT}/api/contact`);
});
