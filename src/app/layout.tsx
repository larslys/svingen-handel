"use client"
import './globals.css'
import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <html lang="nb">
      <body className="bg-amber-50 min-h-screen flex flex-col">
        <header className="bg-orange-100 border-b-4 border-amber-200">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20">
              <div className="flex items-center">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                  <h1 className="text-2xl font-serif font-bold text-amber-900">{siteConfig.name}</h1>
                </div>
                
                {/* Desktop Navigation */}
                <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                  <Link href="/" className="inline-flex items-center px-2 pt-1 font-serif text-lg text-amber-900 hover:text-amber-700">
                    Hjem
                  </Link>
                  <Link href="/om-oss" className="inline-flex items-center px-2 pt-1 font-serif text-lg text-amber-800 hover:text-amber-700">
                    Om oss
                  </Link>
                  <Link href="/produkter" className="inline-flex items-center px-2 pt-1 font-serif text-lg text-amber-800 hover:text-amber-700">
                    Produkter
                  </Link>
                  <Link href="/kontakt" className="inline-flex items-center px-2 pt-1 font-serif text-lg text-amber-800 hover:text-amber-700">
                    Kontakt
                  </Link>
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="flex items-center sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-amber-900 hover:text-amber-700 focus:outline-none"
                >
                  <span className="sr-only">Åpne meny</span>
                  {/* Hamburger icon */}
                  <svg
                    className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  {/* Close icon */}
                  <svg
                    className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden pb-4`}>
              <div className="flex flex-col space-y-2">
                <Link
                  href="/"
                  className="px-3 py-2 rounded-md text-base font-medium text-amber-900 hover:text-amber-700 hover:bg-orange-200"
                  onClick={() => setIsMenuOpen(false)} 
                >
                  Hjem
                </Link>
                <Link
                  href="/om-oss"
                  className="px-3 py-2 rounded-md text-base font-medium text-amber-900 hover:text-amber-700 hover:bg-orange-200"
                  onClick={() => setIsMenuOpen(false)} 
                >
                  Om oss
                </Link>
                <Link
                  href="/produkter"
                  className="px-3 py-2 rounded-md text-base font-medium text-amber-900 hover:text-amber-700 hover:bg-orange-200"
                  onClick={() => setIsMenuOpen(false)} 
                >
                  Produkter
                </Link>
                <Link
                  href="/kontakt"
                  className="px-3 py-2 rounded-md text-base font-medium text-amber-900 hover:text-amber-700 hover:bg-orange-200"
                  onClick={() => setIsMenuOpen(false)} 
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </nav>
        </header>

        <main className="flex-grow bg-amber-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </div>
        </main>

        <footer className="bg-orange-100 border-t-4 border-amber-200 mt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-amber-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Åpningstider</h3>
                <div className="space-y-2 text-amber-800">
                  <p>Mandag - Fredag: {siteConfig.hours.weekdays}</p>
                  <p>Lørdag: {siteConfig.hours.saturday}</p>
                  <p>Søndag: {siteConfig.hours.sunday}</p>
                </div>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Kontakt</h3>
                <div className="space-y-2 text-amber-800">
                  <p>Telefon: {siteConfig.contact.phone}</p>
                  <p>E-post: {siteConfig.contact.email}</p>
                </div>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Besøk oss</h3>
                <div className="space-y-2 text-amber-800">
                  <p>{siteConfig.contact.address}</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}