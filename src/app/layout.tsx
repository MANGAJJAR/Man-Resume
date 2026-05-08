import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Spotlight from '@/components/Spotlight'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Man Gajjar',
  description: 'Man Gajjar is an ML Engineer who builds intelligent, scalable machine learning solutions powered by data.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-navy text-slate-light selection:bg-teal selection:text-navy-light leading-relaxed antialiased selection:bg-teal/30 selection:text-teal-light`}>
        <div className="relative">
          <Spotlight />
          {children}
        </div>
      </body>
    </html>
  )
}
