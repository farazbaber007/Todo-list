import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TODO APP',
  description: 'created by Faraz',
}

export default function RootLayout({ children }:{ children:React.ReactNode }) {
  return (
    <html lang="en">
      {/*  use templae string `` for adding properties in ClassName variable concatenate */}
      <body className={`${inter.className} bg-slate-500 text-slate-200`} >{children}</body>
    </html>
  )
}
