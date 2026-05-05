import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.json({ verified: false }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId)
  const verified = session.payment_status === 'paid'

  return NextResponse.json({ verified })
}
