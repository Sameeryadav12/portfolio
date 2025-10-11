import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import ScrollAnimation from '../components/ScrollAnimation'

const TO = import.meta.env.VITE_CONTACT_EMAIL || 'ysameer0303@gmail.com'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Enter a valid email'),
  subject: z.string().min(2, 'Subject is required'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
  honey: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true)
    setSubmitError('')
    
    // Check for honeypot spam
    if (data.honey) {
      setSubmitError('Spam detected. Please try again.')
      setIsSubmitting(false)
      return
    }
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      
      if (res.ok) {
        setSent(true)
        reset()
        return
      } else {
        const errorData = await res.json()
        setSubmitError(errorData.message || 'Sorry, there was an error sending your message. Please try again or contact me directly at rishisameer7@gmail.com')
        return
      }
    } catch (error) {
      console.error('Contact form error:', error)
        setSubmitError('Sorry, there was an error sending your message. Please try again or contact me directly at rishisameer7@gmail.com')
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
    <div className="space-y-16">
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
                  className="w-full rounded-xl px-6 py-4 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-200"
                  style={{ background: 'var(--theme-gradient-primary)' }}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
  )
}
