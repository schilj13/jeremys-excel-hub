'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const PIXEL_ID = '2975230469406065'

export default function FacebookPixel() {
  const pathname = usePathname()

  useEffect(() => {
    if (!(window as any).fbq) {
      const fbq: any = function (...args: any[]) {
        fbq.callMethod ? fbq.callMethod.apply(fbq, args) : fbq.queue.push(args)
      }
      fbq.push = fbq
      fbq.loaded = true
      fbq.version = '2.0'
      fbq.queue = []
      ;(window as any).fbq = fbq
      ;(window as any)._fbq = fbq

      const script = document.createElement('script')
      script.async = true
      script.src = 'https://connect.facebook.net/en_US/fbevents.js'
      document.head.appendChild(script)

      fbq('init', PIXEL_ID)
    }

    ;(window as any).fbq('track', 'PageView')

    if (pathname === '/thank-you' || pathname === '/free/thank-you') {
      ;(window as any).fbq('track', 'Lead')
    }
  }, [pathname])

  return null
}
