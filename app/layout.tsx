import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import ExcelLayout from '../components/ExcelLayout'

export const metadata: Metadata = {
  title: "Jeremy Excel",
  description:
    'Master Excel. Build your business. Free tutorials, premium templates, and 1-on-1 coaching.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <ExcelLayout>{children}</ExcelLayout>
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2975230469406065');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  )
}
