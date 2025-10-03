import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Enter a valid email'),
  message: z.string().min(10, 'Message should be at least 10 characters'),
  // honeypot (not shown)
  honey: z.string().optional(),
})

type FormData = z.infer<typeof schema>

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    // Try serverless first
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, honey: '' }),
      })

      if (res.ok) {
        alert('Thanks! Your message has been sent.')
        reset()
        return
      }
    } catch {
      // fall back to mailto below
    }

    // Fallback: mailto (works locally or if serverless is unavailable)
    const subject = encodeURIComponent(`Portfolio Contact — ${data.name}`)
    const body = encodeURIComponent(`${data.message}\n\nFrom: ${data.name} <${data.email}>`)
    window.location.href = `mailto:${''}?subject=${subject}&body=${body}`
    reset()
  }

  return (
    <section className="max-w-2xl mx-auto rounded-3xl border border-brand-mist/20 bg-brand-slate/40 p-6">
      <h1 className="text-3xl font-bold text-brand-fog">Contact</h1>
      <p className="mt-2 text-brand-mist">Feel free to reach out for roles, collaborations, or questions.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4" noValidate>
        {/* Honeypot (hidden) */}
        <input type="text" tabIndex={-1} autoComplete="off" className="hidden" {...register('honey')} />

        <div>
          <label className="block text-sm text-brand-mist mb-1">Name</label>
          <input
            className="w-full rounded-xl border border-brand-mist/20 bg-brand-base/50 px-3 py-2 text-brand-fog focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
            {...register('name')}
          />
          {errors.name && <p className="text-xs text-red-300 mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-brand-mist mb-1">Email</label>
          <input
            className="w-full rounded-xl border border-brand-mist/20 bg-brand-base/50 px-3 py-2 text-brand-fog focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
            {...register('email')}
          />
          {errors.email && <p className="text-xs text-red-300 mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm text-brand-mist mb-1">Message</label>
          <textarea
            rows={6}
            className="w-full rounded-xl border border-brand-mist/20 bg-brand-base/50 px-3 py-2 text-brand-fog focus:outline-none focus:ring-2 focus:ring-brand-teal/40"
            {...register('message')}
          />
          {errors.message && <p className="text-xs text-red-300 mt-1">{errors.message.message}</p>}
        </div>

        <div className="pt-2">
          <button
            disabled={isSubmitting}
            className="rounded-2xl px-5 py-3 text-white disabled:opacity-60"
            style={{ backgroundColor: '#124E66' }}
          >
            Send
          </button>
          {isSubmitSuccessful && <span className="ml-3 text-brand-mist">Thanks! I’ll get back to you shortly.</span>}
        </div>
      </form>
    </section>
  )
}
