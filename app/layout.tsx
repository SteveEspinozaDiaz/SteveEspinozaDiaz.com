import './globals.css'
import { Inter } from 'next/font/google'

import HeaderMain from '@/data/components/layout/HeaderMain'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Steve Espinoza Diaz',
  description: 'SteveEspinozaDiaz.com',
}

export default function RootLayout({children,}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/stackoverflow-dark.min.css" integrity="sha512-Xn1b0y/BrCD7usnEh6r9CcKxHXFVleVUjGDnfc95zDDwFUwtOz3lJC/XtJcuLRNyrMQJEEToFfwjC9Ue/aWY/g==" crossOrigin="anonymous" referrerPolicy="no-referrer" />        
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.min.css" integrity="sha384-3UiQGuEI4TTMaFmGIZumfRPtfKQ3trwQE2JgosJxCnGmQpL/lJdjpcHkaaFwHlcI" crossOrigin="anonymous"></link>
      </head>
      <body className={`${inter.className} text-slate-950 dark:text-slate-50 bg-yellow-500`}>
        <HeaderMain />
        {children}
      </body>
    </html>
  )
}
