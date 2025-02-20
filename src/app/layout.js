import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Owen Taylor | Design',
  description: 'Soem web design stuff!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
              <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link>
        </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
