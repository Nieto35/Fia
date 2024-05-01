import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LangProvider } from '../context/langContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  icons: {
    icon: '/delivery.png'
  },
  title: 'Fia Valencia',
  description: 'Pagina para comprar comida de fia Valencia.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const styleObject = { backgroundColor: 'white' }
  return (
    <html>
      <head>
        <link rel="icon" type="image/x-icon" href="/delivery.ico" />
      </head>
      <body className={`${inter.className} bg-white`} style={styleObject}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  )
}
