import './globals.css'
import { getContactInfo } from '@/sanity/queries/contact'
import type { ContactInfo } from '@/sanity/queries/contact'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

// Lag en enkel Lock-komponent øverst i filen
const LockIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="inline-block"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
  </svg>
)


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let contactInfo: ContactInfo | null = null
  
  try {
    contactInfo = await getContactInfo()
  } catch (error) {
    console.error('Feil ved henting av kontaktinfo:', error)
    // Default verdier hvis noe går galt
    contactInfo = {
      address: 'Kontakt oss for adresse',
      phone: 'Kontakt oss for telefonnummer',
      email: 'Kontakt oss for e-post',
      hours: {
        weekdays: 'Se oppslag',
        saturday: 'Se oppslag',
        sunday: 'Se oppslag'
      }
    }
  }
  
  return (
    <html lang="nb">
      <body className="bg-amber-50 min-h-screen flex flex-col">
        <header className="bg-orange-100 border-b-4 border-amber-200">
          <Navigation />
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
                  <p>Mandag - Fredag: {contactInfo?.hours?.weekdays || 'Se oppslag'}</p>
                  <p>Lørdag: {contactInfo?.hours?.saturday || 'Se oppslag'}</p>
                  <p>Søndag: {contactInfo?.hours?.sunday || 'Se oppslag'}</p>
                </div>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Kontakt</h3>
                <div className="space-y-2 text-amber-800">
                  <p>Telefon: {contactInfo?.phone || 'Kontakt oss'}</p>
                  <p>E-post: {contactInfo?.email || 'Kontakt oss'}</p>
                </div>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-serif font-bold text-amber-900 mb-4">Besøk oss</h3>
                <div className="space-y-2 text-amber-800">
                  <p>{contactInfo?.address || 'Kontakt oss for adresse'}</p>
                </div>
              </div>
            </div>

            <Link 
              href="/studio" 
              className="inline-flex items-center gap-2 text-sm text-amber-700 hover:text-amber-900 transition-colors"
              title="Administrer nettside"
            >
              Administrer <LockIcon />
            </Link>

          </div>
        </footer>
      </body>
    </html>
  )
}