import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  const { name, email, topic, message, _trap } = await req.json()

  // Honeypot — bots fill this, humans don't
  if (_trap) return NextResponse.json({ success: true })

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await resend.emails.send({
    from: 'Jeremy Excel <coaching@jeremyexcel.com>',
    to: 'schilj13@outlook.com',
    replyTo: email,
    subject: `Coaching inquiry: ${topic ?? 'General'}`,
    text: `Name: ${name}\nEmail: ${email}\nTopic: ${topic ?? 'Not specified'}\n\n${message}`,
  })

  if (error) {
    console.error('Resend error:', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
