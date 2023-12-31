import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <script src='https://www.youtube.com/iframe_api'></script>
    </head>
      <body className={inter.className}>
        <div>
          <h1>YouTube埋め込みテスト！！！</h1>
        </div>
        {children}
      </body>
    </html>
  )
}
