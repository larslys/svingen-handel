import { getProducts, checkSanityConnection } from '@/sanity/queries'
import ProductList from './components/ProductList'

export default async function ProdukterPage() {
  try {
    // Sjekk først tilkoblingen til Sanity
    const connectionStatus = await checkSanityConnection()
    console.log('Sanity tilkoblingsstatus:', connectionStatus)
    
    // Hvis tilkoblingen er OK, hent produkter
    if (connectionStatus.success) {
      const products = await getProducts()
      return <ProductList products={products} />
    } else {
      return <div className="p-8">
        <h2 className="text-xl font-bold mb-4">Problem med tilkobling til databasen</h2>
        <p>Vennligst sjekk at Sanity er riktig konfigurert.</p>
      </div>
    }
  } catch (error) {
    console.error('Feil ved henting av produkter:', error)
    return <div className="p-8">
      <h2 className="text-xl font-bold mb-4">Det oppstod en feil</h2>
      <p>Kunne ikke hente produkter. Vennligst prøv igjen senere.</p>
    </div>
  }
}