import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Theme } from '@radix-ui/themes';
import Navbar from '@/components/Navbar';
import './globals.css'
import '@radix-ui/themes/styles.css';
import ContextProvider from '@/context/GlobalContext';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Task Manager',
  description: 'Aplicación de manejo de tareas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ContextProvider>
          <Theme appearance='dark'>
            <Navbar />
            {children}
          </Theme>
        </ContextProvider>
      </body>
    </html >
  )
}
