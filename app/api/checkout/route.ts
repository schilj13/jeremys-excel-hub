import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {
  const origin = req.headers.get('origin') ?? 'https://www.jeremyexcel.com'

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [
      {
        price: process.env.STRIPE_PRICE_ID!,
        quantity: 1,
      },
    ],
    success_url: `${origin}/hr-bundle/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/hr-bundle`,
  })

  return NextResponse.json({ url: session.url })
}
