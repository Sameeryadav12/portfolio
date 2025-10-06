import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

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
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormValues) {
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
      }
    } catch {
      // ignore, fallback next
    }

    // fallback (mailto)
    const subject = encodeURIComponent(data.subject)
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`
    )
    window.location.href = `mailto:${TO}?subject=${subject}&body=${body}`
  }

  return (
    <section className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-2 text-brand-fog">Contact</h1>
      <p className="text-brand-mist mb-6">
        I usually reply within 24–48 hours. On local dev, this opens your mail app;
        on Vercel it sends via a secure serverless function.
      </p>

      {sent ? (
        <div className="rounded-xl bg-[#124E66]/20 border border-[#124E66] p-4 text-[#D3D9D4]">
          ✅ Thanks! Your message was sent successfully.
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Honeypot field */}
          <input type="text" {...register('honey')} className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <label className="block text-sm mb-1 text-brand-mist">Name</label>
            <input
              className="w-full rounded-xl bg-[#212A31] text-[#D3D9D4] placeholder-[#748D92] border border-brand-mist/20 focus:outline-none focus:ring-2 focus:ring-[#124E66] px-3 py-2"
              placeholder="Your name"
              {...register('name')}
            />
            {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1 text-brand-mist">Email</label>
            <input
              className="w-full rounded-xl bg-[#212A31] text-[#D3D9D4] placeholder-[#748D92] border border-brand-mist/20 focus:outline-none focus:ring-2 focus:ring-[#124E66] px-3 py-2"
              placeholder="you@example.com"
              {...register('email')}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1 text-brand-mist">Subject</label>
            <input
              className="w-full rounded-xl bg-[#212A31] text-[#D3D9D4] placeholder-[#748D92] border border-brand-mist/20 focus:outline-none focus:ring-2 focus:ring-[#124E66] px-3 py-2"
              placeholder="How can I help?"
              {...register('subject')}
            />
            {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>}
          </div>

          <div>
            <label className="block text-sm mb-1 text-brand-mist">Message</label>
            <textarea
              className="w-full min-h-[160px] rounded-xl bg-[#212A31] text-[#D3D9D4] placeholder-[#748D92] border border-brand-mist/20 focus:outline-none focus:ring-2 focus:ring-[#124E66] px-3 py-2"
              placeholder="Say hello…"
              {...register('message')}
            />
            {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="rounded-xl px-4 py-2 bg-[#124E66] text-[#D3D9D4] hover:bg-[#0f4152] transition disabled:opacity-70"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending…' : 'Send'}
          </button>

          <p className="text-xs text-brand-mist mt-2">
            Fallback email: <strong>{TO}</strong>
          </p>
        </form>
      )}
    </section>
  )
}
