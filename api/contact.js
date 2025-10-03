// Vercel Serverless Function: /api/contact  (JavaScript version)
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  try {
    const { name, email, message, honey } = req.body || {}

    // Honeypot: if bots fill this, silently accept
    if (honey) return res.status(200).json({ ok: true })

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing fields' })
    }

    // Email via Resend (set env vars on Vercel)
    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'you@example.com'

    if (!RESEND_API_KEY) {
      console.warn('Missing RESEND_API_KEY — skipping send but returning ok.')
      return res.status(200).json({ ok: true })
    }

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio <onboarding@resend.dev>',
        to: [CONTACT_TO_EMAIL],
        subject: `Portfolio Contact — ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    })

    if (!r.ok) {
      const txt = await r.text().catch(() => '')
      console.warn('Resend API error:', r.status, txt)
      // still return ok so user isn’t blocked
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact function error:', err)
    return res.status(200).json({ ok: true })
  }
}
