import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, firstName } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const res = await fetch('https://app.convertkit.com/forms/fc07983e29/subscriptions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email_address: email,
      ...(firstName ? { first_name: firstName } : {}),
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    console.error('Kit form error:', res.status, body)
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
