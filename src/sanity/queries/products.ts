// src/sanity/queries/products.ts
import { client } from '../lib/client'

// Definer interface for produkt-strukturen
export interface Product {
  _id: string
  title: string
  description?: string  // ? betyr at feltet er valgfritt
  price?: number
  category: string
}

export const productsQuery = `
  *[_type == "products"]{
    _id,
    title,
    description,
    price,
    category
  }
`

export async function getProducts(): Promise<Product[]> {
  try {
    console.log('Starter spørring mot Sanity...')
    
    const products = await client.fetch<Product[]>(productsQuery)
    
    // Logger hvert produkt og deres kategorier
    console.log('Produkter fra Sanity:')
    products.forEach((product: Product) => {
      console.log(`- ${product.title}: kategori = "${product.category}"`)
    })
    
    // Logger unike kategorier
    const uniqueCategories = [...new Set(products.map((p: Product) => p.category))]
    console.log('Unike kategorier i databasen:', uniqueCategories)
    
    return products
  } catch (error) {
    console.error('Feil ved henting av produkter fra Sanity:', error)
    throw error
  }
}

interface SanityConnectionResult {
  success: boolean
  productCount?: number
  categories?: string[]
  error?: unknown
}

export async function checkSanityConnection(): Promise<SanityConnectionResult> {
  try {
    const products = await client.fetch<Product[]>('*[_type == "products"]')
    const categories = [...new Set(products.map((p: Product) => p.category))]
    
    return { 
      success: true, 
      productCount: products.length,
      categories
    }
  } catch (error) {
    console.error('Feil ved sjekk av Sanity-tilkobling:', error)
    return { success: false, error }
  }
}