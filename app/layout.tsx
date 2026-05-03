import type { Metadata } from 'next'
import './globals.css'
import ExcelLayout from '../components/ExcelLayout'
import FacebookPixel from '../components/FacebookPixel'

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
        <FacebookPixel />
      </body>
    </html>
  )
}
