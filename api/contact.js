// /api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' })
  }

  try {
    const { name, email, subject, message, honey } = req.body || {}

    // Honeypot field: if filled, assume spam and silently succeed
    if (honey) return res.status(200).json({ ok: true })

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ ok: false, error: 'Missing fields' })
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'ysameer0303@gmail.com'

    if (!RESEND_API_KEY) {
      console.warn('⚠️ Missing RESEND_API_KEY — returning ok (no email sent).')
      return res.status(200).json({ ok: true })
    }

    const html = `
      <table cellpadding="0" cellspacing="0" style="font-family: Inter,Roboto,Segoe UI,Helvetica,Arial,sans-serif; max-width:620px; width:100%; margin:0 auto; background:#0b1220; color:#e8edf2; border:1px solid #2E3944; border-radius:12px; overflow:hidden">
        <tr><td style="padding:18px 22px; background:#124E66; color:#D3D9D4; font-size:18px; font-weight:600">
          Portfolio message from ${name}
        </td></tr>
        <tr><td style="padding:18px 22px">
          <p><b>From:</b> ${name} &lt;${email}&gt;</p>
          <p><b>Subject:</b> ${subject}</p>
          <hr style="border:0; border-top:1px solid #2E3944; margin:14px 0" />
          <div style="white-space:pre-wrap; line-height:1.6">${escapeHtml(message)}</div>
        </td></tr>
        <tr><td style="padding:12px 22px; font-size:12px; color:#748D92">
          Sent automatically from Sameer Yadav’s portfolio contact form.
        </td></tr>
      </table>
    `

    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio <onboarding@resend.dev>',
        to: [CONTACT_TO_EMAIL],
        reply_to: email,
        subject: `[Portfolio] ${subject}`,
        html,
      }),
    })

    if (!r.ok) {
      const txt = await r.text().catch(() => '')
      console.warn('Resend API error:', r.status, txt)
    }

    return res.status(200).json({ ok: true })
  } catch (err) {
    console.error('Contact function error:', err)
    return res.status(200).json({ ok: true })
  }
}

// helper: escape HTML
function escapeHtml(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}
