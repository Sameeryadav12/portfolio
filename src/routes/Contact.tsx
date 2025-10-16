import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
// import ReCAPTCHA from 'react-google-recaptcha' // Removed - using simple captcha instead
import ScrollAnimation from '../components/ScrollAnimation'
import ParticleBackground from '../components/ParticleBackground'

const TO = import.meta.env.VITE_CONTACT_EMAIL || 'rishisameer7@gmail.com'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name').max(100, 'Name too long'),
  email: z.string().email('Enter a valid email').max(254, 'Email too long'),
  subject: z.string().min(2, 'Subject is required').max(200, 'Subject too long'),
  message: z.string().min(10, 'Message should be at least 10 characters').max(2000, 'Message too long'),
  honey: z.string().optional(), // Honeypot field
  captcha: z.string().min(1, 'Please solve the math problem'), // Simple math captcha
})

type FormValues = z.infer<typeof schema>

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  
  // Simple math captcha
  const [captchaQuestion, setCaptchaQuestion] = useState('')
  const [captchaAnswer, setCaptchaAnswer] = useState('')
  
  // Generate math question on component mount
  React.useEffect(() => {
    generateCaptcha()
  }, [])
  
  const generateCaptcha = () => {
    // Use easier math problems to avoid confusion
    const num1 = Math.floor(Math.random() * 5) + 1  // 1-5
    const num2 = Math.floor(Math.random() * 5) + 1  // 1-5
    const operation = Math.random() > 0.3 ? '+' : '-'  // 70% addition (easier)
    
    let question = ''
    let answer = 0
    
    if (operation === '+') {
      question = `${num1} + ${num2} = ?`
      answer = num1 + num2
    } else {
      // Make sure result is positive and simple
      const larger = Math.max(num1, num2)
      const smaller = Math.min(num1, num2)
      if (larger === smaller) {
        // Avoid 5-5=0, make it 6-5=1
        question = `${larger + 1} - ${smaller} = ?`
        answer = 1
      } else {
        question = `${larger} - ${smaller} = ?`
        answer = larger - smaller
      }
    }
    
    setCaptchaQuestion(question)
    setCaptchaAnswer(answer.toString())
    console.log('Generated captcha:', question, 'Answer:', answer) // Debug log
  }
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setValue,
    watch
  } = useForm<FormValues>({ resolver: zodResolver(schema) })
  
  const captchaValue = watch('captcha')
  
  // Check if captcha is correct for button state
  const isCaptchaCorrect = captchaValue && captchaAnswer && captchaValue.toString().trim() === captchaAnswer.toString().trim()

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    setSubmitError('')
    setSent(false) // Reset sent status on new submission
    
    console.log('Form submission started')
    console.log('Captcha question:', captchaQuestion)
    console.log('User answer:', data.captcha)
    console.log('Correct answer:', captchaAnswer)
    
    // Check for honeypot spam
    if (data.honey) {
      setSubmitError('Spam detected. Please try again.')
      setIsSubmitting(false)
      return
    }

    // Check captcha answer (more flexible validation)
    const userAnswer = data.captcha?.toString().trim()
    const correctAnswer = captchaAnswer?.toString().trim()
    
    console.log('Validating captcha - User:', userAnswer, 'Correct:', correctAnswer)
    
    if (!userAnswer || userAnswer !== correctAnswer) {
      console.log('Captcha validation failed')
      setSubmitError(`❌ Incorrect answer. The correct answer is ${correctAnswer}. Please try again.`)
      setIsSubmitting(false)
      generateCaptcha() // Generate new captcha on wrong answer
      setValue('captcha', '') // Clear the input
      return
    }
    
    console.log('Captcha validation passed')

    // Rate limiting check (1 minute cooldown)
    const lastSubmission = localStorage.getItem('lastContactSubmission')
    const now = Date.now()
    if (lastSubmission && now - parseInt(lastSubmission) < 60000) {
      setSubmitError('Please wait a moment before submitting another message.')
      setIsSubmitting(false)
      return
    }

    try {
      console.log('Sending email...')
      console.log('Form data:', { ...data, captcha: 'verified' })
      
      // Call the API (development server or production)
      console.log('Calling API...')
      
      // In development, call the API server directly
      const apiUrl = import.meta.env.DEV 
        ? 'http://localhost:3001/api/contact'
        : '/api/contact'
      
      console.log('API URL:', apiUrl)
      
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify({
          ...data,
          captchaAnswer, // Include the correct answer for server verification
          timestamp: now
        }),
      })
      
      if (res.ok) {
        const responseData = await res.json()
        console.log('✅ Email sent successfully!', responseData)
        
        // Show success message and reset form
        setSent(true)
        reset()
        generateCaptcha()
        setValue('captcha', '') // Clear captcha input
        localStorage.setItem('lastContactSubmission', now.toString())
      } else {
        console.error('❌ API error - Status:', res.status)
        console.error('Response headers:', res.headers)
        
        let errorMessage = 'Sorry, there was an error sending your message. Please try again or contact me directly at rishisameer7@gmail.com'
        
        try {
          const errorData = await res.json()
          console.error('❌ API error data:', errorData)
          errorMessage = errorData.message || errorMessage
        } catch (jsonError) {
          console.error('❌ Failed to parse JSON response:', jsonError)
          console.error('Response text might be HTML or plain text')
          errorMessage = `Server error (${res.status}). Please try again later.`
        }
        
        setSubmitError(errorMessage)
        generateCaptcha() // Generate new captcha on error
        setValue('captcha', '') // Clear captcha input
      }
    } catch (error) {
      console.error('❌ Contact form error:', error)
      console.error('Error details:', error.message)
      setSubmitError(`❌ Network error: ${error.message}. Please check your connection and try again.`)
      generateCaptcha() // Generate new captcha on error
      setValue('captcha', '') // Clear captcha input
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'rishisameer7@gmail.com',
      href: 'mailto:rishisameer7@gmail.com?subject=Portfolio Contact&body=Hi Sameer,%0D%0A%0D%0AI found your portfolio and would like to connect.%0D%0A%0D%0ABest regards,',
      description: 'I usually reply within 24-48 hours'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: 'Available on request',
      href: 'tel:+61400000000',
      description: 'For urgent matters'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Australia',
      href: 'https://maps.google.com/?q=Australia',
      description: 'Open to remote work'
    }
  ]

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <div className="relative z-10 space-y-16">
      {/* Hero Section */}
      <ScrollAnimation direction="up" delay={0.2}>
        <div className="text-center space-y-6">
          <motion.h1 
            className="text-5xl font-bold"
            style={{ color: 'var(--theme-text)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: 'var(--theme-textSecondary)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to work together? Let's discuss your next project or opportunity.
          </motion.p>
        </div>
      </ScrollAnimation>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Methods */}
        <ScrollAnimation direction="left" delay={0.4}>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold" style={{ color: 'var(--theme-text)' }}>
              Let's Connect
            </h2>
            <div className="space-y-6">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('mailto:') ? '_self' : '_blank'}
                    rel={method.href.startsWith('mailto:') ? '' : 'noreferrer'}
                    className="flex items-center gap-4 p-6 rounded-2xl transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: 'var(--theme-surface)' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: 'var(--theme-primary)' }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold" style={{ color: 'var(--theme-text)' }}>
                        {method.title}
                      </h3>
                      <p className="font-medium" style={{ color: 'var(--theme-primary)' }}>
                        {method.value}
                      </p>
                      <p className="text-sm" style={{ color: 'var(--theme-textSecondary)' }}>
                        {method.description}
                      </p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            {/* Quick Stats */}
            <motion.div 
              className="rounded-2xl p-6"
              style={{ backgroundColor: 'var(--theme-surface)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--theme-text)' }}>
                Quick Response
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span style={{ color: 'var(--theme-textSecondary)' }}>Response Time</span>
                  <span style={{ color: 'var(--theme-text)' }}>24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--theme-textSecondary)' }}>Availability</span>
                  <span style={{ color: 'var(--theme-success)' }}>Open to opportunities</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: 'var(--theme-textSecondary)' }}>Preferred Contact</span>
                  <span style={{ color: 'var(--theme-text)' }}>Email</span>
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollAnimation>

        {/* Contact Form */}
        <ScrollAnimation direction="right" delay={0.6}>
          <div 
            className="rounded-3xl p-8"
            style={{ backgroundColor: 'var(--theme-surface)' }}
          >
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--theme-text)' }}>
              Send a Message
            </h2>

            {sent ? (
              <motion.div
                className="text-center py-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <CheckCircle size={64} className="mx-auto mb-4" style={{ color: 'var(--theme-success)' }} />
                <h3 className="text-2xl font-semibold mb-2" style={{ color: 'var(--theme-text)' }}>
                  Message Sent!
                </h3>
                <p style={{ color: 'var(--theme-textSecondary)' }}>
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Honeypot field */}
                <input type="text" {...register('honey')} className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--theme-text)' }}>
                      Name *
                    </label>
                    <input
                      className="w-full rounded-xl px-4 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{
                        backgroundColor: 'var(--theme-background)',
                        color: 'var(--theme-text)',
                        border: '1px solid var(--theme-border)',
                      }}
                      placeholder="Your name"
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="text-sm mt-1 flex items-center gap-1" style={{ color: 'var(--theme-error)' }}>
                        <AlertCircle size={14} />
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: 'var(--theme-text)' }}>
                      Email *
                    </label>
                    <input
                      className="w-full rounded-xl px-4 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{
                        backgroundColor: 'var(--theme-background)',
                        color: 'var(--theme-text)',
                        border: '1px solid var(--theme-border)',
                      }}
                      placeholder="you@example.com"
                      {...register('email')}
                    />
                    {errors.email && (
                      <p className="text-sm mt-1 flex items-center gap-1" style={{ color: 'var(--theme-error)' }}>
                        <AlertCircle size={14} />
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--theme-text)' }}>
                    Subject *
                  </label>
                  <input
                    className="w-full rounded-xl px-4 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{
                      backgroundColor: 'var(--theme-background)',
                      color: 'var(--theme-text)',
                      border: '1px solid var(--theme-border)',
                    }}
                    placeholder="How can I help?"
                    {...register('subject')}
                  />
                  {errors.subject && (
                    <p className="text-sm mt-1 flex items-center gap-1" style={{ color: 'var(--theme-error)' }}>
                      <AlertCircle size={14} />
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: 'var(--theme-text)' }}>
                    Message *
                  </label>
                  <textarea
                      className="w-full min-h-[160px] rounded-xl px-4 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    style={{
                      backgroundColor: 'var(--theme-background)',
                      color: 'var(--theme-text)',
                      border: '1px solid var(--theme-border)',
                    }}
                    placeholder="Tell me about your project or opportunity..."
                    {...register('message')}
                  />
                  {errors.message && (
                    <p className="text-sm mt-1 flex items-center gap-1" style={{ color: 'var(--theme-error)' }}>
                      <AlertCircle size={14} />
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Simple Math Captcha */}
                <div className="space-y-3">
                  <label className="block text-sm font-medium" style={{ color: 'var(--theme-text)' }}>
                    Security Check *
                  </label>
                  <div className="flex items-center gap-3">
                    <div 
                      className="px-4 py-3 rounded-xl font-mono text-lg font-bold text-center min-w-[120px]"
                      style={{ 
                        backgroundColor: 'var(--theme-background)',
                        color: 'var(--theme-text)',
                        border: captchaValue && !isCaptchaCorrect ? '2px solid #ef4444' : '2px solid var(--theme-primary)',
                      }}
                    >
                      {captchaQuestion}
                    </div>
                    <input
                      type="number"
                      min="0"
                      max="20"
                      step="1"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      className="flex-1 rounded-xl px-4 py-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      style={{
                        backgroundColor: 'var(--theme-background)',
                        color: 'var(--theme-text)',
                        border: '1px solid var(--theme-border)',
                      }}
                      placeholder="Your answer"
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                      data-lpignore="true"
                      data-form-type="other"
                      {...register('captcha', {
                        setValueAs: (value) => value?.toString().trim() || '',
                        validate: (value) => {
                          const numValue = parseInt(value)
                          return !isNaN(numValue) && numValue >= 0 && numValue <= 20
                        }
                      })}
                    />
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                      style={{
                        backgroundColor: 'var(--theme-primary)',
                        color: 'white',
                      }}
                      title="Generate new question"
                    >
                      🔄
                    </button>
                  </div>
                  {errors.captcha && (
                    <p className="text-sm mt-1 flex items-center gap-1" style={{ color: 'var(--theme-error)' }}>
                      <AlertCircle size={14} />
                      {errors.captcha.message}
                    </p>
                  )}
                  {captchaValue && !isCaptchaCorrect && (
                    <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                      ❌ Wrong answer. The correct answer is {captchaAnswer}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    💡 Tip: Answer the math problem above. Example: If it shows "3 + 2 = ?", enter "5"
                  </p>
                </div>

                {submitError && (
                  <motion.div
                    className="p-4 rounded-xl flex items-center gap-2"
                    style={{ backgroundColor: 'var(--theme-error)20', color: 'var(--theme-error)' }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <AlertCircle size={16} />
                    {submitError}
                  </motion.div>
                )}


                <motion.button
                  type="submit"
                  className="w-full rounded-xl px-6 py-4 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: 'var(--theme-gradient-primary)' }}
                  disabled={isSubmitting || !captchaValue || !isCaptchaCorrect}
                  whileHover={{ scale: (isSubmitting || !captchaValue || !isCaptchaCorrect) ? 1 : 1.02 }}
                  whileTap={{ scale: (isSubmitting || !captchaValue || !isCaptchaCorrect) ? 1 : 0.98 }}
                  onClick={() => console.log('Submit clicked - isSubmitting:', isSubmitting, 'captchaValue:', captchaValue, 'isCaptchaCorrect:', isCaptchaCorrect)}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </ScrollAnimation>
      </div>
      </div>
    </div>
  )
}
