import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { email, firstName } = await req.json()

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const formId = process.env.KIT_FORM_ID
  const apiKey = process.env.KIT_API_KEY

  const res = await fetch(`https://api.kit.com/v4/forms/${formId}/subscribers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      email_address: email,
      ...(firstName ? { first_name: firstName } : {}),
    }),
  })

  if (!res.ok) {
    const body = await res.text()
    console.error('Kit API error:', res.status, body)
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
